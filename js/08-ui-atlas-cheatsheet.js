/**
 * ГеоАтлас v10.0 — UIAtlas, UICheatsheet ("Конспект-шпаргалка") & App Bootstrap
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const UIAtlas = {
    active: false,
    selectedId: null,
    filterMod: 'module1',
    searchQuery: '',

    init() {
      const byId = (id) => document.getElementById(id);

      byId('btnExitAtlas')?.addEventListener('click', () => this.exitToHub());
      byId('btnCloseInspector')?.addEventListener('click', () => {
        this.selectedId = null;
        GeoAtlas.TelegramBridge?.hapticSelection();
        byId('atlasInspector')?.classList.add('hidden');
        this.renderMapMarkers();
      });

      byId('atlasSearchInput')?.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderMapMarkers();
      });

      byId('atlasModuleFilter')?.addEventListener('change', (e) => {
        this.filterMod = e.target.value;
        GeoAtlas.MapEngine.drawSpecialOverlays(this.filterMod === 'all' || this.filterMod === 'module1');
        this.renderMapMarkers();
      });

      byId('btnAtlasLabelsToggle')?.addEventListener('click', () => {
        const meta = GeoAtlas.LearningEngine.meta;
        meta.showLabelsInAtlas = !meta.showLabelsInAtlas;
        GeoAtlas.StorageAdapter.saveMeta(meta);
        this._syncLabelToggle();
        this.renderMapMarkers();
      });

      byId('btnAtlasCheatsheet')?.addEventListener('click', () => GeoAtlas.UICheatsheet.open());
    },

    _syncLabelToggle() {
      const btn = document.getElementById('btnAtlasLabelsToggle');
      if (btn) {
        const on = GeoAtlas.LearningEngine.meta.showLabelsInAtlas;
        btn.textContent = on ? '🏷 Подписи: ВКЛ' : '🏷 Подписи: ВЫКЛ';
      }
    },

    open(focusItemId = null) {
      this.active = true;
      GeoAtlas.UIHub.hide();
      document.getElementById('trainerHud')?.classList.add('hidden');
      document.getElementById('atlasHud')?.classList.remove('hidden');
      this._syncLabelToggle();

      GeoAtlas.MapEngine.clearTrainer();
      GeoAtlas.MapEngine.setMapClickHandler(null);
      GeoAtlas.MapEngine.drawSpecialOverlays(this.filterMod === 'all' || this.filterMod === 'module1');

      if (GeoAtlas.TelegramBridge) {
        GeoAtlas.TelegramBridge.hapticImpact('light');
        GeoAtlas.TelegramBridge.showBackButton(() => this.exitToHub());
      }

      if (focusItemId) {
        const item = GeoAtlas.LearningEngine.itemById.get(focusItemId);
        if (item) {
          this.filterMod = item.moduleId || 'module1';
          const sel = document.getElementById('atlasModuleFilter');
          if (sel) sel.value = this.filterMod;
          this.selectedId = item.id;
          this.renderMapMarkers();
          this.inspectItem(item);
          GeoAtlas.MapEngine.fitItem(item, 6);
          return;
        }
      }

      const sel = document.getElementById('atlasModuleFilter');
      if (sel) sel.value = this.filterMod;
      this.renderMapMarkers();
      GeoAtlas.MapEngine.resetWorldView();
    },

    hideHud() {
      this.active = false;
      document.getElementById('atlasHud')?.classList.add('hidden');
      document.getElementById('atlasInspector')?.classList.add('hidden');
    },

    exitToHub() {
      this.hideHud();
      GeoAtlas.MapEngine.clearAtlas();
      GeoAtlas.UIHub.show();
    },

    renderMapMarkers() {
      if (!this.active) return;
      const engine = GeoAtlas.LearningEngine;
      const items = engine.allItems.filter((it) => {
        if (GeoAtlas.GeoMath.isOralTheoryItem(it)) return false;
        if (this.filterMod !== 'all' && it.moduleId !== this.filterMod) return false;
        if (this.searchQuery) {
          const hay = [it.name, it.constituentIslands, it.region, it.continent, it.ocean, it.foldingAge, it.description]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
          if (!hay.includes(this.searchQuery)) return false;
        }
        return true;
      });

      GeoAtlas.MapEngine.drawAtlasItems(items, engine.meta.showLabelsInAtlas, this.selectedId, (clicked) => {
        this.selectedId = clicked.id;
        GeoAtlas.TelegramBridge?.hapticSelection();
        this.inspectItem(clicked);
        GeoAtlas.MapEngine.fitItem(clicked, 6);
        this.renderMapMarkers();
      });
    },

    inspectItem(item) {
      const box = document.getElementById('atlasInspector');
      if (!box || !item) return;
      document.getElementById('inspBadge').textContent = item.categoryLabel || item.continent || 'Объект';
      document.getElementById('inspTitle').textContent = item.name;

      const card = item.ankiCard || {};
      const rows = [];
      if (item.region || item.continent) rows.push(['Регион / Материк', item.region || item.continent]);
      if (item.constituentIslands) rows.push(['Основные острова', item.constituentIslands]);
      if (Array.isArray(card.backMetrics)) {
        card.backMetrics.forEach((m) => {
          if (m && m.label && m.value) rows.push([m.label, m.value]);
        });
      }
      if (card.backMainAnswer && rows.length < 2) rows.push(['Сводка', card.backMainAnswer]);
      if (card.backNote || item.locationDesc) rows.push(['Описание', card.backNote || item.locationDesc]);

      document.getElementById('inspDetails').innerHTML = rows
        .map(([k, v]) => `<div class="flip-fact-row"><strong>${k}:</strong> ${v}</div>`)
        .join('');
      box.classList.remove('hidden');
      GeoAtlas.MotionFX?.reveal(box);
    }
  };

  const UICheatsheet = {
    activeTab: 'module1',
    query: '',

    init() {
      document.getElementById('btnCloseCheatsheet')?.addEventListener('click', () => this.close());
      document.getElementById('cheatsheetTabs')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-tab]');
        if (!btn) return;
        this.activeTab = btn.getAttribute('data-tab');
        GeoAtlas.TelegramBridge?.hapticSelection();
        this.render();
      });
      document.getElementById('cheatsheetSearch')?.addEventListener('input', (e) => {
        this.query = e.target.value.trim().toLowerCase();
        this.render();
      });
    },

    open(defaultTab = null) {
      if (defaultTab) this.activeTab = defaultTab;
      document.getElementById('cheatsheetModal')?.classList.remove('hidden');
      GeoAtlas.TelegramBridge?.hapticImpact('light');
      GeoAtlas.TelegramBridge?.showBackButton(() => this.close());
      this.render();
    },

    close() {
      document.getElementById('cheatsheetModal')?.classList.add('hidden');
      if (GeoAtlas.TelegramBridge) {
        if (UIAtlas.active) {
          GeoAtlas.TelegramBridge.showBackButton(() => UIAtlas.exitToHub());
        } else {
          GeoAtlas.TelegramBridge.hideBackButton();
        }
      }
    },

    render() {
      document.querySelectorAll('#cheatsheetTabs [data-tab]').forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute('data-tab') === this.activeTab);
      });

      const mod = GeoAtlas.LearningEngine.modules.find((m) => m.id === this.activeTab);
      const thead = document.getElementById('cheatsheetThead');
      const tbody = document.getElementById('cheatsheetTbody');
      if (!mod || !thead || !tbody) return;

      const items = mod.items.filter((it) => {
        if (!this.query) return true;
        const card = it.ankiCard || {};
        const metricsStr = Array.isArray(card.backMetrics) ? card.backMetrics.map((m) => m.value).join(' ') : '';
        const hay = [it.name, it.categoryLabel, it.continent, it.region, it.locationDesc, card.backMainAnswer, metricsStr]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return hay.includes(this.query);
      });

      const colsByMod = {
        module1: ['Объект / Показатель', 'Тип', 'Ключевые данные', 'Карта'],
        module2: ['Объект рельефа', 'Тип', 'Характеристики / Эпоха', 'Регион', 'Карта'],
        module3: ['Водный объект', 'Тип', 'Характеристики / Связи', 'Регион', 'Карта'],
        module4: ['Объект', 'Тип', 'Бассейн / Генезис / Высота', 'Регион', 'Карта']
      };

      const cols = colsByMod[this.activeTab] || colsByMod.module1;
      thead.innerHTML = `<tr>${cols.map((c) => `<th>${c}</th>`).join('')}</tr>`;

      tbody.innerHTML = items
        .map((it) => {
          const mapBtn = !GeoAtlas.GeoMath.isOralTheoryItem(it)
            ? `<button class="btn btn-sm btn-ghost" data-jump-id="${it.id}" type="button">🎯</button>`
            : '—';
          const card = it.ankiCard || {};
          const summary = card.backMainAnswer || it.locationDesc || '—';

          if (this.activeTab === 'module1') {
            return `<tr><td><strong>${it.name}</strong></td><td>${it.categoryLabel || ''}</td><td>${summary}</td><td>${mapBtn}</td></tr>`;
          }
          return `<tr><td><strong>${it.name}</strong></td><td>${it.categoryLabel || ''}</td><td>${summary}</td><td>${it.region || it.continent || '—'}</td><td>${mapBtn}</td></tr>`;
        })
        .join('');

      tbody.onclick = (e) => {
        const btn = e.target.closest('[data-jump-id]');
        if (!btn) return;
        const id = btn.getAttribute('data-jump-id');
        this.close();
        UIAtlas.open(id);
      };
    }
  };

  const App = {
    _toastTimer: null,

    showToast(text, undoCb = null) {
      const pill = document.getElementById('toastPill');
      const txtEl = document.getElementById('toastText');
      const undoBtn = document.getElementById('toastUndoBtn');
      if (!pill || !txtEl) return;

      txtEl.textContent = text;
      if (undoBtn) {
        if (typeof undoCb === 'function') {
          undoBtn.classList.remove('hidden');
          undoBtn.onclick = () => {
            pill.classList.add('hidden');
            undoCb();
          };
        } else {
          undoBtn.classList.add('hidden');
          undoBtn.onclick = null;
        }
      }
      pill.classList.remove('hidden');
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => pill.classList.add('hidden'), undoCb ? 4500 : 2800);
    },

    _bindMapControls() {
      document.getElementById('btnZoomIn')?.addEventListener('click', () => {
        GeoAtlas.TelegramBridge?.hapticSelection();
        GeoAtlas.MapEngine.zoomIn();
      });
      document.getElementById('btnZoomOut')?.addEventListener('click', () => {
        GeoAtlas.TelegramBridge?.hapticSelection();
        GeoAtlas.MapEngine.zoomOut();
      });
      document.getElementById('btnZoomReset')?.addEventListener('click', () => {
        GeoAtlas.TelegramBridge?.hapticImpact('light');
        GeoAtlas.MapEngine.resetWorldView();
      });

      const syncLayerButtons = (activeId) => {
        document.querySelectorAll('#mapLayerPills [data-layer]').forEach((b) => {
          b.classList.toggle('is-active-emerald', b.getAttribute('data-layer') === activeId);
        });
      };

      syncLayerButtons(GeoAtlas.LearningEngine.meta.layerId);
      document.getElementById('mapLayerPills')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-layer]');
        if (!btn) return;
        const layerId = btn.getAttribute('data-layer');
        GeoAtlas.LearningEngine.meta.layerId = layerId;
        GeoAtlas.StorageAdapter.saveMeta(GeoAtlas.LearningEngine.meta);
        GeoAtlas.MapEngine.setLayer(layerId);
        GeoAtlas.TelegramBridge?.hapticSelection();
        syncLayerButtons(layerId);
      });
    },

    init() {
      GeoAtlas.TelegramBridge.init();
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          GeoAtlas.StorageAdapter.flushCloud?.();
        }
      });
      global.addEventListener('pagehide', () => GeoAtlas.StorageAdapter.flushCloud?.());

      GeoAtlas.StorageAdapter.load(({ states, meta }) => {
        GeoAtlas.AudioEngine.init(meta.muted);
        GeoAtlas.TelegramBridge?.setHapticsEnabled(meta.haptics !== false);
        GeoAtlas.LearningEngine.init(states, meta);

        GeoAtlas.MapEngine.init('mapCanvas', {
          layerId: meta.layerId,
          onOfflineFallback: (newLayerId) => {
            meta.layerId = newLayerId;
            GeoAtlas.StorageAdapter.saveMeta(meta);
            document.querySelectorAll('#mapLayerPills [data-layer]').forEach((b) => {
              b.classList.toggle('is-active-emerald', b.getAttribute('data-layer') === newLayerId);
            });
            this.showToast('Сеть недоступна — включена офлайн векторная карта');
          }
        });

        this._bindMapControls();
        GeoAtlas.UIHub.init();
        GeoAtlas.UITrainer.init();
        GeoAtlas.UIAtlas.init();
        GeoAtlas.UICheatsheet.init();
      });
    }
  };

  GeoAtlas.UIAtlas = UIAtlas;
  GeoAtlas.UICheatsheet = UICheatsheet;
  GeoAtlas.App = App;

  global.addEventListener('DOMContentLoaded', () => App.init());
})(window);
