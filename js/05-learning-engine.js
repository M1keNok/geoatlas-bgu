/**
 * Тренажёр ОЗ — QuizConfig & LearningEngine (Per-Module Oral Theory Cards, ankiCard Extractor, AutoCompositeSRS)
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
    if (item.category === 'mountains') return 'Горы';
    if (item.category === 'currents') return 'Океаническое течение';
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

  function isModuleOralCardCandidate(item) {
    if (!item) return false;
    if (item.moduleId === 'module3') {
      return Boolean(
        (item.id && /^m3_sea_[a-z_]+_ocean$/.test(item.id)) ||
          item.submoduleId === 'm3_oceans_theory'
      );
    }
    return false;
  }

  function matchesDeck(it, deckId) {
    if (!deckId) return true;
    if (deckId === 'm2_all_relief') return it.moduleId === 'module2';
    if (deckId === 'm3_oceans_theory') return isModuleOralCardCandidate(it);
    if (deckId === 'm3_seas_straits_gulfs') {
      return (
        ['seas', 'straits', 'gulfs'].includes(it.category) &&
        !(it.id && /^m3_sea_[a-z_]+_ocean$/.test(it.id))
      );
    }
    if (deckId === 'm4_all_waters') return it.moduleId === 'module4';
    if (it.submoduleId === deckId) return true;
    if (deckId === 'm2_orogeny') return it.category === 'mountains';
    if (deckId === 'm3_seas') return it.category === 'seas';
    if (deckId === 'm3_straits') return it.category === 'straits';
    if (deckId === 'm3_gulfs') return it.category === 'gulfs';
    if (deckId === 'm3_currents') return it.category === 'currents';
    if (deckId === 'm4_rivers') return it.category === 'rivers';
    if (deckId === 'm4_lakes') return it.category === 'lakes';
    return false;
  }

  function extractCapePrompt(item) {
    const desc = String(item.locationDesc || '');
    const idx = desc.indexOf(':');
    if (idx > 0) {
      return desc.slice(0, idx).trim();
    }
    return `Крайняя точка (${item.region || item.continent || ''})`;
  }

  const QuizConfig = {
    buildCardSpec(item, depthPreset = 'essentials', customModules = {}, opts = {}) {
      if (!item) return { requiresFlipCard: false };
      const forceTheory = !!opts.forceTheory;
      const isOralOnly = GeoAtlas.GeoMath.isOralTheoryItem(item);

      if (!forceTheory && depthPreset === 'map_only' && !isOralOnly) {
        return { requiresFlipCard: false };
      }

      const modKey = item.moduleId || 'module1';
      const modCfg = (customModules && customModules[modKey]) || {};
      const useCustom = !forceTheory && depthPreset === 'custom_full';

      let enabled = false;
      if (forceTheory || isOralOnly) {
        enabled = true;
      } else if (item.recordPrompt) {
        enabled = true;
      } else if (item.submoduleId === 'm1_continents_earth') {
        enabled = !useCustom || modCfg.continentsEarth !== false;
      } else if (item.category === 'extreme_point' || item.category === 'capes') {
        enabled = !useCustom || modCfg.capes !== false;
      } else if (item.category === 'peninsula') {
        enabled = useCustom ? !!modCfg.peninsulas : false;
      } else if (item.askConstituentIslands && item.constituentIslands) {
        enabled = !useCustom || modCfg.islands !== false;
      } else if (
        item.category === 'continental_island' ||
        item.category === 'volcanic_island' ||
        item.category === 'coral_island'
      ) {
        enabled = useCustom ? !!modCfg.islands : false;
      } else if (item.category === 'desert') {
        enabled = false;
      } else if (item.category === 'mountains') {
        enabled = !useCustom || modCfg.mountainAge !== false;
      } else if (item.category === 'volcanoes') {
        enabled = useCustom ? !!modCfg.volcanoType : !!item.isCoreLandmark;
      } else if (item.submoduleId === 'm2_depressions' || item.category === 'depressions') {
        enabled = useCustom ? (modCfg.depressionSign !== false || modCfg.plains !== false) : !!item.isCoreLandmark;
      } else if (item.category === 'plains') {
        enabled = useCustom ? !!modCfg.plains : false;
      } else if (item.category === 'seas') {
        enabled = !useCustom || modCfg.seaType !== false;
      } else if (item.category === 'straits') {
        enabled = !useCustom || modCfg.straitConnects !== false;
      } else if (item.category === 'gulfs') {
        enabled = !useCustom || modCfg.gulfOcean !== false;
      } else if (item.category === 'trenches') {
        enabled = useCustom ? !!modCfg.trenchDepth : !!item.isCoreLandmark;
      } else if (item.category === 'currents') {
        enabled = !useCustom || modCfg.currentTemp !== false;
      } else if (item.category === 'rivers') {
        enabled = !useCustom || modCfg.riverBasin !== false;
      } else if (item.category === 'lakes') {
        enabled = !useCustom || modCfg.lakeOrigin !== false;
      } else if (item.category === 'waterfalls') {
        enabled = useCustom ? modCfg.waterfallHeight !== false : false;
      }

      if (!enabled) {
        return { requiresFlipCard: false };
      }

      const badge = item.categoryLabel || getCategoryLabel(item);
      const card = item.ankiCard || {};
      const facts = [];

      let prompt = card.frontQuestion || item.mapPrompt || 'Вспомните ключевые характеристики объекта';
      let answer =
        card.backMainAnswer ||
        [item.region || item.continent, item.locationDesc].filter(Boolean).join(' · ') ||
        '';

      if (item.recordPrompt && !forceTheory) {
        if (Array.isArray(card.backMetrics)) {
          card.backMetrics.forEach((m) => {
            if (m && m.label && m.value) facts.push({ label: m.label, val: m.value });
          });
        }
        if (card.backNote) facts.push({ label: 'Справка', val: card.backNote });
        return {
          requiresFlipCard: true,
          badge: `${badge} · Рекорд`,
          frontTitle: item.recordPrompt,
          prompt: 'Вспомните название этого объекта-рекордсмена:',
          answer: item.shortName || item.name,
          facts
        };
      }

      if (item.category === 'mountains' && !item.isCoreLandmark && !forceTheory) {
        const epochOnly = String(item.categoryRu || '').replace(/^Горы\s*\(|\)$/g, '').trim() ||
          String(card.backMainAnswer || '').split('•')[0].trim();
        if (item.region) facts.push({ label: 'Местоположение', val: item.region });
        if (item.peakName) {
          facts.push({ label: 'Высшая точка (доп.)', val: `${item.peakName}${item.heightM ? ` (${item.heightM} м)` : ''}` });
        }
        return {
          requiresFlipCard: true,
          badge,
          prompt: 'Назовите эпоху складчатости этих гор:',
          answer: epochOnly || answer,
          facts
        };
      }

      if (item.askConstituentIslands && item.constituentIslands && !forceTheory) {
        facts.push({ label: 'Категория', val: badge });
        if (item.region) facts.push({ label: 'Регион', val: item.region });
        if (item.locationDesc) facts.push({ label: 'Справка', val: item.locationDesc });
        return {
          requiresFlipCard: true,
          badge: 'Архипелаг',
          frontTitle: item.name,
          prompt: 'Вспомните, какие основные острова входят в этот архипелаг:',
          answer: item.constituentIslands,
          facts
        };
      }

      if ((item.category === 'extreme_point' || item.category === 'capes') && !forceTheory) {
        const clue = extractCapePrompt(item);
        prompt = 'Вспомните и назовите этот мыс:';
        answer = item.shortName || item.name;
        if (item.locationDesc) facts.push({ label: 'Справка', val: item.locationDesc });
        return {
          requiresFlipCard: true,
          badge,
          frontTitle: clue,
          prompt,
          answer,
          facts
        };
      }

      if ((item.category === 'continent_peak' || item.category === 'continent_depr') && !forceTheory) {
        const metrics = Array.isArray(card.backMetrics) ? card.backMetrics : [];
        const heightMetric = metrics.find((m) => /высот|отметк/i.test(m.label || ''));
        prompt = 'Вспомните абсолютную высоту (отметку) этого объекта:';
        answer = (heightMetric && heightMetric.value) || card.backMainAnswer || answer;
        metrics.forEach((m) => {
          if (m && m.label && m.value) facts.push({ label: m.label, val: m.value });
        });
        if (card.backNote) facts.push({ label: 'Справка', val: card.backNote });
        return {
          requiresFlipCard: true,
          badge,
          prompt,
          answer,
          facts
        };
      }

      if (Array.isArray(card.backMetrics)) {
        card.backMetrics.forEach((m) => {
          if (m && m.label && m.value) {
            facts.push({ label: m.label, val: m.value });
          }
        });
      }
      if (card.backNote && !facts.some((f) => f.val === card.backNote)) {
        facts.push({ label: 'Примечание', val: card.backNote });
      }

      if (!answer) {
        return { requiresFlipCard: false };
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

    filterItems({ moduleId = null, submoduleId = null, scope = null, mapOnly = false, theoryOnly = false } = {}) {
      const activeScope = scope || (this.meta && this.meta.scope) || 'full';
      return this.allItems.filter((it) => {
        if (moduleId && it.moduleId !== moduleId) return false;
        if (submoduleId && !matchesDeck(it, submoduleId)) return false;
        if (activeScope === 'landmarks' && !it.isCoreLandmark) return false;
        const isPureOral = GeoAtlas.GeoMath.isOralTheoryItem(it);
        if (mapOnly && isPureOral) return false;
        if (theoryOnly && !isModuleOralCardCandidate(it)) return false;
        return true;
      });
    },

    getStatsForItems(items) {
      let mastered = 0;
      let practiced = 0;
      let learning = 0;
      let weakSpots = 0;
      items.forEach((it) => {
        const s = this.getState(it.id);
        if (this.isMastered(s)) {
          mastered++;
          practiced++;
        } else {
          if ((s.reps || 0) >= 1 && !s.weakSpot) practiced++;
          if (s.status === 'learning' || s.status === 'review') learning++;
        }
        if (s.weakSpot || (s.lapses > 0 && !this.isMastered(s))) weakSpots++;
      });
      const total = items.length;
      const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
      return { total, mastered, practiced, learning, weakSpots, pct };
    },

    getModuleStats(moduleId, scope) {
      return this.getStatsForItems(
        this.filterItems({ moduleId, scope, mapOnly: moduleId !== 'module1' && moduleId !== 'module3' })
      );
    },

    getSubmoduleStats(moduleId, submoduleId, scope) {
      const includeOral = submoduleId === 'm1_continents_earth' || submoduleId === 'm3_oceans_theory';
      return this.getStatsForItems(this.filterItems({ moduleId, submoduleId, scope, mapOnly: !includeOral }));
    },

    getModuleTheoryItems(moduleId, scope) {
      return this.filterItems({ moduleId, scope, theoryOnly: true });
    },

    getModuleTheoryStats(moduleId, scope) {
      return this.getStatsForItems(this.getModuleTheoryItems(moduleId, scope));
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
      const scope = (this.meta && this.meta.scope) || 'full';
      const step = (this.meta && this.meta.sessionStep) || 0;

      if (mode === 'theory') {
        const theory = this.getModuleTheoryItems(moduleId, scope);
        return GeoAtlas.GeoMath.sortItemsBasicToNiche(theory, (id) => this.getState(id), step);
      }

      if (mode === 'weak') {
        const weak = this.getWeakSpotsItems(moduleId);
        return GeoAtlas.GeoMath.sortItemsBasicToNiche(weak, (id) => this.getState(id), step);
      }

      const includeM1Theory =
        submoduleId === 'm1_continents_earth' ||
        (moduleId === 'module1' && !submoduleId) ||
        (!moduleId && !submoduleId);
      const pool = this.filterItems({ moduleId, submoduleId, scope, mapOnly: !includeM1Theory });
      if (pool.length === 0) return [];

      if (mode === 'learn') {
        const ordered = GeoAtlas.GeoMath.sortItemsBasicToNiche(pool, (id) => this.getState(id), step);
        return limit ? ordered.slice(0, limit) : ordered;
      }

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
        dueOffset = 3;
      } else if (mapMistakes >= 2 || (mapMistakes === 1 && theoryMissed)) {
        grade = 'WEAK';
        reps = 0;
        lapses += 1;
        status = 'learning';
        weakSpot = theoryMissed ? 'both' : 'map';
        dueOffset = 5;
      } else if (mapMistakes === 0 && theoryMissed) {
        grade = 'MEDIUM_THEORY';
        lapses += 1;
        status = 'learning';
        weakSpot = 'theory';
        dueOffset = 7;
      } else if (mapMistakes === 1 && !theoryMissed) {
        grade = 'MEDIUM_MAP';
        status = 'learning';
        weakSpot = 'map';
        dueOffset = 10;
      } else {
        grade = 'STRONG';
        reps += 1;
        weakSpot = null;
        status = reps >= 2 ? 'mastered' : 'learning';
        dueOffset = reps === 1 ? 18 : 20 + reps * 12;
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

      return { grade, state: next, dueOffset };
    }
  };

  GeoAtlas.QuizConfig = QuizConfig;
  GeoAtlas.LearningEngine = LearningEngine;
  GeoAtlas.extractCapePrompt = extractCapePrompt;
})(window);
