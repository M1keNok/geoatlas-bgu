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
    ocean_boundary: 'Границы океанов',
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
    return false;
  }

  function matchesDeck(it, deckId) {
    if (!deckId) return true;
    if (deckId === 'm2_all_relief') return it.moduleId === 'module2';
    if (deckId === 'm2_mountains') return it.moduleId === 'module2' && it.category === 'mountains';
    if (deckId === 'm2_volcanoes') return it.moduleId === 'module2' && it.category === 'volcanoes';
    if (deckId === 'm2_plains') return it.moduleId === 'module2' && it.category === 'plains';
    if (deckId === 'm3_oceans_theory') {
      return Boolean(
        (it.id && /^m3_sea_[a-z_]+_ocean$/.test(it.id)) ||
          it.submoduleId === 'm3_oceans_theory'
      );
    }
    if (deckId === 'm3_seas_straits_gulfs') {
      return (
        ['seas', 'straits', 'gulfs'].includes(it.category) &&
        !(it.id && /^m3_sea_[a-z_]+_ocean$/.test(it.id))
      );
    }
    if (deckId === 'm4_all_waters') return it.moduleId === 'module4';
    if (it.submoduleId === deckId) return true;
    if (deckId === 'm2_orogeny') return it.category === 'mountains';
    if (deckId === 'm3_seas') return it.category === 'seas' && !(it.id && /^m3_sea_[a-z_]+_ocean$/.test(it.id));
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

  function formatRecallPrompt(item, rawPrompt) {
    const clean = String(rawPrompt || '').trim();
    if (clean && !/^покажите на карте/i.test(clean)) {
      const name = String(item.name || '').trim();
      const short = String(item.shortName || '').trim();
      let stripped = clean;
      if (name && stripped.endsWith(`: ${name}`)) stripped = stripped.slice(0, -(`: ${name}`).length).trim();
      else if (name && stripped.endsWith(`: ${name}?`)) stripped = stripped.slice(0, -(`: ${name}?`).length).trim() + '?';
      else if (short && stripped.endsWith(`: ${short}`)) stripped = stripped.slice(0, -(`: ${short}`).length).trim();
      stripped = stripped.replace(/:\s*$/, '').replace(/\s+для\s*$/i, '').trim();
      if (stripped && stripped.toLowerCase() !== name.toLowerCase()) return stripped;
    }
    const cat = item.category;
    if (cat === 'mountains') return 'Вспомните эпоху складчатости, высшую точку и высоту (м)';
    if (cat === 'volcanoes') return 'Вспомните вулканический пояс, высоту (м) и местоположение';
    if (cat === 'depressions' || item.submoduleId === 'm2_depressions') return 'Вспомните глубину ниже уровня моря (м) и местоположение';
    if (cat === 'plains') return 'Вспомните местоположение и особенности равнины';
    if (cat === 'seas') return 'Вспомните океанический бассейн и тип моря (окраинное / внутреннее / межостровное)';
    if (cat === 'straits') return 'Вспомните, какие акватории соединяет пролив, и его параметры';
    if (cat === 'gulfs') return 'Вспомните, к какому океану и региону относится залив';
    if (cat === 'trenches') return 'Вспомните максимальную глубину (м) и океан';
    if (cat === 'currents') return 'Вспомните температуру (Т/Х/Н) и генезис течения (Д/К/С)';
    if (cat === 'rivers') return 'Вспомните материк, исток, устье и главные притоки реки';
    if (cat === 'lakes') return 'Вспомните материк, происхождение котловины и макс. глубину озера';
    if (cat === 'waterfalls') return 'Вспомните материк, реку и высоту водопада (м)';
    return 'Вспомните ключевые географические характеристики этого объекта';
  }

  const QuizConfig = {
    buildCardSpec(item, depthPreset = 'essentials', customModules = {}, opts = {}) {
      if (!item) return { requiresFlipCard: false };
      const forceTheory = !!opts.forceTheory;
      const isOralOnly = GeoAtlas.GeoMath.isOralTheoryItem(item);

      if (!forceTheory && depthPreset === 'map_only' && !isOralOnly) {
        return { requiresFlipCard: false };
      }
      const isM3Ocean = Boolean(item.id && /^m3_sea_[a-z_]+_ocean$/.test(item.id));
      if (!forceTheory && item.moduleId === 'module3' && !isM3Ocean) {
        return { requiresFlipCard: false };
      }

      const modKey = item.moduleId || 'module1';
      const modCfg = (customModules && customModules[modKey]) || {};
      const useCustom = !forceTheory && depthPreset === 'custom_full';

      let enabled = false;
      if (forceTheory || isOralOnly || isM3Ocean) {
        enabled = true;
      } else if (item.category === 'rivers') {
        enabled = item._riverLengthRank >= 1 && item._riverLengthRank <= 5;
      } else if (item.category === 'lakes') {
        enabled = false;
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
        enabled = !!(item.isCoreLandmark || (item._mtnHeightRank >= 1 && item._mtnHeightRank <= 10));
      } else if (item.category === 'volcanoes' || item.submoduleId === 'm2_depressions' || item.category === 'depressions' || item.category === 'plains') {
        enabled = false;
      } else if (item.category === 'waterfalls') {
        enabled = useCustom ? modCfg.waterfallHeight !== false : false;
      }

      if (!enabled) {
        return { requiresFlipCard: false };
      }

      const badge = item.categoryLabel || getCategoryLabel(item);
      const card = item.ankiCard || {};
      const facts = [];

      let prompt = formatRecallPrompt(item, card.frontQuestion);
      let answer =
        card.backMainAnswer ||
        [item.region || item.continent, item.locationDesc].filter(Boolean).join(' · ') ||
        '';

      if (isM3Ocean && !forceTheory) {
        const areaStr = item.areaThousandKm2 ? `${item.areaThousandKm2} тыс. км²` : '';
        const depthStr = item.maxDepthM ? `${item.maxDepthM} м` : '';
        if (areaStr) facts.push({ label: 'Площадь', val: areaStr });
        if (depthStr) facts.push({ label: 'Наибольшая глубина', val: depthStr });
        return {
          requiresFlipCard: true,
          badge: 'Океан',
          prompt: 'Назовите площадь и наибольшую глубину океана:',
          answer: [areaStr, depthStr].filter(Boolean).join(' • ') || answer,
          note: card.backNote || '',
          facts
        };
      }

      if (item.category === 'rivers' && !forceTheory) {
        const rank = item._riverLengthRank || 0;
        if (rank < 1 || rank > 5) return { requiresFlipCard: false };
        const metrics = Array.isArray(card.backMetrics) ? card.backMetrics : [];
        const pick = (kw) => (metrics.find((m) => String(m.label || '').toLowerCase().includes(kw)) || {}).value || '';
        const lenVal = pick('длин');
        const basinVal = rank <= 3 ? pick('бассейн') : '';
        if (lenVal) facts.push({ label: 'Длина', val: lenVal });
        if (basinVal) facts.push({ label: 'Бассейн / Устье', val: basinVal });
        return {
          requiresFlipCard: true,
          badge: `${badge} · ${rank <= 3 ? 'Топ-3' : 'Топ-5'}`,
          prompt: rank <= 3 ? 'Назовите длину реки и её бассейн (куда впадает):' : 'Назовите длину этой реки:',
          answer: [lenVal, basinVal].filter(Boolean).join(' · ') || answer,
          facts
        };
      }

      if (item.category === 'mountains' && !forceTheory) {
        const isTopMtn = !!(item.isCoreLandmark || (item._mtnHeightRank >= 1 && item._mtnHeightRank <= 10));
        if (!isTopMtn) return { requiresFlipCard: false };
        const epoch = String(item.categoryRu || '').replace(/^Горы\s*\(|\)$/g, '').trim() || String(card.backMainAnswer || '').split('•')[0].trim();
        const hVal = item.heightM ? `${item.heightM} м${item.peakName && item.peakName !== '-' ? ` (${item.peakName})` : ''}` : '';
        if (epoch) facts.push({ label: 'Складчатость', val: epoch });
        if (hVal) facts.push({ label: 'Высота', val: hVal });
        return {
          requiresFlipCard: true,
          badge,
          prompt: 'Назовите эпоху складчатости и высоту (м):',
          answer: [epoch, hVal].filter(Boolean).join(' • ') || answer,
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

      if (item.category === 'continent_peak' && !forceTheory) {
        const peakTitle = item.peakName || (item.ankiCard && item.ankiCard.backMetrics?.[0]?.value) || item.shortName;
        const peakHeight = item.peakHeight || (item.ankiCard && item.ankiCard.backMetrics?.[1]?.value) || '';
        return {
          requiresFlipCard: true,
          badge: 'Высшая точка',
          frontTitle: `Высшая точка: ${item.region || item.continent || 'Материк'}`,
          prompt: 'Вспомните название высочайшей вершины и её абсолютную высоту (м):',
          answer: `${peakTitle}${peakHeight ? ` (${peakHeight})` : ''}`,
          facts: [
            { label: 'Вершина', val: peakTitle },
            ...(peakHeight ? [{ label: 'Абсолютная высота', val: peakHeight }] : []),
            { label: 'Материк', val: item.region || item.continent || '' }
          ]
        };
      }

      if (item.category === 'continent_depr' && !forceTheory) {
        const deprTitle = item.deprName || (item.ankiCard && item.ankiCard.backMetrics?.[0]?.value) || item.shortName;
        const deprHeight = item.deprHeight || (item.ankiCard && item.ankiCard.backMetrics?.[1]?.value) || '';
        return {
          requiresFlipCard: true,
          badge: 'Низшая точка',
          frontTitle: `Низшая точка: ${item.region || item.continent || 'Материк'}`,
          prompt: 'Вспомните название глубочайшей впадины и её отметку (м):',
          answer: `${deprTitle}${deprHeight ? ` (${deprHeight})` : ''}`,
          facts: [
            { label: 'Впадина', val: deprTitle },
            ...(deprHeight ? [{ label: 'Абсолютная отметка', val: deprHeight }] : []),
            { label: 'Материк', val: item.region || item.continent || '' }
          ]
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
        if (normalizedMod.id === 'module2') {
          const cnt = (cat) => normalizedMod.items.filter((i) => i.category === cat).length;
          normalizedMod.decks = [
            { id: 'm2_mountains', title: 'Горы и нагорья', count: cnt('mountains') },
            { id: 'm2_volcanoes', title: 'Вулканы', count: cnt('volcanoes') },
            { id: 'm2_plains', title: 'Равнины, плато и впадины', count: cnt('plains') }
          ];
        }
        this.modules.push(normalizedMod);
      });

      this.allItems
        .filter((it) => it.category === 'rivers')
        .map((r) => {
          const m = (r.ankiCard?.backMetrics || []).find((x) => String(x.label || '').toLowerCase().includes('длин'));
          return { r, lenNum: m ? parseInt(String(m.value || '').replace(/\D/g, ''), 10) || 0 : 0 };
        })
        .sort((a, b) => b.lenNum - a.lenNum)
        .forEach((entry, idx) => { entry.r._riverLengthRank = idx + 1; });

      this.allItems
        .filter((it) => it.category === 'mountains' && it.peakName && it.peakName !== '-')
        .map((m) => ({ m, hNum: parseInt(String(m.heightM || '').replace(/\D/g, ''), 10) || 0 }))
        .sort((a, b) => b.hNum - a.hNum)
        .forEach((entry, idx) => { entry.m._mtnHeightRank = idx + 1; });
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
      const fresh = Math.max(0, total - mastered - learning);
      const remaining = Math.max(0, total - mastered);
      const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
      return { total, mastered, practiced, learning, fresh, remaining, weakSpots, pct };
    },

    getModuleStats(moduleId, scope) {
      return this.getStatsForItems(
        this.filterItems({ moduleId, scope, mapOnly: moduleId !== 'module1' })
      );
    },

    getSubmoduleStats(moduleId, submoduleId, scope) {
      const includeOral = submoduleId === 'm1_continents_earth';
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

      const skipped = (this.meta && this.meta.skippedCards) || {};

      if (mode === 'theory') {
        const theory = this.getModuleTheoryItems(moduleId, scope).filter((it) => !skipped[it.id]);
        return GeoAtlas.GeoMath.sortItemsBasicToNiche(theory, (id) => this.getState(id), step, { submoduleId });
      }

      if (mode === 'weak') {
        const weak = this.getWeakSpotsItems(moduleId).filter(
          (it) => !(skipped[it.id] && GeoAtlas.GeoMath.isOralTheoryItem(it))
        );
        return GeoAtlas.GeoMath.sortItemsBasicToNiche(weak, (id) => this.getState(id), step, { submoduleId });
      }

      const includeM1Theory =
        submoduleId === 'm1_continents_earth' ||
        (moduleId === 'module1' && !submoduleId) ||
        (!moduleId && !submoduleId);
      const pool = this.filterItems({ moduleId, submoduleId, scope, mapOnly: !includeM1Theory }).filter(
        (it) => !(skipped[it.id] && GeoAtlas.GeoMath.isOralTheoryItem(it))
      );
      if (pool.length === 0) return [];

      if (mode === 'learn') {
        const pending = pool.filter((it) => {
          const s = this.getState(it.id);
          return !(this.isMastered(s) && (s.dueStep || 0) > step);
        });
        const activePool = pending.length > 0 ? pending : pool;
        const ordered = GeoAtlas.GeoMath.sortItemsBasicToNiche(activePool, (id) => this.getState(id), step, { submoduleId });
        return limit ? ordered.slice(0, limit) : ordered;
      }

      const shuffled = pool.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return limit ? shuffled.slice(0, limit) : shuffled;
    },

    saveSectionResume(sectionKey, itemId) {
      if (!sectionKey || !itemId) return;
      this.meta.sectionResume = this.meta.sectionResume || {};
      this.meta.sectionResume[sectionKey] = {
        id: itemId,
        scope: this.meta.scope || 'full',
        updatedAt: Date.now()
      };
      GeoAtlas.StorageAdapter?.saveMeta(this.meta);
    },

    clearSectionResume(sectionKey) {
      if (!sectionKey || !this.meta.sectionResume || !this.meta.sectionResume[sectionKey]) return;
      delete this.meta.sectionResume[sectionKey];
      GeoAtlas.StorageAdapter?.saveMeta(this.meta);
    },

    applySectionResume(sectionKey, freshQueue) {
      if (!sectionKey || !Array.isArray(freshQueue) || freshQueue.length <= 1) return freshQueue;
      const entry = this.meta.sectionResume && this.meta.sectionResume[sectionKey];
      if (!entry || !entry.id || entry.scope !== (this.meta.scope || 'full')) return freshQueue;
      const idx = freshQueue.findIndex((it) => it.id === entry.id);
      if (idx <= 0) return freshQueue;
      return freshQueue.slice(idx).concat(freshQueue.slice(0, idx));
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

      const wasMastered = prev.status === 'mastered' || reps >= 2;
      const theoryMissed = hadFlipCard && !theoryRecalled;

      if (mapRevealed) {
        grade = 'FAIL';
        lapses += 1;
        if (wasMastered) {
          reps = Math.max(1, reps - 1);
          status = reps >= 2 ? 'mastered' : 'learning';
          weakSpot = null;
          dueOffset = 12;
        } else {
          reps = 0;
          status = 'learning';
          weakSpot = theoryMissed ? 'both' : 'map';
          dueOffset = 3;
        }
      } else if (mapMistakes >= 2 || (mapMistakes === 1 && theoryMissed)) {
        grade = 'WEAK';
        lapses += 1;
        if (wasMastered) {
          reps = Math.max(1, reps - 1);
          status = reps >= 2 ? 'mastered' : 'learning';
          weakSpot = null;
          dueOffset = 14;
        } else {
          reps = 0;
          status = 'learning';
          weakSpot = theoryMissed ? 'both' : 'map';
          dueOffset = 5;
        }
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
    },

    markMastered(itemId) {
      if (!itemId) return null;
      this.meta.sessionStep = (this.meta.sessionStep || 0) + 1;
      const step = this.meta.sessionStep;
      const prev = this.getState(itemId);
      const next = {
        status: 'mastered',
        reps: Math.max(3, (prev.reps || 0) + 1),
        lapses: prev.lapses || 0,
        dueStep: step + 9999,
        lastReviewedAt: Date.now(),
        weakSpot: null
      };
      this.states[itemId] = next;
      if (GeoAtlas.StorageAdapter) {
        GeoAtlas.StorageAdapter.saveStates(this.states);
        GeoAtlas.StorageAdapter.saveMeta(this.meta);
      }
      return next;
    }
  };

  GeoAtlas.QuizConfig = QuizConfig;
  GeoAtlas.LearningEngine = LearningEngine;
  GeoAtlas.extractCapePrompt = extractCapePrompt;
})(window);
