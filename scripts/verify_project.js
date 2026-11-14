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

  const htmlIds = new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g)).map((m) => m[1]));
  const uiCode = ['js/06-ui-hub.js', 'js/07-ui-trainer.js', 'js/08-ui-atlas-cheatsheet.js'].map(read).join('\n');
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
  assert.strictEqual(m1Cont.length, 34, `Expected 34 items in m1_continents_earth, got ${m1Cont.length}`);

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
  console.log('[PASS] Spatial hitboxes (incl. Hindustan edge), bounds, antimeridian, compass & basic->niche ordering');

  // 5. AutoCompositeSRS, m2_depressions Fix & Storage Legacy Migration
  mockStore['geoatlas_cont_anki_states'] = JSON.stringify({
    eurasia_area: { reps: 2, lapses: 0 },
    bermuda_triangle_quiz: { reps: 1, lapses: 1 }
  });
  let loadedData = null;
  StorageAdapter.load((d) => { loadedData = d; });
  assert(loadedData && loadedData.states.m1_cont_eurasia_area, 'Migrated eurasia_area -> m1_cont_eurasia_area');
  assert(loadedData.states.m1_bermuda_triangle, 'Migrated bermuda_triangle_quiz -> m1_bermuda_triangle');

  LearningEngine.init({}, StorageAdapter.defaultMeta());

  // Verify all 16 m2_depressions produce flip cards in essentials mode
  const m2Deps = reg.module2.items.filter((i) => i.submoduleId === 'm2_depressions');
  assert(m2Deps.length > 0, 'm2_depressions items present');
  m2Deps.forEach((d) => {
    const spec = QuizConfig.buildCardSpec(d, 'essentials', LearningEngine.meta.customModules);
    assert(spec.requiresFlipCard, `Depression ${d.id} must have theory flip card`);
  });

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
