# Territorial United States — 1750 → Present

An interactive, information-rich model of the territory now governed by the United
States: from 1750 — when the continent was Native ground contested by three empires —
through the acquisitions, statehoods, infrastructure, and ecological transformations
that produced the modern map. A companion piece to
[Tectonic Earth](https://augustg97.github.io/tectonic-earth/), aimed at human history.

## Run it

No build step, no dependencies, fully self-contained (all data ships as local JS).

- **Easiest:** double-click `index.html` (works from `file://`).
- **Better (recommended):**

```bash
cd "$(dirname "$0")" 2>/dev/null; python3 -m http.server 8137
```

then open <http://localhost:8137>. The `.claude/launch.json` preview config attaches
to that port.

- **Deploy:** push the folder to a GitHub repo and enable GitHub Pages — it is a
  static site with relative paths, exactly like tectonic-earth.

## What's inside

| Layer | Contents |
|---|---|
| Living landscape | Four computed land-cover epochs (1750/1850/1900/1950) crossfade under the timeline: primeval forest, the clearing frontier, peak deforestation and prairie plow-up, mid-century recovery — plus dam-gated reservoirs, bigger early snowpack, pre-irrigation valleys. Procedural urban footprints grow 24 metros from town to metropolis along Census urbanized-area data; trunk railroads (1850s+) and Interstates (1956+) web the map. Impressionistic, directional, honest about it. |
| One world map | A single continuous satellite Earth on a US-centered Equal Earth projection: the US in high resolution (dedicated imagery patches over North America, Alaska and each territory), ~125 labeled countries, everything at its true location. |
| Trade & treaties | 21 era-bound import/export arcs (tobacco, the Atlantic slave trade, cotton, kerosene, Lend-Lease, the China trade, LNG…) and 22 treaties/alliances drawn to their partners, all clickable with cited cards. |
| Technology & infrastructure | Tech sites from the cotton gin and Morse's telegraph through Bell Labs, ENIAC, Fairchild and the AI labs; dams, mines, oilfields, ports, factories, nuclear/solar/wind plants and data centers — every marker era-bound, many with end dates. |
| Metrics | Year-aware readout of GDP, military strength, rail miles, steel, oil, electricity and American compute (punched cards → ENIAC → data centers), from BEA/EIA/AISI/DoD/Census-grade series. |
| Satellite base | NASA Blue Marble Next Generation (July 2004), reprojected offline into the map's equal-area conic; the U.S. renders at full brightness with Canada and Mexico veiled darker. Geographic mode (default) shows near-pure terrain; Acquisitions and Union modes tint it. |
| Overseas territories | The Philippines (1898–1946), Panama Canal Zone (1903–79), Puerto Rico & USVI, Guam & N. Marianas, American Samoa and Hawaiʻi sit at their true places on the world map — the story camera flies to each as it joins and back again; buttons beside the acquisitions legend fly there anytime. |
| Acquisitions | Original 1783 territory, Louisiana Purchase, 1818 Red River basin, West Florida, Adams-Onís Florida, Texas, Oregon, Mexican Cession, Gadsden, Alaska, Hawaiʻi, Puerto Rico + insular territories — hand-traced along their treaty lines (rivers, parallels, meridians) |
| Foreign claims & context | New France, New Spain/Mexico, Spanish Luisiana, British colonies & Indian Reserve (Proclamation of 1763), the Floridas, Rupert's Land, Russian America, Kingdom & Republic of Hawaiʻi, Republic of Texas, British North America → Canada |
| States | All 50 + DC appear at admission (colonies render from 1750; Vermont as a republic 1777–91; Massachusetts+Maine, Virginia+WV/KY, NC+TN merge correctly before their splits) |
| Cities | 48 cities that appear when founded, dim under foreign flags, and carry census population series |
| Geography | 39 features — ranges, rivers, lakes, deserts, canyons, deltas — with geological origin and environmental-change stories |
| Parks & landmarks | 24, from Independence Hall and the Alamo to Yellowstone (1872) through Gateway Arch (1965) |
| Infrastructure | Erie Canal, National Road, Santa Fe/Oregon/California trails, first transcontinental railroad |
| Ecology | Bison range collapse in four stages (after Hornaday 1889), the Dust Bowl, Indian Territory 1834–1907 |
| Chapters & events | 17 narrative eras and ~60 dated event markers on the timeline |
| Live readout | Population (with enslaved count to 1865), state count, territorial area, head of state, seat of government |

**Every item is clickable.** Cards rewrite themselves for the year on the timeline —
California's card in 1849 is not California's card in 1950 — and cite their sources
(National Archives milestone documents, Avalon Project treaty texts, Census Bureau,
NPS, USGS, state archives and historical societies).

## Controls

- **Timeline**: drag, or click an era band / event dot. `space` play/pause,
  `←/→` step a year, `shift+←/→` jump between events.
- **Toggles** (right panel): political boundaries, political labels, geographic
  labels, parks & landmarks, routes, ecology overlays, foreign claims — plus
  acquisition vs. one-union shading and the auto-follow camera.
- **Camera**: follows the story (seaboard → continent → Alaska → Pacific) unless you
  pan/zoom; `⌖ recenter` hands control back.
- The current year persists in the URL hash (`#y=1848`) for shareable links.

## Files

```
index.html            shell & layout
css/styles.css        design system (dark glass UI)
js/app.js             engine: projection, time, camera, labels, cards, timeline
js/vendor/            D3 v7 + topojson-client (vendored)
data/geo/*.js         Census/us-atlas states (10m), Natural Earth countries/rivers/lakes
data/meta.js          admissions, population/area/leaders series
data/territories.js   acquisition & foreign-claim geometry + cards
data/eras.js          chapter narratives + timeline events
data/overlays.js      trails, rails, Indian Territory, Dust Bowl, bison stages
data/cities.js        city cards        (48)
data/geofeatures.js   geography cards   (39)
data/landmarks.js     parks & landmarks (24)
data/states_prose_*.js  per-state histories (51 incl. DC)
```

To add an item, append an object to the relevant `data/*.js` file — the schema is
visible in each file; `eras` must be contiguous and end at 2026.

## Accuracy notes & honest limits

- Acquisition boundaries are **hand-traced at continental scale** along their treaty
  definitions; they are faithful for visualization, not survey-grade. Modern state
  geometry is Census Bureau cartographic data.
- Area figures follow the Census Bureau's 1912 acquisition accounting; the modern
  remeasured total (~3.80M sq mi) is noted in About.
- Territorial *organization* (Dakota Territory's many shapes, etc.) is narrated in
  cards rather than drawn year-by-year.
- Every acquisition on this map transferred land claimed and inhabited by sovereign
  Native nations. The model carries that history explicitly — in chapters, events
  (Removal, Little Bighorn, Wounded Knee, ANCSA, Standing Rock, McGirt), the Indian
  Territory region, and nearly every state and feature card.

Built with D3.js + TopoJSON. Geometry: U.S. Census Bureau via us-atlas; Natural Earth.
Satellite imagery: NASA Earth Observatory Blue Marble Next Generation (public domain),
reprojected with `scratchpad` tooling into the app's fixed conic reference frame —
the projection constants in `js/app.js` and `data/img/basemap.jpg` are a matched pair.
