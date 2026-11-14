/**
 * ГеоАтлас / Тренажер ОЗК — UIHub (Oral Theory Split, Bento Modules, 2 Scopes, 3 Depth Presets)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const PRESET_SCHEMA = [
    {
      moduleId: 'module1',
      title: 'Модуль 1 · Берега, острова, мысы и пустыни',
      checks: [
        { key: 'capes', label: 'Крайние точки (материк и сторона света)' },
        { key: 'continentsEarth', label: 'Устная теория: материки, Земля, Океания' },
        { key: 'islands', label: 'Острова (океан / регион)' },
        { key: 'peninsulas', label: 'Полуострова (регион)' }
      ]
    },
    {
      moduleId: 'module2',
      title: 'Модуль 2 · Рельеф и тектоника',
      checks: [
        { key: 'mountainAge', label: 'Горы: эпоха складчатости и пики' },
        { key: 'volcanoType', label: 'Вулканы: состояние и высота' },
        { key: 'depressionSign', label: 'Впадины: отрицательные отметки' },
        { key: 'plains', label: 'Равнины и плоскогорья: тип и регион' }
      ]
    },
    {
      moduleId: 'module3',
      title: 'Модуль 3 · Мировой океан',
      checks: [
        { key: 'seaType', label: 'Моря: тип (окраинное/внутреннее) и океан' },
        { key: 'straitConnects', label: 'Проливы: что соединяют и разделяют' },
        { key: 'gulfOcean', label: 'Заливы: бассейн океана' },
        { key: 'trenchDepth', label: 'Жёлоба: океан и глубина' },
        { key: 'currentTemp', label: 'Течения: тёплое или холодное' }
      ]
    },
    {
      moduleId: 'module4',
      title: 'Модуль 4 · Воды суши',
      checks: [
        { key: 'riverBasin', label: 'Реки: бассейн океана / куда впадает' },
        { key: 'lakeOrigin', label: 'Озёра: тип котловины и солёность' },
        { key: 'waterfallHeight', label: 'Водопады: река и высота' }
      ]
    }
  ];

  const MODULE_THEORY_DESCS = {
    module1: 'Площади и средние высоты материков, Океания и Бермудский треугольник',
    module3: '5 океанов мира (площади, границы и характеристики)'
  };

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
      if (GeoAtlas.TelegramBridge) GeoAtlas.TelegramBridge.hideBackButton();
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
      const scopeSel = document.getElementById('scopeSelector');
      if (scopeSel) {
        scopeSel.addEventListener('click', (e) => {
          const btn = e.target.closest('[data-scope]');
          if (!btn) return;
          const scope = btn.getAttribute('data-scope');
          GeoAtlas.LearningEngine.meta.scope = scope;
          GeoAtlas.StorageAdapter.saveMeta(GeoAtlas.LearningEngine.meta);
          GeoAtlas.AudioEngine.playClick();
          this.render();
        });
      }

      const depthSel = document.getElementById('depthSelector');
      if (depthSel) {
        depthSel.addEventListener('click', (e) => {
          const btn = e.target.closest('[data-depth]');
          if (!btn) return;
          const depth = btn.getAttribute('data-depth');
          GeoAtlas.LearningEngine.meta.depthPreset = depth;
          GeoAtlas.StorageAdapter.saveMeta(GeoAtlas.LearningEngine.meta);
          GeoAtlas.AudioEngine.playClick();
          this.render();
          if (depth === 'custom_full') {
            this.openPresetModal();
          }
        });
      }

      document.getElementById('btnOpenCustomPreset')?.addEventListener('click', () => this.openPresetModal());
      document.getElementById('btnClosePresetModal')?.addEventListener('click', () => this.closePresetModal());
      document.getElementById('btnSavePresetModal')?.addEventListener('click', () => this.closePresetModal());

      const handleResetClick = (btn, defaultLabel) => {
        if (!this._confirmResetArm) {
          this._confirmResetArm = true;
          btn.textContent = '⚠️ Точно сбросить всё? Нажмите ещё раз';
          setTimeout(() => {
            this._confirmResetArm = false;
            if (btn) btn.textContent = defaultLabel;
          }, 4000);
          return;
        }
        this._confirmResetArm = false;
        btn.textContent = defaultLabel;
        GeoAtlas.StorageAdapter.clearStates(GeoAtlas.LearningEngine.states);
        if (GeoAtlas.LearningEngine.meta) {
          GeoAtlas.LearningEngine.meta.exploredSections = {};
          GeoAtlas.StorageAdapter.saveMeta(GeoAtlas.LearningEngine.meta);
        }
        this.closePresetModal();
        this.render();
        if (GeoAtlas.App && GeoAtlas.App.showToast) {
          GeoAtlas.App.showToast('Весь прогресс сброшен');
        }
      };

      const btnReset = document.getElementById('btnResetProgressPrompt');
      if (btnReset) {
        btnReset.addEventListener('click', () => handleResetClick(btnReset, '🗑 Сбросить весь прогресс'));
      }

      const btnHubReset = document.getElementById('btnHubResetProgress');
      if (btnHubReset) {
        btnHubReset.addEventListener('click', () => handleResetClick(btnHubReset, '🗑 Сбросить прогресс'));
      }

      document.getElementById('btnMuteToggle')?.addEventListener('click', () => {
        const meta = GeoAtlas.LearningEngine.meta;
        meta.muted = !meta.muted;
        GeoAtlas.AudioEngine.setMuted(meta.muted);
        GeoAtlas.StorageAdapter.saveMeta(meta);
        this._renderControlStates();
      });

      document.getElementById('btnStartWeak')?.addEventListener('click', () => {
        GeoAtlas.UITrainer.start({ mode: 'weak' });
      });

      document.getElementById('btnOpenAtlasGlobal')?.addEventListener('click', () => GeoAtlas.UIAtlas.open());
      document.getElementById('btnOpenCheatsheet')?.addEventListener('click', () => GeoAtlas.UICheatsheet.open());
    },

    _renderControlStates() {
      const meta = GeoAtlas.LearningEngine.meta;
      document.querySelectorAll('#scopeSelector [data-scope]').forEach((b) => {
        b.classList.toggle('is-active-emerald', b.getAttribute('data-scope') === meta.scope);
      });
      document.querySelectorAll('#depthSelector [data-depth]').forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute('data-depth') === meta.depthPreset);
      });
      const btnMute = document.getElementById('btnMuteToggle');
      if (btnMute) btnMute.textContent = meta.muted ? '🔇' : '🔊';

      const overall = GeoAtlas.LearningEngine.getOverallStats(meta.scope);
      const pctEl = document.getElementById('overallPct');
      const cntEl = document.getElementById('overallCount');
      const barEl = document.getElementById('overallBar');
      const weakHintEl = document.getElementById('overallWeakHint');

      if (pctEl) pctEl.textContent = `${overall.pct}%`;
      if (cntEl) cntEl.textContent = `${overall.mastered} / ${overall.total} выучено`;
      if (barEl) barEl.style.width = `${overall.pct}%`;

      const weakCount = GeoAtlas.LearningEngine.getWeakSpotsItems().length;
      if (weakHintEl) {
        weakHintEl.textContent =
          meta.scope === 'landmarks'
            ? 'Показывается прогресс по базовому минимуму'
            : 'Показывается прогресс по полной программе ОЗ';
      }

      const weakBanner = document.getElementById('weakBanner');
      const weakBadge = document.getElementById('weakCountBadge');
      if (weakBanner && weakBadge) {
        weakBadge.textContent = String(weakCount);
        weakBanner.classList.toggle('hidden', weakCount === 0);
      }
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
        const isOpen = this._openSubdecks.has(mod.id);
        const card = document.createElement('article');
        card.className = 'module-card stagger-item';
        card.style.setProperty('--mod-color', mod.color || '#10b981');

        const deckRows = (mod.decks || [])
          .map((deck) => {
            const ds = engine.getSubmoduleStats(mod.id, deck.id, scope);
            if (ds.total === 0) return '';
            const deckTitle = deck.id === 'm1_continents_earth' ? 'Высшие и низшие точки материков' : deck.title;
            return `
              <div class="subdeck-row">
                <span class="subdeck-name" title="${deckTitle}">${deckTitle}</span>
                <div class="subdeck-right">
                  <span class="subdeck-count">${ds.mastered}/${ds.total}</span>
                  <button class="btn btn-sm btn-ghost" data-sub-learn="${mod.id}:${deck.id}" type="button" title="Учить тему">▶</button>
                </div>
              </div>
            `;
          })
          .join('');

        const displayTitle = mod.id === 'module1' ? 'Берега, острова и мысы' : mod.shortTitle || mod.title;
        const displayDesc = mod.id === 'module1' ? 'Крайние точки, полуострова, острова и пустыни на карте' : mod.title;
        const theoryStats = engine.getModuleTheoryStats(mod.id, scope);
        const theoryDesc = MODULE_THEORY_DESCS[mod.id] || 'Ключевые вопросы раздела';

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
              <span>На карте: <strong>${stats.mastered}</strong> из ${stats.total}</span>
              ${stats.weakSpots > 0 ? `<span class="badge badge-amber">🩹 ${stats.weakSpots}</span>` : '<span></span>'}
            </div>
            <div class="progress-track" style="margin-top: 6px;">
              <div class="progress-fill" style="width: ${stats.pct}%;"></div>
            </div>
          </div>
          <div class="module-actions">
            <button class="btn btn-primary btn-shine" data-start-mode="learn:${mod.id}" type="button">🗺️ Учить по карте</button>
          </div>
          ${
            theoryStats.total > 0
              ? `
            <div class="module-theory-row">
              <div class="module-theory-meta">
                <span class="module-theory-title">📖 Устная теория · ${theoryStats.mastered}/${theoryStats.total}</span>
                <span class="module-theory-sub">${theoryDesc}</span>
              </div>
              <button class="btn btn-sm" data-start-mode="theory:${mod.id}" type="button">Карточки →</button>
            </div>
          `
              : ''
          }
          ${
            deckRows
              ? `
            <button class="subdecks-toggle" data-toggle-decks="${mod.id}" type="button">
              <span>Темы модуля</span>
              <span>${isOpen ? '▲' : '▼'}</span>
            </button>
            <div class="subdecks-list ${isOpen ? '' : 'hidden'}">${deckRows}</div>
          `
              : ''
          }
        `;

        grid.appendChild(card);
      });

      grid.onclick = (e) => {
        const modeBtn = e.target.closest('[data-start-mode]');
        if (modeBtn) {
          const [mode, moduleId] = modeBtn.getAttribute('data-start-mode').split(':');
          GeoAtlas.UITrainer.start({ mode, moduleId });
          return;
        }
        const subBtn = e.target.closest('[data-sub-learn]');
        if (subBtn) {
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
    },

    openPresetModal() {
      const modal = document.getElementById('customPresetModal');
      const body = document.getElementById('customPresetBody');
      if (!modal || !body) return;

      const meta = GeoAtlas.LearningEngine.meta;
      meta.depthPreset = 'custom_full';
      GeoAtlas.StorageAdapter.saveMeta(meta);
      this._renderControlStates();

      body.innerHTML = PRESET_SCHEMA.map((group) => {
        const modCfg = (meta.customModules && meta.customModules[group.moduleId]) || {};
        const checksHtml = group.checks
          .map((c) => {
            const checked = modCfg[c.key] ? 'checked' : '';
            return `
              <label class="check-item">
                <input type="checkbox" data-mod="${group.moduleId}" data-key="${c.key}" ${checked} />
                <span>${c.label}</span>
              </label>
            `;
          })
          .join('');
        return `
          <div class="settings-module-block">
            <strong>${group.title}</strong>
            <div class="settings-checks">${checksHtml}</div>
          </div>
        `;
      }).join('');

      body.onchange = (e) => {
        const inp = e.target.closest('input[type="checkbox"]');
        if (!inp) return;
        const m = inp.getAttribute('data-mod');
        const k = inp.getAttribute('data-key');
        meta.customModules[m] = meta.customModules[m] || {};
        meta.customModules[m][k] = inp.checked;
        GeoAtlas.StorageAdapter.saveMeta(meta);
      };

      modal.classList.remove('hidden');
    },

    closePresetModal() {
      const modal = document.getElementById('customPresetModal');
      if (modal) modal.classList.add('hidden');
    }
  };

  GeoAtlas.UIHub = UIHub;
})(window);
