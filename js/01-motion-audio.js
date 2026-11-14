/**
 * ГеоАтлас v10.0 — MotionFX (WAAPI Spring Physics), AudioEngine & TelegramBridge
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const MotionFX = {
    prefersReduced() {
      return (
        typeof global.matchMedia === 'function' &&
        global.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    },

    animate(el, keyframes, opts = {}) {
      if (!el || typeof el.animate !== 'function' || this.prefersReduced()) {
        return null;
      }
      try {
        return el.animate(keyframes, {
          duration: opts.duration || 360,
          easing: opts.easing || 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: opts.fill || 'both',
          delay: opts.delay || 0
        });
      } catch (_) {
        return null;
      }
    },

    reveal(el, delay = 0) {
      return this.animate(
        el,
        [
          { opacity: 0, transform: 'translateY(10px) scale(0.985)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' }
        ],
        { duration: 340, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    },

    tapPop(el) {
      return this.animate(
        el,
        [
          { transform: 'scale(1)' },
          { transform: 'scale(0.96)' },
          { transform: 'scale(1)' }
        ],
        { duration: 220, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
      );
    },

    shake(el) {
      return this.animate(
        el,
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-7px)' },
          { transform: 'translateX(6px)' },
          { transform: 'translateX(-4px)' },
          { transform: 'translateX(3px)' },
          { transform: 'translateX(0)' }
        ],
        { duration: 360, easing: 'ease-out' }
      );
    },

    pulseSuccess(el) {
      return this.animate(
        el,
        [
          { transform: 'scale(1)' },
          { transform: 'scale(1.035)' },
          { transform: 'scale(1)' }
        ],
        { duration: 380, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
      );
    },

    staggerChildren(container, selector = '.stagger-item', stepMs = 45) {
      if (!container || this.prefersReduced()) return;
      const items = container.querySelectorAll(selector);
      items.forEach((node, idx) => {
        this.reveal(node, Math.min(idx * stepMs, 360));
      });
    }
  };

  const AudioEngine = {
    _ctx: null,
    _muted: false,

    init(muted = false) {
      this._muted = !!muted;
    },

    setMuted(muted) {
      this._muted = !!muted;
    },

    isMuted() {
      return this._muted;
    },

    _getCtx() {
      if (this._muted) return null;
      const AudioCtx = global.AudioContext || global.webkitAudioContext;
      if (!AudioCtx) return null;
      if (!this._ctx) {
        try {
          this._ctx = new AudioCtx();
        } catch (_) {
          return null;
        }
      }
      if (this._ctx.state === 'suspended') {
        this._ctx.resume().catch(() => {});
      }
      return this._ctx;
    },

    _tone(freq, durSec = 0.12, type = 'sine', gainVal = 0.08, delaySec = 0) {
      const ctx = this._getCtx();
      if (!ctx) return;
      try {
        const now = ctx.currentTime + delaySec;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(gainVal, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durSec);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + durSec + 0.02);
      } catch (_) {}
    },

    playSuccess() {
      this._tone(523.25, 0.11, 'triangle', 0.07, 0);
      this._tone(659.25, 0.15, 'triangle', 0.08, 0.07);
    },

    playMiss() {
      this._tone(210, 0.14, 'sine', 0.065, 0);
      this._tone(165, 0.16, 'sine', 0.05, 0.08);
    },

    playFlip() {
      this._tone(380, 0.07, 'sine', 0.04, 0);
    },

    playClick() {
      this._tone(480, 0.045, 'sine', 0.03, 0);
    },

    playCelebrate() {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((n, idx) => this._tone(n, 0.18, 'triangle', 0.075, idx * 0.08));
    }
  };

  const TelegramBridge = {
    _backCb: null,
    _initialized: false,
    _hapticsEnabled: true,

    getWebApp() {
      return global.Telegram && global.Telegram.WebApp ? global.Telegram.WebApp : null;
    },

    isTMA() {
      const wa = this.getWebApp();
      return !!(wa && (wa.initData || (wa.platform && wa.platform !== 'unknown')));
    },

    _hasVersion(ver) {
      const wa = this.getWebApp();
      if (!wa) return false;
      return typeof wa.isVersionAtLeast === 'function' ? wa.isVersionAtLeast(ver) : true;
    },

    _syncViewportCSS() {
      const wa = this.getWebApp();
      const doc = global.document;
      if (!wa || !doc || !doc.documentElement) return;
      const root = doc.documentElement.style;
      if (typeof wa.viewportStableHeight === 'number' && wa.viewportStableHeight > 0) {
        root.setProperty('--tg-viewport-stable-height', `${wa.viewportStableHeight}px`);
      }
      const applyInset = (prefix, obj) => {
        if (!obj || typeof obj !== 'object') return;
        ['top', 'bottom', 'left', 'right'].forEach((side) => {
          if (typeof obj[side] === 'number') {
            root.setProperty(`--${prefix}-${side}`, `${obj[side]}px`);
          }
        });
      };
      applyInset('tg-safe-area-inset', wa.safeAreaInset);
      applyInset('tg-content-safe-area-inset', wa.contentSafeAreaInset);
    },

    init() {
      if (this._initialized) return;
      this._initialized = true;
      const wa = this.getWebApp();
      if (!wa) return;
      try {
        wa.ready();
        wa.expand();
        if (typeof wa.disableVerticalSwipes === 'function') {
          wa.disableVerticalSwipes();
        }
        if (typeof wa.setHeaderColor === 'function') {
          wa.setHeaderColor('#09090b');
        }
        if (typeof wa.setBackgroundColor === 'function') {
          wa.setBackgroundColor('#09090b');
        }
        if (typeof wa.setBottomBarColor === 'function') {
          wa.setBottomBarColor('#09090b');
        }
        this._syncViewportCSS();
        if (typeof wa.onEvent === 'function') {
          const onResize = () => {
            this._syncViewportCSS();
            GeoAtlas.MapEngine?.invalidateSize();
          };
          wa.onEvent('viewportChanged', onResize);
          wa.onEvent('safeAreaChanged', onResize);
          wa.onEvent('contentSafeAreaChanged', onResize);
          wa.onEvent('deactivated', () => {
            GeoAtlas.StorageAdapter?.flushCloud?.();
          });
        }
        if (this.isTMA() && global.document && global.document.body) {
          global.document.body.classList.add('is-tma');
          if (wa.platform) {
            global.document.body.classList.add(`tma-${wa.platform}`);
          }
        }
        if (wa.BackButton && typeof wa.BackButton.onClick === 'function') {
          wa.BackButton.onClick(() => {
            if (typeof this._backCb === 'function') this._backCb();
          });
        }
      } catch (_) {}
    },

    setHapticsEnabled(enabled) {
      this._hapticsEnabled = enabled !== false;
    },

    setClosingConfirmation(enabled) {
      const wa = this.getWebApp();
      if (!wa || !this.isTMA() || !this._hasVersion('6.2')) return;
      try {
        if (enabled && typeof wa.enableClosingConfirmation === 'function') {
          wa.enableClosingConfirmation();
        } else if (!enabled && typeof wa.disableClosingConfirmation === 'function') {
          wa.disableClosingConfirmation();
        }
      } catch (_) {}
    },

    showBackButton(cb) {
      this._backCb = cb;
      const wa = this.getWebApp();
      if (wa && wa.BackButton && this._hasVersion('6.1')) {
        try {
          wa.BackButton.show();
        } catch (_) {}
      }
    },

    hideBackButton() {
      this._backCb = null;
      const wa = this.getWebApp();
      if (wa && wa.BackButton && this._hasVersion('6.1')) {
        try {
          wa.BackButton.hide();
        } catch (_) {}
      }
    },

    confirm(message, cb) {
      const wa = this.getWebApp();
      if (wa && this.isTMA() && typeof wa.showConfirm === 'function' && this._hasVersion('6.2')) {
        try {
          wa.showConfirm(message, (ok) => cb(!!ok));
          return true;
        } catch (_) {}
      }
      return false;
    },

    getUserLabel() {
      const wa = this.getWebApp();
      const user = wa && wa.initDataUnsafe && wa.initDataUnsafe.user;
      if (!user) return null;
      if (user.username) return `@${user.username}`;
      return [user.first_name, user.last_name].filter(Boolean).join(' ') || null;
    },

    _vibrateFallback(pattern) {
      try {
        if (global.navigator && typeof global.navigator.vibrate === 'function') {
          global.navigator.vibrate(pattern);
        }
      } catch (_) {}
    },

    hapticImpact(style = 'light') {
      if (!this._hapticsEnabled) return;
      const wa = this.getWebApp();
      if (wa && wa.HapticFeedback && this._hasVersion('6.1')) {
        try {
          wa.HapticFeedback.impactOccurred(style);
          return;
        } catch (_) {}
      }
      this._vibrateFallback(style === 'heavy' ? 26 : style === 'medium' ? 15 : 8);
    },

    hapticNotification(type = 'success') {
      if (!this._hapticsEnabled) return;
      const wa = this.getWebApp();
      if (wa && wa.HapticFeedback && this._hasVersion('6.1')) {
        try {
          wa.HapticFeedback.notificationOccurred(type);
          return;
        } catch (_) {}
      }
      this._vibrateFallback(type === 'error' ? [24, 35, 24] : type === 'warning' ? [16, 25, 16] : [10, 22, 14]);
    },

    hapticSelection() {
      if (!this._hapticsEnabled) return;
      const wa = this.getWebApp();
      if (wa && wa.HapticFeedback && this._hasVersion('6.1')) {
        try {
          wa.HapticFeedback.selectionChanged();
          return;
        } catch (_) {}
      }
      this._vibrateFallback(6);
    },

    getCloudStorage() {
      const wa = this.getWebApp();
      if (wa && wa.CloudStorage && this.isTMA() && this._hasVersion('6.9')) {
        return wa.CloudStorage;
      }
      return null;
    }
  };

  GeoAtlas.MotionFX = MotionFX;
  GeoAtlas.AudioEngine = AudioEngine;
  GeoAtlas.TelegramBridge = TelegramBridge;
})(window);
