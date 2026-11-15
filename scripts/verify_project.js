#!/usr/bin/env node
/**
 * ГеоАтлас v10.0 — Automated Verification Suite
 */
'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function run() {
  console.log('=== ГеоАтлас v10.0 Verification Suite ===');

  // 1. JS Syntax & Line Count / CSS !important Checks
  const jsFiles = [
    'desktop_boost.js',
    'data/data_module1.js',
    'data/data_module2.js',
    'data/data_module3.js',
    'data/data_module4.js',
    'js/01-motion-audio.js',
    'js/02-storage.js',
    'js/03-geo-math.js',
    'js/04-map-engine.js',
    'js/05-learning-engine.js',
    'js/06-ui-hub.js',
    'js/07-ui-trainer.js',
    'js/08-ui-atlas-cheatsheet.js'
  ];

  jsFiles.forEach((f) => {
    execFileSync('node', ['-c', path.join(ROOT, f)]);
  });

  const modularFiles = jsFiles.filter((f) => f.startsWith('js/')).concat([
    'css/01-tokens-daisy.css',
    'css/02-kokonut-hub.css',
    'css/03-map-hud.css',
    'css/04-flipcard-modals.css'
  ]);

  modularFiles.forEach((f) => {
    const content = read(f);
    const lines = content.split('\n').length;
    assert(lines < 700, `${f} exceeds 700 lines (${lines})`);
    if (f.endsWith('.css')) {
      assert(!content.includes('!important'), `${f} must contain 0 !important rules`);
    }
  });
  const cssAll = ['css/01-tokens-daisy.css', 'css/02-kokonut-hub.css', 'css/03-map-hud.css', 'css/04-flipcard-modals.css'].map(read).join('\n');
  assert(cssAll.includes('.hidden.hidden'), '.hidden must have >= (0,2,0) specificity to beat component display rules');
  console.log(`[PASS] Syntax, line budgets (<700), and 0 !important checks (${modularFiles.length} files)`);

  // 2. HTML ID & Script Reference Checks
  const html = read('index.html');
  assert(!html.includes('subtaskOverlay') && !html.includes('briefingOverlay'), 'Dead overlays removed from index.html');
  assert(!html.includes('src="app.js"') && !html.includes('href="style.css"') && !html.includes('src="data.js"'), 'Old monoliths removed from index.html');
  ['vendor/leaflet.js', 'vendor/world_vector.js', 'js/01-motion-audio.js', 'js/08-ui-atlas-cheatsheet.js'].forEach((src) => {
    assert(html.includes(src), `index.html loads ${src}`);
  });
  const brandingCheck = [html, read('README.md'), read('ИНСТРУКЦИЯ.txt'), ...jsFiles.map(read)].join('\n');
  assert(!brandingCheck.includes('БГУ'), 'All mentions of БГУ must be removed');
  assert(html.includes('Номенклатура ОЗ'), 'Site renamed to Номенклатура ОЗ');
  assert(!html.includes('Тренажёр') && !html.includes('Тренажер'), 'Word тренажёр removed from index.html');
  assert(!html.includes('quizBar'), 'Quiz mode removed from index.html');
  assert(!html.includes('oralTheoryBanner'), 'Global oralTheoryBanner removed');
  assert(html.includes('<option value="module1" selected>'), 'Atlas defaults to module1');
  assert(!html.includes('scopeSelector') && !html.includes('btnOpenAtlasGlobal') && !html.includes('btnOpenCheatsheet'), 'Scope selector, Atlas and Cheatsheet buttons removed from Hub');
  assert(!html.includes('btnHint') && !html.includes('vector_offline'), 'Hint button and vector map mode removed');
  assert(html.includes('btnHubResetProgress'), 'Bottom reset progress button present');

  const htmlIds = new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g)).map((m) => m[1]));
  const uiCode = ['js/06-ui-hub.js', 'js/07-ui-trainer.js', 'js/08-ui-atlas-cheatsheet.js'].map(read).join('\n');
  assert(!html.includes('🩹') && !uiCode.includes('🩹'), 'Band-aid emoji replaced everywhere');
  const referencedIds = Array.from(uiCode.matchAll(/(?:getElementById|byId)\(['"]([^'"]+)['"]\)/g)).map((m) => m[1]);
  referencedIds.forEach((id) => {
    assert(htmlIds.has(id), `DOM id #${id} referenced in JS must exist in index.html`);
  });
  console.log(`[PASS] DOM ID parity verified (${referencedIds.length} references)`);

  // 3. Load Data & Core Modules in Node Sandbox
  global.window = global;
  const mockStore = {};
  global.localStorage = {
    getItem: (k) => (k in mockStore ? mockStore[k] : null),
    setItem: (k, v) => { mockStore[k] = String(v); },
    removeItem: (k) => { delete mockStore[k]; }
  };

  ['data/data_module1.js', 'data/data_module2.js', 'data/data_module3.js', 'data/data_module4.js',
   'js/02-storage.js', 'js/03-geo-math.js', 'js/05-learning-engine.js'].forEach((f) => {
    eval(read(f));
  });

  const { GeoMath, LearningEngine, QuizConfig, StorageAdapter } = global.GeoAtlas;

  // Data integrity assertions
  const reg = global.GEO_MODULES_REGISTRY;
  assert(reg && reg.module1 && reg.module2 && reg.module3 && reg.module4, 'All 4 modules exist');
  const allItems = [
    ...reg.module1.items,
    ...reg.module2.items,
    ...reg.module3.items,
    ...reg.module4.items
  ];
  const seenIds = new Set();
  allItems.forEach((it) => {
    assert(it.id && it.name, 'Every item has id and name');
    assert(!seenIds.has(it.id), `Duplicate id detected: ${it.id}`);
    seenIds.add(it.id);
    assert(it.geometryType, `Item ${it.id} missing geometryType`);
  });

  const m1Cont = reg.module1.items.filter((i) => i.submoduleId === 'm1_continents_earth');
  assert.strictEqual(m1Cont.length, 46, `Expected 46 items in m1_continents_earth (21 capes + 12 extremes + 13 theory), got ${m1Cont.length}`);
  assert.strictEqual(reg.module1.decks.length, 4, 'Module 1 must have 4 subdecks');
  assert(!reg.module1.items.some((i) => i.id === 'm1_earth_total_area' || i.id === 'm1_earth_land_area'), 'Earth total area & land % removed');
  assert(!reg.module1.items.some((i) => ['m1_desert_hamada', 'm1_desert_serir_reg', 'm1_desert_erg_kum_nefud', 'm1_desert_shor_takyr'].includes(i.id)), 'Desert glossary cards removed');
  assert(!reg.module1.items.some((i) => i.id === 'm1_bermuda_triangle'), 'Bermuda triangle removed');
  assert.strictEqual(reg.module1.items.filter((i) => i.submoduleId === 'm1_peninsulas').length, 60, 'Expected 60 items in m1_peninsulas');
  assert.strictEqual(reg.module1.items.filter((i) => i.submoduleId === 'm1_islands').length, 148, 'Expected 148 items in m1_islands');
  assert.strictEqual(reg.module1.items.filter((i) => i.submoduleId === 'm1_deserts').length, 38, 'Expected 38 items in m1_deserts');
  assert.strictEqual(reg.module1.items.filter((i) => i.askConstituentIslands).length, 24, 'All 24 archipelagos with constituent islands ask theory card');

  const andes = reg.module2.items.find((i) => i.id === 'm2_mtn_andes');
  const ural = reg.module2.items.find((i) => i.id === 'm2_mtn_ural_mountains');
  const med = reg.module3.items.find((i) => i.id === 'm3_sea_mediterranean');
  const casp = reg.module4.items.find((i) => i.id === 'm4_lk_caspian_sea');
  const hindustan = reg.module1.items.find((i) => i.id === 'm1_pen_15');
  assert(andes && andes.geometryType === 'polyline' && andes.coords.length >= 2, 'Andes must be polyline');
  assert(ural && ural.geometryType === 'polyline' && ural.coords.length >= 2, 'Ural must be polyline');
  assert(med && GeoMath.normalizeBounds(med.bounds), 'Mediterranean Sea must normalize bounds');
  assert(casp && GeoMath.normalizeBounds(casp.bounds), 'Caspian Sea must normalize bounds');
  assert(hindustan && GeoMath.normalizeBounds(hindustan.bounds), 'Hindustan must normalize bounds');
  console.log(`[PASS] Data integrity (${allItems.length} unique objects, geometry & bounds verified)`);

  // 4. Spatial Hitboxes & Basic->Niche Ordering Assertions
  const andesMid = andes.coords[Math.floor(andes.coords.length / 2)];
  assert(GeoMath.checkSpatialHit(andesMid[0] + 0.3, andesMid[1] + 0.3, andes, 4).hit, 'Andes polyline hit near segment');
  assert(!GeoMath.checkSpatialHit(0, 0, andes, 4).hit, 'Atlantic ocean click misses Andes');
  assert(GeoMath.checkSpatialHit(36, 18, med, 4).hit, 'Inside Mediterranean Sea bounds must hit');
  assert(!GeoMath.checkSpatialHit(55, 18, med, 4).hit, 'Baltic area click must miss Mediterranean Sea');
  assert(GeoMath.checkSpatialHit(9.2, 77.5, hindustan, 4).hit, 'Southern edge of Hindustan peninsula must hit');
  assert(!GeoMath.checkSpatialHit(55, 77.5, hindustan, 4).hit, 'Siberia click must miss Hindustan');
  assert(GeoMath.calcDistanceKm(0, 179.5, 0, -179.5) < 130, 'Antimeridian shortest distance < 130km');
  assert.strictEqual(GeoMath.calcCompass8Rhumb(0, 0, 10, 0).dir, 'С', 'North compass direction');
  assert.strictEqual(GeoMath.calcCompass8Rhumb(0, 0, 10, 10).dir, 'СВ', 'North-East compass direction');

  const ordered = GeoMath.sortItemsBasicToNiche(reg.module1.items.filter((i) => !GeoMath.isOralTheoryItem(i)));
  const firstNonCore = ordered.findIndex((x) => !x.isCoreLandmark);
  assert(firstNonCore > 0, 'Basic core landmarks ordered before niche objects');

  // Antimeridian wrapping verification (Chukotka bounds, Aleutian trench polyline)
  const chukotka = reg.module1.items.find((i) => i.id === 'm1_pen_54');
  const chukBounds = GeoMath.normalizeBounds(chukotka.bounds);
  assert(chukBounds[1][1] - chukBounds[0][1] < 40, 'Chukotka antimeridian bounds must wrap eastward (<40 deg), not across globe');
  const aleutTr = reg.module3.items.find((i) => i.id === 'm3_tr_aleutian_trench');
  const unwrappedTr = GeoMath.unwrapAntimeridianCoords(aleutTr.coords);
  const trLngs = unwrappedTr.map((c) => c[1]);
  assert(Math.max(...trLngs) - Math.min(...trLngs) < 60, 'Aleutian trench antimeridian polyline unwrapped (<60 deg span)');
  console.log('[PASS] Spatial hitboxes, antimeridian unwrapping, bounds, compass & basic->niche ordering');

  // 5. AutoCompositeSRS, m2_depressions Fix & Storage Legacy Migration
  mockStore['geoatlas_cont_anki_states'] = JSON.stringify({
    eurasia_area: { reps: 2, lapses: 0 },
    bermuda_triangle_quiz: { reps: 1, lapses: 1 }
  });
  let loadedData = null;
  StorageAdapter.load((d) => { loadedData = d; });
  assert(loadedData && loadedData.states.m1_cont_eurasia_area, 'Migrated eurasia_area -> m1_cont_eurasia_area');
  assert(loadedData.states.m1_bermuda_triangle, 'Migrated bermuda_triangle_quiz -> m1_bermuda_triangle');

  assert.strictEqual(StorageAdapter.defaultMeta().scope, 'full', 'Default scope must be full');
  assert.deepStrictEqual(StorageAdapter.defaultMeta().exploredSections, {}, 'Default exploredSections must be empty object');
  LearningEngine.init({}, StorageAdapter.defaultMeta());

  // Verify M1 oral cards live inside m1_continents_earth (standalone M1 theory bar hidden), M3 keeps 5 whole oceans
  assert.strictEqual(LearningEngine.getModuleTheoryItems('module1', 'full').length, 0, 'M1 standalone theory bar hidden (integrated into m1_continents_earth)');
  const m1GeneralQueue = LearningEngine.buildSessionQueue({ mode: 'learn', moduleId: 'module1', submoduleId: 'm1_continents_earth' });
  assert.strictEqual(m1GeneralQueue.length, 46, `m1_continents_earth queue has 46 items (got ${m1GeneralQueue.length})`);
  assert(m1GeneralQueue[0].name.includes('Северная Америка') || m1GeneralQueue[0].region === 'Северная Америка', 'Continent block starts with North America');
  assert(m1GeneralQueue.slice(0, 8).every((i) => i.region === 'Северная Америка' || i.focusContinent === 'Северная Америка'), 'North America items are grouped into a contiguous 8-item block');

  // Verify archipelago constituent islands card ONLY on 12 key archipelagos & no name spoiler
  const brit = reg.module1.items.find((i) => i.id === 'm1_cont_isl_7');
  assert(brit && !brit.name.includes(':') && brit.askConstituentIslands, 'British Isles prompt does not spoil constituent list');
  const britSpec = QuizConfig.buildCardSpec(brit, 'essentials', LearningEngine.meta.customModules);
  assert(britSpec.requiresFlipCard && britSpec.answer.includes('Великобритания'), 'British Isles opens constituent islands flip card');
  const frJ = reg.module1.items.find((i) => i.id === 'm1_cont_isl_17');
  assert(frJ && !frJ.name.includes(':') && frJ.askConstituentIslands && QuizConfig.buildCardSpec(frJ, 'essentials', LearningEngine.meta.customModules).requiresFlipCard, 'All archipelagos with constituent list open theory card');

  const aDesert = reg.module1.items.find((i) => i.category === 'desert');
  assert(aDesert && !QuizConfig.buildCardSpec(aDesert, 'custom_full', { module1: { islands: true } }).requiresFlipCard, 'Desert items do not prompt characteristic cards');
  assert.strictEqual(LearningEngine.getSubmoduleStats('module3', 'm3_seas', 'full').total, 57, 'M3 seas deck matches all 57 map seas');
  assert.strictEqual(LearningEngine.getSubmoduleStats('module4', 'm4_lakes', 'full').total, 71, 'M4 lakes deck matches all 71 lakes');
  assert.strictEqual(LearningEngine.getSubmoduleStats('module2', 'm2_orogeny', 'full').total, 117, 'M2 orogeny deck matches all 117 mountains');
  assert.strictEqual(LearningEngine.getModuleTheoryItems('module3', 'full').length, 11, 'M3 oral theory has 11 ocean & boundary cards');
  assert.strictEqual(LearningEngine.getModuleTheoryItems('module2', 'full').length, 0, 'M2 has no standalone non-map card deck');
  assert.strictEqual(LearningEngine.getModuleTheoryItems('module4', 'full').length, 0, 'M4 has no standalone non-map card deck');

  // Verify M1 map queue starts with Capes -> Continent Peaks/Depressions -> Rest, and Peak card asks height
  const m1MapQueue = LearningEngine.buildSessionQueue({ mode: 'learn', moduleId: 'module1' });
  const firstNonCapeIdx = m1MapQueue.findIndex((i) => i.category !== 'extreme_point');
  assert(firstNonCapeIdx === 21, `All 21 capes must come first in M1 queue (got ${firstNonCapeIdx})`);
  assert(
    m1MapQueue[21].category === 'continent_peak' || m1MapQueue[21].category === 'continent_depr',
    'Continent peaks/depressions immediately follow capes in M1 queue'
  );
  const everest = reg.module1.items.find((i) => i.id === 'm1_cont_eurasia_peak');
  assert(!GeoMath.isOralTheoryItem(everest), 'Continent peaks are on the map, not oral-only');
  const everestSpec = QuizConfig.buildCardSpec(everest, 'essentials', LearningEngine.meta.customModules);
  assert(everestSpec.requiresFlipCard && /высоту/i.test(everestSpec.prompt) && everestSpec.answer.includes('8848'), 'Everest map card asks height (8848 м)');
  assert(!everestSpec.frontTitle.toLowerCase().includes('эверест'), 'Everest front title must not spoil peak name');
  assert(everestSpec.answer.includes('Эверест') || everestSpec.answer.includes('Джомолунгма'), 'Everest card answer reveals peak name');

  // Verify blind cape prompt does not leak cape name and card reveals it
  const capeWest = reg.module1.items.find((i) => i.id === 'm1_cape_africa_west');
  const capePrompt = global.GeoAtlas.extractCapePrompt(capeWest);
  assert(!capePrompt.toLowerCase().includes('альмади'), 'Blind cape map prompt must not spoil Альмади');
  const capeSpec = QuizConfig.buildCardSpec(capeWest, 'essentials', LearningEngine.meta.customModules);
  assert(
    capeSpec.requiresFlipCard &&
      capeSpec.frontTitle &&
      !capeSpec.frontTitle.toLowerCase().includes('альмади') &&
      capeSpec.answer.includes('Альмади'),
    'Cape flip card front hides Альмади and back reveals it'
  );

  // Verify M2 unified relief deck & smart essentials cards
  assert.strictEqual(reg.module2.decks.length, 1, 'M2 has single unified relief deck');
  assert.strictEqual(reg.module2.decks[0].id, 'm2_all_relief', 'M2 deck id is m2_all_relief');
  assert.strictEqual(reg.module2.decks[0].count, 263, 'M2 deck count is 263');
  const m2Deps = reg.module2.items.filter((i) => i.submoduleId === 'm2_depressions');
  const m2CoreDeps = m2Deps.filter((d) => d.isCoreLandmark);
  assert(m2CoreDeps.some((d) => d.id === 'm2_depr_ghor'), 'm2_depr_ghor is marked isCoreLandmark');
  m2CoreDeps.forEach((d) => {
    const spec = QuizConfig.buildCardSpec(d, 'essentials', LearningEngine.meta.customModules);
    assert(spec.requiresFlipCard, `Core depression ${d.id} must have theory flip card`);
  });
  const m2NonCoreDep = m2Deps.find((d) => !d.isCoreLandmark);
  assert(m2NonCoreDep && !QuizConfig.buildCardSpec(m2NonCoreDep, 'essentials', LearningEngine.meta.customModules).requiresFlipCard, 'Non-core depression skips flip card in essentials');
  const m2NonCoreMt = reg.module2.items.find((i) => i.category === 'mountains' && !i.isCoreLandmark);
  assert.strictEqual(m2NonCoreMt.categoryLabel, 'Горы', 'Mountain categoryLabel must not spoil folding epoch');
  const m2MtSpec = QuizConfig.buildCardSpec(m2NonCoreMt, 'essentials', LearningEngine.meta.customModules);
  assert.strictEqual(m2MtSpec.badge, 'Горы', 'Mountain flip card badge must not spoil folding epoch');
  assert(m2MtSpec.requiresFlipCard && /складчатост/i.test(m2MtSpec.prompt) && !/вершин/i.test(m2MtSpec.prompt), 'Non-core mountain asks epoch without peak');
  const m3Current = reg.module3.items.find((i) => i.category === 'currents');
  assert.strictEqual(m3Current.categoryLabel, 'Океаническое течение', 'Current categoryLabel must not spoil thermal type');
  const m2OrdinaryPlain = reg.module2.items.find((i) => i.category === 'plains' && !i.isCoreLandmark && i.submoduleId !== 'm2_depressions');
  assert(m2OrdinaryPlain && !QuizConfig.buildCardSpec(m2OrdinaryPlain, 'essentials', LearningEngine.meta.customModules).requiresFlipCard, 'Ordinary plain is map-only in essentials');

  // Verify M3 4-deck split
  assert.strictEqual(reg.module3.decks.length, 4, 'M3 has 4 subsections');
  assert.deepStrictEqual(
    reg.module3.decks.map((d) => d.id),
    ['m3_oceans_theory', 'm3_seas_straits_gulfs', 'm3_trenches', 'm3_currents'],
    'M3 deck ids match expected order'
  );
  assert.strictEqual(LearningEngine.getSubmoduleStats('module3', 'm3_seas_straits_gulfs', 'full').total, 171, 'M3 seas/straits/gulfs matches 171 items');
  assert.strictEqual(LearningEngine.getSubmoduleStats('module3', 'm3_trenches', 'full').total, 35, 'M3 trenches matches 35 items');
  assert.strictEqual(LearningEngine.getSubmoduleStats('module3', 'm3_currents', 'full').total, 45, 'M3 currents matches 45 items');

  // Verify M4 single deck & 20 blind record-holder cards
  assert.strictEqual(reg.module4.decks.length, 1, 'M4 has single unified waters deck');
  assert.strictEqual(reg.module4.decks[0].id, 'm4_all_waters', 'M4 deck id is m4_all_waters');
  assert.strictEqual(reg.module4.decks[0].count, 253, 'M4 deck count is 253');
  const m4Records = reg.module4.items.filter((i) => Boolean(i.recordPrompt));
  assert.strictEqual(m4Records.length, 20, 'M4 has 20 recordPrompt items');
  m4Records.forEach((rec) => {
    const spec = QuizConfig.buildCardSpec(rec, 'essentials', LearningEngine.meta.customModules);
    assert(spec.requiresFlipCard && !spec.frontTitle.toLowerCase().includes(rec.name.toLowerCase()) && spec.answer.includes(rec.name), `Record item ${rec.id} has blind card revealing name`);
  });
  const baikal = reg.module4.items.find((i) => i.id === 'm4_lk_baikal');
  const baikalSpec = QuizConfig.buildCardSpec(baikal, 'essentials', LearningEngine.meta.customModules);
  assert(baikalSpec.requiresFlipCard && baikalSpec.answer.includes('Байкал'), 'Baikal blind record card reveals Байкал');
  const nile = reg.module4.items.find((i) => i.id === 'm4_riv_nile');
  const nileSpec = QuizConfig.buildCardSpec(nile, 'essentials', LearningEngine.meta.customModules);
  assert(nileSpec.requiresFlipCard && nileSpec.answer.includes('Нил'), 'Nile blind record card reveals Нил');

  // Verify Anki learning stage (reps=1 -> learning, dueOffset=6) & dueStep resurfacing
  const islandBefore = LearningEngine.buildSessionQueue({ mode: 'learn', moduleId: 'module1', submoduleId: 'm1_islands' });
  const firstIsland = islandBefore[0];
  const islandRes = LearningEngine.recordCompositeResult(firstIsland.id, { mapMistakes: 0, theoryRecalled: true, hadFlipCard: false });
  assert.strictEqual(islandRes.state.status, 'learning', '1 clean answer keeps item in Anki learning stage');
  assert.strictEqual(islandRes.dueOffset, 18, '1st clean answer schedules calm Anki repeat after 18 steps');
  const islandStatsAfter = LearningEngine.getSubmoduleStats('module1', 'm1_islands', 'full');
  assert(islandStatsAfter.learning >= 1 && islandStatsAfter.mastered === 0, '1 clean answer counts as in-progress learning, not yet mastered');
  const islandAfter = LearningEngine.buildSessionQueue({ mode: 'learn', moduleId: 'module1', submoduleId: 'm1_islands' });
  assert.notStrictEqual(islandAfter[0].id, firstIsland.id, 'Re-entering before dueStep continues with unvisited items first');
  LearningEngine.meta.sessionStep = islandRes.state.dueStep;
  const islandWhenDue = LearningEngine.buildSessionQueue({ mode: 'learn', moduleId: 'module1', submoduleId: 'm1_islands' });
  assert.strictEqual(islandWhenDue[0].id, firstIsland.id, 'When Anki dueStep arrives, learning item resurfaces at front of queue');

  // SRS transitions
  let r1 = LearningEngine.recordCompositeResult('m2_mtn_ural_mountains', { mapMistakes: 0, mapRevealed: false, theoryRecalled: true, hadFlipCard: true });
  assert.strictEqual(r1.grade, 'STRONG');
  assert.strictEqual(r1.state.status, 'learning');
  assert.strictEqual(r1.state.reps, 1);

  let r2 = LearningEngine.recordCompositeResult('m2_mtn_ural_mountains', { mapMistakes: 0, mapRevealed: false, theoryRecalled: true, hadFlipCard: true });
  assert.strictEqual(r2.grade, 'STRONG');
  assert.strictEqual(r2.state.status, 'mastered');
  assert.strictEqual(r2.state.reps, 2);

  let rTheory = LearningEngine.recordCompositeResult('m2_mtn_andes', { mapMistakes: 0, mapRevealed: false, theoryRecalled: false, hadFlipCard: true });
  assert.strictEqual(rTheory.grade, 'MEDIUM_THEORY');
  assert.strictEqual(rTheory.state.weakSpot, 'theory');

  let rFail = LearningEngine.recordCompositeResult('m3_sea_mediterranean', { mapMistakes: 3, mapRevealed: true, theoryRecalled: false, hadFlipCard: true });
  assert.strictEqual(rFail.grade, 'FAIL');
  assert.strictEqual(rFail.state.reps, 0);
  assert.strictEqual(rFail.state.weakSpot, 'both');
  assert(LearningEngine.getWeakSpotsItems().length >= 2, 'Weak spots queue populated');

  // 6. Telegram Mini App CloudStorage Dynamic Chunking & Haptics Integration
  const mockCloud = {};
  const hapticCalls = [];
  global.Telegram = {
    WebApp: {
      initData: 'query_id=test',
      platform: 'ios',
      version: '8.0',
      isVersionAtLeast: () => true,
      ready: () => {},
      expand: () => {},
      disableVerticalSwipes: () => {},
      enableClosingConfirmation: () => {},
      disableClosingConfirmation: () => {},
      setHeaderColor: () => {},
      setBackgroundColor: () => {},
      setBottomBarColor: () => {},
      onEvent: () => {},
      BackButton: { onClick: () => {}, show: () => {}, hide: () => {} },
      HapticFeedback: {
        impactOccurred: (s) => hapticCalls.push(['impact', s]),
        notificationOccurred: (t) => hapticCalls.push(['notification', t]),
        selectionChanged: () => hapticCalls.push(['selection'])
      },
      CloudStorage: {
        getKeys: (cb) => cb(null, Object.keys(mockCloud)),
        getItems: (keys, cb) => {
          const out = {};
          keys.forEach((k) => { if (k in mockCloud) out[k] = mockCloud[k]; });
          cb(null, out);
        },
        setItem: (k, v, cb) => {
          assert(String(v).length <= 4096, `CloudStorage value for ${k} exceeds 4096 chars (${String(v).length})`);
          mockCloud[k] = String(v);
          if (cb) cb(null, true);
        },
        removeItem: (k, cb) => { delete mockCloud[k]; if (cb) cb(null, true); },
        removeItems: (ks, cb) => { ks.forEach((k) => delete mockCloud[k]); if (cb) cb(null, true); }
      }
    }
  };
  eval(read('js/01-motion-audio.js'));
  global.GeoAtlas.TelegramBridge.init();
  global.GeoAtlas.TelegramBridge.hapticNotification('success');
  global.GeoAtlas.TelegramBridge.hapticImpact('medium');
  global.GeoAtlas.TelegramBridge.hapticSelection();
  assert.strictEqual(hapticCalls.length, 3, 'All 3 Telegram HapticFeedback methods invoked');
  global.GeoAtlas.TelegramBridge.setHapticsEnabled(false);
  global.GeoAtlas.TelegramBridge.hapticImpact('light');
  assert.strictEqual(hapticCalls.length, 3, 'Haptic mute flag disables vibrations');
  global.GeoAtlas.TelegramBridge.setHapticsEnabled(true);

  const bigStates = {};
  allItems.slice(0, 420).forEach((it, idx) => {
    bigStates[it.id] = { status: idx % 2 === 0 ? 'mastered' : 'learning', reps: idx % 2 === 0 ? 2 : 1, lapses: 0, dueStep: idx + 10, lastReviewedAt: 1794670000000 + idx * 60000, weakSpot: null };
  });
  StorageAdapter.saveStates(bigStates);
  StorageAdapter.flushCloud();
  const v10Keys = Object.keys(mockCloud).filter((k) => k.startsWith('geo_v10_c'));
  assert(v10Keys.length >= 3, `Expected multi-chunk CloudStorage split for 420 items, got ${v10Keys.length}`);
  Object.keys(mockStore).forEach((k) => delete mockStore[k]);
  let cloudRestored = null;
  StorageAdapter.load((d) => { cloudRestored = d; });
  assert(cloudRestored && Object.keys(cloudRestored.states).length === 420, `CloudStorage restored all 420 states without localStorage (got ${cloudRestored && Object.keys(cloudRestored.states).length})`);
  StorageAdapter.clearStates(bigStates);
  assert.strictEqual(Object.keys(mockCloud).filter((k) => k.startsWith('geo_v10_c')).length, 0, 'clearStates wipes all CloudStorage chunks');
  console.log(`[PASS] Telegram Mini App CloudStorage chunking (${v10Keys.length} chunks, 420 states) & Haptics`);

  // Check .app bundle sync if folder exists
  const appWww = path.join(ROOT, 'ГеоАтлас.app/Contents/Resources/www');
  if (fs.existsSync(appWww)) {
    assert(fs.existsSync(path.join(appWww, 'js/08-ui-atlas-cheatsheet.js')), '.app www/js synced');
    assert(fs.existsSync(path.join(appWww, 'css/04-flipcard-modals.css')), '.app www/css synced');
    assert(!fs.existsSync(path.join(appWww, 'app.js')), '.app legacy app.js removed');
    assert(!fs.existsSync(path.join(appWww, 'style.css')), '.app legacy style.css removed');
    assert(!fs.existsSync(path.join(appWww, 'data.js')), '.app legacy data.js removed');
  }

  console.log('[PASS] AutoCompositeSRS, m2_depressions fix, Legacy Migration & Bundle Sync');
  console.log('ALL TESTS PASSED!');
}

run();
