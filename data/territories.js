// territories.js — territorial acquisitions of the United States and the colonial /
// foreign claims context, with era-aware information cards.
//
// Boundary geometry is hand-traced for this visualization from standard reference maps
// (U.S. Geological Survey "Territorial Acquisitions" map; National Atlas; Census Bureau
// 1912 acquisition accounting) and follows treaty lines: rivers (Mississippi, Sabine,
// Red, Arkansas, Rio Grande, Gila), parallels (31°, 42°, 49°, 36°30′) and meridians
// (100°W, the Adams-Onís line of 1819). It is simplified for display — see About.
window.TUSDATA = window.TUSDATA || {};

(function () {

// ---- shared polylines -------------------------------------------------------
// Mississippi River, source (Lake Itasca) to the 31st parallel — the western
// boundary of the original United States and eastern edge of the Louisiana Purchase.
var MISS = [
  [-95.21, 47.19], [-94.40, 46.70], [-93.90, 46.20], [-93.27, 45.00], [-92.75, 44.60],
  [-92.30, 44.35], [-91.90, 43.95], [-91.30, 43.40], [-91.15, 42.90], [-90.65, 42.45],
  [-90.20, 41.80], [-90.90, 41.45], [-91.10, 40.90], [-91.40, 40.40], [-91.35, 39.75],
  [-90.70, 39.10], [-90.20, 38.63], [-89.95, 38.00], [-89.50, 37.30], [-89.17, 36.98],
  [-89.50, 36.50], [-89.65, 36.00], [-90.08, 35.15], [-90.55, 34.70], [-91.00, 34.00],
  [-91.10, 33.30], [-90.90, 32.60], [-91.05, 31.90], [-91.50, 31.00]
];
var MISS_UP = MISS.slice().reverse();

// Continental Divide, ~42°N to the 49th parallel (Louisiana Purchase / Oregon Country seam)
var DIVIDE_N = [
  [-108.30, 42.00], [-108.90, 42.45], [-109.60, 43.10], [-110.20, 43.70], [-110.65, 44.35],
  [-111.40, 44.75], [-112.40, 45.20], [-113.20, 45.70], [-113.90, 46.40], [-114.05, 46.90],
  [-113.70, 47.40], [-113.30, 48.00], [-113.70, 48.60], [-114.06, 49.00]
];
var DIVIDE_S = DIVIDE_N.slice().reverse();

// Arkansas River from the 100th meridian to its headwaters (Adams-Onís line of 1819)
var ARKANSAS_W = [
  [-100.00, 37.74], [-101.00, 37.95], [-102.00, 38.05], [-103.00, 38.10], [-104.60, 38.27],
  [-105.50, 38.60], [-106.10, 38.95], [-106.35, 39.30]
];
var ARKANSAS_E = ARKANSAS_W.slice().reverse();

// Red River, 100°W eastward to the Adams-Onís corner near the Sabine
var RED_E = [
  [-100.00, 34.56], [-99.20, 34.35], [-98.10, 34.10], [-97.15, 33.92], [-96.00, 33.85],
  [-94.80, 33.68], [-94.04, 33.55]
];
var RED_W = RED_E.slice().reverse();

// Sabine River, 32°N down to the Gulf
var SABINE_S = [
  [-94.03, 32.00], [-93.90, 31.60], [-93.75, 31.20], [-93.70, 30.70], [-93.72, 30.10], [-93.85, 29.70]
];
var SABINE_N = SABINE_S.slice().reverse();

// Rio Grande, mouth to its San Juan Mountains headwaters (Texas claim / Mexican boundary)
var RIOGRANDE_UP = [
  [-97.15, 25.96], [-97.80, 26.05], [-98.70, 26.25], [-99.30, 26.85], [-99.50, 27.50],
  [-100.00, 28.15], [-100.50, 28.70], [-100.90, 29.35], [-101.70, 29.76], [-102.30, 29.85],
  [-102.85, 29.35], [-103.15, 29.00], [-103.70, 29.20], [-104.30, 29.55], [-104.90, 30.35],
  [-105.60, 30.90], [-106.15, 31.45], [-106.50, 31.78], [-106.60, 32.30], [-106.85, 33.00],
  [-107.25, 33.15], [-107.00, 33.90], [-106.70, 34.40], [-106.65, 35.08], [-106.30, 35.70],
  [-106.05, 36.10], [-105.75, 36.60], [-105.75, 37.00], [-105.87, 37.45], [-106.40, 37.70],
  [-107.00, 37.75], [-107.50, 37.80]
];
var RIOGRANDE_DOWN = RIOGRANDE_UP.slice().reverse();

// Guadalupe Hidalgo line (1848–1853): Rio Grande near El Paso west along ~32.2°N to the
// Gila headwaters, then down the Gila to the Colorado at Yuma.
var GILA_W = [
  [-106.60, 32.20], [-107.60, 32.20], [-108.50, 32.20], [-108.60, 32.90], [-109.80, 33.10],
  [-110.80, 33.05], [-111.60, 33.25], [-112.30, 33.40], [-113.30, 33.00], [-113.90, 32.85],
  [-114.55, 32.75]
];
var GILA_E = GILA_W.slice().reverse();

// Great Lakes / 1783 treaty line, Lake Ontario west to Lake of the Woods
var LAKES_LINE_W = [
  [-74.75, 44.99], [-76.40, 44.10], [-77.70, 43.63], [-79.00, 43.45], [-79.06, 43.26],
  [-79.30, 42.75], [-79.75, 42.55], [-80.50, 42.40], [-81.50, 42.30], [-82.40, 42.10],
  [-83.10, 42.00], [-82.85, 42.60], [-82.50, 43.00], [-82.30, 43.90], [-82.70, 44.80],
  [-83.50, 45.60], [-84.00, 45.95], [-84.40, 46.50], [-85.00, 46.90], [-86.00, 47.30],
  [-87.20, 47.70], [-88.30, 48.00], [-89.30, 48.02], [-89.58, 48.00], [-90.80, 48.10],
  [-92.00, 48.35], [-92.95, 48.62], [-93.85, 48.63], [-94.60, 48.73], [-95.15, 49.37]
];
var LAKES_LINE_E = LAKES_LINE_W.slice().reverse();

// Atlantic coast, St. Marys River (GA/FL) north to eastern Maine (coarse; the detailed
// coastline is drawn from Census state geometry above this layer).
var ATLANTIC_N = [
  [-81.45, 30.72], [-81.00, 31.70], [-80.60, 32.40], [-79.90, 32.75], [-79.20, 33.20],
  [-78.30, 33.80], [-77.90, 34.10], [-76.80, 34.70], [-75.50, 35.20], [-75.40, 35.80],
  [-75.90, 36.55], [-76.00, 37.00], [-75.60, 37.50], [-75.10, 38.20], [-74.90, 38.85],
  [-74.40, 39.30], [-74.00, 40.40], [-73.20, 40.85], [-72.00, 41.00], [-71.40, 41.45],
  [-70.70, 41.55], [-70.00, 41.65], [-69.90, 42.00], [-70.50, 42.30], [-70.80, 42.70],
  [-70.70, 43.10], [-70.20, 43.50], [-69.50, 43.80], [-68.80, 44.25], [-68.00, 44.40],
  [-67.30, 44.70], [-67.10, 45.15]
];

// Appalachian crest — western edge of the settled seaboard colonies (Proclamation Line of 1763, stylized)
var CREST_S = [
  [-73.35, 45.00], [-74.50, 43.50], [-76.00, 42.60], [-78.00, 42.00], [-79.80, 40.80],
  [-81.00, 39.20], [-82.50, 37.60], [-84.00, 35.80], [-85.30, 34.20], [-85.50, 32.80],
  [-84.70, 31.80], [-83.30, 31.00], [-82.20, 30.85], [-81.45, 30.72]
];
var CREST_N = CREST_S.slice().reverse();

// Maine / New England inland edge
var MAINE_TOP = [
  [-67.10, 45.15], [-67.80, 45.70], [-67.79, 47.06], [-69.23, 47.46], [-70.00, 46.70],
  [-70.80, 45.43], [-71.50, 45.01], [-73.35, 45.00]
];

// Texas 1836–1850 claim: Gulf coast, Rio Grande to source, due north to 42°N, then the
// Adams-Onís line back south and east (42°N → Arkansas headwaters meridian → Arkansas
// River → 100°W → Red River → Sabine).
var TEXAS_RING = [
  [-93.85, 29.70], [-94.70, 29.35], [-95.30, 28.95], [-96.30, 28.45], [-97.20, 27.60], [-97.35, 26.60]
].concat(RIOGRANDE_UP, [
  [-107.50, 39.00], [-107.50, 41.00], [-107.50, 42.00], [-106.35, 42.00], [-106.35, 39.30]
], ARKANSAS_E, [
  [-100.00, 36.50]
], RED_E, SABINE_S);

// Louisiana Purchase ring — starts at Lake Itasca, descends the Mississippi
var LOUISIANA_RING = MISS.concat(
  // around the Isle of Orleans, then the Gulf shore west to the Sabine
  [[-91.20, 30.45], [-90.80, 30.20], [-90.30, 30.05], [-89.80, 30.20], [-89.60, 30.15],
   [-89.40, 29.60], [-89.20, 29.15], [-89.90, 29.20], [-90.60, 29.25], [-91.30, 29.45],
   [-92.20, 29.55], [-93.20, 29.72], [-93.85, 29.70]],
  SABINE_N,
  [[-94.04, 33.55]],
  RED_W,
  [[-100.00, 36.50], [-100.00, 37.74]],
  ARKANSAS_W,
  // Adams-Onís due-north line to 42°, west to the divide, then the divide north to 49°
  [[-106.35, 42.00], [-107.50, 42.00], [-108.30, 42.00]],
  DIVIDE_N.slice(1),
  // 49th parallel east, then around the Red River (Hudson Bay) basin to Lake Itasca
  [[-110.00, 49.00], [-106.00, 49.00], [-104.05, 49.00],
   [-102.60, 47.90], [-101.00, 47.00], [-99.30, 46.30], [-97.70, 45.85], [-96.60, 45.55],
   [-96.00, 46.10], [-95.60, 46.60]]
);

// Original territory of 1783
var ORIGINAL_RING = MAINE_TOP.concat(
  LAKES_LINE_W.slice(0),
  [[-95.21, 47.19]],
  MISS.slice(1),
  [[-90.50, 31.00], [-89.00, 31.00], [-87.00, 31.00], [-85.06, 31.00],
   [-85.05, 30.85], [-84.86, 30.71], [-83.60, 30.65], [-82.70, 30.60], [-81.45, 30.72]],
  ATLANTIC_N.slice(1)
);

// West Florida (annexed 1810–1813)
var WFLORIDA_RING = [
  [-91.50, 31.00], [-87.40, 31.00], [-87.40, 30.40], [-88.20, 30.35], [-89.00, 30.35],
  [-89.60, 30.30], [-90.20, 30.35], [-90.80, 30.35], [-91.15, 30.40], [-91.30, 30.70]
];

// Florida cession of 1819
var FLORIDA_RING = [
  [-87.40, 31.00], [-85.06, 31.00], [-85.05, 30.85], [-84.86, 30.71], [-83.60, 30.65],
  [-82.70, 30.60], [-81.45, 30.72], [-81.20, 29.90], [-80.70, 28.80], [-80.10, 27.20],
  [-80.05, 26.00], [-80.35, 25.20], [-81.10, 25.10], [-81.70, 25.90], [-82.60, 27.40],
  [-82.75, 28.60], [-83.60, 29.80], [-84.30, 30.00], [-85.30, 29.65], [-86.30, 30.25],
  [-87.20, 30.32], [-87.40, 30.40]
];

// Oregon Country (U.S. share, 1846)
var OREGON_RING = [
  [-124.40, 42.00], [-122.00, 42.00], [-120.00, 42.00], [-117.50, 42.00], [-114.00, 42.00],
  [-111.05, 42.00], [-108.30, 42.00]
].concat(DIVIDE_N.slice(1), [
  [-117.00, 49.00], [-120.00, 49.00], [-122.76, 49.00],
  [-122.90, 48.60], [-123.15, 48.40], [-124.00, 48.30], [-124.75, 48.40],
  [-124.65, 47.50], [-124.10, 46.30], [-124.05, 45.00], [-124.40, 43.40], [-124.55, 42.80]
]);

// Mexican Cession (1848)
var MEXCESSION_RING = [
  [-124.40, 42.00], [-121.00, 42.00], [-117.00, 42.00], [-114.00, 42.00], [-111.00, 42.00],
  [-108.30, 42.00], [-107.50, 42.00], [-107.50, 41.00], [-107.50, 39.00]
].concat(RIOGRANDE_DOWN.slice(0, 14), // down the Rio Grande to ~El Paso
  GILA_W,
  [[-116.00, 32.65], [-117.13, 32.53],
   [-117.35, 33.20], [-118.20, 33.75], [-118.80, 34.00], [-119.60, 34.40], [-120.65, 34.60],
   [-120.65, 35.40], [-121.35, 35.90], [-121.95, 36.55], [-122.15, 37.00], [-122.50, 37.60],
   [-123.00, 38.20], [-123.75, 38.95], [-123.85, 39.80], [-124.40, 40.50], [-124.15, 41.10],
   [-124.40, 41.80]]
);

// Gadsden Purchase (1853)
var GADSDEN_RING = [
  [-114.55, 32.75], [-114.72, 32.72], [-114.80, 32.50],
  [-113.80, 32.25], [-112.80, 31.90], [-111.85, 31.52], [-111.07, 31.33],
  [-110.00, 31.33], [-109.05, 31.33], [-108.21, 31.33], [-108.21, 31.78],
  [-107.30, 31.78], [-106.53, 31.78]
].concat(GILA_W.slice(0)); // back west along the 1848 line / Gila

// New Spain / Mexico (northern frontier context blob; clipped to land)
var NEWSPAIN_RING = [
  [-93.85, 29.70]
].concat(SABINE_N, [
  [-94.04, 33.55]
], RED_W, [
  [-100.00, 36.50], [-100.00, 37.74]
], ARKANSAS_W, [
  [-106.35, 42.00], [-110.00, 42.00], [-114.00, 42.00], [-118.00, 42.00], [-124.40, 42.00],
  [-124.15, 41.10], [-123.85, 39.80], [-123.00, 38.20], [-122.50, 37.60], [-121.95, 36.55],
  [-120.65, 34.60], [-118.20, 33.75], [-117.13, 32.53],
  [-117.05, 31.50], [-115.80, 30.00], [-114.00, 28.00], [-111.50, 25.50], [-109.40, 23.20],
  [-106.40, 21.60], [-104.30, 19.30], [-101.00, 17.90], [-97.20, 16.00], [-95.00, 16.20],
  [-94.50, 18.10], [-95.90, 18.80], [-97.10, 20.40], [-97.70, 22.30], [-97.50, 24.00],
  [-97.15, 25.96], [-97.35, 26.60], [-97.20, 27.60], [-96.30, 28.45], [-95.30, 28.95], [-94.70, 29.35]
]);

// New France (1750–1763): Canada and La Louisiane, spanning the Mississippi valley
var NEWFRANCE_RING = [
  [-59.00, 51.50], [-70.00, 52.50], [-80.00, 52.00], [-90.00, 51.50], [-96.00, 50.00],
  [-97.50, 46.00], [-99.00, 42.00], [-100.00, 37.50], [-100.00, 34.56]
].concat(RED_E, SABINE_S, [
  [-93.20, 29.72], [-92.20, 29.55], [-91.30, 29.45], [-90.60, 29.25], [-89.90, 29.20],
  [-89.20, 29.15], [-89.00, 30.00], [-88.40, 30.30], [-87.40, 30.40],
  [-87.20, 31.60], [-86.60, 33.50], [-85.50, 34.80], [-84.20, 36.20], [-82.60, 37.80],
  [-81.00, 39.60], [-79.80, 41.20], [-79.06, 43.26], [-77.70, 43.63], [-76.40, 44.10],
  [-74.75, 44.99], [-73.35, 45.20], [-71.30, 46.30], [-70.00, 47.30], [-68.00, 48.20],
  [-64.50, 49.20], [-60.00, 50.00]
]);

// British seaboard colonies (1750–1763)
var COLONIES_RING = MAINE_TOP.concat(CREST_S.slice(1), ATLANTIC_N.slice(1));

// Trans-Appalachian interior, 1763–1776 (Proclamation Line "Indian Reserve")
var INTERIOR_RING = [
  [-85.06, 31.00], [-87.00, 31.00], [-89.00, 31.00], [-91.50, 31.00]
].concat(MISS_UP.slice(1), [
  [-95.15, 49.37]
], LAKES_LINE_E.slice(1), CREST_S.slice(0, 11), [
  [-85.06, 31.00]
]);

function ringToGeo(ring) {
  var r = ring.slice();
  var a = r[0], b = r[r.length - 1];
  if (a[0] !== b[0] || a[1] !== b[1]) r.push([a[0], a[1]]);
  return { type: "Polygon", coordinates: [r] };
}

var T = [];

// ============================ U.S. ACQUISITIONS ==============================

T.push({
  id: "original1783", kind: "acquisition", from: 1776, to: null, provisionalUntil: 1783,
  name: "Original Territory of 1783", color: "#b3985a",
  geo: ringToGeo(ORIGINAL_RING), clipToNation: true,
  label: "UNITED STATES (1783)", labelAt: [-82.5, 36.8], labelFrom: 1783, labelTo: 1810, labelSize: 2,
  tag: "Treaty of Paris · ~888,800 sq mi",
  facts: [
    ["Recognized", "Treaty of Paris, September 3, 1783"],
    ["Extent", "Atlantic to the Mississippi; Great Lakes to 31°N"],
    ["Area", "≈ 888,800 sq mi"]
  ],
  eras: [
    { from: 1776, to: 1783, text: "Thirteen colonies declare independence on July 4, 1776, claiming their charters' western lands. The Revolutionary War decides whether the claim stands: Saratoga (1777) brings the French alliance, Yorktown (1781) breaks British will. Native nations — most siding with Britain to check settler expansion — fight parallel wars across the Ohio Country and the Haudenosaunee homelands, which Washington's 1779 Sullivan campaign devastates." },
    { from: 1783, to: 1803, text: "Britain concedes a vast interior it never controlled — the treaty ignores the Native nations living there. States cede western claims to Congress; the Northwest Ordinance of 1787 invents the territory-to-state pipeline and bans slavery north of the Ohio. The Ohio Country wars end at Fallen Timbers (1794); the Treaty of Greenville (1795) opens Ohio to a flood of settlers." },
    { from: 1803, to: 2026, text: "The original domain ultimately yields all or part of 26 states. Its treaty lines persist on the modern map: the 45th parallel in the northeast, the Great Lakes channel line, the 31st parallel across the Gulf South, and the Mississippi River spine that the Louisiana Purchase would double across in 1803." }
  ],
  sources: [
    "National Archives — Treaty of Paris (1783), milestone documents",
    "U.S. Census Bureau, Area of the United States (1912)",
    "Library of Congress"
  ]
});

T.push({
  id: "louisiana1803", kind: "acquisition", from: 1803, to: null,
  name: "Louisiana Purchase", color: "#7d9d6b",
  geo: ringToGeo(LOUISIANA_RING), clipToNation: true,
  label: "LOUISIANA PURCHASE (1803)", labelAt: [-97.5, 40.5], labelFrom: 1803, labelTo: 1861, labelSize: 2,
  tag: "From France · $15 million · ~827,000 sq mi",
  facts: [
    ["Signed", "April 30, 1803, Paris"],
    ["Price", "$15 million — roughly 3 cents an acre"],
    ["Area", "≈ 827,000 sq mi, doubling the United States"],
    ["Note", "Bought from France; home to scores of sovereign Native nations"]
  ],
  eras: [
    { from: 1803, to: 1821, text: "Napoleon, his Caribbean ambitions broken by the Haitian Revolution, sells the Mississippi's whole western watershed. Jefferson buys a river system and a legal claim — the land itself belongs to the Osage, Lakota, Pawnee, Comanche and dozens of other nations. Lewis and Clark (1804–06) map a route to the Pacific; Louisiana becomes a state in 1812; the Missouri Compromise (1820) draws slavery's line at 36°30′." },
    { from: 1821, to: 1890, text: "The purchase is carved into territories as the fur trade gives way to trails, railroads and homesteads. The 1830 Removal Act pushes eastern nations into its southern reaches; treaties are made and broken across the Plains. After the Civil War, the destruction of the bison and the railroad's advance force the Plains nations onto reservations — Little Bighorn (1876) and Wounded Knee (1890) bracket the end of armed resistance." },
    { from: 1890, to: 2026, text: "All or part of 15 states came out of the purchase, from Louisiana to Montana. Its grasslands became the world's most productive wheat and corn belt — and, in the 1930s, the Dust Bowl's epicenter. The great river it was bought to control remains the continent's commercial spine, engineered by levees and locks from Minnesota to the Gulf." }
  ],
  sources: [
    "National Archives — Louisiana Purchase Treaty, milestone documents (archives.gov/milestone-documents)",
    "Library of Congress — Louisiana Purchase collections",
    "U.S. Census Bureau, Area of the United States (1912)"
  ]
});

T.push({
  id: "redriver1818", kind: "acquisition", from: 1818, to: null,
  name: "Red River Basin (Convention of 1818)", color: "#5f8f8d",
  geo: ringToGeo([
    [-104.05, 49.00], [-102.60, 47.90], [-101.00, 47.00], [-99.30, 46.30], [-97.70, 45.85],
    [-96.60, 45.55], [-96.00, 46.10], [-95.60, 46.60], [-95.21, 47.19], [-95.15, 49.37],
    [-95.50, 49.00], [-98.00, 49.00], [-101.00, 49.00]
  ]), clipToNation: true,
  label: "1818", labelAt: [-97.8, 48.2], labelFrom: 1818, labelTo: 1889, labelSize: 3,
  tag: "Anglo-American Convention · 49th parallel",
  facts: [
    ["Agreed", "Convention of 1818 with Great Britain"],
    ["Line", "49th parallel, Lake of the Woods to the Rockies"],
    ["Area", "≈ 46,000 sq mi (Red River of the North basin)"]
  ],
  eras: [
    { from: 1818, to: 1870, text: "Diplomats straighten the fur country: the 49th parallel becomes the border from Lake of the Woods to the Continental Divide, trading watershed slivers with Britain. The Red River valley it confirms as American is Ojibwe, Dakota and Métis country, tied to the Pembina fur brigades and ox-cart trails north to the Hudson's Bay settlements." },
    { from: 1870, to: 2026, text: "Treaties and the collapse of the bison open the valley; by the 1870s–80s its flat lakebed soils host 'bonanza farms' — some of the first industrial-scale wheat operations in America — feeding Minneapolis mills. It remains among the richest farmland on the continent, prone to spectacular Red River floods." }
  ],
  sources: [
    "Avalon Project, Yale Law School — Convention of 1818",
    "U.S. Census Bureau, Area of the United States (1912)",
    "Minnesota Historical Society"
  ]
});

T.push({
  id: "wflorida1810", kind: "acquisition", from: 1810, to: null,
  name: "West Florida annexations", color: "#b98a68",
  geo: ringToGeo(WFLORIDA_RING), clipToNation: true,
  label: "W. FLA. 1810–13", labelAt: [-89.6, 30.75], labelFrom: 1810, labelTo: 1845, labelSize: 3,
  tag: "Seized from Spain, 1810–1813",
  facts: [
    ["Taken", "Proclamation of 1810; Mobile occupied 1813"],
    ["Prior status", "Spanish West Florida"],
    ["Today", "Florida Parishes of Louisiana; Gulf coasts of Mississippi and Alabama"]
  ],
  eras: [
    { from: 1810, to: 1821, text: "Anglo-American settlers around Baton Rouge revolt in September 1810, storm the Spanish fort, and proclaim a 74-day Republic of West Florida. President Madison annexes the strip to the Mississippi's mouth by proclamation, claiming it was Louisiana Purchase land all along; U.S. troops take Mobile in 1813 — the only territory gained during the War of 1812 era." },
    { from: 1821, to: 2026, text: "The strip is folded into Louisiana (the Florida Parishes), Mississippi and Alabama, giving both new states their Gulf outlets. Spain's formal cession in the Adams-Onís Treaty retroactively tidies the seizure. Mobile and the coast grow on cotton, timber and, later, shipbuilding and petrochemicals." }
  ],
  sources: [
    "Library of Congress",
    "Louisiana State Museum",
    "Encyclopaedia Britannica"
  ]
});

T.push({
  id: "florida1819", kind: "acquisition", from: 1819, to: null,
  name: "Florida Cession (Adams-Onís Treaty)", color: "#c07b5a",
  geo: ringToGeo(FLORIDA_RING), clipToNation: true,
  label: "FLORIDA (1819)", labelAt: [-81.6, 28.3], labelFrom: 1819, labelTo: 1861, labelSize: 3,
  tag: "From Spain · claims assumed to $5 million",
  facts: [
    ["Signed", "February 22, 1819; ratified 1821"],
    ["Terms", "U.S. assumed up to $5M in citizens' claims against Spain"],
    ["Also fixed", "The transcontinental Adams-Onís line to the Pacific"]
  ],
  eras: [
    { from: 1819, to: 1845, text: "Andrew Jackson's 1818 invasion — pursuing Seminoles and self-emancipated Black people living among them — convinces Spain to sell what it cannot hold. The same treaty draws the first U.S. line to the Pacific along 42°N. Florida becomes a territory in 1822; the Second Seminole War (1835–42), the costliest of the U.S.–Indian wars, deports most Seminoles west, though bands never surrender in the Everglades." },
    { from: 1845, to: 1920, text: "Statehood comes in 1845 on a plantation economy; Florida secedes in 1861 with the Confederacy. Afterward it stays the least-populated southern state until railroads push down both coasts in the 1880s–90s — Flagler to Miami (1896) and beyond — opening citrus, phosphate, winter tourism, and drainage schemes aimed at the Everglades." },
    { from: 1920, to: 2026, text: "Land booms, busts and hurricanes alternate with explosive growth: air conditioning, retirees, Cuban migration after 1959, Disney World (1971), and the Space Coast. Florida passes New York as the third-largest state in 2014, even as sea-level rise, hurricanes and Everglades restoration define its environmental ledger." }
  ],
  sources: [
    "Avalon Project, Yale Law School — Adams-Onís Treaty (1819)",
    "National Park Service",
    "Florida Division of Historical Resources"
  ]
});

T.push({
  id: "texas1845", kind: "acquisition", from: 1845, to: null,
  name: "Texas Annexation", color: "#a8768f",
  geo: ringToGeo(TEXAS_RING), clipToNation: true,
  label: "TEXAS ANNEXATION (1845)", labelAt: [-99.2, 31.4], labelFrom: 1845, labelTo: 1880, labelSize: 3,
  tag: "Republic of Texas admitted · ~390,000 sq mi claimed",
  facts: [
    ["Admitted", "December 29, 1845, by joint resolution"],
    ["Claim", "To the Rio Grande and north to 42°N"],
    ["Settled", "Compromise of 1850 — Texas sold its trans-Rio Grande claims for $10M"]
  ],
  eras: [
    { from: 1845, to: 1850, text: "The Lone Star republic joins the Union claiming everything east of the Rio Grande to its source and due north to 42° — a sweep through half of New Mexico, and slices of Colorado, Oklahoma, Kansas and Wyoming that Mexico and Santa Fe never conceded. The annexation detonates the Mexican-American War within months." },
    { from: 1850, to: 2026, text: "In the Compromise of 1850 Texas sells its claims beyond the modern boundary for $10 million, fixing today's Panhandle lines. The state's story runs through cotton and cattle empires on former Comanchería, Spindletop's 1901 gusher birthing the modern oil industry, and metropolitan booms that make it the second-largest state by population." }
  ],
  sources: [
    "National Archives — Joint Resolution for annexing Texas",
    "Texas State Historical Association",
    "U.S. Census Bureau, Area of the United States (1912)"
  ]
});

T.push({
  id: "oregon1846", kind: "acquisition", from: 1846, to: null,
  name: "Oregon Country (Treaty of 1846)", color: "#6b8fae",
  geo: ringToGeo(OREGON_RING), clipToNation: true,
  label: "OREGON COUNTRY (1846)", labelAt: [-119.8, 45.0], labelFrom: 1846, labelTo: 1889, labelSize: 3,
  tag: "Partition with Britain at 49°N · ~286,000 sq mi",
  facts: [
    ["Signed", "June 15, 1846"],
    ["Line", "49th parallel to the Strait of Juan de Fuca"],
    ["Backstory", "Joint U.S.–British occupation since 1818; '54°40′ or Fight'"]
  ],
  eras: [
    { from: 1846, to: 1890, text: "Rather than fight Britain and Mexico at once, Polk splits Oregon at the 49th parallel. Wagon migration on the Oregon Trail — some 300,000 people over three decades — overwhelms the Chinook, Cayuse, Nez Perce and other nations already devastated by introduced disease; wars and treaties confine survivors to reservations. Oregon (1859) and Washington (1889) become states." },
    { from: 1890, to: 2026, text: "The world's densest temperate forests feed a timber economy that cuts most old growth by the late 20th century; salmon runs collapse behind Columbia dams that also electrify the region (Grand Coulee, 1942 — plutonium at Hanford follows). Seattle and Portland pivot to aerospace, software and trade across the Pacific." }
  ],
  sources: [
    "Avalon Project, Yale Law School — Oregon Treaty (1846)",
    "Oregon Historical Society",
    "National Park Service — Oregon National Historic Trail"
  ]
});

T.push({
  id: "mexican1848", kind: "acquisition", from: 1848, to: null,
  name: "Mexican Cession (Treaty of Guadalupe Hidalgo)", color: "#bf8552",
  geo: ringToGeo(MEXCESSION_RING), clipToNation: true,
  label: "MEXICAN CESSION (1848)", labelAt: [-117.2, 40.9], labelFrom: 1848, labelTo: 1896, labelSize: 2,
  tag: "$15 million · ~529,000 sq mi",
  facts: [
    ["Signed", "February 2, 1848"],
    ["Price", "$15M plus $3.25M in assumed claims"],
    ["Extent", "California, Nevada, Utah; most of Arizona; half of New Mexico; parts of Colorado and Wyoming"],
    ["People", "≈100,000 Mexican citizens and many sovereign Native nations came within U.S. lines"]
  ],
  eras: [
    { from: 1848, to: 1869, text: "A war begun over the Texas boundary ends with Mexico losing half its national territory. Nine days before the signing, gold turns up at Sutter's Mill; the Gold Rush floods California with 300,000 people and statehood by 1850. For California's Native peoples the rush is catastrophic — massacre, bounty campaigns and disease cut their numbers by perhaps 80 percent within a generation. The treaty's promised protections for Mexican landholders erode in U.S. courts." },
    { from: 1869, to: 2026, text: "Railroads (1869), silver and copper, cattle, and reclamation dams remake the arid West; the region's water politics — the 1922 Colorado Compact, Hoover Dam, the California aqueducts — remain its central story. The cession lands hold the nation's largest Native populations and reservations, its farm-labor economy shaped by Mexican migration, and three of its four largest states' metropolitan engines." }
  ],
  sources: [
    "National Archives — Treaty of Guadalupe Hidalgo, milestone documents (archives.gov/milestone-documents)",
    "Library of Congress",
    "U.S. Census Bureau, Area of the United States (1912)"
  ]
});

T.push({
  id: "gadsden1853", kind: "acquisition", from: 1853, to: null,
  name: "Gadsden Purchase", color: "#99884a",
  geo: ringToGeo(GADSDEN_RING), clipToNation: true,
  label: "GADSDEN (1853)", labelAt: [-111.5, 32.1], labelFrom: 1853, labelTo: 1912, labelSize: 3,
  tag: "From Mexico · $10 million · ~29,600 sq mi",
  facts: [
    ["Signed", "December 30, 1853; ratified 1854"],
    ["Purpose", "Flat ground for a southern transcontinental railroad"],
    ["Extent", "Southern Arizona below the Gila, and New Mexico's Bootheel"]
  ],
  eras: [
    { from: 1853, to: 1886, text: "Railroad promoters want a low-grade southern route, and the Mesilla boundary dispute gives the pretext; Santa Anna, needing cash, sells. The purchase is Chiricahua Apache and Tohono O'odham homeland — U.S. campaigns against Cochise and Geronimo run until 1886, when Geronimo's surrender ends the Apache wars." },
    { from: 1886, to: 2026, text: "The Southern Pacific line (1881) fulfills the purchase's purpose; Tucson grows from presidio town to Sun Belt city. Copper from Bisbee and Morenci, cotton, and Cold War aerospace shape the region; the border it drew is now among the busiest — and most contested — land boundaries in the world." }
  ],
  sources: [
    "Avalon Project, Yale Law School — Gadsden Purchase treaty",
    "Arizona Historical Society",
    "U.S. Census Bureau, Area of the United States (1912)"
  ]
});

T.push({
  id: "alaska1867", kind: "acquisition", from: 1867, to: null,
  name: "Alaska Purchase", color: "#7ba7b7",
  geoRef: "02", clipToNation: false,
  label: "ALASKA (1867)", labelAt: [-152.5, 64.3], labelFrom: 1867, labelTo: 1959, labelSize: 2,
  tag: "From Russia · $7.2 million",
  facts: [
    ["Signed", "March 30, 1867 (Seward–Stoeckl)"],
    ["Price", "$7.2 million — about two cents an acre"],
    ["Transfer", "Sitka, October 18, 1867"],
    ["Area", "≈ 586,000 sq mi (as then measured; ~665,000 today)"]
  ],
  eras: [
    { from: 1867, to: 1912, text: "Secretary Seward buys a subcontinent the press mocks as his 'icebox.' Russia, its sea-otter trade exhausted and fearing British seizure, is glad to sell; nobody consults the Tlingit, Haida, Yup'ik, Iñupiat, Aleut (Unangax̂) and Athabascan peoples who own and inhabit it. Salmon canneries and the Klondike-era rushes (Juneau 1880, Nome 1899, Fairbanks 1902) end the laughter." },
    { from: 1912, to: 1968, text: "Territory status arrives in 1912. World War II makes Alaska strategic — Japanese forces occupy Attu and Kiska in the Aleutians, and Unangax̂ villagers are interned in squalid camps. The Alaska Highway (1942), Cold War radar lines and military bases drive growth; statehood follows in 1959, and the 1964 Good Friday earthquake — the strongest ever recorded in North America — levels much of Anchorage." },
    { from: 1968, to: 2026, text: "Prudhoe Bay (1968) is the largest oil field ever found in North America. To clear the pipeline's path, the 1971 Alaska Native Claims Settlement Act conveys 44 million acres and $962M to Native corporations; ANILCA (1980) then protects over 100 million acres — the greatest single conservation act in U.S. history. Oil wealth, fisheries and rapid Arctic warming now define the state." }
  ],
  sources: [
    "National Archives — Check for the Purchase of Alaska, milestone documents",
    "Library of Congress — Meeting of Frontiers",
    "Alaska State Archives"
  ]
});

T.push({
  id: "hawaii1898", kind: "acquisition", from: 1898, to: null,
  name: "Annexation of Hawaiʻi", color: "#66a67e",
  geoRef: "15", clipToNation: false,
  label: "HAWAIʻI (1898)", labelAt: [-157.2, 21.7], labelFrom: 1898, labelTo: 1959, labelSize: 3,
  tag: "Newlands Resolution · July 7, 1898",
  facts: [
    ["Annexed", "Joint resolution, July 7, 1898"],
    ["Prior", "Kingdom overthrown January 17, 1893; Republic 1894–98"],
    ["Status", "Territory 1900; state August 21, 1959"]
  ],
  eras: [
    { from: 1898, to: 1941, text: "Five years after American businessmen and U.S. Marines deposed Queen Liliʻuokalani — an act President Cleveland's own investigation called wrongful — the Spanish-American War makes Pearl Harbor irresistible and Congress annexes by simple resolution. Sugar and pineapple plantations import labor from Japan, China, Portugal and the Philippines, forging the islands' plural society under an oligarchy of planter firms." },
    { from: 1941, to: 2026, text: "December 7, 1941 turns Hawaiʻi into a fortress under martial law for the war's duration. Statehood (1959) and the jet age bring mass tourism; the military remains the second industry. The Hawaiian Renaissance from the 1970s revives language and voyaging, and the U.S. formally apologized for the overthrow in 1993 — sovereignty remains a live question, as does Mauna Kea." }
  ],
  sources: [
    "National Archives — Joint Resolution to Provide for Annexing the Hawaiian Islands (1898)",
    "Hawaiʻi State Archives",
    "National Park Service — Pearl Harbor National Memorial"
  ]
});

T.push({
  id: "pr1898", kind: "acquisition", from: 1898, to: null,
  name: "Puerto Rico", color: "#977fae",
  geoRef: "72", clipToNation: false,
  label: "PUERTO RICO (1898)", labelAt: [-66.4, 18.9], labelFrom: 1898, labelTo: 2026, labelSize: 3,
  tag: "Ceded by Spain · Treaty of Paris, 1898",
  facts: [
    ["Ceded", "Treaty of Paris, December 10, 1898 (with Guam; Philippines for $20M)"],
    ["Citizenship", "Jones Act, 1917"],
    ["Status", "Commonwealth (Estado Libre Asociado) since 1952"]
  ],
  eras: [
    { from: 1898, to: 1952, text: "Four centuries of Spanish rule end with the Spanish-American War; U.S. troops land at Guánica in July 1898. The Foraker Act (1900) installs civil government without consent of the governed; the Jones Act (1917) grants citizenship — in time for World War I conscription. Sugar monoculture dominates; nationalist unrest in the 1930s–50s is met with repression." },
    { from: 1952, to: 2026, text: "The commonwealth constitution (1952) and Operation Bootstrap industrialize the island, driving vast migration to New York and beyond. Statehood-versus-status politics, the 2016 debt crisis and control board, and Hurricane María (2017) — which killed thousands and collapsed the grid — define the modern era. Residents remain U.S. citizens without voting representation in Congress." }
  ],
  sources: [
    "National Archives — Treaty of Paris (1898)",
    "Library of Congress — Hispanic Division",
    "U.S. Census Bureau"
  ]
});

// Small insular territories (cards only; drawn from topology where visible)
T.push({
  id: "guam1898", kind: "acquisition", from: 1898, to: null, name: "Guam", color: "#977fae",
  geoRef: "66", clipToNation: false, label: null,
  tag: "Ceded by Spain, 1898",
  facts: [["Ceded", "Treaty of Paris, 1898"], ["People", "Indigenous CHamoru"], ["Role", "Key Pacific base; occupied by Japan 1941–44"]],
  eras: [
    { from: 1898, to: 1950, text: "Spain's Pacific way-station passes to the U.S. Navy, which rules Guam as a closed naval station. Japan seizes the island days after Pearl Harbor; the 1944 liberation battle levels much of it. The CHamoru people endure occupation, forced labor and massacre." },
    { from: 1950, to: 2026, text: "The Organic Act (1950) grants citizenship and civilian government. Guam anchors U.S. power projection in the western Pacific — 'Where America's Day Begins' hosts major air and naval bases occupying about a quarter of the island, a continuing point of CHamoru political contention." }
  ],
  sources: ["National Archives — Treaty of Paris (1898)", "National Park Service — War in the Pacific"]
});

T.push({
  id: "amsamoa1900", kind: "acquisition", from: 1900, to: null, name: "American Samoa", color: "#977fae",
  geoRef: "60", clipToNation: false, label: null,
  tag: "Deeds of cession, 1900 and 1904",
  facts: [["Acquired", "Deeds of cession by Samoan chiefs, 1900/1904"], ["Note", "Only U.S. soil where people are nationals, not citizens, by birth"]],
  eras: [
    { from: 1900, to: 2026, text: "After a three-power standoff with Germany and Britain, the eastern Samoan islands cede to the U.S., anchored by Pago Pago's deep harbor. Matai chiefly governance and communal land tenure persist under a unique political status; tuna canning and military service dominate the modern economy." }
  ],
  sources: ["U.S. Department of the Interior, Office of Insular Affairs", "Library of Congress"]
});

T.push({
  id: "usvi1917", kind: "acquisition", from: 1917, to: null, name: "U.S. Virgin Islands", color: "#977fae",
  geoRef: "78", clipToNation: false, label: null,
  tag: "Purchased from Denmark, 1917 · $25 million",
  facts: [["Purchased", "March 31, 1917, from Denmark"], ["Price", "$25 million in gold"], ["Why", "To deny Germany a Caribbean base"]],
  eras: [
    { from: 1917, to: 2026, text: "Bought mid-World War I to guard the Panama Canal's approaches, the former Danish West Indies — St. Croix, St. Thomas, St. John — carry a heavy history: among the Caribbean's largest slave markets, with emancipation won by revolt in 1848. Citizenship comes in 1927; tourism and rum anchor the economy; hurricanes Irma and María (2017) hit hard." }
  ],
  sources: ["National Archives", "U.S. Department of the Interior, Office of Insular Affairs"]
});

T.push({
  id: "marianas1947", kind: "acquisition", from: 1947, to: null, name: "Northern Mariana Islands", color: "#977fae",
  geoRef: "69", clipToNation: false, label: null,
  tag: "UN Trust Territory 1947 · Commonwealth 1978",
  facts: [["Acquired", "UN Trust Territory of the Pacific Islands, 1947"], ["Status", "Commonwealth covenant approved 1975; effective 1978/1986"]],
  eras: [
    { from: 1947, to: 2026, text: "Taken from Japan in the brutal 1944 Saipan and Tinian campaigns — Tinian launched the atomic missions — the islands pass to U.S. administration under UN trusteeship, then vote to become a U.S. commonwealth. Garment manufacturing, tourism and CHamoru and Carolinian communities shape the modern islands." }
  ],
  sources: ["U.S. Department of the Interior, Office of Insular Affairs", "National Park Service"]
});

// ========================= FOREIGN / COLONIAL CONTEXT ========================

T.push({
  id: "newfrance", kind: "foreign", from: 1750, to: 1763, power: "france",
  name: "New France", color: "#55708f",
  geo: ringToGeo(NEWFRANCE_RING), clipToLand: true,
  label: "NEW FRANCE", labelAt: [-89.5, 40.5], labelSize: 1,
  tag: "Canada & La Louisiane · to 1763",
  facts: [
    ["Claim", "St. Lawrence, Great Lakes and the whole Mississippi valley"],
    ["Reality", "A thin lattice of forts and trade among powerful Native nations"],
    ["Ends", "Treaty of Paris, 1763"]
  ],
  eras: [
    { from: 1750, to: 1763, text: "France claims a crescent from Quebec to New Orleans — but its empire is a fur-trade partnership living among Native nations who hold the real power: Haudenosaunee, Anishinaabe, Illinois, Osage, Choctaw. Perhaps 70,000 colonists face 1.2 million in the British colonies. The contest for the Ohio forks ignites the French and Indian War (1754); at the peace, France hands Britain everything east of the Mississippi and Spain the west." }
  ],
  sources: ["Library and Archives Canada", "Library of Congress", "Encyclopaedia Britannica"]
});

T.push({
  id: "britishcolonies", kind: "foreign", from: 1750, to: 1776, power: "britain",
  name: "British Colonies", color: "#8f5b52",
  geo: ringToGeo(COLONIES_RING), clipToLand: true,
  label: "THIRTEEN COLONIES", labelAt: [-77.8, 39.6], labelTo: 1776, labelSize: 2,
  tag: "The thirteen seaboard colonies",
  facts: [
    ["Population", "≈1.2 million (1750) → 2.5 million (1775), one-fifth enslaved"],
    ["Economy", "Tobacco, rice, indigo, grain, timber, shipping"],
    ["Line", "Proclamation of 1763 barred settlement past the crest"]
  ],
  eras: [
    { from: 1750, to: 1763, text: "Thirteen distinct societies hug the seaboard, from Puritan Massachusetts to slave-society South Carolina, doubling in population every quarter century. Their hunger for interior land collides with Native nations and New France at the Ohio — a Virginia militia colonel named Washington fires early shots of a world war in 1754." },
    { from: 1763, to: 1776, text: "Victory doubles British America but bankrupts Britain; the Proclamation Line, the Stamp Act (1765), the Townshend duties and the Coercive Acts convince colonists that empire means subjugation. Boston's tea goes into the harbor in 1773; Lexington and Concord follow in April 1775; independence is declared July 4, 1776." }
  ],
  sources: ["Library of Congress", "National Archives (UK and US)", "Colonial Williamsburg Foundation"]
});

T.push({
  id: "interior1763", kind: "foreign", from: 1763, to: 1776, power: "britain",
  name: "Indian Reserve (Proclamation of 1763)", color: "#7a6a55",
  geo: ringToGeo(INTERIOR_RING), clipToLand: true, hatch: true,
  label: "INDIAN RESERVE (1763)", labelAt: [-86.5, 39.0], labelSize: 2,
  tag: "Trans-Appalachian interior under British title",
  facts: [
    ["Created", "Royal Proclamation, October 7, 1763"],
    ["Rule", "Settlement west of the Appalachian crest forbidden"],
    ["Nations", "Shawnee, Lenape, Cherokee, Muscogee, Haudenosaunee, Illinois and others"]
  ],
  eras: [
    { from: 1763, to: 1776, text: "To end Pontiac's War — a pan-Native uprising that seized most British forts west of the mountains in 1763 — the Crown reserves the interior for Native nations and bans colonial settlement past the crest. Speculators (Washington among them) survey anyway, and squatters pour through the gaps. The Quebec Act (1774) attaches the Ohio Country to Quebec, enraging colonists; the line becomes a grievance on the road to revolution." }
  ],
  sources: ["Library of Congress", "Avalon Project, Yale Law School — Royal Proclamation of 1763"]
});

T.push({
  id: "spanishflorida1", kind: "foreign", from: 1750, to: 1763, power: "spain",
  name: "Spanish Florida", color: "#8f7d4a",
  geo: ringToGeo(FLORIDA_RING), clipToLand: true,
  label: "LA FLORIDA", labelAt: [-81.6, 28.6], labelSize: 3,
  tag: "Spain's oldest North American colony",
  facts: [
    ["Founded", "St. Augustine, 1565 — oldest European city in the continental U.S."],
    ["Role", "Mission frontier; refuge for people escaping slavery (Fort Mose)"]
  ],
  eras: [
    { from: 1750, to: 1763, text: "Two centuries old and thinly held, Spanish Florida is St. Augustine, Pensacola and cattle lands between — a refuge where people escaping Carolina slavery gain freedom at Fort Mose, the first free Black settlement in what becomes the U.S. Creek and emerging Seminole communities dominate the interior. Spain trades it to Britain in 1763 to recover Havana." }
  ],
  sources: ["National Park Service — Castillo de San Marcos", "Florida Division of Historical Resources"]
});

T.push({
  id: "britishflorida", kind: "foreign", from: 1763, to: 1783, power: "britain",
  name: "British East & West Florida", color: "#8f5b52",
  geo: { type: "MultiPolygon", coordinates: [ringToGeo(FLORIDA_RING).coordinates, ringToGeo(WFLORIDA_RING).coordinates] },
  clipToLand: true,
  label: "E. & W. FLORIDA (BR.)", labelAt: [-83.5, 29.5], labelSize: 3,
  tag: "British 1763–1783",
  facts: [
    ["Gained", "From Spain, 1763 (for the return of Havana)"],
    ["Lost", "Back to Spain, 1783 — Floridas stayed loyal in the Revolution"]
  ],
  eras: [
    { from: 1763, to: 1783, text: "Britain splits its new Gulf province at the Apalachicola and recruits settlers with land grants; the Floridas become the fourteenth and fifteenth colonies that do not rebel, a loyalist refuge during the Revolution. Spain, allied with France, retakes Pensacola in 1781 and recovers both Floridas at the peace." }
  ],
  sources: ["Library of Congress", "Florida Division of Historical Resources"]
});

T.push({
  id: "spanishflorida2", kind: "foreign", from: 1783, to: 1819, power: "spain",
  name: "Spanish Florida (restored)", color: "#8f7d4a",
  geo: { type: "MultiPolygon", coordinates: [ringToGeo(FLORIDA_RING).coordinates, ringToGeo(WFLORIDA_RING).coordinates] },
  clipToLand: true, endEarlyWest: 1810,
  label: "SPANISH FLORIDA", labelAt: [-82.6, 28.9], labelSize: 3,
  tag: "Restored 1783 · ceded 1819–21",
  facts: [
    ["Boundary", "Pinckney's Treaty (1795) fixed the 31st parallel"],
    ["Pressure", "American settlers, Seminole autonomy, escaped-slave sanctuaries"]
  ],
  eras: [
    { from: 1783, to: 1819, text: "Restored but hollow, Spanish Florida cannot police its border: it shelters Seminole towns and Black freedom-seekers that planters call intolerable. West Florida is seized by settlers and Madison (1810–13); Jackson's 1818 invasion burns Seminole and maroon towns and hangs two British subjects. Spain, its empire collapsing, cedes the rest in the Adams-Onís Treaty." }
  ],
  sources: ["Avalon Project, Yale Law School — Pinckney's Treaty (1795)", "Library of Congress"]
});

T.push({
  id: "spanishlouisiana", kind: "foreign", from: 1763, to: 1803, power: "spain",
  name: "Spanish (then French) Louisiana", color: "#8f7d4a",
  geo: ringToGeo(LOUISIANA_RING), clipToLand: true,
  label: "LUISIANA (SP.)", labelAt: [-96.5, 38.5], labelTo: 1800, labelSize: 2,
  tag: "Spain 1763–1800 · France 1800–1803",
  facts: [
    ["To Spain", "Secret Treaty of Fontainebleau, 1762"],
    ["Back to France", "Secret Treaty of San Ildefonso, 1800"],
    ["Governed from", "New Orleans; upper posts at St. Louis (f. 1764)"]
  ],
  eras: [
    { from: 1763, to: 1800, text: "Spain administers the west bank lightly from New Orleans — a Creole, French-speaking colony under Spanish governors, trading with Osage, Quapaw and Caddo nations. St. Louis (1764) anchors the upper river's fur trade. American settlers spilling over the Appalachians make the Mississippi's mouth the young republic's obsession." },
    { from: 1800, to: 1803, text: "Napoleon secretly reacquires Louisiana dreaming of a revived American empire — then loses an army to yellow fever and revolution in Haiti. Needing cash for war with Britain and unable to defend the colony, he startles Jefferson's envoys by offering the whole territory." }
  ],
  sources: ["Library of Congress — Louisiana: European Explorations and the Louisiana Purchase", "Missouri Historical Society"]
});

T.push({
  id: "newspain", kind: "foreign", from: 1750, to: 1821, power: "spain",
  name: "New Spain (northern frontier)", color: "#8f7d4a",
  geo: ringToGeo(NEWSPAIN_RING), clipToLand: true,
  label: "NEW SPAIN", labelAt: [-104.5, 27.5], labelSize: 1,
  tag: "Viceroyalty of New Spain · to 1821",
  facts: [
    ["Provinces", "Texas, Nuevo México (f. 1598), Alta California (from 1769)"],
    ["Reality", "Comanchería and Apachería dominated the interior plains"],
    ["Ends", "Mexican independence, 1821"]
  ],
  eras: [
    { from: 1750, to: 1821, text: "Spain's frontier is a string of missions and presidios — Santa Fe (1610), San Antonio (1718), then the California chain from San Diego (1769) — across lands where Comanche, Apache, Ute and Pueblo power sets the real terms; Comanchería is the plains' dominant empire through this century. Mission life devastates coastal California peoples. Mexico's independence in 1821 inherits the whole frontier." }
  ],
  sources: ["Library of Congress — Hispanic Division", "National Park Service — El Camino Real de Tierra Adentro"]
});

T.push({
  id: "mexico1821", kind: "foreign", from: 1821, to: 1848, power: "mexico",
  name: "Mexico (northern territories)", color: "#7a8f5a",
  geo: ringToGeo(NEWSPAIN_RING), clipToLand: true,
  label: "MEXICO", labelAt: [-104.5, 27.5], labelSize: 1,
  tag: "Independent 1821 · cedes the north 1848",
  facts: [
    ["Independence", "1821, after an eleven-year war"],
    ["Policy", "Invited Anglo colonists to Texas (1824); banned slavery 1829"],
    ["Loses", "Texas 1836; the Mexican Cession 1848; Gadsden strip 1853"]
  ],
  eras: [
    { from: 1821, to: 1848, text: "The young republic opens the Santa Fe trade and invites colonists into Texas — who bring enslaved people despite Mexican abolition, and revolt in 1835–36. Secularization dissolves the California missions. Chronic instability and Comanche raids weaken the north; the U.S. war of 1846–48, condemned by Lincoln and Grant among others, takes half of Mexico's territory at Guadalupe Hidalgo." }
  ],
  sources: ["Library of Congress — Hispanic Division", "Texas State Historical Association"]
});

T.push({
  id: "republictexas", kind: "foreign", from: 1836, to: 1845, power: "texas",
  name: "Republic of Texas", color: "#9e8a6b",
  geo: ringToGeo(TEXAS_RING), clipToLand: true,
  label: "REPUBLIC OF TEXAS", labelAt: [-99.0, 31.3], labelSize: 2,
  tag: "Independent republic · 1836–1845",
  facts: [
    ["Independence", "Declared March 2, 1836; won at San Jacinto, April 21"],
    ["Presidents", "Houston, Lamar, Jones"],
    ["Claim", "To the Rio Grande and north to 42° — far beyond control"]
  ],
  eras: [
    { from: 1836, to: 1845, text: "After the Alamo and Goliad, Houston's army wins independence in eighteen minutes at San Jacinto. The Lone Star republic is cotton-and-slavery borderland, deep in debt, raided by and raiding Comanchería, its vast paper claims unenforceable — Mexico never recognizes the secession. Annexation by the U.S. in 1845 is the republic's exit strategy, and the war's trigger." }
  ],
  sources: ["Texas State Historical Association", "National Archives"]
});

T.push({
  id: "oregoncountry", kind: "foreign", from: 1750, to: 1846, power: "britain",
  name: "Oregon Country", color: "#5e7d8f",
  geo: ringToGeo(OREGON_RING), clipToLand: true,
  label: "OREGON COUNTRY", labelAt: [-119.5, 45.2], labelSize: 2, labelTo: 1846,
  tag: "Contested, then jointly occupied 1818–1846",
  facts: [
    ["Claimants", "Native nations; Spain, Russia, Britain, U.S."],
    ["1818", "U.S.–British 'joint occupation' agreed"],
    ["HBC", "Fort Vancouver (1825) ruled the fur country"]
  ],
  eras: [
    { from: 1750, to: 1818, text: "The lower Columbia is one of North America's most densely settled Indigenous regions — Chinookan towns, salmon economies, potlatch trade networks. Cook (1778) and the sea-otter trade bring ships and smallpox; Gray enters the Columbia (1792), Lewis and Clark winter at its mouth (1805–06), and Astor's fur post (1811) plants the first American claim." },
    { from: 1818, to: 1846, text: "Britain and the U.S. agree to share what neither controls; the Hudson's Bay Company's Fort Vancouver is the region's real government. Malaria after 1830 kills most people of the lower Columbia villages. Missionaries, then the Oregon Trail (1843), tilt the balance American; '54°40′ or Fight' ends quietly at the 49th parallel." }
  ],
  sources: ["Oregon Historical Society", "HistoryLink — Washington State", "Library of Congress"]
});

T.push({
  id: "rupertsland", kind: "foreign", from: 1750, to: 1818, power: "britain",
  name: "Rupert's Land (Hudson Bay watershed)", color: "#6b5b52",
  geo: ringToGeo([
    [-104.05, 49.00], [-102.60, 47.90], [-101.00, 47.00], [-99.30, 46.30], [-97.70, 45.85],
    [-96.60, 45.55], [-96.00, 46.10], [-95.60, 46.60], [-95.21, 47.19], [-95.15, 49.37],
    [-95.50, 49.00], [-98.00, 49.00], [-101.00, 49.00]
  ]), clipToLand: true,
  label: null,
  tag: "Hudson's Bay Company charter, 1670",
  facts: [
    ["Claim", "The entire Hudson Bay drainage, chartered to the HBC in 1670"],
    ["Here", "The Red River of the North drains north — so this corner drained to Britain"]
  ],
  eras: [
    { from: 1750, to: 1818, text: "Because the Red River of the North flows toward Hudson Bay, this prairie corner lay inside the Hudson's Bay Company's chartered domain — Ojibwe, Dakota, Assiniboine and Métis country traversed by fur brigades. The Convention of 1818 traded watershed logic for a ruler line, transferring the basin south of the 49th parallel to the United States." }
  ],
  sources: ["Hudson's Bay Company Archives (Archives of Manitoba)", "Library of Congress"]
});

T.push({
  id: "britishna", kind: "foreign", from: 1763, to: 1867, power: "britain",
  name: "British North America", color: "#8f5b52",
  label: "BRITISH NORTH AMERICA", labelAt: [-98.0, 54.0], labelSize: 2,
  tag: "Crown colonies north of the border",
  facts: [
    ["Includes", "Quebec/Lower & Upper Canada, the Maritimes, Rupert's Land"],
    ["Border", "Fixed at 45°N and the lakes (1783), 49°N (1818), Maine line (1842), 49°N to the Pacific (1846)"]
  ],
  eras: [
    { from: 1763, to: 1867, text: "After the conquest of New France, Britain's remaining mainland colonies share an ever-more-precise border with the republic to the south — surveyed at the lakes in 1783, ruled along 49° in 1818, argued over Maine timber until 1842, and extended to the Pacific in 1846. Invasions in 1775 and 1812 fail; confederation in 1867 creates the Dominion of Canada." }
  ],
  sources: ["Library and Archives Canada", "Avalon Project, Yale Law School"]
});

T.push({
  id: "canada1867", kind: "foreign", from: 1867, to: null, power: "britain",
  name: "Canada", color: "#8f5b52",
  label: "CANADA", labelAt: [-98.0, 54.0], labelSize: 2,
  tag: "Dominion of Canada · confederation 1867",
  facts: [
    ["Confederation", "July 1, 1867"],
    ["Boundary", "World's longest international border, 5,525 miles"]
  ],
  eras: [
    { from: 1867, to: 2026, text: "The Dominion knits its own transcontinental nation along the 49th parallel — the Alaska boundary is arbitrated in 1903, the International Joint Commission manages shared waters from 1909, and the two economies fuse across the world's longest border, from the Auto Pact (1965) to NAFTA (1994) and its successors." }
  ],
  sources: ["Library and Archives Canada", "International Boundary Commission"]
});

T.push({
  id: "mexicopost", kind: "foreign", from: 1848, to: null, power: "mexico",
  name: "Mexico", color: "#7a8f5a",
  label: "MEXICO", labelAt: [-104.5, 26.5], labelSize: 2,
  tag: "United Mexican States",
  facts: [
    ["Border", "Fixed 1848/1853; Rio Grande shifts adjusted through the 1970 treaty"],
    ["Chamizal", "The 1963 settlement returned shifted El Paso land to Mexico"]
  ],
  eras: [
    { from: 1848, to: 2026, text: "The border drawn at Guadalupe Hidalgo and the Gadsden line hardens over a century — from an open ranching frontier to fenced ports of entry. The wandering Rio Grande forces engineered fixes (Chamizal, 1963); railroads, the Bracero program, maquiladoras and NAFTA weave the two economies into the hemisphere's busiest boundary." }
  ],
  sources: ["International Boundary and Water Commission", "Library of Congress — Hispanic Division"]
});

T.push({
  id: "russianamerica", kind: "foreign", from: 1784, to: 1867, power: "russia",
  name: "Russian America", color: "#7d6b9e",
  geoRef: "02", clipToNation: false,
  label: "RUSSIAN AMERICA", labelAt: [-152.5, 64.3], labelSize: 2,
  tag: "Russian-American Company · 1784–1867",
  facts: [
    ["First post", "Three Saints Bay, Kodiak, 1784"],
    ["Charter", "Russian-American Company, 1799"],
    ["Capital", "Novo-Arkhangelsk (Sitka), from 1808"]
  ],
  eras: [
    { from: 1784, to: 1867, text: "Promyshlenniki fur hunters push along the Aleutians, coercing Unangax̂ hunters and devastating sea-otter populations; Kodiak, then Sitka — built on Tlingit land after battles in 1802–04 — anchor a colony that never exceeds about 800 Russians. Orthodox missions leave a lasting church. With the otters gone and Britain threatening, the tsar sells to Washington in 1867." }
  ],
  sources: ["Library of Congress — Meeting of Frontiers", "Alaska State Archives", "National Park Service — Sitka"]
});

T.push({
  id: "hawaiiankingdom", kind: "foreign", from: 1795, to: 1893, power: "hawaii",
  name: "Kingdom of Hawaiʻi", color: "#5e9e8a",
  geoRef: "15", clipToNation: false,
  label: "KINGDOM OF HAWAIʻI", labelAt: [-157.2, 21.7], labelSize: 3,
  tag: "Unified by Kamehameha I · 1795–1893",
  facts: [
    ["Unified", "1795 (completed 1810) by Kamehameha I"],
    ["Recognized", "By Britain, France and the U.S. as a sovereign state"],
    ["Population", "Collapsed from several hundred thousand to ~40,000 by 1890 (introduced disease)"]
  ],
  eras: [
    { from: 1795, to: 1893, text: "Kamehameha unifies the islands with cannon and statecraft; his kingdom wins formal recognition from the great powers — a sovereign, literate, constitutional Pacific state. Introduced diseases collapse the Native population; American planters gain land through the 1848 Māhele and power through the 1887 'Bayonet Constitution.' In January 1893 they depose Queen Liliʻuokalani with U.S. Marines landed from the USS Boston." }
  ],
  sources: ["Hawaiʻi State Archives", "National Archives", "Library of Congress"]
});

T.push({
  id: "hawaiirepublic", kind: "foreign", from: 1893, to: 1898, power: "hawaii",
  name: "Republic of Hawaiʻi", color: "#6f9e8a",
  geoRef: "15", clipToNation: false,
  label: "REP. OF HAWAIʻI", labelAt: [-157.2, 21.7], labelSize: 3,
  tag: "Planter republic · 1893–1898",
  facts: [
    ["Declared", "July 4, 1894, after the 1893 overthrow"],
    ["President", "Sanford B. Dole"],
    ["End", "Annexed by the U.S., July 7, 1898"]
  ],
  eras: [
    { from: 1893, to: 1898, text: "Cleveland's investigator finds the overthrow an 'act of war' and demands the Queen's restoration; the planters refuse and wait him out as a self-declared republic under Sanford Dole. Native Hawaiians petition against annexation almost unanimously — the Kūʻē petitions gather over 21,000 signatures — but the war with Spain delivers the islands to McKinley's Congress." }
  ],
  sources: ["National Archives — 1897 Petition Against the Annexation of Hawaii", "Hawaiʻi State Archives"]
});

TUSDATA.territories = T;
})();
