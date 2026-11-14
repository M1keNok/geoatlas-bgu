/**
 * ГеоАтлас / Тренажер ОЗК — QuizConfig & LearningEngine (Explicit Type Badges, Oral Theory Split, AutoCompositeSRS)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const MODULE_ORDER = ['module1', 'module2', 'module3', 'module4'];

  const CATEGORY_LABELS = {
    peninsula: 'Полуостров',
    continental_island: 'Материковый остров',
    volcanic_island: 'Вулканический остров',
    coral_island: 'Коралловый остров',
    islands: 'Остров',
    peninsulas: 'Полуостров',
    extreme_point: 'Крайняя точка (мыс)',
    capes: 'Крайняя точка (мыс)',
    desert: 'Пустыня',
    continent_theory: 'Теория: материки и Земля',
    continent_peak: 'Высшая точка материка',
    continent_depr: 'Низшая точка материка',
    mountains: 'Горы / Хребет',
    volcanoes: 'Вулкан',
    depressions: 'Впадина',
    plains: 'Равнина / Плато',
    seas: 'Море',
    straits: 'Пролив',
    gulfs: 'Залив',
    trenches: 'Глубоководный жёлоб',
    currents: 'Океаническое течение',
    rivers: 'Река',
    waterfalls: 'Водопад',
    lakes: 'Озеро'
  };

  function getCategoryLabel(item) {
    if (!item) return 'Объект';
    if (item.id && /^m3_sea_[a-z_]+_ocean$/.test(item.id)) return 'Океан';
    if (item.submoduleId === 'm2_depressions') return 'Впадина';
    if (item.categoryRu) return item.categoryRu;
    if (item.mainCategory) {
      const singularMap = {
        'Полуострова': 'Полуостров',
        'Острова': 'Остров',
        'Пустыни': 'Пустыня',
        'Крайние точки': 'Крайняя точка (мыс)'
      };
      if (singularMap[item.mainCategory]) return singularMap[item.mainCategory];
    }
    return CATEGORY_LABELS[item.category] || item.categoryLabel || 'Объект';
  }

  function cleanValue(val) {
    if (val === undefined || val === null) return '';
    return String(val).trim();
  }

  const QuizConfig = {
    buildCardSpec(item, depthPreset = 'essentials', customModules = {}) {
      if (!item) return { requiresFlipCard: false };
      const isOral = GeoAtlas.GeoMath.isOralTheoryItem(item);

      if (depthPreset === 'map_only' && !isOral) {
        return { requiresFlipCard: false };
      }

      const modKey = item.moduleId || 'module1';
      const modCfg = (customModules && customModules[modKey]) || {};
      const useCustom = depthPreset === 'custom_full';

      const facts = [];
      let prompt = '';
      let answer = '';
      const badge = item.categoryLabel || getCategoryLabel(item);
      let enabled = false;

      if (isOral && item.ankiCard && item.ankiCard.backMainAnswer) {
        enabled = !useCustom || modCfg.continentsEarth !== false;
        prompt = item.ankiCard.frontQuestion || item.mapPrompt || item.name;
        answer = item.ankiCard.backMainAnswer;
        if (Array.isArray(item.ankiCard.backMetrics)) {
          item.ankiCard.backMetrics.forEach((m) => {
            if (m && m.label && m.value) facts.push({ label: m.label, val: m.value });
          });
        }
        if (item.ankiCard.backNote) facts.push({ label: 'Справка', val: item.ankiCard.backNote });
      } else if (item.category === 'extreme_point' || item.category === 'capes') {
        enabled = !useCustom || modCfg.capes !== false;
        prompt = (item.ankiCard && item.ankiCard.frontQuestion) || 'Крайняя точка: назовите материк и сторону света';
        answer =
          (item.ankiCard && item.ankiCard.backMainAnswer) ||
          [item.region || item.continent, item.hint || item.locationDesc].filter(Boolean).join(' · ');
        if (item.ankiCard && item.ankiCard.backNote) facts.push({ label: 'Координаты / Заметка', val: item.ankiCard.backNote });
      } else if (
        item.category === 'peninsula' ||
        item.category === 'continental_island' ||
        item.category === 'volcanic_island' ||
        item.category === 'coral_island' ||
        item.category === 'desert'
      ) {
        if (useCustom) {
          enabled = item.category === 'peninsula' ? !!modCfg.peninsulas : !!modCfg.islands;
        } else {
          enabled = false;
        }
        prompt = (item.ankiCard && item.ankiCard.frontQuestion) || 'Где расположен объект и чем примечателен?';
        answer =
          (item.ankiCard && item.ankiCard.backMainAnswer) ||
          [item.region || item.continent, item.ocean, item.locationDesc].filter(Boolean).join(' · ');
        if (item.ankiCard && item.ankiCard.backNote) facts.push({ label: 'Факт', val: item.ankiCard.backNote });
      } else if (item.category === 'mountains') {
        enabled = !useCustom || modCfg.mountainAge !== false;
        const age = cleanValue(item.foldingAge || item.age || item.epoch);
        const peak = cleanValue(item.highestPeak || item.maxHeight);
        if (age) {
          prompt = 'К какой эпохе складчатости относятся эти горы?';
          answer = age;
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
        }
      } else if (item.submoduleId === 'm2_depressions' || item.category === 'depressions') {
        enabled = !useCustom || modCfg.depressionSign !== false || modCfg.plains !== false;
        const elev = cleanValue(item.elevation || item.depth || item.minHeight);
        prompt = 'В чём особенность отметки высоты этой впадины?';
        answer = [elev ? `${elev} (ниже уровня моря)` : 'Ниже уровня Мирового океана', item.region || item.continent]
          .filter(Boolean)
          .join(' · ');
      } else if (item.category === 'plains') {
        enabled = !useCustom || modCfg.plains !== false;
        const typeStr = cleanValue(item.plainType || item.elevationType || item.categoryLabel);
        if (typeStr || item.region || item.continent) {
          prompt = 'Назовите тип равнины (низменность / возвышенность / плоскогорье) и регион';
          answer = [typeStr, item.region || item.continent].filter(Boolean).join(' · ');
        }
      } else if (item.category === 'seas') {
        enabled = !useCustom || modCfg.seaType !== false;
        const seaType = cleanValue(item.seaType || item.type);
        if (seaType || item.ocean) {
          prompt =
            badge === 'Океан'
              ? 'К каким полушариям относится и какие ключевые характеристики океана?'
              : 'К какому типу морей (окраинное / внутреннее / межостровное) и океану относится?';
          answer = [seaType, item.ocean, item.region].filter(Boolean).join(' · ');
        }
      } else if (item.category === 'straits') {
        enabled = !useCustom || modCfg.straitConnects !== false;
        const conn = cleanValue(item.connects);
        const sep = cleanValue(item.separates);
        if (conn || sep) {
          prompt = 'Какие водные объекты соединяет или какие суши разделяет пролив?';
          answer = [conn ? `Соединяет: ${conn}` : '', sep ? `Разделяет: ${sep}` : ''].filter(Boolean).join(' | ');
        }
      } else if (item.category === 'gulfs') {
        enabled = !useCustom || modCfg.gulfOcean !== false;
        if (item.ocean || item.region) {
          prompt = 'К бассейну какого океана относится залив?';
          answer = [item.ocean, item.region].filter(Boolean).join(' · ');
        }
      } else if (item.category === 'trenches') {
        enabled = !useCustom || modCfg.trenchDepth !== false;
        const depth = cleanValue(item.maxDepth || item.depth);
        if (depth || item.ocean) {
          prompt = 'К какому океану относится жёлоб и какова его глубина?';
          answer = [item.ocean, depth].filter(Boolean).join(' · ');
        }
      } else if (item.category === 'currents') {
        enabled = !useCustom || modCfg.currentTemp !== false;
        const temp = cleanValue(item.currentType || item.temperature || item.temp);
        if (temp || item.ocean) {
          prompt = 'Это течение тёплое или холодное? В каком океане?';
          answer = [temp, item.ocean].filter(Boolean).join(' · ');
        }
      } else if (item.category === 'rivers') {
        enabled = !useCustom || modCfg.riverBasin !== false;
        const basin = cleanValue(item.basin || item.flowsInto || item.mouth);
        if (basin || item.ocean) {
          prompt = 'К бассейну какого океана (или области внутреннего стока) относится река и куда впадает?';
          answer = [basin, item.ocean].filter(Boolean).join(' · ');
          if (item.length) facts.push({ label: 'Длина', val: item.length });
        }
      } else if (item.category === 'waterfalls') {
        enabled = useCustom ? modCfg.waterfallHeight !== false : false;
        const h = cleanValue(item.height);
        const river = cleanValue(item.river);
        prompt = 'На какой реке / материке находится водопад?';
        answer = [river ? `р. ${river}` : '', item.continent || item.region, h].filter(Boolean).join(' · ');
      } else if (item.category === 'lakes') {
        enabled = !useCustom || modCfg.lakeOrigin !== false;
        const orig = cleanValue(item.origin || item.basinOrigin || item.type);
        const sal = cleanValue(item.salinity);
        if (orig || sal) {
          prompt = 'Каково происхождение котловины озера и солёность воды?';
          answer = [orig, sal].filter(Boolean).join(' · ');
          if (item.maxDepth) facts.push({ label: 'Глубина', val: item.maxDepth });
        }
      }

      if (isOral && !answer) {
        answer = item.answerText || item.description || item.locationDesc || item.hint || '';
        prompt = item.quizPrompt || item.mapPrompt || item.name;
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
            it.categoryLabel = getCategoryLabel(it);
            this.itemById.set(it.id, it);
            this.allItems.push(it);
            return it;
          })
        };
        this.modules.push(normalizedMod);
      });
    },

    getCategoryLabel,

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

    filterItems({ moduleId = null, submoduleId = null, scope = null, mapOnly = false, oralOnly = false } = {}) {
      const activeScope = scope || (this.meta && this.meta.scope) || 'landmarks';
      return this.allItems.filter((it) => {
        if (moduleId && it.moduleId !== moduleId) return false;
        if (submoduleId && it.submoduleId !== submoduleId) return false;
        if (activeScope === 'landmarks' && !it.isCoreLandmark) return false;
        const isOral = GeoAtlas.GeoMath.isOralTheoryItem(it);
        if (mapOnly && isOral) return false;
        if (oralOnly && !isOral) return false;
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
      return this.getStatsForItems(this.filterItems({ moduleId, scope, mapOnly: true }));
    },

    getSubmoduleStats(moduleId, submoduleId, scope) {
      return this.getStatsForItems(this.filterItems({ moduleId, submoduleId, scope, mapOnly: true }));
    },

    getOralTheoryStats(scope) {
      return this.getStatsForItems(this.filterItems({ scope, oralOnly: true }));
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

      if (mode === 'theory') {
        const oral = this.filterItems({ scope, oralOnly: true });
        return GeoAtlas.GeoMath.sortItemsBasicToNiche(oral, (id) => this.getState(id));
      }

      if (mode === 'weak') {
        const weak = this.getWeakSpotsItems(moduleId);
        return GeoAtlas.GeoMath.sortItemsBasicToNiche(weak, (id) => this.getState(id));
      }

      const pool = this.filterItems({ moduleId, submoduleId, scope, mapOnly: true });
      if (pool.length === 0) return [];

      if (mode === 'learn') {
        const ordered = GeoAtlas.GeoMath.sortItemsBasicToNiche(pool, (id) => this.getState(id));
        return limit ? ordered.slice(0, limit) : ordered;
      }

      // exam / quiz
      const shuffled = pool.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return limit ? shuffled.slice(0, limit) : shuffled;
    },

    pickNeighborDistractors(targetItem, count = 3) {
      if (!targetItem) return [];
      const center = GeoAtlas.GeoMath.getItemCenter(targetItem);
      const sameCat = this.allItems.filter(
        (it) =>
          it.id !== targetItem.id &&
          !GeoAtlas.GeoMath.isOralTheoryItem(it) &&
          it.moduleId === targetItem.moduleId &&
          it.category === targetItem.category &&
          it.name !== targetItem.name
      );
      const fallback = this.allItems.filter(
        (it) =>
          it.id !== targetItem.id &&
          !GeoAtlas.GeoMath.isOralTheoryItem(it) &&
          it.moduleId === targetItem.moduleId
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
