/**
 * ГеоАтлас v10.0 — UIAtlas, UICheatsheet ("Конспект-шпаргалка") & App Bootstrap
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const UIAtlas = {
    active: false,
    selectedId: null,
    filterMod: 'all',
    searchQuery: '',

    init() {
      const byId = (id) => document.getElementById(id);

      byId('btnExitAtlas')?.addEventListener('click', () => this.exitToHub());
      byId('btnCloseInspector')?.addEventListener('click', () => {
        this.selectedId = null;
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
        GeoAtlas.TelegramBridge.showBackButton(() => this.exitToHub());
      }

      if (focusItemId) {
        const item = GeoAtlas.LearningEngine.itemById.get(focusItemId);
        if (item) {
          this.filterMod = item.moduleId || 'all';
          const sel = document.getElementById('atlasModuleFilter');
          if (sel) sel.value = this.filterMod;
          this.selectedId = item.id;
          this.renderMapMarkers();
          this.inspectItem(item);
          GeoAtlas.MapEngine.fitItem(item, 6);
          return;
        }
      }

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
          const hay = [it.name, it.region, it.continent, it.ocean, it.foldingAge, it.description]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
          if (!hay.includes(this.searchQuery)) return false;
        }
        return true;
      });

      GeoAtlas.MapEngine.drawAtlasItems(items, engine.meta.showLabelsInAtlas, this.selectedId, (clicked) => {
        this.selectedId = clicked.id;
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

      const rows = [
        ['Материк / Регион', item.continent || item.region],
        ['Океан / Бассейн', item.ocean || item.basin || item.flowsInto],
        ['Эпоха складчатости', item.foldingAge],
        ['Высшая точка / Высота', item.highestPeak || item.height || item.elevation],
        ['Глубина / Длина', item.maxDepth || item.length],
        ['Тип / Происхождение', item.seaType || item.currentType || item.volcanoType || item.origin],
        ['Соединяет / Разделяет', [item.connects, item.separates].filter(Boolean).join(' · ')],
        ['Примечание', item.answerText || item.description]
      ].filter(([, v]) => v);

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
      this.render();
    },

    close() {
      document.getElementById('cheatsheetModal')?.classList.add('hidden');
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
        const hay = [
          it.name,
          it.categoryLabel,
          it.continent,
          it.region,
          it.ocean,
          it.foldingAge,
          it.answerText,
          it.description,
          it.connects
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return hay.includes(this.query);
      });

      const colsByMod = {
        module1: ['Объект / Показатель', 'Раздел', 'Ключевые данные', 'Карта'],
        module2: ['Объект рельефа', 'Тип', 'Складчатость / Отметка', 'Регион', 'Карта'],
        module3: ['Водный объект', 'Тип / Т°', 'Океан / Связи', 'Глубина', 'Карта'],
        module4: ['Объект', 'Тип', 'Бассейн / Котловина', 'Регион / Характеристика', 'Карта']
      };

      const cols = colsByMod[this.activeTab] || colsByMod.module1;
      thead.innerHTML = `<tr>${cols.map((c) => `<th>${c}</th>`).join('')}</tr>`;

      tbody.innerHTML = items
        .map((it) => {
          const mapBtn = !GeoAtlas.GeoMath.isOralTheoryItem(it)
            ? `<button class="btn btn-sm btn-ghost" data-jump-id="${it.id}" type="button">🎯</button>`
            : '—';

          if (this.activeTab === 'module1') {
            const info = (it.ankiCard && it.ankiCard.backMainAnswer) || it.answerText || it.hint || it.description || it.ocean || '';
            return `<tr><td><strong>${it.name}</strong></td><td>${it.categoryLabel || ''}</td><td>${info}</td><td>${mapBtn}</td></tr>`;
          }
          if (this.activeTab === 'module2') {
            const spec = [it.foldingAge, it.elevation || it.height, it.volcanoType].filter(Boolean).join(' · ');
            return `<tr><td><strong>${it.name}</strong></td><td>${it.categoryLabel || ''}</td><td>${spec || '—'}</td><td>${it.continent || it.region || ''}</td><td>${mapBtn}</td></tr>`;
          }
          if (this.activeTab === 'module3') {
            const typ = it.seaType || it.currentType || it.categoryLabel || '';
            const rel = [it.ocean, it.connects].filter(Boolean).join(' · ');
            return `<tr><td><strong>${it.name}</strong></td><td>${typ}</td><td>${rel || '—'}</td><td>${it.maxDepth || '—'}</td><td>${mapBtn}</td></tr>`;
          }
          const orig = [it.basin || it.flowsInto, it.origin, it.salinity].filter(Boolean).join(' · ');
          const extra = [it.continent || it.region, it.length || it.height || it.maxDepth].filter(Boolean).join(' · ');
          return `<tr><td><strong>${it.name}</strong></td><td>${it.categoryLabel || ''}</td><td>${orig || '—'}</td><td>${extra}</td><td>${mapBtn}</td></tr>`;
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
      document.getElementById('btnZoomIn')?.addEventListener('click', () => GeoAtlas.MapEngine.zoomIn());
      document.getElementById('btnZoomOut')?.addEventListener('click', () => GeoAtlas.MapEngine.zoomOut());
      document.getElementById('btnZoomReset')?.addEventListener('click', () => GeoAtlas.MapEngine.resetWorldView());

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
        syncLayerButtons(layerId);
      });
    },

    init() {
      GeoAtlas.TelegramBridge.init();
      GeoAtlas.StorageAdapter.load(({ states, meta }) => {
        GeoAtlas.AudioEngine.init(meta.muted);
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
