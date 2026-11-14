/**
 * Номенклатура ОЗ — Интерактивный тренажёр физической географии и номенклатуры (БГУ)
 * Разделы и режимы:
 *   1. «Характеристики материков и Земли» (билетный опрос Anki SRS: площади, мысы, вершины+высоты, впадины+глубины, Шубаев, Океания, пустыни)
 *   2. «Номенклатура объектов на карте» (1 039 объектов в 4 модулях БГУ: Умный микс, Найти на карте, Узнать по точке, Интерактивный Атлас)
 *   3. «Блиц 60 секунд» (скоростной игровой режим с комбо-множителем и рекордами)
 *   4. «Конспект-справочник» (таблица материков, Земля, Океания, Бермудский треугольник, глоссарий пустынь)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 0. MOTION FX & KOKONUT UI SPOTLIGHT
  // ==========================================================================
  const MotionFX = {
    reduced: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    initGlowCards() {
      // Отключено для высокого FPS на десктопе и мобильных (без pointermove reflow)
    },

    pop(el) {
      if (!el || this.reduced || !el.animate) return;
      el.animate([
        { transform: 'scale(0.95)', opacity: 0.85 },
        { transform: 'scale(1.03)', opacity: 1 },
        { transform: 'scale(1)', opacity: 1 }
      ], { duration: 240, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' });
    },

    shakeHud() {
      const hud = document.getElementById('taskHudCard');
      if (!hud || this.reduced) return;
      hud.classList.remove('shake');
      void hud.offsetWidth;
      hud.classList.add('shake');
      setTimeout(() => hud.classList.remove('shake'), 380);
    },

    confettiBurst(particleCount = 70) {
      if (this.reduced || typeof window.confetti !== 'function') return;
      try {
        window.confetti({
          particleCount,
          spread: 72,
          origin: { y: 0.62 },
          colors: ['#38bdf8', '#10b981', '#fbbf24', '#a855f7', '#f43f5e']
        });
      } catch (e) {}
    }
  };

  // ==========================================================================
  // 0.1 TELEGRAM MINI APP (TMA) NATIVE SDK & CLOUD STORAGE ADAPTER
  // ==========================================================================
  const TelegramBridge = {
    wa: window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null,

    init() {
      this.wa = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
      this.syncViewportMetrics();
      window.addEventListener('resize', () => {
        this.syncViewportMetrics();
        if (window.UnifiedMapEngine?.map) {
          window.UnifiedMapEngine.map.invalidateSize({ pan: false });
        }
      }, { passive: true });
      if (!this.wa) return;
      try {
        this.wa.ready();
        this.wa.expand();
        if (typeof this.wa.disableVerticalSwipes === 'function') {
          this.wa.disableVerticalSwipes();
        }
        if (typeof this.wa.setHeaderColor === 'function') {
          this.wa.setHeaderColor('#060b16');
        }
        if (typeof this.wa.setBackgroundColor === 'function') {
          this.wa.setBackgroundColor('#060b16');
        }
        this.applyThemeParams();
        this.syncViewportMetrics();
        if (typeof this.wa.onEvent === 'function') {
          this.wa.onEvent('themeChanged', () => this.applyThemeParams());
          this.wa.onEvent('viewportChanged', () => {
            this.syncViewportMetrics();
            setTimeout(() => window.UnifiedMapEngine?.map?.invalidateSize({ pan: false }), 60);
          });
          this.wa.onEvent('safeAreaChanged', () => this.syncViewportMetrics());
          this.wa.onEvent('contentSafeAreaChanged', () => this.syncViewportMetrics());
        }
        if (this.wa.BackButton && typeof this.wa.BackButton.onClick === 'function') {
          this.wa.BackButton.onClick(() => {
            if (window.MapApp) window.MapApp.handleTelegramBackButton();
          });
        }
      } catch (e) {}
    },

    syncViewportMetrics() {
      const root = document.documentElement;
      const stableH = this.wa?.viewportStableHeight || window.innerHeight;
      if (stableH && Number.isFinite(stableH)) {
        root.style.setProperty('--tg-viewport-stable-height', `${Math.round(stableH)}px`);
      }
      const csaTop = this.wa?.contentSafeAreaInset?.top;
      const saTop = this.wa?.safeAreaInset?.top;
      const topInset = Math.max(0, Number(csaTop || 0), Number(saTop || 0));
      root.style.setProperty('--tg-top-inset', `${topInset > 0 ? topInset + 4 : 8}px`);
    },

    applyThemeParams() {
      if (!this.wa || !this.wa.themeParams) return;
      const tp = this.wa.themeParams;
      const root = document.documentElement;
      if (tp.bg_color) root.style.setProperty('--tg-theme-bg-color', tp.bg_color);
      if (tp.text_color) root.style.setProperty('--tg-theme-text-color', tp.text_color);
      if (tp.hint_color) root.style.setProperty('--tg-theme-hint-color', tp.hint_color);
      if (tp.secondary_bg_color) root.style.setProperty('--tg-theme-secondary-bg-color', tp.secondary_bg_color);
      if (tp.button_color) root.style.setProperty('--tg-theme-button-color', tp.button_color);
    },

    setBackButton(visible) {
      if (!this.wa || !this.wa.BackButton) return;
      try {
        if (visible) this.wa.BackButton.show();
        else this.wa.BackButton.hide();
      } catch (e) {}
    },

    hapticHit() {
      try {
        this.wa?.HapticFeedback?.impactOccurred('medium');
      } catch (e) {}
    },

    hapticMiss() {
      try {
        this.wa?.HapticFeedback?.notificationOccurred('error');
      } catch (e) {}
    },

    hapticSelect() {
      try {
        this.wa?.HapticFeedback?.selectionChanged();
      } catch (e) {}
    }
  };

  /**
   * StorageAdapter — Облачное хранилище Telegram.WebApp.CloudStorage + localStorage fallback.
   * Упаковывает карточки Anki SM-2 в компактные кортежи [stCode, reps, lapses, dueStep, lastRevMin]
   * и шардирует по 4 модулям БГУ (geo_v9_m1, geo_v9_m2, geo_v9_m3, geo_v9_m4).
   * Новые карточки (stCode=0) в облако не пишутся для экономии квоты 4096 символов на ключ.
   */
  const StorageAdapter = {
    SHARD_KEYS: {
      module1: 'geo_v9_m1',
      module2: 'geo_v9_m2',
      module3: 'geo_v9_m3',
      module4: 'geo_v9_m4'
    },
    META_KEY: 'geo_v9_meta',
    STATUS_TO_CODE: { new: 0, learning: 1, review: 2, mastered: 3 },
    CODE_TO_STATUS: ['new', 'learning', 'review', 'mastered'],
    cloudDebounceTimers: {},

    hasCloud() {
      const cs = window.Telegram?.WebApp?.CloudStorage;
      return Boolean(cs && typeof cs.getItems === 'function' && typeof cs.setItem === 'function');
    },

    packCardState(s) {
      if (!s) return null;
      const st = s.status || s.state || 'new';
      const stCode = this.STATUS_TO_CODE[st] || 0;
      if (stCode === 0) return null; // Не пишем новые карточки (stCode=0) в облако
      const lastRevMin = s.lastReviewed ? Math.floor(s.lastReviewed / 60000) : 0;
      return [stCode, s.reps || 0, s.lapses || 0, s.dueStep || 0, lastRevMin];
    },

    unpackCardTuple(tuple) {
      if (!Array.isArray(tuple) || tuple.length < 1) return null;
      const [stCode, reps, lapses, dueStep, lastRevMin] = tuple;
      const status = this.CODE_TO_STATUS[stCode] || 'new';
      const lastReviewed = (lastRevMin || 0) * 60000;
      const intervalHours = stCode === 3 ? 72 : (stCode === 2 ? 24 : 0.5);
      return {
        status,
        state: status,
        reps: reps || 0,
        lapses: lapses || 0,
        dueStep: dueStep || 0,
        lastReviewed,
        intervalHours,
        dueTimestamp: lastReviewed ? lastReviewed + intervalHours * 3600000 : 0
      };
    },

    inferModuleKey(itemId) {
      if (!itemId) return 'module1';
      if (itemId.startsWith('m2_')) return 'module2';
      if (itemId.startsWith('m3_')) return 'module3';
      if (itemId.startsWith('m4_')) return 'module4';
      return 'module1';
    },

    saveShardedStates(allStatesDict) {
      const buckets = { module1: {}, module2: {}, module3: {}, module4: {} };
      for (const [id, st] of Object.entries(allStatesDict || {})) {
        const tuple = this.packCardState(st);
        if (!tuple) continue;
        const modKey = this.inferModuleKey(id);
        buckets[modKey][id] = tuple;
      }

      for (const [modKey, shardKey] of Object.entries(this.SHARD_KEYS)) {
        const dict = buckets[modKey];
        const jsonStr = JSON.stringify(dict);
        try {
          localStorage.setItem(shardKey, jsonStr);
        } catch (e) {}

        if (this.hasCloud()) {
          if (this.cloudDebounceTimers[shardKey]) clearTimeout(this.cloudDebounceTimers[shardKey]);
          this.cloudDebounceTimers[shardKey] = setTimeout(() => {
            this.writeShardToCloud(shardKey, dict);
          }, 300);
        }
      }
    },

    writeShardToCloud(shardKey, dict) {
      if (!this.hasCloud()) return;
      const cs = window.Telegram.WebApp.CloudStorage;
      const fullJson = JSON.stringify(dict);

      if (fullJson.length <= 3950) {
        try {
          cs.setItem(shardKey, fullJson, () => {});
          cs.removeItem?.(`${shardKey}_b`, () => {});
        } catch (e) {}
      } else {
        // Автоматический сплит на 2 суб-ключа, если 100% карточек модуля изучены и превышают 4096 байт
        const entries = Object.entries(dict);
        const mid = Math.ceil(entries.length / 2);
        const partA = JSON.stringify(Object.fromEntries(entries.slice(0, mid)));
        const partB = JSON.stringify(Object.fromEntries(entries.slice(mid)));
        try {
          cs.setItem(shardKey, partA, () => {});
          cs.setItem(`${shardKey}_b`, partB, () => {});
        } catch (e) {}
      }
    },

    loadLocalShardedStates() {
      const merged = {};
      for (const shardKey of Object.values(this.SHARD_KEYS)) {
        try {
          const raw = localStorage.getItem(shardKey);
          if (!raw) continue;
          const parsed = JSON.parse(raw);
          for (const [id, tuple] of Object.entries(parsed)) {
            const st = this.unpackCardTuple(tuple);
            if (st) merged[id] = st;
          }
        } catch (e) {}
      }
      return merged;
    },

    syncFromCloud(onSyncedCallback) {
      if (!this.hasCloud()) return;
      const cs = window.Telegram.WebApp.CloudStorage;
      const keysToFetch = [
        'geo_v9_m1', 'geo_v9_m1_b',
        'geo_v9_m2', 'geo_v9_m2_b',
        'geo_v9_m3', 'geo_v9_m3_b',
        'geo_v9_m4', 'geo_v9_m4_b',
        this.META_KEY
      ];

      try {
        cs.getItems(keysToFetch, (err, values) => {
          if (err || !values) return;
          let hasUpdates = false;
          const cloudStates = {};

          for (const modKey of ['module1', 'module2', 'module3', 'module4']) {
            const sk = this.SHARD_KEYS[modKey];
            const rawA = values[sk];
            const rawB = values[`${sk}_b`];
            for (const raw of [rawA, rawB]) {
              if (!raw) continue;
              try {
                const parsed = JSON.parse(raw);
                for (const [id, tuple] of Object.entries(parsed)) {
                  const unpacked = this.unpackCardTuple(tuple);
                  if (unpacked) cloudStates[id] = unpacked;
                }
              } catch (e) {}
            }
          }

          if (Object.keys(cloudStates).length > 0 && window.NomenclatureEngine) {
            for (const [id, cState] of Object.entries(cloudStates)) {
              const localState = window.NomenclatureEngine.srsStates[id];
              const localRank = localState ? (this.STATUS_TO_CODE[localState.status] || 0) : 0;
              const cloudRank = this.STATUS_TO_CODE[cState.status] || 0;
              if (!localState || cloudRank > localRank || (cState.lastReviewed || 0) > (localState.lastReviewed || 0)) {
                window.NomenclatureEngine.srsStates[id] = cState;
                hasUpdates = true;
              }
            }
          }

          if (values[this.META_KEY]) {
            try {
              const meta = JSON.parse(values[this.META_KEY]);
              if (meta && window.Gamification) {
                if ((meta.bestStreak || 0) > window.Gamification.bestStreak) {
                  window.Gamification.bestStreak = meta.bestStreak;
                  hasUpdates = true;
                }
                if ((meta.streak || 0) > window.Gamification.streak) {
                  window.Gamification.streak = meta.streak;
                  hasUpdates = true;
                }
                if ((meta.stepCounter || 0) > window.NomenclatureEngine.stepCounter) {
                  window.NomenclatureEngine.stepCounter = meta.stepCounter;
                }
              }
            } catch (e) {}
          }

          if (hasUpdates && typeof onSyncedCallback === 'function') {
            onSyncedCallback();
          }
        });
      } catch (e) {}
    },

    saveMeta(metaObj) {
      const json = JSON.stringify(metaObj);
      try {
        localStorage.setItem(this.META_KEY, json);
      } catch (e) {}
      if (this.hasCloud()) {
        try {
          window.Telegram.WebApp.CloudStorage.setItem(this.META_KEY, json, () => {});
        } catch (e) {}
      }
    },

    clearAllCloudAndLocal() {
      for (const sk of Object.values(this.SHARD_KEYS)) {
        localStorage.removeItem(sk);
      }
      localStorage.removeItem(this.META_KEY);
      if (this.hasCloud()) {
        const cs = window.Telegram.WebApp.CloudStorage;
        const keys = ['geo_v9_m1', 'geo_v9_m1_b', 'geo_v9_m2', 'geo_v9_m2_b', 'geo_v9_m3', 'geo_v9_m3_b', 'geo_v9_m4', 'geo_v9_m4_b', this.META_KEY];
        try {
          if (typeof cs.removeItems === 'function') cs.removeItems(keys, () => {});
        } catch (e) {}
      }
    }
  };
  const AudioEngine = {
    ctx: null,
    muted: false,

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    },

    toggleMute() {
      this.muted = !this.muted;
      localStorage.setItem('geoatlas_sound_muted', this.muted ? '1' : '0');
      this.updateIcons();
      return this.muted;
    },

    loadMuteState() {
      this.muted = localStorage.getItem('geoatlas_sound_muted') === '1';
      this.updateIcons();
    },

    updateIcons() {
      const icon = document.getElementById('soundIcon');
      if (icon) icon.textContent = this.muted ? '🔇' : '🔔';
      const hubIcon = document.getElementById('hubSoundIcon');
      if (hubIcon) hubIcon.textContent = this.muted ? '🔇' : '🔔';
    },

    playTone(freq, type = 'sine', duration = 0.14, gainVal = 0.11) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime;

        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(gainVal, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + duration);
      } catch (e) {}
    },

    playSuccess(combo = 1) {
      if (this.muted) return;
      const boost = Math.min(combo - 1, 6) * 24;
      this.playTone(523.25 + boost, 'triangle', 0.11, 0.13);
      setTimeout(() => {
        this.playTone(659.25 + boost, 'triangle', 0.18, 0.13);
      }, 80);
    },

    playError() {
      if (this.muted) return;
      this.playTone(196.0, 'sawtooth', 0.13, 0.12);
      setTimeout(() => {
        this.playTone(155.56, 'sawtooth', 0.2, 0.12);
      }, 95);
    },

    playWarmthCloser() {
      if (this.muted) return;
      this.playTone(440.0, 'sine', 0.08, 0.09);
      setTimeout(() => this.playTone(554.37, 'sine', 0.12, 0.09), 65);
    },

    playWarmthFarther() {
      if (this.muted) return;
      this.playTone(392.0, 'sine', 0.08, 0.08);
      setTimeout(() => this.playTone(311.13, 'sine', 0.12, 0.08), 65);
    },

    playCelebration() {
      if (this.muted) return;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, 'triangle', 0.24, 0.14), idx * 95);
      });
    }
  };

  // ==========================================================================
  // 2. СФЕРИЧЕСКАЯ ГЕОМЕТРИЯ, 180° МЕРИДИАН И ПРОСТРАНСТВЕННЫЕ ГРАНИЦЫ
  // ==========================================================================
  const SPATIAL_EXTENTS = {
    // 60 Полуостровов
    'Аляска': [54.0, -166.0, 60.5, -151.0],
    'Антарктический': [-75.0, -75.0, -62.5, -55.0],
    'Апеннинский': [37.5, 9.5, 44.5, 18.5],
    'Апшеронский': [40.1, 49.6, 40.7, 50.5],
    'Аравийский': [12.0, 34.0, 32.5, 60.0],
    'Арнемленд': [-15.5, 131.5, -11.0, 137.0],
    'Балканский': [36.0, 18.0, 46.0, 29.5],
    'Бретань': [47.2, -4.8, 48.9, -1.0],
    'Бузачи': [44.0, 50.8, 45.6, 52.8],
    'Бутия': [69.0, -97.0, 72.0, -91.5],
    'Вальдес': [-43.0, -64.8, -42.0, -63.3],
    'Галлипольский': [40.0, 26.0, 40.7, 27.0],
    'Гуахира': [11.3, -73.0, 12.6, -71.0],
    'Гыданский': [68.5, 74.0, 73.5, 82.0],
    'Индокитай': [8.5, 92.0, 23.5, 110.0],
    'Индостан': [8.0, 68.0, 25.5, 89.0],
    'Истрия': [44.7, 13.5, 45.6, 14.3],
    'Йорк (Кейп-Йорк)': [-17.5, 141.0, -10.5, 145.5],
    'Калабрия': [37.9, 15.5, 40.1, 17.2],
    'Калифорния (Нижняя)': [22.8, -117.5, 32.7, -109.0],
    'Камчатка': [50.5, 155.0, 61.0, 164.5],
    'Канин': [66.5, 43.0, 68.7, 46.0],
    'Катхиявар': [20.5, 69.0, 23.5, 72.5],
    'Кенай': [59.1, -152.0, 61.1, -148.5],
    'Керченский': [45.0, 35.3, 45.5, 36.7],
    'Кольский': [66.0, 31.0, 69.8, 41.5],
    'Корея': [34.0, 124.5, 43.0, 131.0],
    'Корнуолл': [49.9, -5.8, 50.9, -4.1],
    'Котантен': [49.1, -2.0, 49.8, -1.0],
    'Красноводский': [39.5, 52.0, 40.5, 54.0],
    'Крымский': [44.3, 32.3, 46.3, 36.7],
    'Лабрадор': [50.0, -80.0, 63.0, -55.0],
    'Ляодунский': [38.7, 121.0, 41.0, 124.0],
    'Малакка': [1.0, 98.0, 13.5, 105.0],
    'Малая Азия (Анатолия)': [36.0, 26.0, 42.1, 44.0],
    'pen_35': [42.8, 50.0, 45.2, 54.0], // п-ов Мангышлак
    'Мелвилл': [66.0, -87.0, 70.0, -81.0],
    'Новая Шотландия': [43.3, -66.5, 47.1, -59.8],
    'Пелопоннес': [36.3, 21.2, 38.4, 23.4],
    'Пиренейский (Иберийский)': [35.8, -9.8, 43.8, 3.5],
    'Салентина': [39.8, 17.5, 40.6, 18.6],
    'Святой Нос': [68.0, 39.5, 68.3, 40.1],
    'Синайский': [27.7, 32.2, 31.3, 35.0],
    'Скандинавский': [55.0, 4.0, 71.5, 31.5],
    'Сконе': [55.3, 12.5, 56.5, 14.6],
    'Сомали (Африканский Рог)': [1.0, 41.0, 12.5, 51.5],
    'Сьюард': [64.3, -168.2, 66.5, -160.8],
    'Таймыр': [70.0, 85.0, 78.0, 115.0],
    'Таманский': [45.0, 36.6, 45.4, 37.4],
    'Унгава': [57.0, -78.0, 62.5, -69.0],
    'Уэльс': [51.3, -5.4, 53.5, -2.6],
    'Флорида': [24.5, -87.8, 31.0, -79.8],
    'Халкидики': [39.9, 23.1, 40.7, 24.4],
    'Чукотский': [64.0, 171.5, 67.6, -168.5],
    'Шаньдунский': [35.0, 119.0, 38.0, 123.0],
    'Эйр': [-35.5, 134.5, -32.5, 137.8],
    'Юкатан': [17.5, -92.5, 21.8, -86.5],
    'Ютландия': [54.5, 8.0, 57.8, 11.0],
    'Ямал': [67.5, 66.0, 73.5, 74.0],

    // Крупные острова, архипелаги и рифы (клик по любому острову архипелага засчитывается!)
    'cont_isl_0': [51.0, 172.0, 55.5, -163.0], // Алеутские (материковые)
    'volc_isl_0': [51.0, 172.0, 55.5, -163.0], // Алеутские (вулканические)
    'cont_isl_2': [54.5, -137.0, 58.5, -132.5], // Арх. Александра
    'cont_isl_3': [38.6, 1.1, 40.2, 4.4], // Балеарские
    'cont_isl_4': [17.5, -85.0, 23.5, -65.2], // Большие Антильские (Куба..Пуэрто-Рико)
    'cont_isl_5': [-9.0, 95.0, 7.5, 126.0], // Большие Зондские (Суматра, Ява, Калимантан, Сулавеси)
    'cont_isl_7': [49.8, -10.8, 61.0, 1.9], // Британские острова
    'cont_isl_10': [48.3, -128.5, 51.0, -123.0], // Ванкувер
    'cont_isl_13': [59.7, -73.0, 83.6, -11.5], // Гренландия
    'cont_isl_17': [79.7, 44.0, 81.9, 65.5], // Земля Франца-Иосифа
    'cont_isl_20': [61.5, -126.0, 83.2, -61.0], // Канадский Арктический архипелаг
    'cont_isl_32': [-25.6, 43.2, -11.9, 50.5], // Мадагаскар
    'cont_isl_34': [10.0, -62.5, 18.0, -59.0], // Малые Антильские (Мартиника, Тринидад)
    'volc_isl_25': [11.8, -70.2, 18.8, -64.0], // Малые Антильские (Аруба..Виргинские)
    'cont_isl_35': [-11.0, 114.4, -8.0, 127.5], // Малые Зондские
    'cont_isl_39': [-4.5, 124.0, 2.5, 131.5], // Молуккские
    'cont_isl_40': [-10.7, 130.8, -0.3, 150.8], // Новая Гвинея
    'cont_isl_41': [-47.3, 166.3, -34.3, 178.6], // Новая Зеландия
    'cont_isl_42': [70.5, 51.5, 77.0, 69.2], // Новая Земля
    'cont_isl_43': [-22.8, 163.8, -19.5, 167.6], // Новая Каледония
    'cont_isl_44': [73.0, 135.0, 76.8, 158.0], // Новосибирские о-ва
    'cont_isl_46': [46.6, -59.5, 51.6, -52.6], // Ньюфаундленд
    'cont_isl_47': [-55.2, -72.0, -52.5, -65.0], // Огненная Земля
    'cont_isl_56': [45.9, 141.6, 54.5, 144.8], // Сахалин
    'cont_isl_57': [77.8, 90.0, 81.3, 107.0], // Северная Земля
    'cont_isl_64': [-43.7, 144.5, -40.5, 148.5], // Тасмания
    'cont_isl_67': [-52.5, -61.5, -51.0, -57.5], // Фолклендские
    'cont_isl_68': [5.0, 117.0, 19.2, 126.8], // Филиппинские
    'cont_isl_75': [76.5, 10.5, 80.8, 28.5], // Шпицберген
    'cont_isl_76': [5.9, 79.6, 9.9, 81.9], // Шри-Ланка
    'cont_isl_81': [24.2, 123.5, 45.6, 145.8], // Японские о-ва
    'volc_isl_4': [-6.5, 146.5, -1.5, 153.5], // Архипелаг Бисмарка
    'volc_isl_7': [18.9, -160.3, 22.3, -154.7], // Гавайские
    'volc_isl_8': [-1.5, -92.0, 0.7, -89.2], // Галапагос
    'volc_isl_11': [63.3, -24.6, 66.6, -13.4], // Исландия
    'volc_isl_12': [27.6, -18.2, 29.5, -13.3], // Канарские
    'volc_isl_13': [5.0, 137.0, 10.0, 163.5], // Каролинские (вулк.)
    'coral_isl_5': [5.0, 137.0, 10.0, 163.5], // Каролинские (коралл.)
    'volc_isl_21': [43.3, 145.4, 51.0, 156.6], // Курильские
    'volc_isl_26': [13.1, 144.5, 20.6, 146.1], // Марианские
    'volc_isl_28': [-21.5, 55.1, -19.5, 63.6], // Маскаренские
    'volc_isl_30': [-20.3, 166.5, -13.0, 170.3], // Новые Гебриды (Вануату)
    'volc_isl_34': [24.0, 123.0, 31.0, 131.2], // Рюкю
    'volc_isl_40': [-11.0, 155.5, -5.0, 163.0], // Соломоновы
    'coral_isl_2': [20.9, -79.5, 27.3, -72.5], // Багамские
    'coral_isl_3': [-24.5, 142.5, -10.5, 153.0], // Большой Барьерный риф
    'coral_isl_4': [-3.0, 172.0, 3.5, 177.0], // Гилберта
    'coral_isl_6': [-4.0, -162.5, 6.5, -154.5], // Лайн (Киритимати)
    'coral_isl_8': [-0.8, 72.5, 7.2, 74.0], // Мальдивские
    'coral_isl_9': [4.5, 165.0, 12.5, 172.5], // Маршалловы
    'coral_isl_11': [-23.5, -149.0, -14.0, -134.5], // Туамоту

    // Крупные пустыни мира
    'desert_0': [37.5, 99.5, 42.0, 106.0], // Алашань
    'desert_1': [44.8, 67.0, 47.5, 74.5], // Бетпак-Дала
    'desert_2': [26.8, 38.5, 30.0, 43.5], // Большой Нефуд
    'desert_4': [40.0, 96.0, 46.5, 112.5], // Гоби
    'desert_6': [33.0, 51.5, 36.0, 57.5], // Деште-Кевир
    'desert_7': [28.8, 57.0, 32.8, 60.8], // Деште-Лут
    'desert_8': [37.2, 55.5, 42.0, 64.0], // Каракумы
    'desert_9': [40.0, 60.5, 45.2, 67.5], // Кызылкум
    'desert_15': [17.0, 45.0, 24.0, 56.0], // Руб-эль-Хали
    'desert_17': [30.0, 36.5, 35.5, 43.0], // Сирийская
    'desert_18': [36.8, 77.0, 41.2, 88.5], // Такла-Макан
    'desert_19': [24.5, 68.5, 29.5, 74.0], // Тар
    'desert_20': [-27.5, 18.5, -19.0, 26.5], // Калахари
    'desert_21': [-33.8, 19.5, -30.5, 25.5], // Карру
    'desert_22': [-28.5, 13.8, -17.5, 16.5], // Намиб
    'desert_23': [15.5, -16.5, 33.0, 34.5], // Сахара (весь пояс!)
    'desert_24': [24.0, 31.0, 29.8, 34.8], // Аравийская (в Африке)
    'desert_25': [20.0, 20.0, 30.5, 30.5], // Ливийская
    'desert_26': [17.5, 31.5, 23.0, 36.8], // Нубийская
    'desert_27': [28.5, 5.0, 33.5, 10.0], // Большой Восточный Эрг
    'desert_28': [28.5, -2.0, 32.5, 3.0], // Большой Западный Эрг
    'desert_29': [-22.5, 120.0, -18.5, 128.5], // Большая Песчаная
    'desert_30': [-31.0, 123.0, -26.8, 134.5], // Большая пустыня Виктория
    'desert_31': [-25.5, 123.0, -22.0, 128.5], // Гибсона
    'desert_32': [-27.2, 134.5, -23.0, 139.0], // Симпсон
    'desert_33': [33.8, -117.8, 36.8, -114.2], // Мохаве
    'desert_34': [27.5, -115.0, 33.8, -109.5], // Сонора
    'desert_35': [25.0, -107.5, 33.0, -101.5], // Чиуауа
    'desert_36': [-27.5, -71.0, -18.5, -68.0], // Атакама
    'desert_37': [-7.5, -81.3, -4.8, -79.8] // Сечура
  };

  const GeoMath = {
    normalizeLng(lng) {
      return ((((lng + 180) % 360) + 360) % 360) - 180;
    },

    calcDistanceKm(lat1, lng1, lat2, lng2) {
      const R = 6371;
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      let dLonDeg = this.normalizeLng(lng2 - lng1);
      const dLon = (dLonDeg * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return Math.round(R * c);
    },

    /**
     * Расчёт Cross-Track Distance по гаверсинусам до ближайшего сегмента полилинии
     * (с нормализацией долготы через ±180° для Тихоокеанских желобов и течений).
     */
    calcPolylineDistanceKm(clickLat, clickLng, polylineCoords) {
      if (!Array.isArray(polylineCoords) || polylineCoords.length === 0) {
        return { distKm: 99999, closestLat: 0, closestLng: 0 };
      }
      if (polylineCoords.length === 1) {
        const d = this.calcDistanceKm(clickLat, clickLng, polylineCoords[0][0], polylineCoords[0][1]);
        return { distKm: d, closestLat: polylineCoords[0][0], closestLng: polylineCoords[0][1] };
      }

      let minDistKm = Infinity;
      let bestLat = polylineCoords[0][0];
      let bestLng = polylineCoords[0][1];

      for (let i = 0; i < polylineCoords.length - 1; i++) {
        const latA = polylineCoords[i][0];
        const lngA = polylineCoords[i][1];
        const latB = polylineCoords[i + 1][0];
        const lngB = polylineCoords[i + 1][1];

        const dLngAB = this.normalizeLng(lngB - lngA);
        const dLatAB = latB - latA;
        const dLngAP = this.normalizeLng(clickLng - lngA);
        const dLatAP = clickLat - latA;

        const cosMid = Math.cos((((latA + latB) * 0.5) * Math.PI) / 180);
        const vx = dLngAB * cosMid;
        const vy = dLatAB;
        const wx = dLngAP * cosMid;
        const wy = dLatAP;

        const lenSq = vx * vx + vy * vy;
        let t = 0;
        if (lenSq > 1e-9) {
          t = Math.max(0, Math.min(1, (wx * vx + wy * vy) / lenSq));
        }

        const projLat = latA + t * dLatAB;
        const projLng = this.normalizeLng(lngA + t * dLngAB);
        const segDistKm = this.calcDistanceKm(clickLat, clickLng, projLat, projLng);

        if (segDistKm < minDistKm) {
          minDistKm = segDistKm;
          bestLat = projLat;
          bestLng = projLng;
        }
      }

      return { distKm: Math.round(minDistKm), closestLat: bestLat, closestLng: bestLng };
    },

    calcCompass8Rhumb(fromLat, fromLng, toLat, toLng) {
      const dLat = toLat - fromLat;
      const dLng = this.normalizeLng(toLng - fromLng);
      const angle = (Math.atan2(dLng * Math.cos((fromLat * Math.PI) / 180), dLat) * 180) / Math.PI;
      const deg = (angle + 360) % 360;
      const idx = Math.round(deg / 45) % 8;
      const rhumbs = [
        { code: '↑ С', full: 'к северу ↑' },
        { code: '↗ СВ', full: 'к северо-востоку ↗' },
        { code: '→ В', full: 'к востоку →' },
        { code: '↘ ЮВ', full: 'к юго-востоку ↘' },
        { code: '↓ Ю', full: 'к югу ↓' },
        { code: '↙ ЮЗ', full: 'к юго-западу ↙' },
        { code: '← З', full: 'к западу ←' },
        { code: '↖ СЗ', full: 'к северо-западу ↖' }
      ];
      return {
        code: rhumbs[idx].code,
        full: rhumbs[idx].full,
        angleDeg: Math.round(deg)
      };
    },

    calcBearingHint(fromLat, fromLng, toLat, toLng) {
      return this.calcCompass8Rhumb(fromLat, fromLng, toLat, toLng).full;
    },

    getExtentForItem(it) {
      return SPATIAL_EXTENTS[it.legacyUid] || SPATIAL_EXTENTS[it.uid] || SPATIAL_EXTENTS[it.id] || SPATIAL_EXTENTS[it.name] || null;
    },

    checkSpatialHit(rawLat, rawLng, item, currentZoom = 3) {
      const lat = rawLat;
      const lng = this.normalizeLng(rawLng);

      // 1. Линейные объекты (Реки, Морские течения, Глубоководные желоба) с буфером Cross-Track Distance (110–150 км)
      if (item.geometryType === 'polyline' && Array.isArray(item.coords) && item.coords.length >= 2) {
        const polyRes = this.calcPolylineDistanceKm(lat, lng, item.coords);
        const baseBuf = Math.max(110, Math.min(155, item.crossTrackBufferKm || 135));
        const zoomFactor = currentZoom < 3.0 ? 1.25 : (currentZoom > 5.5 ? 0.85 : 1.0);
        const effectiveBufferKm = Math.round(baseBuf * zoomFactor);

        return {
          isHit: polyRes.distKm <= effectiveBufferKm,
          distKm: polyRes.distKm,
          targetLat: polyRes.closestLat,
          targetLng: polyRes.closestLng
        };
      }

      // 2. Экранный адаптивный допуск для площадных и точечных объектов
      const zoomKmAllowance = Math.max(95, Math.min(420, Math.round(1350 / Math.pow(1.62, Math.max(0, currentZoom - 1.5)))));
      const baseRadius = Math.min(item.hitRadiusKm || 360, Math.max(180, zoomKmAllowance));

      if (item.bounds) {
        const [minLat, minLng, maxLat, maxLng] = item.bounds;
        const inLat = lat >= minLat && lat <= maxLat;
        const inLng = minLng > maxLng ? (lng >= minLng || lng <= maxLng) : (lng >= minLng && lng <= maxLng);

        if (inLat && inLng) {
          return { isHit: true, distKm: 0, targetLat: lat, targetLng: lng };
        }

        const cLat = Math.max(minLat, Math.min(maxLat, lat));
        let cLng;
        if (minLng > maxLng) {
          const d1 = Math.abs(this.normalizeLng(lng - minLng));
          const d2 = Math.abs(this.normalizeLng(lng - maxLng));
          cLng = d1 < d2 ? minLng : maxLng;
        } else {
          cLng = Math.max(minLng, Math.min(maxLng, lng));
        }

        const distKm = this.calcDistanceKm(lat, lng, cLat, cLng);
        const edgeBuffer = Math.min(140, Math.round(baseRadius * 0.42));
        return { isHit: distKm <= edgeBuffer, distKm, targetLat: cLat, targetLng: cLng };
      }

      const distKm = this.calcDistanceKm(lat, lng, item.lat, item.lng);
      return { isHit: distKm <= baseRadius, distKm, targetLat: item.lat, targetLng: item.lng };
    }
  };

  // ==========================================================================
  // 3. КАРТОГРАФИЧЕСКИЙ ДВИЖОК (СПУТНИК / РЕЛЬЕФ + CANVAS ДЛЯ 60 FPS)
  // ==========================================================================
  const UnifiedMapEngine = {
    map: null,
    canvasRenderer: null,
    currentMode: 'esri_sat',
    onlineTileLayer: null,
    labelsOverlayLayer: null,
    offlineLayers: [],
    feedbackLayer: null,
    specialEntitiesLayer: null,
    atlasMarkersLayer: null,
    tileErrorStreak: 0,

    TILE_SOURCES: {
      esri_sat: {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        options: { maxZoom: 18, attribution: '' }
      },
      esri_phys: {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
        options: { maxNativeZoom: 8, maxZoom: 13, attribution: '' }
      }
    },

    CONTINENT_VIEWS: {
      'Евразия': { center: [48, 82], zoom: 2.6 },
      'Европа': { center: [52, 16], zoom: 3.7 },
      'Азия': { center: [34, 92], zoom: 3.0 },
      'Африка': { center: [2, 20], zoom: 3.1 },
      'Северная Америка': { center: [47, -98], zoom: 2.8 },
      'Южная Америка': { center: [-22, -60], zoom: 3.0 },
      'Австралия': { center: [-25, 135], zoom: 3.6 },
      'Австралия и Океания': { center: [-16, 155], zoom: 2.8 },
      'Антарктида': { center: [-72, 0], zoom: 2.4 },
      'Арктика и Антарктика': { center: [72, 40], zoom: 2.5 },
      'Мировой океан': { center: [15, 10], zoom: 2.4 }
    },

    init() {
      const container = document.getElementById('map');
      if (!container || typeof L === 'undefined') return;

      this.canvasRenderer = L.canvas ? L.canvas({ padding: 0.4 }) : undefined;

      this.map = L.map('map', {
        center: [26, 20],
        zoom: 2.75,
        minZoom: 2,
        maxZoom: 18,
        zoomSnap: 0.5,
        zoomDelta: 0.5,
        wheelPxPerZoomLevel: 90,
        worldCopyJump: true,
        zoomControl: false,
        attributionControl: false,
        preferCanvas: true,
        renderer: this.canvasRenderer,
        zoomAnimation: true,
        fadeAnimation: false,
        markerZoomAnimation: true
      });

      this.feedbackLayer = L.layerGroup().addTo(this.map);
      this.specialEntitiesLayer = L.layerGroup().addTo(this.map);
      this.atlasMarkersLayer = L.layerGroup().addTo(this.map);

      let savedMode = localStorage.getItem('geoatlas_map_mode') || 'esri_sat';
      if (!this.TILE_SOURCES[savedMode]) savedMode = 'esri_sat';
      this.setMapMode(savedMode);

      this.map.on('click', (e) => {
        MapApp.handleMapClick(e.latlng);
      });

      const zoomInBtn = document.getElementById('zoomInBtn');
      const zoomOutBtn = document.getElementById('zoomOutBtn');
      const resetViewBtn = document.getElementById('resetViewBtn');

      if (zoomInBtn) zoomInBtn.onclick = () => this.map.zoomIn(0.6);
      if (zoomOutBtn) zoomOutBtn.onclick = () => this.map.zoomOut(0.6);
      if (resetViewBtn) resetViewBtn.onclick = () => this.resetView();
    },

    setMapMode(mode) {
      if (!this.map) return;
      if (!this.TILE_SOURCES[mode]) {
        mode = 'esri_sat';
      }
      this.currentMode = mode;
      localStorage.setItem('geoatlas_map_mode', mode);

      document.querySelectorAll('#mapModeSegmented .seg-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
      });

      if (this.onlineTileLayer) {
        this.map.removeLayer(this.onlineTileLayer);
        this.onlineTileLayer = null;
      }

      this.offlineLayers.forEach((l) => {
        if (this.map.hasLayer(l)) this.map.removeLayer(l);
      });
      this.offlineLayers = [];

      const source = this.TILE_SOURCES[mode] || this.TILE_SOURCES.esri_sat;
      this.tileErrorStreak = 0;
      this.onlineTileLayer = L.tileLayer(source.url, {
        ...source.options,
        keepBuffer: 4,
        updateWhenIdle: true
      });

      this.onlineTileLayer.on('tileload', () => {
        this.tileErrorStreak = 0;
      });

      this.onlineTileLayer.addTo(this.map);
      this.drawParallels(false);
    },

    setAtlasLabelsVisible(visible) {
      if (!this.map) return;
      if (this.labelsOverlayLayer) {
        this.map.removeLayer(this.labelsOverlayLayer);
        this.labelsOverlayLayer = null;
      }
      if (visible) {
        this.labelsOverlayLayer = L.tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png',
          { subdomains: 'abcd', maxZoom: 19, pane: 'overlayPane' }
        ).addTo(this.map);
      }
    },

    drawParallels(withLabels = false) {
      const lines = [
        { coords: [[0, -360], [0, 360]], color: 'rgba(234, 179, 8, 0.35)', weight: 1.3, label: 'Экватор 0°', labelPos: [0, -28] },
        { coords: [[23.44, -360], [23.44, 360]], color: 'rgba(245, 158, 11, 0.24)', dash: '5, 6', weight: 1, label: 'Сев. тропик 23°26′', labelPos: [23.44, -28] },
        { coords: [[-23.44, -360], [-23.44, 360]], color: 'rgba(245, 158, 11, 0.24)', dash: '5, 6', weight: 1, label: 'Юж. тропик 23°26′', labelPos: [-23.44, -28] },
        { coords: [[66.56, -360], [66.56, 360]], color: 'rgba(56, 189, 248, 0.26)', dash: '4, 5', weight: 1, label: 'Сев. полярный круг', labelPos: [66.56, -28] },
        { coords: [[-66.56, -360], [-66.56, 360]], color: 'rgba(56, 189, 248, 0.26)', dash: '4, 5', weight: 1, label: 'Юж. полярный круг', labelPos: [-66.56, -28] }
      ];

      lines.forEach((p) => {
        const line = L.polyline(p.coords, {
          color: p.color,
          weight: p.weight,
          dashArray: p.dash || null,
          interactive: false
        }).addTo(this.map);
        this.offlineLayers.push(line);

        if (withLabels && p.label) {
          const lbl = L.circleMarker(p.labelPos, { radius: 0, opacity: 0, fillOpacity: 0, interactive: false })
            .bindTooltip(p.label, { permanent: true, direction: 'center', className: 'geo-line-label' })
            .addTo(this.map);
          this.offlineLayers.push(lbl);
        }
      });
    },

    flyToSmart(lat, lng, zoom = 4.2) {
      if (!this.map) return;
      // Смещаем центр чуть севернее, чтобы верхняя карточка HUD никогда не закрывала целевой объект!
      const latOffset = zoom <= 3 ? 6 : (zoom <= 4.5 ? 2.5 : 0.8);
      const adjustedLat = Math.min(82, lat + latOffset);
      this.map.flyTo([adjustedLat, lng], zoom, { duration: 0.65, easeLinearity: 0.25 });
    },

    flyToRegionHint(item) {
      if (!this.map || !item) return;
      // Мягкое наведение на регион с небольшим случайным сдвигом, чтобы не выдавать точный центр!
      const jitterLat = ((item.lat * 17) % 5) - 2.5;
      const jitterLng = ((item.lng * 13) % 7) - 3.5;
      const targetLat = Math.max(-78, Math.min(80, item.lat + jitterLat + 3));
      const targetLng = GeoMath.normalizeLng(item.lng + jitterLng);
      this.map.flyTo([targetLat, targetLng], 3.7, { duration: 0.7, easeLinearity: 0.25 });
    },

    flyToContinent(name) {
      if (!this.map) return;
      const view = this.CONTINENT_VIEWS[name] || { center: [25, 20], zoom: 2.7 };
      this.map.flyTo(view.center, view.zoom, { duration: 0.65, easeLinearity: 0.25 });
    },

    resetView() {
      if (!this.map) return;
      this.map.flyTo([24, 18], 2.65, { duration: 0.55 });
    },

    clearFeedback() {
      this.feedbackLayer?.clearLayers();
    },

    clearSpecialEntities() {
      this.specialEntitiesLayer?.clearLayers();
    },

    clearAtlasMarkers() {
      this.atlasMarkersLayer?.clearLayers();
    },

    drawExtentBox(bounds, color = '#38bdf8') {
      if (!bounds || !this.feedbackLayer) return;
      const [minLat, minLng, maxLat, maxLng] = bounds;
      const opts = { color, weight: 2, fillOpacity: 0.13, dashArray: '5, 5', interactive: false };
      if (minLng <= maxLng) {
        L.rectangle([[minLat, minLng], [maxLat, maxLng]], opts).addTo(this.feedbackLayer);
      } else {
        // Корректная отрисовка через 180° меридиан (Чукотка, Алеутские о-ва)
        L.rectangle([[minLat, minLng], [maxLat, 180]], opts).addTo(this.feedbackLayer);
        L.rectangle([[minLat, -180], [maxLat, maxLng]], opts).addTo(this.feedbackLayer);
      }
    },

    unwrapPolylineCoords(coords) {
      if (!Array.isArray(coords) || coords.length === 0) return [];
      const unwrapped = [[coords[0][0], coords[0][1]]];
      for (let i = 1; i < coords.length; i++) {
        const prevLng = unwrapped[i - 1][1];
        const curLat = coords[i][0];
        const curLng = prevLng + GeoMath.normalizeLng(coords[i][1] - prevLng);
        unwrapped.push([curLat, curLng]);
      }
      return unwrapped;
    },

    getPolylineVisualStyle(item) {
      const tempType = item.flowStyle?.tempType || '';
      if (tempType === 'warm') {
        return { color: '#f43f5e', glowColor: 'rgba(244, 63, 94, 0.32)', dashArray: null, hasArrows: true };
      }
      if (tempType === 'cold') {
        return { color: '#38bdf8', glowColor: 'rgba(56, 189, 248, 0.32)', dashArray: '8, 6', hasArrows: true };
      }
      if (item.category === 'currents' || tempType === 'neutral') {
        return { color: '#a855f7', glowColor: 'rgba(168, 85, 247, 0.32)', dashArray: null, hasArrows: true };
      }
      if (item.category === 'trenches' || tempType === 'trench') {
        return { color: '#818cf8', glowColor: 'rgba(99, 102, 241, 0.35)', dashArray: '6, 6', hasArrows: false };
      }
      // Реки (по умолчанию)
      return { color: '#38bdf8', glowColor: 'rgba(14, 165, 233, 0.35)', dashArray: null, hasArrows: Boolean(item.flowStyle?.hasDirection !== false) };
    },

    drawPolylineWithArrows(item, targetLayer = this.feedbackLayer, opts = {}) {
      if (!item || !Array.isArray(item.coords) || item.coords.length < 2 || !targetLayer) return null;
      const coords = this.unwrapPolylineCoords(item.coords);
      const style = this.getPolylineVisualStyle(item);
      const { interactive = false, onClick = null, skipArrows = false } = opts;

      // Подложка линии на Canvas
      L.polyline(coords, {
        renderer: this.canvasRenderer,
        color: style.glowColor,
        weight: skipArrows ? 7 : 10,
        opacity: skipArrows ? 0.65 : 0.9,
        lineCap: 'round',
        lineJoin: 'round',
        interactive: false
      }).addTo(targetLayer);

      // Основная линия русла реки / морского течения / желоба
      const poly = L.polyline(coords, {
        renderer: this.canvasRenderer,
        color: style.color,
        weight: skipArrows ? 3 : 4,
        opacity: 0.98,
        dashArray: style.dashArray,
        lineCap: 'round',
        lineJoin: 'round',
        interactive
      }).addTo(targetLayer);

      if (interactive && typeof onClick === 'function') {
        poly.on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          onClick();
        });
      }

      // Отрисовка стрелок направления течения (только для выделенного объекта, не в массовом Атласе)
      if (style.hasArrows && !skipArrows) {
        for (let i = 0; i < coords.length - 1; i++) {
          const [lat1, lng1] = coords[i];
          const [lat2, lng2] = coords[i + 1];
          const midLat = (lat1 + lat2) * 0.5;
          const midLng = (lng1 + lng2) * 0.5;

          const dLat = lat2 - lat1;
          const dLng = (lng2 - lng1) * Math.cos((midLat * Math.PI) / 180);
          // В CSS символ ➤ направлен вправо (на восток = 0deg), север в экране вверху (-90deg)
          const angleDeg = Math.round((-Math.atan2(dLat, dLng) * 180) / Math.PI);

          const arrowIcon = L.divIcon({
            className: 'flow-arrow-icon',
            html: `<div class="flow-arrow-glyph" style="transform: rotate(${angleDeg}deg); color: ${style.color};">➤</div>`,
            iconSize: [18, 18],
            iconAnchor: [9, 9]
          });

          L.marker([midLat, midLng], {
            icon: arrowIcon,
            interactive: false
          }).addTo(targetLayer);
        }
      }

      return poly;
    },

    placeAttemptPin(latlng, attemptNum, color, compassBadgeText = null) {
      const pin = L.circleMarker(latlng, {
        radius: 8,
        fillColor: color,
        color: '#ffffff',
        weight: 2,
        fillOpacity: 0.95
      }).addTo(this.feedbackLayer);

      const labelHtml = compassBadgeText ? `#${attemptNum} • ${compassBadgeText}` : `#${attemptNum}`;
      pin.bindTooltip(labelHtml, {
        permanent: true,
        direction: 'top',
        className: 'attempt-pin-tooltip',
        offset: [0, -6]
      });
      return pin;
    },

    showTargetPulsingMarker(item, lastClickLatLng = null, opts = {}) {
      const { showLabel = true, autoFly = true, onTargetClick = null } = opts;
      const targetLatLng = L.latLng(item.lat, item.lng);

      if (item.geometryType === 'polyline' && Array.isArray(item.coords) && item.coords.length >= 2) {
        this.drawPolylineWithArrows(item, this.feedbackLayer, {
          interactive: Boolean(onTargetClick),
          onClick: onTargetClick
        });
      } else if (item.bounds) {
        this.drawExtentBox(item.bounds, '#38bdf8');
      }

      const style = item.geometryType === 'polyline' ? this.getPolylineVisualStyle(item) : { color: '#38bdf8' };
      const pulseColor = style.color || '#38bdf8';

      L.circleMarker(targetLatLng, {
        radius: 19,
        fillColor: pulseColor,
        color: pulseColor,
        weight: 1.5,
        fillOpacity: 0.22,
        interactive: false
      }).addTo(this.feedbackLayer);

      const marker = L.circleMarker(targetLatLng, {
        radius: 8.5,
        fillColor: pulseColor === '#f43f5e' ? '#e11d48' : '#0284c7',
        color: '#ffffff',
        weight: 2.5,
        fillOpacity: 1,
        interactive: Boolean(onTargetClick)
      }).addTo(this.feedbackLayer);

      if (onTargetClick) {
        marker.on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          onTargetClick();
        });
      }

      if (showLabel) {
        const title = item.displayTitle || item.title || item.name || '';
        marker.bindTooltip(title, {
          permanent: true,
          direction: 'top',
          className: 'target-compact-tooltip',
          offset: [0, -10]
        });
      }

      if (lastClickLatLng) {
        const hitInfo = GeoMath.checkSpatialHit(lastClickLatLng.lat, lastClickLatLng.lng, item, 3);
        const destLat = hitInfo.targetLat ?? item.lat;
        const destLng = hitInfo.targetLng ?? item.lng;
        const normClickLng = destLng + GeoMath.normalizeLng(lastClickLatLng.lng - destLng);
        L.polyline([[lastClickLatLng.lat, normClickLng], [destLat, destLng]], {
          color: 'rgba(255, 255, 255, 0.55)',
          weight: 2,
          dashArray: '4, 6',
          interactive: false
        }).addTo(this.feedbackLayer);
      }

      if (autoFly && this.map) {
        const curZoom = this.map.getZoom();
        const idealZoom = item.geometryType === 'polyline' || item.bounds ? Math.max(curZoom, 3.5) : Math.max(curZoom, 4.2);
        this.flyToSmart(item.lat, item.lng, Math.min(idealZoom, 5.2));
      }
    },

    drawBermudaTriangle(vertices) {
      this.clearSpecialEntities();
      if (!vertices || vertices.length < 3) return;

      const latlngs = vertices.map((v) => [v.lat, v.lng]);
      const polygon = L.polygon(latlngs, {
        color: '#f472b6',
        fillColor: '#ec4899',
        fillOpacity: 0.22,
        weight: 2.5,
        dashArray: '6, 6'
      }).addTo(this.specialEntitiesLayer);

      vertices.forEach((v) => {
        L.circleMarker([v.lat, v.lng], {
          radius: 6.5,
          fillColor: '#38bdf8',
          color: '#ffffff',
          weight: 2,
          fillOpacity: 1
        })
          .bindTooltip(v.name, { permanent: true, direction: 'top', className: 'target-compact-tooltip' })
          .addTo(this.specialEntitiesLayer);
      });

      this.map?.fitBounds(polygon.getBounds().pad(0.45));
    },

    drawOceaniaRegions(specialEntities) {
      this.clearSpecialEntities();
      const zones = [
        {
          id: 'melanesia',
          color: '#34d399',
          coords: [[0, 130], [0, 180], [-24, 180], [-24, 162], [-12, 130]]
        },
        {
          id: 'micronesia',
          color: '#38bdf8',
          coords: [[22, 132], [22, 178], [0, 178], [0, 132]]
        },
        {
          id: 'polynesia',
          color: '#c084fc',
          coords: [[23.5, -155], [-27.2, -109.3], [-47, 166], [-10, -172]]
        }
      ];

      zones.forEach((z) => {
        const info = (specialEntities || []).find((s) => s.id === z.id);
        if (!info) return;
        if (z.id !== 'polynesia') {
          L.polygon(z.coords, {
            color: z.color,
            fillColor: z.color,
            fillOpacity: 0.14,
            weight: 2,
            dashArray: '5, 5'
          }).addTo(this.specialEntitiesLayer);
        }
        if (info.center) {
          const m = L.circleMarker(info.center, {
            radius: 9,
            fillColor: z.color,
            color: '#ffffff',
            weight: 2,
            fillOpacity: 0.95
          })
            .bindTooltip(info.name, { permanent: true, direction: 'top', className: 'target-compact-tooltip' })
            .addTo(this.specialEntitiesLayer);
          m.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            MapApp.inspectSpecialEntity(info);
          });
        }
      });
    }
  };

  // ==========================================================================
  // 4. АВТОПЕРЕХОД И ГЕЙМИФИКАЦИЯ (СЕРИИ, ЦЕЛЬ ДНЯ, РАНГИ)
  // ==========================================================================
  const AutoAdvanceController = {
    timer: null,
    activeCallback: null,

    schedule(delayMs, callback) {
      this.cancel();
      this.activeCallback = callback;

      const fill = document.getElementById('autoAdvanceTimerFill');
      if (fill) {
        fill.style.display = 'block';
        fill.style.transition = 'none';
        fill.style.width = '0%';
        void fill.offsetWidth;
        fill.style.transition = `width ${delayMs}ms linear`;
        fill.style.width = '100%';
      }

      this.timer = setTimeout(() => this.commit(), delayMs);
    },

    commit() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      const fill = document.getElementById('autoAdvanceTimerFill');
      if (fill) {
        fill.style.display = 'none';
        fill.style.width = '0%';
      }
      if (typeof this.activeCallback === 'function') {
        const cb = this.activeCallback;
        this.activeCallback = null;
        cb();
      }
    },

    cancel() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.activeCallback = null;
      const fill = document.getElementById('autoAdvanceTimerFill');
      if (fill) {
        fill.style.display = 'none';
        fill.style.width = '0%';
      }
    },

    isRunning() {
      return this.timer !== null;
    }
  };

  const Gamification = {
    streak: 0,
    bestStreak: 0,
    dailyCount: 0,
    dailyGoal: 25,
    dailyDate: '',
    bestBlitzScore: 0,
    KEY: 'geoatlas_gamification_v1',

    load() {
      try {
        const raw = localStorage.getItem(this.KEY);
        if (raw) {
          const d = JSON.parse(raw);
          this.streak = d.streak || 0;
          this.bestStreak = d.bestStreak || 0;
          this.dailyCount = d.dailyCount || 0;
          this.dailyDate = d.dailyDate || '';
          this.bestBlitzScore = d.bestBlitzScore || 0;
        }
      } catch (e) {}
      const today = new Date().toISOString().slice(0, 10);
      if (this.dailyDate !== today) {
        this.dailyDate = today;
        this.dailyCount = 0;
        this.save();
      }
    },

    save() {
      const payload = {
        streak: this.streak,
        bestStreak: this.bestStreak,
        dailyCount: this.dailyCount,
        dailyDate: this.dailyDate,
        bestBlitzScore: this.bestBlitzScore,
        stepCounter: window.NomenclatureEngine ? window.NomenclatureEngine.stepCounter : 0,
        activeDeckId: window.NomenclatureEngine ? window.NomenclatureEngine.activeDeckId : 'm1_all'
      };
      try {
        localStorage.setItem(this.KEY, JSON.stringify(payload));
      } catch (e) {}
      StorageAdapter.saveMeta(payload);
    },

    onAnswer(isFirstTryCorrect) {
      const today = new Date().toISOString().slice(0, 10);
      if (this.dailyDate !== today) {
        this.dailyDate = today;
        this.dailyCount = 0;
      }
      this.dailyCount++;
      if (isFirstTryCorrect) {
        this.streak++;
        if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      } else {
        this.streak = 0;
      }
      this.save();
    }
  };

  // ==========================================================================
  // 4.9. ГИБКАЯ НАСТРОЙКА ОПРОСА И СЛОЖНОСТИ (ДЛЯ КАЖДОГО СТУДЕНТА)
  // ==========================================================================
  const QuizConfigEngine = {
    preset: 'balanced', // 'map_only' | 'balanced' | 'full' | 'custom'
    scope: 'extended',  // 'core' (tier 1) | 'extended' (tier <= 2) | 'all' (tier <= 3)
    cardMode: 'smart',  // 'never' | 'smart' | 'always'
    topics: {
      folding: true,
      metrics: true,
      origin: true,
      ocean: true,
      notes: true
    },

    CORE_KEYS: [
      // Горы, вулканы, депрессии и равнины (Модуль 2)
      'альп', 'анды', 'гимала', 'кавказ', 'урал', 'алта', 'тянь-шан', 'памир', 'аппалач',
      'скалист', 'кордильер', 'скандинавск', 'карпат', 'пирене', 'тибет', 'большой водораздел',
      'драконов', 'атлас', 'восточный саян', 'верхоянск', 'джугджур', 'черского',
      'ключевск', 'фудзи', 'везувий', 'этна', 'килиманджаро', 'кракатау', 'котопахи',
      'орисаба', 'попокатепетль', 'гекла', 'килауэа', 'мауна-лоа', 'эйяфьядлайёкюдль', 'элбрус', 'эльбрус',
      'мёртвое море', 'гхор', 'долина смерти', 'турфанск', 'афар', 'ассаль', 'каттара', 'карагие', 'лагуна-дель-карбон',
      'амазонск', 'западно-сибирск', 'прикаспийск', 'индо-гангск', 'месопотамск', 'великая китайск',
      'восточно-европейск', 'среднерусск', 'валдайск', 'бразильск', 'декан', 'среднесибирск', 'гвианск',
      'гоби', 'восточно-африканск', 'тибести', 'колорадо', 'путорана', 'устюрт',
      // Острова, полуострова, пустыни, мысы (Модуль 1)
      'гренланд', 'мадагаскар', 'калимантан', 'новая гвинея', 'суматра', 'великобритан', 'исланд',
      'шри-ланка', 'куба', 'сахалин', 'камчатк', 'аравийск', 'индостан', 'индокитай', 'скандинавск',
      'пиренейск', 'апеннинск', 'балканск', 'лабрадор', 'аляск', 'калифорн', 'флорид', 'юкатан', 'сомали',
      'корейск', 'малакк', 'таймыр', 'чукотск', 'коляск', 'кольск', 'крымск',
      'сахара', 'гоби', 'атакама', 'намиб', 'калахари', 'виктория', 'каракум', 'кызылкум', 'руб-эль-хали',
      'гавайск', 'японск', 'филиппин', 'большой барьерн', 'мальдив',
      // Океан, моря, проливы, заливы, желоба, течения (Модуль 3)
      'тихий океан', 'атлантический океан', 'индийский океан', 'северный ледовитый', 'южный океан',
      'средиземн', 'чёрное море', 'красное море', 'балтийск', 'баренцев', 'белое море', 'охотск', 'берингов',
      'японск', 'карибск', 'северное море', 'норвежск', 'аравийск', 'южно-китайск', 'тасманов', 'уэдделл',
      'гибралтар', 'берингов пролив', 'магелланов', 'дрейка', 'босфор', 'ла-манш', 'малаккск', 'ормуз', 'баб-эль-мандеб',
      'мексиканск', 'персидск', 'бенгальск', 'гудзонов', 'бискайск', 'гвинейск', 'аляска', 'большой австралийск',
      'марианск', 'пуэрто-рико', 'зондск', 'яванск', 'филиппинск', 'тонга', 'кермадек', 'курило-камчатск', 'перуанск', 'атакамск',
      'гольфстрим', 'куросио', 'лабрадорск', 'канарск', 'бенгельск', 'перуанск', 'калифорнийск', 'северо-атлантическ',
      'западных ветров', 'бразильск', 'аляскинск', 'восточно-австралийск', 'антильск',
      // Реки, озёра, водопады (Модуль 4)
      'амазонк', 'нил', 'миссисип', 'янцз', 'хуанхэ', 'волга', 'днепр', 'дунай', 'рейн', 'обь', 'енисей', 'лена',
      'амур', 'конго', 'нигер', 'замбези', 'инду', 'инд ', 'ганг', 'меконг', 'тигр', 'евфрат', 'парана', 'ориноко',
      'муррей', 'маккензи', 'юкон', 'святого лаврентия', 'колорадо', 'дон', 'урал', 'печора',
      'байкал', 'виктория', 'верхнее', 'каспийск', 'аральск', 'танганьика', 'титикака', 'ладожск', 'онежск',
      'балхаш', 'иссык-куль', 'чад', 'ньяса', 'большое медвежье', 'мичиган', 'гурон', 'эйр', 'нарочь',
      'анхель', 'виктория', 'ниагарск', 'игуасу', 'тугела'
    ],

    init() {
      try {
        const raw = localStorage.getItem('geoatlas_quiz_config_v1');
        if (raw) {
          const d = JSON.parse(raw);
          if (['core', 'extended', 'all'].includes(d.scope)) this.scope = d.scope;
          if (['never', 'smart', 'always'].includes(d.cardMode)) this.cardMode = d.cardMode;
          if (d.topics && typeof d.topics === 'object') {
            Object.keys(this.topics).forEach((k) => {
              if (typeof d.topics[k] === 'boolean') this.topics[k] = d.topics[k];
            });
          }
          if (['map_only', 'balanced', 'full', 'custom'].includes(d.preset)) {
            this.preset = d.preset;
          } else {
            this.detectPreset();
          }
        }
      } catch (e) {}
    },

    save() {
      try {
        localStorage.setItem('geoatlas_quiz_config_v1', JSON.stringify({
          preset: this.preset,
          scope: this.scope,
          cardMode: this.cardMode,
          topics: this.topics
        }));
      } catch (e) {}
    },

    setPreset(presetKey) {
      this.preset = presetKey;
      if (presetKey === 'map_only') {
        this.scope = 'extended';
        this.cardMode = 'never';
      } else if (presetKey === 'balanced') {
        this.scope = 'extended';
        this.cardMode = 'smart';
        Object.keys(this.topics).forEach((k) => { this.topics[k] = true; });
      } else if (presetKey === 'full') {
        this.scope = 'all';
        this.cardMode = 'always';
        Object.keys(this.topics).forEach((k) => { this.topics[k] = true; });
      }
      this.save();
      this.syncUI();
    },

    setScope(scopeKey) {
      if (!['core', 'extended', 'all'].includes(scopeKey)) return;
      this.scope = scopeKey;
      this.detectPreset();
      this.save();
      this.syncUI();
    },

    setCardMode(modeKey) {
      if (!['never', 'smart', 'always'].includes(modeKey)) return;
      this.cardMode = modeKey;
      this.detectPreset();
      this.save();
      this.syncUI();
    },

    toggleTopic(topicKey) {
      if (!(topicKey in this.topics)) return;
      this.topics[topicKey] = !this.topics[topicKey];
      this.detectPreset();
      this.save();
      this.syncUI();
    },

    detectPreset() {
      const allTopicsOn = Object.values(this.topics).every(Boolean);
      if (this.scope === 'extended' && this.cardMode === 'never') {
        this.preset = 'map_only';
      } else if (this.scope === 'extended' && this.cardMode === 'smart' && allTopicsOn) {
        this.preset = 'balanced';
      } else if (this.scope === 'all' && this.cardMode === 'always' && allTopicsOn) {
        this.preset = 'full';
      } else {
        this.preset = 'custom';
      }
    },

    getMaxTierNum() {
      if (this.scope === 'core') return 1;
      if (this.scope === 'all') return 3;
      return 2;
    },

    getSummaryLabel() {
      const presetNames = {
        map_only: 'Только карта',
        balanced: 'Основной',
        full: 'Максимум',
        custom: 'Свой режим'
      };
      const scopeNames = { core: 'ключевые', extended: 'расширенный', all: 'все 100%' };
      const enabledCount = Object.values(this.topics).filter(Boolean).length;
      if (this.cardMode === 'never') {
        return `${presetNames[this.preset]} • Охват: ${scopeNames[this.scope]} • Без карточек`;
      }
      return `${presetNames[this.preset]} • Охват: ${scopeNames[this.scope]} • ${enabledCount}/5 параметров`;
    },

    syncUI() {
      document.querySelectorAll('#cfgPresetRow .pp-choice-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-preset') === this.preset);
      });
      document.querySelectorAll('#cfgScopeRow .pp-choice-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-scope') === this.scope);
      });
      document.querySelectorAll('#cfgCardModeRow .pp-choice-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-cardmode') === this.cardMode);
      });
      document.querySelectorAll('#cfgTopicsGrid .pp-choice-btn').forEach((btn) => {
        const key = btn.getAttribute('data-topic');
        const on = Boolean(this.topics[key]);
        btn.classList.toggle('active', on);
        const chk = btn.querySelector('.pp-chk');
        if (chk) chk.style.opacity = on ? '1' : '0.2';
      });

      const cfgLbl = document.getElementById('hubConfigLabel');
      if (cfgLbl) cfgLbl.textContent = this.getSummaryLabel();

      const topicsWrap = document.getElementById('cfgTopicsGrid')?.closest('.pp-setting-section');
      if (topicsWrap) {
        topicsWrap.style.opacity = this.cardMode === 'never' ? '0.42' : '1';
      }
    },

    matchesCoreKey(str) {
      const low = (str || '').toLowerCase();
      return this.CORE_KEYS.some((kw) => low.includes(kw));
    },

    classifyObject(obj) {
      const oceanIds = new Set([
        'm3_sea_pacific_ocean',
        'm3_sea_atlantic_ocean',
        'm3_sea_indian_ocean',
        'm3_sea_arctic_ocean',
        'm3_sea_southern_ocean'
      ]);
      const isOceanEntity = oceanIds.has(obj.id);
      const rawTitle = `${obj.name || ''} ${obj.displayTitle || ''}`.toLowerCase();
      const isCoreMatch = this.matchesCoreKey(rawTitle);

      let tier = 3;
      if (isOceanEntity || isCoreMatch) {
        tier = 1;
      } else if (obj.moduleId === 'module1') {
        if (obj.difficulty === 'Лёгкий') tier = 1;
        else if (obj.difficulty === 'Средний') tier = 2;
        else tier = 3;
      } else {
        let hash = 0;
        const idStr = String(obj.id || obj.name || '');
        for (let i = 0; i < idStr.length; i++) {
          hash = (hash * 31 + idStr.charCodeAt(i)) >>> 0;
        }
        const highPriorityCats = ['volcanoes', 'depressions', 'waterfalls', 'currents', 'trenches'];
        if (obj.category === 'mountains' || highPriorityCats.includes(obj.category)) {
          tier = hash % 3 === 0 ? 3 : 2;
        } else {
          tier = hash % 2 === 0 ? 2 : 3;
        }
      }

      obj.isOceanEntity = isOceanEntity;
      obj.isCoreObject = Boolean(isOceanEntity || isCoreMatch);
      obj.tier = tier;
      return obj;
    },

    isMetricAllowed(label) {
      const lbl = (label || '').toLowerCase();
      if (lbl.includes('складчат') || lbl.includes('эпох')) return this.topics.folding;
      if (
        lbl.includes('высот') || lbl.includes('вершин') || lbl.includes('глубин') ||
        lbl.includes('отметк') || lbl.includes('площад') || lbl.includes('длин') ||
        lbl.includes('ширин') || lbl.includes('перепад') || lbl.includes('протяж')
      ) {
        return this.topics.metrics;
      }
      if (
        lbl.includes('происхож') || lbl.includes('генез') || lbl.includes('тип') ||
        lbl.includes('грунт') || lbl.includes('терм') || lbl.includes('котловин') ||
        lbl.includes('солён') || lbl.includes('пояс') || lbl.includes('статус')
      ) {
        return this.topics.origin;
      }
      if (
        lbl.includes('течен') || lbl.includes('океан') || lbl.includes('бассейн') ||
        lbl.includes('скорост') || lbl.includes('соединя') || lbl.includes('акватор')
      ) {
        return this.topics.ocean;
      }
      return this.topics.notes;
    },

    filterCardData(item) {
      const cardData = (item && item.ankiCard) || {};
      const rawMetrics = Array.isArray(cardData.backMetrics) && cardData.backMetrics.length > 0
        ? cardData.backMetrics
        : [
            { label: 'Категория', value: item.categoryRu },
            { label: 'Регион', value: item.continent || item.worldRegion || 'Мир' }
          ];

      const filteredMetrics = rawMetrics.filter((m) => m && m.value && m.value !== '—' && this.isMetricAllowed(m.label));
      const mainAnswer = cardData.backMainAnswer || item.desc || item.categoryRu;
      const note = this.topics.notes
        ? (cardData.backNote || (item.desc && item.desc !== mainAnswer ? item.desc : ''))
        : '';

      return { mainAnswer, metrics: filteredMetrics.slice(0, 6), note };
    },

    shouldShowCardStep(item) {
      if (!item || !item.ankiCard) return false;
      if (this.cardMode === 'never') return false;

      const hasAnyTopic = Object.values(this.topics).some(Boolean);
      if (!hasAnyTopic) return false;

      if (item.isOceanEntity) return true;

      const filtered = this.filterCardData(item);
      if (filtered.metrics.length === 0 && !this.topics.notes) return false;

      if (this.cardMode === 'always') return true;

      // cardMode === 'smart'
      const specCats = new Set([
        'mountains', 'volcanoes', 'depressions',
        'continental_island', 'volcanic_island', 'coral_island',
        'trenches', 'currents', 'waterfalls', 'lakes'
      ]);
      if (specCats.has(item.category)) return true;
      return Boolean(item.isCoreObject && ['lowlands', 'uplands', 'plateaus', 'rivers', 'seas'].includes(item.category));
    }
  };

  // ==========================================================================
  // 5. ЕДИНЫЙ ДВИЖОК НОМЕНКЛАТУРЫ (ВСЕ 4 РАЗДЕЛА: 1 039 ОБЪЕКТОВ)
  // ==========================================================================
  const NomenclatureEngine = {
    objects: [],
    objectsMap: new Map(),
    legacyUidMap: new Map(),
    decks: [],
    decksMap: new Map(),
    activeDeckId: 'm1_all',
    practiceMode: 'locate', // 'locate' | 'atlas'
    stepCounter: 0,
    srsStates: {},
    lastSeenId: null,
    ACTIVE_POOL_SIZE: 6,

    init(geoData) {
      QuizConfigEngine.init();
      this.compileDecks(geoData);
      this.loadState();
      if (!this.activeDeckId || !this.decksMap.has(this.activeDeckId)) {
        this.activeDeckId = 'm1_all';
      }
      QuizConfigEngine.syncUI();
    },

    classifyWorldRegion(it) {
      const r = (it.region || '').toLowerCase();
      const lat = it.lat || 0;
      const lng = it.lng || 0;

      if (
        r.includes('антаркт') ||
        r.includes('южный океан') ||
        r.includes('северный ледовитый') ||
        r.includes('арктик') ||
        lat >= 69.5 ||
        lat <= -53.5
      ) {
        return 'Арктика и Антарктика';
      }
      if (r.includes('австрал') || (r.includes('океан') && (r.includes('меланез') || r.includes('микронез') || r.includes('полинез') || r.includes('новая зеланд') || r.includes('кораллов')))) {
        return 'Австралия и Океания';
      }
      if (r.includes('океания') || (r.includes('тихий океан') && lat < 25 && (lng > 135 || lng < -105))) {
        return 'Австралия и Океания';
      }
      if (r.includes('южная америка') || r.includes('южная атлантика') || r.includes('бразили') || r.includes('эквадор') || (r.includes('чили') && !r.includes('полинез'))) {
        return 'Южная Америка и Атлантика';
      }
      if (r.includes('северная америка') || r.includes('центральная америка') || r.includes('кариб') || r.includes('канада') || r.includes('аляска') || r.includes('берингов пролив') || r.includes('коста-рика')) {
        return 'Северная и Центральная Америка';
      }
      if (r.includes('африк') || r.includes('сейшел') || r.includes('маврик') || r.includes('юар') || r.includes('танзани') || (r.includes('индийский океан') && lng < 70)) {
        return 'Африка и Индийский океан';
      }
      if (r.includes('европ') || r.includes('ладожск') || r.includes('белое море') || r.includes('баренцев') || r.includes('португал') || r.includes('испан') || r.includes('эгейск') || r.includes('дания')) {
        return 'Европа и моря Европы';
      }
      return 'Зарубежная Азия и Сибирь';
    },

    compileDecks(geoData) {
      this.objects = [];
      this.objectsMap.clear();
      this.legacyUidMap.clear();
      this.decks = [];
      this.decksMap.clear();

      const reg = window.GEO_MODULES_REGISTRY || {};
      const legacyItemsMap = new Map();
      if (geoData && Array.isArray(geoData.all_map_items)) {
        geoData.all_map_items.forEach((li) => {
          if (li.uid) legacyItemsMap.set(li.uid, li);
          if (li.name) legacyItemsMap.set(li.name, li);
        });
      }

      const capeDirMap = {
        'Крайняя точка (Северная)': 'северная',
        'Крайняя точка (Южная)': 'южная',
        'Крайняя точка (Западная)': 'западная',
        'Крайняя точка (Восточная)': 'восточная'
      };

      const moduleKeys = ['module1', 'module2', 'module3', 'module4'];
      moduleKeys.forEach((modKey) => {
        const mod = reg[modKey];
        if (!mod || !Array.isArray(mod.items)) return;

        mod.items.forEach((it) => {
          const legacyItem = legacyItemsMap.get(it.legacyUid) || legacyItemsMap.get(it.name) || null;
          const worldRegion = this.classifyWorldRegion(it);
          const bounds = it.bounds || GeoMath.getExtentForItem(it);
          const isCape = it.submoduleId === 'm1_capes' || it.category === 'extreme_point';

          let dirWord = 'крайняя';
          if (isCape) {
            if (it.categoryRu && capeDirMap[it.categoryRu]) {
              dirWord = capeDirMap[it.categoryRu];
            } else if (it.id) {
              if (it.id.includes('north')) dirWord = 'северная';
              else if (it.id.includes('south')) dirWord = 'южная';
              else if (it.id.includes('west')) dirWord = 'западная';
              else if (it.id.includes('east')) dirWord = 'восточная';
            }
          }
          const dirName = dirWord.charAt(0).toUpperCase() + dirWord.slice(1);

          const rawName = (it.shortName || it.name || '').trim();
          const cleanCapeName = isCape ? rawName.replace(/\s*\([^)]*\)/g, '').trim() : rawName;
          const displayTitle = isCape ? cleanCapeName : (it.shortName || it.name);

          const prompt = isCape
            ? `Покажите на карте: крайняя ${dirWord} точка материка ${it.region}`
            : (it.mapPrompt || `Покажите на карте: ${it.name}`);

          // Обогащение карточки Anki для Модуля 1 из legacyItem (если есть доп. поля)
          let ankiCard = it.ankiCard ? JSON.parse(JSON.stringify(it.ankiCard)) : {
            hasTheoryStep: true,
            frontQuestion: `Укажите географический регион и ключевые характеристики объекта: ${displayTitle}`,
            backMainAnswer: `${displayTitle} (${it.region})`,
            backMetrics: [{ label: 'Регион', value: it.region || worldRegion }],
            backNote: it.locationDesc || ''
          };

          if (isCape) {
            ankiCard.frontQuestion = `Назовите эту крайнюю (${dirWord}) точку материка ${it.region} и укажите её особенности:`;
            ankiCard.backMainAnswer = `${cleanCapeName} • материк ${it.region}`;
          } else if (legacyItem && modKey === 'module1') {
            const extraMetrics = [...(ankiCard.backMetrics || [])];
            if (legacyItem.origin && !extraMetrics.some((m) => m.label === 'Генезис / Происхождение')) {
              extraMetrics.push({ label: 'Генезис / Происхождение', value: legacyItem.origin });
            }
            if (legacyItem.surface_type && !extraMetrics.some((m) => m.label === 'Тип грунта')) {
              extraMetrics.push({ label: 'Тип грунта', value: legacyItem.surface_type });
            }
            if (legacyItem.thermal_desc && !extraMetrics.some((m) => m.label === 'Термический пояс')) {
              extraMetrics.push({ label: 'Термический пояс', value: legacyItem.thermal_desc });
            }
            if (legacyItem.area && !extraMetrics.some((m) => m.label === 'Площадь')) {
              extraMetrics.push({ label: 'Площадь', value: `${legacyItem.area} тыс. км²` });
            }
            ankiCard.backMetrics = extraMetrics;
          }

          const obj = {
            id: it.id,
            uid: it.legacyUid || it.id,
            legacyUid: it.legacyUid || null,
            moduleId: modKey,
            submoduleId: it.submoduleId,
            title: it.name,
            displayTitle,
            name: it.name,
            capeName: cleanCapeName,
            prompt,
            type: isCape ? 'cape' : 'map_item',
            isCape,
            dirWord,
            dirName,
            category: it.category,
            mainCategory: it.mainCategory || it.categoryRu,
            categoryRu: it.categoryRu || it.mainCategory || 'Объект',
            continent: it.region || worldRegion,
            region: it.region || worldRegion,
            worldRegion,
            geometryType: it.geometryType || 'point',
            lat: it.lat,
            lng: it.lng,
            coords: it.coords || null,
            flowStyle: it.flowStyle || null,
            bounds,
            hitRadiusKm: it.hitRadiusKm || 300,
            crossTrackBufferKm: it.crossTrackBufferKm || 135,
            desc: it.locationDesc || (legacyItem && legacyItem.desc) || '',
            origin: (legacyItem && legacyItem.origin) || '',
            surfaceType: (legacyItem && legacyItem.surface_type) || '',
            thermalDesc: (legacyItem && legacyItem.thermal_desc) || '',
            area: (legacyItem && legacyItem.area) || '',
            difficulty: it.difficulty || 'Стандартный',
            ankiCard
          };

          QuizConfigEngine.classifyObject(obj);

          this.objects.push(obj);
          this.objectsMap.set(obj.id, obj);
          if (obj.legacyUid) {
            this.legacyUidMap.set(obj.legacyUid, obj.id);
          }
        });
      });

      const m1Items = this.objects.filter((x) => x.moduleId === 'module1');
      const m2Items = this.objects.filter((x) => x.moduleId === 'module2');
      const m3Items = this.objects.filter((x) => x.moduleId === 'module3');
      const m4Items = this.objects.filter((x) => x.moduleId === 'module4');

      const deckDefs = [
        // ================= РАЗДЕЛ 1 (267 объектов) =================
        { id: 'm1_all', group: 'module1', moduleId: 'module1', title: 'Весь Раздел 1: Материки, острова, пустыни (267)', shortTitle: 'Раздел 1 (Все 267)', icon: '🌍', desc: 'Все мысы, полуострова, острова и пустыни Раздела 1', items: m1Items },
        { id: 'm1_capes', group: 'module1', moduleId: 'module1', title: 'Крайние мысы материков (21)', shortTitle: 'Крайние мысы', icon: '🧭', desc: 'Все 21 крайний мыс 6 континентов Земли', items: m1Items.filter((x) => x.submoduleId === 'm1_capes') },
        { id: 'm1_peninsulas', group: 'module1', moduleId: 'module1', title: 'Полуострова мира (60)', shortTitle: 'Полуострова', icon: '🏖️', desc: 'Все 60 полуостровов планеты', items: m1Items.filter((x) => x.submoduleId === 'm1_peninsulas') },
        { id: 'm1_islands', group: 'module1', moduleId: 'module1', title: 'Все острова и архипелаги (148)', shortTitle: 'Все острова', icon: '🏝️', desc: 'Материковые, вулканические и коралловые острова Земли', items: m1Items.filter((x) => x.submoduleId === 'm1_islands') },
        { id: 'm1_islands_cont', group: 'module1', moduleId: 'module1', title: 'Материковые острова (82)', shortTitle: 'Материковые о-ва', icon: '🏔️', desc: '82 материковых острова и архипелага', items: m1Items.filter((x) => x.category === 'continental_island') },
        { id: 'm1_islands_volc', group: 'module1', moduleId: 'module1', title: 'Вулканические острова (50)', shortTitle: 'Вулканические о-ва', icon: '🌋', desc: '50 островных дуг и вулканических архипелагов', items: m1Items.filter((x) => x.category === 'volcanic_island') },
        { id: 'm1_islands_coral', group: 'module1', moduleId: 'module1', title: 'Коралловые острова и рифы (16)', shortTitle: 'Коралловые о-ва', icon: '🪸', desc: '16 коралловых атоллов и Большой Барьерный риф', items: m1Items.filter((x) => x.category === 'coral_island') },
        { id: 'm1_deserts', group: 'module1', moduleId: 'module1', title: 'Пустыни мира (38)', shortTitle: 'Пустыни мира', icon: '🏜️', desc: '38 пустынь с типами грунтов и термическими поясами', items: m1Items.filter((x) => x.submoduleId === 'm1_deserts') },

        // ================= РАЗДЕЛ 2 (263 объекта) =================
        { id: 'm2_all', group: 'module2', moduleId: 'module2', title: 'Весь Раздел 2: Горы, вулканы, равнины (263)', shortTitle: 'Раздел 2 (Все 263)', icon: '⛰️', desc: 'Все горы 6 складчатостей, вулканы 4 поясов, депрессии и равнины', items: m2Items },
        { id: 'm2_orogeny', group: 'module2', moduleId: 'module2', title: 'Все горы по 6 эпохам складчатости (117)', shortTitle: 'Горы (6 складчатостей)', icon: '🏔️', desc: 'Сводная колода горных систем с высшими точками и высотами', items: m2Items.filter((x) => x.category === 'mountains') },
        { id: 'm2_precambrian', group: 'module2', moduleId: 'module2', title: '1. Докембрийские горы и нагорья (13)', shortTitle: 'Докембрийские горы', icon: '🪨', desc: 'Древние платформы: Восточные и Западные Гаты, Гвианское и др.', items: m2Items.filter((x) => x.submoduleId === 'm2_precambrian') },
        { id: 'm2_baikal', group: 'module2', moduleId: 'module2', title: '2. Байкальская складчатость (7)', shortTitle: 'Байкальская скл.', icon: '🌲', desc: 'Енисейский кряж, Восточный Саян, Прибайкалье, Забайкалье и др.', items: m2Items.filter((x) => x.submoduleId === 'm2_baikal') },
        { id: 'm2_caledonian', group: 'module2', moduleId: 'module2', title: '3. Каледонская складчатость (10)', shortTitle: 'Каледонская скл.', icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', desc: 'Скандинавские, Северо-Шотландское нагорье, Зап. Саян, Кузнецкий Алатау', items: m2Items.filter((x) => x.submoduleId === 'm2_caledonian') },
        { id: 'm2_hercynian', group: 'module2', moduleId: 'module2', title: '4. Герцинская складчатость (32)', shortTitle: 'Герцинская скл.', icon: '⛏️', desc: 'Урал, Аппалачи, Большой Водораздельный хр., Тянь-Шань, Алтай, горы Европы', items: m2Items.filter((x) => x.submoduleId === 'm2_hercynian') },
        { id: 'm2_cimmerian', group: 'module2', moduleId: 'module2', title: '5. Киммерийская (мезозойская) складчатость (19)', shortTitle: 'Киммерийская скл.', icon: '🦖', desc: 'Верхоянский, Черского, Сихотэ-Алинь, Тибет, Скалистые, Б. Бассейн', items: m2Items.filter((x) => x.submoduleId === 'm2_cimmerian') },
        { id: 'm2_alpine', group: 'module2', moduleId: 'module2', title: '6. Альпийская (кайнозойская) складчатость (36)', shortTitle: 'Альпийская скл.', icon: '🗻', desc: 'Альпы, Кавказ, Гималаи, Памир, Анды, Береговые хребты Кордильер, Атлас', items: m2Items.filter((x) => x.submoduleId === 'm2_alpine') },
        { id: 'm2_volcanoes', group: 'module2', moduleId: 'module2', title: 'Вулканы мира по 4 поясам (52)', shortTitle: 'Вулканы (52)', icon: '🌋', desc: 'Тихоокеанское кольцо, Средиземноморский, Атлантический и Вост.-Африканский пояса', items: m2Items.filter((x) => x.submoduleId === 'm2_volcanoes') },
        { id: 'm2_depressions', group: 'module2', moduleId: 'module2', title: '16 депрессий суши ниже ур. моря (16)', shortTitle: '16 депрессий суши', icon: '📉', desc: 'Мёртвое море (-430 м), Ассаль (-157 м), Турфанская (-154 м), Долина Смерти (-86 м)', items: m2Items.filter((x) => x.submoduleId === 'm2_depressions') },
        { id: 'm2_lowlands', group: 'module2', moduleId: 'module2', title: 'Низменности мира (37)', shortTitle: 'Низменности (37)', icon: '🌾', desc: 'Амазонская, Западно-Сибирская, Прикаспийская, Индо-Гангская, Месопотамская и др.', items: m2Items.filter((x) => x.submoduleId === 'm2_lowlands') },
        { id: 'm2_uplands', group: 'module2', moduleId: 'module2', title: 'Возвышенности мира (24)', shortTitle: 'Возвышенности (24)', icon: '🏞️', desc: 'Среднерусская, Валдайская, Приволжская, Лаврентийская, Ставропольская и др.', items: m2Items.filter((x) => x.submoduleId === 'm2_uplands') },
        { id: 'm2_plateaus', group: 'module2', moduleId: 'module2', title: 'Плоскогорья и плато (17)', shortTitle: 'Плоскогорья и плато', icon: '🏜️', desc: 'Среднесибирское, Декан, Бразильское, Восточно-Африканское, Устюрт, Колорадо, Путорана', items: m2Items.filter((x) => x.submoduleId === 'm2_plateaus') },

        // ================= РАЗДЕЛ 3 (256 объектов) =================
        { id: 'm3_all', group: 'module3', moduleId: 'module3', title: 'Весь Раздел 3: Мировой океан (256)', shortTitle: 'Раздел 3 (Все 256)', icon: '🌊', desc: 'Океаны и моря, проливы, заливы, глубоководные желоба и морские течения', items: m3Items },
        { id: 'm3_seas', group: 'module3', moduleId: 'module3', title: 'Океаны и моря мира (62)', shortTitle: 'Океаны и моря (62)', icon: '⚓', desc: '5 океанов и 57 морей по 4 океаническим бассейнам с глубинами', items: m3Items.filter((x) => x.category === 'seas') },
        { id: 'm3_straits', group: 'module3', moduleId: 'module3', title: 'Проливы Мирового океана (49)', shortTitle: 'Проливы (49)', icon: '🚢', desc: 'Проливы с наименьшей шириной, длиной и соединяемыми акваториями', items: m3Items.filter((x) => x.category === 'straits') },
        { id: 'm3_gulfs', group: 'module3', moduleId: 'module3', title: 'Заливы и бухты мира (65)', shortTitle: 'Заливы (65)', icon: '⛵', desc: 'Заливы Тихого, Атлантического, Индийского, СЛО и Каспийского моря', items: m3Items.filter((x) => x.category === 'gulfs') },
        { id: 'm3_trenches', group: 'module3', moduleId: 'module3', title: 'Глубоководные желоба (35)', shortTitle: 'Желоба (35)', icon: '🔱', desc: '35 океанических желобов с полилиниями, макс. глубинами и протяжённостью', items: m3Items.filter((x) => x.category === 'trenches') },
        { id: 'm3_currents', group: 'module3', moduleId: 'module3', title: 'Морские течения со стрелками стока (45)', shortTitle: 'Морские течения (45)', icon: '🌀', desc: 'Тёплые (#f43f5e) и холодные (#38bdf8) течения, генезис и скорость', items: m3Items.filter((x) => x.category === 'currents') },

        // ================= РАЗДЕЛ 4 (253 объекта) =================
        { id: 'm4_all', group: 'module4', moduleId: 'module4', title: 'Весь Раздел 4: Реки, озёра, водопады (253)', shortTitle: 'Раздел 4 (Все 253)', icon: '💧', desc: 'Речные системы со стрежневыми полилиниями, водопады и озёра суши', items: m4Items },
        { id: 'm4_rivers', group: 'module4', moduleId: 'module4', title: 'Все реки и притоки мира (162)', shortTitle: 'Все реки (162)', icon: '🏞️', desc: 'Стрежневые полилинии рек, истоки, устья и главные притоки', items: m4Items.filter((x) => x.category === 'rivers') },
        { id: 'm4_rivers_eurasia', group: 'module4', moduleId: 'module4', title: 'Реки Евразии (102)', shortTitle: 'Реки Евразии', icon: '🌏', desc: 'Реки и притоки Европы, Сибири, Дальнего Востока, Средней и Южной Азии', items: m4Items.filter((x) => x.submoduleId === 'm4_rivers_eurasia') },
        { id: 'm4_rivers_africa', group: 'module4', moduleId: 'module4', title: 'Реки Африки (16)', shortTitle: 'Реки Африки', icon: '🌍', desc: 'Нил, Конго, Нигер, Замбези, Оранжевая, Лимпопо, Шари и их притоки', items: m4Items.filter((x) => x.submoduleId === 'm4_rivers_africa') },
        { id: 'm4_rivers_north_america', group: 'module4', moduleId: 'module4', title: 'Реки Северной Америки (19)', shortTitle: 'Реки Сев. Америки', icon: '🌎', desc: 'Миссисипи, Миссури, Маккензи, Юкон, Колумбия, Колорадо, Св. Лаврентия', items: m4Items.filter((x) => x.submoduleId === 'm4_rivers_north_america') },
        { id: 'm4_rivers_south_america', group: 'module4', moduleId: 'module4', title: 'Реки Южной Америки (21)', shortTitle: 'Реки Юж. Америки', icon: '🦜', desc: 'Амазонка с притоками (Мадейра, Риу-Негру, Тапажос), Парана, Ориноко', items: m4Items.filter((x) => x.submoduleId === 'm4_rivers_south_america') },
        { id: 'm4_rivers_australia', group: 'module4', moduleId: 'module4', title: 'Реки Австралии (4)', shortTitle: 'Реки Австралии', icon: '🦘', desc: 'Муррей, Дарлинг, Куперс-Крик (Барку), Флиндерс', items: m4Items.filter((x) => x.submoduleId === 'm4_rivers_australia') },
        { id: 'm4_waterfalls', group: 'module4', moduleId: 'module4', title: 'Водопады мира (20)', shortTitle: 'Водопады (20)', icon: '🌊', desc: 'Анхель (1054 м), Тугела (933 м), Виктория, Игуасу, Ниагарский, Стэнли и др.', items: m4Items.filter((x) => x.category === 'waterfalls') },
        { id: 'm4_lakes', group: 'module4', moduleId: 'module4', title: 'Озёра мира по материкам (71)', shortTitle: 'Озёра мира (71)', icon: '🪩', desc: '71 озеро с генетическим типом котловины, глубиной и солёностью', items: m4Items.filter((x) => x.category === 'lakes') },

        // ================= ВСЕ РАЗДЕЛЫ (1 039 объектов) =================
        { id: 'semester_all', group: 'all', moduleId: 'all', title: 'Все 4 раздела (1 039 объектов)', shortTitle: 'Все разделы (1039)', icon: '🌍', desc: 'Объединённый набор по всем 4 разделам номенклатуры', items: this.objects },
        { id: 'all', group: 'all', moduleId: 'all', title: 'Все 4 раздела (1 039 объектов)', shortTitle: 'Все разделы (1039)', icon: '🌍', desc: 'Полная база номенклатуры: все 1 039 объектов', items: this.objects }
      ];

      deckDefs.forEach((d) => {
        const deck = {
          id: d.id,
          group: d.group,
          moduleId: d.moduleId,
          title: d.title,
          shortTitle: d.shortTitle,
          icon: d.icon,
          desc: d.desc,
          objectIds: d.items.map((it) => it.id)
        };
        this.decks.push(deck);
        this.decksMap.set(d.id, deck);
      });
    },

    resolveItemId(idOrLegacyUid) {
      if (this.objectsMap.has(idOrLegacyUid)) return idOrLegacyUid;
      if (this.legacyUidMap.has(idOrLegacyUid)) return this.legacyUidMap.get(idOrLegacyUid);
      return idOrLegacyUid;
    },

    getState(rawId) {
      const id = this.resolveItemId(rawId);
      if (!this.srsStates[id]) {
        this.srsStates[id] = {
          status: 'new',
          reps: 0,
          lapses: 0,
          dueStep: 0,
          lastReviewed: 0,
          intervalHours: 0,
          dueTimestamp: 0
        };
      }
      return this.srsStates[id];
    },

    cloneState(rawId) {
      return JSON.parse(JSON.stringify(this.getState(rawId)));
    },

    restoreState(rawId, snapshot) {
      if (!snapshot) return;
      const id = this.resolveItemId(rawId);
      this.srsStates[id] = JSON.parse(JSON.stringify(snapshot));
      this.saveState();
    },

    /**
     * Запись оценки по 4 кнопкам Anki SM-2:
     *   grade 1 = «Не выучено» (Снова • 2 шага)
     *   grade 2 = «Трудно» (5 шагов)
     *   grade 3 = «Хорошо» (15 шагов)
     *   grade 4 = «Выучено» (Освоено ✓ • 80 шагов)
     */
    recordSm2Grade(rawId, grade) {
      const id = this.resolveItemId(rawId);
      const s = this.getState(id);
      this.stepCounter++;
      s.lastReviewed = Date.now();
      const prevStatus = s.status;

      if (grade === 1) {
        s.status = 'learning';
        s.reps = 0;
        s.lapses = (s.lapses || 0) + 1;
        s.intervalHours = 0.1;
        s.dueStep = this.stepCounter + 2;
      } else if (grade === 2) {
        s.status = 'learning';
        s.reps = Math.max(1, s.reps || 1);
        s.intervalHours = 2;
        s.dueStep = this.stepCounter + 5;
      } else if (grade === 3) {
        s.reps = (s.reps || 0) + 1;
        if (s.reps >= 3) {
          s.status = 'mastered';
          s.intervalHours = 72;
          s.dueStep = this.stepCounter + 50;
        } else {
          s.status = 'review';
          s.intervalHours = 18;
          s.dueStep = this.stepCounter + 15;
        }
      } else {
        // grade === 4 («Выучено»)
        s.status = 'mastered';
        s.reps = Math.max(4, (s.reps || 0) + 1);
        s.intervalHours = 120;
        s.dueStep = this.stepCounter + 80;
      }

      s.dueTimestamp = s.lastReviewed + Math.round(s.intervalHours * 3600 * 1000);
      this.saveState();

      return {
        status: s.status,
        prevStatus,
        reps: s.reps,
        dueStep: s.dueStep,
        stepGap: Math.max(1, s.dueStep - this.stepCounter)
      };
    },

    recordSuccess(rawId) {
      return this.recordSm2Grade(rawId, 3);
    },

    recordError(rawId) {
      return this.recordSm2Grade(rawId, 1);
    },

    recordMastered(rawId) {
      return this.recordSm2Grade(rawId, 4).status;
    },

    getActiveDeck() {
      return this.decksMap.get(this.activeDeckId) || this.decks[0];
    },

    getFilteredDeckItems(deckId = this.activeDeckId, includeAllTiers = false) {
      const deck = this.decksMap.get(deckId) || this.decks[0];
      const allItems = deck ? deck.objectIds.map((id) => this.objectsMap.get(id)).filter(Boolean) : [];
      if (includeAllTiers || !allItems.length) return allItems;
      const maxTier = QuizConfigEngine.getMaxTierNum();
      if (maxTier >= 3) return allItems;
      const filtered = allItems.filter((it) => (it.tier || 3) <= maxTier);
      return filtered.length > 0 ? filtered : allItems;
    },

    getNextObject(deckId = this.activeDeckId, maintenanceMode = false) {
      const items = this.getFilteredDeckItems(deckId, false);
      if (items.length === 0) return null;

      const unmastered = items.filter((it) => this.getState(it.id).status !== 'mastered');
      if (unmastered.length === 0 && !maintenanceMode) {
        return null;
      }

      const now = Date.now();
      const isDue = (it) => {
        const s = this.getState(it.id);
        return (s.dueStep > 0 && s.dueStep <= this.stepCounter) || (s.dueTimestamp > 0 && s.dueTimestamp <= now);
      };

      const pickNonLast = (arr, sortFn) => {
        const nonLast = arr.filter((it) => it.id !== this.lastSeenId);
        const pool = nonLast.length > 0 ? nonLast : arr;
        if (sortFn) pool.sort(sortFn);
        const chosen = pool[0];
        this.lastSeenId = chosen.id;
        return chosen;
      };

      const dueLearning = items.filter((it) => this.getState(it.id).status === 'learning' && isDue(it));
      if (dueLearning.length > 0) {
        return pickNonLast(dueLearning, (a, b) => this.getState(a.id).dueStep - this.getState(b.id).dueStep);
      }

      const dueReview = items.filter((it) => this.getState(it.id).status === 'review' && isDue(it));
      if (dueReview.length > 0) {
        return pickNonLast(dueReview, (a, b) => this.getState(a.id).dueStep - this.getState(b.id).dueStep);
      }

      if (this.stepCounter > 0 && this.stepCounter % 10 === 0) {
        const dueMast = items.filter((it) => this.getState(it.id).status === 'mastered' && isDue(it));
        if (dueMast.length > 0) {
          return pickNonLast(dueMast, (a, b) => (this.getState(a.id).lastReviewed || 0) - (this.getState(b.id).lastReviewed || 0));
        }
      }

      const activeInFlight = items.filter((it) => {
        const s = this.getState(it.id);
        return s.status === 'learning' || (s.status === 'review' && s.dueStep <= this.stepCounter + 3);
      });
      const newItems = items.filter((it) => this.getState(it.id).status === 'new');

      if (activeInFlight.length < this.ACTIVE_POOL_SIZE && newItems.length > 0) {
        const chosen = newItems[0];
        this.lastSeenId = chosen.id;
        return chosen;
      }

      const allInFlight = items.filter((it) => {
        const st = this.getState(it.id).status;
        return st === 'learning' || st === 'review';
      });
      if (allInFlight.length > 0) {
        return pickNonLast(allInFlight, (a, b) => this.getState(a.id).dueStep - this.getState(b.id).dueStep);
      }

      if (newItems.length > 0) {
        const chosen = newItems[0];
        this.lastSeenId = chosen.id;
        return chosen;
      }

      const masteredAll = items.filter((it) => this.getState(it.id).status === 'mastered');
      if (masteredAll.length > 0) {
        return pickNonLast(masteredAll, (a, b) => (this.getState(a.id).lastReviewed || 0) - (this.getState(b.id).lastReviewed || 0));
      }

      return null;
    },

    getDeckStats(deckId = this.activeDeckId, includeAllTiers = false) {
      const items = this.getFilteredDeckItems(deckId, includeAllTiers);
      let newCount = 0, learnCount = 0, reviewCount = 0, masteredCount = 0;

      items.forEach((it) => {
        const st = this.getState(it.id).status;
        if (st === 'new') newCount++;
        else if (st === 'learning') learnCount++;
        else if (st === 'review') reviewCount++;
        else if (st === 'mastered') masteredCount++;
      });

      const total = items.length;
      return {
        newCount,
        learnCount,
        reviewCount,
        masteredCount,
        total,
        masteredPct: total > 0 ? Math.round((masteredCount / total) * 100) : 0
      };
    },

    getTotalStats() {
      return this.getDeckStats('semester_all');
    },

    resetDeck(deckId = this.activeDeckId) {
      const deck = this.decksMap.get(deckId);
      if (!deck) return;
      deck.objectIds.forEach((id) => {
        delete this.srsStates[id];
      });
      this.saveState();
    },

    saveState() {
      try {
        localStorage.setItem('geoatlas_nomen_states', JSON.stringify(this.srsStates));
        localStorage.setItem('geoatlas_active_deck', this.activeDeckId);
        localStorage.setItem('geoatlas_practice_mode', this.practiceMode);
        localStorage.setItem('geoatlas_nomen_step', String(this.stepCounter));
      } catch (e) {}
      StorageAdapter.saveShardedStates(this.srsStates);
    },

    loadState() {
      try {
        // 1. Загрузка из шардированных ключей geo_v9_m1..4
        const sharded = StorageAdapter.loadLocalShardedStates();
        this.srsStates = { ...sharded };

        // 2. Миграция из старого ключа geoatlas_nomen_states (с маппингом legacyUid -> id)
        const legacyRaw = localStorage.getItem('geoatlas_nomen_states');
        if (legacyRaw) {
          const parsed = JSON.parse(legacyRaw) || {};
          for (const [oldId, st] of Object.entries(parsed)) {
            const resolvedId = this.resolveItemId(oldId);
            if (!this.srsStates[resolvedId] && st && st.status && st.status !== 'new') {
              this.srsStates[resolvedId] = st;
            }
          }
        }

        const pm = localStorage.getItem('geoatlas_practice_mode');
        if (pm === 'atlas' || pm === 'locate') {
          this.practiceMode = pm;
        } else {
          this.practiceMode = 'locate';
        }

        const d = localStorage.getItem('geoatlas_active_deck');
        if (d && this.decksMap.has(d)) this.activeDeckId = d;

        const s = localStorage.getItem('geoatlas_nomen_step');
        if (s) this.stepCounter = parseInt(s, 10) || 0;
      } catch (e) {}
    }
  };

  // ==========================================================================
  // 6. ДВИЖОК РАЗДЕЛА 1: ХАРАКТЕРИСТИКИ МАТЕРИКОВ, ЗЕМЛИ, ОКЕАНИИ И ПУСТЫНЬ
  // ==========================================================================
  const CONTINENT_DISTRACTORS = {
    area: {
      eurasia: {
        correct: '53,4 млн км² (Европа 10,00 млн км², Азия 43,4 млн км²)',
        distractors: ['30,3 млн км² (без островов 29,2 млн км²)', '24,3 млн км² (без островов 20,36 млн км²)', '18,3 млн км² (без островов 18,13 млн км²)']
      },
      africa: {
        correct: '30,3 млн км² (без островов 29,2 млн км²)',
        distractors: ['53,4 млн км² (Европа 10,00 млн км², Азия 43,4 млн км²)', '24,3 млн км² (без островов 20,36 млн км²)', '18,3 млн км² (без островов 18,13 млн км²)']
      },
      north_america: {
        correct: '24,3 млн км² (без островов 20,36 млн км²)',
        distractors: ['18,3 млн км² (без островов 18,13 млн км²)', '30,3 млн км² (без островов 29,2 млн км²)', '53,4 млн км² (Европа 10,00 млн км², Азия 43,4 млн км²)']
      },
      south_america: {
        correct: '18,3 млн км² (без островов 18,13 млн км²)',
        distractors: ['24,3 млн км² (без островов 20,36 млн км²)', '30,3 млн км² (без островов 29,2 млн км²)', '7,6 млн км² (с Океанией 9,0 млн км²)']
      },
      australia: {
        correct: '7,6 млн км² (с Океанией 9,0 млн км²)',
        distractors: ['14,0 млн км²', '18,3 млн км² (без островов 18,13 млн км²)', '24,3 млн км² (без островов 20,36 млн км²)']
      },
      antarctica: {
        correct: '14,0 млн км²',
        distractors: ['7,6 млн км² (с Океанией 9,0 млн км²)', '18,3 млн км² (без островов 18,13 млн км²)', '30,3 млн км² (без островов 29,2 млн км²)']
      }
    },
    shubaev: {
      eurasia: {
        correct: '840 м (по Л.П. Шубаеву: Европа 300 (320) м, Азия 950 м)',
        distractors: ['750 м (по Л.П. Шубаеву)', '920 м (по Л.П. Шубаеву)', '700 (720) м (по Л.П. Шубаеву)']
      },
      africa: {
        correct: '750 м (по Л.П. Шубаеву)',
        distractors: ['840 м (по Л.П. Шубаеву)', '700 (720) м (по Л.П. Шубаеву)', '580 (590) м (по Л.П. Шубаеву)']
      },
      north_america: {
        correct: '700 (720) м (по Л.П. Шубаеву)',
        distractors: ['750 м (по Л.П. Шубаеву)', '840 м (по Л.П. Шубаеву)', '580 (590) м (по Л.П. Шубаеву)']
      },
      south_america: {
        correct: '580 (590) м (по Л.П. Шубаеву)',
        distractors: ['700 (720) м (по Л.П. Шубаеву)', '750 м (по Л.П. Шубаеву)', '350 (340) м (по Л.П. Шубаеву)']
      },
      australia: {
        correct: '350 (340) м (по Л.П. Шубаеву)',
        distractors: ['210 м (по Л.П. Шубаеву)', '410 м (по Л.П. Шубаеву)', '580 (590) м (по Л.П. Шубаеву)']
      },
      antarctica: {
        correct: '2040* м / 410 м без ледникового покрова (*Рябчиков А.М.)',
        distractors: ['1820 м / 350 м без льда', '2350 м / 580 м без льда', '1560 м / 290 м без льда']
      }
    },
    peakNames: [
      'г. Джомолунгма (Эверест)',
      'вулкан Килиманджаро',
      'г. Денали (до 2015 г. Мак-Кинли)',
      'г. Аконкагуа',
      'г. Косцюшко',
      'массив Винсон'
    ],
    peakHeights: [8848, 6960, 6194, 5895, 5140, 2228],
    deprNames: [
      'впадина Гхор (уровень Мёртвого моря)',
      'уровень озера Асаль',
      'Долина Смерти (впадина Бэдуотер)',
      'Лагуна-дель-Карбон (впадина Сан-Хулиан)',
      'уровень озера Эйр-Норт',
      'впадина подлёдного рельефа Бентли'
    ],
    deprHeights: [-430, -153, -105, -86, -16, -2555],
    allCapesPool: [
      'мыс Челюскин', 'мыс Пиай', 'мыс Рока', 'мыс Дежнёва',
      'мыс Бен-Секка (Бланко / Рас-Энгела)', 'мыс Игольный (Агульяс)', 'мыс Альмади', 'мыс Рас-Хафун',
      'мыс Мёрчисон', 'мыс Марьято', 'мыс Принца Уэльского', 'мыс Сент-Чарльз',
      'мыс Гальинас', 'мыс Фроуард', 'мыс Париньяс', 'мыс Кабу-Бранку',
      'мыс Йорк', 'мыс Юго-Восточный (Саут-Ист-Кейп)', 'мыс Стип-Пойнт', 'мыс Байрон',
      'мыс Сифре (Prime Head)'
    ]
  };

  const ContinentExamEngine = {
    continents: [],
    items: [],
    itemsMap: new Map(),
    continentItemsMap: new Map(),
    activeDeckId: 'eurasia',
    states: {},
    stepCounter: 0,
    lastSeenId: null,
    ACTIVE_POOL_SIZE: 4,
    masteredContinents: new Set(),
    STORAGE_KEY: 'geoatlas_cont_anki_states',

    decks: [
      { id: 'eurasia', title: 'Евразия', icon: '🌍', desc: 'Площадь (Европа + Азия), 4 мыса, Эверест, вп. Гхор, Шубаев' },
      { id: 'africa', title: 'Африка', icon: '🌍', desc: 'Площадь, 4 мыса, Килиманджаро, оз. Асаль, Шубаев' },
      { id: 'north_america', title: 'Северная Америка', icon: '🌍', desc: 'Площадь, 4 мыса, Денали, Долина Смерти, Шубаев' },
      { id: 'south_america', title: 'Южная Америка', icon: '🌍', desc: 'Площадь, 4 мыса, Аконкагуа, Лагуна-дель-Карбон, Шубаев' },
      { id: 'australia', title: 'Австралия', icon: '🌍', desc: 'Площадь (с Океанией), 4 мыса, Косцюшко, Эйр-Норт, Шубаев' },
      { id: 'antarctica', title: 'Антарктида', icon: '🧊', desc: 'Площадь, мыс Сифре, массив Винсон, вп. Бентли, Рябчиков' },
      { id: 'earth_oceania', title: 'Земля, Океания и Типы пустынь', icon: '🌐', desc: 'Площадь Земли и суши, Меланезия/Микронезия/Полинезия, Бермуды, 6 типов пустынь' },
      { id: 'all', title: 'Комплексный зачёт (Все 55 вопросов)', icon: '🎓', desc: 'Полный экзамен по всем 6 материкам, метрикам Земли, Океании и пустыням' }
    ],

    init(geoData) {
      this.continents = geoData.continents || [];
      this.buildItems(geoData);
      this.loadState();
    },

    buildItems(geoData) {
      this.items = [];
      this.itemsMap.clear();
      this.continentItemsMap.clear();

      const dirNames = { north: 'Северная', south: 'Южная', west: 'Западная', east: 'Восточная' };

      this.continents.forEach((cont) => {
        const contItems = [];

        // 1. Площадь материка
        const areaDist = (CONTINENT_DISTRACTORS.area[cont.id] && CONTINENT_DISTRACTORS.area[cont.id].distractors) || [];
        const areaItem = {
          id: `${cont.id}_area`,
          type: 'continent_area',
          continentId: cont.id,
          continentName: cont.name,
          title: `Площадь материка: ${cont.name}`,
          prompt: `Какова общая площадь материка ${cont.name} (и соотношение частей света / островов)?`,
          correctAnswer: cont.area_total,
          details: cont.area_detail || cont.subregions || '',
          distractors: areaDist,
          categoryRu: 'Общая площадь',
          desc: `Общая площадь: ${cont.area_total}.`
        };
        this.items.push(areaItem);
        this.itemsMap.set(areaItem.id, areaItem);
        contItems.push(areaItem);

        // 2. Крайние точки
        const capes = cont.extreme_points || {};
        ['north', 'south', 'west', 'east'].forEach((dir) => {
          const cape = capes[dir];
          if (!cape) return;
          const dName = dirNames[dir] || dir;
          const capeItem = {
            id: `${cont.id}_cape_${dir}`,
            type: 'continent_cape',
            isCape: true,
            dir,
            dirName: dName,
            dirWord: dName.toLowerCase(),
            continentId: cont.id,
            continentName: cont.name,
            continent: cont.name,
            title: `${dName} крайняя точка (${cont.name}): ${cape.name}`,
            displayTitle: cape.name,
            name: cape.name,
            capeName: cape.name,
            lat: cape.lat,
            lng: cape.lng,
            hitRadiusKm: 340,
            desc: `Крайняя ${dName.toLowerCase()} точка материка ${cont.name}: ${cape.name} (${cape.desc}).`,
            coordsDesc: cape.desc,
            prompt: `Покажите на карте: крайняя ${dName.toLowerCase()} точка материка ${cont.name}`,
            categoryRu: `Крайняя точка (${dName.toLowerCase()})`,
            mainCategory: 'Мысы'
          };
          this.items.push(capeItem);
          this.itemsMap.set(capeItem.id, capeItem);
          contItems.push(capeItem);
        });

        // 3. Высшая точка (Карта -> Название -> Высота в м)
        if (cont.max_height) {
          const numH = parseInt(cont.max_height.height.replace(/[^\d]/g, ''), 10);
          const peakItem = {
            id: `${cont.id}_peak`,
            type: 'continent_peak',
            continentId: cont.id,
            continentName: cont.name,
            continent: cont.name,
            title: `Высшая точка (${cont.name}): ${cont.max_height.point}`,
            displayTitle: `${cont.max_height.point} (${cont.max_height.height})`,
            name: cont.max_height.point,
            pointName: cont.max_height.point,
            lat: cont.max_height.lat,
            lng: cont.max_height.lng,
            heightStr: cont.max_height.height,
            numericHeight: numH,
            hitRadiusKm: 360,
            desc: `Высочайшая вершина материка ${cont.name}: ${cont.max_height.point} — ${cont.max_height.height}.`,
            prompt: `Покажите на карте высочайшую вершину материка ${cont.name}`,
            categoryRu: 'Высшая точка материка'
          };
          this.items.push(peakItem);
          this.itemsMap.set(peakItem.id, peakItem);
          contItems.push(peakItem);
        }

        // 4. Низшая точка / впадина (Карта -> Название -> Глубина в м)
        if (cont.min_height) {
          const numD = parseInt(cont.min_height.height.replace(/[^\d-]/g, ''), 10);
          const deprItem = {
            id: `${cont.id}_depr`,
            type: 'continent_depr',
            continentId: cont.id,
            continentName: cont.name,
            continent: cont.name,
            title: `Низшая точка (${cont.name}): ${cont.min_height.point}`,
            displayTitle: `${cont.min_height.point} (${cont.min_height.height})`,
            name: cont.min_height.point,
            pointName: cont.min_height.point,
            lat: cont.min_height.lat,
            lng: cont.min_height.lng,
            heightStr: cont.min_height.height,
            numericDepth: numD,
            hitRadiusKm: 360,
            desc: `Глубочайшая впадина суши (${cont.name}): ${cont.min_height.point} — ${cont.min_height.height}.`,
            prompt: `Покажите на карте глубочайшую впадину материка ${cont.name}`,
            categoryRu: 'Низшая точка / впадина'
          };
          this.items.push(deprItem);
          this.itemsMap.set(deprItem.id, deprItem);
          contItems.push(deprItem);
        }

        // 5. Средняя высота по Шубаеву
        const shubDist = (CONTINENT_DISTRACTORS.shubaev[cont.id] && CONTINENT_DISTRACTORS.shubaev[cont.id].distractors) || [];
        const shubaevItem = {
          id: `${cont.id}_shubaev`,
          type: 'continent_shubaev',
          continentId: cont.id,
          continentName: cont.name,
          title: `Средняя высота (${cont.name})`,
          prompt: `Какова средняя высота материка ${cont.name} над уровнем моря по Л.П. Шубаеву?`,
          correctAnswer: cont.mean_height,
          distractors: shubDist,
          categoryRu: 'Средняя высота (Шубаев)',
          desc: `Средняя высота материка ${cont.name}: ${cont.mean_height}.`
        };
        this.items.push(shubaevItem);
        this.itemsMap.set(shubaevItem.id, shubaevItem);
        contItems.push(shubaevItem);

        this.continentItemsMap.set(cont.id, contItems);
      });

      // 7-я колода: Земля в целом, Океания, Бермудский треугольник и Глоссарий типов пустынь (10 вопросов из data.js!)
      const earthItems = [
        {
          id: 'earth_total_area',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Планета Земля',
          title: 'Общая площадь поверхности Земли',
          categoryRu: 'Метрики Земли',
          prompt: 'Какова общая площадь поверхности земного шара?',
          correctAnswer: '510,2 млн км²',
          distractors: ['361,1 млн км²', '149,1 млн км²', '540,8 млн км²'],
          details: 'Общая поверхность Земли — 510,2 млн км², из которых Мировой океан занимает ~361,1 млн км² (70,8%), а суша — 149,1 млн км² (29,2%).'
        },
        {
          id: 'earth_land_area',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Планета Земля',
          title: 'Площадь суши Земли и доля в %',
          categoryRu: 'Метрики Земли',
          prompt: 'Какова общая площадь суши Земли и её доля от поверхности планеты?',
          correctAnswer: '149,1 млн км² (29,2% поверхности Земли)',
          distractors: ['135,0 млн км² (26,5% поверхности Земли)', '178,4 млн км² (35,0% поверхности Земли)', '53,4 млн км² (19,5% поверхности Земли)'],
          details: 'Суша со всеми островами составляет 149,1 млн км² (29,2% площади поверхности Земли).'
        },
        {
          id: 'oceania_melanesia',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Океания',
          title: 'Меланезия: состав и этимология',
          categoryRu: 'Области Океании',
          prompt: 'Какая область Океании переводится как «Черноостровье» и включает Новую Гвинею, арх. Бисмарка, Соломоновы о-ва, Новые Гебриды, Новую Каледонию и Фиджи?',
          correctAnswer: 'Меланезия (юго-западная Океания к югу от экватора)',
          distractors: [
            'Микронезия («Мелкоостровье» к северу от экватора)',
            'Полинезия («Многоостровье» в центральной части Тихого океана)',
            'Малайский архипелаг (Большие и Малые Зондские о-ва)'
          ],
          details: 'Меланезия (от греч. mélas — «чёрный» и nēsos — «остров»): Новая Гвинея, арх. Бисмарка, Соломоновы о-ва, Новые Гебриды (Вануату), Новая Каледония, Фиджи.'
        },
        {
          id: 'oceania_micronesia',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Океания',
          title: 'Микронезия: состав и этимология',
          categoryRu: 'Области Океании',
          prompt: 'Какие архипелаги образуют Микронезию («Мелкоостровье» в западной части Тихого океана к северу от экватора)?',
          correctAnswer: 'Марианские, Каролинские, Маршалловы о-ва, о-ва Гилберта, Науру, Банаба',
          distractors: [
            'Гавайские, Тонга, Самоа, Туамоту, о-ва Общества, о. Пасхи',
            'Новая Гвинея, Соломоновы о-ва, Новая Каледония, Фиджи',
            'Алеутские, Курильские, Рюкю и Филиппинские острова'
          ],
          details: 'Микронезия (от греч. mikros — «малый» и nēsos — «остров») насчитывает около 1500 мелких вулканических и коралловых островов главным образом к северу от экватора.'
        },
        {
          id: 'oceania_polynesia',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Океания',
          title: 'Полинезия: полинезийский треугольник',
          categoryRu: 'Области Океании',
          prompt: 'Какие три крайние вершины ограничивают гигантский треугольник Полинезии («Многоостровья»)?',
          correctAnswer: 'Гавайские острова — Новая Зеландия — остров Пасхи (Рапануи)',
          distractors: [
            'Марианские острова — Тасмания — Галапагосские острова',
            'Новая Гвинея — Гавайские острова — Фиджи',
            'Маршалловы острова — Новая Каледония — Хуан-Фернандес'
          ],
          details: 'Включает о-ва Тонга, Гавайские, Феникс, Токелау, Кука, Самоа, Лайн, Тубуаи, Маркизские, Общества (Таити), Туамоту, Пасхи и Новую Зеландию.'
        },
        {
          id: 'bermuda_triangle_quiz',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Атлантический океан',
          title: 'Вершины Бермудского треугольника',
          categoryRu: 'Спецобъекты карты',
          prompt: 'Какие три географические точки образуют вершины Бермудского треугольника в Саргассовом море?',
          correctAnswer: 'Бермудские острова — южная оконечность п-ова Флорида — о. Пуэрто-Рико',
          distractors: [
            'Багамские острова — о. Куба — п-ов Юкатан',
            'Бермудские острова — мыс Гаттерас — о. Ямайка',
            'Азорские острова — Бермудские острова — Малые Антильские о-ва'
          ],
          details: 'Район в западной части Саргассова моря (Атлантический океан): Бермудские о-ва — юг Флориды (Майами) — о. Пуэрто-Рико.',
          showBermudaOnMap: true
        },
        {
          id: 'desert_term_hamada',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Типы пустынь',
          title: 'Гамада (хамада) — тип пустыни',
          categoryRu: 'Глоссарий пустынь',
          prompt: 'Как в физической географии называется каменистая пустыня с обнажёнными скальными породами и щебнем?',
          correctAnswer: 'Гамада (хамада)',
          distractors: ['Эрг (кум / нефуд)', 'Такыр', 'Шор (сор / кевир)'],
          details: 'Гамада (хамада) — каменистая пустыня с коренными скальными породами и каменистыми россыпями без растительности.'
        },
        {
          id: 'desert_term_serir_reg',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Типы пустынь',
          title: 'Серир и Рег — галечниковые пустыни',
          categoryRu: 'Глоссарий пустынь',
          prompt: 'Чем отличаются типы пустынь «серир» и «рег»?',
          correctAnswer: 'Серир — глинистая с галечниково-щебнистым покровом; Рег — песчано-гравийная после выдувания ветром',
          distractors: [
            'Серир — барханная песчаная; Рег — солончаковая с коркой соли',
            'Серир — ледяная полярная; Рег — глинистая растрескавшаяся котловина',
            'Оба термина обозначают исключительно подвижные песчаные дюны'
          ],
          details: 'В серирах (Ливия, Египет) поверхность глинистая с плотным слоем гальки; рег формируется дефляцией (выдуванием песка), оставляющей гравийный панцирь.'
        },
        {
          id: 'desert_term_erg_kum_nefud',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Типы пустынь',
          title: 'Эрги, кумы и нефуды',
          categoryRu: 'Глоссарий пустынь',
          prompt: 'Соотнесите региональные названия песчаных пустынь: «эрги», «кумы» и «нефуды»:',
          correctAnswer: 'Кумы — Средняя Азия, Эрги — Северная Африка (Сахара), Нефуды — Аравийский п-ов',
          distractors: [
            'Кумы — Аравия, Эрги — Австралия, Нефуды — Средняя Азия',
            'Кумы — Иранское нагорье, Эрги — Южная Америка, Нефуды — Сахара',
            'Все три термина применяются только в пустынях Центральной Азии'
          ],
          details: 'Примеры: Каракумы и Кызылкум (Средняя Азия); Большой Восточный и Западный Эрг (Сахара); Большой Нефуд и Малый Нефуд / Дехна (Аравия).'
        },
        {
          id: 'desert_term_shor_takyr',
          type: 'theory_quiz',
          continentId: 'earth_oceania',
          continentName: 'Типы пустынь',
          title: 'Шоры (кевиры) и такыры',
          categoryRu: 'Глоссарий пустынь',
          prompt: 'Что представляют собой «такыры» и «шоры (кевиры)» в аридных областях?',
          correctAnswer: 'Такыры — гладкие глинистые днища, трескающиеся на многоугольники; Шоры (кевиры) — глинистые солончаковые пустыни с соляной коркой',
          distractors: [
            'Такыры — каменистые плато; Шоры — высокие песчаные гряды',
            'Такыры — оазисы в долинах рек; Шоры — сухие русла временных водотоков (вади)',
            'Такыры — галечниковые панцири; Шоры — коралловые отмели'
          ],
          details: 'Шоры и кевиры (например, Деште-Кевир в Иране) заняты солёными болотами и коркой соли; такыры — плоские глинистые паркеты в замкнутых понижениях.'
        }
      ];

      earthItems.forEach((ei) => {
        this.items.push(ei);
        this.itemsMap.set(ei.id, ei);
      });
      this.continentItemsMap.set('earth_oceania', earthItems);
    },

    getState(itemId) {
      if (!this.states[itemId]) {
        this.states[itemId] = {
          id: itemId,
          reps: 0,
          lapses: 0,
          state: 'new',
          dueStep: 0,
          lastReviewed: 0,
          intervalHours: 0,
          dueTimestamp: 0
        };
      }
      return this.states[itemId];
    },

    cloneState(itemId) {
      return JSON.parse(JSON.stringify(this.getState(itemId)));
    },

    restoreState(itemId, snapshot) {
      if (!snapshot) return;
      this.states[itemId] = JSON.parse(JSON.stringify(snapshot));
      this.recomputeMasteredContinents();
      this.saveState();
    },

    recomputeMasteredContinents() {
      this.masteredContinents.clear();
      this.continents.forEach((c) => {
        const cItems = this.continentItemsMap.get(c.id) || [];
        if (cItems.length > 0 && cItems.every((ci) => this.getState(ci.id).state === 'mastered')) {
          this.masteredContinents.add(c.id);
        }
      });
    },

    loadState() {
      try {
        const rawLegacy = localStorage.getItem('geoatlas_cont_mastered');
        if (rawLegacy) this.masteredContinents = new Set(JSON.parse(rawLegacy));
      } catch (e) {}

      try {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          this.states = parsed.states || {};
          this.stepCounter = parsed.stepCounter || 0;
        }
      } catch (e) {
        this.states = {};
      }

      this.recomputeMasteredContinents();
      this.saveState();
    },

    saveState() {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
          states: this.states,
          stepCounter: this.stepCounter
        }));
        localStorage.setItem('geoatlas_cont_mastered', JSON.stringify(Array.from(this.masteredContinents)));
      } catch (e) {}
    },

    getDeckItems(deckId = this.activeDeckId) {
      if (deckId === 'all') return this.items;
      return this.continentItemsMap.get(deckId) || [];
    },

    getDeckStats(deckId = this.activeDeckId) {
      const items = this.getDeckItems(deckId);
      const total = items.length;
      let newCount = 0, learnCount = 0, reviewCount = 0, masteredCount = 0;

      items.forEach((it) => {
        const st = this.getState(it.id).state;
        if (st === 'mastered') masteredCount++;
        else if (st === 'review') reviewCount++;
        else if (st === 'learning') learnCount++;
        else newCount++;
      });

      return {
        total,
        newCount,
        learnCount,
        reviewCount,
        masteredCount,
        masteredPct: total > 0 ? Math.round((masteredCount / total) * 100) : 0
      };
    },

    getTotalStats() {
      return this.getDeckStats('all');
    },

    getActiveContinent() {
      const foundDeck = this.decks.find((d) => d.id === this.activeDeckId);
      if (foundDeck) return { id: foundDeck.id, name: foundDeck.title };
      return { id: 'eurasia', name: 'Евразия' };
    },

    startContinent(contId, isAll = false) {
      this.activeDeckId = isAll ? 'all' : (contId || 'eurasia');
      this.ACTIVE_POOL_SIZE = this.activeDeckId === 'all' ? 6 : 4;
      this.lastSeenId = null;
    },

    getNextItem(maintenanceMode = false) {
      const deckItems = this.getDeckItems();
      if (deckItems.length === 0) return null;

      // ИСПРАВЛЕНО: если все элементы колоды освоены и это НЕ ручное закрепление — возвращаем null для показа финального зачёта!
      const unmastered = deckItems.filter((it) => this.getState(it.id).state !== 'mastered');
      if (unmastered.length === 0 && !maintenanceMode) {
        return null;
      }

      const now = Date.now();
      const isDue = (it) => {
        const s = this.getState(it.id);
        return (s.dueStep > 0 && s.dueStep <= this.stepCounter) || (s.dueTimestamp > 0 && s.dueTimestamp <= now);
      };

      const pickNonLast = (arr, sortFn) => {
        const nonLast = arr.filter((it) => it.id !== this.lastSeenId);
        const pool = nonLast.length > 0 ? nonLast : arr;
        if (sortFn) pool.sort(sortFn);
        const chosen = pool[0];
        this.lastSeenId = chosen.id;
        return chosen;
      };

      // 1. Срочные повторения (learning)
      const dueLearning = deckItems.filter((it) => this.getState(it.id).state === 'learning' && isDue(it));
      if (dueLearning.length > 0) {
        return pickNonLast(dueLearning, (a, b) => this.getState(a.id).dueStep - this.getState(b.id).dueStep);
      }

      // 2. Подошедшее закрепление (review)
      const dueReview = deckItems.filter((it) => this.getState(it.id).state === 'review' && isDue(it));
      if (dueReview.length > 0) {
        return pickNonLast(dueReview, (a, b) => this.getState(a.id).dueStep - this.getState(b.id).dueStep);
      }

      // 3. Активный пул новых карточек (последовательно: площадь -> мысы -> вершина -> впадина -> Шубаев)
      const inFlight = deckItems.filter((it) => {
        const st = this.getState(it.id).state;
        return st === 'learning' || (st === 'review' && this.getState(it.id).dueStep <= this.stepCounter + 3);
      });
      const newItems = deckItems.filter((it) => this.getState(it.id).state === 'new');

      if (inFlight.length < this.ACTIVE_POOL_SIZE && newItems.length > 0) {
        const chosen = newItems[0];
        this.lastSeenId = chosen.id;
        return chosen;
      }

      // 4. Ближайшие карточки в обучении / закреплении
      const allActive = deckItems.filter((it) => {
        const st = this.getState(it.id).state;
        return st === 'learning' || st === 'review';
      });
      if (allActive.length > 0) {
        return pickNonLast(allActive, (a, b) => this.getState(a.id).dueStep - this.getState(b.id).dueStep);
      }

      if (newItems.length > 0) {
        const chosen = newItems[0];
        this.lastSeenId = chosen.id;
        return chosen;
      }

      // 5. Поддерживающий режим для 100% выученной темы
      return pickNonLast([...deckItems], (a, b) => (this.getState(a.id).lastReviewed || 0) - (this.getState(b.id).lastReviewed || 0));
    },

    recordSuccess(itemId) {
      this.stepCounter++;
      const s = this.getState(itemId);
      s.lastReviewed = Date.now();
      const prevStatus = s.state;

      if (s.state === 'new') {
        s.state = 'learning';
        s.reps = 1;
        s.intervalHours = 0.5;
        s.dueStep = this.stepCounter + 4;
      } else if (s.state === 'learning') {
        s.reps++;
        if (s.reps >= 2) {
          s.state = 'review';
          s.intervalHours = 4;
          s.dueStep = this.stepCounter + 10;
        } else {
          s.intervalHours = 0.5;
          s.dueStep = this.stepCounter + 4;
        }
      } else if (s.state === 'review') {
        s.reps++;
        if (s.reps >= 3) {
          // 3 безошибочных цикла по билету материка переводят вопрос в Освоено!
          s.state = 'mastered';
          s.intervalHours = 72;
          s.dueStep = this.stepCounter + 55;
        } else {
          s.intervalHours = 24;
          s.dueStep = this.stepCounter + 20;
        }
      } else if (s.state === 'mastered') {
        s.reps++;
        s.intervalHours = Math.min(720, Math.round((s.intervalHours || 72) * 2));
        s.dueStep = this.stepCounter + 90;
      }

      s.dueTimestamp = s.lastReviewed + Math.round(s.intervalHours * 3600 * 1000);
      this.recomputeMasteredContinents();
      this.saveState();

      return { status: s.state, prevStatus, reps: s.reps, dueStep: s.dueStep };
    },

    recordError(itemId) {
      this.stepCounter++;
      const s = this.getState(itemId);
      s.lastReviewed = Date.now();
      s.lapses = (s.lapses || 0) + 1;
      const wasMastered = s.state === 'mastered';

      s.state = 'learning';
      s.reps = 0;
      s.intervalHours = 0.1;
      s.dueStep = this.stepCounter + 2;
      s.dueTimestamp = s.lastReviewed + Math.round(s.intervalHours * 3600 * 1000);

      this.recomputeMasteredContinents();
      this.saveState();
      return { status: s.state, lapses: s.lapses, dueStep: s.dueStep, wasMastered };
    },

    recordMastered(itemId) {
      this.stepCounter++;
      const s = this.getState(itemId);
      s.state = 'mastered';
      s.reps = Math.max(s.reps || 0, 3);
      s.dueStep = this.stepCounter + 60;
      s.intervalHours = 72;
      s.lastReviewed = Date.now();
      s.dueTimestamp = s.lastReviewed + 72 * 3600 * 1000;

      this.recomputeMasteredContinents();
      this.saveState();
      return s.state;
    },

    resetDeck(deckId = this.activeDeckId) {
      const items = this.getDeckItems(deckId);
      items.forEach((it) => {
        delete this.states[it.id];
      });
      this.recomputeMasteredContinents();
      this.saveState();
    }
  };

  // ==========================================================================
  // 7. МОСТ СИНХРОНИЗАЦИИ 21 МЫСА МЕЖДУ РАЗДЕЛАМИ
  // ==========================================================================
  const CapeSyncBridge = {
    CAPES: [
      'eurasia_cape_north', 'eurasia_cape_south', 'eurasia_cape_west', 'eurasia_cape_east',
      'africa_cape_north', 'africa_cape_south', 'africa_cape_west', 'africa_cape_east',
      'north_america_cape_north', 'north_america_cape_south', 'north_america_cape_west', 'north_america_cape_east',
      'south_america_cape_north', 'south_america_cape_south', 'south_america_cape_west', 'south_america_cape_east',
      'australia_cape_north', 'australia_cape_south', 'australia_cape_west', 'australia_cape_east',
      'antarctica_cape_north'
    ],

    contToNomenId(contId) {
      if (!contId || typeof contId !== 'string') return null;
      const m = contId.match(/^([a-z_]+)_cape_([a-z]+)$/);
      if (!m) return null;
      const legacyUid = `cape_${m[1]}_${m[2]}`;
      return NomenclatureEngine.resolveItemId(legacyUid);
    },

    nomenToContId(nomenId) {
      if (!nomenId || typeof nomenId !== 'string') return null;
      const m = nomenId.match(/^(?:m1_)?cape_([a-z_]+)_([a-z]+)$/);
      return m ? `${m[1]}_cape_${m[2]}` : null;
    },

    syncToNomenclature(contCapeId, action = 'success') {
      const nomenId = this.contToNomenId(contCapeId);
      if (!nomenId || !NomenclatureEngine.objectsMap.has(nomenId)) return;
      if (action === 'success') NomenclatureEngine.recordSuccess(nomenId);
      else if (action === 'error') NomenclatureEngine.recordError(nomenId);
      else if (action === 'mastered') NomenclatureEngine.recordMastered(nomenId);
    },

    syncToContinentExam(nomenCapeId, action = 'success') {
      const contId = this.nomenToContId(nomenCapeId);
      if (!contId || !ContinentExamEngine.itemsMap.has(contId)) return;
      if (action === 'success') ContinentExamEngine.recordSuccess(contId);
      else if (action === 'error') ContinentExamEngine.recordError(contId);
      else if (action === 'mastered') ContinentExamEngine.recordMastered(contId);
    },

    reconcileOnStartup() {
      const statusRank = { new: 0, learning: 1, review: 2, mastered: 3 };
      this.CAPES.forEach((contId) => {
        const nomenId = this.contToNomenId(contId);
        if (!nomenId || !NomenclatureEngine.objectsMap.has(nomenId)) return;
        const cState = ContinentExamEngine.states[contId];
        const nState = NomenclatureEngine.srsStates[nomenId];
        const cRank = cState ? (statusRank[cState.state] || 0) : 0;
        const nRank = nState ? (statusRank[nState.status] || 0) : 0;

        if (cRank > nRank && cState) {
          const nom = NomenclatureEngine.getState(nomenId);
          nom.status = cState.state;
          nom.reps = cState.reps;
          nom.lapses = cState.lapses;
          nom.intervalHours = cState.intervalHours;
          nom.lastReviewed = cState.lastReviewed;
          nom.dueTimestamp = cState.dueTimestamp;
        } else if (nRank > cRank && nState) {
          const cont = ContinentExamEngine.getState(contId);
          cont.state = nState.status;
          cont.reps = nState.reps;
          cont.lapses = nState.lapses;
          cont.intervalHours = nState.intervalHours;
          cont.lastReviewed = nState.lastReviewed;
          cont.dueTimestamp = nState.dueTimestamp;
        }
      });
      ContinentExamEngine.recomputeMasteredContinents();
      ContinentExamEngine.saveState();
      NomenclatureEngine.saveState();
    }
  };

  // ==========================================================================
  // 8. ГЛАВНОЕ ПРИЛОЖЕНИЕ (MapApp Orchestrator v9.0 TMA)
  // ==========================================================================
  const MapApp = {
    appMode: 'hub', // 'hub' | 'continents' | 'objects' | 'blitz' | 'atlas'
    activeItem: null,
    activeTaskFormat: 'locate', // 'locate' | 'quiz'
    attemptsLeft: 3,
    usedRegionHint: false,
    lastDistanceKm: null,
    isItemAnswered: false,
    isCapeFlipped: false,
    capeMapSucceeded: false,
    subtaskHadError: false,
    maintenanceSession: false,
    activeDeckModalGroup: 'module1',
    activeDrawerFilter: 'all',
    drawerSearchQuery: '',
    atlasSearchQuery: '',
    atlasCategoryFilter: 'all',
    atlasCanvasRenderer: null,
    pendingStartDeckId: null,
    anki3dRevealTimer: null,
    toastTimer: null,
    celebratedMilestones: new Set(),

    anki3dState: {
      item: null,
      isHit: false,
      distKm: null,
      isFlipped: false,
      isPeek: false
    },

    init() {
      TelegramBridge.init();
      AudioEngine.loadMuteState();
      Gamification.load();
      QuizConfigEngine.init();
      UnifiedMapEngine.init();
      if (typeof L !== 'undefined' && L.canvas) {
        this.atlasCanvasRenderer = L.canvas({ padding: 0.5 });
      }

      NomenclatureEngine.init(window.GEOGRAPHY_DATA);
      ContinentExamEngine.init(window.GEOGRAPHY_DATA);
      CapeSyncBridge.reconcileOnStartup();
      QuizConfigEngine.syncUI();

      this.updateCloudSyncStatus(StorageAdapter.hasCloud() ? 'syncing' : 'local');
      StorageAdapter.syncFromCloud((didMerge) => {
        this.updateCloudSyncStatus(StorageAdapter.hasCloud() ? 'cloud' : 'local');
        if (didMerge) {
          CapeSyncBridge.reconcileOnStartup();
          this.renderHub();
          if (this.appMode === 'objects' || this.appMode === 'atlas') {
            this.updateDeckStatsUI();
          } else if (this.appMode === 'continents') {
            this.updateContinentStatsUI();
          }
        }
      });

      this.bindUI();
      this.renderHub();
      this.openHub();
    },

    updateCloudSyncStatus(mode = 'local') {
      const ind = document.getElementById('cloudSyncIndicator');
      const txt = document.getElementById('cloudSyncText');
      if (!ind || !txt) return;
      ind.classList.remove('cloud-ok', 'cloud-local', 'cloud-syncing');
      if (mode === 'cloud') {
        ind.classList.add('cloud-ok');
        txt.textContent = 'Telegram CloudStorage синхронизирован';
      } else if (mode === 'syncing') {
        ind.classList.add('cloud-syncing');
        txt.textContent = 'Синхронизация Telegram Cloud...';
      } else {
        ind.classList.add('cloud-local');
        txt.textContent = 'Локальное сохранение на устройстве';
      }
    },

    syncTelegramBackButton() {
      const hasOpenModal = Boolean(document.querySelector('.modal-overlay.open'));
      const hasOpenDrawer = document.getElementById('roadmapDrawer')?.classList.contains('open');
      const hasAnki3d = document.getElementById('anki3dOverlay')?.style.display !== 'none';
      const hasSubtask = document.getElementById('subtaskOverlay')?.style.display !== 'none';
      const hasBriefing = document.getElementById('briefingOverlay')?.style.display !== 'none';

      const shouldShow =
        this.appMode !== 'hub' ||
        hasOpenModal ||
        hasOpenDrawer ||
        hasAnki3d ||
        hasSubtask ||
        hasBriefing;

      TelegramBridge.setBackButton(Boolean(shouldShow));
    },

    handleTelegramBackButton() {
      const ankiOverlay = document.getElementById('anki3dOverlay');
      if (ankiOverlay && ankiOverlay.style.display !== 'none' && this.anki3dState.isPeek) {
        this.toggleAnki3dPeek(false);
        return;
      }

      const openModals = ['batchSelectModal', 'surveyConfigModal', 'resultsModal'];
      for (const mid of openModals) {
        const el = document.getElementById(mid);
        if (el && el.classList.contains('open')) {
          el.classList.remove('open');
          this.syncTelegramBackButton();
          return;
        }
      }

      const drawer = document.getElementById('roadmapDrawer');
      if (drawer && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        this.syncTelegramBackButton();
        return;
      }

      const insp = document.getElementById('atlasInspectorCard');
      if (this.appMode === 'atlas' && insp && insp.style.display !== 'none') {
        insp.style.display = 'none';
        return;
      }

      if (this.appMode !== 'hub') {
        this.openHub();
      } else {
        this.syncTelegramBackButton();
      }
    },

    showToast(text, undoCallback = null) {
      let toast = document.getElementById('milestoneToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'milestoneToast';
        toast.className = 'milestone-toast';
        document.getElementById('app-root')?.appendChild(toast);
      }

      if (this.toastTimer) clearTimeout(this.toastTimer);
      toast.innerHTML = '';

      const span = document.createElement('span');
      span.textContent = text;
      toast.appendChild(span);

      if (typeof undoCallback === 'function') {
        const undoBtn = document.createElement('button');
        undoBtn.className = 'toast-undo-btn';
        undoBtn.textContent = '↶ Отменить';
        undoBtn.onclick = () => {
          toast.classList.remove('show');
          toast.classList.add('hide');
          undoCallback();
        };
        toast.appendChild(undoBtn);
      }

      toast.style.display = 'flex';
      toast.classList.remove('hide');
      toast.classList.add('show');

      this.toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
          if (!toast.classList.contains('show')) toast.style.display = 'none';
        }, 320);
      }, undoCallback ? 4600 : 3200);
    },

    bindUI() {
      // Возврат в Хаб
      document.getElementById('backToHubBtn')?.addEventListener('click', () => {
        TelegramBridge.hapticSelect();
        this.openHub();
      });

      // Звук
      document.getElementById('soundBtn')?.addEventListener('click', () => AudioEngine.toggleMute());
      document.getElementById('hubSoundBtn')?.addEventListener('click', () => AudioEngine.toggleMute());

      // Полный экран (в Telegram раскрывает нативный WebApp)
      const toggleFs = () => {
        if (window.Telegram?.WebApp?.expand) {
          try { window.Telegram.WebApp.expand(); } catch (e) {}
        }
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
        else document.exitFullscreen?.().catch(() => {});
      };
      document.getElementById('fullscreenBtn')?.addEventListener('click', toggleFs);

      // Сворачивание карточки вопроса
      const collapseBtn = document.getElementById('toggleHudCollapseBtn');
      if (collapseBtn) {
        collapseBtn.onclick = () => {
          const hud = document.getElementById('taskHudCard');
          if (!hud) return;
          const isCol = hud.classList.toggle('collapsed');
          collapseBtn.textContent = isCol ? '▾' : '▴';
        };
      }

      // Переключатель слоев карты
      document.querySelectorAll('#mapModeSegmented .seg-btn').forEach((btn) => {
        btn.onclick = () => {
          TelegramBridge.hapticSelect();
          const mode = btn.getAttribute('data-mode');
          UnifiedMapEngine.setMapMode(mode);
          if (this.appMode === 'atlas') {
            const chk = document.getElementById('atlasShowMapLabelsToggle');
            UnifiedMapEngine.setAtlasLabelsVisible(Boolean(chk && chk.checked));
          }
        };
      });

      // Переключатель режима в шапке тренажёра (Обучение / Атлас)
      document.querySelectorAll('#headerPmodeSwitch .h-pmode-btn').forEach((btn) => {
        btn.onclick = () => {
          TelegramBridge.hapticSelect();
          const pm = btn.getAttribute('data-pmode') || 'locate';
          if (pm === 'atlas') {
            this.openInteractiveAtlas(NomenclatureEngine.activeDeckId);
          } else {
            NomenclatureEngine.practiceMode = 'locate';
            NomenclatureEngine.saveState();
            this.syncPracticeModeButtons();
            if (this.appMode === 'atlas') {
              this.startObjectsPractice(NomenclatureEngine.activeDeckId);
            } else if (this.appMode === 'objects') {
              this.runNextObject();
            }
          }
        };
      });

      // Модалка гибкой настройки опроса (в шапке Хаба, в шапке карты и в боковом меню)
      const cfgModal = document.getElementById('surveyConfigModal');
      const openSurveyConfig = () => {
        TelegramBridge.hapticSelect();
        QuizConfigEngine.syncUI();
        cfgModal?.classList.add('open');
        this.syncTelegramBackButton();
      };
      document.getElementById('hubConfigBtn')?.addEventListener('click', openSurveyConfig);
      document.getElementById('hubOpenConfigBtn')?.addEventListener('click', openSurveyConfig);
      document.getElementById('headerConfigBtn')?.addEventListener('click', openSurveyConfig);
      document.getElementById('drawerOpenConfigBtn')?.addEventListener('click', () => {
        document.getElementById('roadmapDrawer')?.classList.remove('open');
        openSurveyConfig();
      });

      const closeSurveyConfig = () => {
        cfgModal?.classList.remove('open');
        this.syncTelegramBackButton();
        if (this.appMode === 'objects') {
          this.updateDeckStatsUI();
          this.runNextObject();
        } else if (this.appMode === 'hub') {
          this.renderHub();
        }
      };
      document.getElementById('closeSurveyConfigModalBtn')?.addEventListener('click', closeSurveyConfig);
      document.getElementById('saveSurveyConfigBtn')?.addEventListener('click', () => {
        TelegramBridge.hapticHit();
        closeSurveyConfig();
        this.showToast(`✓ Настройки опроса применены`);
      });

      document.querySelectorAll('#cfgPresetRow .pp-choice-btn').forEach((btn) => {
        btn.onclick = () => {
          TelegramBridge.hapticSelect();
          QuizConfigEngine.setPreset(btn.getAttribute('data-preset') || 'balanced');
        };
      });
      document.querySelectorAll('#cfgScopeRow .pp-choice-btn').forEach((btn) => {
        btn.onclick = () => {
          TelegramBridge.hapticSelect();
          QuizConfigEngine.setScope(btn.getAttribute('data-scope') || 'extended');
        };
      });
      document.querySelectorAll('#cfgCardModeRow .pp-choice-btn').forEach((btn) => {
        btn.onclick = () => {
          TelegramBridge.hapticSelect();
          QuizConfigEngine.setCardMode(btn.getAttribute('data-cardmode') || 'smart');
        };
      });
      document.querySelectorAll('#cfgTopicsGrid .pp-choice-btn').forEach((btn) => {
        btn.onclick = () => {
          TelegramBridge.hapticSelect();
          QuizConfigEngine.toggleTopic(btn.getAttribute('data-topic') || '');
        };
      });

      // Кнопка сброса прогресса внизу Хаба
      document.getElementById('hubResetAllBtn')?.addEventListener('click', () => this.resetAllProgress());

      // Модалка выбора раздела / темы
      const batchModal = document.getElementById('batchSelectModal');
      document.getElementById('openBatchSelectBtn')?.addEventListener('click', () => {
        TelegramBridge.hapticSelect();
        this.renderBatchSelectModal();
        batchModal?.classList.add('open');
        this.syncTelegramBackButton();
      });
      document.getElementById('closeBatchSelectModalBtn')?.addEventListener('click', () => {
        batchModal?.classList.remove('open');
        this.syncTelegramBackButton();
      });

      document.querySelectorAll('#deckGroupTabs .deck-group-tab').forEach((tab) => {
        tab.onclick = () => {
          TelegramBridge.hapticSelect();
          this.activeDeckModalGroup = tab.getAttribute('data-group') || 'module1';
          document.querySelectorAll('#deckGroupTabs .deck-group-tab').forEach((t) => t.classList.toggle('active', t === tab));
          this.renderBatchSelectModal(this.appMode === 'hub');
        };
      });

      // Шторка номенклатуры с поиском
      const drawer = document.getElementById('roadmapDrawer');
      const openDrawer = () => {
        TelegramBridge.hapticSelect();
        this.renderRoadmapDrawer(this.activeDrawerFilter);
        drawer?.classList.add('open');
        this.syncTelegramBackButton();
      };
      document.getElementById('openRoadmapBtn')?.addEventListener('click', openDrawer);
      document.getElementById('hubOpenAllObjectsBtn')?.addEventListener('click', openDrawer);
      document.getElementById('closeRoadmapBtn')?.addEventListener('click', () => {
        drawer?.classList.remove('open');
        this.syncTelegramBackButton();
      });

      const searchInput = document.getElementById('drawerSearchInput');
      const searchClear = document.getElementById('drawerSearchClearBtn');
      if (searchInput) {
        searchInput.oninput = () => {
          this.drawerSearchQuery = searchInput.value.trim();
          if (searchClear) searchClear.style.display = this.drawerSearchQuery ? 'inline-block' : 'none';
          this.renderRoadmapDrawer(this.activeDrawerFilter);
        };
      }
      if (searchClear && searchInput) {
        searchClear.onclick = () => {
          searchInput.value = '';
          this.drawerSearchQuery = '';
          searchClear.style.display = 'none';
          this.renderRoadmapDrawer(this.activeDrawerFilter);
          searchInput.focus();
        };
      }

      document.querySelectorAll('.drawer-filter-tabs .drawer-tab').forEach((tab) => {
        tab.onclick = () => {
          this.activeDrawerFilter = tab.getAttribute('data-filter') || 'all';
          document.querySelectorAll('.drawer-filter-tabs .drawer-tab').forEach((t) => t.classList.toggle('active', t === tab));
          this.renderRoadmapDrawer(this.activeDrawerFilter);
        };
      });

      // Поиск и управление внутри Атласа
      const atlasSearchInput = document.getElementById('atlasSearchInput');
      const atlasSearchClear = document.getElementById('atlasSearchClearBtn');
      if (atlasSearchInput) {
        atlasSearchInput.oninput = () => {
          this.atlasSearchQuery = atlasSearchInput.value.trim();
          if (atlasSearchClear) atlasSearchClear.style.display = this.atlasSearchQuery ? 'inline-block' : 'none';
          if (this.appMode === 'atlas') {
            this.renderAtlasMarkers();
          }
        };
      }
      if (atlasSearchClear && atlasSearchInput) {
        atlasSearchClear.onclick = () => {
          atlasSearchInput.value = '';
          this.atlasSearchQuery = '';
          atlasSearchClear.style.display = 'none';
          if (this.appMode === 'atlas') {
            this.renderAtlasMarkers();
          }
          atlasSearchInput.focus();
        };
      }

      document.getElementById('atlasShowMapLabelsToggle')?.addEventListener('change', (e) => {
        UnifiedMapEngine.setAtlasLabelsVisible(Boolean(e.target.checked));
      });
      document.getElementById('atlasStartPracticeBtn')?.addEventListener('click', () => {
        TelegramBridge.hapticSelect();
        NomenclatureEngine.practiceMode = 'locate';
        this.startObjectsPractice(NomenclatureEngine.activeDeckId);
      });
      document.getElementById('closeInspectorBtn')?.addEventListener('click', () => {
        document.getElementById('atlasInspectorCard').style.display = 'none';
      });

      // 2-Step Anki 3D Flip-Card
      document.getElementById('anki3dFlipBtn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.flipAnki3dCard(true);
      });
      document.getElementById('anki3dFrontFace')?.addEventListener('click', () => {
        if (!this.anki3dState.isFlipped) this.flipAnki3dCard(true);
      });
      document.getElementById('anki3dFlipBackBtn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.flipAnki3dCard(false);
      });
      document.getElementById('anki3dPeekMapBtn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleAnki3dPeek();
      });
      document.querySelectorAll('#anki3dSm2Buttons .sm2-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const grade = parseInt(btn.getAttribute('data-grade') || '3', 10);
          this.gradeAnki3dCard(grade);
        });
      });

      // Кнопки HUD задания: «Уже знаю (K)», «Подсказка региона (H)», «Показать на карте (R)», «Дальше»
      const handleSkip = () => this.handleSkipMastered();
      document.getElementById('hudSkipBtn')?.addEventListener('click', handleSkip);
      document.getElementById('subtaskSkipBtn')?.addEventListener('click', handleSkip);
      document.getElementById('briefingSkipBtn')?.addEventListener('click', handleSkip);

      document.getElementById('hudHintRegionBtn')?.addEventListener('click', () => this.triggerRegionHint());
      document.getElementById('hudRevealBtn')?.addEventListener('click', () => this.revealAnswer());
      document.getElementById('hudNextBtn')?.addEventListener('click', () => {
        if (
          this.appMode === 'objects' &&
          this.isItemAnswered &&
          this.activeItem &&
          QuizConfigEngine.shouldShowCardStep(this.activeItem)
        ) {
          this.openAnki3dModal(this.activeItem, false, this.lastDistanceKm);
        } else {
          this.advanceAfterPause();
        }
      });

      // Числовой ввод высоты / глубины
      document.getElementById('subtaskMetricSubmitBtn')?.addEventListener('click', () => this.checkMetricInput());
      document.getElementById('subtaskMetricInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.checkMetricInput();
        }
      });

      // Модалка результатов
      document.getElementById('resultsNextBtn')?.addEventListener('click', () => this.handleResultsNext());
      document.getElementById('resultsBackHubBtn')?.addEventListener('click', () => {
        document.getElementById('resultsModal')?.classList.remove('open');
        this.openHub();
      });
      document.getElementById('resultsRepeatBtn')?.addEventListener('click', () => {
        document.getElementById('resultsModal')?.classList.remove('open');
        this.syncTelegramBackButton();
        if (this.appMode === 'continents') {
          this.maintenanceSession = true;
          this.runNextContinentQuestion();
        } else {
          this.maintenanceSession = true;
          this.runNextObject();
        }
      });

      // Закрытие модалок по клику на тёмный фон
      document.querySelectorAll('.modal-overlay').forEach((ov) => {
        ov.addEventListener('click', (e) => {
          if (e.target === ov && ov.id !== 'resultsModal') {
            ov.classList.remove('open');
            this.syncTelegramBackButton();
          }
        });
      });

      // Клавиатурное управление
      window.addEventListener('keydown', (e) => this.handleGlobalKeydown(e));
    },

    handleGlobalKeydown(e) {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        if (e.key === 'Escape') {
          e.target.blur();
        } else {
          return;
        }
      }

      if (e.key === 'Escape') {
        const ankiOverlay = document.getElementById('anki3dOverlay');
        if (ankiOverlay && ankiOverlay.style.display !== 'none' && this.anki3dState.isPeek) {
          this.toggleAnki3dPeek(false);
          return;
        }
        const openModals = ['batchSelectModal', 'surveyConfigModal'];
        for (const mid of openModals) {
          const el = document.getElementById(mid);
          if (el && el.classList.contains('open')) {
            el.classList.remove('open');
            this.syncTelegramBackButton();
            return;
          }
        }
        const drawer = document.getElementById('roadmapDrawer');
        if (drawer && drawer.classList.contains('open')) {
          drawer.classList.remove('open');
          this.syncTelegramBackButton();
          return;
        }
      }

      if (this.appMode === 'hub') return;
      const keyLower = e.key.toLowerCase();

      // 0. 3D Anki Flip-Card Overlay (2-Step Anki Loop)
      const ankiOverlay = document.getElementById('anki3dOverlay');
      if (ankiOverlay && ankiOverlay.style.display !== 'none') {
        if (keyLower === 'p' || keyLower === 'з') {
          e.preventDefault();
          this.toggleAnki3dPeek();
          return;
        }
        if (!this.anki3dState.isFlipped) {
          if (e.code === 'Space' || e.key === 'Enter' || keyLower === 'f' || keyLower === 'а') {
            e.preventDefault();
            this.flipAnki3dCard(true);
            return;
          }
        } else {
          if (['1', '2', '3', '4'].includes(e.key)) {
            e.preventDefault();
            this.gradeAnki3dCard(parseInt(e.key, 10));
            return;
          }
          if (e.key === 'Enter' || e.code === 'Space') {
            e.preventDefault();
            this.gradeAnki3dCard(this.anki3dState.isHit ? 3 : 1);
            return;
          }
        }
        return;
      }

      // 1. Автопереход -> Enter / Space
      if (AutoAdvanceController.isRunning() && (e.code === 'Space' || e.key === 'Enter')) {
        e.preventDefault();
        AutoAdvanceController.commit();
        return;
      }

      // 2. Диалог подзадачи (Раздел 1 — материки)
      const sub = document.getElementById('subtaskOverlay');
      if (sub && sub.style.display !== 'none') {
        const capeCard = document.getElementById('subtaskCapeFlashcard');
        if (capeCard && capeCard.style.display !== 'none') {
          if (!this.isCapeFlipped) {
            if (['1', '2', '3', '4'].includes(e.key)) {
              const idx = parseInt(e.key, 10) - 1;
              const btns = document.querySelectorAll('#capeFrontChoicesGrid .subtask-chip');
              if (btns[idx] && !btns[idx].disabled) {
                e.preventDefault();
                btns[idx].click();
              }
              return;
            }
            if (keyLower === 'f' || keyLower === 'а') {
              e.preventDefault();
              this.flipCapeCard();
              return;
            }
          } else {
            const assessBox = document.getElementById('capeSelfAssessBox');
            if (assessBox && assessBox.style.display !== 'none') {
              if (e.key === '1') {
                e.preventDefault();
                this.handleCapeSelfAssess(false);
                return;
              }
              if (e.key === '2' || e.key === 'Enter' || e.code === 'Space') {
                e.preventDefault();
                this.handleCapeSelfAssess(true);
                return;
              }
            } else if (e.key === 'Enter' || e.code === 'Space') {
              e.preventDefault();
              document.getElementById('subtaskContinueBtn')?.click();
              return;
            }
          }
          return;
        }

        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          const chips = sub.querySelectorAll('#subtaskChipsGrid .subtask-chip');
          if (chips[idx] && !chips[idx].disabled) {
            e.preventDefault();
            chips[idx].click();
            return;
          }
        }

        if (e.key === 'Enter' || e.code === 'Space') {
          const contBtn = document.getElementById('subtaskContinueBtn');
          if (contBtn && contBtn.style.display !== 'none') {
            e.preventDefault();
            contBtn.click();
            return;
          }
        }
        return;
      }

      // 3. Окно Брифинга
      const brief = document.getElementById('briefingOverlay');
      if (brief && brief.style.display !== 'none') {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          const chips = brief.querySelectorAll('.briefing-chip');
          if (chips[idx] && !chips[idx].disabled) {
            e.preventDefault();
            chips[idx].click();
            return;
          }
        }
        if (e.key === 'Enter' || e.code === 'Space') {
          const contBtn = document.getElementById('briefingContinueBtn');
          if (contBtn && contBtn.style.display !== 'none') {
            e.preventDefault();
            contBtn.click();
            return;
          }
        }
        if (!this.isItemAnswered && (keyLower === 'k' || keyLower === 'л')) {
          e.preventDefault();
          this.handleSkipMastered();
        }
        return;
      }

      // 4. Кнопка «Дальше»
      if (e.key === 'Enter' || e.code === 'Space') {
        const nextBtn = document.getElementById('hudNextBtn');
        if (nextBtn && nextBtn.style.display !== 'none') {
          e.preventDefault();
          nextBtn.click();
          return;
        }
      }

      // 5. Варианты 1-4 в Quiz Mode
      if (['1', '2', '3', '4'].includes(e.key)) {
        const qGrid = document.getElementById('hudQuizOptionsGrid');
        if (qGrid && qGrid.style.display !== 'none') {
          const idx = parseInt(e.key, 10) - 1;
          const btns = qGrid.querySelectorAll('.hud-quiz-chip');
          if (btns[idx] && !btns[idx].disabled) {
            e.preventDefault();
            btns[idx].click();
            return;
          }
        }
      }

      // 6. «Уже знаю» (K / Л)
      if (!this.isItemAnswered && (keyLower === 'k' || keyLower === 'л')) {
        e.preventDefault();
        this.handleSkipMastered();
        return;
      }

      // 7. Подсказка региона (H / Р)
      if (!this.isItemAnswered && (keyLower === 'h' || keyLower === 'р')) {
        const hintBtn = document.getElementById('hudHintRegionBtn');
        if (hintBtn && hintBtn.style.display !== 'none' && !hintBtn.disabled) {
          e.preventDefault();
          this.triggerRegionHint();
          return;
        }
      }

      // 8. Показать ответ (R / К)
      if (!this.isItemAnswered && (keyLower === 'r' || keyLower === 'к')) {
        const revBtn = document.getElementById('hudRevealBtn');
        if (revBtn && revBtn.style.display !== 'none') {
          e.preventDefault();
          this.revealAnswer();
        }
      }
    },

    syncPracticeModeButtons() {
      const pm = this.appMode === 'atlas' ? 'atlas' : NomenclatureEngine.practiceMode;
      document.querySelectorAll('#headerPmodeSwitch .h-pmode-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-pmode') === pm);
      });
    },

    updateHeaderStreakUI() {
      const el = document.getElementById('headerStreakNum');
      if (el) el.textContent = String(Gamification.streak);
    },

    hideCompassBadge() {
      const el = document.getElementById('dynamicCompassBadge');
      if (el) el.style.display = 'none';
    },

    updateCompassBadge(fromLat, fromLng, targetLat, targetLng, distKm, isFirstMiss, isWarmer) {
      const badge = document.getElementById('dynamicCompassBadge');
      if (!badge) return;
      const rhumb = GeoMath.calcCompass8Rhumb(fromLat, fromLng, targetLat, targetLng);

      badge.style.display = 'flex';
      const needle = document.getElementById('compassNeedleIcon');
      if (needle) needle.style.transform = `rotate(${rhumb.angleDeg}deg)`;

      const rhumbEl = document.getElementById('compassRhumbText');
      if (rhumbEl) rhumbEl.textContent = `${rhumb.code} (${rhumb.full})`;

      const distEl = document.getElementById('compassDistText');
      if (distEl) distEl.textContent = `~${distKm.toLocaleString('ru-RU')} км`;

      const pill = document.getElementById('compassThermalPill');
      if (pill) {
        if (isFirstMiss) {
          pill.className = 'compass-thermal-pill first';
          pill.textContent = distKm < 800 ? '🔥 Уже близко' : '🧭 Промах';
        } else if (isWarmer) {
          pill.className = 'compass-thermal-pill warmer';
          pill.textContent = '🔥 Теплее';
        } else {
          pill.className = 'compass-thermal-pill colder';
          pill.textContent = '❄️ Холоднее';
        }
      }
    },

    // ========================================================================
    // ГЛАВНЫЙ ХАБ (4 РАЗДЕЛА)
    // ========================================================================
    openHub() {
      AutoAdvanceController.cancel();
      if (this.anki3dRevealTimer) {
        clearTimeout(this.anki3dRevealTimer);
        this.anki3dRevealTimer = null;
      }

      UnifiedMapEngine.clearFeedback();
      UnifiedMapEngine.clearSpecialEntities();
      UnifiedMapEngine.clearAtlasMarkers();
      UnifiedMapEngine.setAtlasLabelsVisible(false);
      document.getElementById('map')?.classList.remove('atlas-cursor');

      this.appMode = 'hub';
      document.getElementById('hubScreen')?.classList.remove('hidden');
      document.getElementById('statusIsland').style.display = 'none';
      document.getElementById('taskHudCard').style.display = 'none';
      document.getElementById('atlasExploreBar').style.display = 'none';
      document.getElementById('atlasInspectorCard').style.display = 'none';
      document.getElementById('subtaskOverlay').style.display = 'none';
      document.getElementById('briefingOverlay').style.display = 'none';
      document.getElementById('anki3dOverlay').style.display = 'none';
      document.getElementById('toggleHudCollapseBtn').style.display = 'none';
      this.hideCompassBadge();

      UnifiedMapEngine.resetView();
      this.renderHub();
      this.syncTelegramBackButton();
    },

    closeHub() {
      document.getElementById('hubScreen')?.classList.add('hidden');
      document.getElementById('statusIsland').style.display = 'flex';
      this.syncTelegramBackButton();
    },

    renderHub() {
      const contStats = ContinentExamEngine.getTotalStats();

      const streakEl = document.getElementById('hubStreakSummary');
      if (streakEl) {
        streakEl.textContent = Gamification.bestStreak > 0
          ? `Серия: ${Gamification.streak} (рек. ${Gamification.bestStreak})`
          : `Серия: ${Gamification.streak}`;
      }

      const grid = document.getElementById('hubModulesBentoGrid');
      if (grid) {
        grid.innerHTML = '';

        const modulesSpec = [
          {
            id: 'module1',
            badgeCls: 'mod-1',
            badgeLabel: 'Раздел 1',
            icon: '🌍',
            title: 'Материки, острова, пустыни',
            desc: 'Крайние мысы (21), полуострова (60), острова по происхождению (148), пустыни (38) и вопросы по материкам.',
            mainDeckId: 'm1_all',
            chips: [
              { deckId: 'm1_capes', label: '🧭 Мысы' },
              { deckId: 'm1_peninsulas', label: '🏖️ Полуострова' },
              { deckId: 'm1_islands', label: '🏝️ Острова' },
              { deckId: 'm1_deserts', label: '🏜️ Пустыни' },
              { type: 'continents', label: '🌍 По материкам', customCount: `${contStats.masteredCount}/${contStats.total}` }
            ]
          },
          {
            id: 'module2',
            badgeCls: 'mod-2',
            badgeLabel: 'Раздел 2',
            icon: '⛰️',
            title: 'Горы, вулканы и равнины',
            desc: '6 эпох складчатости (117 горных систем), 52 вулкана, 16 депрессий суши, низменности, возвышенности и плоскогорья.',
            mainDeckId: 'm2_all',
            chips: [
              { deckId: 'm2_orogeny', label: '🏔️ Горы (6 эпох)' },
              { deckId: 'm2_volcanoes', label: '🌋 Вулканы' },
              { deckId: 'm2_depressions', label: '📉 Депрессии' },
              { deckId: 'm2_lowlands', label: '🌾 Низменности' },
              { deckId: 'm2_plateaus', label: '🏜️ Плоскогорья' }
            ]
          },
          {
            id: 'module3',
            badgeCls: 'mod-3',
            badgeLabel: 'Раздел 3',
            icon: '🌊',
            title: 'Мировой океан и течения',
            desc: '5 океанов и 57 морей, 49 проливов, 65 заливов, 35 глубоководных желобов и 45 морских течений.',
            mainDeckId: 'm3_all',
            chips: [
              { deckId: 'm3_seas', label: '⚓ Моря и океаны' },
              { deckId: 'm3_straits', label: '🚢 Проливы' },
              { deckId: 'm3_gulfs', label: '⛵ Заливы' },
              { deckId: 'm3_trenches', label: '🔱 Желоба' },
              { deckId: 'm3_currents', label: '🌀 Течения' }
            ]
          },
          {
            id: 'module4',
            badgeCls: 'mod-4',
            badgeLabel: 'Раздел 4',
            icon: '💧',
            title: 'Реки, водопады и озёра',
            desc: '162 речные системы со стрежневыми линиями стока, 20 водопадов и 71 озеро мира.',
            mainDeckId: 'm4_all',
            chips: [
              { deckId: 'm4_rivers', label: '🏞️ Все реки' },
              { deckId: 'm4_waterfalls', label: '🌊 Водопады' },
              { deckId: 'm4_lakes', label: '🪩 Озёра' },
              { deckId: 'm4_rivers_eurasia', label: '🌏 Реки Евразии' }
            ]
          }
        ];

        modulesSpec.forEach((mod) => {
          const st = NomenclatureEngine.getDeckStats(mod.mainDeckId, true);
          const card = document.createElement('article');
          card.className = 'bento-module-card';

          const chipsHtml = mod.chips
            .map((ch) => {
              if (ch.type === 'continents') {
                return `<button type="button" class="bento-subdeck-chip" data-continents="1">${ch.label} <span class="chip-cnt">${ch.customCount}</span></button>`;
              }
              const d = NomenclatureEngine.decksMap.get(ch.deckId);
              const cnt = d ? d.objectIds.length : 0;
              return `<button type="button" class="bento-subdeck-chip" data-deck="${ch.deckId}">${ch.label} <span class="chip-cnt">${cnt}</span></button>`;
            })
            .join('');

          card.innerHTML = `
            <div>
              <div class="bento-mod-top">
                <span class="bento-mod-badge ${mod.badgeCls}">${mod.icon} ${mod.badgeLabel}</span>
                <span class="bento-mod-pct">${st.masteredPct}%</span>
              </div>
              <h3 class="bento-mod-title">${mod.title}</h3>
              <p class="bento-mod-desc">${mod.desc}</p>
              <div class="bento-mod-progress-wrap">
                <div class="progress-bar-track">
                  <div class="progress-bar-fill" style="width: ${st.masteredPct}%;"></div>
                </div>
                <div class="bento-mod-counters">
                  <span>Выучено: <strong>${st.masteredCount}</strong> из ${st.total}</span>
                  <span>Повтор: ${st.learnCount + st.reviewCount}</span>
                </div>
              </div>
              <div class="bento-subdecks-wrap">${chipsHtml}</div>
            </div>
            <div class="bento-mod-footer-3">
              <button type="button" class="bento-btn-start" data-start-deck="${mod.mainDeckId}">
                🎯 ${st.masteredPct === 100 ? 'Повторить' : 'Учить'}
              </button>
              <button type="button" class="bento-btn-atlas" data-atlas-deck="${mod.mainDeckId}">
                📖 Атлас
              </button>
              <button type="button" class="bento-btn-topics" data-open-group="${mod.id}">
                📋 Темы
              </button>
            </div>
          `;

          card.querySelectorAll('.bento-subdeck-chip').forEach((btn) => {
            btn.onclick = () => {
              TelegramBridge.hapticSelect();
              if (btn.getAttribute('data-continents') === '1') {
                this.startContinentExam('all', true);
              } else {
                const did = btn.getAttribute('data-deck');
                if (did) this.startObjectsPractice(did);
              }
            };
          });

          card.querySelector('.bento-btn-start')?.addEventListener('click', () => {
            TelegramBridge.hapticSelect();
            this.startObjectsPractice(mod.mainDeckId);
          });

          card.querySelector('.bento-btn-atlas')?.addEventListener('click', () => {
            TelegramBridge.hapticSelect();
            this.openInteractiveAtlas(mod.mainDeckId);
          });

          card.querySelector('.bento-btn-topics')?.addEventListener('click', () => {
            TelegramBridge.hapticSelect();
            this.activeDeckModalGroup = mod.id;
            document.querySelectorAll('#deckGroupTabs .deck-group-tab').forEach((t) => {
              t.classList.toggle('active', t.getAttribute('data-group') === mod.id);
            });
            this.renderBatchSelectModal(true);
            document.getElementById('batchSelectModal')?.classList.add('open');
            this.syncTelegramBackButton();
          });

          grid.appendChild(card);
        });
      }

      QuizConfigEngine.syncUI();
      this.syncPracticeModeButtons();
    },

    // ========================================================================
    // ИНТЕРАКТИВНЫЙ АТЛАС (ВСЕ ОБЪЕКТЫ ТЕМЫ + ПОИСК ПО НАЗВАНИЮ)
    // ========================================================================
    openInteractiveAtlas(deckId) {
      AutoAdvanceController.cancel();
      this.closeHub();
      this.appMode = 'atlas';

      if (deckId && NomenclatureEngine.decksMap.has(deckId)) {
        NomenclatureEngine.activeDeckId = deckId;
      }

      this.atlasCategoryFilter = 'all';
      this.atlasSearchQuery = '';
      const atlasInput = document.getElementById('atlasSearchInput');
      if (atlasInput) atlasInput.value = '';
      const atlasClear = document.getElementById('atlasSearchClearBtn');
      if (atlasClear) atlasClear.style.display = 'none';

      document.getElementById('map')?.classList.add('atlas-cursor');
      document.getElementById('taskHudCard').style.display = 'none';
      document.getElementById('subtaskOverlay').style.display = 'none';
      document.getElementById('briefingOverlay').style.display = 'none';
      document.getElementById('anki3dOverlay').style.display = 'none';
      document.getElementById('ankiDeckCounters').style.display = 'flex';
      document.getElementById('headerPmodeSwitch').style.display = 'flex';
      document.getElementById('atlasExploreBar').style.display = 'flex';
      document.getElementById('toggleHudCollapseBtn').style.display = 'none';

      const curDeck = NomenclatureEngine.getActiveDeck();
      document.getElementById('headerModeIcon').textContent = '📖';
      document.getElementById('islandBatchTitle').textContent = `Атлас: ${curDeck.shortTitle}`;

      this.buildAtlasFilterPills(curDeck);
      QuizConfigEngine.syncUI();
      this.syncPracticeModeButtons();
      this.updateDeckStatsUI();
      this.renderAtlasMarkers();
      this.syncTelegramBackButton();
    },

    buildAtlasFilterPills(deck) {
      const container = document.getElementById('atlasCategoryFilters');
      if (!container || !deck) return;
      const items = deck.objectIds.map((id) => NomenclatureEngine.objectsMap.get(id)).filter(Boolean);

      const catCounts = new Map();
      items.forEach((it) => {
        const key = it.categoryRu || 'Объекты';
        catCounts.set(key, (catCounts.get(key) || 0) + 1);
      });

      const dotColorMap = {
        'Мысы': '#c084fc',
        'Полуострова': '#38bdf8',
        'Материковый остров': '#34d399',
        'Вулканический остров': '#fb7185',
        'Коралловый остров': '#22d3ee',
        'Пустыни': '#fbbf24',
        'Горы': '#fbbf24',
        'Вулканы': '#ef4444',
        'Депрессии': '#a855f7',
        'Низменности': '#4ade80',
        'Возвышенности': '#facc15',
        'Плоскогорья и плато': '#fb923c',
        'Океаны и моря': '#38bdf8',
        'Проливы': '#22d3ee',
        'Заливы': '#60a5fa',
        'Глубоководные желоба': '#c084fc',
        'Морские течения': '#f43f5e',
        'Реки': '#38bdf8',
        'Водопады': '#2dd4bf',
        'Озёра': '#818cf8'
      };

      container.innerHTML = '';

      const addPill = (catKey, labelHtml) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `atlas-pill ${this.atlasCategoryFilter === catKey ? 'active' : ''}`;
        btn.setAttribute('data-cat', catKey);
        btn.innerHTML = labelHtml;
        btn.onclick = () => {
          TelegramBridge.hapticSelect();
          this.atlasCategoryFilter = catKey;
          container.querySelectorAll('.atlas-pill').forEach((p) => p.classList.toggle('active', p === btn));
          this.renderAtlasMarkers();
        };
        container.appendChild(btn);
      };

      addPill('all', `Все (${items.length})`);
      for (const [catName, cnt] of catCounts.entries()) {
        const color = dotColorMap[catName] || '#38bdf8';
        addPill(catName, `<span class="legend-dot" style="background:${color};"></span>${catName} (${cnt})`);
      }

      if (['m1_all', 'semester_all', 'all'].includes(deck.id)) {
        addPill('special', `<span class="legend-dot dot-special"></span>Океания и Бермуды (4)`);
      }
    },

    renderAtlasMarkers() {
      UnifiedMapEngine.clearFeedback();
      UnifiedMapEngine.clearSpecialEntities();
      UnifiedMapEngine.clearAtlasMarkers();

      if (this.atlasCategoryFilter === 'special') {
        const specials = window.GEOGRAPHY_DATA.special_entities || [];
        const bermuda = specials.find((s) => s.id === 'bermuda_triangle');
        if (bermuda) UnifiedMapEngine.drawBermudaTriangle(bermuda.vertices);
        UnifiedMapEngine.drawOceaniaRegions(specials);
        UnifiedMapEngine.resetView();
        document.getElementById('atlasCountLabel').textContent =
          'Спецобъекты курса: Бермудский треугольник, Меланезия, Микронезия и Полинезия';
        return;
      }

      const curDeck = NomenclatureEngine.getActiveDeck();
      let items = curDeck.objectIds.map((id) => NomenclatureEngine.objectsMap.get(id)).filter(Boolean);

      if (this.atlasCategoryFilter !== 'all') {
        items = items.filter(
          (it) => it.categoryRu === this.atlasCategoryFilter || it.mainCategory === this.atlasCategoryFilter
        );
      }

      const q = (this.atlasSearchQuery || '').trim().toLowerCase();
      if (q) {
        items = items.filter((it) => {
          const hay = `${it.title || ''} ${it.displayTitle || ''} ${it.continent || ''} ${it.worldRegion || ''} ${it.categoryRu || ''}`.toLowerCase();
          return hay.includes(q);
        });
      }

      const cntEl = document.getElementById('atlasCountLabel');
      if (cntEl) {
        cntEl.textContent = items.length === 0 && q
          ? `По запросу «${this.atlasSearchQuery}» ничего не найдено`
          : `На карте: ${items.length} — кликните по маркеру или линии для изучения`;
      }

      const catColorMap = {
        'Мысы': '#c084fc',
        'Полуострова': '#38bdf8',
        'Материковый остров': '#34d399',
        'Вулканический остров': '#fb7185',
        'Коралловый остров': '#22d3ee',
        'Пустыни': '#fbbf24',
        'Горы': '#fbbf24',
        'Вулканы': '#ef4444',
        'Депрессии': '#a855f7',
        'Низменности': '#4ade80',
        'Возвышенности': '#facc15',
        'Плоскогорья и плато': '#fb923c',
        'Океаны и моря': '#38bdf8',
        'Проливы': '#22d3ee',
        'Заливы': '#60a5fa',
        'Глубоководные желоба': '#c084fc',
        'Морские течения': '#f43f5e',
        'Реки': '#38bdf8',
        'Водопады': '#2dd4bf',
        'Озёра': '#818cf8'
      };

      items.forEach((it) => {
        const st = NomenclatureEngine.getState(it.id).status;

        if (it.geometryType === 'polyline' && Array.isArray(it.coords) && it.coords.length >= 2) {
          UnifiedMapEngine.drawPolylineWithArrows(it, UnifiedMapEngine.atlasMarkersLayer, {
            interactive: true,
            skipArrows: true,
            onClick: () => this.openAtlasInspector(it)
          });

          const mid = it.coords[Math.floor(it.coords.length / 2)];
          const vis = UnifiedMapEngine.getPolylineVisualStyle(it);
          const midDot = L.circleMarker([mid[0], mid[1]], {
            renderer: this.atlasCanvasRenderer || undefined,
            radius: 5.5,
            fillColor: vis.color,
            color: st === 'mastered' ? '#10b981' : '#ffffff',
            weight: st === 'mastered' ? 2.5 : 1.5,
            fillOpacity: 0.95
          }).addTo(UnifiedMapEngine.atlasMarkersLayer);

          midDot.bindTooltip(it.displayTitle || it.title, {
            direction: 'top',
            className: 'target-compact-tooltip',
            offset: [0, -6]
          });
          midDot.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            this.openAtlasInspector(it);
          });
          return;
        }

        const lat = typeof it.lat === 'number' ? it.lat : (it.coords?.[0]?.[0] ?? 0);
        const lng = typeof it.lng === 'number' ? it.lng : (it.coords?.[0]?.[1] ?? 0);
        const fill = catColorMap[it.categoryRu] || catColorMap[it.mainCategory] || '#38bdf8';
        const borderColor = st === 'mastered' ? '#10b981' : '#ffffff';

        const m = L.circleMarker([lat, lng], {
          renderer: this.atlasCanvasRenderer || undefined,
          radius: 6.5,
          fillColor: fill,
          color: borderColor,
          weight: st === 'mastered' ? 2.5 : 1.5,
          fillOpacity: 0.92
        }).addTo(UnifiedMapEngine.atlasMarkersLayer);

        m.bindTooltip(it.displayTitle || it.title, {
          direction: 'top',
          className: 'target-compact-tooltip',
          offset: [0, -6]
        });

        m.on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          this.openAtlasInspector(it);
        });
      });

      if (q && items.length === 1) {
        const only = items[0];
        if (only.geometryType === 'polyline' && Array.isArray(only.coords) && only.coords.length >= 2) {
          UnifiedMapEngine.fitPolylineSmart(only.coords);
        } else if (typeof only.lat === 'number' && typeof only.lng === 'number') {
          UnifiedMapEngine.flyToSmart(only.lat, only.lng, 5);
        }
      }
    },

    openAtlasInspector(item) {
      if (!item) return;
      UnifiedMapEngine.clearFeedback();

      const lat = typeof item.lat === 'number' ? item.lat : (item.coords?.[0]?.[0] ?? 0);
      const lng = typeof item.lng === 'number' ? item.lng : (item.coords?.[0]?.[1] ?? 0);

      if (item.geometryType === 'polyline' && Array.isArray(item.coords) && item.coords.length >= 2) {
        UnifiedMapEngine.showTargetPulsingMarker(item, null, { showLabel: true, autoFly: true });
      } else {
        if (item.bounds) UnifiedMapEngine.drawExtentBox(item.bounds, '#38bdf8');
        UnifiedMapEngine.flyToSmart(lat, lng, Math.max(UnifiedMapEngine.map.getZoom(), 4));
        UnifiedMapEngine.showTargetPulsingMarker(item, null, { showLabel: true, autoFly: false });
      }

      const card = document.getElementById('atlasInspectorCard');
      if (!card) return;
      card.style.display = 'flex';

      document.getElementById('inspectorCategoryTag').textContent = item.categoryRu;
      document.getElementById('inspectorTitle').textContent = item.title;
      document.getElementById('inspectorRegion').textContent = `🌍 ${item.continent || item.worldRegion || 'Мир'} • ${item.worldRegion || ''}`;
      document.getElementById('inspectorDesc').textContent =
        item.ankiCard?.backMainAnswer || item.desc || 'Входит в программу курса.';

      const s = NomenclatureEngine.getState(item.id);
      const badge = document.getElementById('inspectorAnkiBadge');
      const statusLabels = {
        new: ['status-new', '⚪ Новое'],
        learning: ['status-learn', '🔴 На повторе'],
        review: ['status-review', '🟡 Закрепление'],
        mastered: ['status-mastered', '🟢 Выучено']
      };
      const [cls, lbl] = statusLabels[s.status] || statusLabels.new;
      badge.className = `anki-status-badge ${cls}`;
      badge.textContent = lbl;

      const metaGrid = document.getElementById('inspectorMetaGrid');
      metaGrid.innerHTML = '';
      const latStr = lat >= 0 ? `${lat.toFixed(1)}° с.ш.` : `${Math.abs(lat).toFixed(1)}° ю.ш.`;
      const lngStr = lng >= 0 ? `${lng.toFixed(1)}° в.д.` : `${Math.abs(lng).toFixed(1)}° з.д.`;
      const chips = [`📍 ${latStr}, ${lngStr}`, `⚡ ${item.difficulty}`];
      if (item.ankiCard && Array.isArray(item.ankiCard.backMetrics)) {
        item.ankiCard.backMetrics.slice(0, 4).forEach((m) => {
          if (m && m.value && m.value !== '—') {
            chips.push(`${m.label}: ${m.value}`);
          }
        });
      } else {
        if (item.origin) chips.push(`🪨 Происхождение: ${item.origin}`);
        if (item.area && item.area !== '—') chips.push(`📐 ${item.area}`);
        if (item.thermalDesc) chips.push(`🌡️ ${item.thermalDesc}`);
        if (item.surfaceType) chips.push(`🏜️ ${item.surfaceType}`);
      }

      chips.forEach((c) => {
        const sp = document.createElement('span');
        sp.className = 'meta-chip';
        sp.textContent = c;
        metaGrid.appendChild(sp);
      });

      const toggleMastBtn = document.getElementById('inspectorToggleMasteredBtn');
      toggleMastBtn.textContent = s.status === 'mastered' ? '↺ Вернуть в обучение' : '✓ Отметить выученным';
      toggleMastBtn.onclick = () => {
        TelegramBridge.hapticSelect();
        if (NomenclatureEngine.getState(item.id).status === 'mastered') {
          NomenclatureEngine.recordError(item.id);
          CapeSyncBridge.syncToContinentExam(item.id, 'error');
        } else {
          NomenclatureEngine.recordMastered(item.id);
          CapeSyncBridge.syncToContinentExam(item.id, 'mastered');
          AudioEngine.playSuccess();
        }
        this.updateDeckStatsUI();
        this.renderAtlasMarkers();
        this.openAtlasInspector(item);
      };

      document.getElementById('inspectorQuizThisBtn').onclick = () => {
        TelegramBridge.hapticSelect();
        card.style.display = 'none';
        NomenclatureEngine.practiceMode = 'locate';
        this.startObjectsPractice(NomenclatureEngine.activeDeckId, item);
      };
    },

    inspectSpecialEntity(info) {
      const card = document.getElementById('atlasInspectorCard');
      if (!card) return;
      card.style.display = 'flex';
      document.getElementById('inspectorCategoryTag').textContent = 'Историко-географическая область';
      document.getElementById('inspectorAnkiBadge').className = 'anki-status-badge status-new';
      document.getElementById('inspectorAnkiBadge').textContent = '📘 Обзор';
      document.getElementById('inspectorTitle').textContent = info.name;
      document.getElementById('inspectorRegion').textContent = info.etymology || 'Тихий / Атлантический океан';
      document.getElementById('inspectorDesc').textContent = `${info.desc} Состав: ${info.main_islands || ''}`;
      document.getElementById('inspectorMetaGrid').innerHTML = '';
    },

    // ========================================================================
    // ХАРАКТЕРИСТИКИ МАТЕРИКОВ И ОКЕАНИИ (РАЗДЕЛ 1)
    // ========================================================================
    startContinentExam(contId, isAll = false) {
      AutoAdvanceController.cancel();
      UnifiedMapEngine.clearFeedback();
      UnifiedMapEngine.clearSpecialEntities();
      UnifiedMapEngine.clearAtlasMarkers();
      UnifiedMapEngine.setAtlasLabelsVisible(false);
      document.getElementById('map')?.classList.remove('atlas-cursor');

      this.closeHub();
      this.appMode = 'continents';
      ContinentExamEngine.startContinent(contId, isAll);

      const st = ContinentExamEngine.getDeckStats();
      this.maintenanceSession = st.total > 0 && st.masteredCount === st.total;

      document.getElementById('atlasExploreBar').style.display = 'none';
      document.getElementById('atlasInspectorCard').style.display = 'none';
      document.getElementById('anki3dOverlay').style.display = 'none';
      document.getElementById('headerPmodeSwitch').style.display = 'none';
      document.getElementById('ankiDeckCounters').style.display = 'flex';
      document.getElementById('toggleHudCollapseBtn').style.display = 'flex';
      this.hideCompassBadge();

      const activeCont = ContinentExamEngine.getActiveContinent();
      document.getElementById('headerModeIcon').textContent = activeCont.id === 'all' ? '🌍' : '🗺️';
      document.getElementById('islandBatchTitle').textContent =
        activeCont.id === 'all' ? 'Характеристики материков (55)' : `Материк: ${activeCont.name}`;

      this.updateContinentStatsUI();
      this.updateHeaderStreakUI();
      this.runNextContinentQuestion();
      this.syncTelegramBackButton();
    },

    updateContinentStatsUI() {
      const st = ContinentExamEngine.getDeckStats();
      const setEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = String(val);
      };
      setEl('ankiNewCount', st.newCount);
      setEl('ankiLearnCount', st.learnCount);
      setEl('ankiReviewCount', st.reviewCount);
      setEl('ankiMasteredCount', `${st.masteredCount}/${st.total}`);
      this.updateHeaderStreakUI();
    },

    runNextContinentQuestion() {
      AutoAdvanceController.cancel();
      UnifiedMapEngine.clearFeedback();
      UnifiedMapEngine.clearSpecialEntities();
      this.hideCompassBadge();

      document.getElementById('subtaskOverlay').style.display = 'none';
      document.getElementById('briefingOverlay').style.display = 'none';
      document.getElementById('anki3dOverlay').style.display = 'none';

      const nextItem = ContinentExamEngine.getNextItem(this.maintenanceSession);
      const activeCont = ContinentExamEngine.getActiveContinent();

      if (!nextItem) {
        this.finishContinentExam(activeCont);
        return;
      }

      this.activeItem = nextItem;
      this.activeTaskFormat = 'locate';
      this.isItemAnswered = false;
      this.attemptsLeft = 3;
      this.usedRegionHint = false;
      this.lastDistanceKm = null;
      this.subtaskHadError = false;

      if (
        nextItem.type === 'continent_area' ||
        nextItem.type === 'continent_shubaev' ||
        nextItem.type === 'theory_quiz'
      ) {
        this.displayBriefingQuizTask(nextItem);
      } else {
        this.displayContinentMapTask(nextItem);
      }
      this.syncTelegramBackButton();
    },

    displayBriefingQuizTask(item) {
      document.getElementById('taskHudCard').style.display = 'none';
      const overlay = document.getElementById('briefingOverlay');
      overlay.style.display = 'flex';

      const contName = item.continentName || 'Планета Земля';
      if (item.showBermudaOnMap) {
        const specials = window.GEOGRAPHY_DATA.special_entities || [];
        const bermuda = specials.find((s) => s.id === 'bermuda_triangle');
        if (bermuda) UnifiedMapEngine.drawBermudaTriangle(bermuda.vertices);
      } else if (UnifiedMapEngine.CONTINENT_VIEWS[contName]) {
        UnifiedMapEngine.flyToContinent(contName);
      } else {
        UnifiedMapEngine.resetView();
      }

      const state = ContinentExamEngine.getState(item.id);
      const stBadges = {
        new: '⚪ НОВОЕ',
        learning: '🔴 НА ПОВТОРЕ',
        review: '🟡 ЗАКРЕПЛЕНИЕ',
        mastered: '🟢 ВЫУЧЕНО'
      };

      document.getElementById('briefingTag').textContent =
        `${item.categoryRu || 'Материк'} • ${stBadges[state.state] || '⚪ НОВОЕ'}`;
      document.getElementById('briefingContinentTitle').textContent = `🌍 ${contName}`;
      document.getElementById('briefingHeading').textContent = item.prompt;
      document.getElementById('briefingDesc').textContent = 'Выберите точный эталонный ответ:';

      const answerBox = document.getElementById('briefingAnswerBox');
      const answerText = document.getElementById('briefingAnswerText');
      const contBtn = document.getElementById('briefingContinueBtn');
      const skipBtn = document.getElementById('briefingSkipBtn');

      answerBox.style.display = 'none';
      contBtn.style.display = 'none';
      if (skipBtn) skipBtn.style.display = state.state === 'mastered' ? 'none' : 'inline-flex';

      const grid = document.getElementById('briefingChipsGrid');
      grid.innerHTML = '';

      const options = [item.correctAnswer, ...(item.distractors || []).slice(0, 3)];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }

      let hadWrongTry = false;

      options.forEach((optText, idx) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'briefing-chip';
        chip.innerHTML = `<strong style="color:var(--sky); margin-right:6px;">${idx + 1}.</strong> ${optText}`;

        chip.onclick = () => {
          if (this.isItemAnswered) return;

          if (optText === item.correctAnswer) {
            this.isItemAnswered = true;
            chip.classList.add('correct');
            grid.querySelectorAll('.briefing-chip').forEach((b) => { b.disabled = true; });
            if (skipBtn) skipBtn.style.display = 'none';

            if (!hadWrongTry) {
              TelegramBridge.hapticHit();
              AudioEngine.playSuccess(Gamification.streak + 1);
              ContinentExamEngine.recordSuccess(item.id);
              Gamification.onAnswer(true);
            } else {
              TelegramBridge.hapticSelect();
              AudioEngine.playWarmthCloser();
              ContinentExamEngine.recordError(item.id);
              Gamification.onAnswer(false);
            }

            this.updateContinentStatsUI();

            answerBox.style.display = 'block';
            answerText.innerHTML = `<strong>Эталон:</strong> ${item.correctAnswer}${
              item.details ? `<br><span style="color:var(--text-muted);">${item.details}</span>` : ''
            }`;

            contBtn.style.display = 'inline-flex';
            contBtn.onclick = () => this.runNextContinentQuestion();

            if (!hadWrongTry) {
              AutoAdvanceController.schedule(1400, () => this.runNextContinentQuestion());
            }
          } else {
            hadWrongTry = true;
            chip.classList.add('wrong');
            chip.disabled = true;
            TelegramBridge.hapticMiss();
            AudioEngine.playError();
          }
        };

        grid.appendChild(chip);
      });

      MotionFX.pop(document.getElementById('briefingCard'));
    },

    displayContinentMapTask(item) {
      const hud = document.getElementById('taskHudCard');
      hud.style.display = 'block';
      hud.classList.remove('collapsed');
      const colBtn = document.getElementById('toggleHudCollapseBtn');
      if (colBtn) colBtn.textContent = '▴';

      document.getElementById('hudQuizOptionsGrid').style.display = 'none';
      document.getElementById('taskAttemptsBox').style.display = 'flex';
      this.hideCompassBadge();

      const contName = item.continentName || item.continent || 'Евразия';
      UnifiedMapEngine.flyToContinent(contName);

      document.getElementById('taskCategoryTag').textContent = `📍 ${item.categoryRu}`;
      document.getElementById('taskContinentTag').textContent = `🌍 ${contName}`;

      const st = ContinentExamEngine.getState(item.id).state;
      const badge = document.getElementById('ankiCardStatusBadge');
      const badgeMap = {
        new: ['status-new', '⚪ НОВОЕ'],
        learning: ['status-learn', '🔴 ПОВТОР'],
        review: ['status-review', '🟡 ЗАКРЕП.'],
        mastered: ['status-mastered', '🟢 ВЫУЧЕНО']
      };
      const [cls, txt] = badgeMap[st] || badgeMap.new;
      badge.className = `anki-status-badge ${cls}`;
      badge.textContent = txt;

      document.getElementById('taskPromptHeading').textContent = item.prompt;
      this.resetAttemptDotsUI();

      this.setHudFeedback(
        'neutral',
        '🎯',
        item.type === 'continent_cape'
          ? 'Шаг 1 из 2: укажите крайнюю точку на карте, затем назовите мыс.'
          : 'Шаг 1 из 3: найдите точку на карте → назовите объект → укажите отметку в метрах.'
      );

      const skipBtn = document.getElementById('hudSkipBtn');
      if (skipBtn) skipBtn.style.display = st === 'mastered' ? 'none' : 'inline-flex';

      const hintBtn = document.getElementById('hudHintRegionBtn');
      if (hintBtn) {
        hintBtn.style.display = 'inline-flex';
        hintBtn.disabled = false;
      }

      document.getElementById('hudRevealBtn').style.display = 'inline-flex';
      document.getElementById('hudNextBtn').style.display = 'none';
    },

    openContinentSubtaskModal(item, mapFailed = false) {
      if (item.isCape || item.type === 'continent_cape' || item.type === 'cape') {
        this.openCapeFlashcardModal(item, !mapFailed);
        return;
      }

      const overlay = document.getElementById('subtaskOverlay');
      overlay.style.display = 'flex';
      document.getElementById('subtaskCapeFlashcard').style.display = 'none';
      this.syncTelegramBackButton();

      const isPeak = item.type === 'continent_peak';
      const stepBadge = document.getElementById('subtaskStepBadge');
      const statusText = document.getElementById('subtaskStatusText');
      const titleEl = document.getElementById('subtaskQuestionTitle');
      const chipsGrid = document.getElementById('subtaskChipsGrid');
      const metricWrap = document.getElementById('subtaskMetricInputWrap');
      const resultBanner = document.getElementById('subtaskResultBanner');
      const skipBtn = document.getElementById('subtaskSkipBtn');
      const contBtn = document.getElementById('subtaskContinueBtn');

      this.subtaskHadError = Boolean(mapFailed);

      stepBadge.textContent = isPeak ? 'Шаг 2 из 3 • Название вершины' : 'Шаг 2 из 3 • Название впадины';
      statusText.textContent = mapFailed ? 'Разбор точки на карте 📍' : 'Точка на карте найдена 🎯';
      statusText.style.color = mapFailed ? 'var(--amber)' : 'var(--emerald)';
      titleEl.style.display = 'block';
      titleEl.textContent = isPeak
        ? `Как называется высочайшая вершина материка ${item.continentName}?`
        : `Как называется глубочайшая впадина суши материка ${item.continentName}?`;

      chipsGrid.style.display = 'grid';
      chipsGrid.innerHTML = '';
      metricWrap.style.display = 'none';
      resultBanner.style.display = 'none';
      contBtn.style.display = 'none';
      if (skipBtn) skipBtn.style.display = mapFailed ? 'none' : 'inline-flex';

      const pool = isPeak ? CONTINENT_DISTRACTORS.peakNames : CONTINENT_DISTRACTORS.deprNames;
      const distractors = pool.filter((n) => n !== item.pointName);
      for (let i = distractors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [distractors[i], distractors[j]] = [distractors[j], distractors[i]];
      }
      const choices = [item.pointName, ...distractors.slice(0, 3)];
      for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
      }

      choices.forEach((choiceName, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'subtask-chip';
        btn.innerHTML = `<strong style="color:var(--sky); margin-right:6px;">${idx + 1}.</strong> ${choiceName}`;

        btn.onclick = () => {
          if (choiceName === item.pointName) {
            btn.classList.add('correct');
            chipsGrid.querySelectorAll('.subtask-chip').forEach((b) => { b.disabled = true; });
            TelegramBridge.hapticHit();
            AudioEngine.playWarmthCloser();
            setTimeout(() => this.promptMetricInput(item, mapFailed), 260);
          } else {
            this.subtaskHadError = true;
            btn.classList.add('wrong');
            btn.disabled = true;
            TelegramBridge.hapticMiss();
            AudioEngine.playError();
          }
        };

        chipsGrid.appendChild(btn);
      });

      MotionFX.pop(document.getElementById('subtaskModalCard'));
    },

    promptMetricInput(item, mapFailed) {
      const isPeak = item.type === 'continent_peak';
      const targetVal = isPeak ? item.numericHeight : item.numericDepth;

      document.getElementById('subtaskStepBadge').textContent = isPeak
        ? 'Шаг 3 из 3 • Абсолютная высота (м)'
        : 'Шаг 3 из 3 • Абсолютная отметка глубины (м)';
      document.getElementById('subtaskQuestionTitle').textContent =
        `${item.pointName}: укажите точную отметку в метрах`;

      document.getElementById('subtaskChipsGrid').style.display = 'none';
      const metricWrap = document.getElementById('subtaskMetricInputWrap');
      metricWrap.style.display = 'flex';

      const label = document.getElementById('subtaskMetricLabel');
      label.textContent = isPeak
        ? 'Введите высоту над уровнем моря в метрах (или выберите чип ниже):'
        : 'Введите отметку относительно уровня моря в метрах (со знаком минус):';

      const input = document.getElementById('subtaskMetricInput');
      input.value = '';
      input.disabled = false;
      input.placeholder = isPeak ? 'Например: 8848' : 'Например: -430';
      document.getElementById('subtaskMetricSubmitBtn').disabled = false;

      const quickBox = document.getElementById('subtaskMetricQuickChips');
      quickBox.innerHTML = '';
      const numPool = isPeak ? CONTINENT_DISTRACTORS.peakHeights : CONTINENT_DISTRACTORS.deprHeights;
      const others = numPool.filter((n) => n !== targetVal);
      for (let i = others.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [others[i], others[j]] = [others[j], others[i]];
      }
      const chipNums = [targetVal, ...others.slice(0, 3)].sort((a, b) => b - a);

      chipNums.forEach((val) => {
        const c = document.createElement('button');
        c.type = 'button';
        c.className = 'metric-quick-chip';
        c.textContent = `${val} м`;
        c.onclick = () => {
          if (input.disabled) return;
          input.value = String(val);
          this.checkMetricInput();
        };
        quickBox.appendChild(c);
      });

      setTimeout(() => input.focus(), 60);
    },

    checkMetricInput() {
      const item = this.activeItem;
      if (!item || (item.type !== 'continent_peak' && item.type !== 'continent_depr')) return;

      const input = document.getElementById('subtaskMetricInput');
      if (!input || input.disabled) return;

      const raw = input.value.trim().replace(/,/g, '.').replace(/−/g, '-').replace(/[^\d.-]/g, '');
      if (!raw || isNaN(Number(raw))) {
        TelegramBridge.hapticMiss();
        AudioEngine.playError();
        input.focus();
        return;
      }

      const entered = Math.round(Number(raw));
      const isPeak = item.type === 'continent_peak';
      const targetVal = isPeak ? item.numericHeight : item.numericDepth;
      const exactMatch = entered === targetVal || (!isPeak && -Math.abs(entered) === targetVal);

      input.disabled = true;
      document.getElementById('subtaskMetricSubmitBtn').disabled = true;
      document.getElementById('subtaskSkipBtn').style.display = 'none';

      const banner = document.getElementById('subtaskResultBanner');
      const header = document.getElementById('subtaskResultHeader');
      const content = document.getElementById('subtaskResultContent');
      banner.style.display = 'block';

      if (exactMatch && !this.subtaskHadError && !this.usedRegionHint) {
        TelegramBridge.hapticHit();
        AudioEngine.playSuccess(Gamification.streak + 1);
        ContinentExamEngine.recordSuccess(item.id);
        Gamification.onAnswer(true);
        banner.className = 'subtask-result-banner';
        header.textContent = '✅ Безупречно! Все 3 этапа пройдены верно:';
      } else if (exactMatch) {
        TelegramBridge.hapticSelect();
        AudioEngine.playWarmthCloser();
        ContinentExamEngine.recordError(item.id);
        Gamification.onAnswer(false);
        banner.className = 'subtask-result-banner';
        header.textContent = '☑️ Отметка верна (карточка вернётся для чистого прохождения без подсказок):';
      } else {
        this.subtaskHadError = true;
        TelegramBridge.hapticMiss();
        AudioEngine.playError();
        ContinentExamEngine.recordError(item.id);
        Gamification.onAnswer(false);
        banner.className = 'subtask-result-banner is-error';
        header.textContent = `❌ Ваш ответ: ${entered} м. Запомните точное значение:`;
      }

      content.innerHTML = `<strong>${item.pointName}</strong> — <strong>${item.heightStr}</strong> (${item.continentName}).`;
      this.updateContinentStatsUI();

      UnifiedMapEngine.clearFeedback();
      UnifiedMapEngine.showTargetPulsingMarker(item, null, { showLabel: true, autoFly: false });

      const contBtn = document.getElementById('subtaskContinueBtn');
      contBtn.style.display = 'inline-flex';
      contBtn.onclick = () => {
        document.getElementById('subtaskOverlay').style.display = 'none';
        this.runNextContinentQuestion();
      };

      if (exactMatch && !this.subtaskHadError) {
        AutoAdvanceController.schedule(1450, () => {
          document.getElementById('subtaskOverlay').style.display = 'none';
          this.runNextContinentQuestion();
        });
      }
    },

    openCapeFlashcardModal(item, isMapSuccess = true) {
      const overlay = document.getElementById('subtaskOverlay');
      overlay.style.display = 'flex';
      this.syncTelegramBackButton();

      this.isCapeFlipped = false;
      this.capeMapSucceeded = Boolean(isMapSuccess);

      document.getElementById('subtaskQuestionTitle').style.display = 'none';
      document.getElementById('subtaskChipsGrid').style.display = 'none';
      document.getElementById('subtaskMetricInputWrap').style.display = 'none';
      document.getElementById('subtaskResultBanner').style.display = 'none';

      const capeCard = document.getElementById('subtaskCapeFlashcard');
      capeCard.style.display = 'flex';

      const inner = document.getElementById('capeFlipCardInner');
      inner.classList.remove('is-flipped');

      const contName = item.continentName || item.continent || '';
      const capeExactName = item.capeName || item.displayTitle || item.name;

      document.getElementById('subtaskStepBadge').textContent = 'Крайняя точка материка';
      const stTxt = document.getElementById('subtaskStatusText');
      stTxt.textContent = isMapSuccess ? 'Точка на карте верна 🎯' : 'Точка показана на карте 📍';
      stTxt.style.color = isMapSuccess ? 'var(--emerald)' : 'var(--rose)';

      document.getElementById('capeCardDirectionPill').textContent = `🧭 ${item.categoryRu || 'Крайний мыс'}`;
      document.getElementById('capeCardContinentPill').textContent = `🌍 ${contName}`;
      document.getElementById('capeCardSideIndicator').textContent = 'Вопрос';
      document.getElementById('capeFrontQuestionText').textContent =
        `Какой мыс является крайней точкой (${contName})?`;

      document.getElementById('capeCardName').textContent = capeExactName;
      document.getElementById('capeCardCoords').textContent =
        item.coordsDesc || `${Math.abs(item.lat).toFixed(2)}° ${item.lat >= 0 ? 'с.ш.' : 'ю.ш.'}, ${Math.abs(item.lng).toFixed(2)}° ${item.lng >= 0 ? 'в.д.' : 'з.д.'}`;
      document.getElementById('capeCardDesc').textContent = item.desc || '';

      const contBtn = document.getElementById('subtaskContinueBtn');
      const skipBtn = document.getElementById('subtaskSkipBtn');
      contBtn.style.display = 'none';
      if (skipBtn) skipBtn.style.display = isMapSuccess ? 'inline-flex' : 'none';

      if (!isMapSuccess) {
        document.getElementById('capeSelfAssessBox').style.display = 'none';
        document.getElementById('capeAnswerBadge').textContent = '📍 Запомните название и положение мыса';
        document.getElementById('capeCardAnkiText').textContent =
          'Карточка поставлена на короткий повтор через 2 шага для закрепления.';
        this.flipCapeCard(true);
        contBtn.style.display = 'inline-flex';
        contBtn.onclick = () => {
          overlay.style.display = 'none';
          this.advanceAfterPause();
        };
        return;
      }

      const choicesGrid = document.getElementById('capeFrontChoicesGrid');
      choicesGrid.innerHTML = '';

      const distractors = CONTINENT_DISTRACTORS.allCapesPool.filter((c) => c !== capeExactName);
      for (let i = distractors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [distractors[i], distractors[j]] = [distractors[j], distractors[i]];
      }
      const options = [capeExactName, ...distractors.slice(0, 3)];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }

      let wrongCapeChoice = false;
      options.forEach((optName, idx) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'subtask-chip';
        b.innerHTML = `<strong style="color:var(--sky); margin-right:5px;">${idx + 1}.</strong> ${optName}`;

        b.onclick = () => {
          if (optName === capeExactName) {
            b.classList.add('correct');
            choicesGrid.querySelectorAll('.subtask-chip').forEach((el) => { el.disabled = true; });
            document.getElementById('capeSelfAssessBox').style.display = 'none';
            this.handleCapeSelfAssess(!wrongCapeChoice && !this.usedRegionHint);
          } else {
            wrongCapeChoice = true;
            b.classList.add('wrong');
            b.disabled = true;
            TelegramBridge.hapticMiss();
            AudioEngine.playError();
          }
        };
        choicesGrid.appendChild(b);
      });

      document.getElementById('capeSelfAssessBox').style.display = 'block';
      document.getElementById('capeAnswerBadge').textContent = '✅ Эталонный ответ';
      document.getElementById('capeFlipBtn').onclick = () => this.flipCapeCard(false);
      document.getElementById('capeFlipBackHint').onclick = () => this.flipCapeCardBack();
      document.getElementById('capeAssessFailBtn').onclick = () => this.handleCapeSelfAssess(false);
      document.getElementById('capeAssessSuccessBtn').onclick = () => this.handleCapeSelfAssess(true);
    },

    flipCapeCard(hideAssess = false) {
      TelegramBridge.hapticSelect();
      this.isCapeFlipped = true;
      document.getElementById('capeFlipCardInner')?.classList.add('is-flipped');
      document.getElementById('capeCardSideIndicator').textContent = 'Эталон';
      if (hideAssess) {
        document.getElementById('capeSelfAssessBox').style.display = 'none';
      }
    },

    flipCapeCardBack() {
      if (!this.capeMapSucceeded) return;
      TelegramBridge.hapticSelect();
      this.isCapeFlipped = false;
      document.getElementById('capeFlipCardInner')?.classList.remove('is-flipped');
      document.getElementById('capeCardSideIndicator').textContent = 'Вопрос';
    },

    handleCapeSelfAssess(knewName) {
      const item = this.activeItem;
      if (!item) return;

      this.flipCapeCard(true);
      document.getElementById('subtaskSkipBtn').style.display = 'none';

      UnifiedMapEngine.clearFeedback();
      UnifiedMapEngine.showTargetPulsingMarker(item, null, { showLabel: true, autoFly: false });

      if (knewName && this.capeMapSucceeded) {
        TelegramBridge.hapticHit();
        AudioEngine.playSuccess(Gamification.streak + 1);
        Gamification.onAnswer(true);

        if (this.appMode === 'continents') {
          ContinentExamEngine.recordSuccess(item.id);
          CapeSyncBridge.syncToNomenclature(item.id, 'success');
          this.updateContinentStatsUI();
        } else {
          NomenclatureEngine.recordSuccess(item.id);
          CapeSyncBridge.syncToContinentExam(item.id, 'success');
          this.updateDeckStatsUI();
        }

        document.getElementById('capeCardAnkiText').textContent =
          'Отлично! Мыс засчитан в обоих разделах тренажёра.';

        const contBtn = document.getElementById('subtaskContinueBtn');
        contBtn.style.display = 'inline-flex';
        contBtn.onclick = () => {
          document.getElementById('subtaskOverlay').style.display = 'none';
          this.advanceAfterPause();
        };

        AutoAdvanceController.schedule(1250, () => {
          document.getElementById('subtaskOverlay').style.display = 'none';
          this.advanceAfterPause();
        });
      } else {
        TelegramBridge.hapticMiss();
        AudioEngine.playError();
        Gamification.onAnswer(false);

        if (this.appMode === 'continents') {
          ContinentExamEngine.recordError(item.id);
          CapeSyncBridge.syncToNomenclature(item.id, 'error');
          this.updateContinentStatsUI();
        } else {
          NomenclatureEngine.recordError(item.id);
          CapeSyncBridge.syncToContinentExam(item.id, 'error');
          this.updateDeckStatsUI();
        }

        document.getElementById('capeCardAnkiText').textContent =
          'Мыс вернётся через 2 вопроса, чтобы вы уверенно запомнили его название.';

        const contBtn = document.getElementById('subtaskContinueBtn');
        contBtn.style.display = 'inline-flex';
        contBtn.onclick = () => {
          document.getElementById('subtaskOverlay').style.display = 'none';
          this.advanceAfterPause();
        };
      }
    },

    finishContinentExam(activeCont) {
      AudioEngine.playCelebration();
      MotionFX.confettiBurst(95);

      const modal = document.getElementById('resultsModal');
      const st = ContinentExamEngine.getDeckStats();

      document.getElementById('resultsTrophy').textContent = '🏆';
      document.getElementById('resultsTitle').textContent =
        activeCont.id === 'all' ? 'Характеристики материков (Раздел 1) пройдены!' : `Тема «${activeCont.name}» полностью освоена!`;
      document.getElementById('resultsScoreBadge').textContent = `Выучено: ${st.masteredCount} из ${st.total} (100%)`;
      document.getElementById('resultsDesc').textContent =
        'Все площади, крайние точки, вершины, впадины и теоретические характеристики уверенно закреплены в памяти.';

      const nextBtn = document.getElementById('resultsNextBtn');
      nextBtn.style.display = 'inline-flex';
      nextBtn.textContent = activeCont.id === 'all' ? 'Перейти к Номенклатуре →' : 'Следующая тема →';

      modal?.classList.add('open');
      this.syncTelegramBackButton();
    },

    // ========================================================================
    // ОБУЧЕНИЕ ПО КАРТЕ: ПОИСК ОБЪЕКТА -> КАРТОЧКА ХАРАКТЕРИСТИК (ПО УРОВНЮ)
    // ========================================================================
    startObjectsPractice(deckId = NomenclatureEngine.activeDeckId, forcedItem = null) {
      AutoAdvanceController.cancel();
      if (this.anki3dRevealTimer) {
        clearTimeout(this.anki3dRevealTimer);
        this.anki3dRevealTimer = null;
      }

      UnifiedMapEngine.clearFeedback();
      UnifiedMapEngine.clearSpecialEntities();
      UnifiedMapEngine.clearAtlasMarkers();
      UnifiedMapEngine.setAtlasLabelsVisible(false);
      document.getElementById('map')?.classList.remove('atlas-cursor');

      this.closeHub();
      this.appMode = 'objects';

      if (deckId && NomenclatureEngine.decksMap.has(deckId)) {
        NomenclatureEngine.activeDeckId = deckId;
        NomenclatureEngine.saveState();
      }

      const curDeck = NomenclatureEngine.getActiveDeck();
      const st = NomenclatureEngine.getDeckStats(curDeck.id);
      this.maintenanceSession = Boolean(!forcedItem && st.total > 0 && st.masteredCount === st.total);

      document.getElementById('atlasExploreBar').style.display = 'none';
      document.getElementById('atlasInspectorCard').style.display = 'none';
      document.getElementById('subtaskOverlay').style.display = 'none';
      document.getElementById('briefingOverlay').style.display = 'none';
      document.getElementById('anki3dOverlay').style.display = 'none';
      document.getElementById('ankiDeckCounters').style.display = 'flex';
      document.getElementById('headerPmodeSwitch').style.display = 'flex';
      document.getElementById('toggleHudCollapseBtn').style.display = 'flex';

      document.getElementById('headerModeIcon').textContent = curDeck.icon || '🗺️';
      document.getElementById('islandBatchTitle').textContent = curDeck.shortTitle;

      QuizConfigEngine.syncUI();
      this.syncPracticeModeButtons();
      this.updateDeckStatsUI();

      if (forcedItem) {
        this.activeItem = forcedItem;
        this.prepareAndDisplayObjectTask(forcedItem);
      } else {
        this.runNextObject();
      }
      this.syncTelegramBackButton();
    },

    runNextObject() {
      AutoAdvanceController.cancel();
      if (this.anki3dRevealTimer) {
        clearTimeout(this.anki3dRevealTimer);
        this.anki3dRevealTimer = null;
      }

      UnifiedMapEngine.clearFeedback();
      UnifiedMapEngine.clearSpecialEntities();
      this.hideCompassBadge();
      document.getElementById('subtaskOverlay').style.display = 'none';
      document.getElementById('briefingOverlay').style.display = 'none';
      document.getElementById('anki3dOverlay').style.display = 'none';

      const nextObj = NomenclatureEngine.getNextObject(NomenclatureEngine.activeDeckId, this.maintenanceSession);
      if (!nextObj) {
        this.triggerDeckMastered();
        return;
      }

      this.activeItem = nextObj;

      // Океаны в обучении не нужно угадывать кликом по карте — сразу показываем объект/карточку
      if (nextObj.isOceanEntity) {
        this.isItemAnswered = true;
        this.activeTaskFormat = 'locate';
        UnifiedMapEngine.showTargetPulsingMarker(nextObj, null, { showLabel: true, autoFly: true });
        if (QuizConfigEngine.shouldShowCardStep(nextObj)) {
          document.getElementById('taskHudCard').style.display = 'none';
          this.openAnki3dModal(nextObj, true, 0);
        } else {
          this.displayMapTask(nextObj);
          NomenclatureEngine.recordSm2Grade(nextObj.id, 3);
          this.updateDeckStatsUI();
          document.getElementById('hudSkipBtn').style.display = 'none';
          document.getElementById('hudHintRegionBtn').style.display = 'none';
          document.getElementById('hudRevealBtn').style.display = 'none';
          const nb = document.getElementById('hudNextBtn');
          if (nb) {
            nb.style.display = 'inline-flex';
            nb.innerHTML = '<span>Дальше</span><span>→</span>';
          }
          this.setHudFeedback('success', '🌊', `Мировой океан: <strong>${nextObj.displayTitle}</strong>`);
        }
        this.syncTelegramBackButton();
        return;
      }

      this.prepareAndDisplayObjectTask(nextObj);
      this.syncTelegramBackButton();
    },

    prepareAndDisplayObjectTask(item) {
      this.activeItem = item;
      this.isItemAnswered = false;
      this.attemptsLeft = 3;
      this.usedRegionHint = false;
      this.lastDistanceKm = null;
      this.activeTaskFormat = 'locate';
      this.displayMapTask(item);
    },

    displayMapTask(item) {
      const hud = document.getElementById('taskHudCard');
      hud.style.display = 'block';
      hud.classList.remove('collapsed');
      const colBtn = document.getElementById('toggleHudCollapseBtn');
      if (colBtn) colBtn.textContent = '▴';

      this.hideCompassBadge();

      const s = NomenclatureEngine.getState(item.id);
      const badge = document.getElementById('ankiCardStatusBadge');
      const statusMap = {
        new: ['status-new', '⚪ НОВОЕ'],
        learning: ['status-learn', '🔴 ПОВТОР'],
        review: ['status-review', '🟡 ЗАКРЕП.'],
        mastered: ['status-mastered', '🟢 ВЫУЧЕНО']
      };
      const [cls, lbl] = statusMap[s.status] || statusMap.new;
      badge.className = `anki-status-badge ${cls}`;
      badge.textContent = lbl;

      document.getElementById('taskCategoryTag').textContent = `📍 ${item.categoryRu}`;
      document.getElementById('taskContinentTag').textContent = `🌍 ${item.continent || item.worldRegion || 'Мир'}`;

      const skipBtn = document.getElementById('hudSkipBtn');
      if (skipBtn) skipBtn.style.display = s.status === 'mastered' ? 'none' : 'inline-flex';
      document.getElementById('hudNextBtn').style.display = 'none';

      const quizGrid = document.getElementById('hudQuizOptionsGrid');
      const attemptsBox = document.getElementById('taskAttemptsBox');
      const hintBtn = document.getElementById('hudHintRegionBtn');
      const revealBtn = document.getElementById('hudRevealBtn');

      quizGrid.style.display = 'none';
      attemptsBox.style.display = 'flex';
      if (hintBtn) {
        hintBtn.style.display = 'inline-flex';
        hintBtn.disabled = false;
      }
      if (revealBtn) revealBtn.style.display = 'inline-flex';

      document.getElementById('taskPromptHeading').textContent = item.prompt;
      this.resetAttemptDotsUI();

      const activeDeck = NomenclatureEngine.getActiveDeck();
      const regionalRiverDecks = [
        'm4_rivers_eurasia', 'm4_rivers_africa', 'm4_rivers_north_america',
        'm4_rivers_south_america', 'm4_rivers_australia'
      ];
      if (regionalRiverDecks.includes(activeDeck.id) && UnifiedMapEngine.map.getZoom() < 2.8) {
        UnifiedMapEngine.flyToContinent(item.continent);
      }

      const needsCard = QuizConfigEngine.shouldShowCardStep(item);
      const extraPromptHint = item.geometryType === 'polyline'
        ? (needsCard ? 'Кликните на линию объекта на карте, затем проверьте характеристики.' : 'Кликните в любую часть линии объекта на карте (3 попытки).')
        : item.isCape
          ? 'Укажите крайнюю точку материка на карте (3 попытки).'
          : item.bounds
            ? 'Укажите область объекта на карте (3 попытки).'
            : 'Найдите объект на карте (3 попытки).';

      this.setHudFeedback('neutral', '🎯', extraPromptHint);
    },

    openAnki3dModal(item, isHit = true, distKm = null) {
      if (!item) return;
      if (this.anki3dRevealTimer) {
        clearTimeout(this.anki3dRevealTimer);
        this.anki3dRevealTimer = null;
      }

      this.anki3dState = {
        item,
        isHit: Boolean(isHit),
        distKm,
        isFlipped: false,
        isPeek: false
      };

      const overlay = document.getElementById('anki3dOverlay');
      const cardInner = document.getElementById('anki3dCardInner');
      if (!overlay || !cardInner) return;

      overlay.classList.remove('peek-mode');
      cardInner.classList.remove('is-flipped');

      const modNames = {
        module1: 'Раздел 1 • Материки',
        module2: 'Раздел 2 • Рельеф',
        module3: 'Раздел 3 • Океан',
        module4: 'Раздел 4 • Воды суши'
      };
      document.getElementById('anki3dModulePill').textContent = modNames[item.moduleId] || 'Номенклатура';

      const hitPill = document.getElementById('anki3dHitStatusPill');
      if (hitPill) {
        if (item.isOceanEntity) {
          hitPill.classList.remove('miss');
          hitPill.textContent = '🌊 Мировой океан';
        } else if (isHit) {
          hitPill.classList.remove('miss');
          hitPill.textContent = distKm === 0 ? '🔎 Верно' : '🎯 Точно на карте';
        } else {
          hitPill.classList.add('miss');
          hitPill.textContent = distKm ? `📍 Промах ${distKm.toLocaleString('ru-RU')} км` : '📍 Показано на карте';
        }
      }

      const peekBtn = document.getElementById('anki3dPeekMapBtn');
      if (peekBtn) {
        peekBtn.innerHTML = '<span>🗺️</span><span>Карта</span>';
      }

      const cardData = item.ankiCard || {};
      const title = item.displayTitle || item.title;
      const filteredView = QuizConfigEngine.filterCardData(item);

      document.getElementById('anki3dFrontTitle').textContent = title;
      document.getElementById('anki3dFrontQuestion').textContent =
        cardData.frontQuestion || `Вспомните основные характеристики объекта «${title}»:`;

      document.getElementById('anki3dBackTitle').textContent = title;
      document.getElementById('anki3dBackMainAnswer').textContent = filteredView.mainAnswer;

      const metricsGrid = document.getElementById('anki3dBackMetricsGrid');
      metricsGrid.innerHTML = '';

      filteredView.metrics.forEach((m) => {
        const box = document.createElement('div');
        box.className = 'anki3d-metric-box';
        box.innerHTML = `<span class="anki3d-metric-lbl">${m.label}</span><span class="anki3d-metric-val">${m.value}</span>`;
        metricsGrid.appendChild(box);
      });

      document.getElementById('anki3dBackNote').textContent = filteredView.note;

      overlay.style.display = 'flex';
      MotionFX.pop(overlay.querySelector('.anki3d-modal-sheet'));
      this.syncTelegramBackButton();
    },

    flipAnki3dCard(toBack = true) {
      TelegramBridge.hapticSelect();
      this.anki3dState.isFlipped = Boolean(toBack);
      const inner = document.getElementById('anki3dCardInner');
      if (inner) {
        inner.classList.toggle('is-flipped', Boolean(toBack));
      }
    },

    toggleAnki3dPeek(forceState = null) {
      const overlay = document.getElementById('anki3dOverlay');
      if (!overlay) return;
      TelegramBridge.hapticSelect();
      const next = forceState !== null ? Boolean(forceState) : !this.anki3dState.isPeek;
      this.anki3dState.isPeek = next;
      overlay.classList.toggle('peek-mode', next);
      const btn = document.getElementById('anki3dPeekMapBtn');
      if (btn) {
        btn.innerHTML = next
          ? '<span>🃏</span><span>Вернуть карточку</span>'
          : '<span>🗺️</span><span>Карта</span>';
      }
    },

    gradeAnki3dCard(grade) {
      const st = this.anki3dState;
      const item = st.item;
      if (!item) return;

      TelegramBridge.hapticSelect();
      const safeGrade = [1, 2, 3, 4].includes(grade) ? grade : 3;
      NomenclatureEngine.recordSm2Grade(item.id, safeGrade);

      if (item.isCape) {
        const syncAct = safeGrade >= 4 ? 'mastered' : (safeGrade === 3 ? 'success' : 'error');
        CapeSyncBridge.syncToContinentExam(item.id, syncAct);
      }

      const countedAsCorrect = st.isHit && safeGrade >= 3;
      Gamification.onAnswer(countedAsCorrect);

      if (safeGrade >= 3) {
        AudioEngine.playSuccess(Gamification.streak + 1);
      } else {
        AudioEngine.playWarmthCloser();
      }

      document.getElementById('anki3dOverlay').style.display = 'none';
      this.updateDeckStatsUI();
      this.checkMilestones();
      this.runNextObject();
    },

    getDistractors(targetItem, count = 3) {
      const sameCatAndRegion = NomenclatureEngine.objects.filter(
        (x) =>
          x.id !== targetItem.id &&
          x.categoryRu === targetItem.categoryRu &&
          x.worldRegion === targetItem.worldRegion &&
          x.displayTitle !== targetItem.displayTitle
      );
      const sameCat = NomenclatureEngine.objects.filter(
        (x) =>
          x.id !== targetItem.id &&
          (x.categoryRu === targetItem.categoryRu || x.mainCategory === targetItem.mainCategory) &&
          x.displayTitle !== targetItem.displayTitle
      );
      const sameModule = NomenclatureEngine.objects.filter(
        (x) =>
          x.id !== targetItem.id &&
          x.moduleId === targetItem.moduleId &&
          x.displayTitle !== targetItem.displayTitle
      );

      const shuffle = (arr) => {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };

      const picked = [];
      const seenTitles = new Set([targetItem.displayTitle]);

      for (const cand of [...shuffle(sameCatAndRegion), ...shuffle(sameCat), ...shuffle(sameModule)]) {
        if (picked.length >= count) break;
        if (!seenTitles.has(cand.displayTitle)) {
          seenTitles.add(cand.displayTitle);
          picked.push(cand);
        }
      }
      return picked;
    },

    resetAttemptDotsUI() {
      [1, 2, 3].forEach((n) => {
        const d = document.getElementById(`dot${n}`);
        if (!d) return;
        d.className = `attempt-pill ${n === 1 ? 'active' : ''}`;
      });
    },

    setHudFeedback(tone, icon, htmlText) {
      const banner = document.getElementById('taskFeedbackBanner');
      const iconEl = document.getElementById('feedbackIcon');
      const textEl = document.getElementById('feedbackText');
      if (banner) banner.className = `task-feedback-banner ${tone}`;
      if (iconEl) iconEl.textContent = icon;
      if (textEl) textEl.innerHTML = htmlText;
    },

    triggerRegionHint() {
      if (!this.activeItem || this.isItemAnswered || this.usedRegionHint) return;
      this.usedRegionHint = true;
      TelegramBridge.hapticSelect();

      const hintBtn = document.getElementById('hudHintRegionBtn');
      if (hintBtn) hintBtn.disabled = true;

      UnifiedMapEngine.flyToRegionHint(this.activeItem);
      AudioEngine.playWarmthCloser();

      this.setHudFeedback(
        'warning',
        '💡',
        `Камера наведена на регион поиска (<strong>${this.activeItem.continent || this.activeItem.worldRegion}</strong>). Укажите точное положение!`
      );
    },

    // ========================================================================
    // ОБРАБОТКА КЛИКА ПО КАРТЕ + КОМПАС 8 РУМБОВ + ТЕПЛЕЕ / ХОЛОДНЕЕ
    // ========================================================================
    handleMapClick(clickedLatLng) {
      if (!clickedLatLng) return;
      if (this.appMode === 'hub' || this.appMode === 'atlas') return;

      if (!this.activeItem || this.isItemAnswered || this.activeTaskFormat === 'quiz') return;

      const item = this.activeItem;
      const curZoom = UnifiedMapEngine.map ? UnifiedMapEngine.map.getZoom() : 3;
      const hitCheck = GeoMath.checkSpatialHit(clickedLatLng.lat, clickedLatLng.lng, item, curZoom);
      const attemptIndex = 4 - this.attemptsLeft; // 1, 2 или 3

      if (hitCheck.isHit) {
        this.isItemAnswered = true;
        this.hideCompassBadge();
        const curDot = document.getElementById(`dot${attemptIndex}`);
        if (curDot) curDot.className = 'attempt-pill hit';

        document.getElementById('hudSkipBtn').style.display = 'none';
        document.getElementById('hudHintRegionBtn').style.display = 'none';
        document.getElementById('hudRevealBtn').style.display = 'none';

        const isCleanFirstTry = attemptIndex === 1 && !this.usedRegionHint;
        TelegramBridge.hapticHit();

        // Раздел характеристик материков сохраняет 3-ступенчатый опрос
        if (this.appMode === 'continents') {
          UnifiedMapEngine.showTargetPulsingMarker(item, null, { showLabel: false, autoFly: true });
          AudioEngine.playWarmthCloser();
          setTimeout(() => this.openContinentSubtaskModal(item, !isCleanFirstTry && attemptIndex > 2), 280);
          return;
        }

        // Номенклатура: показываем цель и либо открываем карточку характеристик, либо засчитываем сразу
        UnifiedMapEngine.showTargetPulsingMarker(item, null, { showLabel: true, autoFly: false });
        AudioEngine.playSuccess(Gamification.streak + 1);

        if (QuizConfigEngine.shouldShowCardStep(item)) {
          this.setHudFeedback(
            'success',
            '🎯',
            isCleanFirstTry
              ? `Точно с 1-й попытки: <strong>${item.displayTitle}</strong>! Проверяем характеристики...`
              : `Найдено (${attemptIndex}-я попытка): <strong>${item.displayTitle}</strong>. Проверяем характеристики...`
          );

          this.anki3dRevealTimer = setTimeout(() => {
            if (this.appMode === 'objects' && this.activeItem === item) {
              this.openAnki3dModal(item, isCleanFirstTry || attemptIndex === 2, hitCheck.distKm);
            }
          }, 360);
        } else {
          const grade = isCleanFirstTry ? 4 : 3;
          NomenclatureEngine.recordSm2Grade(item.id, grade);
          if (item.isCape) {
            CapeSyncBridge.syncToContinentExam(item.id, grade >= 4 ? 'mastered' : 'success');
          }
          Gamification.onAnswer(isCleanFirstTry || attemptIndex === 2);
          this.updateDeckStatsUI();
          this.checkMilestones();

          this.setHudFeedback(
            'success',
            '✅',
            isCleanFirstTry
              ? `Точно с 1-й попытки: <strong>${item.displayTitle}</strong>!`
              : `Найдено (${attemptIndex}-я попытка): <strong>${item.displayTitle}</strong>!`
          );

          const nextBtn = document.getElementById('hudNextBtn');
          if (nextBtn) {
            nextBtn.style.display = 'inline-flex';
            nextBtn.innerHTML = '<span>Дальше</span><span>→</span>';
          }

          AutoAdvanceController.schedule(950, () => {
            if (this.appMode === 'objects') {
              this.runNextObject();
            }
          });
        }
        return;
      }

      // ПРОМАХ ПО КАРТЕ
      TelegramBridge.hapticMiss();
      const curDot = document.getElementById(`dot${attemptIndex}`);
      if (curDot) curDot.className = 'attempt-pill miss';
      this.attemptsLeft--;

      const distKm = hitCheck.distKm;
      const targetLat = typeof hitCheck.targetLat === 'number' ? hitCheck.targetLat : (item.lat ?? 0);
      const targetLng = typeof hitCheck.targetLng === 'number' ? hitCheck.targetLng : (item.lng ?? 0);
      const rhumb = GeoMath.calcCompass8Rhumb(clickedLatLng.lat, clickedLatLng.lng, targetLat, targetLng);
      const compassText = GeoMath.calcBearingHint(clickedLatLng.lat, clickedLatLng.lng, targetLat, targetLng);

      if (this.attemptsLeft > 0) {
        const nextDot = document.getElementById(`dot${attemptIndex + 1}`);
        if (nextDot) nextDot.className = 'attempt-pill active';

        const isFirstMiss = this.lastDistanceKm === null;
        const isWarmer = !isFirstMiss && distKm < this.lastDistanceKm;
        const pinColor = distKm < 900 ? '#f59e0b' : '#f43f5e';
        UnifiedMapEngine.placeAttemptPin(clickedLatLng, attemptIndex, pinColor, rhumb.code);
        this.updateCompassBadge(clickedLatLng.lat, clickedLatLng.lng, targetLat, targetLng, distKm, isFirstMiss, isWarmer);

        if (isFirstMiss) AudioEngine.playError();
        else if (isWarmer) AudioEngine.playWarmthCloser();
        else AudioEngine.playWarmthFarther();

        const warmthWord = isFirstMiss
          ? (distKm < 800 ? '🔥 Уже близко!' : '🧭 Промах:')
          : (isWarmer ? '🔥 Теплее!' : '❄️ Холоднее!');

        this.lastDistanceKm = distKm;
        MotionFX.shakeHud();

        this.setHudFeedback(
          'warning',
          isWarmer ? '🔥' : '🧭',
          `${warmthWord} До цели ~<strong>${distKm.toLocaleString('ru-RU')} км</strong>, ищите <strong>${compassText}</strong> (попыток: ${this.attemptsLeft}).`
        );
      } else {
        UnifiedMapEngine.placeAttemptPin(clickedLatLng, 3, '#f43f5e', rhumb.code);
        this.finalizeMapFailure(clickedLatLng, distKm);
      }
    },

    revealAnswer() {
      if (!this.activeItem || this.isItemAnswered) return;
      this.finalizeMapFailure(null, null);
    },

    finalizeMapFailure(lastClickLatLng = null, distKm = null) {
      const item = this.activeItem;
      if (!item || this.isItemAnswered) return;

      this.isItemAnswered = true;
      this.lastDistanceKm = distKm;
      this.hideCompassBadge();
      TelegramBridge.hapticMiss();
      AudioEngine.playError();
      MotionFX.shakeHud();

      document.getElementById('hudSkipBtn').style.display = 'none';
      document.getElementById('hudHintRegionBtn').style.display = 'none';
      document.getElementById('hudRevealBtn').style.display = 'none';

      if (this.appMode === 'continents') {
        Gamification.onAnswer(false);
        ContinentExamEngine.recordError(item.id);
        if (item.type === 'continent_cape') CapeSyncBridge.syncToNomenclature(item.id, 'error');
        this.updateContinentStatsUI();

        UnifiedMapEngine.showTargetPulsingMarker(item, lastClickLatLng, {
          showLabel: item.type === 'continent_cape',
          autoFly: true
        });

        setTimeout(() => this.openContinentSubtaskModal(item, true), 550);
        return;
      }

      const distNote = distKm !== null ? ` (промах ${distKm.toLocaleString('ru-RU')} км)` : '';

      if (QuizConfigEngine.shouldShowCardStep(item)) {
        UnifiedMapEngine.showTargetPulsingMarker(item, lastClickLatLng, {
          showLabel: true,
          autoFly: true,
          onTargetClick: () => this.openAnki3dModal(item, false, distKm)
        });

        this.setHudFeedback(
          'error',
          '📍',
          `Точка показана${distNote}: <strong>${item.displayTitle}</strong>. Открываем карточку...`
        );

        const nextBtn = document.getElementById('hudNextBtn');
        if (nextBtn) {
          nextBtn.style.display = 'inline-flex';
          nextBtn.innerHTML = '<span>Карточка</span><span>→</span>';
        }

        this.anki3dRevealTimer = setTimeout(() => {
          if (this.appMode === 'objects' && this.activeItem === item) {
            this.openAnki3dModal(item, false, distKm);
          }
        }, 650);
      } else {
        UnifiedMapEngine.showTargetPulsingMarker(item, lastClickLatLng, {
          showLabel: true,
          autoFly: true
        });
        NomenclatureEngine.recordSm2Grade(item.id, 1);
        if (item.isCape) CapeSyncBridge.syncToContinentExam(item.id, 'error');
        Gamification.onAnswer(false);
        this.updateDeckStatsUI();

        this.setHudFeedback(
          'error',
          '📍',
          `Точка показана${distNote}: <strong>${item.displayTitle}</strong>`
        );

        const nextBtn = document.getElementById('hudNextBtn');
        if (nextBtn) {
          nextBtn.style.display = 'inline-flex';
          nextBtn.innerHTML = '<span>Дальше</span><span>→</span>';
        }
      }
    },

    advanceAfterPause() {
      AutoAdvanceController.cancel();
      if (this.appMode === 'continents') {
        this.runNextContinentQuestion();
      } else if (this.appMode === 'objects') {
        this.runNextObject();
      }
    },

    handleSkipMastered() {
      if (!this.activeItem || this.isItemAnswered) return;
      AutoAdvanceController.cancel();
      TelegramBridge.hapticSelect();

      const item = this.activeItem;

      if (this.appMode === 'continents') {
        const snapshot = ContinentExamEngine.cloneState(item.id);
        const nomenCapeId = CapeSyncBridge.contToNomenId(item.id);
        const nomenSnap = nomenCapeId ? NomenclatureEngine.cloneState(nomenCapeId) : null;

        ContinentExamEngine.recordMastered(item.id);
        if (nomenCapeId) CapeSyncBridge.syncToNomenclature(item.id, 'mastered');
        this.updateContinentStatsUI();
        AudioEngine.playWarmthCloser();

        this.showToast(`✓ Отмечено как «Уже знаю»: ${item.displayTitle || item.title}`, () => {
          ContinentExamEngine.restoreState(item.id, snapshot);
          if (nomenCapeId && nomenSnap) NomenclatureEngine.restoreState(nomenCapeId, nomenSnap);
          this.updateContinentStatsUI();
          this.showToast('↺ Статус карточки восстановлен');
        });

        document.getElementById('subtaskOverlay').style.display = 'none';
        document.getElementById('briefingOverlay').style.display = 'none';
        this.runNextContinentQuestion();
      } else if (this.appMode === 'objects') {
        const snapshot = NomenclatureEngine.cloneState(item.id);
        const contCapeId = item.isCape ? CapeSyncBridge.nomenToContId(item.id) : null;
        const contSnap = contCapeId ? ContinentExamEngine.cloneState(contCapeId) : null;

        NomenclatureEngine.recordMastered(item.id);
        if (item.isCape) CapeSyncBridge.syncToContinentExam(item.id, 'mastered');
        this.updateDeckStatsUI();
        this.checkMilestones();
        AudioEngine.playWarmthCloser();

        this.showToast(`✓ Переведено в Выучено: ${item.displayTitle || item.title}`, () => {
          NomenclatureEngine.restoreState(item.id, snapshot);
          if (contCapeId && contSnap) ContinentExamEngine.restoreState(contCapeId, contSnap);
          this.updateDeckStatsUI();
          this.showToast('↺ Статус объекта восстановлен');
        });

        document.getElementById('subtaskOverlay').style.display = 'none';
        document.getElementById('anki3dOverlay').style.display = 'none';
        this.runNextObject();
      }
    },

    checkMilestones() {
      const stats = NomenclatureEngine.getTotalStats();
      const totalMast = stats.masteredCount;
      [25, 50, 100, 250, 500, 750, 1000].forEach((m) => {
        if (totalMast >= m && !this.celebratedMilestones.has(m)) {
          this.celebratedMilestones.add(m);
          if (totalMast === m) {
            MotionFX.confettiBurst(55);
            this.showToast(`🎉 Рубеж взят: выучено уже ${m} из ${stats.total} объектов!`);
          }
        }
      });
    },

    triggerDeckMastered() {
      AudioEngine.playCelebration();
      MotionFX.confettiBurst(100);

      const deck = NomenclatureEngine.getActiveDeck();
      const st = NomenclatureEngine.getDeckStats(deck.id);
      const modal = document.getElementById('resultsModal');

      document.getElementById('resultsTrophy').textContent = '🌟';
      document.getElementById('resultsTitle').textContent = `Тема «${deck.shortTitle}» выучена на 100%!`;
      document.getElementById('resultsScoreBadge').textContent = `Освоено объектов: ${st.masteredCount} из ${st.total}`;
      document.getElementById('resultsDesc').textContent =
        'Отличный результат! Переходите к следующей теме или закрепите материал.';

      const nextBtn = document.getElementById('resultsNextBtn');
      nextBtn.style.display = 'inline-flex';
      nextBtn.textContent = 'Следующая тема →';

      modal?.classList.add('open');
      this.syncTelegramBackButton();
    },

    handleResultsNext() {
      document.getElementById('resultsModal')?.classList.remove('open');
      this.syncTelegramBackButton();

      if (this.appMode === 'continents') {
        const curId = ContinentExamEngine.activeDeckId;
        if (curId === 'all') {
          this.startObjectsPractice('m1_all');
          return;
        }
        const subDecks = ContinentExamEngine.decks.filter((d) => d.id !== 'all');
        const nextUnmastered = subDecks.find((d) => ContinentExamEngine.getDeckStats(d.id).masteredPct < 100);
        if (nextUnmastered) {
          this.startContinentExam(nextUnmastered.id, false);
        } else {
          this.startContinentExam('all', true);
        }
        return;
      }

      const curGroup = NomenclatureEngine.getActiveDeck().group;
      const sameGroupDecks = NomenclatureEngine.decks.filter(
        (d) => d.group === curGroup && d.id !== 'all'
      );
      const nextDeck = sameGroupDecks.find((d) => NomenclatureEngine.getDeckStats(d.id).masteredPct < 100);
      if (nextDeck) {
        this.startObjectsPractice(nextDeck.id);
      } else {
        this.renderBatchSelectModal(false);
        document.getElementById('batchSelectModal')?.classList.add('open');
        this.syncTelegramBackButton();
      }
    },

    // ========================================================================
    // ШТОРКА ПОИСКА И ВЫБОР РАЗДЕЛОВ
    // ========================================================================
    updateDeckStatsUI() {
      const st = NomenclatureEngine.getDeckStats(NomenclatureEngine.activeDeckId);
      const setEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = String(val);
      };
      setEl('ankiNewCount', st.newCount);
      setEl('ankiLearnCount', st.learnCount);
      setEl('ankiReviewCount', st.reviewCount);
      setEl('ankiMasteredCount', `${st.masteredCount}/${st.total}`);
      const repBtn = document.getElementById('resultsRepeatBtn');
      if (repBtn) repBtn.style.display = 'inline-flex';
      this.updateHeaderStreakUI();
    },

    renderRoadmapDrawer(filter = 'all') {
      const isContMode = this.appMode === 'continents';
      const listEl = document.getElementById('drawerStepsList');
      if (!listEl) return;
      listEl.innerHTML = '';

      const q = (this.drawerSearchQuery || '').toLowerCase();

      if (isContMode) {
        const activeCont = ContinentExamEngine.getActiveContinent();
        const allContItems = ContinentExamEngine.getDeckItems();
        const st = ContinentExamEngine.getDeckStats();

        document.getElementById('drawerMainTitle').textContent = `📋 Материк: ${activeCont.name}`;
        document.getElementById('drawerSubTitle').textContent = `Всего вопросов в теме: ${st.total}`;
        document.getElementById('drawerPercentLabel').textContent = `${st.masteredCount}/${st.total} (${st.masteredPct}%)`;
        document.getElementById('drawerFillBar').style.width = `${st.masteredPct}%`;

        const filtered = allContItems.filter((it) => {
          const s = ContinentExamEngine.getState(it.id).state;
          if (filter !== 'all' && s !== filter) return false;
          if (q && !`${it.title} ${it.continentName || ''} ${it.categoryRu || ''}`.toLowerCase().includes(q)) {
            return false;
          }
          return true;
        });

        filtered.forEach((it) => {
          const s = ContinentExamEngine.getState(it.id).state;
          const dotMap = { new: '⚪', learning: '🔴', review: '🟡', mastered: '🟢' };
          const row = document.createElement('div');
          row.className = `drawer-step-item ${this.activeItem && this.activeItem.id === it.id ? 'active-now' : ''}`;
          row.innerHTML = `
            <span class="step-status-dot">${dotMap[s] || '⚪'}</span>
            <div class="step-item-info">
              <div class="step-item-title">${it.title}</div>
              <div class="step-item-meta">${it.continentName} • ${it.categoryRu}</div>
            </div>
          `;
          row.onclick = () => {
            document.getElementById('roadmapDrawer')?.classList.remove('open');
            this.syncTelegramBackButton();
            this.activeItem = it;
            if (it.type === 'continent_area' || it.type === 'continent_shubaev' || it.type === 'theory_quiz') {
              this.displayBriefingQuizTask(it);
            } else {
              this.displayContinentMapTask(it);
            }
          };
          listEl.appendChild(row);
        });
        return;
      }

      const activeDeck = this.appMode === 'hub' || q.length > 0
        ? NomenclatureEngine.decksMap.get('all')
        : NomenclatureEngine.getActiveDeck();
      const deckItems = activeDeck.objectIds.map((id) => NomenclatureEngine.objectsMap.get(id)).filter(Boolean);
      const st = NomenclatureEngine.getDeckStats(activeDeck.id);

      document.getElementById('drawerMainTitle').textContent = `📋 ${activeDeck.shortTitle}`;
      document.getElementById('drawerSubTitle').textContent =
        q.length > 0 ? `Поиск по всей базе (${NomenclatureEngine.objects.length} объектов)` : `${activeDeck.desc}`;
      document.getElementById('drawerPercentLabel').textContent = `${st.masteredCount}/${st.total} (${st.masteredPct}%)`;
      document.getElementById('drawerFillBar').style.width = `${st.masteredPct}%`;

      const filtered = deckItems.filter((it) => {
        const s = NomenclatureEngine.getState(it.id).status;
        if (filter !== 'all' && s !== filter) return false;
        if (q) {
          const hay = `${it.title} ${it.displayTitle} ${it.continent} ${it.worldRegion} ${it.categoryRu}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      if (filtered.length === 0) {
        listEl.innerHTML = `<div style="padding:22px; text-align:center; color:var(--text-dim); font-size:13px;">Ничего не найдено по выбранному фильтру.</div>`;
        return;
      }

      const MAX_ROWS = 200;
      const slice = filtered.slice(0, MAX_ROWS);
      const dotMap = { new: '⚪', learning: '🔴', review: '🟡', mastered: '🟢' };

      slice.forEach((it) => {
        const s = NomenclatureEngine.getState(it.id).status;
        const row = document.createElement('div');
        row.className = `drawer-step-item ${this.activeItem && this.activeItem.id === it.id ? 'active-now' : ''}`;
        row.innerHTML = `
          <span class="step-status-dot">${dotMap[s] || '⚪'}</span>
          <div class="step-item-info">
            <div class="step-item-title">${it.displayTitle || it.title}</div>
            <div class="step-item-meta">${it.categoryRu} • ${it.continent || it.worldRegion || 'Мир'}</div>
          </div>
        `;
        row.onclick = () => {
          document.getElementById('roadmapDrawer')?.classList.remove('open');
          this.syncTelegramBackButton();
          if (this.appMode === 'atlas') {
            this.openAtlasInspector(it);
          } else {
            this.startObjectsPractice(NomenclatureEngine.activeDeckId, it);
          }
        };
        listEl.appendChild(row);
      });

      if (filtered.length > MAX_ROWS) {
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px; text-align:center; color:var(--text-dim); font-size:11.5px;';
        note.textContent = `Показано ${MAX_ROWS} из ${filtered.length} объектов — введите запрос выше для точного поиска.`;
        listEl.appendChild(note);
      }
    },

    renderBatchSelectModal(forceObjects = false) {
      const container = document.getElementById('batchListContainer');
      const tabsWrap = document.getElementById('deckGroupTabs');
      if (!container) return;
      container.innerHTML = '';

      const isContMode = !forceObjects && this.appMode === 'continents';

      if (isContMode) {
        document.getElementById('batchModalHeading').textContent = '🌍 Выберите тему (Раздел 1)';
        document.getElementById('batchModalSub').textContent =
          'Материки, глобальные метрики Земли, области Океании и глоссарий пустынь';
        if (tabsWrap) tabsWrap.style.display = 'none';

        ContinentExamEngine.decks.forEach((d) => {
          const st = ContinentExamEngine.getDeckStats(d.id);
          const isCur = ContinentExamEngine.activeDeckId === d.id;
          const card = document.createElement('div');
          card.className = `batch-option-card ${isCur ? 'active-batch' : ''}`;
          card.innerHTML = `
            <div class="batch-opt-left">
              <div class="batch-opt-title">${d.icon} ${d.title}</div>
              <div class="batch-opt-sub">${d.desc}</div>
              <div class="batch-opt-pills">
                <span style="color:#7dd3fc;">⚪ Новых: ${st.newCount}</span>
                <span style="color:#fda4af;">🔴 Повтор: ${st.learnCount}</span>
                <span style="color:#6ee7b7; font-weight:700;">🟢 Выучено: ${st.masteredCount}/${st.total}</span>
              </div>
            </div>
            <div class="batch-opt-pct">${st.masteredPct}%</div>
          `;
          card.onclick = () => {
            TelegramBridge.hapticSelect();
            document.getElementById('batchSelectModal')?.classList.remove('open');
            this.startContinentExam(d.id, d.id === 'all');
          };
          container.appendChild(card);
        });
        return;
      }

      document.getElementById('batchModalHeading').textContent = '📦 Выберите раздел и тему обучения';
      document.getElementById('batchModalSub').textContent =
        'Прогресс сохраняется по всем 4 модулям и синхронизируется с Telegram CloudStorage';
      if (tabsWrap) tabsWrap.style.display = 'flex';

      const decks = NomenclatureEngine.decks.filter(
        (d) => d.group === this.activeDeckModalGroup && d.id !== 'all'
      );

      decks.forEach((d) => {
        const st = NomenclatureEngine.getDeckStats(d.id);
        const isCur = NomenclatureEngine.activeDeckId === d.id;
        const card = document.createElement('div');
        card.className = `batch-option-card ${isCur ? 'active-batch' : ''}`;
        card.innerHTML = `
          <div class="batch-opt-left">
            <div class="batch-opt-title">${d.icon} ${d.title}</div>
            <div class="batch-opt-sub">${d.desc}</div>
            <div class="batch-opt-pills">
              <span style="color:#7dd3fc;">⚪ ${st.newCount}</span>
              <span style="color:#fda4af;">🔴 ${st.learnCount}</span>
              <span style="color:#fde68a;">🟡 ${st.reviewCount}</span>
              <span style="color:#6ee7b7; font-weight:700;">🟢 ${st.masteredCount}/${st.total}</span>
            </div>
          </div>
          <div class="batch-opt-pct">${st.masteredPct}%</div>
        `;
        card.onclick = () => {
          TelegramBridge.hapticSelect();
          NomenclatureEngine.activeDeckId = d.id;
          NomenclatureEngine.saveState();
          document.getElementById('batchSelectModal')?.classList.remove('open');
          if (this.appMode === 'atlas') {
            this.openInteractiveAtlas(d.id);
          } else {
            this.startObjectsPractice(d.id);
          }
        };
        container.appendChild(card);
      });
    },

    resetAllProgress() {
      const totalCount = NomenclatureEngine.objects.length || 1039;
      if (!window.confirm(`Вы уверены, что хотите полностью сбросить весь прогресс по всем ${totalCount} объектам?`)) {
        return;
      }
      NomenclatureEngine.srsStates = {};
      NomenclatureEngine.stepCounter = 0;
      NomenclatureEngine.saveState();

      ContinentExamEngine.states = {};
      ContinentExamEngine.stepCounter = 0;
      ContinentExamEngine.masteredContinents.clear();
      ContinentExamEngine.saveState();

      Gamification.streak = 0;
      Gamification.dailyCount = 0;
      Gamification.save();

      StorageAdapter.clearAllCloudAndLocal();

      this.renderHub();
      this.syncTelegramBackButton();
      this.showToast('🔄 Весь прогресс сброшен с чистого листа');
    }
  };

  // Глобальный экспорт
  window.MapApp = MapApp;
  window.NomenclatureEngine = NomenclatureEngine;
  window.ContinentExamEngine = ContinentExamEngine;
  window.QuizConfigEngine = QuizConfigEngine;
  window.UnifiedMapEngine = UnifiedMapEngine;
  window.AudioEngine = AudioEngine;
  window.Gamification = Gamification;
  window.StorageAdapter = StorageAdapter;
  window.TelegramBridge = TelegramBridge;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MapApp.init());
  } else {
    MapApp.init();
  }
})();
