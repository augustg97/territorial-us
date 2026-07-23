// treaties.js — major treaties, alliances and economic agreements with other
// nations, drawn as lines from Washington to the partner on the world frame.
// from/to = years the line is displayed (to: null = still in force / defining).
window.TUSDATA = window.TUSDATA || {};

TUSDATA.treaties = [
  { id: "paris1783t", name: "Treaty of Paris", year: 1783, from: 1783, to: 1795, partner: "Great Britain", pt: [-0.13, 51.5],
    facts: [["Signed", "September 3, 1783"], ["Terms", "Independence recognized; boundaries to the Mississippi"]],
    eras: [{ from: 1783, to: 1795, text: "Franklin, Adams and Jay win a generous peace: independence, the Mississippi as the western boundary, and fishing rights off Newfoundland. Native nations, uninvited, lose most; loyalists lose everything. The unresolved details — forts, debts — fester until Jay's mission." }],
    sources: ["National Archives — Treaty of Paris (1783)", "Office of the Historian, U.S. Department of State"] },

  { id: "jay1794", name: "Jay Treaty", year: 1794, from: 1794, to: 1807, partner: "Great Britain", pt: [-0.13, 51.5],
    facts: [["Signed", "November 19, 1794"], ["Won", "British evacuation of the northwestern forts (1796)"]],
    eras: [{ from: 1794, to: 1807, text: "Deeply unpopular but war-averting: Britain finally quits Detroit and the lake forts, arbitration is invented for boundary disputes, and a decade of trade keeps the young republic solvent — at the price of swallowing British maritime practice until the Chesapeake affair and embargo years." }],
    sources: ["Avalon Project, Yale Law School", "Office of the Historian, U.S. Department of State"] },

  { id: "pinckney1795", name: "Pinckney's Treaty", year: 1795, from: 1795, to: 1819, partner: "Spain", pt: [-3.7, 40.4],
    facts: [["Signed", "October 27, 1795 (San Lorenzo)"], ["Won", "Mississippi navigation; deposit at New Orleans; 31°N boundary"]],
    eras: [{ from: 1795, to: 1819, text: "Spain, fearing an Anglo-American combination, concedes everything the western settlers demand: free navigation of the Mississippi, the right of deposit at New Orleans, and the 31st parallel as Florida's line — the diplomatic key that keeps Kentucky and Tennessee inside the Union." }],
    sources: ["Avalon Project, Yale Law School", "Office of the Historian, U.S. Department of State"] },

  { id: "louisiana1803t", name: "Louisiana Purchase Treaty", year: 1803, from: 1803, to: 1815, partner: "France", pt: [2.35, 48.85],
    facts: [["Signed", "April 30, 1803"], ["Price", "$15 million"]],
    eras: [{ from: 1803, to: 1815, text: "The greatest real-estate transaction in diplomatic history — see the Louisiana Purchase on the main map. Napoleon funds his wars; Jefferson doubles the republic and swallows his constitutional scruples." }],
    sources: ["National Archives — Louisiana Purchase Treaty", "Office of the Historian, U.S. Department of State"] },

  { id: "ghent1814", name: "Treaty of Ghent", year: 1814, from: 1814, to: 1830, partner: "Great Britain", pt: [3.72, 51.05],
    facts: [["Signed", "December 24, 1814"], ["Terms", "Status quo ante bellum — nothing gained, nothing lost"]],
    eras: [{ from: 1814, to: 1830, text: "The War of 1812 ends where it began — on paper. But the sideshows matter: Britain abandons its Native allies' barrier-state project, sealing the fate of the Old Northwest's nations, and the Rush-Bagot pact (1817) begins demilitarizing the Great Lakes — the start of the undefended border." }],
    sources: ["Avalon Project, Yale Law School", "Office of the Historian, U.S. Department of State"] },

  { id: "adamsonis1819t", name: "Adams-Onís Treaty", year: 1819, from: 1819, to: 1833, partner: "Spain", pt: [-3.7, 40.4],
    facts: [["Signed", "February 22, 1819"], ["Terms", "Florida ceded; a boundary drawn to the Pacific"]],
    eras: [{ from: 1819, to: 1833, text: "John Quincy Adams extracts Florida and, more fatefully, a transcontinental line: Spain renounces the Pacific Northwest, and for the first time a treaty imagines the United States as a two-ocean nation. Shown in detail on the main map." }],
    sources: ["Avalon Project, Yale Law School", "Office of the Historian, U.S. Department of State"] },

  { id: "webster1842", name: "Webster–Ashburton Treaty", year: 1842, from: 1842, to: 1855, partner: "Great Britain", pt: [-0.13, 51.5],
    facts: [["Signed", "August 9, 1842"], ["Settled", "The Maine boundary; extradition; slave-trade patrols"]],
    eras: [{ from: 1842, to: 1855, text: "The 'Aroostook War' of lumberjacks ends in a drawn line: Maine's border is split by negotiation, joint African-squadron patrols nominally target the slave trade, and Anglo-American relations settle into the pattern — recurring crisis, recurring compromise — that holds through the century." }],
    sources: ["Avalon Project, Yale Law School", "Maine Historical Society"] },

  { id: "wanghia1844", name: "Treaty of Wanghia", year: 1844, from: 1844, to: 1860, partner: "Qing China", pt: [113.26, 23.13],
    facts: [["Signed", "July 3, 1844"], ["Won", "Treaty-port access and extraterritoriality in China"]],
    eras: [{ from: 1844, to: 1860, text: "Riding Britain's Opium War coattails, Caleb Cushing secures American access to the treaty ports and extraterritorial courts — the republic's entry into the 'unequal treaty' system it would later denounce. The old Canton clipper trade gives way to a legal foothold that lasts a century." }],
    sources: ["Office of the Historian, U.S. Department of State", "Avalon Project, Yale Law School"] },

  { id: "guadalupe1848t", name: "Treaty of Guadalupe Hidalgo", year: 1848, from: 1848, to: 1862, partner: "Mexico", pt: [-99.13, 19.43],
    facts: [["Signed", "February 2, 1848"], ["Terms", "The Mexican Cession — half of Mexico's territory"]],
    eras: [{ from: 1848, to: 1862, text: "The war treaty that redrew the continent — see the Mexican Cession on the main map. Its guarantees to Mexican landholders and citizens eroded in American courts; its boundary line remains the hemisphere's defining border." }],
    sources: ["National Archives — Treaty of Guadalupe Hidalgo", "Office of the Historian, U.S. Department of State"] },

  { id: "kanagawa1854", name: "Convention of Kanagawa", year: 1854, from: 1854, to: 1868, partner: "Japan", pt: [139.7, 35.68],
    facts: [["Signed", "March 31, 1854"], ["Context", "Perry's black ships, 1853–54"]],
    eras: [{ from: 1854, to: 1868, text: "Commodore Perry's coal-hungry steam navy forces open two Japanese ports and a consulate — America's first great-power act in the Pacific, aimed at whalers, castaways and the China route. It detonates the crisis that becomes the Meiji Restoration, with consequences that fill the twentieth century." }],
    sources: ["Office of the Historian, U.S. Department of State", "Naval History and Heritage Command"] },

  { id: "alaska1867t", name: "Alaska Purchase Treaty", year: 1867, from: 1867, to: 1880, partner: "Russia", pt: [30.32, 59.94],
    facts: [["Signed", "March 30, 1867"], ["Price", "$7.2 million"]],
    eras: [{ from: 1867, to: 1880, text: "Seward and Stoeckl sign at 4 a.m.; the Senate consents within weeks. Russia exits North America, Britain's Pacific colonies are flanked, and the strangest bargain in the national ledger is struck — detailed on the main map's Alaska card." }],
    sources: ["National Archives — Alaska purchase documents", "Office of the Historian, U.S. Department of State"] },

  { id: "burlingame1868", name: "Burlingame Treaty", year: 1868, from: 1868, to: 1882, partner: "Qing China", pt: [116.4, 39.9],
    facts: [["Signed", "July 28, 1868"], ["Promise", "Free migration between the two countries"], ["Betrayed", "Chinese Exclusion Act, 1882"]],
    eras: [{ from: 1868, to: 1882, text: "Written partly to recruit labor for the transcontinental railroad, the treaty promises unrestricted Chinese immigration and reciprocal rights. Within fourteen years, depression-era racism produces the Chinese Exclusion Act — the first federal law barring a people by name, and the treaty's repudiation." }],
    sources: ["Office of the Historian, U.S. Department of State", "National Archives"] },

  { id: "paris1898t", name: "Treaty of Paris (1898)", year: 1898, from: 1898, to: 1912, partner: "Spain", pt: [-3.7, 40.4],
    facts: [["Signed", "December 10, 1898"], ["Terms", "Puerto Rico, Guam; the Philippines for $20M; Cuba freed under tutelage"]],
    eras: [{ from: 1898, to: 1912, text: "Empire by treaty: Spain's remnants pass to Washington after a ten-week war. The Senate ratifies by two votes over an anti-imperialist storm; the Philippine war begins two days before consent. The insular possessions on this map date from this signature." }],
    sources: ["National Archives — Treaty of Paris (1898)", "Office of the Historian, U.S. Department of State"] },

  { id: "haybunau1903", name: "Hay–Bunau-Varilla Treaty", year: 1903, from: 1903, to: 1979, partner: "Panama", pt: [-79.53, 8.98],
    facts: [["Signed", "November 18, 1903"], ["Terms", "The Canal Zone 'in perpetuity' — signed by no Panamanian"]],
    eras: [{ from: 1903, to: 1979, text: "Fifteen days after Panama's U.S.-assisted secession from Colombia, a French engineer signs away a ten-mile zone across the new republic. The canal it enabled and the resentment it institutionalized are both charted on this map — until Torrijos–Carter unwinds it." }],
    sources: ["National Archives", "Office of the Historian, U.S. Department of State"] },

  { id: "versailles1919", name: "Treaty of Versailles (rejected)", year: 1919, from: 1919, to: 1921, partner: "France (Paris Conference)", pt: [2.35, 48.85],
    facts: [["Signed", "June 28, 1919 — never ratified by the Senate"], ["Result", "A League of Nations without the United States"]],
    eras: [{ from: 1919, to: 1921, text: "Wilson carries his Fourteen Points to Paris and returns with a League his own Senate refuses — the reservations fight with Lodge ends in outright rejection, twice. The U.S. signs separate peace treaties in 1921 and turns inward; the world organization it conceived proceeds without it." }],
    sources: ["Office of the Historian, U.S. Department of State", "Library of Congress"] },

  { id: "washnaval1922", name: "Washington Naval Treaty", year: 1922, from: 1922, to: 1936, partner: "Britain, Japan, France, Italy", pt: [139.7, 35.68],
    facts: [["Signed", "February 6, 1922"], ["Ratio", "5:5:3 capital-ship tonnage (US:UK:Japan)"]],
    eras: [{ from: 1922, to: 1936, text: "The first great arms-control treaty: battleships are scrapped on the ways, fortification of Pacific bases is frozen, and naval rivalry pauses for a decade. Japan's resentment of the 5:5:3 ratio — and its 1936 walkout — mark the road to Pearl Harbor." }],
    sources: ["Office of the Historian, U.S. Department of State", "Naval History and Heritage Command"] },

  { id: "brettonwoods1944", name: "Bretton Woods system", year: 1944, from: 1944, to: 1971, partner: "44 Allied nations", pt: [-0.13, 51.5],
    facts: [["Agreed", "July 1944, Mount Washington Hotel, New Hampshire"], ["Built", "The IMF, the World Bank, and the dollar-gold standard"], ["Ended", "Nixon closes the gold window, August 15, 1971"]],
    eras: [{ from: 1944, to: 1971, text: "In a New Hampshire resort, White and Keynes design the postwar economy: currencies pegged to a gold-backed dollar, an IMF for crises, a World Bank for reconstruction. It underwrites the greatest boom in history until American deficits break the peg in 1971 — leaving the dollar standard, unbacked, in place." }],
    sources: ["International Monetary Fund archives", "Federal Reserve History"] },

  { id: "nato1949", name: "NATO", year: 1949, from: 1949, to: null, partner: "North Atlantic allies", pt: [4.35, 50.85],
    facts: [["Signed", "April 4, 1949, Washington"], ["Core", "Article 5 — an attack on one is an attack on all"], ["Invoked once", "September 12, 2001"]],
    eras: [{ from: 1949, to: 2026, text: "The republic's first peacetime alliance since France in 1778 — twelve founders grown to thirty-two, binding American power to European security through the Cold War, the Balkans, Afghanistan and the return of war to Europe in 2022. The entangling alliance Washington warned of became the system's keystone." }],
    sources: ["NATO archives", "Office of the Historian, U.S. Department of State"] },

  { id: "usjapan1951", name: "U.S.–Japan alliance", year: 1951, from: 1951, to: null, partner: "Japan", pt: [139.7, 35.68],
    facts: [["Signed", "September 8, 1951 (revised 1960)"], ["Terms", "Bases for defense — the Pacific alliance cornerstone"]],
    eras: [{ from: 1951, to: 2026, text: "Signed the same day as the San Francisco peace, the security treaty turns enemy into ally: American bases from Okinawa to Yokosuka anchor the Pacific order while Japan rebuilds into an economic superpower — the alliance outlasting trade wars and hosting the Seventh Fleet into the present." }],
    sources: ["Office of the Historian, U.S. Department of State", "U.S. Forces Japan"] },

  { id: "korea1953", name: "U.S.–Korea alliance", year: 1953, from: 1953, to: null, partner: "South Korea", pt: [126.98, 37.57],
    facts: [["Signed", "October 1, 1953 — after the armistice"], ["Today", "~28,500 U.S. troops remain"]],
    eras: [{ from: 1953, to: 2026, text: "The war that began on this map's 1950 timeline ends in armistice, not peace; the Mutual Defense Treaty freezes American power on the peninsula. Under its shield, a war-shattered agrarian south becomes a semiconductor and shipbuilding power — and a chip-supply partner critical to the modern U.S. economy." }],
    sources: ["Office of the Historian, U.S. Department of State", "U.S. Forces Korea"] },

  { id: "nafta1994t", name: "NAFTA → USMCA", year: 1994, from: 1994, to: null, partner: "Canada & Mexico", pt: [-99.13, 19.43],
    facts: [["In force", "January 1, 1994; renegotiated as USMCA, July 1, 2020"], ["Scale", "A $1.5+ trillion-a-year trade zone"]],
    eras: [{ from: 1994, to: 2026, text: "The continental economy formalized — tariffs phased out, supply chains fused (see the Laredo arc on the trade layer), and politics permanently rearranged in all three countries. Renamed and tightened in 2020, it remains the hemisphere's economic constitution." }],
    sources: ["Office of the U.S. Trade Representative", "Congressional Research Service"] },

  { id: "wtochina2001", name: "China PNTR & WTO", year: 2000, from: 2000, to: null, partner: "China", pt: [116.4, 39.9],
    facts: [["PNTR", "Signed October 10, 2000; WTO accession December 11, 2001"], ["Effect", "The 'China shock' — and the largest trade relationship in history"]],
    eras: [{ from: 2000, to: 2026, text: "Permanent normal trade relations end the annual China-trade fight and open the WTO door; the container arcs on this map thicken beyond any precedent. The bargain's costs to American manufacturing regions and its strategic second thoughts — tariffs, export controls on chips — now drive policy in both capitals." }],
    sources: ["Office of the U.S. Trade Representative", "Congressional Research Service"] }
];
