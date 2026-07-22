// meta.js — core reference tables: state admissions, national statistics series.
// Sources: U.S. Census Bureau (decennial census; "Area of the United States and Its
// Several Acquisitions", 1912 report figures); National Archives; Senate Historical Office.
window.TUSDATA = window.TUSDATA || {};

// fips: [name, abbr, admitted-year, admitted-date-label, order, capital, bordersFrom, colony]
// bordersFrom = first year the outline renders (13 originals render as colonies from 1750,
// as states from 1776; VT renders from 1777 as an independent republic).
TUSDATA.statesMeta = {
  "01": { name: "Alabama", abbr: "AL", admitted: 1819, date: "December 14, 1819", order: 22, capital: "Montgomery", borders: 1819 },
  "02": { name: "Alaska", abbr: "AK", admitted: 1959, date: "January 3, 1959", order: 49, capital: "Juneau", borders: 1959 },
  "04": { name: "Arizona", abbr: "AZ", admitted: 1912, date: "February 14, 1912", order: 48, capital: "Phoenix", borders: 1912 },
  "05": { name: "Arkansas", abbr: "AR", admitted: 1836, date: "June 15, 1836", order: 25, capital: "Little Rock", borders: 1836 },
  "06": { name: "California", abbr: "CA", admitted: 1850, date: "September 9, 1850", order: 31, capital: "Sacramento", borders: 1850 },
  "08": { name: "Colorado", abbr: "CO", admitted: 1876, date: "August 1, 1876", order: 38, capital: "Denver", borders: 1876 },
  "09": { name: "Connecticut", abbr: "CT", admitted: 1788, date: "January 9, 1788 (5th to ratify)", order: 5, capital: "Hartford", borders: 1750, colony: true },
  "10": { name: "Delaware", abbr: "DE", admitted: 1787, date: "December 7, 1787 (1st to ratify)", order: 1, capital: "Dover", borders: 1750, colony: true },
  "11": { name: "District of Columbia", abbr: "DC", admitted: 1790, date: "Established 1790; federal seat from 1800", order: 0, capital: "—", borders: 1790, district: true },
  "12": { name: "Florida", abbr: "FL", admitted: 1845, date: "March 3, 1845", order: 27, capital: "Tallahassee", borders: 1845 },
  "13": { name: "Georgia", abbr: "GA", admitted: 1788, date: "January 2, 1788 (4th to ratify)", order: 4, capital: "Atlanta", borders: 1750, colony: true },
  "15": { name: "Hawaii", abbr: "HI", admitted: 1959, date: "August 21, 1959", order: 50, capital: "Honolulu", borders: 1959 },
  "16": { name: "Idaho", abbr: "ID", admitted: 1890, date: "July 3, 1890", order: 43, capital: "Boise", borders: 1890 },
  "17": { name: "Illinois", abbr: "IL", admitted: 1818, date: "December 3, 1818", order: 21, capital: "Springfield", borders: 1818 },
  "18": { name: "Indiana", abbr: "IN", admitted: 1816, date: "December 11, 1816", order: 19, capital: "Indianapolis", borders: 1816 },
  "19": { name: "Iowa", abbr: "IA", admitted: 1846, date: "December 28, 1846", order: 29, capital: "Des Moines", borders: 1846 },
  "20": { name: "Kansas", abbr: "KS", admitted: 1861, date: "January 29, 1861", order: 34, capital: "Topeka", borders: 1861 },
  "21": { name: "Kentucky", abbr: "KY", admitted: 1792, date: "June 1, 1792", order: 15, capital: "Frankfort", borders: 1792 },
  "22": { name: "Louisiana", abbr: "LA", admitted: 1812, date: "April 30, 1812", order: 18, capital: "Baton Rouge", borders: 1812 },
  "23": { name: "Maine", abbr: "ME", admitted: 1820, date: "March 15, 1820 (Missouri Compromise)", order: 23, capital: "Augusta", borders: 1820 },
  "24": { name: "Maryland", abbr: "MD", admitted: 1788, date: "April 28, 1788 (7th to ratify)", order: 7, capital: "Annapolis", borders: 1750, colony: true },
  "25": { name: "Massachusetts", abbr: "MA", admitted: 1788, date: "February 6, 1788 (6th to ratify)", order: 6, capital: "Boston", borders: 1750, colony: true },
  "26": { name: "Michigan", abbr: "MI", admitted: 1837, date: "January 26, 1837", order: 26, capital: "Lansing", borders: 1837 },
  "27": { name: "Minnesota", abbr: "MN", admitted: 1858, date: "May 11, 1858", order: 32, capital: "St. Paul", borders: 1858 },
  "28": { name: "Mississippi", abbr: "MS", admitted: 1817, date: "December 10, 1817", order: 20, capital: "Jackson", borders: 1817 },
  "29": { name: "Missouri", abbr: "MO", admitted: 1821, date: "August 10, 1821 (Missouri Compromise)", order: 24, capital: "Jefferson City", borders: 1821 },
  "30": { name: "Montana", abbr: "MT", admitted: 1889, date: "November 8, 1889", order: 41, capital: "Helena", borders: 1889 },
  "31": { name: "Nebraska", abbr: "NE", admitted: 1867, date: "March 1, 1867", order: 37, capital: "Lincoln", borders: 1867 },
  "32": { name: "Nevada", abbr: "NV", admitted: 1864, date: "October 31, 1864", order: 36, capital: "Carson City", borders: 1864 },
  "33": { name: "New Hampshire", abbr: "NH", admitted: 1788, date: "June 21, 1788 (9th — put the Constitution into effect)", order: 9, capital: "Concord", borders: 1750, colony: true },
  "34": { name: "New Jersey", abbr: "NJ", admitted: 1787, date: "December 18, 1787 (3rd to ratify)", order: 3, capital: "Trenton", borders: 1750, colony: true },
  "35": { name: "New Mexico", abbr: "NM", admitted: 1912, date: "January 6, 1912", order: 47, capital: "Santa Fe", borders: 1912 },
  "36": { name: "New York", abbr: "NY", admitted: 1788, date: "July 26, 1788 (11th to ratify)", order: 11, capital: "Albany", borders: 1750, colony: true },
  "37": { name: "North Carolina", abbr: "NC", admitted: 1789, date: "November 21, 1789 (12th to ratify)", order: 12, capital: "Raleigh", borders: 1750, colony: true },
  "38": { name: "North Dakota", abbr: "ND", admitted: 1889, date: "November 2, 1889", order: 39, capital: "Bismarck", borders: 1889 },
  "39": { name: "Ohio", abbr: "OH", admitted: 1803, date: "March 1, 1803", order: 17, capital: "Columbus", borders: 1803 },
  "40": { name: "Oklahoma", abbr: "OK", admitted: 1907, date: "November 16, 1907", order: 46, capital: "Oklahoma City", borders: 1907 },
  "41": { name: "Oregon", abbr: "OR", admitted: 1859, date: "February 14, 1859", order: 33, capital: "Salem", borders: 1859 },
  "42": { name: "Pennsylvania", abbr: "PA", admitted: 1787, date: "December 12, 1787 (2nd to ratify)", order: 2, capital: "Harrisburg", borders: 1750, colony: true },
  "44": { name: "Rhode Island", abbr: "RI", admitted: 1790, date: "May 29, 1790 (13th — last of the original states)", order: 13, capital: "Providence", borders: 1750, colony: true },
  "45": { name: "South Carolina", abbr: "SC", admitted: 1788, date: "May 23, 1788 (8th to ratify)", order: 8, capital: "Columbia", borders: 1750, colony: true },
  "46": { name: "South Dakota", abbr: "SD", admitted: 1889, date: "November 2, 1889", order: 40, capital: "Pierre", borders: 1889 },
  "47": { name: "Tennessee", abbr: "TN", admitted: 1796, date: "June 1, 1796", order: 16, capital: "Nashville", borders: 1796 },
  "48": { name: "Texas", abbr: "TX", admitted: 1845, date: "December 29, 1845", order: 28, capital: "Austin", borders: 1845 },
  "49": { name: "Utah", abbr: "UT", admitted: 1896, date: "January 4, 1896", order: 45, capital: "Salt Lake City", borders: 1896 },
  "50": { name: "Vermont", abbr: "VT", admitted: 1791, date: "March 4, 1791 (14th state — first added to the original 13)", order: 14, capital: "Montpelier", borders: 1777, republic: [1777, 1791] },
  "51": { name: "Virginia", abbr: "VA", admitted: 1788, date: "June 25, 1788 (10th to ratify)", order: 10, capital: "Richmond", borders: 1750, colony: true },
  "53": { name: "Washington", abbr: "WA", admitted: 1889, date: "November 11, 1889", order: 42, capital: "Olympia", borders: 1889 },
  "54": { name: "West Virginia", abbr: "WV", admitted: 1863, date: "June 20, 1863 (separated from Virginia)", order: 35, capital: "Charleston", borders: 1863 },
  "55": { name: "Wisconsin", abbr: "WI", admitted: 1848, date: "May 29, 1848", order: 30, capital: "Madison", borders: 1848 },
  "56": { name: "Wyoming", abbr: "WY", admitted: 1890, date: "July 10, 1890", order: 44, capital: "Cheyenne", borders: 1890 }
};

// Pre-split absorptions: parent renders merged with child until the given year.
// [parentFips, childFips, untilYear]
TUSDATA.absorptions = [
  ["25", "23", 1820], // Massachusetts included the District of Maine until 1820
  ["51", "54", 1863], // Virginia included West Virginia until 1863
  ["51", "21", 1792], // Virginia included Kentucky County until 1792
  ["37", "47", 1790], // North Carolina included Tennessee until the 1790 cession
  ["36", "50", 1777]  // New York claimed the Vermont grants until the 1777 declaration
];

// U.S. unincorporated territories (rendered from state topology ids)
TUSDATA.territoriesMeta = {
  "72": { name: "Puerto Rico", from: 1898, note: "Ceded by Spain, 1898 · commonwealth 1952" },
  "66": { name: "Guam", from: 1898, note: "Ceded by Spain, 1898" },
  "60": { name: "American Samoa", from: 1900, note: "Deed of cession, 1900" },
  "78": { name: "U.S. Virgin Islands", from: 1917, note: "Purchased from Denmark, 1917" },
  "69": { name: "Northern Mariana Islands", from: 1947, note: "UN trusteeship 1947 · commonwealth 1978" }
};

// National population, total (colonies before 1790; decennial census after).
// Estimates pre-1790 from Historical Statistics of the United States.
TUSDATA.population = [
  [1750, 1170000], [1760, 1594000], [1770, 2148000], [1780, 2780000],
  [1790, 3929214], [1800, 5308483], [1810, 7239881], [1820, 9638453],
  [1830, 12866020], [1840, 17069453], [1850, 23191876], [1860, 31443321],
  [1870, 38558371], [1880, 50189209], [1890, 62979766], [1900, 76212168],
  [1910, 92228496], [1920, 106021537], [1930, 123202624], [1940, 132164569],
  [1950, 151325798], [1960, 179323175], [1970, 203302031], [1980, 226545805],
  [1990, 248709873], [2000, 281421906], [2010, 308745538], [2020, 331449281],
  [2026, 342000000]
];

// Enslaved population (census counts; estimates before 1790). Shown until 1865.
TUSDATA.enslaved = [
  [1750, 236000], [1760, 325806], [1770, 459822], [1780, 575420],
  [1790, 697624], [1800, 893602], [1810, 1191362], [1820, 1538022],
  [1830, 2009043], [1840, 2487355], [1850, 3204313], [1860, 3953760], [1865, 0]
];

// Territorial area ledger, square miles (1912 Census accounting; Alaska as then measured).
// Cumulative sum is displayed; the About panel notes later remeasurement (~3.797M sq mi today).
TUSDATA.areaLedger = [
  [1776, 888811, "Original territory (recognized 1783)"],
  [1803, 827192, "Louisiana Purchase"],
  [1810, 0, "West Florida annexations (counted with Florida cession)"],
  [1818, 46253, "Red River Basin (Convention of 1818)"],
  [1819, 72003, "Florida cession (incl. West Florida)"],
  [1845, 390143, "Texas annexation"],
  [1846, 285580, "Oregon Country south of 49°"],
  [1848, 529017, "Mexican Cession"],
  [1853, 29640, "Gadsden Purchase"],
  [1867, 590884, "Alaska"],
  [1898, 6449, "Hawaii"]
];

// Heads of state / government relevant to the map, by (decimal) year.
TUSDATA.leaders = [
  [1750.0, "George II — King of Great Britain"],
  [1760.8, "George III — King of Great Britain"],
  [1776.5, "Continental Congress"],
  [1781.2, "Confederation Congress"],
  [1789.3, "George Washington"], [1797.2, "John Adams"], [1801.2, "Thomas Jefferson"],
  [1809.2, "James Madison"], [1817.2, "James Monroe"], [1825.2, "John Quincy Adams"],
  [1829.2, "Andrew Jackson"], [1837.2, "Martin Van Buren"], [1841.15, "William Henry Harrison"],
  [1841.3, "John Tyler"], [1845.2, "James K. Polk"], [1849.2, "Zachary Taylor"],
  [1850.5, "Millard Fillmore"], [1853.2, "Franklin Pierce"], [1857.2, "James Buchanan"],
  [1861.2, "Abraham Lincoln"], [1865.3, "Andrew Johnson"], [1869.2, "Ulysses S. Grant"],
  [1877.2, "Rutherford B. Hayes"], [1881.2, "James A. Garfield"], [1881.7, "Chester A. Arthur"],
  [1885.2, "Grover Cleveland"], [1889.2, "Benjamin Harrison"], [1893.2, "Grover Cleveland"],
  [1897.2, "William McKinley"], [1901.7, "Theodore Roosevelt"], [1909.2, "William Howard Taft"],
  [1913.2, "Woodrow Wilson"], [1921.2, "Warren G. Harding"], [1923.6, "Calvin Coolidge"],
  [1929.2, "Herbert Hoover"], [1933.2, "Franklin D. Roosevelt"], [1945.3, "Harry S. Truman"],
  [1953.05, "Dwight D. Eisenhower"], [1961.05, "John F. Kennedy"], [1963.9, "Lyndon B. Johnson"],
  [1969.05, "Richard Nixon"], [1974.6, "Gerald Ford"], [1977.05, "Jimmy Carter"],
  [1981.05, "Ronald Reagan"], [1989.05, "George H. W. Bush"], [1993.05, "Bill Clinton"],
  [2001.05, "George W. Bush"], [2009.05, "Barack Obama"], [2017.05, "Donald Trump"],
  [2021.05, "Joe Biden"], [2025.05, "Donald Trump"]
];

// Seat of national government.
TUSDATA.capitals = [
  [1750, "Colonial capitals (Williamsburg, Boston, Philadelphia…)"],
  [1774, "Philadelphia (Continental Congress)"],
  [1783, "Itinerant Congress (Princeton, Annapolis, Trenton)"],
  [1785, "New York City"],
  [1790, "Philadelphia (temporary seat)"],
  [1800, "Washington, D.C."]
];
