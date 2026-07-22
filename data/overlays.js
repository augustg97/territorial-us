// overlays.js — infrastructure routes (canals, trails, railroads), ecological overlays
// (bison range, Dust Bowl), and the Indian Territory region, with information cards.
window.TUSDATA = window.TUSDATA || {};

TUSDATA.routes = [
  {
    id: "eriecanal", name: "Erie Canal", kind: "canal", from: 1825, to: null,
    line: [[-73.75, 42.65], [-73.94, 42.81], [-74.60, 42.93], [-75.23, 43.10], [-76.15, 43.05], [-77.06, 43.06], [-77.61, 43.16], [-78.20, 43.10], [-78.69, 43.17], [-78.88, 42.89]],
    tag: "Albany–Buffalo · opened 1825",
    facts: [["Opened", "October 26, 1825 — 363 miles, 83 locks"], ["Effect", "Freight costs east of the Lakes fell roughly 90%"]],
    eras: [
      { from: 1825, to: 1900, text: "'Clinton's Ditch' connects the Hudson to Lake Erie and swings the whole interior's commerce through New York, which becomes the national metropolis. Buffalo, Rochester and Syracuse boom along it; the canal carries wheat east and settlers west, and its success sets off canal mania across a dozen states until railroads eclipse them." },
      { from: 1900, to: 2026, text: "Enlarged as the New York State Barge Canal (1918), then outrun by rail and the St. Lawrence Seaway, the canal survives as a recreational waterway and National Heritage Corridor — the clearest single artifact of the transportation revolution that made the Midwest." }
    ],
    sources: ["New York State Canal Corporation", "National Park Service — Erie Canalway"]
  },
  {
    id: "nationalroad", name: "National Road", kind: "road", from: 1811, to: null,
    line: [[-78.76, 39.65], [-79.72, 39.90], [-80.72, 40.06], [-81.60, 39.97], [-83.00, 39.96], [-84.20, 39.80], [-86.16, 39.77], [-87.40, 39.47], [-89.09, 38.96]],
    tag: "Cumberland → Vandalia · begun 1811",
    facts: [["Built", "1811–1839, Cumberland, Md. to Vandalia, Ill."], ["First", "First federally funded interstate highway"]],
    eras: [
      { from: 1811, to: 2026, text: "The first great federal public work carries Conestoga wagons over the mountains into the Ohio Valley — the main emigrant road west for a generation. Turned over to the states as macadam toll road, it fades under railroads, then revives as US 40 in the automobile age; I-70 shadows its route today." }
    ],
    sources: ["Federal Highway Administration", "National Park Service"]
  },
  {
    id: "santafetrail", name: "Santa Fe Trail", kind: "trail", from: 1821, to: 1880,
    line: [[-94.41, 39.09], [-96.49, 38.66], [-97.60, 38.35], [-98.76, 38.36], [-100.02, 37.75], [-101.70, 36.90], [-103.00, 36.40], [-104.20, 36.20], [-104.70, 36.00], [-105.94, 35.69]],
    tag: "Missouri → Santa Fe · 1821–1880",
    facts: [["Opened", "1821, with Mexican independence"], ["Character", "A two-way commercial highway, not an emigrant road"]],
    eras: [
      { from: 1821, to: 1880, text: "The moment Mexico opens its border, Missouri traders drive wagons of cloth and hardware 900 miles to Santa Fe, returning with silver and mules — crossing Comanche and Kiowa country on negotiated (and often broken) terms. The trail carries the Army of the West in 1846; the railroad's arrival at Santa Fe in 1880 retires it." }
    ],
    sources: ["National Park Service — Santa Fe National Historic Trail", "Kansas Historical Society"]
  },
  {
    id: "oregontrail", name: "Oregon Trail", kind: "trail", from: 1843, to: 1869,
    line: [[-94.41, 39.09], [-96.60, 39.15], [-99.00, 40.65], [-101.00, 41.12], [-103.30, 41.80], [-104.53, 42.21], [-106.30, 42.85], [-107.50, 42.50], [-108.90, 42.35], [-110.10, 42.50], [-111.60, 42.66], [-112.40, 43.03], [-113.80, 42.80], [-114.90, 42.75], [-116.20, 43.60], [-117.70, 44.10], [-118.79, 45.67], [-120.20, 45.65], [-121.18, 45.60], [-122.61, 45.36]],
    tag: "Missouri → Willamette · main era 1843–1869",
    facts: [["Length", "≈ 2,170 miles; four to six months by wagon"], ["Scale", "Some 300,000–400,000 emigrants used the trail network"]],
    eras: [
      { from: 1843, to: 1869, text: "From the 'Great Migration' of 1843, farm families follow the Platte, cross South Pass, and descend the Snake and Columbia to the Willamette — the largest voluntary land migration in American history, with cholera its deadliest companion. Branches split to California's gold and Utah's Zion. The 1869 railroad ends the wagon era; ruts remain visible today." }
    ],
    sources: ["National Park Service — Oregon National Historic Trail", "Bureau of Land Management"]
  },
  {
    id: "californiatrail", name: "California Trail", kind: "trail", from: 1846, to: 1869,
    line: [[-112.40, 43.03], [-113.70, 42.07], [-114.80, 41.60], [-115.76, 40.83], [-116.80, 40.90], [-117.73, 40.97], [-118.60, 40.05], [-119.50, 39.60], [-120.18, 39.33], [-121.00, 38.90], [-121.49, 38.58]],
    tag: "Fort Hall → Sacramento, via the Humboldt",
    facts: [["Peak", "1849–1852: over 200,000 gold-seekers"], ["Hazard", "The Forty-Mile Desert past the Humboldt Sink"]],
    eras: [
      { from: 1846, to: 1869, text: "The gold-rush branch: down the Humboldt's brackish miles, across the Forty-Mile Desert, and over Donner Pass — named for the 1846–47 party trapped by early snow. In 1849–52 alone, a quarter million people and their failing livestock scour the corridor; Paiute and Shoshone lands are stripped of game and grass." }
    ],
    sources: ["National Park Service — California National Historic Trail", "Bureau of Land Management"]
  },
  {
    id: "transcontinental", name: "First Transcontinental Railroad", kind: "rail", from: 1869, to: null,
    line: [[-95.93, 41.26], [-98.34, 40.92], [-100.77, 41.12], [-103.00, 41.15], [-104.82, 41.14], [-105.59, 41.31], [-107.24, 41.79], [-109.47, 41.53], [-111.00, 41.26], [-111.97, 41.22], [-112.55, 41.62], [-113.90, 41.30], [-115.76, 40.83], [-117.73, 40.97], [-119.81, 39.53], [-120.18, 39.33], [-121.49, 38.58], [-122.27, 37.80]],
    tag: "Omaha ↔ Sacramento · golden spike May 10, 1869",
    facts: [["Joined", "Promontory Summit, Utah — May 10, 1869"], ["Builders", "Union Pacific (largely Irish and veteran crews) and Central Pacific (up to 15,000 Chinese workers)"], ["Effect", "Coast to coast in about a week, from four to six months"]],
    eras: [
      { from: 1869, to: 1900, text: "Built on 1862 land grants through Cheyenne, Lakota and Shoshone country, the road makes the interior exportable: cattle, wheat, silver — and buffalo hides out by the trainload. Central Pacific's Chinese laborers blast the Sierra grade by hand; towns live or die by the surveyors' line. Four more transcontinentals follow by 1893." },
      { from: 1900, to: 2026, text: "The corridor remains the Union Pacific's Overland Route; I-80 parallels it almost exactly. The 1869 alignment around the Great Salt Lake was bypassed in 1904, leaving the golden-spike site a preserved historical park." }
    ],
    sources: ["National Park Service — Golden Spike National Historical Park", "Library of Congress"]
  }
];

TUSDATA.regions = [
  {
    id: "indianterritory", name: "Indian Territory", kind: "region", from: 1834, to: 1907,
    hatch: true, color: "#a08050",
    ring: [[-100.00, 37.00], [-94.62, 37.00], [-94.45, 35.60], [-94.48, 33.64], [-95.50, 33.90], [-96.90, 33.80], [-98.10, 34.10], [-99.40, 34.40], [-100.00, 34.56]],
    label: "INDIAN TERRITORY", labelAt: [-97.3, 35.4], labelSize: 3,
    tag: "Destination of the removals · 1834–1907",
    facts: [
      ["Defined", "Indian Intercourse Act, 1834"],
      ["Nations", "Cherokee, Choctaw, Chickasaw, Muscogee (Creek), Seminole — and later dozens more"],
      ["End", "Merged into Oklahoma at statehood, 1907"]
    ],
    eras: [
      { from: 1834, to: 1889, text: "The land 'permanently' guaranteed to the removed nations: the Five Tribes rebuild governments, schools and ranches here after the Trail of Tears. Treaties promised the territory would never be included in any state. After the Civil War — in which the nations split — reconstruction treaties strip their western lands to resettle Plains nations." },
      { from: 1889, to: 1907, text: "The 'Unassigned Lands' are thrown open in the 1889 land run; boomer towns appear in an afternoon. The Dawes Commission dissolves communal title, allotting land and opening the 'surplus' to settlers; oil is struck at the worst possible moment for Native landowners. In 1907, over the nations' Sequoyah statehood counterproposal, Indian Territory vanishes into Oklahoma." },
      { from: 1907, to: 2026, text: "The territory's legal ghost proved alive: in McGirt v. Oklahoma (2020) the Supreme Court held that the Muscogee reservation — and by extension most of eastern Oklahoma — was never disestablished, restoring tribal-federal criminal jurisdiction across much of the old territory." }
    ],
    sources: ["Oklahoma Historical Society", "National Archives", "Supreme Court of the United States — McGirt v. Oklahoma (2020)"]
  },
  {
    id: "dustbowl", name: "The Dust Bowl", kind: "eco", from: 1931, to: 1940,
    hatch: true, color: "#b08040",
    ring: [[-104.50, 38.50], [-100.50, 38.80], [-98.80, 37.50], [-99.50, 35.50], [-100.50, 33.80], [-102.50, 33.00], [-104.30, 34.00], [-105.00, 36.00]],
    label: "DUST BOWL", labelAt: [-101.9, 36.3], labelSize: 3,
    tag: "Southern Plains · worst years 1934–1936",
    facts: [
      ["Cause", "Plow-up of ~30 million acres of shortgrass, then drought"],
      ["Black Sunday", "April 14, 1935 — a duster turned day to night"],
      ["Exodus", "Hundreds of thousands left the region in the 1930s"]
    ],
    eras: [
      { from: 1931, to: 1940, text: "Wheat prices and tractors strip the shortgrass sod; when drought returns in 1931 the exposed soil simply leaves. Storms carry Plains topsoil to ships in the Atlantic; 'dust pneumonia' fills clinics; a quarter of the population of the hardest-hit counties departs, many down Route 66. The federal response — Soil Conservation Service (1935), shelterbelts, grassland buybacks — invents modern conservation farming, and the rains return by 1940." }
    ],
    sources: ["USDA Natural Resources Conservation Service", "Library of Congress — Farm Security Administration photographs"]
  }
];

// Bison range — staged geometry by year (approximate, after W.T. Hornaday's 1889 map).
TUSDATA.bison = {
  id: "bison", name: "Range of the American Bison", kind: "eco",
  stages: [
    { from: 1750, to: 1840, note: "widest range", ring: [[-105.00, 31.00], [-103.00, 35.00], [-104.00, 40.00], [-106.50, 44.00], [-108.50, 47.00], [-104.00, 49.00], [-100.00, 49.50], [-97.00, 49.00], [-96.00, 47.00], [-94.00, 45.00], [-91.00, 43.00], [-88.00, 41.50], [-85.00, 40.00], [-83.00, 38.50], [-85.00, 36.00], [-88.00, 34.00], [-91.00, 32.00], [-94.00, 30.50], [-97.00, 28.50], [-99.00, 27.50], [-100.50, 28.50], [-103.00, 29.50]] },
    { from: 1840, to: 1876, note: "split by the trails", rings: [
      [[-109.00, 48.80], [-104.00, 48.80], [-100.00, 48.00], [-98.50, 46.80], [-100.00, 44.50], [-103.50, 43.50], [-106.50, 44.50], [-108.50, 46.50]],
      [[-103.50, 36.50], [-100.00, 37.00], [-98.00, 35.50], [-98.00, 33.00], [-100.00, 31.00], [-102.50, 31.50], [-104.00, 33.50]]
    ] },
    { from: 1876, to: 1886, note: "last herds", rings: [
      [[-107.50, 47.50], [-105.00, 47.80], [-103.50, 46.80], [-105.00, 45.80], [-107.00, 46.20]],
      [[-102.00, 34.50], [-100.50, 34.80], [-99.80, 33.80], [-100.80, 33.00], [-102.20, 33.50]]
    ] },
    { from: 1886, to: 1910, note: "Yellowstone remnant", rings: [
      [[-110.90, 44.20], [-110.10, 44.20], [-110.10, 44.90], [-110.90, 44.90]]
    ] }
  ],
  tag: "From tens of millions to a few hundred — and partway back",
  facts: [
    ["Before", "Perhaps 30–60 million animals; keystone of Plains nations' economies"],
    ["Nadir", "Fewer than 1,100 counted in 1889 (Hornaday census); ~two dozen wild in Yellowstone by 1902"],
    ["Now", "≈ 400,000+ in conservation and commercial herds; national mammal, 2016"]
  ],
  eras: [
    { from: 1750, to: 1840, text: "Bison range from the Rockies past the Mississippi — the mobile commissary of Plains life, sustaining Lakota, Cheyenne, Comanche, Blackfeet and dozens of other nations in a horse-borne economy that itself reshaped the grasslands after 1700. Herds east of the river are gone by the 1830s as settlement advances." },
    { from: 1840, to: 1886, text: "The trails split the range; then the railroads bring industrial slaughter — hide hunters take millions a year in the 1870s, with army encouragement, to starve resisting nations onto reservations. The southern herd is destroyed by 1878, the northern by 1883–84. It is among the fastest destructions of a wildlife population ever recorded." },
    { from: 1886, to: 2026, text: "From a Yellowstone remnant guarded by the army after 1894, and captive herds kept by ranchers including Native families, the species claws back — the American Bison Society (1905), refuge herds, and today intertribal restoration returning buffalo to dozens of reservations. Genetically wild, free-ranging herds remain few." }
  ],
  sources: ["W.T. Hornaday, The Extermination of the American Bison (Smithsonian, 1889)", "U.S. Fish & Wildlife Service", "InterTribal Buffalo Council"]
};
