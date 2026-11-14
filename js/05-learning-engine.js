/**
 * ГеоАтлас v10.0 — QuizConfig & LearningEngine (AutoCompositeSRS, WeakSpots, Spatial Batches)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const MODULE_ORDER = ['module1', 'module2', 'module3', 'module4'];

  function cleanValue(val) {
    if (val === undefined || val === null) return '';
    return String(val).trim();
  }

  const QuizConfig = {
    buildCardSpec(item, depthPreset = 'essentials', customModules = {}) {
      if (!item) return { requiresFlipCard: false };
      const isPureTheory = item.geometryType === 'none';

      if (depthPreset === 'map_only' && !isPureTheory) {
        return { requiresFlipCard: false };
      }

      const modKey = item.moduleId || 'module1';
      const modCfg = (customModules && customModules[modKey]) || {};
      const useCustom = depthPreset === 'custom_full';

      const facts = [];
      let prompt = '';
      let answer = '';
      let badge = item.categoryLabel || 'Справка';
      let enabled = false;

      if (item.submoduleId === 'm1_continents_earth') {
        enabled = !useCustom || modCfg.continentsEarth !== false;
        prompt = item.quizPrompt || item.name;
        answer = item.answerText || item.description || '';
        badge = item.continent || 'Материки и Земля';
        if (item.hint && item.hint !== answer) facts.push({ label: 'Пояснение', val: item.hint });
        if (item.formula) facts.push({ label: 'Примечание', val: item.formula });
      } else if (item.category === 'capes') {
        enabled = !useCustom || modCfg.capes !== false;
        prompt = 'Крайняя точка: какой это материк/регион и сторона света?';
        answer = [item.continent || item.region, item.hint || item.extremum].filter(Boolean).join(' · ');
        badge = 'Крайняя точка';
      } else if (item.category === 'islands' || item.category === 'peninsulas') {
        if (useCustom) {
          enabled = item.category === 'islands' ? !!modCfg.islands : !!modCfg.peninsulas;
        } else {
          enabled = false;
        }
        prompt = 'Где расположен объект (океан / регион)?';
        answer = [item.ocean, item.continent || item.region, item.description].filter(Boolean).join(' · ');
      } else if (item.category === 'mountains') {
        enabled = !useCustom || modCfg.mountainAge !== false;
        const age = cleanValue(item.foldingAge || item.age || item.epoch);
        const peak = cleanValue(item.highestPeak || item.maxHeight);
        if (age) {
          prompt = 'К какой эпохе складчатости относятся эти горы?';
          answer = age;
          badge = 'Орогенез';
          if (peak) facts.push({ label: 'Высшая точка', val: peak });
          if (item.continent || item.region) facts.push({ label: 'Регион', val: item.continent || item.region });
        }
      } else if (item.category === 'volcanoes') {
        enabled = !useCustom || modCfg.volcanoType !== false;
        const vType = cleanValue(item.volcanoType || item.status || item.activity);
        const h = cleanValue(item.height || item.elevation || item.maxHeight);
        if (vType || h) {
          prompt = 'Назовите состояние (тип) и примерную высоту вулкана';
          answer = [vType, h].filter(Boolean).join(' · ');
          badge = 'Вулкан';
        }
      } else if (item.submoduleId === 'm2_depressions' || item.category === 'depressions') {
        enabled = !useCustom || (modCfg.depressionSign !== false || modCfg.plains !== false);
        const elev = cleanValue(item.elevation || item.depth || item.minHeight);
        if (elev || item.region || item.continent) {
          prompt = 'В чём особенность отметки высоты этой впадины?';
          answer = [elev ? `${elev} (ниже уровня моря)` : 'Ниже уровня Мирового океана', item.region || item.continent]
            .filter(Boolean)
            .join(' · ');
          badge = 'Впадина';
        }
      } else if (item.category === 'plains') {
        enabled = !useCustom || modCfg.plains !== false;
        const typeStr = cleanValue(item.plainType || item.elevationType || item.categoryLabel);
        if (typeStr || item.region || item.continent) {
          prompt = 'Назовите тип равнины (низменность / возвышенность / плоскогорье) и регион';
          answer = [typeStr, item.region || item.continent].filter(Boolean).join(' · ');
          badge = 'Равнина';
        }
      } else if (item.category === 'seas') {
        enabled = !useCustom || modCfg.seaType !== false;
        const seaType = cleanValue(item.seaType || item.type);
        if (seaType || item.ocean) {
          prompt = 'К какому типу морей (окраинное / внутреннее / межостровное) и океану относится?';
          answer = [seaType, item.ocean].filter(Boolean).join(' · ');
          badge = 'Море';
        }
      } else if (item.category === 'straits') {
        enabled = !useCustom || modCfg.straitConnects !== false;
        const conn = cleanValue(item.connects);
        const sep = cleanValue(item.separates);
        if (conn || sep) {
          prompt = 'Какие водные объекты соединяет или какие суши разделяет пролив?';
          answer = [conn ? `Соединяет: ${conn}` : '', sep ? `Разделяет: ${sep}` : ''].filter(Boolean).join(' | ');
          badge = 'Пролив';
        }
      } else if (item.category === 'gulfs') {
        enabled = !useCustom || modCfg.gulfOcean !== false;
        if (item.ocean || item.region) {
          prompt = 'К бассейну какого океана относится залив?';
          answer = [item.ocean, item.region].filter(Boolean).join(' · ');
          badge = 'Залив';
        }
      } else if (item.category === 'trenches') {
        enabled = !useCustom || modCfg.trenchDepth !== false;
        const depth = cleanValue(item.maxDepth || item.depth);
        if (depth || item.ocean) {
          prompt = 'К какому океану относится жёлоб и какова его глубина?';
          answer = [item.ocean, depth].filter(Boolean).join(' · ');
          badge = 'Жёлоб';
        }
      } else if (item.category === 'currents') {
        enabled = !useCustom || modCfg.currentTemp !== false;
        const temp = cleanValue(item.currentType || item.temperature || item.temp);
        if (temp || item.ocean) {
          prompt = 'Это течение тёплое или холодное? В каком океане?';
          answer = [temp, item.ocean].filter(Boolean).join(' · ');
          badge = 'Течение';
        }
      } else if (item.category === 'rivers') {
        enabled = !useCustom || modCfg.riverBasin !== false;
        const basin = cleanValue(item.basin || item.flowsInto || item.mouth);
        if (basin || item.ocean) {
          prompt = 'К бассейну какого океана (или области внутреннего стока) относится река и куда впадает?';
          answer = [basin, item.ocean].filter(Boolean).join(' · ');
          badge = 'Река';
          if (item.length) facts.push({ label: 'Длина', val: item.length });
        }
      } else if (item.category === 'waterfalls') {
        enabled = useCustom ? modCfg.waterfallHeight !== false : false;
        const h = cleanValue(item.height);
        const river = cleanValue(item.river);
        prompt = 'На какой реке / материке находится водопад?';
        answer = [river ? `р. ${river}` : '', item.continent || item.region, h].filter(Boolean).join(' · ');
        badge = 'Водопад';
      } else if (item.category === 'lakes') {
        enabled = !useCustom || modCfg.lakeOrigin !== false;
        const orig = cleanValue(item.origin || item.basinOrigin || item.type);
        const sal = cleanValue(item.salinity);
        if (orig || sal) {
          prompt = 'Каково происхождение котловины озера и солёность воды?';
          answer = [orig, sal].filter(Boolean).join(' · ');
          badge = 'Озеро';
          if (item.maxDepth) facts.push({ label: 'Глубина', val: item.maxDepth });
        }
      }

      if (isPureTheory && !answer) {
        answer = item.answerText || item.description || item.hint || '';
        prompt = item.quizPrompt || item.name;
        enabled = true;
      }

      if (!enabled || !answer) {
        return { requiresFlipCard: false };
      }

      if (item.description && facts.length < 2 && !answer.includes(item.description)) {
        facts.push({ label: 'Заметка', val: item.description });
      }

      return {
        requiresFlipCard: true,
        badge,
        prompt,
        answer,
        facts
      };
    }
  };

  const LearningEngine = {
    modules: [],
    allItems: [],
    itemById: new Map(),
    states: {},
    meta: null,

    init(states, meta) {
      this.states = states || {};
      this.meta = meta || (GeoAtlas.StorageAdapter && GeoAtlas.StorageAdapter.defaultMeta());
      this.modules = [];
      this.allItems = [];
      this.itemById.clear();

      const reg = global.GEO_MODULES_REGISTRY || {};
      MODULE_ORDER.forEach((modKey) => {
        const mod = reg[modKey];
        if (!mod || !Array.isArray(mod.items)) return;
        const normalizedMod = {
          id: mod.id || modKey,
          title: mod.title || modKey,
          shortTitle: mod.shortTitle || mod.title || modKey,
          badge: mod.badge || '',
          color: mod.color || '#10b981',
          decks: Array.isArray(mod.decks) ? mod.decks : [],
          items: mod.items.map((it) => {
            it.moduleId = it.moduleId || modKey;
            this.itemById.set(it.id, it);
            this.allItems.push(it);
            return it;
          })
        };
        this.modules.push(normalizedMod);
      });
    },

    getState(id) {
      return (
        this.states[id] || {
          status: 'new',
          reps: 0,
          lapses: 0,
          dueStep: 0,
          lastReviewedAt: 0,
          weakSpot: null
        }
      );
    },

    isMastered(idOrState) {
      const s = typeof idOrState === 'string' ? this.getState(idOrState) : idOrState;
      return !!(s && s.status === 'mastered' && (s.reps || 0) >= 2);
    },

    filterItems({ moduleId = null, submoduleId = null, scope = null, mapOnly = false } = {}) {
      const activeScope = scope || (this.meta && this.meta.scope) || 'landmarks';
      return this.allItems.filter((it) => {
        if (moduleId && it.moduleId !== moduleId) return false;
        if (submoduleId && it.submoduleId !== submoduleId) return false;
        if (activeScope === 'landmarks' && !it.isCoreLandmark) return false;
        if (mapOnly && it.geometryType === 'none') return false;
        return true;
      });
    },

    getStatsForItems(items) {
      let mastered = 0;
      let learning = 0;
      let weakSpots = 0;
      items.forEach((it) => {
        const s = this.getState(it.id);
        if (this.isMastered(s)) mastered++;
        else if (s.status === 'learning' || s.status === 'review') learning++;
        if (s.weakSpot || (s.lapses > 0 && !this.isMastered(s))) weakSpots++;
      });
      const total = items.length;
      const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
      return { total, mastered, learning, weakSpots, pct };
    },

    getModuleStats(moduleId, scope) {
      return this.getStatsForItems(this.filterItems({ moduleId, scope }));
    },

    getSubmoduleStats(moduleId, submoduleId, scope) {
      return this.getStatsForItems(this.filterItems({ moduleId, submoduleId, scope }));
    },

    getOverallStats(scope) {
      return this.getStatsForItems(this.filterItems({ scope }));
    },

    getWeakSpotsItems(moduleId = null) {
      return this.allItems.filter((it) => {
        if (moduleId && it.moduleId !== moduleId) return false;
        const s = this.getState(it.id);
        return !!(s.weakSpot || (s.lapses > 0 && !this.isMastered(s)));
      });
    },

    buildSessionQueue({ mode = 'learn', moduleId = null, submoduleId = null, limit = null } = {}) {
      const scope = (this.meta && this.meta.scope) || 'landmarks';
      const depth = (this.meta && this.meta.depthPreset) || 'essentials';
      const mapOnly = depth === 'map_only' || mode === 'quiz';

      if (mode === 'weak') {
        const weak = this.getWeakSpotsItems(moduleId);
        return GeoAtlas.GeoMath.sortItemsSpatially(weak);
      }

      const pool = this.filterItems({ moduleId, submoduleId, scope, mapOnly });
      if (pool.length === 0) return [];

      const step = (this.meta && this.meta.sessionStep) || 0;

      if (mode === 'learn') {
        const due = [];
        const fresh = [];
        const rest = [];

        pool.forEach((it) => {
          const s = this.getState(it.id);
          if (this.isMastered(s)) {
            if (s.dueStep <= step) rest.push(it);
          } else if (s.status === 'learning' || s.status === 'review' || s.weakSpot) {
            due.push(it);
          } else {
            fresh.push(it);
          }
        });

        const sortedDue = GeoAtlas.GeoMath.sortItemsSpatially(due);
        const sortedFresh = GeoAtlas.GeoMath.sortItemsSpatially(fresh);
        let ordered = sortedDue.concat(sortedFresh);
        if (ordered.length === 0) {
          ordered = GeoAtlas.GeoMath.sortItemsSpatially(rest.length ? rest : pool);
        }
        return limit ? ordered.slice(0, limit) : ordered;
      }

      // exam / quiz
      const shuffled = pool.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      if (mode === 'exam' && limit) return shuffled.slice(0, limit);
      if (mode === 'quiz' && limit) return shuffled.slice(0, limit);
      return shuffled;
    },

    pickNeighborDistractors(targetItem, count = 3) {
      if (!targetItem) return [];
      const center = GeoAtlas.GeoMath.getItemCenter(targetItem);
      const sameCat = this.allItems.filter(
        (it) =>
          it.id !== targetItem.id &&
          it.geometryType !== 'none' &&
          it.moduleId === targetItem.moduleId &&
          it.category === targetItem.category &&
          it.name !== targetItem.name
      );
      const fallback = this.allItems.filter(
        (it) => it.id !== targetItem.id && it.geometryType !== 'none' && it.moduleId === targetItem.moduleId
      );
      const source = sameCat.length >= count ? sameCat : fallback;

      const withDist = source.map((it) => {
        const c = GeoAtlas.GeoMath.getItemCenter(it);
        return {
          item: it,
          d: GeoAtlas.GeoMath.calcDistanceKm(center.lat, center.lng, c.lat, c.lng)
        };
      });
      withDist.sort((a, b) => a.d - b.d);

      const candidateWindow = withDist.slice(0, Math.min(12, withDist.length));
      for (let i = candidateWindow.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidateWindow[i], candidateWindow[j]] = [candidateWindow[j], candidateWindow[i]];
      }
      return candidateWindow.slice(0, count).map((x) => x.item);
    },

    recordCompositeResult(itemId, { mapMistakes = 0, mapRevealed = false, theoryRecalled = true, hadFlipCard = false } = {}) {
      const prev = this.getState(itemId);
      this.meta.sessionStep = (this.meta.sessionStep || 0) + 1;
      const step = this.meta.sessionStep;

      let reps = prev.reps || 0;
      let lapses = prev.lapses || 0;
      let status = prev.status || 'new';
      let weakSpot = prev.weakSpot || null;
      let dueOffset = 4;
      let grade = 'STRONG';

      const theoryMissed = hadFlipCard && !theoryRecalled;

      if (mapRevealed) {
        grade = 'FAIL';
        reps = 0;
        lapses += 1;
        status = 'learning';
        weakSpot = theoryMissed ? 'both' : 'map';
        dueOffset = 1;
      } else if (mapMistakes >= 2 || (mapMistakes === 1 && theoryMissed)) {
        grade = 'WEAK';
        reps = 0;
        lapses += 1;
        status = 'learning';
        weakSpot = theoryMissed ? 'both' : 'map';
        dueOffset = 2;
      } else if (mapMistakes === 0 && theoryMissed) {
        grade = 'MEDIUM_THEORY';
        lapses += 1;
        status = 'learning';
        weakSpot = 'theory';
        dueOffset = 3;
      } else if (mapMistakes === 1 && !theoryMissed) {
        grade = 'MEDIUM_MAP';
        status = 'learning';
        weakSpot = 'map';
        dueOffset = 4;
      } else {
        grade = 'STRONG';
        reps += 1;
        weakSpot = null;
        status = reps >= 2 ? 'mastered' : 'learning';
        dueOffset = 8 + reps * 5;
      }

      const next = {
        status,
        reps,
        lapses,
        dueStep: step + dueOffset,
        lastReviewedAt: Date.now(),
        weakSpot
      };

      this.states[itemId] = next;
      if (GeoAtlas.StorageAdapter) {
        GeoAtlas.StorageAdapter.saveStates(this.states);
        GeoAtlas.StorageAdapter.saveMeta(this.meta);
      }

      return { grade, state: next };
    }
  };

  GeoAtlas.QuizConfig = QuizConfig;
  GeoAtlas.LearningEngine = LearningEngine;
})(window);
