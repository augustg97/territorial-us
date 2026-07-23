// network.js — the connective tissue of the human map: major 19th-century trunk
// railroads and the Interstate Highway System, appended to the routes layer.
// Alignments are simplified corridors between real waypoints.
window.TUSDATA = window.TUSDATA || {};
TUSDATA.routes = TUSDATA.routes || [];

(function () {
var R = [];

// ---------------- trunk railroads (19th century) ----------------
function rail(id, name, from, line, tag, era, sources) {
  R.push({ id: id, name: name, kind: "rail", from: from, to: null, line: line, tag: tag,
    facts: [["Opened", "" + from], ["Kind", "Trunk railroad"]],
    eras: [{ from: from, to: 2026, text: era }], sources: sources });
}
rail("nycentral", "New York Central (Water Level Route)", 1853,
  [[-73.95, 40.75], [-73.75, 42.65], [-75.23, 43.1], [-76.15, 43.05], [-77.61, 43.16], [-78.88, 42.89], [-80.1, 42.2], [-81.69, 41.5], [-83.55, 41.65], [-85.8, 41.7], [-87.63, 41.88]],
  "New York ↔ Chicago along the lakes",
  "Vanderbilt's consolidation strings Hudson, Mohawk and lakeshore roads into the 'Water Level Route' — the low-grade New York–Chicago artery whose Twentieth Century Limited became the most famous train in America. Its corridor still carries Amtrak and CSX today.",
  ["New York Central System Historical Society", "Library of Congress"]);
rail("prr", "Pennsylvania Railroad", 1854,
  [[-75.16, 39.96], [-76.88, 40.27], [-78.4, 40.52], [-79.99, 40.44], [-82.9, 40.7], [-85.14, 41.08], [-87.63, 41.88]],
  "Philadelphia ↔ Chicago over the Alleghenies",
  "The self-styled 'Standard Railroad of the World' crosses the Alleghenies at Horseshoe Curve (1854) and becomes the mightiest corporation of its age — hauling the steel, coal and passengers of the industrial heartland. Its main line remains Amtrak's Keystone and Norfolk Southern's spine.",
  ["Pennsylvania Railroad Technical & Historical Society", "Library of Congress"]);
rail("bo", "Baltimore & Ohio", 1853,
  [[-76.61, 39.29], [-78.76, 39.65], [-80.72, 40.06], [-83.0, 39.6], [-84.51, 39.1], [-87.1, 38.7], [-90.24, 38.63]],
  "Baltimore ↔ the Ohio Valley — the first common carrier",
  "America's first common-carrier railroad (chartered 1827) reaches the Ohio River at Wheeling in 1853 and St. Louis by 1857, giving the seaboard its first all-rail path to the western waters. The B&O's stone viaducts still stand; its successor CSX still runs the route.",
  ["B&O Railroad Museum", "Library of Congress"]);
rail("ic", "Illinois Central", 1856,
  [[-87.63, 41.88], [-88.9, 40.1], [-89.13, 38.53], [-89.18, 37.01], [-90.05, 35.15], [-90.18, 32.3], [-90.07, 29.97]],
  "Chicago ↔ New Orleans — the Main Line of Mid-America",
  "Built with the first federal railroad land grant (1850), the IC runs straight down the continent's spine. It carries cotton and timber north, manufactured goods south — and in the twentieth century, the Great Migration itself: the City of New Orleans became the road north for Black Mississippians bound for Chicago.",
  ["Illinois Central Historical Society", "Library of Congress"]);
rail("atsf", "Atchison, Topeka & Santa Fe", 1887,
  [[-94.6, 39.05], [-95.68, 39.05], [-97.6, 38.35], [-100.02, 37.75], [-103.54, 37.98], [-104.7, 36.2], [-106.65, 35.08], [-108.3, 35.3], [-111.65, 35.2], [-114.6, 34.85], [-117.02, 34.9], [-118.2, 34.03]],
  "Kansas City ↔ Los Angeles across the Southwest",
  "The Santa Fe follows the old trail it was named for, crosses Raton Pass in 1878, and reaches Los Angeles by 1887 — its rate war with the Southern Pacific briefly selling Kansas City–LA tickets for one dollar and igniting Southern California's first population boom. Today it is BNSF's Southern Transcon, the busiest freight corridor in the West.",
  ["Kansas Historical Society", "BNSF corporate history"]);
rail("sp", "Southern Pacific (Sunset Route)", 1883,
  [[-90.07, 29.97], [-93.75, 30.1], [-95.37, 29.76], [-98.5, 29.45], [-100.9, 29.37], [-104.5, 30.4], [-106.49, 31.76], [-110.97, 32.22], [-114.62, 32.7], [-117.1, 33.9], [-118.2, 34.03]],
  "New Orleans ↔ Los Angeles — the southern transcontinental",
  "Completed with a silver spike in the West Texas desert (1883), the Sunset Route gives the Gulf a Pacific outlet and fulfills the purpose of the Gadsden Purchase thirty years on. Cotton, produce and troop trains ride it through two world wars; Union Pacific runs it still.",
  ["Union Pacific corporate history", "Texas State Historical Association"]);
rail("np", "Northern Pacific", 1883,
  [[-93.09, 44.95], [-96.79, 46.88], [-100.78, 46.81], [-104.2, 46.4], [-108.5, 45.78], [-110.5, 45.8], [-112.04, 46.6], [-114.0, 46.87], [-117.4, 47.66], [-120.5, 47.4], [-122.32, 47.6]],
  "St. Paul ↔ Puget Sound — the land-grant northern road",
  "Chartered with the largest land grant in American history (some 40 million acres), the NP crawls through bankruptcy and the Panic of 1873 before the last spike at Gold Creek, Montana in 1883. Its land offices seeded the towns of the northern plains — and sold the Northwest to the world.",
  ["Minnesota Historical Society", "Montana Historical Society"]);
rail("gn", "Great Northern", 1893,
  [[-93.09, 44.95], [-96.0, 46.3], [-98.7, 47.9], [-101.3, 48.23], [-106.6, 48.5], [-109.68, 48.55], [-113.0, 48.4], [-114.3, 48.4], [-117.4, 47.66], [-121.0, 47.7], [-122.32, 47.6]],
  "St. Paul ↔ Seattle — Hill's road, built without land grants",
  "James J. Hill's 'transcontinental built without federal land grants' crosses the Rockies at Marias Pass (found in 1889) and reaches Seattle in 1893 — then survives that year's panic while its subsidized rivals fail. The Empire Builder still runs the route; Glacier Park was its resort project.",
  ["Minnesota Historical Society", "Great Northern Railway Historical Society"]);

// ---------------- the Interstate Highway System ----------------
function hwy(id, name, from, line, tag, era) {
  R.push({ id: id, name: name, kind: "highway", from: from, to: null, line: line, tag: tag,
    facts: [["Authorized", "Federal-Aid Highway Act, 1956"], ["Corridor opened", "largely " + from + "–" + (from + 15)]],
    eras: [{ from: from, to: 2026, text: era }],
    sources: ["Federal Highway Administration", "U.S. Department of Transportation"] });
}
hwy("i95", "Interstate 95", 1958,
  [[-71.06, 42.36], [-71.4, 41.8], [-74.0, 40.75], [-75.16, 39.95], [-76.61, 39.29], [-77.02, 38.9], [-77.44, 37.54], [-78.9, 35.05], [-81.09, 32.08], [-81.65, 30.3], [-81.3, 28.6], [-80.19, 25.76]],
  "Boston ↔ Miami — the seaboard main street",
  "The East Coast's urban corridor on concrete: 1,900 miles stitching every seaboard metropolis from New England to Florida into one commuting, trucking, migrating megalopolis.");
hwy("i90", "Interstate 90", 1956,
  [[-71.06, 42.36], [-73.75, 42.65], [-76.15, 43.05], [-78.88, 42.89], [-81.69, 41.5], [-83.55, 41.65], [-87.63, 41.88], [-89.4, 43.07], [-91.2, 43.8], [-96.7, 43.55], [-103.2, 44.08], [-108.5, 45.78], [-112.5, 46.0], [-117.4, 47.66], [-121.0, 47.5], [-122.32, 47.6]],
  "Boston ↔ Seattle — the longest Interstate",
  "Three thousand miles from Boston Harbor to Puget Sound, shadowing the Erie Canal, the lakeshore and the Northern Pacific — the northern tier's replacement for all of them at once.");
hwy("i80", "Interstate 80", 1956,
  [[-74.2, 40.85], [-77.0, 41.0], [-80.8, 41.1], [-83.55, 41.6], [-87.63, 41.7], [-90.6, 41.6], [-93.6, 41.59], [-95.93, 41.26], [-98.34, 40.92], [-101.0, 41.12], [-104.82, 41.14], [-107.24, 41.79], [-111.9, 40.76], [-114.0, 40.85], [-116.2, 40.83], [-119.81, 39.53], [-121.49, 38.58], [-122.27, 37.8]],
  "New York ↔ San Francisco — the Lincoln Highway's heir",
  "The central overland route made freeway: down the Platte, over the Wyoming gap, across the salt flats and the Sierra at Donner — the transcontinental railroad's own geography, driven at 70 miles an hour. Its final section closed the gap in 1986.");
hwy("i70", "Interstate 70", 1956,
  [[-76.61, 39.29], [-78.76, 39.65], [-80.72, 40.06], [-83.0, 39.96], [-86.16, 39.77], [-89.0, 39.0], [-90.24, 38.63], [-94.6, 39.05], [-95.68, 39.05], [-98.8, 38.9], [-102.0, 39.1], [-104.95, 39.74], [-106.4, 39.6], [-108.55, 39.07], [-110.8, 38.95], [-112.6, 38.6]],
  "Baltimore ↔ the Utah desert — first paving of the program",
  "The first Interstate contract was let on I-70 in Missouri and Kansas (1956); its Colorado stretch through Glenwood Canyon (1992) was the system's engineering finale. It follows the National Road east of the Mississippi — the 1811 route reborn.");
hwy("i40", "Interstate 40", 1960,
  [[-77.9, 34.2], [-78.64, 35.78], [-80.84, 36.1], [-83.92, 35.96], [-86.78, 36.16], [-90.05, 35.15], [-92.3, 34.75], [-95.4, 35.4], [-97.5, 35.45], [-101.83, 35.2], [-104.6, 35.15], [-106.65, 35.08], [-109.5, 35.1], [-111.65, 35.2], [-114.6, 34.85], [-117.02, 34.9]],
  "The Southwest's main street — old Route 66 made freeway",
  "From the Carolina coast over the Smokies and out the 35th parallel to Barstow, I-40 absorbed and erased most of Route 66 — the Dust Bowl highway retired by the road that replaced it, town by bypassed town.");
hwy("i10", "Interstate 10", 1957,
  [[-81.65, 30.3], [-84.28, 30.44], [-88.04, 30.69], [-90.07, 29.97], [-93.75, 30.1], [-95.37, 29.76], [-98.5, 29.45], [-100.9, 30.3], [-103.5, 30.9], [-106.49, 31.76], [-110.97, 32.22], [-112.07, 33.48], [-114.62, 33.65], [-116.2, 33.8], [-118.2, 34.03]],
  "Jacksonville ↔ Los Angeles — the Sunset Route on rubber",
  "The southern transcontinental: Gulf ports, petrochemical Texas, the border cities and the desert Southwest strung on one 2,460-mile line — the Sun Belt's growth machine and the Southern Pacific's shadow.");
hwy("i75", "Interstate 75", 1960,
  [[-83.1, 42.6], [-83.55, 41.6], [-84.2, 39.9], [-84.51, 39.1], [-84.3, 37.0], [-83.92, 35.96], [-84.39, 33.75], [-83.63, 32.84], [-82.5, 27.95], [-81.8, 26.15], [-80.3, 25.8]],
  "The Great Lakes ↔ Florida funnel",
  "Detroit's auto country to Florida's beaches: the snowbird and freight funnel of the eastern interior, and the corridor along which the South industrialized as the Rust Belt shed.");
hwy("i35", "Interstate 35", 1959,
  [[-92.1, 46.79], [-93.25, 44.96], [-93.6, 41.59], [-94.6, 39.05], [-97.34, 37.69], [-97.5, 35.45], [-97.0, 32.8], [-97.74, 30.27], [-98.5, 29.45], [-99.5, 27.5]],
  "Duluth ↔ Laredo — the NAFTA main line",
  "The middle of the country on one road, from Lake Superior ore docks to the Rio Grande bridges — after 1994 the densest truck corridor of continental trade.");
hwy("i5", "Interstate 5", 1957,
  [[-122.32, 47.6], [-122.9, 46.1], [-122.68, 45.52], [-123.09, 44.05], [-122.9, 42.3], [-122.39, 40.59], [-121.8, 39.5], [-121.49, 38.58], [-120.8, 36.6], [-119.0, 35.3], [-118.2, 34.03], [-117.12, 32.8]],
  "The Pacific main street",
  "Canada to Mexico through every West Coast metropolis and the length of the Central Valley — the road the western economy rides, from Boeing to the produce trucks.");
hwy("i15", "Interstate 15", 1961,
  [[-112.5, 46.0], [-112.03, 43.49], [-111.9, 40.76], [-113.6, 37.1], [-115.14, 36.16], [-117.3, 34.1], [-117.12, 32.8]],
  "The Mormon Corridor made freeway",
  "Butte to the border along the old wagon road of the Latter-day Saint settlements — and, after 1941, the road that made Las Vegas: a casino town at the day's-drive point from Los Angeles.");
hwy("i94", "Interstate 94", 1958,
  [[-83.1, 42.35], [-86.3, 42.1], [-87.63, 41.88], [-87.95, 43.05], [-89.4, 43.07], [-93.25, 44.96], [-96.79, 46.88], [-100.78, 46.81], [-104.2, 46.4], [-108.5, 45.78]],
  "Detroit ↔ Montana — the northern factory belt",
  "The auto belt's shop floor — Detroit, Gary's mills, Chicago, Milwaukee — running out through the wheat of the Dakotas to meet I-90 at Billings.");
hwy("i25", "Interstate 25", 1960,
  [[-106.5, 44.35], [-106.3, 42.85], [-104.82, 41.14], [-104.95, 39.74], [-104.82, 38.83], [-104.5, 36.7], [-106.65, 35.08], [-106.78, 32.3]],
  "The Front Range corridor",
  "The mountain-front line where the plains meet the Rockies: Wyoming's energy basins, Denver's sprawl, the Pueblo mills and the Rio Grande valley on one north–south seam.");
hwy("i20", "Interstate 20", 1960,
  [[-79.76, 34.2], [-82.4, 33.5], [-84.39, 33.75], [-86.8, 33.52], [-90.18, 32.3], [-93.75, 32.52], [-97.0, 32.8], [-102.08, 32.0], [-103.7, 31.5]],
  "The Deep South's east–west main line",
  "Columbia to the Permian Basin through Atlanta, Birmingham's furnaces, the cotton Delta and the Texas oil patch — the industrializing South's own transcontinental.");
hwy("i45", "Interstate 45", 1960,
  [[-96.95, 32.8], [-95.8, 31.3], [-95.37, 29.76], [-94.8, 29.3]],
  "Dallas ↔ Houston ↔ the Gulf",
  "The Texas triangle's busiest leg, ending at Galveston's seawall — hurricane evacuation route and petrochemical service road in one.");
hwy("i85", "Interstate 85", 1960,
  [[-77.4, 37.2], [-78.9, 36.0], [-80.84, 35.23], [-82.4, 34.85], [-84.39, 33.75], [-86.3, 32.37]],
  "The Piedmont crescent",
  "Richmond to Montgomery through the fall-line cities — the textile crescent that became the banking, research and auto-plant South.");
hwy("i55", "Interstate 55", 1959,
  [[-87.63, 41.88], [-89.6, 39.8], [-90.24, 38.63], [-90.05, 35.15], [-90.18, 32.3], [-90.07, 29.97]],
  "Chicago ↔ New Orleans — the Illinois Central's shadow",
  "The Great Migration corridor as freeway, tracking the IC and old US 61 down the river valley — blues highway, grain highway, chemical-corridor highway.");

TUSDATA.routes = TUSDATA.routes.concat(R);
})();
