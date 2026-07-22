// insets.js — overseas territory inset views: satellite crop, geometry, and
// story-camera configuration. bbox = [west, south, east, north] and MUST match
// the crop bounds used to render the data/img/inset-*.jpg files.
window.TUSDATA = window.TUSDATA || {};

// Panama Canal Zone strip (stylized ~10-mile band along the canal)
TUSDATA.canalZoneGeo = { type: "Polygon", coordinates: [[
  [-80.03, 9.32], [-79.81, 9.47], [-79.44, 9.05], [-79.66, 8.86], [-80.03, 9.32]
]] };

TUSDATA.insets = [
  {
    id: "caribbean", btn: "Puerto Rico & USVI", join: 1898, story: true,
    title: "Puerto Rico & the U.S. Virgin Islands",
    bbox: [-68.8, 16.8, -63.2, 19.4], img: "data/img/inset-caribbean.jpg",
    feats: [
      { geoRef: "72", cardId: "pr1898", join: 1898, name: "Puerto Rico" },
      { geoRef: "78", cardId: "usvi1917", join: 1917, name: "U.S. Virgin Islands" }
    ],
    cities: ["sanjuan"]
  },
  {
    id: "philippines", btn: "Philippines", join: 1898, leave: 1946, story: true,
    title: "The Philippines",
    bbox: [115.8, 4.2, 127.8, 21.6], img: "data/img/inset-ph.jpg",
    feats: [
      { geoKey: "phGeo", cardId: "philippines1898", join: 1898, leave: 1946, name: "Philippine Islands" }
    ],
    cities: ["manila"]
  },
  {
    id: "guam", btn: "Guam & N. Marianas", join: 1898, story: true,
    title: "Guam & the Northern Mariana Islands",
    bbox: [143.0, 12.6, 146.6, 21.0], img: "data/img/inset-guam.jpg",
    feats: [
      { geoRef: "66", cardId: "guam1898", join: 1898, name: "Guam" },
      { geoRef: "69", cardId: "marianas1947", join: 1947, name: "Northern Marianas" }
    ],
    cities: []
  },
  {
    id: "samoa", btn: "American Samoa", join: 1900, story: true,
    title: "American Samoa",
    bbox: [-171.4, -14.95, -168.9, -13.35], img: "data/img/inset-samoa.jpg",
    feats: [
      { geoRef: "60", cardId: "amsamoa1900", join: 1900, name: "American Samoa" }
    ],
    cities: []
  },
  {
    id: "canal", btn: "Canal Zone", join: 1903, leave: 1979, story: true,
    title: "Panama Canal Zone",
    bbox: [-81.2, 7.6, -77.8, 10.2], img: "data/img/inset-canal.jpg",
    feats: [
      { geoKey: "canalZoneGeo", cardId: "canalzone1903", join: 1903, leave: 1979, name: "Canal Zone" }
    ],
    cities: [], contextCountry: "Panama"
  },
  {
    id: "hawaii", btn: "Hawaiʻi", join: 1898, story: false,
    title: "The Hawaiian Islands",
    bbox: [-160.8, 18.4, -154.4, 22.6], img: "data/img/inset-hawaii.jpg",
    feats: [
      { geoRef: "15", cardId: "hawaii1898", join: 1898, name: "Hawaiʻi" }
    ],
    cities: ["honolulu"]
  }
];
