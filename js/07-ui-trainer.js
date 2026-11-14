/**
 * Номенклатура ОЗ — UITrainer (Explore->Recall Flow, Visible Silhouettes, Oral Theory, Blind Capes, Binary Flip Card)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const MODE_LABELS = {
    learn: '🗺️ Учить по карте',
    weak: '🩹 Слабые места',
    theory: '📖 Устная теория'
  };

  const UITrainer = {
    active: false,
    mode: 'learn',
    moduleId: null,
    submoduleId: null,
    pool: [],
    queue: [],
    currentIndex: 0,
    inExploreStage: false,
    mistakes: 0,
    revealed: false,
    awaitingNext: false,
    sessionClean: 0,
    sessionWeak: 0,
    _currentCardSpec: null,
    _exploreReturnIndex: null,

    init() {
      this._bindControls();
    },

    _bindControls() {
      const byId = (id) => document.getElementById(id);

      byId('btnExitTrainer')?.addEventListener('click', () => this.exitToHub());
      byId('btnReopenExplore')?.addEventListener('click', () => {
        if (!this.active || this.mode === 'theory' || !this.pool.length) return;
        this._exploreReturnIndex = this.currentIndex;
        this._openExploreStage();
      });
      byId('btnExploreExit')?.addEventListener('click', () => this.exitToHub());
      byId('btnFlipExitToMenu')?.addEventListener('click', () => this.exitToHub());
      byId('btnExploreStartRecall')?.addEventListener('click', () => this._startRecallFromExplore());
      byId('btnHint')?.addEventListener('click', () => this.showHint());
      byId('btnSkip')?.addEventListener('click', () => this.skipCurrent());
      byId('btnReveal')?.addEventListener('click', () => this.revealCurrent());

      byId('btnFlipShowAnswer')?.addEventListener('click', () => this._flipCardOpen());
      byId('btnFlipForgot')?.addEventListener('click', () => this._finishFlip(false));
      byId('btnFlipRemembered')?.addEventListener('click', () => this._finishFlip(true));
      byId('btnFlipContinue')?.addEventListener('click', () => this._finishFlip(false));
      byId('btnFlipSkipFront')?.addEventListener('click', () => this._skipFlipCard());
      byId('btnFlipSkipBack')?.addEventListener('click', () => this._skipFlipCard());

      byId('btnCloseResults')?.addEventListener('click', () => this.exitToHub());
      byId('btnResultsMenu')?.addEventListener('click', () => this.exitToHub());
      byId('btnResultsWeak')?.addEventListener('click', () => {
        byId('resultsModal')?.classList.add('hidden');
        this.start({ mode: 'weak', moduleId: this.moduleId });
      });
      byId('btnSwitchToFull')?.addEventListener('click', () => {
        GeoAtlas.LearningEngine.meta.scope = 'full';
        GeoAtlas.StorageAdapter.saveMeta(GeoAtlas.LearningEngine.meta);
        this.exitToHub();
      });

      global.addEventListener('keydown', (e) => {
        if (!this.active) return;
        const flipOverlay = byId('flipOverlay');
        if (flipOverlay && !flipOverlay.classList.contains('hidden')) {
          if (e.code === 'Space' || e.key === 'Enter') {
            e.preventDefault();
            const card = byId('flipCard');
            if (card && !card.classList.contains('is-flipped')) {
              this._flipCardOpen();
            } else if (this.revealed) {
              this._finishFlip(false);
            }
          } else if (e.key === 'Escape') {
            this.exitToHub();
          }
          return;
        }
        if (e.key === 'Escape') {
          this.exitToHub();
        } else if (e.key.toLowerCase() === 'h' || e.key.toLowerCase() === 'р') {
          this.showHint();
        } else if (e.key.toLowerCase() === 'k' || e.key.toLowerCase() === 'л') {
          this.skipCurrent();
        } else if (e.key.toLowerCase() === 'r' || e.key.toLowerCase() === 'к') {
          this.revealCurrent();
        }
      });
    },

    start({ mode = 'learn', moduleId = null, submoduleId = null } = {}) {
      const engine = GeoAtlas.LearningEngine;
      const scope = engine.meta.scope;
      const queue = engine.buildSessionQueue({ mode, moduleId, submoduleId });

      if (!queue.length) {
        GeoAtlas.App.showToast('В выбранном разделе пока нет объектов для тренировки');
        return;
      }

      this.active = true;
      this.mode = mode;
      this.moduleId = moduleId;
      this.submoduleId = submoduleId;
      this.queue = queue;
      this.pool =
        mode === 'theory'
          ? []
          : mode === 'weak'
          ? queue.filter((x) => !GeoAtlas.GeoMath.isOralTheoryItem(x))
          : engine.filterItems({ moduleId, submoduleId, scope, mapOnly: true });
      this.currentIndex = 0;
      this.sessionClean = 0;
      this.sessionWeak = 0;
      this._sessionRepeats = {};
      this._exploreReturnIndex = null;

      GeoAtlas.UIHub.hide();
      GeoAtlas.UIAtlas.hideHud();
      document.getElementById('resultsModal')?.classList.add('hidden');

      GeoAtlas.MapEngine.clearAtlas();
      GeoAtlas.MapEngine.clearTrainer();
      GeoAtlas.MapEngine.clearPool();
      GeoAtlas.MapEngine.drawSpecialOverlays(moduleId === 'module1' && !submoduleId);

      if (GeoAtlas.TelegramBridge) {
        GeoAtlas.TelegramBridge.showBackButton(() => this.exitToHub());
        GeoAtlas.TelegramBridge.setClosingConfirmation(true);
      }

      const exploreKey = this._getExploreKey();
      const exploredMap = (engine.meta.exploredSections = engine.meta.exploredSections || {});
      const shouldShowInitialExplore = mode === 'learn' && this.pool.length > 0 && !exploredMap[exploreKey];

      if (shouldShowInitialExplore) {
        exploredMap[exploreKey] = true;
        GeoAtlas.StorageAdapter.saveMeta(engine.meta);
        this._openExploreStage();
      } else {
        this._drawClickablePoolSilhouettes();
        this._presentItem(this.queue[0]);
      }
    },

    _getExploreKey() {
      return this.submoduleId ? `${this.moduleId || 'all'}:${this.submoduleId}` : this.moduleId || 'all';
    },

    exitToHub() {
      this.active = false;
      this.inExploreStage = false;
      this._exploreReturnIndex = null;
      this._hideAllSubBars();
      document.getElementById('trainerHud')?.classList.add('hidden');
      document.getElementById('flipOverlay')?.classList.add('hidden');
      document.getElementById('resultsModal')?.classList.add('hidden');
      GeoAtlas.MapEngine.clearTrainer();
      GeoAtlas.MapEngine.clearPool();
      GeoAtlas.MapEngine.setMapClickHandler(null);
      GeoAtlas.StorageAdapter?.flushCloud?.();
      GeoAtlas.UIHub.show();
    },

    _hideAllSubBars() {
      document.getElementById('exploreBar')?.classList.add('hidden');
      document.getElementById('compassBanner')?.classList.add('hidden');
    },

    _openExploreStage() {
      this.inExploreStage = true;
      this._hideAllSubBars();
      document.getElementById('trainerHud')?.classList.add('hidden');

      const bar = document.getElementById('exploreBar');
      const chipsEl = document.getElementById('exploreChips');
      const infoEl = document.getElementById('exploreInfoStrip');
      const titleEl = document.getElementById('exploreTitle');
      if (!bar || !chipsEl) return;

      const mod = GeoAtlas.LearningEngine.modules.find((m) => m.id === this.moduleId);
      const deck = mod && this.submoduleId ? mod.decks.find((d) => d.id === this.submoduleId) : null;
      const sectionTitle = (deck && deck.title) || (mod && mod.shortTitle) || 'Раздел карты';
      const inspectList = this.pool.length ? this.pool : this.queue;
      if (titleEl) titleEl.textContent = `${sectionTitle} · ${inspectList.length} объектов`;

      const startBtn = document.getElementById('btnExploreStartRecall');
      if (startBtn) {
        startBtn.textContent =
          typeof this._exploreReturnIndex === 'number' ? 'Вернуться к проверке →' : 'Перейти к запоминанию →';
      }

      let selectedId = inspectList[0]?.id || null;

      const showInspectInfo = (it) => {
        if (!infoEl || !it) return;
        const typeLbl = it.categoryLabel || GeoAtlas.LearningEngine.getCategoryLabel(it);
        const detail = [it.region || it.continent, it.ocean || it.basin, it.foldingAge, it.seaType, it.currentType, it.origin, it.description]
          .filter(Boolean)
          .join(' · ');
        infoEl.innerHTML = `<span class="badge badge-type-prominent">${typeLbl}</span> <strong>${it.name}</strong>${detail ? ` — ${detail}` : ''}`;
        infoEl.classList.remove('hidden');
      };

      const renderExplore = () => {
        GeoAtlas.MapEngine.drawPoolShapes(inspectList, {
          selectedId,
          showLabels: true,
          hoverLabel: true,
          onClick: (clicked) => {
            selectedId = clicked.id;
            GeoAtlas.TelegramBridge?.hapticSelection();
            GeoAtlas.MapEngine.fitItem(clicked, 5);
            showInspectInfo(clicked);
            renderExplore();
          }
        });

        chipsEl.innerHTML = inspectList
          .map((it) => {
            const star = it.isCoreLandmark ? '⭐ ' : '';
            return `<button class="cluster-chip ${it.id === selectedId ? 'is-selected' : ''}" data-chip-id="${it.id}" type="button">${star}${it.name}</button>`;
          })
          .join('');
      };

      chipsEl.onclick = (e) => {
        const btn = e.target.closest('[data-chip-id]');
        if (!btn) return;
        const found = inspectList.find((x) => x.id === btn.getAttribute('data-chip-id'));
        if (found) {
          selectedId = found.id;
          GeoAtlas.TelegramBridge?.hapticSelection();
          GeoAtlas.MapEngine.fitItem(found, 5);
          showInspectInfo(found);
          renderExplore();
        }
      };

      GeoAtlas.MapEngine.setMapClickHandler(null);
      if (inspectList[0]) showInspectInfo(inspectList[0]);
      renderExplore();
      GeoAtlas.MapEngine.fitBatch(inspectList, 4);
      bar.classList.remove('hidden');
      GeoAtlas.MotionFX?.reveal(bar);
    },

    _startRecallFromExplore() {
      this.inExploreStage = false;
      GeoAtlas.TelegramBridge?.hapticImpact('light');
      this.currentIndex = typeof this._exploreReturnIndex === 'number' ? this._exploreReturnIndex : 0;
      this._exploreReturnIndex = null;
      document.getElementById('exploreBar')?.classList.add('hidden');
      this._drawClickablePoolSilhouettes();
      this._presentItem(this.queue[this.currentIndex]);
    },

    _drawClickablePoolSilhouettes() {
      if (this.mode === 'theory' || !this.pool.length) {
        GeoAtlas.MapEngine.clearPool();
        GeoAtlas.MapEngine.setMapClickHandler(null);
        return;
      }

      GeoAtlas.MapEngine.drawPoolShapes(this.pool, {
        showLabels: false,
        hoverLabel: false,
        onClick: (clickedItem, latlng) => {
          const z = GeoAtlas.MapEngine.map ? GeoAtlas.MapEngine.map.getZoom() : 4;
          const c = GeoAtlas.GeoMath.getItemCenter(clickedItem);
          const lat = latlng ? latlng.lat : c.lat;
          const lng = latlng ? GeoAtlas.GeoMath.normalizeLng(latlng.lng) : c.lng;
          this._handleMapClick(lat, lng, z, clickedItem);
        }
      });

      GeoAtlas.MapEngine.setMapClickHandler((lat, lng, zoom) => {
        this._handleMapClick(lat, lng, zoom, null);
      });
    },

    _currentItem() {
      return this.queue[this.currentIndex] || null;
    },

    _updateMissDots(count) {
      const dots = document.querySelectorAll('#hudMissDots .miss-dot');
      dots.forEach((d, idx) => d.classList.toggle('is-used', idx < count));
    },

    _presentItem(item) {
      if (!item) {
        this._showResults();
        return;
      }
      this.mistakes = 0;
      this.revealed = false;
      this.awaitingNext = false;

      GeoAtlas.MapEngine.clearTrainer();
      this._hideAllSubBars();

      const hud = document.getElementById('trainerHud');
      hud?.classList.remove('hidden');

      const typeLabel = item.categoryLabel || GeoAtlas.LearningEngine.getCategoryLabel(item);
      document.getElementById('hudModeBadge').textContent = MODE_LABELS[this.mode] || 'Обучение';
      document.getElementById('hudProgressBadge').textContent = `${this.currentIndex + 1} / ${this.queue.length}`;
      document.getElementById('hudCategoryBadge').textContent = typeLabel;

      const targetNameEl = document.getElementById('hudTargetName');
      const subPromptEl = document.getElementById('hudSubPrompt');
      const dotsEl = document.getElementById('hudMissDots');

      this._updateMissDots(0);

      if (dotsEl) dotsEl.classList.remove('hidden');
      document.getElementById('btnHint')?.classList.remove('hidden');
      document.getElementById('btnReveal')?.classList.remove('hidden');
      document.getElementById('btnReopenExplore')?.classList.toggle('hidden', this.mode === 'theory' || !this.pool.length);

      if (this.mode === 'theory' || GeoAtlas.GeoMath.isOralTheoryItem(item)) {
        targetNameEl.textContent = item.name;
        subPromptEl.textContent = 'Устная теоретическая карточка';
        this._openFlipCard(item, { mapMistakes: 0, mapRevealed: false });
        return;
      }

      const isCape = item.category === 'extreme_point' || item.category === 'capes';
      const isContExtreme = item.category === 'continent_peak' || item.category === 'continent_depr';
      const isArchipelago = Boolean(item.askConstituentIslands && item.constituentIslands);
      const isRecord = Boolean(item.recordPrompt);
      targetNameEl.textContent = isCape ? GeoAtlas.extractCapePrompt(item) : isRecord ? item.recordPrompt : item.name;
      subPromptEl.textContent = isCape
        ? 'Покажите эту крайнюю точку на карте, затем вспомните название мыса (3 попытки)'
        : isContExtreme
        ? 'Покажите на карте и вспомните абсолютную высоту / отметку (3 попытки)'
        : isArchipelago
        ? 'Архипелаг · покажите на карте, затем вспомните входящие острова (3 попытки)'
        : isRecord
        ? `${typeLabel} · покажите рекордсмена на карте, затем вспомните название (3 попытки)`
        : `${typeLabel} · найдите и нажмите на карте (3 попытки)`;
      if (this.currentIndex === 0) {
        GeoAtlas.MapEngine.fitBatch(this.pool.length ? this.pool : this.queue, 4);
      }
    },

    _handleMapClick(lat, lng, zoom, clickedItem = null) {
      if (!this.active || this.inExploreStage || this.awaitingNext || this.mode === 'theory') {
        return;
      }
      const item = this._currentItem();
      if (!item || GeoAtlas.GeoMath.isOralTheoryItem(item)) return;

      const directHit = !!(clickedItem && clickedItem.id === item.id);
      const res = directHit
        ? { hit: true, distKm: 0, targetLat: lat, targetLng: lng }
        : GeoAtlas.GeoMath.checkSpatialHit(lat, lng, item, zoom);

      if (res.hit) {
        this.awaitingNext = true;
        GeoAtlas.AudioEngine.playSuccess();
        GeoAtlas.TelegramBridge?.hapticNotification('success');
        document.getElementById('compassBanner')?.classList.add('hidden');

        const isCape = item.category === 'extreme_point' || item.category === 'capes';
        const isRecord = Boolean(item.recordPrompt);
        GeoAtlas.MapEngine.drawItemShape(GeoAtlas.MapEngine.trainerGroup, item, {
          highlight: true,
          showLabel: !isCape && !isRecord
        });
        GeoAtlas.MotionFX?.pulseSuccess(document.querySelector('#trainerHud .hud-card'));

        setTimeout(() => {
          this._afterMapStage(item, { mapMistakes: this.mistakes, mapRevealed: false });
        }, 500);
        return;
      }

      this.mistakes += 1;
      this._updateMissDots(this.mistakes);
      GeoAtlas.AudioEngine.playMiss();
      GeoAtlas.TelegramBridge?.[this.mistakes >= 3 ? 'hapticNotification' : 'hapticImpact'](
        this.mistakes >= 3 ? 'error' : 'medium'
      );
      GeoAtlas.MapEngine.drawAttemptPin(lat, lng, this.mistakes);
      GeoAtlas.MotionFX?.shake(document.querySelector('#trainerHud .hud-card'));

      if (this.mistakes >= 3) {
        this.revealed = true;
        this.awaitingNext = true;
        this._showTrueObjectAndFailCard(item);
        return;
      }

      const rhumb = GeoAtlas.GeoMath.calcCompass8Rhumb(lat, lng, res.targetLat, res.targetLng);
      const compass = document.getElementById('compassBanner');
      if (compass) {
        compass.textContent = `${rhumb.arrow} Ищите ${rhumb.label} (~${res.distKm} км)`;
        compass.classList.remove('hidden');
      }
    },

    showHint() {
      const item = this._currentItem();
      if (!item || GeoAtlas.GeoMath.isOralTheoryItem(item)) return;
      GeoAtlas.TelegramBridge?.hapticImpact('light');
      const c = GeoAtlas.GeoMath.getItemCenter(item);
      const macroLabel = GeoAtlas.GeoMath.MACROREGION_LABELS[GeoAtlas.GeoMath.getMacroregion(item)] || item.continent || 'Регион';
      GeoAtlas.MapEngine.map?.setView([c.lat, c.lng], 3.3, { animate: true });
      const compass = document.getElementById('compassBanner');
      if (compass) {
        compass.textContent = `💡 Регион: ${item.continent || item.region || macroLabel}`;
        compass.classList.remove('hidden');
      }
    },

    revealCurrent() {
      const item = this._currentItem();
      if (!item || this.awaitingNext || this.inExploreStage) return;
      this.revealed = true;
      this.awaitingNext = true;
      GeoAtlas.AudioEngine.playMiss();
      GeoAtlas.TelegramBridge?.hapticNotification('error');
      this._showTrueObjectAndFailCard(item);
    },

    skipCurrent() {
      const item = this._currentItem();
      if (!item || this.inExploreStage || this.awaitingNext) return;
      GeoAtlas.TelegramBridge?.hapticSelection();
      const skippedId = item.id;
      const savedIdx = this.currentIndex;

      this.queue.splice(this.currentIndex, 1);
      this.queue.push(item);
      this._presentItem(this.queue[this.currentIndex]);

      GeoAtlas.App.showToast('Объект отложен в конец сессии', () => {
        if (!this.active) return;
        const pos = this.queue.findIndex((x) => x.id === skippedId);
        if (pos !== -1) this.queue.splice(pos, 1);
        this.currentIndex = savedIdx;
        this.queue.splice(this.currentIndex, 0, item);
        this._presentItem(item);
      });
    },

    _showTrueObjectAndFailCard(item) {
      if (!GeoAtlas.GeoMath.isOralTheoryItem(item)) {
        const isCape = item.category === 'extreme_point' || item.category === 'capes';
        const isRecord = Boolean(item.recordPrompt);
        GeoAtlas.MapEngine.drawItemShape(GeoAtlas.MapEngine.trainerGroup, item, {
          highlight: true,
          showLabel: !isCape && !isRecord
        });
        GeoAtlas.MapEngine.fitItem(item, 5);
      }
      setTimeout(() => {
        this._openFlipCard(item, { mapMistakes: this.mistakes, mapRevealed: true });
      }, 600);
    },

    _afterMapStage(item, { mapMistakes, mapRevealed }) {
      const meta = GeoAtlas.LearningEngine.meta;
      const spec = GeoAtlas.QuizConfig.buildCardSpec(item, meta.depthPreset, meta.customModules);

      if (!spec.requiresFlipCard && !mapRevealed) {
        const res = GeoAtlas.LearningEngine.recordCompositeResult(item.id, {
          mapMistakes,
          mapRevealed,
          theoryRecalled: true,
          hadFlipCard: false
        });
        this._tallyGrade(res.grade);
        this._scheduleAnkiRepeat(item, res);
        this._advanceCursor();
        return;
      }

      this._openFlipCard(item, { mapMistakes, mapRevealed, spec });
    },

    _openFlipCard(item, { mapMistakes, mapRevealed, spec } = {}) {
      const meta = GeoAtlas.LearningEngine.meta;
      const forceTheory = this.mode === 'theory';
      const cardSpec =
        spec || GeoAtlas.QuizConfig.buildCardSpec(item, meta.depthPreset, meta.customModules, { forceTheory });
      const overlay = document.getElementById('flipOverlay');
      const card = document.getElementById('flipCard');
      if (!overlay || !card) return;

      this._currentCardSpec = { item, mapMistakes, mapRevealed, cardSpec };
      card.classList.remove('is-flipped');

      const isOral = forceTheory || GeoAtlas.GeoMath.isOralTheoryItem(item);
      const badgeText = cardSpec.badge || item.categoryLabel || 'Справка';

      document.getElementById('flipBadgeFront').textContent = badgeText;
      document.getElementById('flipStepFront').textContent = isOral
        ? `${this.currentIndex + 1} / ${this.queue.length}`
        : 'Устная проверка';
      document.getElementById('flipItemTitleFront').textContent = cardSpec.frontTitle || item.name;
      document.getElementById('flipPromptFront').textContent =
        cardSpec.prompt || 'Вспомните ключевой географический факт об объекте';

      document.getElementById('flipBadgeBack').textContent = badgeText;
      document.getElementById('flipItemTitleBack').textContent = item.name;
      const ansText =
        cardSpec.answer ||
        [item.continent || item.region, item.ocean, item.description].filter(Boolean).join(' · ') ||
        'Изучите расположение на карте';
      document.getElementById('flipAnswerBox').textContent = ansText;

      document.getElementById('flipFactsList').innerHTML = (cardSpec.facts || [])
        .map((f) => `<div class="flip-fact-row"><strong>${f.label}:</strong> ${f.val}</div>`)
        .join('');

      const mapResBadge = document.getElementById('flipMapResultBadge');
      const binActions = document.getElementById('flipBinaryActions');
      const contAction = document.getElementById('flipContinueAction');

      if (mapRevealed) {
        mapResBadge.textContent = 'Не найдено на карте';
        mapResBadge.className = 'badge badge-danger';
        binActions?.classList.add('hidden');
        contAction?.classList.remove('hidden');
        card.classList.add('is-flipped');
      } else {
        mapResBadge.textContent = isOral
          ? 'Устная карточка'
          : mapMistakes === 0
          ? 'Точно на карте!'
          : `Найдено (промахов: ${mapMistakes})`;
        mapResBadge.className = isOral ? 'badge badge-sky' : mapMistakes === 0 ? 'badge badge-accent' : 'badge badge-amber';
        binActions?.classList.remove('hidden');
        contAction?.classList.add('hidden');
      }

      overlay.classList.remove('hidden');
    },

    _flipCardOpen() {
      const card = document.getElementById('flipCard');
      if (card) {
        card.classList.add('is-flipped');
        GeoAtlas.AudioEngine.playFlip();
        GeoAtlas.TelegramBridge?.hapticImpact('light');
      }
    },

    _finishFlip(theoryRecalled) {
      const ctx = this._currentCardSpec;
      document.getElementById('flipOverlay')?.classList.add('hidden');
      if (!ctx) {
        this._advanceCursor();
        return;
      }

      GeoAtlas.TelegramBridge?.hapticNotification(theoryRecalled ? 'success' : 'warning');
      const res = GeoAtlas.LearningEngine.recordCompositeResult(ctx.item.id, {
        mapMistakes: ctx.mapMistakes || 0,
        mapRevealed: !!ctx.mapRevealed,
        theoryRecalled: !!theoryRecalled,
        hadFlipCard: !!(ctx.cardSpec && ctx.cardSpec.requiresFlipCard)
      });
      this._tallyGrade(res.grade);
      this._scheduleAnkiRepeat(ctx.item, res);
      this._currentCardSpec = null;
      this._advanceCursor();
    },

    _skipFlipCard() {
      const ctx = this._currentCardSpec;
      document.getElementById('flipOverlay')?.classList.add('hidden');
      this._currentCardSpec = null;

      if (ctx && this.mode !== 'theory' && !ctx.mapRevealed) {
        const res = GeoAtlas.LearningEngine.recordCompositeResult(ctx.item.id, {
          mapMistakes: ctx.mapMistakes || 0,
          mapRevealed: false,
          theoryRecalled: true,
          hadFlipCard: false
        });
        this._tallyGrade(res.grade);
      }

      GeoAtlas.AudioEngine.playClick();
      GeoAtlas.TelegramBridge?.hapticSelection();
      GeoAtlas.App?.showToast('Карточка пропущена (не добавлено в ошибки)');
      this._advanceCursor();
    },

    _tallyGrade(grade) {
      if (grade === 'STRONG') this.sessionClean += 1;
      else this.sessionWeak += 1;
    },

    _scheduleAnkiRepeat(item, res) {
      if (!item || !res || !res.state || res.state.status === 'mastered') return;
      if (this.mode !== 'learn' && this.mode !== 'theory' && this.mode !== 'weak') return;
      this._sessionRepeats = this._sessionRepeats || {};
      const repeats = this._sessionRepeats[item.id] || 0;
      if (repeats >= 2) return;
      const remaining = this.queue.length - (this.currentIndex + 1);
      const offset = Math.max(1, res.dueOffset || 6);
      // If located cleanly on the 1st try, don't force an immediate end-of-session repeat in short decks
      if (res.grade === 'STRONG' && remaining < offset) return;
      const alreadyAhead = this.queue.slice(this.currentIndex + 1).some((x) => x.id === item.id);
      if (alreadyAhead) return;
      const insertAt = Math.min(this.queue.length, this.currentIndex + 1 + offset);
      this.queue.splice(insertAt, 0, item);
      this._sessionRepeats[item.id] = repeats + 1;
    },

    _advanceCursor() {
      this.currentIndex += 1;
      if (this.currentIndex >= this.queue.length) {
        this._showResults();
      } else {
        this._presentItem(this.queue[this.currentIndex]);
      }
    },

    _showResults() {
      this._hideAllSubBars();
      document.getElementById('trainerHud')?.classList.add('hidden');
      GeoAtlas.MapEngine.clearPool();
      const modal = document.getElementById('resultsModal');
      if (!modal) return;

      const total = this.sessionClean + this.sessionWeak;
      document.getElementById('resCleanCount').textContent = String(this.sessionClean);
      document.getElementById('resWeakCount').textContent = String(this.sessionWeak);
      document.getElementById('resTotalCount').textContent = String(total);

      const weakCount = GeoAtlas.LearningEngine.getWeakSpotsItems(this.moduleId).length;
      document.getElementById('btnResultsWeak')?.classList.toggle('hidden', weakCount === 0);

      const overallLandmarks = GeoAtlas.LearningEngine.getOverallStats('landmarks');
      const showUpsell = GeoAtlas.LearningEngine.meta.scope === 'landmarks' && overallLandmarks.pct >= 85;
      document.getElementById('resultsUpsellFull')?.classList.toggle('hidden', !showUpsell);

      if (this.sessionClean >= this.sessionWeak && typeof global.confetti === 'function') {
        try {
          global.confetti({ particleCount: 70, spread: 65, origin: { y: 0.65 } });
        } catch (_) {}
      }
      GeoAtlas.AudioEngine.playCelebrate();
      GeoAtlas.TelegramBridge?.hapticNotification(this.sessionClean >= this.sessionWeak ? 'success' : 'warning');
      GeoAtlas.StorageAdapter?.flushCloud?.();
      modal.classList.remove('hidden');
    }
  };

  GeoAtlas.UITrainer = UITrainer;
})(window);
