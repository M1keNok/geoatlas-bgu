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

    getWebApp() {
      return global.Telegram && global.Telegram.WebApp ? global.Telegram.WebApp : null;
    },

    isTMA() {
      const wa = this.getWebApp();
      return !!(wa && (wa.initData || (wa.platform && wa.platform !== 'unknown')));
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
        if (this.isTMA() && global.document && global.document.body) {
          global.document.body.classList.add('is-tma');
        }
        if (wa.BackButton && typeof wa.BackButton.onClick === 'function') {
          wa.BackButton.onClick(() => {
            if (typeof this._backCb === 'function') this._backCb();
          });
        }
      } catch (_) {}
    },

    showBackButton(cb) {
      this._backCb = cb;
      const wa = this.getWebApp();
      if (wa && wa.BackButton) {
        try {
          wa.BackButton.show();
        } catch (_) {}
      }
    },

    hideBackButton() {
      this._backCb = null;
      const wa = this.getWebApp();
      if (wa && wa.BackButton) {
        try {
          wa.BackButton.hide();
        } catch (_) {}
      }
    },

    hapticImpact(style = 'light') {
      const wa = this.getWebApp();
      if (wa && wa.HapticFeedback) {
        try {
          wa.HapticFeedback.impactOccurred(style);
        } catch (_) {}
      }
    },

    hapticNotification(type = 'success') {
      const wa = this.getWebApp();
      if (wa && wa.HapticFeedback) {
        try {
          wa.HapticFeedback.notificationOccurred(type);
        } catch (_) {}
      }
    },

    getCloudStorage() {
      const wa = this.getWebApp();
      if (wa && wa.CloudStorage && this.isTMA()) {
        return wa.CloudStorage;
      }
      return null;
    }
  };

  GeoAtlas.MotionFX = MotionFX;
  GeoAtlas.AudioEngine = AudioEngine;
  GeoAtlas.TelegramBridge = TelegramBridge;
})(window);
