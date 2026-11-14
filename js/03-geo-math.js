/**
 * ГеоАтлас / Тренажер ОЗК — GeoMath (Normalized Bounds, Polylines, Antimeridian, 8-Rhumb Compass, Basic->Niche Order)
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

  const MACROREGION_LABELS = {
    belarus_ee: 'Восточная Европа',
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

  function normalizeBounds(bounds) {
    if (!Array.isArray(bounds)) return null;
    if (bounds.length === 4 && typeof bounds[0] === 'number') {
      const [s, w, n, e] = bounds.map(Number);
      if ([s, w, n, e].some(Number.isNaN)) return null;
      return [
        [Math.min(s, n), w],
        [Math.max(s, n), e]
      ];
    }
    if (bounds.length === 2 && Array.isArray(bounds[0]) && Array.isArray(bounds[1])) {
      const [s, w] = bounds[0].map(Number);
      const [n, e] = bounds[1].map(Number);
      if ([s, w, n, e].some(Number.isNaN)) return null;
      return [
        [Math.min(s, n), w],
        [Math.max(s, n), e]
      ];
    }
    return null;
  }

  function isOralTheoryItem(item) {
    if (!item) return false;
    return (
      item.geometryType === 'none' ||
      item.geometryType === 'region_focus' ||
      item.submoduleId === 'm1_continents_earth'
    );
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
    return Math.hypot(ax + t * dx, ay + t * dy);
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
    if (Array.isArray(item.coords) && item.coords.length > 0) {
      const mid = item.coords[Math.floor(item.coords.length / 2)];
      return { lat: Number(mid[0]) || 0, lng: Number(mid[1]) || 0 };
    }
    if (typeof item.lat === 'number' && typeof item.lng === 'number' && (item.lat !== 0 || item.lng !== 0)) {
      return { lat: item.lat, lng: item.lng };
    }
    const nb = normalizeBounds(item.bounds);
    if (nb) {
      const [[minLat, minLng], [maxLat, maxLng]] = nb;
      return {
        lat: (minLat + maxLat) / 2,
        lng: normalizeLng((minLng + maxLng) / 2)
      };
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
    const nb = item ? normalizeBounds(item.bounds) : null;
    const customRadius = item && typeof item.hitRadiusKm === 'number' ? item.hitRadiusKm : 0;

    let baseTol = 180;
    if (nb) {
      baseTol = z <= 3 ? 210 : z <= 5 ? 150 : 100;
    } else if (isLine) {
      baseTol = z <= 2 ? 260 : z <= 4 ? 195 : z <= 6 ? 145 : 110;
    } else {
      baseTol = z <= 2 ? 250 : z <= 4 ? 185 : z <= 6 ? 130 : 85;
    }

    if (customRadius > 0 && !nb) {
      return Math.max(baseTol, Math.min(customRadius, 450));
    }
    return baseTol;
  }

  function checkSpatialHit(clickLat, clickLng, item, zoom = 3) {
    if (!item || isOralTheoryItem(item)) {
      return { hit: true, distKm: 0, targetLat: 0, targetLng: 0 };
    }
    const tolKm = getToleranceKm(item, zoom);
    const center = getItemCenter(item);
    const nb = normalizeBounds(item.bounds);

    if (nb) {
      const [[minLat, minLng], [maxLat, maxLng]] = nb;
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
    const text = `${item.region || ''} ${item.continent || ''}`.toLowerCase();
    const { lat, lng } = getItemCenter(item);

    if (text.includes('беларус') || (lat >= 51 && lat <= 56.5 && lng >= 23 && lng <= 33)) return 'belarus_ee';
    if (text.includes('антаркт') || lat <= -58) return 'antarctica_oceans';
    if (text.includes('южная америк') || (lat < 13 && lng >= -85 && lng <= -32)) return 'south_america';
    if (text.includes('северная америк') || (lat >= 7 && lng >= -172 && lng <= -50)) return 'north_america';
    if (text.includes('австрал') || text.includes('океани') || (lat <= 0 && lng >= 110 && lng <= 180) || (lat <= -10 && lng <= -120)) return 'australia_oceania';
    if (text.includes('африк') || (lat >= -36 && lat <= 37.5 && lng >= -19 && lng <= 52 && !(lat >= 28 && lng >= 25))) return 'africa';
    if (lat >= 46 && lng >= 33 && lng <= 180) return 'asia_nc';
    if (lat >= 35 && lng >= -25 && lng < 48) return 'europe';
    if (lng >= 26 && lng <= 180 && lat >= -12) return 'asia_foreign';
    return 'antarctica_oceans';
  }

  function sortItemsBasicToNiche(items, getStateFn = null) {
    if (!Array.isArray(items)) return [];
    return items.slice().sort((a, b) => {
      const sa = getStateFn ? getStateFn(a.id) : null;
      const sb = getStateFn ? getStateFn(b.id) : null;

      // Priority 1: Weak/unmastered ahead of already mastered
      const aWeak = sa && sa.weakSpot ? 0 : 1;
      const bWeak = sb && sb.weakSpot ? 0 : 1;
      if (aWeak !== bWeak) return aWeak - bWeak;

      const aMast = sa && sa.status === 'mastered' && (sa.reps || 0) >= 2 ? 1 : 0;
      const bMast = sb && sb.status === 'mastered' && (sb.reps || 0) >= 2 ? 1 : 0;
      if (aMast !== bMast) return aMast - bMast;

      // Priority 2: Core landmarks (basic) first, niche objects progressively later
      const aCore = a.isCoreLandmark ? 0 : 1;
      const bCore = b.isCoreLandmark ? 0 : 1;
      if (aCore !== bCore) return aCore - bCore;

      // Priority 3: Keep objects grouped neatly by macroregion
      const ma = getMacroregion(a);
      const mb = getMacroregion(b);
      if (ma !== mb) return ma.localeCompare(mb);

      return 0;
    });
  }

  GeoAtlas.GeoMath = {
    normalizeLng,
    shortestLngDelta,
    normalizeBounds,
    isOralTheoryItem,
    calcDistanceKm,
    calcPolylineDistanceKm,
    calcCompass8Rhumb,
    getToleranceKm,
    checkSpatialHit,
    getItemCenter,
    getMacroregion,
    MACROREGION_LABELS,
    sortItemsBasicToNiche,
    sortItemsSpatially: sortItemsBasicToNiche
  };
})(window);
