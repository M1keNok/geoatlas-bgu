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
      const unwrappedE = w > e ? e + 360 : e;
      return [
        [Math.min(s, n), w],
        [Math.max(s, n), unwrappedE]
      ];
    }
    if (bounds.length === 2 && Array.isArray(bounds[0]) && Array.isArray(bounds[1])) {
      const [s, w] = bounds[0].map(Number);
      const [n, e] = bounds[1].map(Number);
      if ([s, w, n, e].some(Number.isNaN)) return null;
      const unwrappedE = w > e ? e + 360 : e;
      return [
        [Math.min(s, n), w],
        [Math.max(s, n), unwrappedE]
      ];
    }
    return null;
  }

  function unwrapAntimeridianCoords(coords) {
    if (!Array.isArray(coords) || coords.length === 0) return [];
    const out = [[Number(coords[0][0]) || 0, Number(coords[0][1]) || 0]];
    for (let i = 1; i < coords.length; i++) {
      const lat = Number(coords[i][0]) || 0;
      let lng = Number(coords[i][1]) || 0;
      const prevLng = out[i - 1][1];
      while (lng - prevLng > 180) lng -= 360;
      while (lng - prevLng < -180) lng += 360;
      out.push([lat, lng]);
    }
    return out;
  }

  function isOralTheoryItem(item) {
    if (!item) return false;
    return (
      item.geometryType === 'none' ||
      item.geometryType === 'region_focus' ||
      Boolean(item.id && /^m3_sea_[a-z_]+_ocean$/.test(item.id))
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

  function pointToSegmentClosest(pLat, pLng, aLat, aLng, bLat, bLng) {
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
    const t = lenSq < 1e-9 ? 0 : Math.max(0, Math.min(1, -(ax * dx + ay * dy) / lenSq));
    const cx = ax + t * dx;
    const cy = ay + t * dy;
    return {
      distKm: Math.hypot(cx, cy),
      lat: pLat + cy / kmPerDegLat,
      lng: normalizeLng(pLng + cx / kmPerDegLng)
    };
  }

  function pointToSegmentDistanceKm(pLat, pLng, aLat, aLng, bLat, bLng) {
    return pointToSegmentClosest(pLat, pLng, aLat, aLng, bLat, bLng).distKm;
  }

  function calcPolylineClosest(lat, lng, coords) {
    if (!Array.isArray(coords) || coords.length === 0) return { distKm: Infinity, lat: 0, lng: 0 };
    if (coords.length === 1) {
      return {
        distKm: calcDistanceKm(lat, lng, coords[0][0], coords[0][1]),
        lat: Number(coords[0][0]) || 0,
        lng: normalizeLng(coords[0][1])
      };
    }
    let best = { distKm: Infinity, lat: Number(coords[0][0]) || 0, lng: normalizeLng(coords[0][1]) };
    for (let i = 0; i < coords.length - 1; i++) {
      const a = coords[i];
      const b = coords[i + 1];
      if (!a || !b) continue;
      const cur = pointToSegmentClosest(lat, lng, a[0], a[1], b[0], b[1]);
      if (cur.distKm < best.distKm) best = cur;
    }
    return best;
  }

  function calcPolylineDistanceKm(lat, lng, coords) {
    return calcPolylineClosest(lat, lng, coords).distKm;
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
    // Use Web Mercator screen-space bearing so hints match directions on the Leaflet map
    const clampMercLat = (lat) => Math.max(-85, Math.min(85, Number(lat) || 0));
    const mercY = (lat) => Math.log(Math.tan(Math.PI / 4 + (clampMercLat(lat) * DEG_TO_RAD) / 2));
    const dx = shortestLngDelta(fromLng, toLng) * DEG_TO_RAD;
    const dy = mercY(toLat) - mercY(fromLat);

    let bearing = Math.atan2(dx, dy) * RAD_TO_DEG;
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
      if (minLng <= maxLng && maxLng <= 180) {
        clampedLng = Math.max(minLng, Math.min(maxLng, clickLng));
      } else {
        const adjClick = clickLng < minLng - 180 ? clickLng + 360 : clickLng;
        clampedLng = Math.max(minLng, Math.min(maxLng, adjClick));
      }
      const distKm = calcDistanceKm(clickLat, clickLng, clampedLat, clampedLng);
      return {
        hit: distKm <= tolKm,
        distKm: Math.round(distKm),
        targetLat: clampedLat,
        targetLng: normalizeLng(clampedLng)
      };
    }

    if (item.geometryType === 'polyline' && Array.isArray(item.coords) && item.coords.length >= 2) {
      const closest = calcPolylineClosest(clickLat, clickLng, item.coords);
      return {
        hit: closest.distKm <= tolKm,
        distKm: Math.round(closest.distKm),
        targetLat: closest.lat,
        targetLng: closest.lng
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

  function getBoardPriority(item) {
    if (!item) return 3;
    if (item.category === 'extreme_point' || item.category === 'capes') return 0;
    if (item.category === 'continent_peak' || item.category === 'continent_depr') return 1;
    if (isOralTheoryItem(item)) return 2;
    return 3;
  }

  function getContinentRank(it) {
    if (!it) return 99;
    const reg = (it.focusContinent || it.region || it.continent || '').toLowerCase();
    const id = (it.id || '').toLowerCase();
    if (reg.includes('северн') || id.includes('north_america')) return 1;
    if (reg.includes('южн') || id.includes('south_america')) return 2;
    if (reg.includes('африк') || id.includes('africa')) return 3;
    if (reg.includes('евраз') || id.includes('eurasia')) return 4;
    if (reg.includes('австрал') || reg.includes('океан') || id.includes('australia') || id.includes('oceania')) return 5;
    if (reg.includes('антаркт') || id.includes('antarctica')) return 6;
    return 7;
  }

  function getContinentItemRank(it) {
    if (!it) return 99;
    const id = (it.id || '').toLowerCase();
    if (it.category === 'extreme_point' || it.category === 'capes') {
      if (id.includes('_north')) return 0;
      if (id.includes('_south')) return 1;
      if (id.includes('_west')) return 2;
      if (id.includes('_east')) return 3;
      return 0;
    }
    if (id.includes('_shubaev')) return 10;
    if (id.includes('_area')) return 11;
    if (id === 'm1_oceania_division') return 12;
    if (it.category === 'continent_peak') return 20;
    if (it.category === 'continent_depr') return 21;
    return 30;
  }

  function getReviewTier(state, currentStep = 0) {
    if (!state) return 2;
    const reps = state.reps || 0;
    const isMastered = state.status === 'mastered' && reps >= 2;
    if (state.status && state.status !== 'new' && (state.dueStep || 0) <= currentStep) {
      return state.weakSpot ? 0 : 1; // Due item whose interval has elapsed
    }
    if (!state.status || state.status === 'new') return 2;
    if (!isMastered) return 3; // In-progress learning item not yet due
    return 4; // Mastered item not yet due
  }

  function sortItemsBasicToNiche(items, getStateFn = null, currentStep = 0, opts = {}) {
    if (!Array.isArray(items)) return [];
    const isM1ContinentsDeck =
      opts.submoduleId === 'm1_continents_earth' ||
      (items.length > 0 && items.every((x) => x.submoduleId === 'm1_continents_earth'));

    return items.slice().sort((a, b) => {
      const sa = getStateFn ? getStateFn(a.id) : null;
      const sb = getStateFn ? getStateFn(b.id) : null;

      // Priority 1: Weak -> Anki Due -> New -> Learning (not yet due) -> Mastered (not yet due)
      const tierA = getReviewTier(sa, currentStep);
      const tierB = getReviewTier(sb, currentStep);
      if (tierA !== tierB) return tierA - tierB;
      if (tierA === 1) {
        const dueDiff = (sa.dueStep || 0) - (sb.dueStep || 0);
        if (dueDiff !== 0) return dueDiff;
      }

      // Priority 2: For "m1_continents_earth" - group strictly by continent block
      if (isM1ContinentsDeck) {
        const ca = getContinentRank(a);
        const cb = getContinentRank(b);
        if (ca !== cb) return ca - cb;
        const ia = getContinentItemRank(a);
        const ib = getContinentItemRank(b);
        if (ia !== ib) return ia - ib;
        return 0;
      }

      // Priority 3: Board-exam opening order (Capes -> Continent Extremes -> Rest)
      const bpA = getBoardPriority(a);
      const bpB = getBoardPriority(b);
      if (bpA !== bpB) return bpA - bpB;

      // Priority 4: Core landmarks (basic) first, niche objects progressively later
      const aCore = a.isCoreLandmark ? 0 : 1;
      const bCore = b.isCoreLandmark ? 0 : 1;
      if (aCore !== bCore) return aCore - bCore;

      // Priority 5: Keep objects grouped neatly by macroregion
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
    unwrapAntimeridianCoords,
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
