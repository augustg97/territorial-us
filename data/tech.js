// tech.js — sites of American invention and industry, 1750–present.
// Each point marks where something was first made, discovered, or scaled.
// cat = domain; tier = map prominence (1 = pivotal, 3 = notable).
window.TUSDATA = window.TUSDATA || {};

TUSDATA.tech = [
{id:"franklin",name:"Franklin's electricity",lon:-75.15,lat:39.95,from:1752,cat:"science",tier:2,
 facts:[["Experiment","The kite-and-key demonstration, Philadelphia, 1752"],["Invention","The lightning rod; the terms battery, charge, conductor, positive/negative"],["Note","Franklin took no patents, giving his inventions freely"]],
 eras:[
  {from:1752,to:1790,text:"Flying a kite into a thunderstorm, Franklin proved lightning was electricity and invented the lightning rod, soon guarding steeples, powder magazines and ships worldwide. He coined battery, charge, conductor and positive/negative, and refused to patent any of it. His science gave the colonies intellectual standing and won Franklin the reputation that later helped sway France toward the Revolution."},
  {from:1790,to:1900,text:"Franklin's Philadelphia, home to his American Philosophical Society, an early hospital and the first lending library, anchored American science. The electricity he studied from curiosity became the century's great industrial force in the telegraph, dynamo and electric motor, though the systematic exploitation waited for Edison and others a lifetime after his death in 1790."},
  {from:1900,to:2026,text:"The Franklin Institute, opened in 1824 and rebuilt as a grand science museum in 1934, still honors him on the Parkway. Franklin endures as the patron saint of American invention, the self-taught tinkerer turned statesman, and Philadelphia trades on that heritage even as the nation's scientific center shifted to corporate and university laboratories elsewhere."}
 ],
 sources:["American Philosophical Society","The Franklin Institute","Library of Congress"]},

{id:"cottongin",name:"Cotton gin (Whitney)",lon:-81.15,lat:32.15,from:1793,cat:"agriculture",tier:1,
 facts:[["Invented","1793 at Mulberry Grove plantation near Savannah, Georgia"],["Effect","Made short-staple upland cotton profitable across the Deep South"],["Consequence","Entrenched and vastly expanded slavery"]],
 eras:[
  {from:1793,to:1830,text:"At Mulberry Grove, Eli Whitney built a machine that combed seed from short-staple cotton fifty times faster than by hand, making the crop hugely profitable. Rather than reduce slave labor, it created ravenous demand for it: cotton acreage exploded across Georgia, Alabama and Mississippi, and the enslaved population grew with it. Whitney's patent was widely pirated and he earned little."},
  {from:1830,to:1865,text:"The gin turned the South into the world's cotton supplier, the crop making up over half of U.S. exports by 1860, and turned enslaved people into its indispensable engine. Roughly a million were forced southwest in the domestic slave trade to clear and work new cotton land. The wealth and the bondage together drove the South to secession and civil war."},
  {from:1865,to:2026,text:"Emancipation ended slavery, but sharecropping and tenant farming kept many Black southerners bound to cotton under Jim Crow. The boll weevil, soil exhaustion and finally the mechanical picker of the 1940s broke the system, helping drive the Great Migration north. Mulberry Grove, where it began, is long gone from the Georgia coast near Savannah."}
 ],
 sources:["Smithsonian, National Museum of American History","Library of Congress","Eli Whitney Museum"]},

{id:"armory",name:"Interchangeable parts (Whitney/armories)",lon:-72.93,lat:41.31,from:1798,cat:"manufacturing",tier:2,
 facts:[["Contract","1798 U.S. government contract to Eli Whitney for 10,000 muskets"],["Idea","Uniform, interchangeable parts, the 'American system' of manufactures"],["Realized at","The national armories at Springfield and Harpers Ferry"]],
 eras:[
  {from:1798,to:1840,text:"Whitney won a federal contract for 10,000 muskets and championed building guns from uniform, interchangeable parts. His own New Haven shop never fully delivered, and a famous 1801 demonstration for Congress was partly staged. The real achievement came at the national armories, especially Springfield, Massachusetts, and Harpers Ferry, where machinists and precise gauges slowly made interchangeability real."},
  {from:1840,to:1913,text:"The 'American system of manufactures' spread from the armories into clocks, sewing machines, typewriters, bicycles and ultimately Ford's assembly line. The Connecticut River valley became a 'Precision Valley' whose machine-tool shops seeded a national industry. Interchangeable parts, more than any single product, was the method that let the United States eventually out-produce the world."},
  {from:1913,to:2026,text:"Mass production matured into the moving assembly line and, later, global supply chains, all descendants of the armory's interchangeable part. Springfield Armory built American arms until it closed in 1968 and is now a National Historic Site. Whitney's name stayed on the idea even though the armorers, not he, truly achieved it."}
 ],
 sources:["Springfield Armory National Historic Site (National Park Service)","Smithsonian, National Museum of American History","Eli Whitney Museum"]},

{id:"steamboat",name:"Fulton's steamboat",lon:-74.00,lat:40.75,from:1807,cat:"transport",tier:1,
 facts:[["First voyage","The North River Steamboat ('Clermont'), New York to Albany, 1807"],["Backer","Financed by Robert Livingston, who held a New York steam monopoly"],["Legacy","Made upstream river travel practical"]],
 eras:[
  {from:1807,to:1840,text:"In 1807 Robert Fulton's steamboat churned up the Hudson from New York to Albany against the current in about 32 hours, proving steam navigation commercially. Backed by Robert Livingston's monopoly, the boats soon spread to the Mississippi and Ohio, where they broke the tyranny of downstream-only travel and knit the western interior to eastern markets."},
  {from:1840,to:1900,text:"Steamboats turned the Mississippi system into a commercial highway, building New Orleans, St. Louis and Cincinnati and carrying cotton, grain and passengers. The Supreme Court's Gibbons v. Ogden (1824) broke Fulton's monopoly and affirmed federal power over interstate commerce. By late century railroads overtook the packet boats, though river towns kept the wealth the steam age brought."},
  {from:1900,to:2026,text:"Fulton's proof of principle survives in the barge tows that still move immense tonnages of grain, coal, steel and petroleum down the Mississippi and Ohio, the cheapest bulk transport in the country. The steamboat itself became a nostalgia object, the paddle-wheeler of Mark Twain, while the river commerce it launched remains a backbone of American logistics."}
 ],
 sources:["Smithsonian, National Museum of American History","Library of Congress","National Park Service"]},

{id:"lowell",name:"Lowell factory system",lon:-71.32,lat:42.64,from:1823,cat:"manufacturing",tier:1,
 facts:[["System","The Waltham-Lowell system of integrated textile mills"],["Labor","Young unmarried 'mill girls' recruited from New England farms"],["Power","Water power from the Merrimack River and its canals"]],
 eras:[
  {from:1823,to:1850,text:"Financed by the Boston Associates, the mills at Lowell put every step of cotton-cloth making under one water-powered roof, the first large integrated factories in America. They were staffed largely by young unmarried women recruited from New England farms and housed in company boardinghouses under strict rules, an experiment in respectable industrial labor drawing visitors from around the world."},
  {from:1850,to:1920,text:"The mill girls also produced America's first industrial labor protest, turnouts in the 1830s and the Lowell Female Labor Reform Association in the 1840s, as owners cut wages and sped up the looms. Immigrant workers, Irish then French-Canadian and others, replaced the farm daughters. The mills wove slave-grown southern cotton, binding New England industry to the plantation South."},
  {from:1920,to:2026,text:"Between the wars the textile industry fled south to cheaper, non-union labor, and Lowell's great mills emptied, leaving a hard-hit city. In 1978 the brick mill district became Lowell National Historical Park, preserving the birthplace of the American factory. The city's arc of boom, exploitation, flight and slow reinvention became a template for the industrial Northeast."}
 ],
 sources:["Lowell National Historical Park (National Park Service)","Smithsonian, National Museum of American History","Library of Congress"]},

{id:"reaper",name:"McCormick reaper",lon:-79.20,lat:37.93,from:1831,cat:"agriculture",tier:2,
 facts:[["First demonstrated","1831 at Walnut Grove farm, Rockbridge County, Virginia"],["Effect","Mechanized the grain harvest, once the great labor bottleneck"],["Factory","McCormick moved production to Chicago in 1847"]],
 eras:[
  {from:1831,to:1860,text:"Cyrus McCormick demonstrated a horse-drawn mechanical reaper on his family's Virginia farm in 1831, cutting grain far faster than men with scythes. Harvesting had been the great labor bottleneck; the reaper let a farm family work much more land. In 1847 McCormick moved to Chicago, siting his factory at the edge of the opening prairie wheat belt."},
  {from:1860,to:1902,text:"The reaper opened the prairies to commercial wheat and helped feed Union armies and cities while men left for war and factories, making Chicago the farm-machinery capital. Labor conflict at the McCormick works in 1886 helped spark the Haymarket affair, a landmark in American labor history. Mechanization steadily emptied the countryside of hands even as it multiplied output."},
  {from:1902,to:2026,text:"In 1902 McCormick's firm merged into International Harvester, long a giant of American manufacturing. The reaper's descendants, the tractor and self-propelled combine, completed the mechanization that let under two percent of Americans feed the nation. International Harvester broke apart in the 1980s farm crisis, its agricultural line surviving as Case IH; the harvest it started never looked back."}
 ],
 sources:["Smithsonian, National Museum of American History","Wisconsin Historical Society (McCormick-International Harvester Collection)","Library of Congress"]},

{id:"colt",name:"Colt revolvers & Hartford armory",lon:-72.68,lat:41.76,from:1836,cat:"manufacturing",tier:2,
 facts:[["Patent","Samuel Colt patented his revolving-cylinder pistol in 1836"],["Armory","The Hartford factory, opened 1855, was a showcase of mass production"],["Method","Machine-made interchangeable parts on the 'American system'"]],
 eras:[
  {from:1836,to:1862,text:"Samuel Colt patented a revolver with a rotating cylinder in 1836; after an early failure, Texas Ranger demand revived him, and in 1855 he opened a vast armory on the Connecticut River in Hartford. Its precision machinery and interchangeable parts made it a world showcase of mass production, and foreign observers came to study the 'American system.'"},
  {from:1862,to:1945,text:"Colt died in 1862, but his revolver, 'the gun that won the West,' armed settlers, soldiers and the campaigns that dispossessed Native nations across the plains. Hartford grew into a center of precision arms and machine tools. Colt's later products, the Single Action Army, the M1911 pistol and machine guns, armed American forces through two world wars."},
  {from:1945,to:2026,text:"In the 1960s Colt manufactured the M16 that armed troops in Vietnam and the civilian AR-15 at the center of today's gun debates. The New England arms industry shrank, and Colt passed through bankruptcies and foreign ownership. Its blue onion-domed Hartford armory, an emblem of American manufacturing, is now the Coltsville National Historical Park."}
 ],
 sources:["Connecticut Historical Society","Smithsonian, National Museum of American History","Coltsville National Historical Park (National Park Service)"]},

{id:"telegraph",name:"Morse telegraph",lon:-77.01,lat:38.90,from:1844,cat:"communications",tier:1,
 facts:[["First line","Washington to Baltimore, opened May 1844"],["First message","'What hath God wrought'"],["Code","Morse code, developed with Alfred Vail"]],
 eras:[
  {from:1844,to:1866,text:"On May 24, 1844, Samuel Morse tapped 'What hath God wrought' from the U.S. Capitol to Baltimore, opening the first American telegraph line and, with Morse code, the age of instant communication. Wires raced along the railroads; for the first time information moved faster than a person could travel, and news, markets and orders detached from physical transport."},
  {from:1866,to:1920,text:"Western Union consolidated the wires into a national monopoly by 1866; the 1861 transcontinental line had already killed the Pony Express. The telegraph coordinated the railroads, birthed the Associated Press and the stock ticker, and forced the standard time zones adopted in 1883. It made a continental market, and continental corporations, possible."},
  {from:1920,to:2026,text:"Telephone and radio gradually overtook the telegram, and Western Union sent its last one in 2006. Yet Morse's Washington experiment established the pattern of every network since, coded signals over wires priced by distance and speed. The internet is its lineal descendant, and 'What hath God wrought' still reads as the opening line of the information age."}
 ],
 sources:["Library of Congress (Samuel F. B. Morse Papers)","Smithsonian, National Museum of American History","IEEE History Center"]},

{id:"vulcanized",name:"Vulcanized rubber (Goodyear)",lon:-71.15,lat:42.48,from:1844,cat:"materials",tier:3,
 facts:[["Discovery","Charles Goodyear stumbled on vulcanization near Woburn, Massachusetts, around 1839"],["Patent","U.S. patent granted 1844"],["Effect","Made rubber stable in heat and cold, and industrially useful"]],
 eras:[
  {from:1844,to:1900,text:"Charles Goodyear, obsessed and impoverished, discovered by accident around 1839 that heating rubber with sulfur made it stable in heat and cold. Patented in 1844, vulcanization turned a useless gum into an industrial material for hoses, belts, seals and footwear. Goodyear died deep in debt in 1860; others reaped the fortune from his process."},
  {from:1900,to:1970,text:"The automobile made rubber indispensable, and Akron, Ohio became the world's rubber capital, its tire plants, Goodyear, Firestone and Goodrich, running on plantation latex from Southeast Asia. When Japan seized those plantations in 1942, a federal crash program built a synthetic-rubber industry in months. Vulcanization underlay the tires on every vehicle of the motor age."},
  {from:1970,to:2026,text:"By the 1970s foreign competition and the radial tire hollowed out Akron's factories, though the city reinvented itself around polymer research. Goodyear's principle still cures the billions of tires, seals and belts the world runs on. His name lives on the tire company founded decades after his death, a common fate for American inventors who died before their ideas paid."}
 ],
 sources:["Smithsonian, National Museum of American History","American Chemical Society","Library of Congress"]},

{id:"sewing",name:"Singer sewing machine",lon:-74.00,lat:40.71,from:1851,cat:"manufacturing",tier:3,
 facts:[["Patent","Isaac Singer's improved sewing machine patented 1851"],["Business","Sold on installment plans, an early consumer-credit model"],["Effect","Mechanized garment-making and became a mass consumer product"]],
 eras:[
  {from:1851,to:1900,text:"Isaac Singer's 1851 machine was not the first, but it was practical, and his company's aggressive marketing and installment-payment plans made it the first mass-market consumer appliance. It mechanized sewing in factories and homes alike, feeding the ready-made clothing industry and the sweatshops of New York's Lower East Side. Singer became one of the first American multinationals."},
  {from:1900,to:1960,text:"By 1900 Singer was a global colossus, its huge Elizabeth, New Jersey works among the largest factories on earth. The machine both eased domestic labor and powered the garment sweatshops whose conditions produced tragedies like the 1911 Triangle Shirtwaist fire. Ready-made clothing, once the luxury of tailoring, became cheap and universal."},
  {from:1960,to:2026,text:"Apparel manufacturing followed cheap labor overseas in the later 20th century, and Singer faded as a maker even as its name survived. The installment-credit selling it pioneered became an engine of American consumerism, from cars to appliances. The sewing machine still clothes the world, now mostly in the factories of Asia rather than New Jersey or Manhattan."}
 ],
 sources:["Smithsonian, National Museum of American History","Hagley Museum and Library","Library of Congress"]},

{id:"elevator",name:"Otis safety elevator",lon:-73.90,lat:40.93,from:1853,cat:"construction",tier:3,
 facts:[["Innovation","A brake that stopped the car if the hoist cable failed"],["Demonstration","Elisha Otis dramatized it at New York's Crystal Palace exhibition, 1853-54"],["Effect","Made tall buildings habitable, enabling the skyscraper"]],
 eras:[
  {from:1853,to:1900,text:"In the early 1850s Elisha Otis devised a brake that stopped a hoist car if its cable snapped, and dramatized it at New York's Crystal Palace exhibition, cutting the rope as the platform held fast. That guarantee against a fatal fall made passenger elevators trustworthy, and set the stage for buildings to rise far past the walk-up limit of a few floors."},
  {from:1900,to:1970,text:"Married to the steel frame, the elevator produced the skyscraper and remade the American city, concentrating offices downtown, multiplying land values and inverting the building so the penthouse became the prize. Otis Elevator grew into a global firm carrying millions of people vertically every day. The upward cities of Chicago and New York were, quietly, an Otis achievement."},
  {from:1970,to:2026,text:"Elevators became invisible infrastructure, and their capacity set the practical height of towers worldwide, now surpassing 800 meters. Otis, long part of United Technologies, was spun off as an independent company in 2020. The safety brake demonstrated in a Manhattan exhibition hall remains the reason people trust a steel box to carry them a hundred floors up."}
 ],
 sources:["Smithsonian, National Museum of American History","Library of Congress","Otis Elevator Company"]},

{id:"bessemer",name:"Bessemer steel in America",lon:-79.98,lat:40.41,from:1864,cat:"materials",tier:2,
 facts:[["Process","Bessemer's converter blew air through molten iron to make cheap steel"],["First in U.S.","Produced around 1864-65 at Wyandotte, Michigan, and Troy, New York"],["Capital","Pittsburgh and Andrew Carnegie made it an American industry"]],
 eras:[
  {from:1864,to:1901,text:"The Bessemer process, blowing air through molten iron to burn off impurities, made steel cheap for the first time; American production began around 1864 at Wyandotte, Michigan and Troy, New York. Andrew Carnegie bet everything on it, building giant mills around Pittsburgh where coal, iron ore and rivers met. Cheap steel meant rails, bridges and, soon, skyscrapers."},
  {from:1901,to:1950,text:"In 1901 Carnegie sold out to form U.S. Steel, the first billion-dollar corporation. Pittsburgh's mills, worked by immigrant labor under brutal conditions that produced the violent 1892 Homestead strike, poured the steel for America's railroads, cities and both world wars. The open-hearth furnace overtook Bessemer, but the industry it cheapened had made the United States the world's workshop."},
  {from:1950,to:2026,text:"After mid-century, foreign competition, aging mills and the rise of minimills gutted American steelmaking; the Monongahela valley's furnaces went cold in the 1980s, the heart of the Rust Belt. Pittsburgh reinvented itself around universities, medicine and software. The Bessemer converter that built Steel City is now a museum piece, and much of the nation's steel is imported or recycled."}
 ],
 sources:["Smithsonian, National Museum of American History","Heinz History Center","Library of Congress"]},

{id:"atlanticcable",name:"Atlantic telegraph cable",lon:-74.00,lat:40.71,from:1866,cat:"communications",tier:2,
 facts:[["Achieved","First lasting transatlantic telegraph cable, 1866"],["Driver","New York merchant Cyrus Field led the enterprise"],["Route","Ireland to Newfoundland, laid by the steamship 'Great Eastern'"]],
 eras:[
  {from:1866,to:1900,text:"A brief 1858 cable failed after weeks; only in 1866, after the Civil War, did Cyrus Field's syndicate lay a durable telegraph cable across the Atlantic aboard the giant steamship Great Eastern. News that had taken ten days by ship now crossed in minutes. It bound New York and London markets together and made a genuine world news system possible."},
  {from:1900,to:1956,text:"By 1900 a web of undersea cables linked the continents, most routed through London but increasingly through New York. Instant intercontinental communication synchronized commodity prices, financial markets and empires, accelerating New York's rise toward global financial primacy. The cable stations and their operators formed an early information industry, the physical layer beneath a shrinking world."},
  {from:1956,to:2026,text:"The first transatlantic telephone cable followed in 1956, and today hundreds of fiber-optic lines carry the internet across the same ocean floor, most traffic between continents still running through submarine cable rather than satellite. Field's improbable 1866 achievement established the enduring pattern: the world's communications ride on cables laid beneath the sea, unseen and indispensable."}
 ],
 sources:["Smithsonian, National Museum of American History","IEEE History Center","Library of Congress"]},

{id:"airbrake",name:"Westinghouse air brake",lon:-79.99,lat:40.44,from:1869,cat:"transport",tier:3,
 facts:[["Patent","George Westinghouse patented the railroad air brake in 1869"],["Effect","Let a whole train brake at once, enabling long, fast, safe trains"],["Law","Federal Safety Appliance Act of 1893 made it mandatory"]],
 eras:[
  {from:1869,to:1900,text:"Before George Westinghouse, brakemen ran along moving cars setting hand brakes, a deadly job that limited train length and speed. His 1869 compressed-air brake let the engineer stop every car at once, and a later fail-safe version applied the brakes automatically if a train broke apart. It made the long, fast, heavy trains of the rail age possible."},
  {from:1900,to:1950,text:"The 1893 Safety Appliance Act made air brakes mandatory, one of the first federal industrial-safety laws, and saved countless lives. Westinghouse built a manufacturing empire around Pittsburgh, including the model company town of Wilmerding, and branched into electricity. His brake was standard equipment on the dense American rail network that then moved nearly all of the nation's freight."},
  {from:1950,to:2026,text:"Air brakes remain standard on every freight train and heavy truck in the world, still working on Westinghouse's compressed-air principle. His rail-equipment business survives around Pittsburgh as Wabtec, a global supplier. Passenger rail faded before the automobile and airplane, but American freight railroads, braked as Westinghouse taught them, still carry a large share of the nation's goods."}
 ],
 sources:["Heinz History Center","Smithsonian, National Museum of American History","IEEE History Center"]},

{id:"telephone",name:"Telephone (Bell)",lon:-71.06,lat:42.36,from:1876,cat:"communications",tier:1,
 facts:[["Patent","Alexander Graham Bell patented the telephone in 1876"],["First words","'Mr. Watson, come here, I want to see you' (Boston, 1876)"],["Company","The Bell Telephone Company grew into AT&T"]],
 eras:[
  {from:1876,to:1900,text:"Working in Boston on ways to help the deaf, Alexander Graham Bell transmitted speech over a wire in 1876, summoning his assistant with 'Mr. Watson, come here.' His patent, among the most valuable ever granted, launched the Bell Telephone Company. Within a generation urban America was laced with wires and switchboards staffed largely by young women operators."},
  {from:1900,to:1984,text:"The Bell System, organized as AT&T, became a regulated national monopoly promising universal service, and strung a continent-spanning network of copper and switchboards. The telephone reshaped business, city form and daily life, and funded Bell Labs, the century's greatest industrial laboratory. For most of the 20th century 'the phone company' was a single vast institution reaching nearly every American home."},
  {from:1984,to:2026,text:"A 1984 antitrust settlement broke the Bell System into regional companies, ending the monopoly and unleashing competition. The copper network Bell built became the substrate for the internet, then wireless and the smartphone displaced the landline almost entirely. Bell's original patent still underlies the plain fact that a voice, or now any signal, can travel a wire or the air."}
 ],
 sources:["AT&T Archives","Smithsonian, National Museum of American History","IEEE History Center"]},

{id:"menlopark",name:"Edison's Menlo Park",lon:-74.34,lat:40.56,from:1876,cat:"electricity",tier:1,
 facts:[["Lab","Edison's 'invention factory' at Menlo Park, New Jersey, from 1876"],["Landmarks","The phonograph (1877) and a practical incandescent lamp (1879)"],["Model","The first industrial research and development laboratory"]],
 eras:[
  {from:1876,to:1882,text:"At Menlo Park, New Jersey, Thomas Edison built what he called an invention factory, the first organized industrial research lab, staffed by teams of machinists and scientists. There in 1877 he recorded sound on the phonograph, and in 1879 demonstrated a practical incandescent light bulb, then designed the whole system, dynamos, wires and meters, to deliver electric light."},
  {from:1882,to:1931,text:"In 1882 Edison's Pearl Street Station in Manhattan became the first central power plant, selling electricity as a utility. He moved to a larger lab at West Orange, developed motion pictures, and his company merged into General Electric in 1892. He lost the 'War of the Currents' to alternating current, but the R&D-lab model he invented reshaped how invention itself was done."},
  {from:1931,to:2026,text:"Edison died in 1931, having patented over a thousand inventions and, more lastingly, institutionalized invention as a corporate enterprise imitated by GE, Bell Labs and every research lab since. The New Jersey township around his old lab renamed itself Edison. The electric-power system he first built on Pearl Street grew into the grid that runs the entire country."}
 ],
 sources:["Thomas Edison National Historical Park (National Park Service)","Smithsonian, National Museum of American History","IEEE History Center"]},

{id:"acpower",name:"AC power (Tesla & Westinghouse)",lon:-79.97,lat:40.44,from:1888,cat:"electricity",tier:1,
 facts:[["Patents","Nikola Tesla's AC induction motor and polyphase system, 1888"],["Backer","George Westinghouse licensed and built it in Pittsburgh"],["Proof","The 1895 Niagara Falls hydro plant powered Buffalo, miles away"]],
 eras:[
  {from:1888,to:1896,text:"In 1888 Nikola Tesla patented a practical alternating-current motor and polyphase system, and George Westinghouse bought the rights to challenge Edison's direct current. AC could be transformed to high voltage and sent for miles, so power plants no longer had to sit beside their customers. The bitter 'War of the Currents' with Edison ended in AC's decisive victory."},
  {from:1896,to:1950,text:"In 1895 the Niagara Falls hydroelectric plant, built on Tesla's polyphase design, began sending power to Buffalo twenty-six miles away, proving long-distance transmission. Alternating current made the electrical grid possible: distant dams and coal plants could light whole regions. Factory electrification, the assembly line's partner, and eventually New Deal rural electrification all rode on the AC network."},
  {from:1950,to:2026,text:"The interconnected AC grid became the largest machine ever built and the standard for nearly all the world's electricity. Tesla died nearly penniless in 1943; Westinghouse Electric grew into a giant before breaking apart late in the century. His polyphase system still delivers essentially all household and industrial power, now strained by renewables, electric vehicles and data-center demand."}
 ],
 sources:["IEEE History Center","Smithsonian, National Museum of American History","Heinz History Center"]},

{id:"kodak",name:"Kodak & roll film",lon:-77.61,lat:43.16,from:1888,cat:"media",tier:2,
 facts:[["Product","George Eastman's Kodak camera and flexible roll film, 1888"],["Slogan","'You press the button, we do the rest'"],["Company","Eastman Kodak made Rochester, New York, a company city"]],
 eras:[
  {from:1888,to:1935,text:"George Eastman's 1888 Kodak camera came pre-loaded with flexible roll film; customers shot a hundred pictures, mailed the whole camera back to Rochester for developing, and got prints and a reloaded camera. 'You press the button, we do the rest.' Photography left the professional's studio and became a mass amateur pastime, and Rochester became a one-company city."},
  {from:1935,to:1990,text:"Kodachrome color film (1935) and the cheap Instamatic put photography in every household, while Hollywood's movies ran on Kodak's motion-picture stock. For decades Kodak dominated global film and employed tens of thousands in Rochester, a paternalistic company town. It also built the first digital camera in 1975, then shelved the idea, fearing harm to its film business."},
  {from:1990,to:2026,text:"Digital photography, which Kodak had pioneered and then feared, destroyed the film business it could not bring itself to abandon. Kodak filed for bankruptcy in 2012, and Rochester lost the industry that had defined it. The mass snapshot Eastman created only exploded further, now taken by the billions on smartphones rather than yellow boxes of film."}
 ],
 sources:["George Eastman Museum","Smithsonian, National Museum of American History","Library of Congress"]},

{id:"hollerith",name:"Hollerith tabulators",lon:-77.01,lat:38.90,from:1890,cat:"computing",tier:1,
 facts:[["Machine","Herman Hollerith's punched-card tabulator for the 1890 census"],["Speed","Cut census tabulation from years to months"],["Company","His firm became a founding part of IBM"]],
 eras:[
  {from:1890,to:1911,text:"The 1880 census had taken nearly a decade to count by hand; Herman Hollerith's electric punched-card tabulating machines processed the 1890 census in a fraction of the time. Data was punched as holes in cards and read by pins closing electrical contacts, the ancestor of automatic data processing. Governments and insurers worldwide adopted his machines to handle mass records."},
  {from:1911,to:1950,text:"Hollerith's Tabulating Machine Company merged in 1911 into the firm Thomas Watson renamed International Business Machines in 1924. Punched cards became the universal medium of business and government data, running payrolls, inventories and censuses for half a century. The power to process populations cut both ways: tabulating machines also helped repressive states catalog and target the people they counted."},
  {from:1950,to:2026,text:"Electronic computers overtook the punched card after 1950, and IBM led that transition too, though the card, 'do not fold, spindle or mutilate,' lingered into the 1980s as a symbol of the computer age. Hollerith's core idea, machines that sort and count mass data, became the foundation of the entire information economy that followed."}
 ],
 sources:["IBM Archives","U.S. Census Bureau","Smithsonian, National Museum of American History"]},

{id:"auto",name:"First American gasoline autos (Duryea)",lon:-72.59,lat:42.10,from:1893,cat:"transport",tier:2,
 facts:[["First","The Duryea brothers ran the first successful American gasoline car in Springfield, Massachusetts, 1893"],["Race","Won the first American car race, Chicago, 1895"],["Company","Founded the first American gasoline-car company, 1896"]],
 eras:[
  {from:1893,to:1908,text:"In 1893 Charles and Frank Duryea drove the first successful American gasoline automobile through the streets of Springfield, Massachusetts, and in 1895 won the country's first auto race. Their company, founded in 1896, was the first to build gasoline cars for sale in the United States. For a moment the automotive future looked to run through New England."},
  {from:1908,to:1970,text:"But it was Detroit that seized the industry: Ford's Model T (1908) and moving assembly line (1913) made cars cheap, and Michigan, not Massachusetts, became the automobile capital. The car then remade the whole country, suburbs, highways, sprawl and oil dependence, and built a colossal industry whose unionized workers won a middle-class wage. The Duryeas were nearly forgotten."},
  {from:1970,to:2026,text:"Oil shocks and Japanese competition battered Detroit after 1970, hollowing the industrial Midwest and driving the 2009 bankruptcies and bailouts of General Motors and Chrysler. The automobile remains central to American life and land use even as it electrifies. Springfield, where an American drove the first one, kept little memory of having briefly held the automotive future."}
 ],
 sources:["Smithsonian, National Museum of American History","The Henry Ford","Library of Congress"]},

{id:"kdka",name:"KDKA — broadcast radio begins",lon:-79.98,lat:40.45,from:1920,cat:"media",tier:2,
 facts:[["First broadcast","KDKA aired the Harding-Cox election returns, November 2, 1920"],["Owner","Westinghouse, from its plant near Pittsburgh"],["Claim","Widely credited as the first commercial radio station"]],
 eras:[
  {from:1920,to:1926,text:"On November 2, 1920, Westinghouse's KDKA broadcast the Harding-Cox presidential election returns from Pittsburgh, generally counted the first scheduled commercial radio broadcast. Westinghouse had realized that selling programming would sell the receivers it manufactured. A radio craze followed: hundreds of stations went on the air within two years, and families gathered around receivers for news and music."},
  {from:1926,to:1950,text:"National networks, NBC in 1926 and CBS in 1927, linked local stations into a coast-to-coast audience, creating the first true mass electronic medium. Advertising paid for it, setting the American broadcasting model. Radio's golden age gave the country shared news, entertainment and Franklin Roosevelt's fireside chats, and for the first time a genuinely national popular culture."},
  {from:1950,to:2026,text:"Television took radio's living-room place after 1950, but radio survived and specialized, in music formats, talk, news and the car dashboard. KDKA still broadcasts from Pittsburgh a century on. The advertising-supported, network-organized broadcasting that began on an election night in 1920 set the template for television, and much of it for the streaming media that followed."}
 ],
 sources:["Library of Congress","Heinz History Center","IEEE History Center"]},

{id:"rca",name:"RCA & NBC networks",lon:-73.98,lat:40.76,from:1926,cat:"media",tier:2,
 facts:[["Formed","Radio Corporation of America created 1919; founded NBC in 1926"],["Leader","David Sarnoff built the broadcasting-and-electronics empire"],["Reach","NBC was the first permanent U.S. radio, then television, network"]],
 eras:[
  {from:1926,to:1950,text:"RCA, a patent-pooling electronics giant led by David Sarnoff, launched the National Broadcasting Company in 1926, the first permanent U.S. radio network. From New York, NBC's red and blue networks fed programming nationwide, while RCA manufactured the receivers. The company fused content and hardware into a broadcasting empire and made radio a fixture of American life."},
  {from:1950,to:1986,text:"RCA carried its dominance into television, and Sarnoff pushed the color-TV standard adopted in the 1950s; NBC became a pillar of the three-network era that shaped postwar America. RCA's consumer electronics filled American homes. But Japanese manufacturers overtook it in the 1970s, and the once-mighty company began to falter against foreign competition."},
  {from:1986,to:2026,text:"General Electric bought RCA in 1986 and dismantled it, keeping NBC and licensing the RCA name to others, an emblem of American electronics manufacturing lost to global competition. NBC survived, becoming NBCUniversal and later part of Comcast. The network broadcasting model RCA built in the 1920s still structures the media business, now stretched across cable and streaming."}
 ],
 sources:["Library of Congress","Smithsonian, National Museum of American History","IEEE History Center"]},

{id:"goddard",name:"Goddard's liquid-fuel rocket",lon:-71.84,lat:42.19,from:1926,cat:"aerospace",tier:2,
 facts:[["First flight","Robert Goddard launched the first liquid-fuel rocket, Auburn, Massachusetts, March 16, 1926"],["Flight","It rose about 41 feet in a few seconds"],["Legacy","Founding work of American rocketry; over 200 patents"]],
 eras:[
  {from:1926,to:1945,text:"On March 16, 1926, Robert Goddard launched the world's first liquid-fueled rocket from his aunt's farm in Auburn, Massachusetts; it rose about 41 feet. Ridiculed in the press for suggesting rockets could reach space, the reclusive physicist worked on, later testing larger rockets in the New Mexico desert and pioneering gyroscopic guidance. He held over 200 patents."},
  {from:1945,to:1969,text:"Goddard died in 1945, just as captured German V-2 rockets, built on principles he had pioneered, arrived in America with Wernher von Braun's team. The liquid-fuel rocket he invented became the basis of the ballistic missiles and space launchers of the Cold War. NASA later named its Goddard Space Flight Center in Maryland for the once-mocked New England physicist."},
  {from:1969,to:2026,text:"Every rocket that carried Americans to the Moon and machines to the planets burned liquid fuel as Goddard first demonstrated, a complete vindication. His backyard experiment seeded the missile and space industries. Today's reusable commercial rockets still run on his basic principle, launching from Florida and Texas the descendants of a device first flown over a Massachusetts cabbage field."}
 ],
 sources:["Smithsonian National Air and Space Museum","NASA","Worcester Polytechnic Institute"]},

{id:"television",name:"Electronic television (Farnsworth)",lon:-122.40,lat:37.80,from:1927,cat:"media",tier:2,
 facts:[["First image","Philo Farnsworth transmitted the first all-electronic TV image, San Francisco, 1927"],["Inventor","A 21-year-old working in a small independent lab"],["Fight","A long patent battle with RCA, which he largely won"]],
 eras:[
  {from:1927,to:1939,text:"In 1927, in a small lab on San Francisco's Green Street, 21-year-old Philo Farnsworth transmitted the first all-electronic television image using his 'image dissector' tube. His fully electronic approach beat the spinning-disk mechanical systems and became the basis of modern TV. A grinding patent battle with RCA's David Sarnoff followed, which Farnsworth largely won."},
  {from:1939,to:1970,text:"RCA showed television at the 1939 World's Fair, and after wartime delay the medium exploded: by 1960 nearly every American home had a set. Television reorganized politics, advertising and family life around the living-room screen. Farnsworth, out-marketed and worn down by litigation, won royalties but neither fame nor fortune, and largely faded from public memory."},
  {from:1970,to:2026,text:"The electronic image Farnsworth first scanned underlies every screen since, through cable, digital broadcasting, flat panels and now streaming. Television remained the dominant mass medium for decades before the internet fractured it. Fittingly, the San Francisco Bay Area where a farm boy invented electronic TV became the center of the computer screens and smartphones that eventually eclipsed it."}
 ],
 sources:["Smithsonian, National Museum of American History","Library of Congress","IEEE History Center"]},

{id:"cyclotron",name:"Lawrence's cyclotron",lon:-122.26,lat:37.87,from:1931,cat:"science",tier:2,
 facts:[["Invention","Ernest Lawrence built the first cyclotron at Berkeley in 1931"],["Method","Whirled charged particles in a spiral to smash atoms"],["Legacy","Founded 'big science' and the Berkeley Radiation Laboratory"]],
 eras:[
  {from:1931,to:1945,text:"At the University of California, Berkeley, Ernest Lawrence built the first cyclotron in 1931, a device that whirled charged particles to high energy in a magnetic field. Ever-larger cyclotrons probed the nucleus and created new elements and radioisotopes. Lawrence won the 1939 Nobel Prize and pioneered 'big science,' large teams and huge machines funded on an industrial scale."},
  {from:1945,to:1970,text:"Lawrence's lab became central to the Manhattan Project: his electromagnetic method separated bomb uranium at Oak Ridge. After the war his model of federally funded national laboratories became permanent, spawning the Lawrence Berkeley and Lawrence Livermore labs. Berkeley's accelerators discovered a string of new elements, several named for the place and its people, and mapped the subatomic world."},
  {from:1970,to:2026,text:"The cyclotron's descendants are the giant accelerators of modern physics, from Fermilab to Europe's Large Hadron Collider, and its everyday legacy is medical: the isotopes and particle beams used in PET scans and cancer therapy. Lawrence's marriage of huge machines and federal money created the template for American science at national scale, still centered partly at Berkeley."}
 ],
 sources:["Lawrence Berkeley National Laboratory","American Physical Society","American Institute of Physics"]},

{id:"jpl",name:"Jet Propulsion Laboratory",lon:-118.17,lat:34.20,from:1936,cat:"aerospace",tier:2,
 facts:[["Origin","Caltech rocket experiments in the Arroyo Seco from 1936"],["Nickname","The 'Suicide Squad' of graduate rocketeers"],["Role","Now NASA's center for robotic planetary exploration"]],
 eras:[
  {from:1936,to:1958,text:"JPL grew from a handful of Caltech graduate students, the self-styled 'Suicide Squad,' testing rockets in a dry canyon above Pasadena from 1936. In World War II they developed jet-assisted takeoff and early American missiles. In 1958, after building the launcher and satellite, JPL helped orbit Explorer 1, the first U.S. satellite, and was folded into the new NASA."},
  {from:1958,to:1990,text:"Under NASA, JPL became the world's premier center for robotic space exploration, sending the Mariner probes to Venus, Mars and Mercury and the twin Voyagers on their 1977 grand tour of the outer planets and beyond the solar system. It anchored Southern California's vast Cold War aerospace complex of engineers, contractors and federal money."},
  {from:1990,to:2026,text:"JPL went on to land a generation of rovers on Mars, from Sojourner to Perseverance, and to run the Deep Space Network that talks to distant spacecraft. Still operated by Caltech for NASA, it remains the place from which humanity drives machines across other worlds, the improbable descendant of students firing rockets in a Pasadena arroyo."}
 ],
 sources:["NASA Jet Propulsion Laboratory","California Institute of Technology","Smithsonian National Air and Space Museum"]},

{id:"hpgarage",name:"Hewlett-Packard garage",lon:-122.16,lat:37.45,from:1939,cat:"computing",tier:2,
 facts:[["Founded","Bill Hewlett and Dave Packard in a Palo Alto garage, 1939"],["First product","The HP 200A audio oscillator, sold to Disney"],["Legacy","Marked 'The Birthplace of Silicon Valley'"]],
 eras:[
  {from:1939,to:1960,text:"In 1939 Stanford graduates Bill Hewlett and Dave Packard started an electronics company in a rented Palo Alto garage, their first product an audio oscillator sold to Disney for the film Fantasia. Encouraged by their professor Frederick Terman to build locally rather than leave for the East, they helped root a technology industry in the Santa Clara Valley."},
  {from:1960,to:2000,text:"HP grew into a giant of electronic instruments, then calculators, computers and printers, and its informal 'HP Way' shaped Silicon Valley's management culture. Alongside Stanford's industrial park, it drew talent and spun off companies until orchards gave way to office parks. The garage became the founding myth of the world's densest concentration of technology firms."},
  {from:2000,to:2026,text:"HP became the world's largest maker of PCs and printers before splitting in two in 2015, its dominance passed to software and internet firms. The Addison Avenue garage, a California landmark marked 'Birthplace of Silicon Valley,' still stands. The valley Hewlett and Packard helped start went on to lead every wave since, from chips to the internet to AI."}
 ],
 sources:["Hewlett-Packard company history","Stanford University","Computer History Museum"]},

{id:"radlab",name:"MIT Radiation Lab (radar)",lon:-71.09,lat:42.36,from:1940,cat:"weapons",tier:1,
 facts:[["Founded","1940 at MIT to develop microwave radar"],["Scale","Nearly 4,000 staff at its peak; a vast crash effort"],["Saying","'Radar won the war; the atom bomb ended it'"]],
 eras:[
  {from:1940,to:1945,text:"After Britain shared its secret cavity magnetron in 1940, MIT hosted a crash laboratory to turn it into practical microwave radar. The 'Rad Lab' grew to nearly 4,000 people and produced scores of radar systems, for night fighters, bombers, submarine hunting, gun-laying and navigation. The wartime saying held that radar won the war and the atom bomb ended it."},
  {from:1945,to:1970,text:"The Rad Lab disbanded in 1945, but its veterans and techniques seeded postwar electronics: MIT's Lincoln Laboratory, the SAGE air-defense computers, and the microwave and electronics firms that lined Route 128, America's first technology beltway. The lab also cemented the new partnership of universities, the military and federal funding that would define Cold War science."},
  {from:1970,to:2026,text:"Radar became infrastructure, in air-traffic control, weather forecasting, shipping, police radar guns and now self-driving cars, and its magnetron lives on in the microwave oven. Route 128 thrived for decades before Silicon Valley eclipsed it. The Rad Lab's deepest legacy was institutional: the enduring alliance of federal money, university research and industry that still funds American technology."}
 ],
 sources:["MIT Lincoln Laboratory","IEEE History Center","Smithsonian, National Museum of American History"]},

{id:"penicillin",name:"Penicillin mass production",lon:-89.61,lat:40.70,from:1941,cat:"biotech",tier:3,
 facts:[["Where","USDA Northern Regional Research Laboratory, Peoria, Illinois, from 1941"],["Breakthrough","Deep-tank fermentation and better mold strains raised yields enormously"],["Impact","Enough penicillin to treat Allied wounded by the 1944 invasion"]],
 eras:[
  {from:1941,to:1945,text:"Fleming discovered penicillin in 1928, but no one could make it in quantity until, in 1941, a federal lab in Peoria, Illinois found high-yield mold strains, one from a moldy cantaloupe, and developed deep-tank fermentation. American drug companies scaled it up so fast that there was enough to treat Allied wounded by the 1944 Normandy invasion."},
  {from:1945,to:1980,text:"Penicillin opened the antibiotic age: infections that had killed for all of history, pneumonia, sepsis, wound infection, became curable, adding years to average life. The wartime fermentation methods launched a giant American pharmaceutical industry and a cascade of new antibiotics. Peoria's industrial biology, not a lone genius, was what actually put the miracle drug into the world."},
  {from:1980,to:2026,text:"Decades of heavy use bred resistant bacteria, and antibiotic resistance is now a serious global health threat, with too few new drugs to replace the old. Still, the industrial fermentation perfected in Peoria remains the basis for producing antibiotics and countless other biologic drugs. Penicillin's mass production was the quiet founding of the modern pharmaceutical industry."}
 ],
 sources:["USDA Agricultural Research Service","American Chemical Society","Smithsonian, National Museum of American History"]},

{id:"rcalabs",name:"RCA Laboratories (color TV)",lon:-74.65,lat:40.35,from:1942,cat:"media",tier:3,
 facts:[["Lab","RCA's David Sarnoff Research Center, Princeton, New Jersey, from 1942"],["Achievement","The compatible NTSC color-TV system, adopted 1953"],["Later","Pioneering work on liquid-crystal displays in the 1960s"]],
 eras:[
  {from:1942,to:1953,text:"RCA opened its central research laboratories in Princeton, New Jersey in 1942. Its greatest achievement was a color-television system compatible with existing black-and-white sets, adopted as the U.S. standard in 1953. The 'compatible color' approach let broadcasters add color without stranding millions of receivers, and it governed American television for the next half-century."},
  {from:1953,to:1987,text:"The Princeton labs also produced early liquid-crystal displays in 1968, the technology that eventually replaced the picture tube in every flat screen, though RCA never capitalized on it. As RCA's electronics business lost ground to Japanese rivals, the company was bought by General Electric in 1986. The famed laboratory was spun off rather than nurtured by its new owner."},
  {from:1987,to:2026,text:"The lab continued as the independent Sarnoff Corporation, later absorbed into SRI International, still generating patents but detached from any manufacturer. RCA's fall became a symbol of American consumer electronics ceded to Asia. The color standard and the LCD born in Princeton still light up the world's screens, now built almost entirely overseas."}
 ],
 sources:["IEEE History Center","Hagley Museum and Library","Smithsonian, National Museum of American History"]},

{id:"oakridge",name:"Oak Ridge (uranium)",lon:-84.25,lat:36.01,from:1942,cat:"weapons",tier:1,
 facts:[["Built","A secret city raised from Tennessee farmland from 1942"],["Purpose","Enriching uranium-235 for the atomic bomb"],["Scale","Grew to ~75,000 residents within a ~130,000-worker Manhattan Project"]],
 eras:[
  {from:1942,to:1945,text:"In 1942 the Army seized rural Tennessee valleys and built Oak Ridge, a secret city that reached about 75,000 people, to enrich uranium-235 in giant gaseous-diffusion and electromagnetic plants. Most workers, many of them women, never knew what they were making. Oak Ridge uranium fueled 'Little Boy,' the bomb dropped on Hiroshima on August 6, 1945."},
  {from:1945,to:1990,text:"Hiroshima and, three days later, plutonium-bombed Nagasaki ended the war and opened the nuclear age. Oak Ridge, revealed to a stunned public, became a permanent institution: Oak Ridge National Laboratory turned to reactor research and medical isotopes and, through the Cold War, helped run a vast nuclear-weapons complex spread across the country."},
  {from:1990,to:2026,text:"After the Cold War, Oak Ridge faced an enormous and costly cleanup of radioactive contamination, the toxic underside of the bomb. The national laboratory reinvented itself around supercomputing, advanced materials and neutron science, home to some of the world's fastest computers. The town built in secret is now an ordinary Tennessee city living beside its extraordinary history."}
 ],
 sources:["Manhattan Project National Historical Park (National Park Service)","Oak Ridge National Laboratory","Atomic Heritage Foundation"]},

{id:"losalamos",name:"Los Alamos (the bomb)",lon:-106.30,lat:35.88,from:1943,cat:"weapons",tier:1,
 facts:[["Founded","1943 secret weapons lab on an isolated New Mexico mesa"],["Director","Physicist J. Robert Oppenheimer led the design effort"],["Test","The first nuclear explosion, 'Trinity,' July 16, 1945"]],
 eras:[
  {from:1943,to:1945,text:"In 1943 J. Robert Oppenheimer gathered the Manhattan Project's physicists on an isolated New Mexico mesa at Los Alamos to design the atomic bomb itself. The lab solved the problems of implosion and detonation, and on July 16, 1945 tested the first nuclear device, 'Trinity,' in the desert. Its bombs then destroyed Hiroshima and Nagasaki weeks later."},
  {from:1945,to:1990,text:"Los Alamos became a permanent national laboratory and, with Livermore, a designer of the nation's nuclear arsenal, including the vastly more powerful hydrogen bomb tested in 1952. Its scientists wrestled with what they had built; Oppenheimer, stripped of his security clearance in 1954, became the symbol of that reckoning. The bomb reordered the world into the era of mutually assured destruction."},
  {from:1990,to:2026,text:"With nuclear testing halted after the Cold War, Los Alamos turned to maintaining the aging stockpile through supercomputer simulation, alongside broad scientific research. The once-secret mesa is now a permanent town and laboratory. The weapon it created still shadows the world, and the questions its scientists first confronted, about knowledge and its uses, have never gone away."}
 ],
 sources:["Manhattan Project National Historical Park (National Park Service)","Los Alamos National Laboratory","Atomic Heritage Foundation"]},

{id:"eniac",name:"ENIAC — electronic computing",lon:-75.19,lat:39.95,from:1945,cat:"computing",tier:1,
 facts:[["Built","1943-1945 at the Moore School, University of Pennsylvania"],["Machine","First general-purpose electronic digital computer; ~18,000 vacuum tubes"],["Programmers","Programmed by six women, long uncredited for the work"]],
 eras:[
  {from:1945,to:1955,text:"Built at Penn's Moore School during World War II to compute artillery firing tables, ENIAC was unveiled in 1946 as the first general-purpose electronic digital computer, using some 18,000 vacuum tubes. It was programmed by rewiring, work done by six women, Kay McNulty, Betty Jennings, Betty Holberton and others, whose central role went largely uncredited for decades."},
  {from:1955,to:1980,text:"ENIAC's designers, John Mauchly and J. Presper Eckert, and the von Neumann report on the stored-program concept it inspired, launched the computer age. The two left Penn to build commercial machines, and the electronic computer spread rapidly through the Census, the military and big business. In three decades computing went from one room-sized machine to a global industry."},
  {from:1980,to:2026,text:"The room-filling machine's descendants shrank onto silicon chips and into every pocket, an unbroken line from ENIAC to the smartphone. Historians and Penn belatedly restored the six women programmers to the story, correcting a decades-long erasure of the software pioneers. The first electronic computer, built to aim guns, ended up reorganizing nearly all of modern life."}
 ],
 sources:["University of Pennsylvania","IEEE History Center","Computer History Museum"]},

{id:"transistor",name:"Bell Labs",lon:-74.40,lat:40.68,from:1925,cat:"computing",tier:1,
 facts:[["Founded","1925 as the research arm of AT&T, at Murray Hill, New Jersey"],["Landmarks","Transistor 1947; Shannon's information theory 1948; solar cell 1954; Unix & C 1969-72"],["Nobels","Multiple Nobel Prizes for work done here, beginning with the transistor (1956)"]],
 eras:[
  {from:1925,to:1947,text:"Formed in 1925 as the research arm of AT&T and the Western Electric manufacturing company, Bell Labs at Murray Hill, New Jersey pursued the science behind the telephone system. Backed by the Bell monopoly's steady revenue, it assembled physicists, chemists and mathematicians under one roof, building the model industrial laboratory that would define American science for decades."},
  {from:1947,to:1970,text:"In December 1947 Bardeen, Brattain and Shockley demonstrated the transistor, the tiny amplifier and switch that would replace the vacuum tube and make all modern electronics possible. In the same years came Claude Shannon's information theory (1948), the foundation of digital communication, and the practical solar cell (1954). It was arguably the most productive laboratory in history."},
  {from:1970,to:1996,text:"Through the 1970s Bell Labs kept inventing the digital world: the Unix operating system and the C programming language (1969-1973), which still underlie most computing, along with fiber-optic and cellular-telephone advances. Funded by the phone monopoly, it operated like a national research treasure, until the 1984 breakup of AT&T began to erode the revenue that had paid for open-ended science."},
  {from:1996,to:2026,text:"In 1996 Bell Labs was spun off with Lucent Technologies; after the telecom crash Lucent merged into Alcatel and then Nokia, and the lab shrank far from its monopoly-era grandeur. It survives as Nokia Bell Labs, still in New Jersey. Its great era, when a regulated monopoly bankrolled pure research, remains a lost model of how America once funded invention."}
 ],
 sources:["Nokia Bell Labs","IEEE History Center","AT&T Archives"]},

{id:"univac",name:"UNIVAC I",lon:-75.16,lat:39.96,from:1951,cat:"computing",tier:2,
 facts:[["Machine","UNIVAC I, the first commercial computer in the U.S., delivered 1951"],["Makers","Eckert and Mauchly, the ENIAC team; firm bought by Remington Rand"],["Fame","Predicted the 1952 presidential election on live television"]],
 eras:[
  {from:1951,to:1960,text:"Fresh from ENIAC, Eckert and Mauchly built UNIVAC I, the first commercial electronic computer in America, delivered to the Census Bureau in 1951. On election night 1952 a UNIVAC correctly predicted Eisenhower's landslide on live television, and 'UNIVAC' briefly became the public's word for computer. Their struggling company was absorbed by Remington Rand."},
  {from:1960,to:1986,text:"UNIVAC's maker, by then Sperry Rand, became IBM's chief early rival in a mainframe industry nicknamed 'IBM and the Seven Dwarfs.' Computers moved from novelty to the backbone of business and government, running payroll, billing and records for corporations and agencies. But UNIVAC's early lead slipped away as IBM out-marketed and out-sold every competitor."},
  {from:1986,to:2026,text:"Sperry merged with Burroughs in 1986 to form Unisys, and the pioneering UNIVAC name passed into history. Yet its achievement endured: it proved computers were a commercial product, not just a laboratory or military tool, and launched the data-processing industry. The machine that called an election on television announced computing's arrival in everyday American life."}
 ],
 sources:["Computer History Museum","Smithsonian, National Museum of American History","IEEE History Center"]},

{id:"ibm",name:"IBM mainframes",lon:-73.93,lat:41.70,from:1952,cat:"computing",tier:1,
 facts:[["Rise","IBM entered electronic computers with the 701 in 1952"],["System/360","The 1964 System/360 line standardized business computing"],["Reach","Dominated mainframes; 'nobody ever got fired for buying IBM'"]],
 eras:[
  {from:1952,to:1964,text:"IBM, already dominant in the punched-card tabulators descended from Hollerith, entered electronic computing with the 701 in 1952 and quickly overtook UNIVAC. Its formidable sales force and its installed base of corporate customers made it the industry's leader within a decade. IBM turned the computer from a scientific curiosity into standard business equipment across America."},
  {from:1964,to:1990,text:"In 1964 IBM bet the company on System/360, a family of compatible computers with shared software, and won: it standardized business computing and gave IBM around 70 percent of the market. 'Big Blue' became synonymous with computing, employing hundreds of thousands, anchoring New York's Hudson Valley, and drawing a decade-long federal antitrust suit for its dominance."},
  {from:1990,to:2026,text:"The personal computer IBM legitimized in 1981 ironically undercut it, sending the profits to Microsoft and Intel; a near-collapse in the early 1990s forced IBM to remake itself around software and services. It sold its PC business to Lenovo in 2005. IBM mainframes still quietly run the world's banks and airlines, the durable core of a transformed company."}
 ],
 sources:["IBM Archives","Computer History Museum","IEEE History Center"]},

{id:"salk",name:"Polio vaccine (Salk)",lon:-79.96,lat:40.44,from:1955,cat:"biotech",tier:2,
 facts:[["Developed","Jonas Salk's inactivated polio vaccine at the University of Pittsburgh"],["Announced","Declared safe and effective April 12, 1955"],["Trial","One of the largest medical trials ever, over a million children"]],
 eras:[
  {from:1955,to:1970,text:"Polio paralyzed tens of thousands of American children each year and terrified families. At the University of Pittsburgh, Jonas Salk developed a killed-virus vaccine, tested in a massive 1954 trial of over a million schoolchildren and declared safe on April 12, 1955. Salk refused to patent it, saying it belonged to the people; cases plummeted almost at once."},
  {from:1970,to:2000,text:"Salk's injected vaccine and Albert Sabin's later oral one drove polio out of the United States, whose last wild case came in 1979, and then out of most of the world. The campaign, funded partly by the public's dimes through the March of Dimes, became a model of mass public health and a high point of faith in medical science."},
  {from:2000,to:2026,text:"Polio now survives in only a handful of places, on the verge of becoming the second human disease ever eradicated. Salk founded a leading biological research institute in La Jolla, California. His triumph stands as a landmark of American biomedicine, even as public trust in vaccines, so complete in 1955, has since become politically contested."}
 ],
 sources:["University of Pittsburgh","Smithsonian, National Museum of American History","Salk Institute for Biological Studies"]},

{id:"fairchild",name:"Fairchild & the integrated circuit",lon:-122.14,lat:37.44,from:1957,cat:"computing",tier:1,
 facts:[["Founded","1957 by the 'traitorous eight' who left Shockley Semiconductor"],["Breakthrough","The planar process (1959) and a manufacturable silicon integrated circuit"],["Legacy","'Fairchildren' seeded hundreds of Silicon Valley firms"]],
 eras:[
  {from:1957,to:1968,text:"In 1957 eight young scientists, the 'traitorous eight,' quit William Shockley's difficult company to found Fairchild Semiconductor near Palo Alto. There Jean Hoerni's planar process (1959) and Robert Noyce's silicon integrated circuit made it possible to print many transistors on one chip. Fairchild turned the transistor into mass-manufactured silicon and gave the Santa Clara Valley its defining industry."},
  {from:1968,to:1990,text:"Fairchild's talent scattered to found Intel, AMD, National Semiconductor and dozens of other chip firms, the 'Fairchildren' who built the industry that gave Silicon Valley its 1971 name. The venture-capital culture that funded them took root nearby on Sand Hill Road. Fairchild itself faded, out-competed by the very companies its own people had launched."},
  {from:1990,to:2026,text:"The integrated circuit became the foundation of everything electronic, from computers to phones to cars, and the family tree of firms Fairchild seeded made the Bay Area the center of world technology. Chip design still concentrates there, though manufacturing migrated to Taiwan and Korea, a dependence that now drives efforts to rebuild fabrication on American soil."}
 ],
 sources:["Computer History Museum","IEEE History Center","Smithsonian, National Museum of American History"]},

{id:"tikilby",name:"Kilby's IC (Texas Instruments)",lon:-96.75,lat:32.91,from:1958,cat:"computing",tier:2,
 facts:[["Invention","Jack Kilby built the first working integrated circuit at Texas Instruments, 1958"],["Parallel","Robert Noyce at Fairchild independently made a silicon version"],["Nobel","Kilby won the 2000 Nobel Prize in Physics"]],
 eras:[
  {from:1958,to:1970,text:"In the summer of 1958 Jack Kilby, a new employee left alone in a quiet Texas Instruments lab in Dallas, built the first working integrated circuit, several components on one piece of semiconductor. Robert Noyce at Fairchild independently devised a more manufacturable silicon version months later. Together they invented the microchip, and TI became a semiconductor powerhouse."},
  {from:1970,to:2000,text:"Texas Instruments turned the chip into products: Kilby co-invented the handheld electronic calculator, and TI became a leader in the digital signal processors that run modern phones and audio. The integrated circuit's relentless improvement, doubling in density roughly every two years, powered the entire electronics revolution and made Dallas a significant technology center."},
  {from:2000,to:2026,text:"Kilby received the Nobel Prize in Physics in 2000, four decades after his breakthrough, Noyce having died and so missing the honor. The microchip he and Noyce created is now in nearly every manufactured object with a circuit. Texas Instruments remains a major chipmaker, and Texas a growing hub as the U.S. races to expand domestic fabrication."}
 ],
 sources:["Texas Instruments","IEEE History Center","The Nobel Foundation"]},

{id:"laser",name:"First laser (Hughes)",lon:-118.70,lat:34.03,from:1960,cat:"science",tier:2,
 facts:[["First laser","Theodore Maiman fired the first working laser at Hughes Research Labs, 1960"],["Type","A ruby crystal producing a pulse of coherent red light"],["Roots","Built on the maser and the Schawlow-Townes laser theory"]],
 eras:[
  {from:1960,to:1975,text:"In May 1960, at Hughes Research Laboratories in Malibu, Theodore Maiman fired the first working laser, a ruby rod that emitted an intense, coherent beam of red light. Built on maser research and the laser theory of Schawlow and Townes at Bell Labs, it was famously called 'a solution looking for a problem.' The problems soon arrived."},
  {from:1975,to:2000,text:"Within a generation the laser was everywhere: reading barcodes and CDs, carrying phone and internet traffic through fiber optics, performing eye and other surgery, cutting steel, printing documents and guiding weapons. The coherent light with no obvious use became a foundational tool of the information economy and modern industry, quietly embedded in daily life."},
  {from:2000,to:2026,text:"Today lasers carry essentially all long-distance internet traffic, machine the world's electronics, and probe frontiers from gravitational waves to fusion energy. Directed-energy weapons revive the beam's military promise. Maiman's ruby flash in a Southern California lab, dismissed as impractical, turned out to be one of the most useful inventions of the century."}
 ],
 sources:["IEEE History Center","American Physical Society","Smithsonian, National Museum of American History"]},

{id:"apollo",name:"Apollo program (Houston MSC)",lon:-95.09,lat:29.56,from:1961,cat:"aerospace",tier:1,
 facts:[["Goal","Kennedy's 1961 pledge to land a man on the Moon by decade's end"],["Mission Control","The Manned Spacecraft Center, Houston, opened 1963"],["Apollo 11","First Moon landing, July 20, 1969"]],
 eras:[
  {from:1961,to:1969,text:"After the Soviets led the space race, President Kennedy pledged in 1961 to land Americans on the Moon by decade's end. NASA built its Manned Spacecraft Center in Houston to run the astronauts and Mission Control, part of a program that at its peak employed some 400,000 people nationwide. On July 20, 1969 Apollo 11 landed, and 'Houston' heard the first words from the Moon."},
  {from:1969,to:1975,text:"Six Apollo crews walked on the Moon through 1972 before budget cuts ended the program; Skylab and the 1975 Apollo-Soyuz handshake in orbit followed. The effort seeded technologies from integrated circuits to computing and made Houston 'Space City,' its economy tied to NASA. The Moon race was won, but the public's attention and funding drifted back to Earth."},
  {from:1975,to:2026,text:"Renamed the Johnson Space Center, the Houston center went on to run the Space Shuttle and the International Space Station, though no human left low Earth orbit again for over fifty years. NASA's Artemis program now aims to return, in a new race with China, while commercial companies launch Americans once more. Apollo remains the benchmark of what the country could mobilize to do."}
 ],
 sources:["NASA","Smithsonian National Air and Space Museum","NASA Johnson Space Center"]},

{id:"intel",name:"Intel & the microprocessor",lon:-121.96,lat:37.38,from:1968,cat:"computing",tier:1,
 facts:[["Founded","1968 by Robert Noyce and Gordon Moore, from Fairchild"],["Microprocessor","The Intel 4004, first commercial microprocessor, 1971"],["Moore's Law","Moore's 1965 prediction that chip density would keep doubling"]],
 eras:[
  {from:1968,to:1980,text:"In 1968 Robert Noyce and Gordon Moore left Fairchild to found Intel in Santa Clara, at first making memory chips. In 1971 it introduced the 4004, the first commercial microprocessor, a whole computer's logic on a single chip. Moore's prediction that transistor counts would double roughly every two years, 'Moore's Law,' became the industry's metronome."},
  {from:1980,to:2005,text:"When IBM chose Intel's x86 processor for its 1981 PC, Intel's chips, paired with Microsoft's software as 'Wintel,' came to power the vast majority of the world's computers. Intel grew into the largest semiconductor maker on earth, its fabs a pillar of the American economy. The microprocessor put programmable intelligence into computers, cars, appliances and, eventually, nearly everything."},
  {from:2005,to:2026,text:"Intel missed the smartphone, where energy-efficient ARM designs won, and by the 2010s lost its manufacturing lead to Taiwan's TSMC and Samsung. Moore's Law slowed as physics pushed back. With chips now a matter of national security, the CHIPS Act subsidizes new American fabs, and Intel, an icon in trouble, races to rebuild the lead it once held alone."}
 ],
 sources:["Intel Corporation","Computer History Museum","IEEE History Center"]},

{id:"arpanet",name:"ARPANET first node (UCLA)",lon:-118.44,lat:34.07,from:1969,cat:"computing",tier:1,
 facts:[["First node","ARPANET's first node installed at UCLA, 1969"],["First message","'LO' reached SRI on October 29, 1969, when the system crashed mid-'LOGIN'"],["Funder","The Pentagon's ARPA, later DARPA"]],
 eras:[
  {from:1969,to:1983,text:"Funded by the Pentagon's ARPA to link research computers, ARPANET's first node went live at UCLA in 1969. On October 29 a student tried to log in to a machine at Stanford Research Institute and typed 'L,' 'O,' then the system crashed, making 'LO' the first message across the network that became the internet."},
  {from:1983,to:1993,text:"In 1983 ARPANET adopted the TCP/IP protocols that let separate networks interconnect, the technical birth of the internet. Email quickly became its main use. Through the 1980s the network spread across universities and research centers, carried increasingly on the National Science Foundation's backbone, still an academic and government tool largely unknown to the public."},
  {from:1993,to:2026,text:"The World Wide Web opened the network to everyone in the 1990s, and the internet exploded from a research tool into the central infrastructure of modern life, remaking commerce, media, politics and social life within a generation. The Pentagon experiment that began with a crash at UCLA now connects most of humanity, for better and worse."}
 ],
 sources:["Internet Society","Computer History Museum","University of California, Los Angeles"]},

{id:"xeroxparc",name:"Xerox PARC",lon:-122.15,lat:37.40,from:1970,cat:"computing",tier:1,
 facts:[["Founded","Xerox Palo Alto Research Center, 1970"],["Inventions","The graphical user interface, Ethernet, laser printing, the personal workstation"],["Irony","Xerox largely failed to commercialize them; others did"]],
 eras:[
  {from:1970,to:1983,text:"Xerox opened its Palo Alto Research Center in 1970 and gathered a brilliant staff that, within a few years, invented much of modern computing: the Alto personal computer with a graphical user interface and mouse, Ethernet networking, the laser printer, and what-you-see-is-what-you-get editing. It was a glimpse of the future assembled a decade early."},
  {from:1983,to:2002,text:"Xerox, a copier company, could not turn these marvels into products; its Star workstation flopped. Steve Jobs famously toured PARC in 1979 and carried the graphical interface into Apple's Macintosh; others commercialized Ethernet and the laser printer. PARC became the classic cautionary tale of invention without exploitation, its ideas earning billions, for everyone but Xerox."},
  {from:2002,to:2026,text:"Spun off as an independent lab in 2002 and later absorbed by SRI, PARC's heyday passed, but its inventions became the water every computer user swims in: windows, icons, the mouse, networking, the printed page from a laser. The gap between inventing the future and profiting from it remains PARC's enduring, expensive lesson."}
 ],
 sources:["Computer History Museum","PARC (Palo Alto Research Center)","IEEE History Center"]},

{id:"cray",name:"Cray supercomputers",lon:-91.39,lat:44.94,from:1972,cat:"computing",tier:2,
 facts:[["Founded","Seymour Cray founded Cray Research in Chippewa Falls, Wisconsin, 1972"],["Cray-1","The 1976 Cray-1 defined the supercomputer"],["Uses","Weapons design, weather forecasting, cryptography, and science"]],
 eras:[
  {from:1972,to:1990,text:"Seymour Cray, the reclusive master of high-speed computing, founded Cray Research in his hometown of Chippewa Falls, Wisconsin in 1972. The Cray-1 (1976), a C-shaped machine that was the fastest in the world, defined the supercomputer. National labs, weapons designers, spy agencies and weather forecasters bought them to solve problems no other machine could touch."},
  {from:1990,to:2000,text:"In the 1990s clusters of ordinary microprocessors began to outperform Cray's elegant custom machines, and the company struggled as parallel computing took over. Seymour Cray, who had left to start another venture, died in a car crash in 1996. The age of the supercomputer as a single genius's masterpiece gave way to massed commodity chips."},
  {from:2000,to:2026,text:"Supercomputing endured and the Cray name survived, now part of Hewlett Packard Enterprise, building today's exascale machines for nuclear-stockpile simulation, climate modeling and science. The same appetite for raw computing power now drives the enormous data centers training artificial intelligence. Cray's pursuit of the fastest possible machine, begun in small-town Wisconsin, never really ended."}
 ],
 sources:["Computer History Museum","Hewlett Packard Enterprise","IEEE History Center"]},

{id:"biotech",name:"Recombinant DNA & Genentech",lon:-122.40,lat:37.65,from:1973,cat:"biotech",tier:1,
 facts:[["Breakthrough","Cohen and Boyer demonstrated recombinant DNA in 1973"],["Company","Genentech founded 1976 in South San Francisco"],["Product","First recombinant human insulin, approved 1982"]],
 eras:[
  {from:1973,to:1980,text:"In 1973 Stanley Cohen and Herbert Boyer, working in the Bay Area, spliced genes from one organism into another, inventing recombinant DNA and the ability to engineer living cells. In 1976 Boyer and venture capitalist Robert Swanson founded Genentech in South San Francisco, betting that bacteria could be programmed to make human proteins. The biotechnology industry was born."},
  {from:1980,to:2000,text:"Genentech's engineered bacteria produced human insulin (approved 1982) and other drugs once impossible to make, and its blockbuster 1980 stock offering launched biotechnology as an industry. A 1980 Supreme Court ruling allowed patenting engineered life. Clusters of biotech firms grew up around San Francisco, San Diego and Boston, beside the universities that fed them."},
  {from:2000,to:2026,text:"Biotechnology matured into a pillar of medicine, producing antibody drugs, cancer therapies and, in the 2020 pandemic, mRNA vaccines built on decades of genetic engineering. Roche bought Genentech in 2009. Tools like CRISPR now edit genes directly, raising profound ethical questions. The gene-splicing shown in a 1973 Bay Area lab reshaped medicine, agriculture and the meaning of biology itself."}
 ],
 sources:["Genentech","National Institutes of Health","Smithsonian, National Museum of American History"]},

{id:"microsoft",name:"Microsoft",lon:-122.13,lat:47.67,from:1975,cat:"computing",tier:1,
 facts:[["Founded","Bill Gates and Paul Allen, 1975; moved to the Seattle area in 1979"],["Breakthrough","Licensed MS-DOS for the IBM PC in 1981; Windows from 1985"],["Reach","Its software ran the great majority of personal computers"]],
 eras:[
  {from:1975,to:1990,text:"Bill Gates and Paul Allen founded Microsoft in 1975 to write software for the first hobbyist microcomputers, moving to the Seattle suburbs in 1979. Their break came in 1981 when IBM licensed their operating system, MS-DOS, for its PC, letting Microsoft collect a fee on nearly every clone that followed. Software, not hardware, would be where the money was."},
  {from:1990,to:2008,text:"Windows and the Office suite gave Microsoft a near-monopoly over personal-computer software through the 1990s, making Bill Gates the world's richest man and the Seattle area a technology capital. Its dominance drew a landmark federal antitrust case around 2000. For a generation, using a computer meant using Microsoft, whose software sat on almost every desk."},
  {from:2008,to:2026,text:"Microsoft missed the shift to mobile and search, then reinvented itself after 2014 around cloud computing with Azure and subscription software. Its early and large investment in OpenAI put it at the center of the AI boom. Once the overwhelming power of the PC era, it became one of the world's most valuable companies again in the cloud era."}
 ],
 sources:["Microsoft","Computer History Museum","IEEE History Center"]},

{id:"gps",name:"GPS (Navstar)",lon:-118.40,lat:33.92,from:1978,cat:"aerospace",tier:2,
 facts:[["Program","The Air Force's Navstar GPS, managed from Los Angeles Air Force Base"],["First satellite","First Navstar satellite launched 1978"],["Full service","24-satellite constellation completed in the mid-1990s"]],
 eras:[
  {from:1978,to:1995,text:"Developed by the U.S. military and managed from the Los Angeles Air Force Base in El Segundo, the Navstar Global Positioning System launched its first satellite in 1978. A constellation of satellites broadcasting precise time let a receiver anywhere fix its position. Built to guide weapons and troops, the full 24-satellite system was completed in the mid-1990s."},
  {from:1995,to:2010,text:"Opened to civilian use and made fully accurate in 2000, GPS became a free global utility. It transformed navigation, shipping, aviation, farming and surveying, and quietly wove precise timing into power grids, financial markets and cell networks. A military system paid for by American taxpayers became invisible infrastructure for the entire world."},
  {from:2010,to:2026,text:"The smartphone put GPS in everyone's pocket, enabling ride-hailing, delivery, mapping and a location-based economy scarcely imaginable before. That dependence became a vulnerability, exposed to jamming and spoofing, and rival systems from Europe, Russia and China now share the sky. The positioning signal run from an El Segundo program office reorganized how the world moves and keeps time."}
 ],
 sources:["U.S. Space Force","Smithsonian National Air and Space Museum","National Coordination Office for Space-Based Positioning, Navigation, and Timing"]},

{id:"apple",name:"Apple",lon:-122.03,lat:37.32,from:1976,cat:"computing",tier:1,
 facts:[["Founded","Steve Jobs, Steve Wozniak and Ronald Wayne, 1976"],["Apple II","The 1977 Apple II helped launch the personal-computer industry"],["Later","Macintosh 1984; iPod, iPhone and the mobile era"]],
 eras:[
  {from:1976,to:1985,text:"Steve Wozniak and Steve Jobs founded Apple in 1976, famously starting in a Cupertino garage, and their Apple II (1977) became one of the first mass-market personal computers, bringing computing into homes and schools. The 1984 Macintosh introduced the graphical interface, borrowed from Xerox PARC, to a wide public. Jobs was forced out of the company in 1985."},
  {from:1985,to:2007,text:"Apple nearly failed in the 1990s against the Windows PC, until Steve Jobs returned in 1997 and remade it around bold design. The iMac stabilized the company, and the iPod (2001) with iTunes reinvented how the world bought and carried music. Apple became as much a consumer-culture brand as a computer maker, its Cupertino campus a design mecca."},
  {from:2007,to:2026,text:"The 2007 iPhone put a powerful computer in a pocket and touched off the smartphone era that reorganized daily life, media and commerce worldwide. The App Store created a vast new economy. Apple became the world's most valuable company, designing in California and manufacturing in Asia, its products the defining consumer objects of the age."}
 ],
 sources:["Apple","Computer History Museum","Smithsonian, National Museum of American History"]},

{id:"hgp",name:"Human Genome Project",lon:-77.10,lat:39.00,from:1990,cat:"biotech",tier:2,
 facts:[["Launched","The Human Genome Project began in 1990, coordinated from the NIH"],["Goal","Map and read all ~3 billion base pairs of human DNA"],["Completed","Working draft 2000; essentially complete 2003"]],
 eras:[
  {from:1990,to:2003,text:"Begun in 1990 and coordinated largely from the National Institutes of Health in Bethesda, the Human Genome Project set out to read all three billion letters of human DNA, an international effort costing about three billion dollars. A private company, Celera, sprinted alongside it. A working draft was announced in 2000 and the essentially complete sequence in 2003."},
  {from:2003,to:2015,text:"The project drove the cost of sequencing a genome down from billions of dollars toward a few thousand within a decade, an even faster collapse than computer chips. Genomics reshaped biology, cancer treatment and drug design, and consumer DNA tests appeared. Congress passed a 2008 law barring genetic discrimination, an early answer to the privacy questions the data raised."},
  {from:2015,to:2026,text:"Cheap, fast sequencing became a routine tool: it tracked the mutating virus in the COVID pandemic, guides precision cancer therapy, and underlies gene-editing treatments now reaching patients. The map first drawn in Bethesda turned biology into an information science. Its power to read, and increasingly rewrite, the human genome keeps raising ethical questions the world has not settled."}
 ],
 sources:["National Human Genome Research Institute (NIH)","National Institutes of Health","Smithsonian, National Museum of American History"]},

{id:"mosaic",name:"Mosaic browser (NCSA)",lon:-88.21,lat:40.11,from:1993,cat:"computing",tier:2,
 facts:[["Made at","The National Center for Supercomputing Applications, University of Illinois, 1993"],["Innovation","The first widely popular graphical web browser"],["Team","Marc Andreessen and Eric Bina; led to Netscape"]],
 eras:[
  {from:1993,to:2000,text:"At the University of Illinois' supercomputing center in 1993, Marc Andreessen and Eric Bina released Mosaic, the first web browser to display images alongside text and to run easily on ordinary computers. It turned the web from an academic novelty into something anyone could use, and set off the internet boom. Andreessen left to co-found Netscape in 1994."},
  {from:2000,to:2010,text:"Mosaic's descendants fought the 'browser wars': Netscape against Microsoft's Internet Explorer, itself built on licensed Mosaic code, a battle that helped trigger Microsoft's antitrust case. The graphical web fueled the dot-com boom and bust and became the platform for commerce, media and daily life. A federally funded lab in downstate Illinois had lit the fuse."},
  {from:2010,to:2026,text:"The browser became the main way most people use a computer, now Google's Chrome and Apple's Safari on billions of phones, the gateway to cloud software and the web economy. Marc Andreessen became one of Silicon Valley's most powerful investors. The window onto the internet that opened in a University of Illinois lab framed the online world that followed."}
 ],
 sources:["National Center for Supercomputing Applications (University of Illinois)","Computer History Museum","Internet Society"]},

{id:"amazoncloud",name:"Amazon & cloud computing",lon:-122.33,lat:47.62,from:1994,cat:"computing",tier:2,
 facts:[["Founded","Jeff Bezos founded Amazon in Seattle in 1994 as an online bookstore"],["Expansion","Grew into 'the everything store' and dominant e-commerce"],["Cloud","Amazon Web Services (from 2006) created the cloud-computing industry"]],
 eras:[
  {from:1994,to:2006,text:"Jeff Bezos founded Amazon in Seattle in 1994, selling books online, then expanded relentlessly into 'the everything store.' It survived the dot-com crash and reshaped retail, undercutting and displacing physical stores, building vast automated warehouses, and normalizing fast home delivery. Its low prices and convenience came with hard, heavily scrutinized warehouse labor conditions."},
  {from:2006,to:2015,text:"In 2006 Amazon began renting out its own computing infrastructure as Amazon Web Services, letting anyone run software on Amazon's servers by the hour. It effectively invented the cloud-computing industry: a generation of startups and then large enterprises built on rented capacity instead of their own machines. AWS became hugely profitable and a foundation of the modern internet."},
  {from:2015,to:2026,text:"Amazon became one of the world's most valuable companies and a pillar of Seattle's economy, its cloud running a large share of the internet while its logistics network reached nearly every American doorstep. Both its market power and its labor practices drew antitrust and union scrutiny. Its data centers, now central to the AI boom, consume growing amounts of power and water."}
 ],
 sources:["Amazon","Computer History Museum","IEEE History Center"]},

{id:"google",name:"Google search",lon:-122.08,lat:37.42,from:1998,cat:"computing",tier:1,
 facts:[["Founded","Larry Page and Sergey Brin, 1998, out of Stanford research"],["Breakthrough","PageRank ranked web pages by their links, vastly improving search"],["Model","Search advertising made it enormously profitable"]],
 eras:[
  {from:1998,to:2008,text:"Stanford graduate students Larry Page and Sergey Brin built a search engine that ranked pages by how others linked to them, and founded Google in 1998. It organized the exploding web so well that 'google' became a verb. Targeted search advertising turned that usefulness into one of the most profitable business models ever devised."},
  {from:2008,to:2016,text:"Google spread across the internet: Gmail, Maps, YouTube, the Chrome browser and the Android operating system that runs most of the world's smartphones. It became the front door to online information and captured, with Facebook, most of digital advertising. Its reach, built on pervasive data collection, made privacy and market power into major public concerns."},
  {from:2016,to:2026,text:"Reorganized under Alphabet, Google poured resources into artificial intelligence; the transformer architecture behind today's AI systems was invented by its researchers in 2017. It now faces antitrust suits over its search and ad dominance, and an AI wave that threatens to upend search itself. From a Stanford project, it became one of the handful of firms that shape the internet."}
 ],
 sources:["Google","Computer History Museum","Stanford University"]},

{id:"spacex",name:"SpaceX reusable rockets",lon:-118.33,lat:33.92,from:2002,cat:"aerospace",tier:1,
 facts:[["Founded","Elon Musk founded SpaceX in 2002, based in Hawthorne, California"],["Breakthrough","First to land and reuse an orbital rocket booster, 2015"],["Reach","Became the dominant launch provider and builder of the Starlink network"]],
 eras:[
  {from:2002,to:2015,text:"Elon Musk founded SpaceX in 2002 near Los Angeles, aiming to cut the cost of spaceflight and eventually reach Mars. After early failures nearly bankrupted it, the Falcon 9 rocket reached orbit and, in 2012, its Dragon capsule became the first commercial craft to dock with the International Space Station, taking over cargo runs from the retired Space Shuttle."},
  {from:2015,to:2020,text:"In December 2015 SpaceX landed a Falcon 9 booster upright and flew it again, achieving the reusability that dramatically cut launch costs and upended the industry. It came to dominate global space launch, and in 2020 its Crew Dragon returned astronaut launches to American soil for the first time since the Shuttle, ending reliance on Russian rockets."},
  {from:2020,to:2026,text:"SpaceX went on to blanket low orbit with thousands of Starlink internet satellites and to develop Starship, the largest rocket ever built, chosen by NASA to land astronauts on the Moon again. Its dominance of launch and orbit, concentrated in one company and one man, drew both awe and unease about crowded skies and private power over space."}
 ],
 sources:["SpaceX","NASA","Smithsonian National Air and Space Museum"]},

{id:"teslaev",name:"Tesla & electric vehicles",lon:-121.95,lat:37.49,from:2010,cat:"transport",tier:2,
 facts:[["Company","Tesla, founded 2003; took over the Fremont, California, factory in 2010"],["Breakthrough","Made electric cars desirable, not just compliant; the Model S (2012)"],["Effect","Forced the global auto industry toward electrification"]],
 eras:[
  {from:2010,to:2018,text:"Founded in 2003, Tesla went public in 2010 and took over the former NUMMI auto plant in Fremont, California. Its Model S (2012) proved an electric car could be fast, long-range and desirable rather than a mere compliance vehicle. Tesla made electric cars aspirational and, nearly alone at first, built the fast-charging network that made them practical."},
  {from:2018,to:2023,text:"The mass-market Model 3, after a punishing production ramp, made Tesla the world's most valuable automaker and the clear leader in electric vehicles. Its success forced every legacy carmaker to commit to electrification, bending the whole industry away from the gasoline engine. Giant battery 'gigafactories' rose in Nevada, Texas and abroad to feed the demand."},
  {from:2023,to:2026,text:"As competition surged from China's BYD and from legacy automakers, Tesla's early lead narrowed, though electric vehicles kept gaining ground worldwide. The shift strains power grids and demand for lithium and other battery materials. Tesla's fortunes grew entangled with Elon Musk's other ventures and his politics, but the Fremont factory it revived helped challenge the century-long reign of gasoline."}
 ],
 sources:["Tesla","U.S. Department of Energy","Smithsonian, National Museum of American History"]},

{id:"sfai",name:"San Francisco AI labs",lon:-122.41,lat:37.76,from:2015,cat:"ai",tier:1,
 facts:[["Cluster","OpenAI (2015), Anthropic (2021) and other AI labs based in San Francisco"],["Breakthrough","ChatGPT's 2022 release brought generative AI to the public"],["Foundation","Built on the transformer architecture (2017) and massive computing"]],
 eras:[
  {from:2015,to:2022,text:"OpenAI was founded in San Francisco in 2015, and a wave of AI labs followed, Anthropic among them in 2021, clustering in the city rather than the suburban valley to the south. Building on the 2017 transformer architecture and enormous computing power, they trained ever-larger language models, quietly at first, in a race few outside the field noticed."},
  {from:2022,to:2024,text:"OpenAI's ChatGPT, released in November 2022, reached hundreds of millions of users within months and set off an AI boom that drew tens of billions of dollars in investment. San Francisco became the center of a technology wave once more, its neighborhoods filling with AI startups. Generative AI began reshaping software, writing, art and daily work with startling speed."},
  {from:2024,to:2026,text:"The race to build ever-larger models triggered a vast buildout of data centers across the country, straining electric grids and consuming enormous quantities of power and water, even reviving old nuclear plants to feed them. The promise and peril of the technology, its effects on work, truth and safety, became a defining question of the age, argued out first in San Francisco."}
 ],
 sources:["OpenAI","Anthropic","Stanford Institute for Human-Centered AI"]}
];
