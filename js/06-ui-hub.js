/**
 * ГеоАтлас / Тренажер ОЗК — UIHub (Oral Theory Split, Bento Modules, 2 Scopes, 3 Depth Presets)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const SUBDECK_HINTS = {
    m1_continents_earth: 'Мысы, высшие/низшие точки, площади, ср. высоты и Океания',
    m1_peninsulas: 'Определение полуостровов на карте',
    m1_islands: 'На карте + карточки состава 12 ключевых архипелагов',
    m1_deserts: 'Пустыни мира на карте',
    m2_all_relief: 'Горы (складчатость и высоты ключевых), вулканы, впадины, равнины',
    m3_oceans_theory: 'Площади и глубины 5 океанов + границы между океанами',
    m3_seas_straits_gulfs: 'Моря, проливы и заливы Мирового океана на карте',
    m3_trenches: 'Глубоководные желоба и максимальные глубины ключевых',
    m3_currents: 'На карте + температура (Т/Х/Н) и генезис (Д/К/С)',
    m4_all_waters: 'Реки, озёра и водопады на карте (включая слепые вопросы по рекордам)'
  };

  const SVG_SOUND_ON =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';
  const SVG_SOUND_OFF =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
  const SVG_HAPTIC_ON =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="4" width="10" height="16" rx="2"></rect><path d="M3.5 8.5v7"></path><path d="M20.5 8.5v7"></path><path d="M1.5 10.5v3"></path><path d="M22.5 10.5v3"></path></svg>';
  const SVG_HAPTIC_OFF =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="4" width="10" height="16" rx="2"></rect><line x1="3" y1="3" x2="21" y2="21"></line></svg>';

  const UIHub = {
    _openSubdecks: new Set(),
    _confirmResetArm: false,

    init() {
      this._bindGlobalControls();
      this.render();
    },

    show() {
      const hub = document.getElementById('hubScreen');
      const mapStage = document.getElementById('mapStage');
      if (hub) hub.classList.remove('hidden');
      if (mapStage) mapStage.classList.add('hidden');
      if (GeoAtlas.TelegramBridge) {
        GeoAtlas.TelegramBridge.hideBackButton();
        GeoAtlas.TelegramBridge.setClosingConfirmation(false);
      }
      this.render();
    },

    hide() {
      const hub = document.getElementById('hubScreen');
      const mapStage = document.getElementById('mapStage');
      if (hub) hub.classList.add('hidden');
      if (mapStage) mapStage.classList.remove('hidden');
      if (GeoAtlas.MapEngine) GeoAtlas.MapEngine.invalidateSize();
    },

    _bindGlobalControls() {
      const performReset = () => {
        GeoAtlas.StorageAdapter.clearStates(GeoAtlas.LearningEngine.states);
        if (GeoAtlas.LearningEngine.meta) {
          GeoAtlas.LearningEngine.meta.exploredSections = {};
          GeoAtlas.LearningEngine.meta.skippedCards = {};
          GeoAtlas.LearningEngine.meta.sectionResume = {};
          GeoAtlas.LearningEngine.meta.tutorialSeen = false;
          GeoAtlas.LearningEngine.meta.sessionStep = 0;
          GeoAtlas.StorageAdapter.saveMeta(GeoAtlas.LearningEngine.meta);
          GeoAtlas.StorageAdapter.flushCloud?.();
        }
        GeoAtlas.TelegramBridge?.hapticNotification('warning');
        this.render();
        if (GeoAtlas.App && GeoAtlas.App.showToast) {
          GeoAtlas.App.showToast('Весь прогресс сброшен');
        }
      };

      const handleResetClick = (btn, defaultLabel) => {
        const handledByTelegram = GeoAtlas.TelegramBridge?.confirm(
          'Точно сбросить весь прогресс по всем разделам? Это действие нельзя отменить.',
          (ok) => {
            if (ok) performReset();
          }
        );
        if (handledByTelegram) {
          GeoAtlas.TelegramBridge?.hapticNotification('warning');
          return;
        }
        if (!this._confirmResetArm) {
          this._confirmResetArm = true;
          GeoAtlas.TelegramBridge?.hapticNotification('warning');
          btn.textContent = '⚠️ Точно сбросить всё? Нажмите ещё раз';
          setTimeout(() => {
            this._confirmResetArm = false;
            if (btn) btn.textContent = defaultLabel;
          }, 4000);
          return;
        }
        this._confirmResetArm = false;
        btn.textContent = defaultLabel;
        performReset();
      };

      const btnHubReset = document.getElementById('btnHubResetProgress');
      if (btnHubReset) {
        btnHubReset.addEventListener('click', () => handleResetClick(btnHubReset, '🗑 Сбросить прогресс'));
      }

      document.getElementById('btnMuteToggle')?.addEventListener('click', () => {
        const meta = GeoAtlas.LearningEngine.meta;
        meta.muted = !meta.muted;
        GeoAtlas.AudioEngine.setMuted(meta.muted);
        GeoAtlas.StorageAdapter.saveMeta(meta);
        GeoAtlas.TelegramBridge?.hapticSelection();
        this._renderControlStates();
      });

      document.getElementById('btnHapticToggle')?.addEventListener('click', () => {
        const meta = GeoAtlas.LearningEngine.meta;
        meta.haptics = meta.haptics === false;
        GeoAtlas.TelegramBridge?.setHapticsEnabled(meta.haptics);
        GeoAtlas.StorageAdapter.saveMeta(meta);
        GeoAtlas.AudioEngine.playClick();
        if (meta.haptics) GeoAtlas.TelegramBridge?.hapticNotification('success');
        this._renderControlStates();
      });

      GeoAtlas.StorageAdapter?.setSyncListener?.((status) => this._renderSyncStatus(status));
    },

    _renderSyncStatus(status) {
      const el = document.getElementById('storageSyncStatus');
      if (!el) return;
      const isTMA = GeoAtlas.TelegramBridge?.isTMA() && GeoAtlas.TelegramBridge?.getCloudStorage();
      const userLabel = GeoAtlas.TelegramBridge?.getUserLabel();
      const who = userLabel ? ` (${userLabel})` : '';
      el.classList.remove('is-cloud', 'is-offline');
      if (!isTMA) {
        el.textContent = '💾 Прогресс сохраняется локально на этом устройстве';
        return;
      }
      if (status === 'syncing') {
        el.textContent = `⏳ Синхронизация с Telegram${who}...`;
      } else if (status === 'offline') {
        el.classList.add('is-offline');
        el.textContent = `⚠️ Локально на устройстве (нет связи с облаком Telegram)`;
      } else {
        el.classList.add('is-cloud');
        el.textContent = `☁️ Синхронизировано с аккаунтом Telegram${who}`;
      }
    },

    _renderControlStates() {
      const meta = GeoAtlas.LearningEngine.meta;
      const btnMute = document.getElementById('btnMuteToggle');
      if (btnMute) {
        btnMute.innerHTML = meta.muted ? SVG_SOUND_OFF : SVG_SOUND_ON;
        btnMute.classList.toggle('is-off', Boolean(meta.muted));
        btnMute.title = meta.muted ? 'Звук: ВЫКЛ' : 'Звук: ВКЛ';
      }
      const btnHaptic = document.getElementById('btnHapticToggle');
      if (btnHaptic) {
        const hapticsOn = meta.haptics !== false;
        btnHaptic.innerHTML = hapticsOn ? SVG_HAPTIC_ON : SVG_HAPTIC_OFF;
        btnHaptic.classList.toggle('is-off', !hapticsOn);
        btnHaptic.title = hapticsOn ? 'Вибрация: ВКЛ' : 'Вибрация: ВЫКЛ';
      }
      this._renderSyncStatus(GeoAtlas.StorageAdapter?.getSyncStatus?.() || 'local');

      const overall = GeoAtlas.LearningEngine.getOverallStats('full');
      const pctEl = document.getElementById('overallPct');
      const cntEl = document.getElementById('overallCount');
      const barEl = document.getElementById('overallBar');

      if (pctEl) pctEl.textContent = `${overall.pct}%`;
      if (cntEl) {
        cntEl.textContent =
          overall.learning > 0
            ? `${overall.mastered} / ${overall.total} выучено · ${overall.learning} в работе`
            : `${overall.mastered} / ${overall.total} выучено`;
      }
      if (barEl) barEl.style.width = `${overall.pct}%`;
    },

    render() {
      this._renderControlStates();
      const grid = document.getElementById('bentoModulesGrid');
      if (!grid) return;

      const engine = GeoAtlas.LearningEngine;
      const scope = engine.meta.scope;
      grid.innerHTML = '';

      engine.modules.forEach((mod) => {
        const stats = engine.getModuleStats(mod.id, scope);
        const card = document.createElement('article');
        card.className = 'module-card stagger-item';
        card.style.setProperty('--mod-color', 'var(--accent)');

        const visibleDecks = (mod.decks || []).filter((d) => !/^m[1234]_all$/.test(d.id));

        const renderBigDeckBtn = (deck) => {
          const ds = engine.getSubmoduleStats(mod.id, deck.id, scope);
          if (ds.total === 0) return '';
          const hint = SUBDECK_HINTS[deck.id];
          const attr = deck.isTheoryDeck
            ? `data-start-mode="theory:${mod.id}"`
            : `data-sub-learn="${mod.id}:${deck.id}"`;
          const badgePrefix = deck.isTheoryDeck ? '📖 ' : '';
          return `
            <button class="subdeck-btn btn-shine" ${attr} type="button">
              <span class="subdeck-btn-main">
                <span class="subdeck-btn-title">${badgePrefix}${deck.title}</span>
                ${hint ? `<span class="subdeck-btn-sub">${hint}</span>` : ''}
              </span>
              <span class="subdeck-btn-right">
                <span>${ds.mastered}/${ds.total}${ds.learning > 0 ? ` (+${ds.learning})` : ''}</span>
                <span class="subdeck-play-icon" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path d="M4.5 3.2v9.6l8-4.8-8-4.8z"/></svg>
                </span>
              </span>
            </button>
          `;
        };

        const primaryHtml = visibleDecks.map(renderBigDeckBtn).join('');

        const displayTitle = mod.id === 'module1' ? 'Материки, острова и пустыни' : mod.shortTitle || mod.title;
        const displayDesc = mod.id === 'module1' || mod.id === 'module3' ? 'Выберите подраздел для изучения' : mod.title;
        const progressLabel = mod.id === 'module1' || mod.id === 'module3' ? 'Изучено' : 'На карте';

        card.innerHTML = `
          <div class="module-head">
            <div>
              <div class="module-title">${displayTitle}</div>
              <div class="module-desc">${displayDesc}</div>
            </div>
            <span class="badge ${stats.pct === 100 ? 'badge-accent' : ''}">${stats.pct}%</span>
          </div>
          <div>
            <div class="module-stats-row">
              <span>${progressLabel}: <strong>${stats.mastered}</strong> из ${stats.total}${stats.learning > 0 ? ` (в работе: ${stats.learning})` : ''}</span>
              <span></span>
            </div>
            <div class="progress-track" style="margin-top: 6px;">
              <div class="progress-fill" style="width: ${stats.pct}%;"></div>
            </div>
          </div>
          ${primaryHtml ? `<div class="subdeck-btn-list">${primaryHtml}</div>` : ''}
        `;

        grid.appendChild(card);
      });

      grid.onclick = (e) => {
        const modeBtn = e.target.closest('[data-start-mode]');
        if (modeBtn) {
          GeoAtlas.TelegramBridge?.hapticImpact('light');
          const [mode, moduleId] = modeBtn.getAttribute('data-start-mode').split(':');
          GeoAtlas.UITrainer.start({ mode, moduleId });
          return;
        }
        const subBtn = e.target.closest('[data-sub-learn]');
        if (subBtn) {
          GeoAtlas.TelegramBridge?.hapticImpact('light');
          const [moduleId, submoduleId] = subBtn.getAttribute('data-sub-learn').split(':');
          GeoAtlas.UITrainer.start({ mode: 'learn', moduleId, submoduleId });
          return;
        }
        const toggleBtn = e.target.closest('[data-toggle-decks]');
        if (toggleBtn) {
          const modId = toggleBtn.getAttribute('data-toggle-decks');
          if (this._openSubdecks.has(modId)) this._openSubdecks.delete(modId);
          else this._openSubdecks.add(modId);
          this.render();
        }
      };

      if (GeoAtlas.MotionFX) {
        GeoAtlas.MotionFX.staggerChildren(grid, '.module-card', 55);
      }
    }
  };

  GeoAtlas.UIHub = UIHub;
})(window);
