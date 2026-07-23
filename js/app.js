/* Territorial United States — app engine */
(function () {
"use strict";

var D = window.TUSDATA;
// Graceful defaults if any data module is absent
D.cities = D.cities || []; D.geofeatures = D.geofeatures || []; D.landmarks = D.landmarks || [];
D.statesProse = D.statesProse || {}; D.routes = D.routes || []; D.regions = D.regions || [];
D.insets = D.insets || []; D.tech = D.tech || []; D.infra = D.infra || []; D.urban = D.urban || [];
D.trade = D.trade || []; D.treaties = D.treaties || [];
D.world110 = D.world110 || { countries: {type:"FeatureCollection",features:[]}, land: {type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[]}}]}, labels: [] };

var YR0 = 1750, YR1 = 2026;

// ------------------------------------------------------------------ state --
var year = 1750, playing = false, speed = 4;
var autoCam = true, userCam = false;
var shadeMode = "geo";
var L = { borders: true, poliLabels: true, geoLabels: true, parks: true, routes: true, eco: true, context: true, tech: true, trade: true };
var selected = null;          // {type, obj}
var lastIntYear = -1, hintShown = true;

// URL hash restore
(function () {
  var m = location.hash.match(/y=(\d{4}(?:\.\d+)?)/);
  if (m) { var y = +m[1]; if (y >= YR0 && y <= YR1) year = y; }
})();

// ------------------------------------------------------------- geo assembly --
var topo = D.topoStates;
var statesFC = topojson.feature(topo, topo.objects.states);
var nationF = topojson.feature(topo, topo.objects.nation);
var stateByFips = {};
statesFC.features.forEach(function (f) { stateByFips[f.id] = f; });

// rewind hand-drawn polygons to spherical convention — every exterior ring
// independently, by the area-of-complement test.
function fixRing(ring) {
  if (d3.geoArea({ type: "Polygon", coordinates: [ring] }) > 2 * Math.PI) ring.reverse();
  return ring;
}
function rewind(geo) {
  if (geo.type === "Polygon") geo.coordinates.forEach(fixRing);
  else if (geo.type === "MultiPolygon") geo.coordinates.forEach(function (p) { p.forEach(fixRing); });
  return geo;
}
D.territories.forEach(function (t) { if (t.geo) rewind(t.geo); });
D.regions.forEach(function (r) {
  r.geo = rewind({ type: "Polygon", coordinates: [closeRing(r.ring)] });
});
D.bison.stages.forEach(function (s) {
  var rings = s.rings ? s.rings : [s.ring];
  s.geo = rewind({ type: "MultiPolygon", coordinates: rings.map(function (r) { return [closeRing(r)]; }) });
});
function closeRing(r) {
  var c = r.slice();
  var a = c[0], b = c[c.length - 1];
  if (a[0] !== b[0] || a[1] !== b[1]) c.push([a[0], a[1]]);
  return c;
}

// merged-parent geometry cache (Virginia+WV, Massachusetts+Maine, ...)
var mergeCache = {};
function stateGeom(fips, y) {
  var kids = D.absorptions.filter(function (a) { return a[0] === fips && y < a[2]; })
                          .map(function (a) { return a[1]; });
  if (!kids.length) return stateByFips[fips];
  var key = fips + "|" + kids.join(",");
  if (!mergeCache[key]) {
    var ids = [fips].concat(kids);
    var geoms = topo.objects.states.geometries.filter(function (g) { return ids.indexOf(g.id) >= 0; });
    mergeCache[key] = { type: "Feature", id: fips, geometry: topojson.merge(topo, geoms), properties: stateByFips[fips].properties };
  }
  return mergeCache[key];
}
function absorbedBy(fips, y) {
  for (var i = 0; i < D.absorptions.length; i++) {
    var a = D.absorptions[i];
    if (a[1] === fips && y < a[2]) return a[0];
  }
  return null;
}

// ---------------------------------------------------------------- projection --
var W = window.innerWidth || 1440, H = window.innerHeight || 900;
if (W < 320) W = 1440;
if (H < 240) H = 900;
// ONE world map: US-centered Equal Earth. FIXED constants — baked into every
// pre-rendered raster in data/geo/rasters.js; re-render (render_ee.py) if changed.
var projection = d3.geoEqualEarth().rotate([100, 0])
  .scale(1731.610258338954).translate([4786.828245295919, 2381.1588677106856]);
var path = d3.geoPath(projection);
var WORLD_BOUNDS = [100, 100, 9473.656, 4662.318]; // projected sphere bounds

// camera keyframes: [year, [w,s,e,n]]
var CAMS = [
  [1750, [-88.5, 27.0, -63.0, 48.6]],
  [1786, [-99.5, 25.0, -63.5, 49.8]],
  [1801, [-99.5, 25.0, -63.5, 49.8]],
  [1805, [-116.0, 24.0, -64.0, 50.5]],
  [1842, [-116.0, 24.0, -64.0, 50.5]],
  [1850, [-126.5, 23.5, -65.0, 50.5]],
  [1864, [-126.5, 23.5, -65.0, 50.5]],
  [1871, [-168.0, 21.5, -60.0, 66.0]],
  [1895, [-168.0, 21.5, -60.0, 66.0]],
  [1902, [-172.0, 16.5, -60.0, 66.5]],
  [2026, [-172.0, 16.5, -60.0, 66.5]]
];
function rectGeo(b) {
  var w = b[0], s = b[1], e = b[2], n = b[3], k, pts = [[w, s]];
  for (k = 1; k <= 20; k++) pts.push([w + (e - w) * k / 20, s]);
  for (k = 1; k <= 20; k++) pts.push([e, s + (n - s) * k / 20]);
  for (k = 1; k <= 20; k++) pts.push([e - (e - w) * k / 20, n]);
  for (k = 1; k <= 20; k++) pts.push([w, n - (n - s) * k / 20]);
  return { type: "Polygon", coordinates: [fixRing(pts)] };
}
function fitRect(x0, y0, x1, y1) {
  var dx = x1 - x0, dy = y1 - y0;
  var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  var kk = 0.93 / Math.max(dx / W, dy / (H - 110));
  return d3.zoomIdentity.translate(W / 2 - kk * cx, (H - 90) / 2 - kk * cy).scale(kk);
}
function fitTransform(bbox) {
  var b = path.bounds(rectGeo(bbox));
  return fitRect(b[0][0], b[0][1], b[1][0], b[1][1]);
}
var camT = CAMS.map(function (c) { return { y: c[0], t: fitTransform(c[1]) }; });
function cameraFor(y) {
  if (y <= camT[0].y) return camT[0].t;
  for (var i = 0; i < camT.length - 1; i++) {
    var a = camT[i], b = camT[i + 1];
    if (y >= a.y && y <= b.y) {
      if (a.t === b.t || b.y === a.y) return a.t;
      var u = (y - a.y) / (b.y - a.y);
      u = u * u * (3 - 2 * u); // smoothstep
      return d3.zoomIdentity
        .translate(a.t.x + (b.t.x - a.t.x) * u, a.t.y + (b.t.y - a.t.y) * u)
        .scale(a.t.k + (b.t.k - a.t.k) * u);
    }
  }
  return camT[camT.length - 1].t;
}

// ------------------------------------------------------------------- SVG --
var svg = d3.select("#stage").append("svg").attr("width", W).attr("height", H)
  .attr("viewBox", "0 0 " + W + " " + H);
var defs = svg.append("defs");

// clip paths
defs.append("clipPath").attr("id", "clipNation").append("path").attr("d", path(nationF));
var clipLand = defs.append("clipPath").attr("id", "clipLand");
clipLand.append("path").attr("d", path(nationF));
clipLand.append("path").attr("d", path(D.world110.land));

// hatch patterns
function hatch(id, color, gap, w) {
  var p = defs.append("pattern").attr("id", id).attr("width", gap).attr("height", gap)
    .attr("patternTransform", "rotate(45)").attr("patternUnits", "userSpaceOnUse");
  p.append("rect").attr("width", gap).attr("height", gap).attr("fill", "none");
  p.append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", gap)
    .attr("stroke", color).attr("stroke-width", w || 1);
}
hatch("hatchProv", "rgba(230,220,190,.5)", 5, 1);
hatch("hatchRegion", "rgba(200,160,100,.5)", 6, 1);
hatch("hatchDust", "rgba(190,140,70,.55)", 5, 1);
// sparse dot pattern for the bison range
(function () {
  var p = defs.append("pattern").attr("id", "bisonDots").attr("width", 7).attr("height", 7)
    .attr("patternUnits", "userSpaceOnUse");
  p.append("circle").attr("cx", 2).attr("cy", 2).attr("r", 0.9).attr("fill", "rgba(190,160,110,.5)");
})();

var gWorld = svg.append("g");

// --- satellite base: world raster stack; dark veil; land dimmer; U.S. bright ---
var gBase = gWorld.append("g");
var EPOCHS = (D.rasters || []).filter(function (r) { return r.epoch; })
  .map(function (r) { return r.epoch; }).sort(function (a, b) { return a - b; });
function rasterStack(parent) {
  var g = parent.append("g");
  (D.rasters || []).forEach(function (r) {
    var im = g.append("image").attr("href", r.href).attr("x", r.x).attr("y", r.y)
      .attr("width", r.w).attr("height", r.h).attr("preserveAspectRatio", "none");
    if (r.epoch) im.attr("class", "epochImg").attr("data-epoch", r.epoch);
  });
  return g;
}
// crossfade the land-cover epochs along the timeline
function epochOpacity(ep, y) {
  if (!EPOCHS.length) return 1;
  var i = EPOCHS.indexOf(ep);
  var prev = i > 0 ? EPOCHS[i - 1] : -1e9;
  var next = i < EPOCHS.length - 1 ? EPOCHS[i + 1] : 1e9;
  if (y <= prev || y >= next) return 0;
  if (y === ep) return 1;
  if (y < ep) return i === 0 ? 1 : (y - prev) / (ep - prev);
  return i === EPOCHS.length - 1 ? 1 : 1 - (y - ep) / (next - ep);
}
function veilRect(parent) {
  return parent.append("rect").attr("x", WORLD_BOUNDS[0]).attr("y", WORLD_BOUNDS[1])
    .attr("width", WORLD_BOUNDS[2] - WORLD_BOUNDS[0]).attr("height", WORLD_BOUNDS[3] - WORLD_BOUNDS[1])
    .attr("fill", "#060a10").attr("class", "veil");
}
rasterStack(gBase);                                          // everything
veilRect(gBase).attr("opacity", 0.52);                       // ocean + all
rasterStack(gBase).attr("clip-path", "url(#clipLand)");      // land restored…
veilRect(gBase).attr("opacity", 0.33).attr("clip-path", "url(#clipLand)"); // …then dimmed…
rasterStack(gBase).attr("clip-path", "url(#clipNation)");    // …except the U.S.

// rest-of-world political context on the same map (110m outside the 50m NA set)
var NA50 = {};
D.countries.features.forEach(function (f) { NA50[f.properties.name] = 1; });
var world110Rest = { type: "FeatureCollection",
  features: D.world110.countries.features.filter(function (f) { return !NA50[f.properties.name]; }) };
gBase.append("path").attr("class", "wctry").attr("d", path(world110Rest));

// procedural urban-growth footprints (clipped to U.S. land)
(function () {
  var p = defs.append("pattern").attr("id", "urbTex").attr("width", 2.4).attr("height", 2.4)
    .attr("patternUnits", "userSpaceOnUse");
  p.append("rect").attr("width", 2.4).attr("height", 2.4).attr("fill", "rgba(206,199,184,.38)");
  p.append("path").attr("d", "M0,1.2 H2.4 M1.2,0 V2.4").attr("stroke", "rgba(70,66,58,.4)").attr("stroke-width", 0.28);
})();
var gUrban = gWorld.append("g").attr("clip-path", "url(#clipNation)");
var URB_N = 30;
D.urban.forEach(function (m) {
  var shape = [], sum = 0;
  for (var i = 0; i < URB_N; i++) {
    var th = i / URB_N * 2 * Math.PI, f = 1;
    (m.lobes || []).forEach(function (lb) {
      var c = Math.cos(th - lb[0] * Math.PI / 180);
      if (c > 0) f += lb[1] * c * c * c;
    });
    f *= 0.82 + 0.18 * Math.sin(3 * th + m.seed) + 0.12 * Math.sin(7 * th + 2.3 * m.seed);
    shape.push(f); sum += f * f;
  }
  var norm = 1 / Math.sqrt(sum / URB_N);
  m._shape = shape.map(function (f) { return f * norm; });
  m._px = projection(m.c);
  var g = gUrban.append("g").style("display", "none");
  m._ring = g.append("path").attr("class", "urbRing");
  m._core = g.append("path").attr("class", "urbCore");
  m._g = g;
});
var urbLine = d3.line().curve(d3.curveCatmullRomClosed.alpha(0.6));
function urbanPathD(m, rRef) {
  var pts = [];
  for (var i = 0; i < URB_N; i++) {
    var th = i / URB_N * 2 * Math.PI, r = rRef * m._shape[i];
    pts.push([m._px[0] + r * Math.cos(th), m._px[1] - r * Math.sin(th)]);
  }
  return urbLine(pts);
}
var lastUrbanYear = -1;
function updateUrban(iy) {
  if (iy === lastUrbanYear) return;
  lastUrbanYear = iy;
  D.urban.forEach(function (m) {
    var A = iy < m.start ? 0 : interpSeries(m.area, iy);
    if (A < 0.05 || !L.routes) { m._g.style("display", "none"); return; }
    m._g.style("display", null);
    var r = Math.sqrt(A / Math.PI) * 0.4505; // sq mi -> ref-unit radius
    m._ring.attr("d", urbanPathD(m, r));
    m._core.attr("d", urbanPathD(m, r * 0.55));
  });
}

// overseas territory geometries at their true places
var wTerrEls = [];
var gOverseas = gWorld.append("g");
D.insets.forEach(function (c) {
  c.feats.forEach(function (f) {
    var geo = f.geoRef ? stateByFips[f.geoRef] : D[f.geoKey];
    if (!geo) return;
    var el = gOverseas.append("path").datum(f).attr("class", "wterr notyet").attr("d", path(geo))
      .on("click", function (ev, ff) {
        ev.stopPropagation();
        var t = D.territories.find(function (tt) { return tt.id === ff.cardId; });
        if (t) openCard("territory", t);
      })
      .on("mousemove", function (ev, ff) { tip(ev, ff.name, ""); })
      .on("mouseleave", hideTip);
    wTerrEls.push({ f: f, el: el });
  });
});

// trade arcs & treaty lines
function greatArc(a, b) {
  var interp = d3.geoInterpolate(a, b), pts = [];
  for (var i = 0; i <= 48; i++) pts.push(interp(i / 48));
  return { type: "LineString", coordinates: pts };
}
var TRADE_COLORS = { "export": "#a8cc7f", "import": "#d4b08a", "both": "#9fc0d8" };
var gTreaty = gWorld.append("g");
var gTrade = gWorld.append("g");
var DCPT = [-77.03, 38.9];
var tradeEls = gTrade.selectAll("g").data(D.trade).enter().append("g");
tradeEls.each(function (t) {
  var g = d3.select(this), dd = path(greatArc(t.us, t.world));
  g.append("path").attr("class", "tradeHit").attr("d", dd)
    .on("click", function (ev) { ev.stopPropagation(); openCard("trade", t); })
    .on("mousemove", function (ev) { tip(ev, t.name, (t.dir === "import" ? "\u2190 " : t.dir === "export" ? "\u2192 " : "\u2194 ") + t.partner); })
    .on("mouseleave", hideTip);
  g.append("path").attr("class", "tradeArc " + t.dir + (t.forced ? " forced" : "")).attr("d", dd)
    .attr("stroke", TRADE_COLORS[t.dir] || "#9fc0d8");
});
var treatyEls = gTreaty.selectAll("g").data(D.treaties).enter().append("g");
treatyEls.each(function (t) {
  var g = d3.select(this), dd = path(greatArc(DCPT, t.pt));
  g.append("path").attr("class", "treatyHit").attr("d", dd)
    .on("click", function (ev) { ev.stopPropagation(); openCard("treaty", t); })
    .on("mousemove", function (ev) { tip(ev, t.name, t.year + " \u00b7 " + t.partner); })
    .on("mouseleave", hideTip);
  g.append("path").attr("class", "treatyLine").attr("d", dd);
});

var gGrat = gWorld.append("g");
var gCtx = gWorld.append("g");
var gNation = gWorld.append("g");
var gForeign = gWorld.append("g");
var gAcq = gWorld.append("g");
var gLakes = gWorld.append("g");
var gRivers = gWorld.append("g");
var gRegions = gWorld.append("g");
var gStates = gWorld.append("g");
var gRoutes = gWorld.append("g");
var gSel = gWorld.append("g");
var gMarkers = gWorld.append("g");
var gPulse = gWorld.append("g");

gGrat.append("path").attr("class", "graticule").attr("d", path(d3.geoGraticule10()));

// context countries
gCtx.selectAll("path").data(D.countries.features).enter().append("path")
  .attr("class", "ctry").attr("d", path);

// U.S. coastline accent (terrain itself comes from the basemap layer)
gNation.append("path").attr("class", "coast").attr("d", path(nationF));

// foreign / colonial claims
var foreignEls = gForeign.selectAll("g").data(D.territories.filter(function (t) { return t.kind === "foreign"; }))
  .enter().append("g");
foreignEls.each(function (t) {
  var g = d3.select(this);
  if (!t.geoRef && !t.geo) return; // label-only context entry
  var dd = t.geoRef ? path(stateByFips[t.geoRef]) : path(t.geo);
  g.append("path").attr("class", "foreignT").attr("d", dd)
    .attr("fill", t.color).attr("fill-opacity", 0.40)
    .attr("clip-path", t.clipToLand ? "url(#clipLand)" : null)
    .style("cursor", "pointer")
    .on("click", function (ev) { ev.stopPropagation(); openCard("territory", t); })
    .on("mousemove", function (ev) { tip(ev, t.name, t.tag); })
    .on("mouseleave", hideTip);
  if (t.hatch) g.append("path").attr("class", "hatchOverlay").attr("d", dd)
    .attr("fill", "url(#hatchRegion)").attr("clip-path", "url(#clipLand)");
});

// acquisitions
var acqList = D.territories.filter(function (t) { return t.kind === "acquisition"; });
var acqEls = gAcq.selectAll("g").data(acqList).enter().append("g");
acqEls.each(function (t) {
  var g = d3.select(this);
  if (!t.geoRef && !t.geo) return; // inset-only acquisition (Philippines, Canal Zone)
  var dd = t.geoRef ? path(stateByFips[t.geoRef]) : path(t.geo);
  t._d = dd;
  g.append("path").attr("class", "acq").attr("d", dd)
    .attr("fill", t.color).attr("fill-opacity", 0.58)
    .attr("clip-path", t.clipToNation ? "url(#clipNation)" : null)
    .style("cursor", "pointer")
    .on("click", function (ev) { ev.stopPropagation(); openCard("territory", t); })
    .on("mousemove", function (ev) { tip(ev, t.name, t.tag); })
    .on("mouseleave", hideTip);
  g.append("path").attr("class", "hatchOverlay provHatch").attr("d", dd)
    .attr("fill", "url(#hatchProv)").attr("clip-path", t.clipToNation ? "url(#clipNation)" : null)
    .style("display", "none");
});

// lakes & rivers
var RIVER_W = { "Mississippi": 1.5, "Missouri": 1.05, "Ohio": 1.0, "Columbia": 1.0, "Colorado": 1.0, "Rio Grande": 0.95, "Yukon": 1.0, "St. Lawrence": 1.0, "Arkansas": 0.85, "Snake": 0.8, "Tennessee": 0.8 };
gRivers.selectAll("path").data(D.rivers.features).enter().append("path")
  .attr("class", "river").attr("d", path)
  .attr("stroke-width", function (f) { return RIVER_W[f.properties.name] || 0.6; })
  .attr("stroke-opacity", 0.85);
var lakeEls = gLakes.selectAll("path").data(D.lakes.features).enter().append("path")
  .attr("class", "lake").attr("d", path);
// The 2004 imagery shows the Salton Sea, which only formed in 1905 — mask it before then.
var saltonF = D.lakes.features.find(function (f) { return f.properties.name === "Salton Sea"; });
var saltonCover = saltonF ? gLakes.append("path").attr("d", path(saltonF))
  .attr("fill", "#b9a67e").attr("fill-opacity", 0.9).attr("stroke", "none").style("filter", "blur(1.5px)").style("pointer-events", "none") : null;

// regions (Indian Territory, Dust Bowl)
var regionEls = gRegions.selectAll("g").data(D.regions).enter().append("g");
regionEls.each(function (r) {
  var g = d3.select(this), dd = path(r.geo);
  g.append("path").attr("class", "regionShape").attr("d", dd)
    .attr("fill", r.id === "dustbowl" ? "url(#hatchDust)" : "url(#hatchRegion)")
    .attr("stroke", r.color).attr("stroke-opacity", .55).attr("stroke-dasharray", "5 3")
    .on("click", function (ev) { ev.stopPropagation(); openCard("region", r); })
    .on("mousemove", function (ev) { tip(ev, r.name, r.tag); })
    .on("mouseleave", hideTip);
});
// bison
var bisonEl = gRegions.append("path").attr("class", "bisonShape").attr("fill", "url(#bisonDots)")
  .on("click", function (ev) { ev.stopPropagation(); openCard("bison", D.bison); })
  .on("mousemove", function (ev) { tip(ev, "Range of the American Bison", "click for the story"); })
  .on("mouseleave", hideTip);

// states
var stateEls = gStates.selectAll("g").data(Object.keys(D.statesMeta)).enter().append("g")
  .attr("class", "stateG");
stateEls.each(function (fips) {
  var g = d3.select(this);
  g.append("path").attr("class", "stateLine").attr("d", "");
  g.append("path").attr("class", "stateFill").attr("d", "")
    .on("click", function (ev) { ev.stopPropagation(); openCard("state", fips); })
    .on("mousemove", function (ev) {
      var m = D.statesMeta[fips], iy = Math.floor(year);
      tip(ev, m.name, iy < m.admitted ? (m.colony && iy < 1776 ? "British colony" : "admitted " + m.admitted) : "admitted " + m.admitted + (m.capital !== "—" ? " · " + m.capital : ""));
    })
    .on("mouseleave", hideTip);
});

// routes
var routeEls = gRoutes.selectAll("g").data(D.routes).enter().append("g");
routeEls.each(function (r) {
  var g = d3.select(this);
  var geo = { type: "LineString", coordinates: r.line };
  var dd = path(geo);
  g.append("path").attr("class", "routeHit").attr("d", dd)
    .on("click", function (ev) { ev.stopPropagation(); openCard("route", r); })
    .on("mousemove", function (ev) { tip(ev, r.name, r.tag); })
    .on("mouseleave", hideTip);
  g.append("path").attr("class", "routeLine route-" + r.kind).attr("d", dd);
});

// ------------------------------------------------------------------ markers --
// marker = <g transform="translate scale(1/k)"> holding dot/glyph + label
var markers = [];
function addMarker(spec) {
  var g = gMarkers.append("g").attr("class", "marker").style("display", "none");
  g.append("circle").attr("class", "birth").attr("r", 9).style("display", "none");
  spec.node = g;
  var p = projection([spec.lon, spec.lat]);
  spec.px = p[0]; spec.py = p[1];
  markers.push(spec);
  return g;
}

// city markers
D.cities.forEach(function (c) {
  var g = addMarker({ type: "city", obj: c, lon: c.lon, lat: c.lat, tier: c.tier, prio: 20 + c.tier * 4, fs: 10.5, tracked: false });
  g.append("circle").attr("class", "city-halo").attr("r", 8)
    .on("click", function (ev) { ev.stopPropagation(); openCard("city", c); })
    .on("mousemove", function (ev) { tip(ev, c.name, cityTipSub(c)); })
    .on("mouseleave", hideTip);
  g.append("circle").attr("class", "city-dot").attr("r", 2.3).style("pointer-events", "none");
  g.append("text").attr("class", "lbl city").attr("x", 4.5).attr("y", 3.4).text(c.name)
    .on("click", function (ev) { ev.stopPropagation(); openCard("city", c); });
});
function cityTipSub(c) {
  var iy = Math.floor(year);
  if (iy < c.joins) return "founded " + c.founded + " · not yet U.S.";
  return "founded " + c.founded;
}

// geographic feature labels
D.geofeatures.forEach(function (f) {
  var fs = f.tier === 1 ? 13 : f.tier === 2 ? 11 : 9.5;
  var g = addMarker({ type: "geo", obj: f, lon: f.lon, lat: f.lat, tier: f.tier, prio: 30 + f.tier * 5, fs: fs, tracked: true });
  var water = /river|lake|bay|sound|delta|falls|wetland/.test(f.kind);
  g.append("text").attr("class", "lbl geo" + (water ? " water" : ""))
    .attr("transform", "rotate(" + (f.angle || 0) + ")")
    .style("font-size", fs + "px").text(f.name)
    .on("click", function (ev) { ev.stopPropagation(); openCard("geo", f); })
    .on("mousemove", function (ev) { tip(ev, f.name, f.kind); })
    .on("mouseleave", hideTip);
});

// parks & landmarks
D.landmarks.forEach(function (p) {
  var g = addMarker({ type: "park", obj: p, lon: p.lon, lat: p.lat, tier: p.tier, prio: 26 + p.tier * 4, fs: 9.5, tracked: false });
  var cls = p.kind === "park" ? "park-mark" : "landmark-mark";
  if (p.kind === "park") g.append("path").attr("class", cls).attr("d", "M0,-4 L3.5,2.5 L-3.5,2.5 Z");
  else g.append("path").attr("class", cls).attr("d", "M0,-4 L3.2,0 L0,4 L-3.2,0 Z");
  g.append("circle").attr("r", 8).attr("fill", "transparent").style("cursor", "pointer")
    .on("click", function (ev) { ev.stopPropagation(); openCard("landmark", p); })
    .on("mousemove", function (ev) { tip(ev, p.name, (p.kind === "park" ? "est. " : "") + p.appears); })
    .on("mouseleave", hideTip);
  g.append("text").attr("class", "lbl " + (p.kind === "park" ? "park" : "landmark"))
    .attr("x", 5.5).attr("y", 3.2).text(p.name)
    .on("click", function (ev) { ev.stopPropagation(); openCard("landmark", p); });
});

// state name labels
var TINY = { "44": 3, "10": 3, "09": 3, "34": 3, "11": 3, "24": 2, "25": 2, "33": 2, "50": 2, "54": 2, "45": 2, "23": 2, "48": 1, "06": 1 };
Object.keys(D.statesMeta).forEach(function (fips) {
  if (fips === "11") return; // DC handled as a marker below
  var f = stateByFips[fips]; if (!f) return;
  var c = path.centroid(f);
  var m = D.statesMeta[fips];
  var sp = { type: "stateLbl", obj: fips, lon: 0, lat: 0, tier: TINY[fips] || 1, prio: 14 + (TINY[fips] || 1) * 6, fs: (TINY[fips] === 3 ? 7.5 : TINY[fips] === 2 ? 8.5 : 10), tracked: true };
  var g = gMarkers.append("g").attr("class", "marker").style("display", "none");
  sp.node = g; sp.px = c[0]; sp.py = c[1];
  markers.push(sp);
  g.append("text").attr("class", "lbl state").style("font-size", (TINY[fips] === 3 ? 7.5 : TINY[fips] === 2 ? 8.5 : 10) + "px")
    .text(m.name.toUpperCase())
    .on("click", function (ev) { ev.stopPropagation(); openCard("state", fips); })
    .on("mousemove", function (ev) { tip(ev, m.name, "admitted " + m.admitted); })
    .on("mouseleave", hideTip);
});
// DC marker
(function () {
  var sp = { type: "city", obj: null, lon: -77.03, lat: 38.9, tier: 3, prio: 40, dcStar: true };
  // DC is covered by the Washington city entry; add only the federal star
})();

// acquisition / foreign / region labels
function addAreaLabel(t, cls) {
  if (!t.label || !t.labelAt) return;
  var fs0 = t.labelSize === 1 ? 17 : t.labelSize === 2 ? 12.5 : 10;
  var sp = { type: cls, obj: t, lon: t.labelAt[0], lat: t.labelAt[1], tier: t.labelSize || 2, prio: 4 + (t.labelSize || 2), fs: fs0, tracked: true };
  var g = gMarkers.append("g").attr("class", "marker").style("display", "none");
  sp.node = g;
  var p = projection(t.labelAt); sp.px = p[0]; sp.py = p[1];
  markers.push(sp);
  var fs = fs0;
  var col = cls === "acqLbl" ? d3.color(t.color).brighter(1.1) : d3.color(t.color).brighter(0.9);
  g.append("text").attr("class", "lbl " + cls).style("font-size", fs + "px").attr("fill", col)
    .text(t.label)
    .on("click", function (ev) {
      ev.stopPropagation();
      openCard(cls === "regionLbl" ? "region" : "territory", t);
    });
}
D.territories.forEach(function (t) { addAreaLabel(t, t.kind === "acquisition" ? "acqLbl" : "foreignLbl"); });
D.regions.forEach(function (r) { addAreaLabel(r, "regionLbl"); });

// technology & infrastructure sites
var INFRA_COLORS = { oilfield: "#d4a05f", gasfield: "#c9a06a", refinery: "#c98f5f", coalfield: "#a8917a", mine: "#d9c26a",
  "plant-hydro": "#6db8d4", "plant-nuclear": "#c48fd4", "plant-coal": "#a88f7a", "plant-solar": "#e8d47a", "plant-wind": "#a8d8b8",
  factory: "#d48f7a", port: "#7aa8d8", highway: "#b8b0a0", spaceport: "#c4a8d8", datacenter: "#8fd48f" };
D.tech.forEach(function (t) {
  var g = addMarker({ type: "tech", obj: t, lon: t.lon, lat: t.lat, tier: t.tier, prio: 24 + t.tier * 4, fs: 9.5, tracked: false });
  g.append("path").attr("class", "tech-mark").attr("d", "M0,-3.6 L3.2,-1.8 L3.2,1.8 L0,3.6 L-3.2,1.8 L-3.2,-1.8 Z");
  g.append("circle").attr("r", 8).attr("fill", "transparent").style("cursor", "pointer")
    .on("click", function (ev) { ev.stopPropagation(); openCard("tech", t); })
    .on("mousemove", function (ev) { tip(ev, t.name, (t.cat || "technology") + " \u00b7 " + t.from); })
    .on("mouseleave", hideTip);
  g.append("text").attr("class", "lbl tech").attr("x", 5.5).attr("y", 3.2).text(t.name)
    .on("click", function (ev) { ev.stopPropagation(); openCard("tech", t); });
});
D.infra.forEach(function (t) {
  var g = addMarker({ type: "infra", obj: t, lon: t.lon, lat: t.lat, tier: t.tier, prio: 25 + t.tier * 4, fs: 9.5, tracked: false });
  var col = INFRA_COLORS[t.kind] || "#c4b89a";
  g.append("rect").attr("class", "infra-mark").attr("x", -2.8).attr("y", -2.8).attr("width", 5.6).attr("height", 5.6)
    .attr("transform", "rotate(45)").attr("fill", col);
  g.append("circle").attr("r", 8).attr("fill", "transparent").style("cursor", "pointer")
    .on("click", function (ev) { ev.stopPropagation(); openCard("infra", t); })
    .on("mousemove", function (ev) { tip(ev, t.name, (t.kind || "infrastructure") + " \u00b7 " + t.from + (t.to ? "\u2013" + t.to : "")); })
    .on("mouseleave", hideTip);
  g.append("text").attr("class", "lbl infra").attr("fill", col).attr("x", 5.5).attr("y", 3.2).text(t.name)
    .on("click", function (ev) { ev.stopPropagation(); openCard("infra", t); });
});
// world-frame country labels
(D.world110.labels || []).forEach(function (l) {
  var p = projection([l[1], l[2]]);
  if (!p) return;
  var fs = l[3] === 1 ? 12 : l[3] === 2 ? 10 : 8.5;
  var sp = { type: "worldLbl", obj: { name: l[0] }, tier: l[3], prio: 34 + l[3] * 5, fs: fs, tracked: true };
  var g = gMarkers.append("g").attr("class", "marker").style("display", "none");
  sp.node = g; sp.px = p[0]; sp.py = p[1]; markers.push(sp);
  g.append("text").attr("class", "lbl worldLbl").style("font-size", fs + "px").text(String(l[0]).toUpperCase());
});
(function () {
  var p = projection([-98, 38.5]);
  var sp = { type: "worldLbl", obj: { name: "United States" }, tier: 1, prio: 30, fs: 13, tracked: true };
  var g = gMarkers.append("g").attr("class", "marker").style("display", "none");
  sp.node = g; sp.px = p[0]; sp.py = p[1]; markers.push(sp);
  g.append("text").attr("class", "lbl worldLbl worldUS").style("font-size", "13px").text("UNITED STATES");
})();
// trade & treaty labels
D.trade.forEach(function (t, ti) {
  var p = projection(d3.geoInterpolate(t.us, t.world)(0.34 + (ti % 5) * 0.09));
  if (!p) return;
  var sp = { type: "tradeLbl", obj: t, tier: 2, prio: 18, fs: 9.5, tracked: false };
  var g = gMarkers.append("g").attr("class", "marker").style("display", "none");
  sp.node = g; sp.px = p[0]; sp.py = p[1]; markers.push(sp);
  g.append("text").attr("class", "lbl tradeLbl " + t.dir + (t.forced ? " forced" : "")).attr("text-anchor", "middle")
    .text((t.dir === "import" ? "\u2190 " : t.dir === "export" ? "\u2192 " : "\u2194 ") + t.name)
    .style("cursor", "pointer")
    .on("click", function (ev) { ev.stopPropagation(); openCard("trade", t); });
});
D.treaties.forEach(function (t) {
  var p = projection(t.pt);
  if (!p) return;
  var sp = { type: "treatyLbl", obj: t, tier: 3, prio: 22, fs: 9, tracked: false };
  var g = gMarkers.append("g").attr("class", "marker").style("display", "none");
  sp.node = g; sp.px = p[0]; sp.py = p[1]; markers.push(sp);
  g.append("text").attr("class", "lbl treatyLbl").attr("x", 5).attr("y", -5).text(t.name + " (" + t.year + ")")
    .style("cursor", "pointer")
    .on("click", function (ev) { ev.stopPropagation(); openCard("treaty", t); });
});

// ------------------------------------------------------------------- zoom --
var zoomBehavior = d3.zoom().scaleExtent([0.12, 60])
  .on("start", function (ev) { if (ev.sourceEvent) { userCamOn(); svg.classed("dragging", true); } })
  .on("zoom", function (ev) {
    gWorld.attr("transform", ev.transform);
    currentT = ev.transform;
    scaleMarkers();
    throttledCull();
  })
  .on("end", function () { svg.classed("dragging", false); cullLabels(); });
svg.call(zoomBehavior).on("dblclick.zoom", null);
var currentT = d3.zoomIdentity;

function userCamOn() {
  if (!userCam) {
    userCam = true;
    d3.select("#recenterBtn").classed("hidden", false);
  }
}
d3.select("#recenterBtn").on("click", function () { backToMain(); });
d3.select("#tgAutoCam").on("change", function () {
  autoCam = this.checked;
  if (autoCam) { userCam = false; d3.select("#recenterBtn").classed("hidden", true); applyCamera(true); }
});

var camApplying = false;
function applyCamera(animated) {
  if (camFocus) return;
  if (!autoCam || userCam) return;
  var t = cameraFor(year);
  camApplying = true;
  if (animated) svg.transition().duration(650).ease(d3.easeCubicOut).call(zoomBehavior.transform, t)
    .on("end", function () { camApplying = false; });
  else { svg.call(zoomBehavior.transform, t); camApplying = false; }
}
// guard: programmatic transforms shouldn't flip userCam
zoomBehavior.on("start.guard", function (ev) { if (!ev.sourceEvent && camApplying) {/* programmatic */} });

function scaleMarkers() {
  var k = currentT.k;
  var s = 1 / k;
  markers.forEach(function (m) {
    if (m._vis) m.node.attr("transform", "translate(" + m.px + "," + m.py + ") scale(" + s + ")");
  });
}

// ------------------------------------------------------------ label culling --
var cullTimer = null;
function throttledCull() { if (!cullTimer) cullTimer = setTimeout(function () { cullTimer = null; cullLabels(); }, 120); }

function markerActive(m, iy) {
  var k = currentT.k;
  if (m.type === "city") {
    var c = m.obj;
    if (!L.poliLabels || iy < c.appears) return false;
    return c.tier === 1 ? true : c.tier === 2 ? k >= 1.9 : k >= 3.2;
  }
  if (m.type === "geo") {
    if (!L.geoLabels) return false;
    return m.tier === 1 ? k >= 1.15 : m.tier === 2 ? k >= 1.9 : k >= 2.9;
  }
  if (m.type === "park") {
    var p = m.obj;
    if (!L.parks || iy < p.appears) return false;
    return m.tier === 1 ? k >= 1.25 : m.tier === 2 ? k >= 1.9 : k >= 2.8;
  }
  if (m.type === "stateLbl") {
    var meta = D.statesMeta[m.obj];
    if (!L.poliLabels) return false;
    if (iy < meta.borders || absorbedBy(m.obj, iy)) return false;
    var needed = m.tier === 1 ? 1.5 : m.tier === 2 ? 2.6 : 4.0;
    if (meta.colony && iy < 1776) needed = m.tier === 1 ? 1.2 : m.tier === 2 ? 2.2 : 3.4;
    return k >= needed;
  }
  if (m.type === "acqLbl") {
    var t = m.obj;
    if (!L.poliLabels) return false;
    if (m.tier === 3 && k < 0.45) return false;
    var iy2 = Math.floor(year);
    return iy2 >= (t.labelFrom || t.from) && iy2 <= (t.labelTo || YR1);
  }
  if (m.type === "foreignLbl") {
    var tf = m.obj;
    if (!L.context) return false;
    return iy >= tf.from && iy < (tf.labelTo || tf.to || YR1);
  }
  if (m.type === "regionLbl") {
    var r = m.obj;
    var on = r.kind === "eco" ? L.eco : L.poliLabels;
    return on && k >= 0.5 && iy >= r.from && iy < (r.to || YR1);
  }
  if (m.type === "tech") {
    var tt = m.obj;
    if (!L.tech || iy < tt.from) return false;
    if (tt.to && iy >= tt.to + 3) return false;
    if (year < tt.from + 2) return true; // newborn items surface at any zoom
    return m.tier === 1 ? k >= 1.1 : m.tier === 2 ? k >= 2.1 : k >= 3.2;
  }
  if (m.type === "infra") {
    var ti = m.obj;
    if (!L.routes || iy < ti.from) return false;
    if (ti.to && iy >= ti.to + 3) return false;
    if (year < ti.from + 2) return true; // newborn items surface at any zoom
    return m.tier === 1 ? k >= 1.1 : m.tier === 2 ? k >= 2.1 : k >= 3.2;
  }
  if (m.type === "worldLbl") {
    if (m.obj.name === "United States") return iy >= 1776 && k >= 0.12 && k <= 1.0;
    return m.tier === 1 ? k >= 0.12 : m.tier === 2 ? k >= 0.32 : k >= 0.75;
  }
  if (m.type === "tradeLbl") {
    var td = m.obj;
    return L.trade && iy >= td.from && iy < (td.to || YR1) + 1 && k >= 0.13;
  }
  if (m.type === "treatyLbl") {
    var tz = m.obj;
    return L.trade && iy >= tz.from && iy < (tz.to || YR1) + 1 && k >= 0.3;
  }
  return false;
}

function birthYearOf(m) {
  if (!m.obj) return null;
  if (m.type === "city" || m.type === "park") return m.obj.appears;
  if (m.type === "tech" || m.type === "infra") return m.obj.from;
  return null;
}

function cullLabels() {
  var iy = Math.floor(year);
  var k = currentT.k;
  var cands = [];
  markers.forEach(function (m) {
    m._vis = false;
    var by = birthYearOf(m);
    m._fresh = by !== null && year >= by && year < by + 2;
    if (markerActive(m, iy)) cands.push(m);
  });
  cands.sort(function (a, b) { return (a.prio - (a._fresh ? 28 : 0)) - (b.prio - (b._fresh ? 28 : 0)); });
  var placed = [];
  cands.forEach(function (m) {
    var sx = currentT.applyX(m.px), sy = currentT.applyY(m.py);
    if (sx < -50 || sx > W + 50 || sy < -40 || sy > H + 40) return;
    var name = m.type === "stateLbl" ? D.statesMeta[m.obj].name :
               (m.obj && (m.obj.label || m.obj.name)) || "";
    var fw = m.type === "geo" || m.type === "stateLbl" || m.type === "acqLbl" || m.type === "foreignLbl" || m.type === "regionLbl";
    var fsz = m.fs || 10.5;
    var wpx = m.tracked ? name.length * fsz * 0.95 + 12 : name.length * fsz * 0.66 + 18;
    var hpx = fsz + 6;
    var x0 = fw ? sx - wpx / 2 : sx, y0 = sy - hpx / 2;
    var ok = true;
    for (var i = 0; i < placed.length; i++) {
      var p = placed[i];
      if (x0 < p.x1 - 2 && x0 + wpx > p.x0 + 2 && y0 < p.y1 - 2 && y0 + hpx > p.y0 + 2) { ok = false; break; }
    }
    if (ok) { m._vis = true; placed.push({ x0: x0, y0: y0, x1: x0 + wpx, y1: y0 + hpx }); }
  });
  var s = 1 / k;
  markers.forEach(function (m) {
    m.node.style("display", m._vis ? null : "none");
    if (m._vis) {
      m.node.attr("transform", "translate(" + m.px + "," + m.py + ") scale(" + s + ")");
      m.node.select(".birth").style("display", m._fresh ? null : "none");
    }
  });
}

// ---------------------------------------------------------------- rendering --
function fadeIn(y, from, span) { return Math.max(0, Math.min(1, (y - from) / (span || 1.2))); }

function render() {
  var y = year, iy = Math.floor(y);

  // subtle era grade on the satellite base: richer vegetation before industrial
  // land conversion (an impression, not a reconstruction — see About)
  var tg = Math.max(0, Math.min(1, (y - 1850) / 110));
  gBase.attr("filter", "saturate(" + (1.07 - 0.07 * tg).toFixed(3) + ") brightness(" + (0.98 + 0.02 * tg).toFixed(3) + ")");
  gBase.selectAll(".epochImg").attr("opacity", function () {
    return epochOpacity(+this.getAttribute("data-epoch"), y).toFixed(3);
  });

  // foreign claims
  foreignEls.style("display", function (t) {
    if (!L.context) return "none";
    return (y >= t.from && y < (t.to || YR1) + 0.001) ? null : "none";
  }).style("opacity", function (t) {
    var o = fadeIn(y, t.from, 1.5);
    if (t.to) o = Math.min(o, Math.max(0, Math.min(1, (t.to + 0.6 - y) / 0.6)));
    return o;
  });
  gForeign.selectAll(".foreignT").attr("fill-opacity", shadeMode === "geo" ? 0.16 : 0.40);

  // acquisitions
  acqEls.style("display", function (t) {
    if (y < t.from) return "none";
    if (t.to && y >= t.to + 4) return "none";
    return null;
  }).style("opacity", function (t) {
    var o = 0.35 + 0.65 * fadeIn(y, t.from, 2.5);
    if (t.to && y > t.to) o *= Math.max(0, 1 - (y - t.to) / 4);
    return o;
  });
  acqEls.select(".acq")
    .attr("fill", function (t) { return t.color; })
    .attr("fill-opacity", shadeMode === "geo" ? 0.12 : 0.5)
    .attr("stroke-opacity", shadeMode === "geo" ? 0.55 : 0.3)
    .attr("stroke", function (t) { return shadeMode === "geo" ? d3.color(t.color).brighter(0.8) : "rgba(255,255,255,.14)"; });
  acqEls.select(".provHatch").style("display", function (t) {
    return (t.provisionalUntil && y < t.provisionalUntil) ? null : "none";
  });

  // lakes: Salton Sea forms 1905 (vector + imagery mask)
  lakeEls.style("display", function (f) {
    return (f.properties.name === "Salton Sea" && iy < 1905) ? "none" : null;
  });
  if (saltonCover) saltonCover.style("display", iy < 1905 ? null : "none");

  // regions
  regionEls.style("display", function (r) {
    var on = r.kind === "eco" ? L.eco : true;
    return on && y >= r.from && y < (r.to || YR1) + 1 ? null : "none";
  });

  // bison
  if (L.eco) {
    var st = null;
    for (var i = 0; i < D.bison.stages.length; i++) {
      var s = D.bison.stages[i];
      if (y >= s.from && y < s.to) { st = s; break; }
    }
    if (st) { bisonEl.style("display", null).attr("d", path(st.geo)); }
    else bisonEl.style("display", "none");
  } else bisonEl.style("display", "none");

  // routes
  routeEls.style("display", function (r) {
    if (!L.routes || y < r.from) return "none";
    if (r.to && y > r.to + 6) return "none";
    return null;
  }).style("opacity", function (r) {
    var o = fadeIn(y, r.from, 2);
    if (r.to && y > r.to) o = Math.max(0, 1 - (y - r.to) / 6);
    return o;
  });

  // states — geometry only recomputed when the integer year crosses a boundary set
  if (iy !== lastIntYear) {
    stateEls.each(function (fips) {
      var g = d3.select(this), meta = D.statesMeta[fips];
      var show = iy >= meta.borders && !absorbedBy(fips, iy);
      if (!show) { g.style("display", "none"); return; }
      g.style("display", null);
      var f = stateGeom(fips, iy);
      var dd = path(f);
      var line = g.select(".stateLine").attr("d", dd);
      line.classed("colony", !!(meta.colony && iy < 1776));
      line.classed("republicVT", !!(meta.republic && iy < meta.republic[1]));
      g.select(".stateFill").attr("d", dd);
    });
    gStates.selectAll(".stateLine").style("display", L.borders ? null : "none");
  }

  // readout
  d3.select("#yearBig").text(iy);
  var era = currentEra(y);
  d3.select("#eraName").text(era ? era.name : "");
  d3.select("#statPop").text(fmtPop(interpSeries(D.population, y)));
  var ens = y < 1866 ? interpSeries(D.enslaved, Math.min(y, 1860)) : 0;
  d3.select("#statEnslavedRow").style("display", y < 1866 ? null : "none");
  d3.select("#statEnslaved").text(y < 1866 ? fmtPop(ens) : "");
  d3.select("#statStates").text(stateCount(iy));
  d3.select("#statArea").text(fmtArea(areaAt(y)));
  d3.select("#statLeader").text(lastLE(D.leaders, y));
  d3.select("#statCapital").text(lastLE(D.capitals, y));

  // chapters + legend + timeline chrome
  updateChapters(era);
  updateLegend(iy);
  updateTimeline(y);
  updateEventReadout(y);
  updateTerritoryUI(iy);

  // trade arcs & treaty lines (world frame)
  tradeEls.style("display", function (t) { return (L.trade && y >= t.from && y < (t.to || YR1) + 1) ? null : "none"; });
  treatyEls.style("display", function (t) { return (L.trade && y >= t.from && y < (t.to || YR1) + 1) ? null : "none"; });
  wTerrEls.forEach(function (w) { w.el.attr("class", "wterr " + featStatus(w.f, iy)); });

  // event pulses on the map
  rebuildPulses(iy);

  // urban footprints
  updateUrban(iy);

  // industrial metrics + panel layout
  updateIndustry(y);
  positionViewPanel();

  // selected card follows the year
  if (selected) refreshCard();

  if (iy !== lastIntYear) { cullLabels(); lastIntYear = iy; }

  // marker sub-styles that depend on year (city under foreign flag)
  gMarkers.selectAll(".city-dot").classed("foreignCity", function () { return false; });
  D.cities.forEach(function (c) { /* handled via cull + class below */ });
  markers.forEach(function (m) {
    if (m.type === "city" && m._vis) {
      var fo = iy < m.obj.joins || (m.obj.leaves && iy >= m.obj.leaves);
      m.node.select(".city-dot").classed("foreignCity", fo);
      m.node.select(".lbl").classed("foreignCity", fo);
    }
  });

  writeHash(iy);
}

function currentEra(y) {
  for (var i = 0; i < D.eras.length; i++) if (y >= D.eras[i].from && y < D.eras[i].to) return D.eras[i];
  return D.eras[D.eras.length - 1];
}
function interpSeries(S, y) {
  if (y <= S[0][0]) return S[0][1];
  for (var i = 0; i < S.length - 1; i++) {
    var a = S[i], b = S[i + 1];
    if (y >= a[0] && y <= b[0]) return a[1] + (b[1] - a[1]) * (y - a[0]) / (b[0] - a[0]);
  }
  return S[S.length - 1][1];
}
function lastLE(S, y) {
  var v = S[0][1];
  for (var i = 0; i < S.length; i++) { if (S[i][0] <= y) v = S[i][1]; else break; }
  return v;
}
function fmtPop(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(n >= 20e6 ? 0 : 1) + " million";
  if (n >= 1000) return Math.round(n / 1000) + ",000";
  return Math.round(n);
}
function areaAt(y) {
  var sum = 0;
  D.areaLedger.forEach(function (r) { if (y >= r[0]) sum += r[1]; });
  return sum;
}
function fmtArea(a) {
  if (!a) return "—";
  return (a / 1e6 >= 1 ? (a / 1e6).toFixed(2) + "M" : Math.round(a / 1000) + ",000") + " sq mi";
}
function stateCount(iy) {
  var n = 0;
  Object.keys(D.statesMeta).forEach(function (f) {
    var m = D.statesMeta[f];
    if (!m.district && iy >= m.admitted && (!m.colony || iy >= 1776)) n++;
    if (m.colony && iy < 1776) {/* colonies not states */}
  });
  return n;
}

// ------------------------------------------------------------------ pulses --
var lastPulseYear = -1;
function rebuildPulses(iy) {
  if (iy === lastPulseYear) return;
  lastPulseYear = iy;
  gPulse.selectAll("*").remove();
  D.events.forEach(function (e) {
    if (!e.pt) return;
    if (iy >= e.year && iy < e.year + 2) {
      var p = projection(e.pt);
      if (!p) return;
      gPulse.append("circle").attr("class", "evPulse").attr("cx", p[0]).attr("cy", p[1]).attr("r", 11)
        .attr("vector-effect", "non-scaling-stroke");
    }
  });
}

// ------------------------------------------------------- industrial metrics --
function fmtMoney(v) {
  if (v >= 1e12) return "$" + (v / 1e12).toFixed(v < 1e13 ? 2 : 1) + "T";
  if (v >= 1e9) return "$" + (v / 1e9).toFixed(v < 2e10 ? 1 : 0) + "B";
  return "$" + Math.round(v / 1e6) + "M";
}
var IND_ROWS = [
  { k: "GDP", from: 1790, fmt: function (y) { return fmtMoney(interpSeries(D.gdp, y)) + " (nominal)"; } },
  { k: "Military", from: 1776, fmt: function (y) { var v = interpSeries(D.military, y); return v >= 1000 ? (v / 1000).toFixed(1) + "M active" : Math.round(v) + ",000 active"; } },
  { k: "Rail", from: 1830, to: 1917, fmt: function (y) { return Math.round(interpSeries(D.rail, y)).toLocaleString() + " miles"; } },
  { k: "Steel", from: 1867, to: 1981, fmt: function (y) { var v = interpSeries(D.steel, y); return (v < 1 ? Math.round(v * 1000) + "k" : Math.round(v) + "M") + " tons/yr"; } },
  { k: "Oil", from: 1870, fmt: function (y) { var v = interpSeries(D.oil, y); return v >= 1000 ? (v / 1000).toFixed(1) + "M bbl/day" : Math.round(v) + "k bbl/day"; } },
  { k: "Electricity", from: 1902, fmt: function (y) { return Math.round(interpSeries(D.electricity, y)).toLocaleString() + " TWh"; } },
  { k: "Compute", from: 1890, fmt: function (y) { return lastLE(D.compute, y); } }
];
function updateIndustry(y) {
  var html = "";
  IND_ROWS.forEach(function (r) {
    if (y < r.from || (r.to && y >= r.to)) return;
    html += '<div class="statline"><b>' + r.k + "</b> <span>" + r.fmt(y) + "</span></div>";
  });
  var el = document.getElementById("indBlock");
  el.innerHTML = html;
  el.style.display = html ? "" : "none";
}
var lastPanelTop = 0;
function positionViewPanel() {
  var rb = document.getElementById("readout").getBoundingClientRect().bottom;
  if (rb > 60) {
    var t = Math.round(rb + 10);
    if (Math.abs(t - lastPanelTop) > 2) {
      lastPanelTop = t;
      document.getElementById("viewPanel").style.top = t + "px";
    }
  }
}

// ------------------------------------------------------------------ chapters --
var chapterEls;
function buildChapters() {
  var list = d3.select("#chapterList");
  chapterEls = list.selectAll("div.chwrap").data(D.eras).enter().append("div").attr("class", "chwrap");
  chapterEls.append("div").attr("class", "chapter")
    .on("click", function (ev, e) { seek(e.from + 0.01, true); })
    .html(function (e) { return '<span class="cn">' + e.name + '</span><span class="cy">' + e.from + "–" + e.to + "</span>"; });
  chapterEls.append("div").attr("class", "chtext").style("display", "none")
    .style("font-size", "11px").style("line-height", "1.62").style("color", "var(--dim)")
    .style("padding", "2px 8px 8px").text(function (e) { return e.text; });
}
var lastEraName = "";
function updateChapters(era) {
  if (!era || era.name === lastEraName) return;
  lastEraName = era.name;
  chapterEls.select(".chapter").classed("on", function (e) { return e === era; });
  chapterEls.select(".chtext").style("display", function (e) { return e === era ? null : "none"; });
  // keep active chapter in view
  var idx = D.eras.indexOf(era);
  var node = chapterEls.nodes()[idx];
  if (node && node.scrollIntoView) node.scrollIntoView({ block: "nearest" });
}

// ------------------------------------------------------------------- legend --
var legendRows;
function buildLegend() {
  var majors = acqList.filter(function (t) { return ["guam1898", "amsamoa1900", "usvi1917", "marianas1947", "philippines1898", "canalzone1903"].indexOf(t.id) < 0; });
  legendRows = d3.select("#legendList").selectAll("div").data(majors).enter().append("div")
    .attr("class", "lgrow")
    .on("click", function (ev, t) { seek(Math.max(t.from, YR0) + 0.5, true); openCard("territory", t); })
    .html(function (t) {
      var nm = t.name.replace(/ \(.*\)/, "");
      return '<span class="sw" style="background:' + t.color + '"></span><span>' + nm + '</span><span class="yr">' + (t.from === 1776 ? "1783" : t.from) + "</span>";
    });
}
function updateLegend(iy) {
  legendRows.classed("future", function (t) { return iy < t.from; });
}

// ------------------------------------------------------------------ timeline --
var EV_COLORS = { territory: "#d9a441", war: "#cf6a55", politics: "#93a7c4", native: "#b98ad4", industry: "#7fb0c8", environment: "#7fc296", disaster: "#d97f7f", social: "#d4b07f" };
function xOf(y) { return (y - YR0) / (YR1 - YR0); }

function buildTimeline() {
  var band = d3.select("#eraBand");
  band.selectAll("div").data(D.eras).enter().append("div").attr("class", "eband")
    .style("width", function (e) { return (xOf(e.to) - xOf(e.from)) * 100 + "%"; })
    .attr("title", function (e) { return e.name + " · " + e.from + "–" + e.to; })
    .on("click", function (ev, e) { seek(e.from + 0.01, true); });

  // Era names in a staggered label layer above the band, so every name is fully
  // visible even over a 3-year era. Labels are centered on their era (clamped to
  // the viewport) and pushed to a lower row when they would collide.
  var tw = W - 44; // #bottom has 22px side padding
  var lwrap = d3.select("#eraLabels");
  var rowsOcc = [];
  D.eras.forEach(function (e) {
    var cx = ((xOf(e.from) + xOf(e.to)) / 2) * tw;
    var w = e.name.length * 6.2 + 10, half = w / 2;
    var x = Math.max(half, Math.min(tw - half, cx));
    var r = 0;
    while (rowsOcc[r] && rowsOcc[r].some(function (b) { return x - half < b.x1 && x + half > b.x0; })) r++;
    (rowsOcc[r] = rowsOcc[r] || []).push({ x0: x - half - 4, x1: x + half + 4 });
    lwrap.append("div").attr("class", "elab").datum(e)
      .style("left", x + "px").style("top", (r * 12) + "px")
      .attr("title", e.from + "–" + e.to + " · " + e.title)
      .text(e.name)
      .on("click", function (ev, d) { seek(d.from + 0.01, true); });
  });
  lwrap.style("height", (rowsOcc.length * 12 + 2) + "px");

  d3.select("#eventDots").selectAll("div").data(D.events).enter().append("div")
    .attr("class", "evdot")
    .style("left", function (e) { return xOf(e.year) * 100 + "%"; })
    .style("background", function (e) { return EV_COLORS[e.cat] || "#999"; })
    .attr("title", function (e) { return e.year + " — " + e.label; })
    .on("click", function (ev, e) { ev.stopPropagation(); seek(e.year + 0.02, true); openEventCard(e); });

  var ticks = [];
  for (var t = 1750; t <= 2025; t += 25) ticks.push(t);
  d3.select("#tickRow").selectAll("div").data(ticks).enter().append("div").attr("class", "tick")
    .style("left", function (t2) { return xOf(t2) * 100 + "%"; }).text(function (t2) { return t2; });

  // scrubbing
  var track = document.getElementById("track");
  var dragging = false;
  function evToYear(ev) {
    var r = track.getBoundingClientRect();
    var u = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width));
    return YR0 + u * (YR1 - YR0);
  }
  track.addEventListener("pointerdown", function (ev) {
    dragging = true; track.setPointerCapture(ev.pointerId);
    pause(); seek(evToYear(ev), false); dismissHint();
  });
  track.addEventListener("pointermove", function (ev) { if (dragging) seek(evToYear(ev), false); });
  track.addEventListener("pointerup", function () { dragging = false; applyCamera(true); });
}
function updateTimeline(y) {
  var u = xOf(y) * 100;
  d3.select("#thumb").style("left", u + "%");
  d3.select("#trackFill").style("width", u + "%");
  d3.selectAll(".eband").classed("on", function (e) { return y >= e.from && y < e.to; });
  d3.selectAll(".elab").classed("on", function (e) { return y >= e.from && y < e.to; });
  d3.selectAll(".evdot").classed("past", function (e) { return e.year <= y; })
    .classed("future", function (e) { return e.year > y; });
}
function updateEventReadout(y) {
  var best = null;
  D.events.forEach(function (e) { if (e.year <= y && y - e.year <= 4) { if (!best || e.year > best.year) best = e; } });
  var el = d3.select("#evtReadout");
  if (best) el.html("<b>" + best.year + "</b> — " + best.label);
  else el.html("");
}

// ------------------------------------------------------------------ playback --
var timer = null, lastTick = null;
function play() {
  if (playing) return;
  playing = true; d3.select("#playIcon").text("❚❚");
  lastTick = null; dismissHint();
  timer = d3.timer(function (el) {
    if (lastTick === null) lastTick = el;
    var dt = (el - lastTick) / 1000; lastTick = el;
    var py = year;
    var ny = year + dt * speed;
    if (ny >= YR1) { ny = YR1; seek(ny, false); pause(); return; }
    seek(ny, false);
    applyCamera(false);
    checkStoryJumps(py, ny);
  });
}
function pause() {
  playing = false; d3.select("#playIcon").text("▶");
  if (timer) { timer.stop(); timer = null; }
}
d3.select("#playBtn").on("click", function () { playing ? pause() : play(); });
d3.select("#stepBack").on("click", function () { pause(); seek(Math.max(YR0, Math.floor(year) - 1), true); });
d3.select("#stepFwd").on("click", function () { pause(); seek(Math.min(YR1, Math.floor(year) + 1), true); });
d3.select("#prevEvt").on("click", function () { jumpEvent(-1); });
d3.select("#nextEvt").on("click", function () { jumpEvent(1); });
function jumpEvent(dir) {
  pause();
  var evs = D.events.slice().sort(function (a, b) { return a.year - b.year; });
  var target = null;
  if (dir > 0) { for (var i = 0; i < evs.length; i++) if (evs[i].year > Math.floor(year)) { target = evs[i]; break; } }
  else { for (var j = evs.length - 1; j >= 0; j--) if (evs[j].year < Math.floor(year)) { target = evs[j]; break; } }
  if (target) { seek(target.year + 0.02, true); openEventCard(target); }
}
var SPEEDS = [1, 2, 4, 8, 16, 30];
d3.select("#speed").on("input", function () {
  speed = SPEEDS[+this.value];
  d3.select("#speedVal").text(speed + " yr/s");
});
function seek(y, withCam) {
  year = Math.max(YR0, Math.min(YR1, y));
  render();
  if (withCam) applyCamera(true);
}

// ------------------------------------------------------------------ keyboard --
document.addEventListener("keydown", function (ev) {
  if (ev.target.tagName === "INPUT" || ev.target.tagName === "TEXTAREA") return;
  if (ev.code === "Space") { ev.preventDefault(); playing ? pause() : play(); }
  else if (ev.key === "ArrowLeft") { pause(); ev.shiftKey ? jumpEvent(-1) : seek(year - 1, false); }
  else if (ev.key === "ArrowRight") { pause(); ev.shiftKey ? jumpEvent(1) : seek(year + 1, false); }
  else if (ev.key === "Escape") { closeCard(); d3.select("#aboutWrap").classed("hidden", true); }
});

// ------------------------------------------------------------------- cards --
function eraTextFor(obj, y) {
  if (!obj.eras || !obj.eras.length) return "";
  for (var i = 0; i < obj.eras.length; i++) {
    var e = obj.eras[i];
    if (y >= e.from && y < e.to) return e.text;
  }
  return y < obj.eras[0].from ? obj.eras[0].text : obj.eras[obj.eras.length - 1].text;
}
function eraSpanFor(obj, y) {
  if (!obj.eras) return "";
  for (var i = 0; i < obj.eras.length; i++) {
    var e = obj.eras[i];
    if (y >= e.from && y < e.to) return "Story shown for " + e.from + "–" + e.to + " · card updates with the timeline";
  }
  return "";
}
function rowsHtml(rows) {
  return rows.map(function (r) {
    return '<div class="irow"><span class="k">' + r[0] + '</span><span class="v">' + r[1] + "</span></div>";
  }).join("");
}
function srcHtml(list) {
  if (!list || !list.length) return "";
  return "<b>SOURCES</b><br>" + list.map(function (s) { return "· " + s; }).join("<br>");
}

function openCard(type, obj) {
  selected = { type: type, obj: obj };
  dismissHint();
  refreshCard(true);
  d3.select("#info").classed("hidden", false);
  drawSelection();
}
function closeCard() {
  selected = null;
  d3.select("#info").classed("hidden", true);
  gSel.selectAll("*").remove();
}
d3.select("#infoClose").on("click", closeCard);
svg.on("click", function () { closeCard(); });

function refreshCard(scrollTop) {
  var s = selected; if (!s) return;
  var iy = Math.floor(year);
  var tag = "", name = "", rows = [], desc = "", cite = "", span = "";

  if (s.type === "state") {
    var fips = s.obj, m = D.statesMeta[fips], pr = D.statesProse[fips] || {};
    name = m.name;
    var isColony = m.colony && iy < 1776;
    var pre = iy < m.admitted;
    tag = m.district ? "FEDERAL DISTRICT" : isColony ? "BRITISH COLONY" : pre ? "FUTURE STATE · ADMITTED " + m.admitted : "STATE · No. " + m.order + " · " + m.admitted;
    rows.push(["Admitted", m.date]);
    if (!m.district) rows.push(["Capital", m.capital]);
    if (pr.origin) rows.push(["Origin", pr.origin]);
    if (pr.namedFor) rows.push(["Name", pr.namedFor]);
    desc = eraTextFor(pr, year) || "";
    span = eraSpanFor(pr, year);
    cite = srcHtml(pr.sources);
  } else if (s.type === "city") {
    var c = s.obj;
    name = c.name;
    tag = "CITY · FOUNDED " + c.founded + (iy < c.joins ? " · NOT YET U.S." : "");
    rows = (c.facts || []).slice();
    if (c.pop && year >= c.pop[0][0]) rows.push(["Population", "≈ " + Math.round(interpSeries(c.pop, year)).toLocaleString() + " (" + iy + ")"]);
    if (iy >= c.joins && c.joins > c.founded) rows.push(["Under U.S. flag", "since " + c.joins]);
    desc = eraTextFor(c, year);
    span = eraSpanFor(c, year);
    cite = srcHtml(c.sources);
  } else if (s.type === "geo") {
    var f = s.obj;
    name = f.name; tag = "GEOGRAPHIC FEATURE · " + f.kind.toUpperCase();
    rows = (f.facts || []).slice();
    desc = eraTextFor(f, year); span = eraSpanFor(f, year); cite = srcHtml(f.sources);
  } else if (s.type === "landmark") {
    var p = s.obj;
    name = p.name; tag = (p.kind === "park" ? "NATIONAL PARK · EST. " : "LANDMARK · ") + p.appears;
    rows = (p.facts || []).slice();
    desc = iy < p.appears ? "Not yet established in " + iy + " — jump forward to " + p.appears + "." : eraTextFor(p, year);
    span = iy >= p.appears ? eraSpanFor(p, year) : "";
    cite = srcHtml(p.sources);
  } else if (s.type === "territory") {
    var t = s.obj;
    name = t.name;
    tag = (t.kind === "acquisition" ? "ACQUISITION · " + (t.from === 1776 ? "1776/1783" : t.from) : "FOREIGN CLAIM · " + t.from + "–" + (t.to || "…"));
    rows = (t.facts || []).slice();
    desc = eraTextFor(t, year); span = eraSpanFor(t, year); cite = srcHtml(t.sources);
  } else if (s.type === "region") {
    var r = s.obj;
    name = r.name; tag = "REGION · " + r.from + "–" + (r.to || "present");
    rows = (r.facts || []).slice();
    desc = eraTextFor(r, year); span = eraSpanFor(r, year); cite = srcHtml(r.sources);
  } else if (s.type === "route") {
    var rt = s.obj;
    name = rt.name; tag = rt.kind.toUpperCase() + " · FROM " + rt.from;
    rows = (rt.facts || []).slice();
    desc = eraTextFor(rt, year); span = eraSpanFor(rt, year); cite = srcHtml(rt.sources);
  } else if (s.type === "bison") {
    var bz = s.obj;
    name = bz.name; tag = "ECOLOGY · 1750–PRESENT";
    rows = (bz.facts || []).slice();
    desc = eraTextFor(bz, year); span = eraSpanFor(bz, year); cite = srcHtml(bz.sources);
  } else if (s.type === "tech" || s.type === "infra") {
    var tt2 = s.obj;
    name = tt2.name;
    tag = (s.type === "tech" ? "TECHNOLOGY \u00b7 " + (tt2.cat || "") : "INFRASTRUCTURE \u00b7 " + (tt2.kind || "")).toUpperCase() +
      " \u00b7 " + tt2.from + (tt2.to ? "\u2013" + tt2.to : "");
    rows = (tt2.facts || []).slice();
    desc = iy < tt2.from ? "Not yet — arrives in " + tt2.from + "." : eraTextFor(tt2, year);
    span = eraSpanFor(tt2, year); cite = srcHtml(tt2.sources);
  } else if (s.type === "trade") {
    var tr2 = s.obj;
    name = tr2.name;
    tag = "TRADE \u00b7 " + (tr2.dir === "import" ? "IMPORT FROM " : tr2.dir === "export" ? "EXPORT TO " : "WITH ") + tr2.partner.toUpperCase() +
      " \u00b7 " + tr2.from + "\u2013" + (tr2.to || "present");
    rows = (tr2.facts || []).slice();
    desc = eraTextFor(tr2, year); span = eraSpanFor(tr2, year); cite = srcHtml(tr2.sources);
  } else if (s.type === "treaty") {
    var tz2 = s.obj;
    name = tz2.name;
    tag = "TREATY & RELATIONS \u00b7 " + tz2.year + " \u00b7 " + tz2.partner.toUpperCase();
    rows = (tz2.facts || []).slice();
    desc = eraTextFor(tz2, year); span = eraSpanFor(tz2, year); cite = srcHtml(tz2.sources);
  } else if (s.type === "event") {
    var e = s.obj;
    name = e.label; tag = "EVENT · " + e.year + " · " + e.cat.toUpperCase();
    rows = [];
    desc = e.blurb;
    cite = "";
  }

  d3.select("#infoTag").text(tag);
  d3.select("#infoName").text(name);
  d3.select("#infoRows").html(rowsHtml(rows));
  d3.select("#infoDesc").html(desc);
  d3.select("#infoEraSpan").text(span);
  d3.select("#infoCite").html(cite);
  if (scrollTop) document.getElementById("info").scrollTop = 0;
}

function openEventCard(e) { openCard("event", e); }

// selection outline
function drawSelection() {
  gSel.selectAll("*").remove();
  var s = selected; if (!s) return;
  setTimeout(function () { gSel.selectAll("path, circle").attr("vector-effect", "non-scaling-stroke"); }, 0);
  var iy = Math.floor(year);
  if (s.type === "state") {
    gSel.append("path").attr("class", "selGlow").attr("d", path(stateGeom(s.obj, iy)));
  } else if (s.type === "territory") {
    var t = s.obj;
    gSel.append("path").attr("class", "selGlow")
      .attr("d", t.geoRef ? path(stateByFips[t.geoRef]) : path(t.geo))
      .attr("clip-path", t.clipToNation ? "url(#clipNation)" : t.clipToLand ? "url(#clipLand)" : null);
  } else if (s.type === "region") {
    gSel.append("path").attr("class", "selGlow").attr("d", path(s.obj.geo));
  } else if (s.type === "route") {
    gSel.append("path").attr("class", "selGlow").attr("d", path({ type: "LineString", coordinates: s.obj.line }));
  } else if (s.type === "city" || s.type === "landmark" || s.type === "geo" || s.type === "tech" || s.type === "infra") {
    var p = projection([s.obj.lon, s.obj.lat]);
    gSel.append("circle").attr("class", "selGlow").attr("cx", p[0]).attr("cy", p[1]).attr("r", 9 / currentT.k);
  }
}

// ------------------------------------------------------------------ tooltip --
var tipEl = d3.select("#tooltip");
function tip(ev, name, sub) {
  tipEl.classed("hidden", false)
    .html(name + (sub ? '<div class="tt-sub">' + sub + "</div>" : ""))
    .style("left", Math.min(W - 250, ev.clientX + 14) + "px")
    .style("top", Math.max(8, ev.clientY - 14) + "px");
}
function hideTip() { tipEl.classed("hidden", true); }

// ------------------------------------------------------------------ toggles --
function wire(id, key) {
  d3.select(id).on("change", function () {
    L[key] = this.checked;
    lastIntYear = -1; // force state pass
    lastUrbanYear = -1;
    render();
    cullLabels();
    applyLayerVisibility();
  });
}
wire("#tgBorders", "borders"); wire("#tgPoliLabels", "poliLabels"); wire("#tgGeoLabels", "geoLabels");
wire("#tgParks", "parks"); wire("#tgRoutes", "routes"); wire("#tgEco", "eco"); wire("#tgContext", "context");
wire("#tgTech", "tech"); wire("#tgTrade", "trade");
function applyLayerVisibility() {
  gStates.selectAll(".stateLine").style("display", L.borders ? null : "none");
}
d3.selectAll("#shadeSeg button").on("click", function () {
  shadeMode = this.dataset.mode;
  d3.selectAll("#shadeSeg button").classed("on", false);
  d3.select(this).classed("on", true);
  render();
});

// panels collapse
d3.selectAll(".panel-h").on("click", function () {
  var p = this.parentNode;
  d3.select(p).classed("closed", !d3.select(p).classed("closed"));
});

// about
d3.select("#aboutBtn").on("click", function () { d3.select("#aboutWrap").classed("hidden", false); });
d3.select("#aboutClose").on("click", function () { d3.select("#aboutWrap").classed("hidden", true); });
d3.select("#aboutWrap").on("click", function (ev) { if (ev.target.id === "aboutWrap") d3.select("#aboutWrap").classed("hidden", true); });

// hint
function dismissHint() {
  if (!hintShown) return;
  hintShown = false;
  d3.select("#hint").style("opacity", 0);
  setTimeout(function () { d3.select("#hint").remove(); }, 1200);
}
setTimeout(dismissHint, 9000);

// hash
var hashTimer = null;
function writeHash(iy) {
  if (hashTimer) return;
  hashTimer = setTimeout(function () {
    hashTimer = null;
    try { history.replaceState(null, "", "#y=" + Math.floor(year)); } catch (e) {}
  }, 400);
}

// resize
window.addEventListener("resize", function () { location.reload(); });

// ------------------------------------------- world & territory flights --
var storyQueue = [], storyTimer = null, camFocus = null;
function worldRectFor(bbox, pad) {
  var b = path.bounds(rectGeo(bbox));
  var px = (pad || 0.6) * (b[1][0] - b[0][0]), py = (pad || 0.6) * (b[1][1] - b[0][1]);
  return [b[0][0] - px, b[0][1] - py, b[1][0] + px, b[1][1] + py];
}
var WORLD_RECT = [WORLD_BOUNDS[0] - 40, WORLD_BOUNDS[1] - 20, WORLD_BOUNDS[2] + 40, WORLD_BOUNDS[3] + 20];
var terrBtnData = [{ id: "__world", btn: "World map", join: 1750 }].concat(D.insets);
var terrBtnSel = d3.select("#terrBtns").selectAll("button")
  .data(terrBtnData).enter().append("button").attr("class", "tbtn")
  .html(function (c) {
    if (c.id === "__world") return "\ud83c\udf10 " + c.btn;
    var yrs = c.leave ? (c.join + "\u2013" + c.leave) : ("" + c.join);
    return c.btn + '<span class="ty">' + yrs + "</span>";
  })
  .on("click", function (ev, c) {
    if (camFocus && camFocus.id === c.id) { backToMain(); return; }
    if (c.id === "__world") flyTo(WORLD_RECT, "__world");
    else flyToTerritory(c, false);
  });

var INSTANT_CAM = false;
function flyTo(rect, id) {
  camFocus = { rect: rect, id: id };
  d3.select("#recenterBtn").classed("hidden", false).text("\u2316 back to the U.S.");
  var t = fitRect(rect[0], rect[1], rect[2], rect[3]);
  camApplying = true;
  if (INSTANT_CAM) { svg.call(zoomBehavior.transform, t); camApplying = false; }
  else svg.transition().duration(1100).ease(d3.easeCubicInOut).call(zoomBehavior.transform, t)
    .on("end", function () { camApplying = false; });
  updateTerritoryUI(Math.floor(year));
}
function backToMain() {
  camFocus = null; clearStoryQueue();
  d3.select("#recenterBtn").classed("hidden", true).text("\u2316 recenter");
  userCam = false;
  applyCamera(true);
  updateTerritoryUI(Math.floor(year));
}
function flyToTerritory(cfg, fromStory) {
  if (!fromStory) clearStoryQueue();
  flyTo(worldRectFor(cfg.bbox), cfg.id);
  var t = D.territories.find(function (tt) { return tt.id === cfg.feats[0].cardId; });
  if (t) openCard("territory", t);
}
function updateTerritoryUI(iy) {
  terrBtnSel.style("display", function (c) { return (c.id === "__world" || iy >= c.join) ? null : "none"; })
    .classed("past", function (c) { return !!(c.leave && iy >= c.leave); })
    .classed("open", function (c) { return !!(camFocus && camFocus.id === c.id); });
  d3.select("#terrPanel").classed("hidden", false);
}
function featStatus(f, iy) {
  if (iy < f.join) return "notyet";
  if (f.leave && iy >= f.leave) return "former";
  return "us";
}
// story-camera: fly to each territory on the world frame as it joins, then back
function checkStoryJumps(prev, now) {
  if (!autoCam || userCam) return;
  D.insets.forEach(function (c) {
    if (c.story && c.join > prev && c.join <= now) storyQueue.push(c);
  });
  pumpStory();
}
function pumpStory() {
  if (storyTimer || !storyQueue.length) return;
  var c = storyQueue.shift();
  flyToTerritory(c, true);
  storyTimer = setTimeout(function () {
    storyTimer = null;
    if (storyQueue.length) pumpStory();
    else {
      camFocus = null;
      d3.select("#recenterBtn").classed("hidden", true).text("\u2316 recenter");
      closeCard();
      applyCamera(true);
      updateTerritoryUI(Math.floor(year));
    }
  }, 4200);
}
function clearStoryQueue() { storyQueue = []; if (storyTimer) { clearTimeout(storyTimer); storyTimer = null; } }

// expose a small control surface (used for debugging / capture)
window.TUS = { seek: seek, render: render, cull: cullLabels, cam: applyCamera,
  get year() { return year; }, openCard: openCard, closeCard: closeCard, layers: L, markers: markers,
  get zoomK() { return currentT.k; },
  flyWorld: function () { flyTo(WORLD_RECT, "__world"); },
  flyTerritory: function (id) { var c = D.insets.find(function (x) { return x.id === id; }); if (c) flyToTerritory(c, false); },
  back: backToMain,
  zoomBox: function (w, s, e, n, pad) { flyTo(worldRectFor([w, s, e, n], pad === undefined ? 0.1 : pad), "__custom"); },
  set instant(v) { INSTANT_CAM = !!v; },
  setMode: function (m) { shadeMode = m; d3.selectAll("#shadeSeg button").classed("on", function () { return this.dataset.mode === m; }); render(); } };

function applyNSS() {
  svg.selectAll("path, rect, circle").attr("vector-effect", "non-scaling-stroke");
}

// ------------------------------------------------------------------- init --
buildChapters();
buildLegend();
buildTimeline();
d3.select("#speedVal").text(speed + " yr/s");
render();
applyNSS();
svg.call(zoomBehavior.transform, cameraFor(year));
cullLabels();

})();
