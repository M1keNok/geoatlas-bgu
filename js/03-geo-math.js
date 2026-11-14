/**
 * ГеоАтлас v10.0 — GeoMath & Spatial Clustering (Polylines, Bounds, 8-Rhumb Compass, Neighbor Chains)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const EARTH_RADIUS_KM = 6371;
  const DEG_TO_RAD = Math.PI / 180;
  const RAD_TO_DEG = 180 / Math.PI;

  const COMPASS_8 = [
    { dir: 'С', arrow: '⬆️', label: 'севернее' },
    { dir: 'СВ', arrow: '↗️', label: 'северо-восточнее' },
    { dir: 'В', arrow: '➡️', label: 'восточнее' },
    { dir: 'ЮВ', arrow: '↘️', label: 'юго-восточнее' },
    { dir: 'Ю', arrow: '⬇️', label: 'южнее' },
    { dir: 'ЮЗ', arrow: '↙️', label: 'юго-западнее' },
    { dir: 'З', arrow: '⬅️', label: 'западнее' },
    { dir: 'СЗ', arrow: '↖️', label: 'северо-западнее' }
  ];

  const MACROREGION_ORDER = [
    'belarus_ee',
    'europe',
    'asia_nc',
    'asia_foreign',
    'africa',
    'north_america',
    'south_america',
    'australia_oceania',
    'antarctica_oceans'
  ];

  const MACROREGION_LABELS = {
    belarus_ee: 'Беларусь и Восточная Европа',
    europe: 'Зарубежная Европа',
    asia_nc: 'Северная и Центральная Азия',
    asia_foreign: 'Зарубежная Азия',
    africa: 'Африка',
    north_america: 'Северная Америка',
    south_america: 'Южная Америка',
    australia_oceania: 'Австралия и Океания',
    antarctica_oceans: 'Антарктида и Океаны'
  };

  function normalizeLng(lng) {
    let x = ((Number(lng) + 180) % 360 + 360) % 360 - 180;
    return x === -180 ? 180 : x;
  }

  function shortestLngDelta(fromLng, toLng) {
    return ((toLng - fromLng + 540) % 360) - 180;
  }

  function calcDistanceKm(lat1, lng1, lat2, lng2) {
    const p1 = lat1 * DEG_TO_RAD;
    const p2 = lat2 * DEG_TO_RAD;
    const dLat = (lat2 - lat1) * DEG_TO_RAD;
    const dLng = shortestLngDelta(lng1, lng2) * DEG_TO_RAD;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(p1) * Math.cos(p2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * EARTH_RADIUS_KM * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function pointToSegmentDistanceKm(pLat, pLng, aLat, aLng, bLat, bLng) {
    const cosLat = Math.max(0.15, Math.cos(pLat * DEG_TO_RAD));
    const kmPerDegLat = 111.32;
    const kmPerDegLng = 111.32 * cosLat;

    const ax = shortestLngDelta(pLng, aLng) * kmPerDegLng;
    const ay = (aLat - pLat) * kmPerDegLat;
    const bx = shortestLngDelta(pLng, bLng) * kmPerDegLng;
    const by = (bLat - pLat) * kmPerDegLat;

    const dx = bx - ax;
    const dy = by - ay;
    const lenSq = dx * dx + dy * dy;
    if (lenSq < 1e-9) {
      return Math.hypot(ax, ay);
    }
    const t = Math.max(0, Math.min(1, -(ax * dx + ay * dy) / lenSq));
    const projX = ax + t * dx;
    const projY = ay + t * dy;
    return Math.hypot(projX, projY);
  }

  function calcPolylineDistanceKm(lat, lng, coords) {
    if (!Array.isArray(coords) || coords.length === 0) return Infinity;
    if (coords.length === 1) {
      return calcDistanceKm(lat, lng, coords[0][0], coords[0][1]);
    }
    let minD = Infinity;
    for (let i = 0; i < coords.length - 1; i++) {
      const a = coords[i];
      const b = coords[i + 1];
      if (!a || !b) continue;
      const d = pointToSegmentDistanceKm(lat, lng, a[0], a[1], b[0], b[1]);
      if (d < minD) minD = d;
    }
    return minD;
  }

  function getItemCenter(item) {
    if (!item) return { lat: 0, lng: 0 };
    if (Array.isArray(item.bounds) && item.bounds.length === 2) {
      const [[minLat, minLng], [maxLat, maxLng]] = item.bounds;
      return {
        lat: (minLat + maxLat) / 2,
        lng: normalizeLng((minLng + maxLng) / 2)
      };
    }
    if (Array.isArray(item.coords) && item.coords.length > 0) {
      const mid = item.coords[Math.floor(item.coords.length / 2)];
      return { lat: Number(mid[0]) || 0, lng: Number(mid[1]) || 0 };
    }
    return { lat: Number(item.lat) || 0, lng: Number(item.lng) || 0 };
  }

  function calcCompass8Rhumb(fromLat, fromLng, toLat, toLng) {
    const lat1 = fromLat * DEG_TO_RAD;
    const lat2 = toLat * DEG_TO_RAD;
    const dLng = shortestLngDelta(fromLng, toLng) * DEG_TO_RAD;

    const y = Math.sin(dLng) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    let bearing = Math.atan2(y, x) * RAD_TO_DEG;
    bearing = (bearing + 360) % 360;
    const idx = Math.round(bearing / 45) % 8;
    const rhumb = COMPASS_8[idx];
    return {
      dir: rhumb.dir,
      arrow: rhumb.arrow,
      label: rhumb.label,
      bearing: Math.round(bearing)
    };
  }

  function getToleranceKm(item, zoom = 3) {
    const z = Number(zoom) || 3;
    const isLine = item && item.geometryType === 'polyline' && Array.isArray(item.coords);
    const isBbox = item && Array.isArray(item.bounds);

    if (isBbox) {
      if (z <= 3) return 210;
      if (z <= 5) return 150;
      return 100;
    }
    if (isLine) {
      if (z <= 2) return 260;
      if (z <= 4) return 195;
      if (z <= 6) return 145;
      return 110;
    }
    if (z <= 2) return 245;
    if (z <= 4) return 175;
    if (z <= 6) return 120;
    return 75;
  }

  function checkSpatialHit(clickLat, clickLng, item, zoom = 3) {
    if (!item || item.geometryType === 'none') {
      return { hit: true, distKm: 0, targetLat: 0, targetLng: 0 };
    }
    const tolKm = getToleranceKm(item, zoom);
    const center = getItemCenter(item);

    if (Array.isArray(item.bounds) && item.bounds.length === 2) {
      const [[minLat, minLng], [maxLat, maxLng]] = item.bounds;
      const clampedLat = Math.max(minLat, Math.min(maxLat, clickLat));
      let clampedLng = clickLng;
      if (minLng <= maxLng) {
        clampedLng = Math.max(minLng, Math.min(maxLng, clickLng));
      } else {
        const insideWrapped = clickLng >= minLng || clickLng <= maxLng;
        if (!insideWrapped) {
          const dMin = Math.abs(shortestLngDelta(clickLng, minLng));
          const dMax = Math.abs(shortestLngDelta(clickLng, maxLng));
          clampedLng = dMin <= dMax ? minLng : maxLng;
        }
      }
      const distKm = calcDistanceKm(clickLat, clickLng, clampedLat, clampedLng);
      return {
        hit: distKm <= tolKm,
        distKm: Math.round(distKm),
        targetLat: center.lat,
        targetLng: center.lng
      };
    }

    if (item.geometryType === 'polyline' && Array.isArray(item.coords) && item.coords.length >= 2) {
      const distKm = calcPolylineDistanceKm(clickLat, clickLng, item.coords);
      return {
        hit: distKm <= tolKm,
        distKm: Math.round(distKm),
        targetLat: center.lat,
        targetLng: center.lng
      };
    }

    const distKm = calcDistanceKm(clickLat, clickLng, center.lat, center.lng);
    return {
      hit: distKm <= tolKm,
      distKm: Math.round(distKm),
      targetLat: center.lat,
      targetLng: center.lng
    };
  }

  function getMacroregion(item) {
    if (!item) return 'antarctica_oceans';
    const reg = String(item.region || '').toLowerCase();
    const cont = String(item.continent || '').toLowerCase();
    const text = reg + ' ' + cont;

    if (item.geometryType === 'none') {
      if (cont.includes('евраз')) return 'asia_nc';
      if (cont.includes('африк')) return 'africa';
      if (cont.includes('северная америк')) return 'north_america';
      if (cont.includes('южная америк')) return 'south_america';
      if (cont.includes('австрал') || text.includes('океан')) return 'australia_oceania';
      return 'antarctica_oceans';
    }

    const { lat, lng } = getItemCenter(item);

    if (text.includes('беларус') || (lat >= 51 && lat <= 56.5 && lng >= 23 && lng <= 33)) {
      return 'belarus_ee';
    }
    if (text.includes('антаркт') || lat <= -58) {
      return 'antarctica_oceans';
    }
    if (text.includes('южная америк') || (lat < 13 && lng >= -85 && lng <= -32)) {
      return 'south_america';
    }
    if (text.includes('северная америк') || (lat >= 7 && lng >= -172 && lng <= -50)) {
      return 'north_america';
    }
    if (text.includes('австрал') || text.includes('океани') || (lat <= 0 && lng >= 110 && lng <= 180) || (lat <= -10 && lng <= -120)) {
      return 'australia_oceania';
    }
    if (text.includes('африк') || (lat >= -36 && lat <= 37.5 && lng >= -19 && lng <= 52 && !(lat >= 28 && lng >= 25))) {
      return 'africa';
    }
    if (lat >= 46 && lng >= 33 && lng <= 180) {
      return 'asia_nc';
    }
    if (lat >= 35 && lng >= -25 && lng < 48) {
      return 'europe';
    }
    if (lng >= 26 && lng <= 180 && lat >= -12) {
      return 'asia_foreign';
    }
    return 'antarctica_oceans';
  }

  function sortItemsSpatially(items) {
    if (!Array.isArray(items) || items.length <= 1) return (items || []).slice();
    const buckets = {};
    MACROREGION_ORDER.forEach((k) => (buckets[k] = []));

    items.forEach((it) => {
      const m = getMacroregion(it);
      (buckets[m] || buckets.antarctica_oceans).push(it);
    });

    const result = [];
    MACROREGION_ORDER.forEach((macro) => {
      const group = buckets[macro];
      if (!group || group.length === 0) return;

      const remaining = group.slice().sort((a, b) => {
        const ca = getItemCenter(a);
        const cb = getItemCenter(b);
        return cb.lat - ca.lat || ca.lng - cb.lng;
      });

      let current = remaining.shift();
      result.push(current);

      while (remaining.length > 0) {
        const curCenter = getItemCenter(current);
        let bestIdx = 0;
        let bestScore = Infinity;

        for (let i = 0; i < remaining.length; i++) {
          const cand = remaining[i];
          const cc = getItemCenter(cand);
          let d = calcDistanceKm(curCenter.lat, curCenter.lng, cc.lat, cc.lng);
          if (cand.geometryType === 'none' || current.geometryType === 'none') {
            d = cand.continent === current.continent ? 50 : 5000;
          }
          if (d < bestScore) {
            bestScore = d;
            bestIdx = i;
          }
        }
        current = remaining.splice(bestIdx, 1)[0];
        result.push(current);
      }
    });

    return result;
  }

  GeoAtlas.GeoMath = {
    normalizeLng,
    shortestLngDelta,
    calcDistanceKm,
    calcPolylineDistanceKm,
    calcCompass8Rhumb,
    getToleranceKm,
    checkSpatialHit,
    getItemCenter,
    getMacroregion,
    MACROREGION_LABELS,
    sortItemsSpatially
  };
})(window);
