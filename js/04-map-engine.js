/**
 * ГеоАтлас / Тренажер ОЗК — MapEngine (Silhouettes, Polylines, Normalized Bounds, Offline Fallback)
 */
(function (global) {
  'use strict';

  const GeoAtlas = (global.GeoAtlas = global.GeoAtlas || {});

  const LAYER_DEFS = {
    esri_phys: {
      id: 'esri_phys',
      label: 'Физическая',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
      maxNativeZoom: 8,
      maxZoom: 13
    },
    esri_sat: {
      id: 'esri_sat',
      label: 'Спутник',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      maxNativeZoom: 14,
      maxZoom: 14
    }
  };

  const CATEGORY_COLORS = {
    mountains: '#f59e0b',
    volcanoes: '#ef4444',
    plains: '#84cc16',
    depressions: '#a855f7',
    seas: '#38bdf8',
    straits: '#22d3ee',
    gulfs: '#0ea5e9',
    trenches: '#818cf8',
    currents: '#fb7185',
    rivers: '#38bdf8',
    waterfalls: '#2dd4bf',
    lakes: '#34d399',
    extreme_point: '#f472b6',
    continental_island: '#eab308',
    volcanic_island: '#f97316',
    coral_island: '#2dd4bf',
    peninsula: '#fb923c',
    desert: '#fcd34d'
  };

  const MapEngine = {
    map: null,
    canvasRenderer: null,
    activeTileLayer: null,
    vectorLayer: null,
    graticuleLayer: null,
    specialGroup: null,
    poolGroup: null,
    atlasGroup: null,
    trainerGroup: null,
    attemptsGroup: null,
    currentLayerId: 'esri_phys',
    _tileErrorCount: 0,
    _onOfflineFallback: null,
    _onMapClick: null,

    init(containerId, opts = {}) {
      if (this.map || typeof global.L === 'undefined') return;
      const L = global.L;

      this.currentLayerId = opts.layerId || 'esri_phys';
      this._onOfflineFallback = opts.onOfflineFallback || null;

      this.map = L.map(containerId, {
        center: [24, 25],
        zoom: 2.5,
        minZoom: 2,
        maxZoom: 12,
        worldCopyJump: true,
        zoomControl: false,
        attributionControl: false,
        preferCanvas: true,
        tap: true,
        tapTolerance: 18,
        bounceAtZoomLimits: false
      });

      this.canvasRenderer = L.canvas({ padding: 0.45 });
      this.specialGroup = L.layerGroup().addTo(this.map);
      this.poolGroup = L.layerGroup().addTo(this.map);
      this.atlasGroup = L.layerGroup().addTo(this.map);
      this.trainerGroup = L.layerGroup().addTo(this.map);
      this.attemptsGroup = L.layerGroup().addTo(this.map);

      this.setLayer(this.currentLayerId);

      this.map.on('click', (e) => {
        if (typeof this._onMapClick === 'function') {
          this._onMapClick(e.latlng.lat, GeoAtlas.GeoMath.normalizeLng(e.latlng.lng), this.map.getZoom(), null);
        }
      });
    },

    setMapClickHandler(fn) {
      this._onMapClick = fn;
    },

    invalidateSize() {
      if (this.map) {
        setTimeout(() => this.map && this.map.invalidateSize({ animate: false }), 60);
      }
    },

    zoomIn() {
      if (this.map) this.map.zoomIn();
    },

    zoomOut() {
      if (this.map) this.map.zoomOut();
    },

    resetWorldView() {
      if (this.map) this.map.setView([24, 25], 2.5, { animate: true });
    },

    setLayer(layerId) {
      if (!this.map || typeof global.L === 'undefined') return;
      const L = global.L;
      const def = LAYER_DEFS[layerId] || LAYER_DEFS.esri_phys;
      this.currentLayerId = def.id;
      this._tileErrorCount = 0;

      if (this.activeTileLayer) {
        this.map.removeLayer(this.activeTileLayer);
        this.activeTileLayer = null;
      }
      if (this.vectorLayer) {
        this.map.removeLayer(this.vectorLayer);
        this.vectorLayer = null;
      }
      if (this.graticuleLayer) {
        this.map.removeLayer(this.graticuleLayer);
        this.graticuleLayer = null;
      }

      const mapEl = this.map.getContainer();
      mapEl.classList.remove('map-vector-bg');
      this.activeTileLayer = L.tileLayer(def.url, {
        maxNativeZoom: def.maxNativeZoom,
        maxZoom: def.maxZoom,
        noWrap: false
      });
      this.activeTileLayer.addTo(this.map);
    },

    _renderVectorBase(L) {
      const gratLines = [];
      for (let lat = -60; lat <= 60; lat += 30) {
        gratLines.push([[lat, -180], [lat, 180]]);
      }
      for (let lng = -150; lng <= 180; lng += 30) {
        gratLines.push([[-82, lng], [82, lng]]);
      }
      this.graticuleLayer = L.polyline(gratLines, {
        color: 'rgba(148, 163, 184, 0.14)',
        weight: 1,
        dashArray: '3 5',
        interactive: false,
        renderer: this.canvasRenderer
      }).addTo(this.map);

      if (global.OFFLINE_WORLD_LAND) {
        this.vectorLayer = L.geoJSON(global.OFFLINE_WORLD_LAND, {
          renderer: this.canvasRenderer,
          interactive: false,
          style: {
            color: '#2dd4bf',
            weight: 1,
            opacity: 0.42,
            fillColor: '#16222f',
            fillOpacity: 0.94
          }
        }).addTo(this.map);
      }
    },

    clearTrainer() {
      if (this.trainerGroup) this.trainerGroup.clearLayers();
      if (this.attemptsGroup) this.attemptsGroup.clearLayers();
    },

    clearPool() {
      if (this.poolGroup) this.poolGroup.clearLayers();
    },

    clearAtlas() {
      if (this.atlasGroup) this.atlasGroup.clearLayers();
    },

    clearSpecialOverlays() {
      if (this.specialGroup) this.specialGroup.clearLayers();
    },

    _unwrapAntimeridian(coords) {
      return GeoAtlas.GeoMath.unwrapAntimeridianCoords(coords);
    },

    fitPolylineSmart(coords, maxZoom = 6) {
      if (!this.map || !Array.isArray(coords) || coords.length === 0 || typeof global.L === 'undefined') {
        return;
      }
      const clean = this._unwrapAntimeridian(coords);
      const bounds = global.L.latLngBounds(clean);
      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [60, 60], maxZoom, animate: true });
      }
    },

    fitItem(item, maxZoom = 6) {
      if (!this.map || !item || GeoAtlas.GeoMath.isOralTheoryItem(item)) return;
      const L = global.L;
      const nb = GeoAtlas.GeoMath.normalizeBounds(item.bounds);
      if (nb) {
        const b = L.latLngBounds(nb[0], nb[1]);
        if (b.isValid()) {
          this.map.fitBounds(b, { padding: [65, 65], maxZoom, animate: true });
          return;
        }
      }
      if (item.geometryType === 'polyline' && Array.isArray(item.coords) && item.coords.length >= 2) {
        this.fitPolylineSmart(item.coords, maxZoom);
        return;
      }
      const c = GeoAtlas.GeoMath.getItemCenter(item);
      this.map.setView([c.lat, c.lng], Math.min(maxZoom, 5), { animate: true });
    },

    fitBatch(items, maxZoom = 5) {
      if (!this.map || !Array.isArray(items) || typeof global.L === 'undefined') return;
      const pts = [];
      items.forEach((it) => {
        if (!it || GeoAtlas.GeoMath.isOralTheoryItem(it)) return;
        const nb = GeoAtlas.GeoMath.normalizeBounds(it.bounds);
        if (Array.isArray(it.coords) && it.coords.length) {
          it.coords.forEach((c) => pts.push([c[0], c[1]]));
        } else if (nb) {
          pts.push(nb[0], nb[1]);
        } else {
          const c = GeoAtlas.GeoMath.getItemCenter(it);
          pts.push([c.lat, c.lng]);
        }
      });
      if (pts.length === 0) {
        this.resetWorldView();
        return;
      }
      if (pts.length === 1) {
        this.map.setView(pts[0], 4, { animate: true });
        return;
      }
      const clean = this._unwrapAntimeridian(pts);
      const bounds = global.L.latLngBounds(clean);
      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [65, 65], maxZoom, animate: true });
      }
    },

    _getItemColor(item) {
      if (!item) return '#10b981';
      if (item.category === 'currents') {
        const t = String(item.currentType || item.temperature || item.temp || '').toLowerCase();
        if (t.includes('холод')) return '#38bdf8';
        if (t.includes('тёпл') || t.includes('тепл')) return '#f97316';
      }
      if (item.submoduleId === 'm2_depressions') return CATEGORY_COLORS.depressions;
      return CATEGORY_COLORS[item.category] || '#10b981';
    },

    _addDirectionArrow(L, group, coords, color) {
      if (!Array.isArray(coords) || coords.length < 2) return;
      const a = coords[coords.length - 2];
      const b = coords[coords.length - 1];
      const dy = b[0] - a[0];
      const dx = (b[1] - a[1]) * Math.cos((b[0] * Math.PI) / 180);
      const angle = (Math.atan2(dx, dy) * 180) / Math.PI;
      const icon = L.divIcon({
        className: 'geo-arrow-icon',
        html: `<div style="transform: rotate(${angle}deg); color: ${color}; font-size: 16px; line-height: 1; text-shadow: 0 1px 4px #000;">▲</div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });
      L.marker([b[0], b[1]], { icon, interactive: false }).addTo(group);
    },

    drawItemShape(group, item, opts = {}) {
      if (!this.map || !item || GeoAtlas.GeoMath.isOralTheoryItem(item) || typeof global.L === 'undefined') {
        return null;
      }
      const L = global.L;
      const color = opts.color || this._getItemColor(item);
      const showLabel = !!opts.showLabel;
      const hoverLabel = !!opts.hoverLabel;
      const labelText = opts.labelText || item.name;
      const onClick = opts.onClick || null;
      const interactive = opts.interactive !== false;
      const weight = opts.weight || (opts.highlight ? 5 : opts.subtle ? 3.2 : 3);
      const nb = GeoAtlas.GeoMath.normalizeBounds(item.bounds);
      let primaryLayer = null;

      if (nb && !opts.pointOnly) {
        const rect = L.rectangle(nb, {
          color,
          weight: opts.highlight ? 2.5 : opts.subtle ? 1.3 : 1.6,
          opacity: opts.highlight ? 0.95 : opts.subtle ? 0.55 : 0.75,
          fillColor: color,
          fillOpacity: opts.highlight ? 0.22 : opts.subtle ? 0.08 : 0.12,
          dashArray: opts.dashed || opts.subtle ? '5 4' : null,
          interactive,
          renderer: this.canvasRenderer
        }).addTo(group);

        if (onClick) {
          rect.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            onClick(item, e.latlng);
          });
        }
        primaryLayer = rect;
      }

      if (item.geometryType === 'polyline' && Array.isArray(item.coords) && item.coords.length >= 2) {
        const lineCoords = GeoAtlas.GeoMath.unwrapAntimeridianCoords(item.coords);
        const lineLayer = L.polyline(lineCoords, {
          color,
          weight,
          opacity: opts.highlight ? 0.98 : opts.subtle ? 0.72 : 0.88,
          dashArray: item.category === 'currents' ? '8 6' : null,
          interactive,
          renderer: this.canvasRenderer
        }).addTo(group);

        if (item.category === 'currents' && (opts.highlight || opts.subtle)) {
          this._addDirectionArrow(L, group, lineCoords, color);
        }
        if (onClick) {
          lineLayer.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            onClick(item, e.latlng);
          });
        }
        if (showLabel || hoverLabel) {
          const c = GeoAtlas.GeoMath.getItemCenter(item);
          if (showLabel) {
            L.marker([c.lat, c.lng], {
              interactive: !!onClick,
              icon: L.divIcon({
                className: 'geo-pill-label' + (opts.highlight ? ' is-highlight' : ''),
                html: `<span>${labelText}</span>`,
                iconSize: null
              })
            })
              .addTo(group)
              .on('click', (e) => {
                L.DomEvent.stopPropagation(e);
                if (onClick) onClick(item, e.latlng);
              });
          } else {
            lineLayer.bindTooltip(labelText, { sticky: true, className: 'geo-map-tooltip' });
          }
        }
        return primaryLayer || lineLayer;
      }

      const center = GeoAtlas.GeoMath.getItemCenter(item);
      const marker = L.circleMarker([center.lat, center.lng], {
        radius: opts.highlight ? 9 : opts.subtle ? 5.5 : 6,
        color: '#09090b',
        weight: 2,
        fillColor: color,
        fillOpacity: opts.highlight ? 1 : opts.subtle ? 0.75 : 0.9,
        interactive,
        renderer: this.canvasRenderer
      }).addTo(group);

      if (onClick) {
        marker.on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          onClick(item, e.latlng);
        });
      }
      if (showLabel || hoverLabel) {
        marker.bindTooltip(labelText, {
          permanent: showLabel,
          direction: 'top',
          offset: [0, -8],
          className: 'geo-map-tooltip' + (opts.highlight ? ' is-highlight' : '')
        });
      }
      return primaryLayer || marker;
    },

    drawPoolShapes(items, opts = {}) {
      if (!this.poolGroup) return;
      this.poolGroup.clearLayers();
      if (!Array.isArray(items) || items.length === 0) return;

      const selectedId = opts.selectedId || null;
      const showLabels = !!opts.showLabels && items.length <= 75;
      const hoverLabel = !!opts.hoverLabel;
      const onClick = opts.onClick || null;

      items.forEach((it) => {
        if (!it || GeoAtlas.GeoMath.isOralTheoryItem(it)) return;
        const isSel = it.id === selectedId;
        this.drawItemShape(this.poolGroup, it, {
          subtle: !isSel,
          highlight: isSel,
          showLabel: showLabels || isSel,
          hoverLabel: !showLabels && hoverLabel,
          onClick
        });
      });
    },

    drawAttemptPin(lat, lng, missNum) {
      if (!this.map || !this.attemptsGroup || typeof global.L === 'undefined') return;
      const L = global.L;
      return L.marker([lat, lng], {
        interactive: false,
        icon: L.divIcon({
          className: 'geo-miss-pin',
          html: `<div>✕<span>${missNum}</span></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        })
      }).addTo(this.attemptsGroup);
    },

    drawAtlasItems(items, showLabels, selectedId, onClickItem) {
      if (!this.atlasGroup) return;
      this.atlasGroup.clearLayers();
      const shouldShowLabels = showLabels && items.length <= 80;
      items.forEach((it) => {
        if (GeoAtlas.GeoMath.isOralTheoryItem(it)) return;
        const isSel = it.id === selectedId;
        this.drawItemShape(this.atlasGroup, it, {
          highlight: isSel,
          showLabel: shouldShowLabels || isSel,
          hoverLabel: !shouldShowLabels,
          onClick: onClickItem
        });
      });
    },

    drawSpecialOverlays(show) {
      if (!this.specialGroup || typeof global.L === 'undefined') return;
      this.specialGroup.clearLayers();
      if (!show) return;
      const L = global.L;
      const legacy = global.GEOGRAPHY_DATA || (global.GEO_MODULES_REGISTRY && global.GEO_MODULES_REGISTRY.module1 && global.GEO_MODULES_REGISTRY.module1.legacyData);
      if (!legacy || !legacy.special_entities) return;
      const bt = legacy.special_entities.bermuda_triangle;
      if (bt && Array.isArray(bt.vertices)) {
        const poly = bt.vertices.map((v) => [v.lat, v.lng]);
        L.polygon(poly, {
          color: '#10b981',
          weight: 2,
          dashArray: '5 5',
          fillColor: '#10b981',
          fillOpacity: 0.1,
          interactive: false,
          renderer: this.canvasRenderer
        }).addTo(this.specialGroup);
      }
    }
  };

  GeoAtlas.LAYER_DEFS = LAYER_DEFS;
  GeoAtlas.MapEngine = MapEngine;
})(window);
