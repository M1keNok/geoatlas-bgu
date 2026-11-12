/**
 * desktop_boost.js — Оптимизация для нативных окон десктопного приложения (macOS WKWebView & Windows WebView2)
 * 1. Аппаратное ускорение через Leaflet Canvas
 * 2. Блокировка контекстных меню браузера, случайного перетаскивания и резинового скролла
 */
(function () {
  "use strict";

  // 1. Блокировка браузерных артефактов
  document.addEventListener("contextmenu", function (e) {
    if (e.target && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
      e.preventDefault();
    }
  });

  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  const style = document.createElement("style");
  style.textContent = `
    html, body {
      overscroll-behavior: none !important;
      user-select: none !important;
      -webkit-user-select: none !important;
      -webkit-user-drag: none !important;
      cursor: default;
    }
    input, textarea {
      user-select: text !important;
      -webkit-user-select: text !important;
    }
    .leaflet-container {
      background: #081321 !important;
      will-change: transform;
      transform: translateZ(0);
    }
  `;
  document.head.appendChild(style);

  // 2. Включение аппаратного ускорения Leaflet
  const waitForLeaflet = setInterval(function () {
    if (typeof window.L === "undefined" || !window.L.Map) return;
    clearInterval(waitForLeaflet);

    const sharedCanvasRenderer = window.L.canvas({
      padding: 0.5,
      tolerance: 4
    });

    const origInit = window.L.Map.prototype.initialize;
    window.L.Map.prototype.initialize = function (id, options) {
      const enhancedOptions = Object.assign(
        {
          preferCanvas: true,
          renderer: sharedCanvasRenderer,
          wheelDebounceTime: 35,
          wheelPxPerZoomLevel: 75,
          fadeAnimation: true,
          zoomAnimation: true,
          markerZoomAnimation: true
        },
        options || {}
      );
      return origInit.call(this, id, enhancedOptions);
    };
  }, 10);
})();
