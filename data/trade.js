// trade.js — major import/export flows across time, drawn as arcs on the world
// frame. dir: "export" | "import" | "both". us/world = [lon, lat] endpoints.
window.TUSDATA = window.TUSDATA || {};

TUSDATA.trade = [
  { id: "tobacco", name: "Tobacco to Britain", dir: "export", from: 1750, to: 1776,
    us: [-76.3, 37.2], world: [-0.1, 51.5], partner: "Great Britain",
    facts: [["Cargo", "~100 million lbs a year by the 1770s"], ["Produced by", "Enslaved labor in the Chesapeake"]],
    eras: [{ from: 1750, to: 1776, text: "Virginia and Maryland tobacco, grown by enslaved people and shipped on consignment to London and Glasgow, is the mainland's greatest export — and its planters' greatest debt trap. The Navigation Acts require routing through Britain; smuggling and resentment of the system feed the revolutionary crisis." }],
    sources: ["Colonial Williamsburg Foundation", "Library of Congress"] },

  { id: "ricecharleston", name: "Rice & indigo to Britain", dir: "export", from: 1750, to: 1776,
    us: [-79.93, 32.78], world: [-0.1, 51.5], partner: "Great Britain",
    facts: [["Skill", "Rice culture built on knowledge of enslaved West Africans"], ["Subsidy", "Indigo carried a British bounty"]],
    eras: [{ from: 1750, to: 1776, text: "Carolina gold rice — cultivated with West African tidal-field expertise by the enslaved majority of the lowcountry — and bounty-subsidized indigo make Charleston the richest city per (free) capita in British America. The wealth is inseparable from the deadliest labor regime on the mainland." }],
    sources: ["South Carolina Historical Society", "Library of Congress"] },

  { id: "slavetrade", name: "The Atlantic slave trade", dir: "import", from: 1750, to: 1808,
    us: [-79.93, 32.76], world: [-13.7, 9.5], partner: "West Africa",
    forced: true,
    facts: [["Scale", "≈388,000 people trafficked directly to mainland North America (of 12.5M across the Atlantic)"], ["Gateway", "≈40% entered through Charleston; Sullivan's Island was the Ellis Island of enslavement"], ["Ban", "Federal prohibition January 1, 1808 — the domestic trade continued to 1865"]],
    eras: [{ from: 1750, to: 1808, text: "The commerce this map cannot soften: human beings, purchased on the West African coast and carried through the Middle Passage to Charleston, Savannah and the Chesapeake. Their forced labor produced the tobacco, rice, indigo and cotton flowing on every other arc of this era. The 1808 federal ban ended legal importation; the internal trade in a million American-born people continued until emancipation." }],
    sources: ["SlaveVoyages.org (Trans-Atlantic Slave Trade Database)", "National Museum of African American History and Culture"] },

  { id: "triangletrade", name: "Rum, molasses & the Caribbean", dir: "both", from: 1750, to: 1790,
    us: [-71.06, 42.36], world: [-59.6, 13.1], partner: "British & French West Indies",
    facts: [["North's stake", "New England fed and supplied the sugar islands"], ["Friction", "The 1733/1764 Molasses and Sugar Acts bred smuggling"]],
    eras: [{ from: 1750, to: 1790, text: "New England ships carry fish, lumber, and provisions to the sugar islands and return with molasses for Rhode Island and Massachusetts rum distilleries — a circuit lubricated by smuggling and entangled with the slave economies of the Caribbean. Britain's attempts to tax it are early sparks of revolution." }],
    sources: ["Massachusetts Historical Society", "Library of Congress"] },

  { id: "cotton", name: "King Cotton to Liverpool", dir: "export", from: 1800, to: 1861,
    us: [-90.07, 29.95], world: [-3.0, 53.4], partner: "Britain (Lancashire mills)",
    facts: [["Share", "Cotton ≈ 57% of all U.S. exports by 1860"], ["Produced by", "≈4 million enslaved people; the gin (1793) made it king"], ["Volume", "New Orleans & Mobile shipped millions of bales a year"]],
    eras: [{ from: 1800, to: 1861, text: "Short-staple cotton, made profitable by Whitney's gin and grown by an enslaved workforce forcibly relocated southwest in the domestic slave trade, becomes the young republic's export engine and Lancashire's raw material. Planters' confidence that 'King Cotton' would force British support underwrote secession — a bet that failed." }],
    sources: ["U.S. Census Bureau, 1860", "Library of Congress"] },

  { id: "wheat", name: "Grain to Europe", dir: "export", from: 1846, to: 1914,
    us: [-74.05, 40.67], world: [-3.0, 53.4], partner: "Britain & Europe",
    facts: [["Opened by", "Britain's repeal of the Corn Laws, 1846"], ["Carried by", "Erie Canal → railroads → steam grain fleets"]],
    eras: [{ from: 1846, to: 1914, text: "Free-trade Britain opens its grain market just as canals, railroads and the reaper unlock the prairies; by the 1880s bonanza farms and Chicago elevators feed industrial Europe. Cheap American wheat undercuts European peasant agriculture — one driver of the very emigration streaming back westward across the same ocean." }],
    sources: ["U.S. Department of Agriculture", "Chicago Board of Trade histories"] },

  { id: "kerosene", name: "Kerosene lights the world", dir: "export", from: 1865, to: 1911,
    us: [-75.13, 39.90], world: [10.0, 53.55], partner: "Europe (and Asia)",
    facts: [["Rank", "Refined petroleum was the #1 U.S. manufactured export by the 1880s"], ["Firm", "Standard Oil controlled ~90% of refining"]],
    eras: [{ from: 1865, to: 1911, text: "Before gasoline mattered, Pennsylvania crude became lamp kerosene and went abroad — Standard Oil's blue cans lit homes from Hamburg to Shanghai, making petroleum America's premier manufactured export and Rockefeller the richest man alive, until the Supreme Court broke the trust in 1911." }],
    sources: ["American Petroleum Institute", "Library of Congress"] },

  { id: "beef", name: "Refrigerated meat to Britain", dir: "export", from: 1875, to: 1914,
    us: [-74.05, 40.67], world: [-0.1, 51.5], partner: "Britain",
    facts: [["Made possible by", "Refrigerated rail cars and steamships (1870s)"], ["Source", "Chicago's Union Stock Yards"]],
    eras: [{ from: 1875, to: 1914, text: "Swift and Armour's refrigerated cars and cold-storage steamers put Great Plains beef — raised on former bison range — on British tables. The dressed-beef trade knits ranch, railhead, packinghouse and ocean liner into one machine, prefiguring the modern cold chain." }],
    sources: ["Chicago History Museum", "U.S. Department of Agriculture"] },

  { id: "wwi", name: "Munitions & food for the Allies", dir: "export", from: 1914, to: 1918,
    us: [-74.05, 40.67], world: [0.1, 49.49], partner: "Britain & France",
    facts: [["Scale", "U.S. exports to the Allies roughly quadrupled, 1914–16"], ["Turning point", "War loans bound U.S. finance to Allied victory"]],
    eras: [{ from: 1914, to: 1918, text: "Neutral America becomes the Allied arsenal and granary: shells from Bethlehem, wheat, horses and loans cross the U-boat-hunted Atlantic. The trade — and the Lusitania — pull the U.S. toward intervention; by 1918 New York has displaced London as the world's creditor." }],
    sources: ["National WWI Museum and Memorial", "Federal Reserve History"] },

  { id: "rubber", name: "Rubber for the motor age", dir: "import", from: 1910, to: 1942,
    us: [-74.05, 40.67], world: [103.8, 1.35], partner: "British Malaya & Dutch East Indies",
    facts: [["Use", "≈75% of rubber went into tires"], ["Crisis", "Japan's 1942 conquests cut the supply — synthetic rubber crash program followed"]],
    eras: [{ from: 1910, to: 1942, text: "Akron's tire factories run on plantation rubber from Malaya and the Indies; America consumes most of the world supply. When Japan seizes the plantations in 1942, a federal crash program builds synthetic-rubber plants in months — one of the war's decisive industrial feats." }],
    sources: ["U.S. Rubber Study Group histories", "National WWII Museum"] },

  { id: "lendlease", name: "Lend-Lease", dir: "export", from: 1941, to: 1945,
    us: [-74.05, 40.67], world: [-3.0, 53.4], partner: "Britain, USSR & Allies",
    facts: [["Value", "≈$50 billion (about $700B today) in war supply"], ["Routes", "North Atlantic convoys; Murmansk run; Persian Corridor; Alaska-Siberia air route"]],
    eras: [{ from: 1941, to: 1945, text: "The 'arsenal of democracy' made literal: trucks, aircraft, food and fuel flow to Britain and the USSR through convoy battles that decide the Atlantic war. Two-thirds of the Red Army's trucks are American-built; the logistics web trained a generation that would build the postwar trade order." }],
    sources: ["National Archives", "National WWII Museum"] },

  { id: "oilvenezuela", name: "Venezuelan oil", dir: "import", from: 1948, to: 1975,
    us: [-95.0, 29.7], world: [-71.6, 10.6], partner: "Venezuela",
    facts: [["Rank", "The largest U.S. crude supplier through the 1950s–60s"], ["Legacy", "Venezuela co-founded OPEC in 1960"]],
    eras: [{ from: 1948, to: 1975, text: "As domestic demand outruns even Texas, Lake Maracaibo crude feeds Gulf Coast refineries — the first great oil-import relationship, complete with import quotas (1959) protecting domestic producers and a producer backlash that helps birth OPEC." }],
    sources: ["U.S. Energy Information Administration", "Council on Foreign Relations histories"] },

  { id: "oilgulf", name: "Persian Gulf crude", dir: "import", from: 1973, to: 2015,
    us: [-95.0, 29.7], world: [50.1, 26.6], partner: "Saudi Arabia & the Gulf",
    facts: [["Shock", "The 1973 embargo quadrupled prices; gas lines followed"], ["Peak dependence", "≈60% of U.S. oil was imported around 2005"], ["Reversal", "Shale made the U.S. the top producer after 2014"]],
    eras: [{ from: 1973, to: 2015, text: "The 1973 embargo announces a new dependence that reshapes foreign policy — the Carter Doctrine, the Fifth Fleet, two Gulf wars. Import reliance peaks near 60% in the mid-2000s, then fracking unwinds it; by the late 2010s the tankers increasingly sail the other way." }],
    sources: ["U.S. Energy Information Administration", "Office of the Historian, U.S. Department of State"] },

  { id: "japangoods", name: "Japanese electronics & autos", dir: "import", from: 1965, to: 1995,
    us: [-118.22, 33.74], world: [139.65, 35.45], partner: "Japan",
    facts: [["Icons", "Transistor radios → Toyotas → Walkmans"], ["Friction", "Voluntary export restraints (1981); transplant factories followed"]],
    eras: [{ from: 1965, to: 1995, text: "Japan's export machine lands at San Pedro Bay: radios, then steel, then compact cars that devastate Detroit after the oil shocks. Trade friction peaks in the 1980s with quotas and the Plaza Accord — and resolves partly by Japanese plants rising in Ohio, Kentucky and Tennessee." }],
    sources: ["Office of the U.S. Trade Representative", "Federal Reserve History"] },

  { id: "chinagoods", name: "The China trade", dir: "import", from: 1995, to: null,
    us: [-118.22, 33.74], world: [121.5, 31.2], partner: "China",
    facts: [["Scale", "The largest bilateral goods flow in history; deficit peaked near $420B (2018)"], ["Gateway", "LA/Long Beach — America's box-container front door"], ["Turn", "Tariffs from 2018; 'de-risking' and reshoring after 2020"]],
    eras: [{ from: 1995, to: 2026, text: "After PNTR and WTO accession (2001), supply chains re-pole to the Pearl and Yangtze deltas; containers stack five-high at San Pedro Bay and Walmart shelves track Shenzhen. The relationship remade both economies — hollowing some American manufacturing regions — before tariffs, pandemic shocks and chip controls began a partial rewiring." }],
    sources: ["U.S. Census Bureau, Foreign Trade Division", "Office of the U.S. Trade Representative"] },

  { id: "taiwanchips", name: "Semiconductors from Taiwan", dir: "import", from: 2000, to: null,
    us: [-122.4, 37.7], world: [120.97, 24.8], partner: "Taiwan (TSMC)",
    facts: [["Chokepoint", "TSMC fabs make ~90% of leading-edge logic chips"], ["Response", "CHIPS Act (2022); Arizona fabs"]],
    eras: [{ from: 2000, to: 2026, text: "The most valuable cargo per gram in world trade: leading-edge chips from Hsinchu that every American phone, car and data center depends on. The concentration risk — a single island, a single company — drives the CHIPS Act and the effort to re-root fabrication in Arizona, Ohio and Texas." }],
    sources: ["Semiconductor Industry Association", "Congressional Research Service"] },

  { id: "aircraft", name: "Boeing jets to the world", dir: "export", from: 1970, to: null,
    us: [-122.33, 47.61], world: [139.7, 35.68], partner: "Global airlines",
    facts: [["Rank", "Aircraft — perennially the top U.S. manufactured export"], ["Icon", "The 747 (1970) shrank the planet"]],
    eras: [{ from: 1970, to: 2026, text: "From Everett's mile-long assembly hall, widebodies became America's flagship manufactured export — the 747 opening mass intercontinental travel, the 737 line carrying (and, after 2018's MAX crashes, testing) the franchise. Aerospace remains the export counterweight to the container inflow." }],
    sources: ["Boeing historical archives", "U.S. Census Bureau, Foreign Trade Division"] },

  { id: "grainussr", name: "Grain to the Soviet Union", dir: "export", from: 1972, to: 1981,
    us: [-90.06, 29.94], world: [30.7, 46.5], partner: "USSR (Black Sea ports)",
    facts: [["1972", "The 'Great Grain Robbery' — quiet Soviet purchases moved world prices"], ["1980", "Carter's embargo after Afghanistan — lifted 1981"]],
    eras: [{ from: 1972, to: 1981, text: "Détente's strangest commerce: Soviet crop failures send buyers quietly through Gulf ports, spiking world food prices and plowing up marginal American land ('fencerow to fencerow'). The 1980 embargo punishes the Afghanistan invasion — and mostly punishes American farmers, teaching a durable lesson about food-power." }],
    sources: ["U.S. Department of Agriculture", "Office of the Historian, U.S. Department of State"] },

  { id: "nafta", name: "NAFTA supply chains", dir: "both", from: 1994, to: null,
    us: [-99.5, 27.5], world: [-100.3, 25.7], partner: "Mexico (and Canada)",
    facts: [["Corridor", "Laredo — the busiest inland port in the hemisphere"], ["Pattern", "Parts cross the border many times before a car is finished"]],
    eras: [{ from: 1994, to: 2026, text: "NAFTA (1994, renegotiated as USMCA in 2020) fuses the three economies: engines, harnesses and finished vehicles shuttle across the Rio Grande in just-in-time streams, maquiladoras line the border, and Mexico becomes America's largest goods partner by the 2020s." }],
    sources: ["Office of the U.S. Trade Representative", "U.S. Census Bureau, Foreign Trade Division"] },

  { id: "lng", name: "LNG to Europe & Asia", dir: "export", from: 2016, to: null,
    us: [-93.87, 29.73], world: [4.5, 51.9], partner: "Europe (and Asia)",
    facts: [["First", "Sabine Pass cargo, February 2016"], ["2022", "U.S. LNG replaced Russian gas after the invasion of Ukraine"], ["Rank", "World's largest LNG exporter since 2023"]],
    eras: [{ from: 2016, to: 2026, text: "Shale gas reverses a century of energy anxiety: terminals built to import gas are rebuilt to liquefy and export it. When Russia cuts Europe off in 2022, Gulf Coast tankers keep the lights on in Rotterdam and beyond — energy geopolitics running through Cameron Parish." }],
    sources: ["U.S. Energy Information Administration", "U.S. Department of Energy"] },

  { id: "autopact", name: "Auto Pact with Canada", dir: "both", from: 1965, to: null,
    us: [-83.05, 42.33], world: [-79.38, 43.65], partner: "Canada",
    facts: [["1965", "Duty-free integration of the auto industry"], ["Today", "The Detroit–Windsor crossing carries ~$300M in goods a day"]],
    eras: [{ from: 1965, to: 2026, text: "The 1965 Auto Pact merges Great Lakes carmaking into one system — the Ambassador Bridge becomes the continent's busiest trade artery. It is the prototype for NAFTA and the reason 'American' and 'Canadian' cars are the same machine." }],
    sources: ["Library and Archives Canada", "Office of the U.S. Trade Representative"] }
];
