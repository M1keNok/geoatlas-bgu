/**
 * ГеоАтлас v10.0 — UITrainer (Cluster Learn, Exam, Neighbor Quiz, Binary 3D Flip Card)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const MODE_LABELS = {
    learn: '🎓 Учить с нуля',
    exam: '🎯 Экзамен',
    quiz: '⚡ Узнать по точке',
    weak: '🩹 Слабые места'
  };

  const UITrainer = {
    active: false,
    mode: 'learn',
    moduleId: null,
    submoduleId: null,
    queue: [],
    currentIndex: 0,
    batchItems: [],
    batchCursor: 0,
    inPreviewStage: false,
    mistakes: 0,
    revealed: false,
    awaitingNext: false,
    sessionClean: 0,
    sessionWeak: 0,
    quizLocked: false,
    _currentCardSpec: null,
    _currentFlipDoneCb: null,

    init() {
      this._bindControls();
    },

    _bindControls() {
      const byId = (id) => document.getElementById(id);

      byId('btnExitTrainer')?.addEventListener('click', () => this.exitToHub());
      byId('btnClusterReady')?.addEventListener('click', () => this._startBatchRecall());
      byId('btnHint')?.addEventListener('click', () => this.showHint());
      byId('btnSkip')?.addEventListener('click', () => this.skipCurrent());
      byId('btnReveal')?.addEventListener('click', () => this.revealCurrent());

      byId('btnFlipShowAnswer')?.addEventListener('click', () => this._flipCardOpen());
      byId('btnFlipForgot')?.addEventListener('click', () => this._finishFlip(false));
      byId('btnFlipRemembered')?.addEventListener('click', () => this._finishFlip(true));
      byId('btnFlipContinue')?.addEventListener('click', () => this._finishFlip(false));

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
      const limit = mode === 'exam' || mode === 'quiz' ? (submoduleId ? null : 20) : null;
      const queue = engine.buildSessionQueue({ mode, moduleId, submoduleId, limit });

      if (!queue.length) {
        GeoAtlas.App.showToast('В выбранной теме пока нет объектов для тренировки');
        return;
      }

      this.active = true;
      this.mode = mode;
      this.moduleId = moduleId;
      this.submoduleId = submoduleId;
      this.queue = queue;
      this.currentIndex = 0;
      this.batchItems = [];
      this.batchCursor = 0;
      this.sessionClean = 0;
      this.sessionWeak = 0;

      GeoAtlas.UIHub.hide();
      GeoAtlas.UIAtlas.hideHud();
      document.getElementById('resultsModal')?.classList.add('hidden');
      document.getElementById('trainerHud')?.classList.remove('hidden');

      GeoAtlas.MapEngine.clearAtlas();
      GeoAtlas.MapEngine.clearTrainer();
      GeoAtlas.MapEngine.drawSpecialOverlays(moduleId === 'module1' || !moduleId);
      GeoAtlas.MapEngine.setMapClickHandler((lat, lng, zoom) => this._handleMapClick(lat, lng, zoom));

      if (GeoAtlas.TelegramBridge) {
        GeoAtlas.TelegramBridge.showBackButton(() => this.exitToHub());
      }

      if (mode === 'learn') {
        this._loadNextClusterBatch();
      } else {
        this._presentItem(this.queue[0]);
      }
    },

    exitToHub() {
      this.active = false;
      this.inPreviewStage = false;
      this._hideAllSubBars();
      document.getElementById('trainerHud')?.classList.add('hidden');
      document.getElementById('flipOverlay')?.classList.add('hidden');
      document.getElementById('resultsModal')?.classList.add('hidden');
      GeoAtlas.MapEngine.clearTrainer();
      GeoAtlas.MapEngine.setMapClickHandler(null);
      GeoAtlas.UIHub.show();
    },

    _hideAllSubBars() {
      document.getElementById('clusterBar')?.classList.add('hidden');
      document.getElementById('quizBar')?.classList.add('hidden');
      document.getElementById('compassBanner')?.classList.add('hidden');
    },

    _currentItem() {
      if (this.mode === 'learn') {
        return this.batchItems[this.batchCursor] || null;
      }
      return this.queue[this.currentIndex] || null;
    },

    _totalPlanned() {
      return this.queue.length;
    },

    _overallProcessed() {
      if (this.mode === 'learn') {
        return Math.min(this.queue.length, this.currentIndex + this.batchCursor + 1);
      }
      return Math.min(this.queue.length, this.currentIndex + 1);
    },

    _loadNextClusterBatch() {
      if (this.currentIndex >= this.queue.length) {
        this._showResults();
        return;
      }
      this.batchItems = this.queue.slice(this.currentIndex, this.currentIndex + 5);
      this.batchCursor = 0;

      const mapItems = this.batchItems.filter((it) => it.geometryType !== 'none');
      if (mapItems.length === 0) {
        this._presentItem(this.batchItems[0]);
        return;
      }

      this.inPreviewStage = true;
      this._hideAllSubBars();
      document.getElementById('trainerHud')?.classList.add('hidden');

      const clusterBar = document.getElementById('clusterBar');
      const chipsEl = document.getElementById('clusterChips');
      if (!clusterBar || !chipsEl) return;

      let selectedId = mapItems[0].id;
      const renderPreview = () => {
        GeoAtlas.MapEngine.drawClusterPreview(mapItems, selectedId, (clicked) => {
          selectedId = clicked.id;
          GeoAtlas.MapEngine.fitItem(clicked, 5);
          renderPreview();
        });
        chipsEl.innerHTML = mapItems
          .map(
            (it, idx) =>
              `<button class="cluster-chip ${it.id === selectedId ? 'is-selected' : ''}" data-chip-id="${it.id}" type="button">${idx + 1}. ${it.name}</button>`
          )
          .join('');
      };

      chipsEl.onclick = (e) => {
        const btn = e.target.closest('[data-chip-id]');
        if (!btn) return;
        const id = btn.getAttribute('data-chip-id');
        const found = mapItems.find((x) => x.id === id);
        if (found) {
          selectedId = found.id;
          GeoAtlas.MapEngine.fitItem(found, 5);
          renderPreview();
        }
      };

      renderPreview();
      GeoAtlas.MapEngine.fitBatch(mapItems, 5);
      clusterBar.classList.remove('hidden');
      GeoAtlas.MotionFX?.reveal(clusterBar);
    },

    _startBatchRecall() {
      this.inPreviewStage = false;
      this.batchCursor = 0;
      document.getElementById('clusterBar')?.classList.add('hidden');
      document.getElementById('trainerHud')?.classList.remove('hidden');
      GeoAtlas.MapEngine.clearTrainer();
      this._presentItem(this.batchItems[0]);
    },

    _presentItem(item) {
      if (!item) {
        this._advanceCursor();
        return;
      }
      this.mistakes = 0;
      this.revealed = false;
      this.awaitingNext = false;
      this.quizLocked = false;

      GeoAtlas.MapEngine.clearTrainer();
      this._hideAllSubBars();

      const hud = document.getElementById('trainerHud');
      hud?.classList.remove('hidden');

      document.getElementById('hudModeBadge').textContent = MODE_LABELS[this.mode] || 'Тренировка';
      document.getElementById('hudProgressBadge').textContent = `${this._overallProcessed()} / ${this._totalPlanned()}`;
      document.getElementById('hudCategoryBadge').textContent = item.categoryLabel || item.continent || 'Объект';

      const targetNameEl = document.getElementById('hudTargetName');
      const subPromptEl = document.getElementById('hudSubPrompt');
      const dotsEl = document.getElementById('hudMissDots');

      this._updateMissDots(0);

      if (this.mode === 'quiz') {
        targetNameEl.textContent = 'Что это за объект на карте?';
        subPromptEl.textContent = 'Выберите верное название из 4 географических соседей';
        if (dotsEl) dotsEl.classList.add('hidden');
        document.getElementById('btnHint')?.classList.add('hidden');
        document.getElementById('btnReveal')?.classList.add('hidden');

        GeoAtlas.MapEngine.drawItemShape(GeoAtlas.MapEngine.trainerGroup, item, {
          highlight: true,
          showLabel: false
        });
        GeoAtlas.MapEngine.fitItem(item, 5);
        this._renderQuizChoices(item);
        return;
      }

      if (dotsEl) dotsEl.classList.remove('hidden');
      document.getElementById('btnHint')?.classList.remove('hidden');
      document.getElementById('btnReveal')?.classList.remove('hidden');

      if (item.geometryType === 'none') {
        targetNameEl.textContent = item.name;
        subPromptEl.textContent = 'Теоретическая карточка программы БГУ';
        this._openFlipCard(item, { mapMistakes: 0, mapRevealed: false });
        return;
      }

      targetNameEl.textContent = item.name;
      subPromptEl.textContent = 'Найдите и нажмите на объект на карте (3 попытки)';

      if (this.mode === 'learn') {
        GeoAtlas.MapEngine.fitBatch(this.batchItems, 4);
      } else {
        GeoAtlas.MapEngine.resetWorldView();
      }
    },

    _renderQuizChoices(target) {
      const bar = document.getElementById('quizBar');
      if (!bar) return;
      const distractors = GeoAtlas.LearningEngine.pickNeighborDistractors(target, 3);
      const options = [target, ...distractors];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }

      bar.innerHTML = options
        .map(
          (opt, idx) =>
            `<button class="btn quiz-opt-btn" data-opt-id="${opt.id}" type="button"><span>${idx + 1}.</span> ${opt.name}</button>`
        )
        .join('');
      bar.classList.remove('hidden');

      bar.onclick = (e) => {
        if (this.quizLocked) return;
        const btn = e.target.closest('[data-opt-id]');
        if (!btn) return;
        this.quizLocked = true;
        const pickedId = btn.getAttribute('data-opt-id');
        const isHit = pickedId === target.id;

        if (isHit) {
          btn.classList.add('is-correct');
          GeoAtlas.AudioEngine.playSuccess();
          GeoAtlas.TelegramBridge?.hapticNotification('success');
        } else {
          btn.classList.add('is-wrong');
          const rightBtn = bar.querySelector(`[data-opt-id="${target.id}"]`);
          rightBtn?.classList.add('is-correct');
          GeoAtlas.AudioEngine.playMiss();
          GeoAtlas.TelegramBridge?.hapticNotification('error');
        }

        GeoAtlas.MapEngine.drawItemShape(GeoAtlas.MapEngine.trainerGroup, target, {
          highlight: true,
          showLabel: true
        });

        setTimeout(() => {
          bar.classList.add('hidden');
          this._afterMapStage(target, { mapMistakes: isHit ? 0 : 2, mapRevealed: !isHit });
        }, 850);
      };
    },

    _updateMissDots(count) {
      const dots = document.querySelectorAll('#hudMissDots .miss-dot');
      dots.forEach((d, idx) => d.classList.toggle('is-used', idx < count));
    },

    _handleMapClick(lat, lng, zoom) {
      if (!this.active || this.inPreviewStage || this.awaitingNext || this.mode === 'quiz') return;
      const item = this._currentItem();
      if (!item || item.geometryType === 'none') return;

      const res = GeoAtlas.GeoMath.checkSpatialHit(lat, lng, item, zoom);
      if (res.hit) {
        this.awaitingNext = true;
        GeoAtlas.AudioEngine.playSuccess();
        GeoAtlas.TelegramBridge?.hapticNotification('success');
        document.getElementById('compassBanner')?.classList.add('hidden');

        GeoAtlas.MapEngine.drawItemShape(GeoAtlas.MapEngine.trainerGroup, item, {
          highlight: true,
          showLabel: true
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
      GeoAtlas.TelegramBridge?.hapticImpact('medium');
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
      if (!item || item.geometryType === 'none') return;
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
      if (!item || this.awaitingNext) return;
      this.revealed = true;
      this.awaitingNext = true;
      GeoAtlas.AudioEngine.playMiss();
      this._showTrueObjectAndFailCard(item);
    },

    skipCurrent() {
      const item = this._currentItem();
      if (!item || this.inPreviewStage || this.awaitingNext) return;
      const skippedId = item.id;
      const savedIdx = this.currentIndex;

      if (this.mode === 'learn') {
        this.batchItems.splice(this.batchCursor, 1);
        this.queue.push(item);
        if (this.batchCursor >= this.batchItems.length) {
          this.currentIndex += 5;
          this._loadNextClusterBatch();
        } else {
          this._presentItem(this.batchItems[this.batchCursor]);
        }
      } else {
        this.queue.splice(this.currentIndex, 1);
        this.queue.push(item);
        if (this.currentIndex >= this.queue.length) {
          this._showResults();
        } else {
          this._presentItem(this.queue[this.currentIndex]);
        }
      }

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
      GeoAtlas.MapEngine.drawItemShape(GeoAtlas.MapEngine.trainerGroup, item, {
        highlight: true,
        showLabel: true
      });
      GeoAtlas.MapEngine.fitItem(item, 5);
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
        this._advanceCursor();
        return;
      }

      this._openFlipCard(item, { mapMistakes, mapRevealed, spec });
    },

    _openFlipCard(item, { mapMistakes, mapRevealed, spec } = {}) {
      const meta = GeoAtlas.LearningEngine.meta;
      const cardSpec = spec || GeoAtlas.QuizConfig.buildCardSpec(item, meta.depthPreset, meta.customModules);
      const overlay = document.getElementById('flipOverlay');
      const card = document.getElementById('flipCard');
      if (!overlay || !card) return;

      this._currentCardSpec = { item, mapMistakes, mapRevealed, cardSpec };
      card.classList.remove('is-flipped');

      const badgeFront = document.getElementById('flipBadgeFront');
      const titleFront = document.getElementById('flipItemTitleFront');
      const promptFront = document.getElementById('flipPromptFront');
      const titleBack = document.getElementById('flipItemTitleBack');
      const ansBox = document.getElementById('flipAnswerBox');
      const factsList = document.getElementById('flipFactsList');
      const mapResBadge = document.getElementById('flipMapResultBadge');
      const binActions = document.getElementById('flipBinaryActions');
      const contAction = document.getElementById('flipContinueAction');

      badgeFront.textContent = cardSpec.badge || item.categoryLabel || 'Справка';
      titleFront.textContent = item.name;
      promptFront.textContent = cardSpec.prompt || 'Вспомните ключевой географический факт об объекте';

      titleBack.textContent = item.name;
      const ansText =
        cardSpec.answer ||
        [item.continent || item.region, item.ocean, item.description].filter(Boolean).join(' · ') ||
        'Изучите расположение на карте';
      ansBox.textContent = ansText;

      factsList.innerHTML = (cardSpec.facts || [])
        .map((f) => `<div class="flip-fact-row"><strong>${f.label}:</strong> ${f.val}</div>`)
        .join('');

      if (mapRevealed) {
        mapResBadge.textContent = 'Не найдено на карте';
        mapResBadge.className = 'badge badge-danger';
        binActions?.classList.add('hidden');
        contAction?.classList.remove('hidden');
        card.classList.add('is-flipped');
      } else {
        mapResBadge.textContent = mapMistakes === 0 ? 'Точно на карте!' : `Найдено (промахов: ${mapMistakes})`;
        mapResBadge.className = mapMistakes === 0 ? 'badge badge-accent' : 'badge badge-amber';
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
      }
    },

    _finishFlip(theoryRecalled) {
      const ctx = this._currentCardSpec;
      document.getElementById('flipOverlay')?.classList.add('hidden');
      if (!ctx) {
        this._advanceCursor();
        return;
      }

      const res = GeoAtlas.LearningEngine.recordCompositeResult(ctx.item.id, {
        mapMistakes: ctx.mapMistakes || 0,
        mapRevealed: !!ctx.mapRevealed,
        theoryRecalled: !!theoryRecalled,
        hadFlipCard: !!(ctx.cardSpec && ctx.cardSpec.requiresFlipCard)
      });
      this._tallyGrade(res.grade);
      this._currentCardSpec = null;
      this._advanceCursor();
    },

    _tallyGrade(grade) {
      if (grade === 'STRONG') this.sessionClean += 1;
      else this.sessionWeak += 1;
    },

    _advanceCursor() {
      if (this.mode === 'learn') {
        this.batchCursor += 1;
        if (this.batchCursor >= this.batchItems.length) {
          this.currentIndex += 5;
          this._loadNextClusterBatch();
        } else {
          this._presentItem(this.batchItems[this.batchCursor]);
        }
        return;
      }
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
      modal.classList.remove('hidden');
    }
  };

  GeoAtlas.UITrainer = UITrainer;
})(window);
