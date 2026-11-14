/**
 * ГеоАтлас v10.0 — StorageAdapter (6-tuple SRS state, CloudStorage + LocalStorage + Legacy Migration)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const STATUS_MAP = ['new', 'learning', 'mastered', 'review'];
  const WEAK_MAP = [null, 'map', 'theory', 'both'];

  const LS_STATES_KEY = 'geoatlas_v10_states';
  const LS_META_KEY = 'geoatlas_v10_meta';
  const LEGACY_NOMEN_KEY = 'geoatlas_nomen_states';
  const LEGACY_CONT_KEY = 'geoatlas_cont_anki_states';
  const LEGACY_META_V9_KEY = 'geoatlas_v9_meta';

  const CLOUD_PREFIX = 'geo_v9_m';
  const CLOUD_META_KEY = 'geo_v9_meta';

  const LEGACY_CONT_ID_MAP = {
    eurasia_area: 'm1_cont_eurasia_area',
    eurasia_shubaev: 'm1_cont_eurasia_shubaev',
    eurasia_peak: 'm1_cont_eurasia_peak',
    eurasia_depr: 'm1_cont_eurasia_depr',
    africa_area: 'm1_cont_africa_area',
    africa_peak: 'm1_cont_africa_peak',
    africa_depr: 'm1_cont_africa_depr',
    north_america_area: 'm1_cont_north_america_area',
    north_america_peak: 'm1_cont_north_america_peak',
    north_america_depr: 'm1_cont_north_america_depr',
    south_america_area: 'm1_cont_south_america_area',
    south_america_peak: 'm1_cont_south_america_peak',
    south_america_depr: 'm1_cont_south_america_depr',
    antarctica_area: 'm1_cont_antarctica_area',
    antarctica_peak: 'm1_cont_antarctica_peak',
    antarctica_depr: 'm1_cont_antarctica_depr',
    australia_area: 'm1_cont_australia_area',
    australia_peak: 'm1_cont_australia_peak',
    australia_depr: 'm1_cont_australia_depr',
    earth_total_area: 'm1_earth_total_area',
    earth_land_area: 'm1_earth_land_area',
    earth_ocean_area: 'm1_earth_ocean_area',
    earth_radius: 'm1_earth_radius',
    earth_equator: 'm1_earth_equator',
    oceania_melanesia: 'm1_oceania_melanesia',
    oceania_micronesia: 'm1_oceania_micronesia',
    oceania_polynesia: 'm1_oceania_polynesia',
    bermuda_triangle_quiz: 'm1_bermuda_triangle'
  };

  function encodeState(s) {
    if (!s) return null;
    const stCode = Math.max(0, STATUS_MAP.indexOf(s.status || 'new'));
    const weakCode = Math.max(0, WEAK_MAP.indexOf(s.weakSpot || null));
    const lastMin = s.lastReviewedAt ? Math.round(s.lastReviewedAt / 60000) : 0;
    return [
      stCode,
      Number(s.reps) || 0,
      Number(s.lapses) || 0,
      Number(s.dueStep) || 0,
      lastMin,
      weakCode
    ];
  }

  function decodeState(arr) {
    if (!Array.isArray(arr)) return null;
    const status = STATUS_MAP[arr[0]] || 'new';
    const weakSpot = arr.length >= 6 ? WEAK_MAP[arr[5]] || null : null;
    const lastReviewedAt = arr[4] ? Number(arr[4]) * 60000 : 0;
    return {
      status,
      reps: Number(arr[1]) || 0,
      lapses: Number(arr[2]) || 0,
      dueStep: Number(arr[3]) || 0,
      lastReviewedAt,
      weakSpot
    };
  }

  function defaultMeta() {
    return {
      scope: 'full',
      depthPreset: 'essentials',
      layerId: 'esri_phys',
      muted: false,
      showLabelsInAtlas: true,
      sessionStep: 0,
      exploredSections: {},
      customModules: {
        module1: { capes: true, continentsEarth: true, islands: false, peninsulas: false },
        module2: { mountainAge: true, volcanoType: true, depressionSign: true, plains: true },
        module3: { seaType: true, straitConnects: true, gulfOcean: true, trenchDepth: true, currentTemp: true },
        module4: { riverBasin: true, waterfallHeight: false, lakeOrigin: true }
      }
    };
  }

  function mapLegacyContinentId(rawId) {
    if (!rawId) return null;
    if (LEGACY_CONT_ID_MAP[rawId]) return LEGACY_CONT_ID_MAP[rawId];
    if (rawId.startsWith('desert_term_')) {
      return 'm1_desert_' + rawId.slice('desert_term_'.length);
    }
    if (rawId.includes('_cape_')) {
      const normalized = rawId.replace(/^m1_cape_/, '');
      return 'm1_cape_' + normalized;
    }
    return rawId;
  }

  const StorageAdapter = {
    defaultMeta,

    _safeParse(str) {
      if (!str || typeof str !== 'string') return null;
      try {
        return JSON.parse(str);
      } catch (_) {
        return null;
      }
    },

    _readLS(key) {
      try {
        return global.localStorage ? global.localStorage.getItem(key) : null;
      } catch (_) {
        return null;
      }
    },

    _writeLS(key, val) {
      try {
        if (global.localStorage) {
          global.localStorage.setItem(key, val);
        }
      } catch (_) {}
    },

    _migrateLegacyStates() {
      const merged = {};
      const legacyNomen = this._safeParse(this._readLS(LEGACY_NOMEN_KEY));
      if (legacyNomen && typeof legacyNomen === 'object') {
        Object.keys(legacyNomen).forEach((id) => {
          const st = legacyNomen[id];
          if (Array.isArray(st)) {
            merged[id] = decodeState(st);
          } else if (st && typeof st === 'object') {
            merged[id] = {
              status: st.status || 'new',
              reps: Number(st.reps) || 0,
              lapses: Number(st.lapses) || 0,
              dueStep: Number(st.dueStep) || 0,
              lastReviewedAt: Number(st.lastReviewedAt) || 0,
              weakSpot: st.weakSpot || null
            };
          }
        });
      }

      const legacyCont = this._safeParse(this._readLS(LEGACY_CONT_KEY));
      if (legacyCont && typeof legacyCont === 'object') {
        Object.keys(legacyCont).forEach((rawId) => {
          const mappedId = mapLegacyContinentId(rawId);
          const st = legacyCont[rawId];
          if (!mappedId || !st) return;
          if (Array.isArray(st)) {
            merged[mappedId] = decodeState(st);
          } else if (typeof st === 'object') {
            merged[mappedId] = {
              status: st.status || (st.reps >= 2 ? 'mastered' : st.reps >= 1 ? 'learning' : 'new'),
              reps: Number(st.reps) || 0,
              lapses: Number(st.lapses) || 0,
              dueStep: Number(st.dueStep) || 0,
              lastReviewedAt: Number(st.lastReviewedAt) || 0,
              weakSpot: st.weakSpot || null
            };
          }
        });
      }
      return merged;
    },

    _loadLocal() {
      const states = {};
      const v10Raw = this._safeParse(this._readLS(LS_STATES_KEY));
      if (v10Raw && typeof v10Raw === 'object') {
        Object.keys(v10Raw).forEach((id) => {
          const val = v10Raw[id];
          const decoded = Array.isArray(val) ? decodeState(val) : val;
          if (decoded) states[id] = decoded;
        });
      } else {
        Object.assign(states, this._migrateLegacyStates());
      }

      const meta = defaultMeta();
      const v10Meta = this._safeParse(this._readLS(LS_META_KEY));
      const v9Meta = !v10Meta ? this._safeParse(this._readLS(LEGACY_META_V9_KEY)) : null;
      const srcMeta = v10Meta || v9Meta;
      if (srcMeta && typeof srcMeta === 'object') {
        if (srcMeta.scope === 'landmarks' || srcMeta.scope === 'full') meta.scope = srcMeta.scope;
        meta.depthPreset = 'essentials';
        if (['esri_phys', 'esri_sat', 'vector_offline'].includes(srcMeta.layerId)) {
          meta.layerId = srcMeta.layerId;
        }
        if (typeof srcMeta.muted === 'boolean') meta.muted = srcMeta.muted;
        if (typeof srcMeta.showLabelsInAtlas === 'boolean') meta.showLabelsInAtlas = srcMeta.showLabelsInAtlas;
        if (typeof srcMeta.sessionStep === 'number') meta.sessionStep = srcMeta.sessionStep;
        if (srcMeta.exploredSections && typeof srcMeta.exploredSections === 'object') {
          Object.keys(srcMeta.exploredSections).forEach((k) => {
            if (srcMeta.exploredSections[k]) meta.exploredSections[k] = true;
          });
        }
        if (srcMeta.customModules && typeof srcMeta.customModules === 'object') {
          ['module1', 'module2', 'module3', 'module4'].forEach((m) => {
            if (srcMeta.customModules[m]) {
              meta.customModules[m] = Object.assign({}, meta.customModules[m], srcMeta.customModules[m]);
            }
          });
        }
      }
      return { states, meta };
    },

    load(callback) {
      const local = this._loadLocal();
      const cs = GeoAtlas.TelegramBridge ? GeoAtlas.TelegramBridge.getCloudStorage() : null;
      if (!cs) {
        callback(local);
        return;
      }
      const keys = [CLOUD_META_KEY];
      for (let i = 1; i <= 4; i++) {
        keys.push(`${CLOUD_PREFIX}${i}`, `${CLOUD_PREFIX}${i}_b`);
      }
      try {
        cs.getItems(keys, (err, values) => {
          if (err || !values) {
            callback(local);
            return;
          }
          const cloudStates = {};
          for (let i = 1; i <= 4; i++) {
            const p1 = this._safeParse(values[`${CLOUD_PREFIX}${i}`]);
            const p2 = this._safeParse(values[`${CLOUD_PREFIX}${i}_b`]);
            [p1, p2].forEach((chunk) => {
              if (!chunk || typeof chunk !== 'object') return;
              Object.keys(chunk).forEach((id) => {
                const decoded = decodeState(chunk[id]);
                if (decoded) cloudStates[id] = decoded;
              });
            });
          }
          const cloudMeta = this._safeParse(values[CLOUD_META_KEY]);
          const mergedStates = Object.assign({}, local.states);
          Object.keys(cloudStates).forEach((id) => {
            const c = cloudStates[id];
            const l = mergedStates[id];
            if (!l || (c.lastReviewedAt || 0) >= (l.lastReviewedAt || 0)) {
              mergedStates[id] = c;
            }
          });
          const mergedMeta = Object.assign({}, local.meta, cloudMeta || {});
          mergedMeta.exploredSections = Object.assign(
            {},
            local.meta.exploredSections || {},
            (cloudMeta && cloudMeta.exploredSections) || {}
          );
          callback({ states: mergedStates, meta: mergedMeta });
        });
      } catch (_) {
        callback(local);
      }
    },

    saveStates(states) {
      const compact = {};
      Object.keys(states).forEach((id) => {
        const s = states[id];
        if (!s || s.status === 'new') return;
        compact[id] = encodeState(s);
      });
      this._writeLS(LS_STATES_KEY, JSON.stringify(compact));

      const cs = GeoAtlas.TelegramBridge ? GeoAtlas.TelegramBridge.getCloudStorage() : null;
      if (!cs) return;

      const byMod = { 1: {}, 2: {}, 3: {}, 4: {} };
      Object.keys(compact).forEach((id) => {
        const m = id.startsWith('m2_') ? 2 : id.startsWith('m3_') ? 3 : id.startsWith('m4_') ? 4 : 1;
        byMod[m][id] = compact[id];
      });
      [1, 2, 3, 4].forEach((m) => {
        const entries = Object.entries(byMod[m]);
        const fullStr = JSON.stringify(byMod[m]);
        const keyA = `${CLOUD_PREFIX}${m}`;
        const keyB = `${CLOUD_PREFIX}${m}_b`;
        try {
          if (fullStr.length <= 3800) {
            cs.setItem(keyA, fullStr);
            cs.removeItem(keyB);
          } else {
            const half = Math.ceil(entries.length / 2);
            cs.setItem(keyA, JSON.stringify(Object.fromEntries(entries.slice(0, half))));
            cs.setItem(keyB, JSON.stringify(Object.fromEntries(entries.slice(half))));
          }
        } catch (_) {}
      });
    },

    saveMeta(meta) {
      this._writeLS(LS_META_KEY, JSON.stringify(meta));
      const cs = GeoAtlas.TelegramBridge ? GeoAtlas.TelegramBridge.getCloudStorage() : null;
      if (cs) {
        try {
          cs.setItem(CLOUD_META_KEY, JSON.stringify(meta));
        } catch (_) {}
      }
    },

    clearStates(states, moduleId) {
      if (!moduleId) {
        Object.keys(states).forEach((k) => delete states[k]);
      } else {
        const prefix = moduleId === 'module1' ? 'm1_' : moduleId === 'module2' ? 'm2_' : moduleId === 'module3' ? 'm3_' : 'm4_';
        Object.keys(states).forEach((k) => {
          if (k.startsWith(prefix) || (moduleId === 'module1' && !/^m[234]_/.test(k))) {
            delete states[k];
          }
        });
      }
      this.saveStates(states);
    }
  };

  GeoAtlas.StorageAdapter = StorageAdapter;
})(window);
