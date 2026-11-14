/**
 * ГеоАтлас v10.0 — MapEngine (Esri Physical + Satellite + Offline Vector Auto-Fallback + Polyline/Bounds Rendering)
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
    },
    vector_offline: {
      id: 'vector_offline',
      label: 'Вектор (Офлайн)',
      isVector: true
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
    trenches: '#6366f1',
    currents: '#fb7185',
    rivers: '#60a5fa',
    waterfalls: '#2dd4bf',
    lakes: '#34d399',
    capes: '#f472b6',
    islands: '#eab308',
    peninsulas: '#fb923c',
    continents_earth: '#10b981'
  };

  const MapEngine = {
    map: null,
    canvasRenderer: null,
    activeTileLayer: null,
    vectorLayer: null,
    graticuleLayer: null,
    atlasGroup: null,
    trainerGroup: null,
    attemptsGroup: null,
    specialGroup: null,
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
        preferCanvas: true
      });

      this.canvasRenderer = L.canvas({ padding: 0.45 });
      this.specialGroup = L.layerGroup().addTo(this.map);
      this.atlasGroup = L.layerGroup().addTo(this.map);
      this.trainerGroup = L.layerGroup().addTo(this.map);
      this.attemptsGroup = L.layerGroup().addTo(this.map);

      this.setLayer(this.currentLayerId);

      this.map.on('click', (e) => {
        if (typeof this._onMapClick === 'function') {
          this._onMapClick(e.latlng.lat, GeoAtlas.GeoMath.normalizeLng(e.latlng.lng), this.map.getZoom());
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
      if (def.isVector) {
        mapEl.classList.add('map-vector-bg');
        this._renderVectorBase(L);
      } else {
        mapEl.classList.remove('map-vector-bg');
        this.activeTileLayer = L.tileLayer(def.url, {
          maxNativeZoom: def.maxNativeZoom,
          maxZoom: def.maxZoom,
          noWrap: false
        });
        this.activeTileLayer.on('tileerror', () => {
          this._tileErrorCount += 1;
          if (this._tileErrorCount >= 4 && this.currentLayerId !== 'vector_offline') {
            this.setLayer('vector_offline');
            if (typeof this._onOfflineFallback === 'function') {
              this._onOfflineFallback('vector_offline');
            }
          }
        });
        this.activeTileLayer.addTo(this.map);
      }
    },

    _renderVectorBase(L) {
      const gratLines = [];
      for (let lat = -60; lat <= 60; lat += 30) {
        gratLines.push([[-180, lat], [180, lat]].map(([lng, lt]) => [lt, lng]));
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

    clearAtlas() {
      if (this.atlasGroup) this.atlasGroup.clearLayers();
    },

    clearSpecialOverlays() {
      if (this.specialGroup) this.specialGroup.clearLayers();
    },

    _unwrapAntimeridian(coords) {
      if (!Array.isArray(coords) || coords.length === 0) return [];
      const lngs = coords.map((c) => Number(c[1]) || 0);
      const minL = Math.min(...lngs);
      const maxL = Math.max(...lngs);
      if (maxL - minL <= 180) return coords;
      return coords.map((c) => [c[0], c[1] < 0 ? c[1] + 360 : c[1]]);
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
      if (!this.map || !item || item.geometryType === 'none') return;
      const L = global.L;
      if (Array.isArray(item.bounds) && item.bounds.length === 2) {
        const b = L.latLngBounds(item.bounds[0], item.bounds[1]);
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
        if (!it || it.geometryType === 'none') return;
        if (Array.isArray(it.coords) && it.coords.length) {
          it.coords.forEach((c) => pts.push([c[0], c[1]]));
        } else if (Array.isArray(it.bounds) && it.bounds.length === 2) {
          pts.push(it.bounds[0], it.bounds[1]);
        } else {
          const c = GeoAtlas.GeoMath.getItemCenter(it);
          pts.push([c.lat, c.lng]);
        }
      });
      if (pts.length === 0) return;
      if (pts.length === 1) {
        this.map.setView(pts[0], 4, { animate: true });
        return;
      }
      const clean = this._unwrapAntimeridian(pts);
      const bounds = global.L.latLngBounds(clean);
      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [70, 70], maxZoom, animate: true });
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
      if (!this.map || !item || item.geometryType === 'none' || typeof global.L === 'undefined') return null;
      const L = global.L;
      const color = opts.color || this._getItemColor(item);
      const showLabel = !!opts.showLabel;
      const labelText = opts.labelText || item.name;
      const onClick = opts.onClick || null;
      const interactive = opts.interactive !== false;
      const weight = opts.weight || (opts.highlight ? 5 : 3);
      let layer = null;

      if (Array.isArray(item.bounds) && item.bounds.length === 2 && !opts.pointOnly) {
        layer = L.rectangle(item.bounds, {
          color,
          weight: opts.highlight ? 2.5 : 1.5,
          fillColor: color,
          fillOpacity: opts.highlight ? 0.22 : 0.1,
          dashArray: opts.dashed ? '6 4' : null,
          interactive,
          renderer: this.canvasRenderer
        }).addTo(group);
      }

      if (item.geometryType === 'polyline' && Array.isArray(item.coords) && item.coords.length >= 2) {
        const lineLayer = L.polyline(item.coords, {
          color,
          weight,
          opacity: opts.highlight ? 0.96 : 0.85,
          dashArray: item.category === 'currents' ? '8 6' : null,
          interactive,
          renderer: this.canvasRenderer
        }).addTo(group);
        if (item.category === 'currents' && opts.highlight) {
          this._addDirectionArrow(L, group, item.coords, color);
        }
        layer = layer || lineLayer;
        if (onClick) lineLayer.on('click', () => onClick(item));
        if (showLabel) {
          const c = GeoAtlas.GeoMath.getItemCenter(item);
          L.marker([c.lat, c.lng], {
            interactive: !!onClick,
            icon: L.divIcon({
              className: 'geo-pill-label' + (opts.highlight ? ' is-highlight' : ''),
              html: `<span>${labelText}</span>`,
              iconSize: null
            })
          })
            .addTo(group)
            .on('click', () => onClick && onClick(item));
        }
        return layer;
      }

      const center = GeoAtlas.GeoMath.getItemCenter(item);
      const marker = L.circleMarker([center.lat, center.lng], {
        radius: opts.highlight ? 9 : 6,
        color: '#09090b',
        weight: 2,
        fillColor: color,
        fillOpacity: opts.highlight ? 1 : 0.88,
        interactive,
        renderer: this.canvasRenderer
      }).addTo(group);

      if (onClick) marker.on('click', () => onClick(item));
      if (showLabel) {
        marker.bindTooltip(labelText, {
          permanent: true,
          direction: 'top',
          offset: [0, -8],
          className: 'geo-map-tooltip' + (opts.highlight ? ' is-highlight' : '')
        });
      }
      return layer || marker;
    },

    drawAttemptPin(lat, lng, missNum) {
      if (!this.map || !this.attemptsGroup || typeof global.L === 'undefined') return;
      const L = global.L;
      const marker = L.marker([lat, lng], {
        interactive: false,
        icon: L.divIcon({
          className: 'geo-miss-pin',
          html: `<div>✕<span>${missNum}</span></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        })
      }).addTo(this.attemptsGroup);
      return marker;
    },

    drawClusterPreview(fiveItems, activeId, onSelect) {
      if (!this.trainerGroup) return;
      this.trainerGroup.clearLayers();
      this.attemptsGroup.clearLayers();
      fiveItems.forEach((it, idx) => {
        const isSel = it.id === activeId;
        this.drawItemShape(this.trainerGroup, it, {
          highlight: isSel,
          showLabel: true,
          labelText: `${idx + 1}. ${it.name}`,
          color: isSel ? '#10b981' : undefined,
          onClick: onSelect
        });
      });
    },

    drawAtlasItems(items, showLabels, selectedId, onClickItem) {
      if (!this.atlasGroup) return;
      this.atlasGroup.clearLayers();
      const shouldShowLabels = showLabels && items.length <= 85;
      items.forEach((it) => {
        if (it.geometryType === 'none') return;
        const isSel = it.id === selectedId;
        this.drawItemShape(this.atlasGroup, it, {
          highlight: isSel,
          showLabel: shouldShowLabels || isSel,
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
