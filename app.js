const CONTINENTS = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
];

const CONTINENT_META = {
  Africa: { code: "AF", vibe: "Wild Terrain" },
  Antarctica: { code: "AN", vibe: "Polar Frontier" },
  Asia: { code: "AS", vibe: "Temple Trails" },
  Europe: { code: "EU", vibe: "Old-World Routes" },
  "North America": { code: "NA", vibe: "Urban + Nature" },
  Oceania: { code: "OC", vibe: "Island Orbit" },
  "South America": { code: "SA", vibe: "Andes Pulse" },
};

const DEPARTURE_PORTS = [
  { name: "Barcelona", region: "Spain" },
  { name: "Brisbane", region: "Australia" },
  { name: "Cape Town", region: "South Africa" },
  { name: "Fort Lauderdale", region: "United States" },
  { name: "Galveston", region: "United States" },
  { name: "Lisbon", region: "Portugal" },
  { name: "Los Angeles", region: "United States" },
  { name: "Miami", region: "United States" },
  { name: "Port Canaveral", region: "United States" },
  { name: "Rome (Civitavecchia)", region: "Italy" },
  { name: "San Juan", region: "Puerto Rico" },
  { name: "Santos", region: "Brazil" },
  { name: "Seattle", region: "United States" },
  { name: "Singapore", region: "Singapore" },
  { name: "Southampton", region: "United Kingdom" },
  { name: "Sydney", region: "Australia" },
  { name: "Tampa", region: "United States" },
  { name: "Vancouver", region: "Canada" },
  { name: "Yokohama", region: "Japan" },
];

const trips = [
  {
    id: "barcelona",
    continent: "Europe",
    country: "Spain",
    city: "Barcelona",
    badge: "Gaudi Hunter",
    date: "2025-07-14",
    airline: "Iberia",
    departurePort: "Barcelona",
    privacy: "public",
    photos: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495563381401-ecfbcaaa67d1?auto=format&fit=crop&w=1000&q=80",
    ],
    restaurants: [
      "Can Culleretes - old-school Catalan dinner",
      "Bar Canete - tapas + seafood",
      "Bodega Biarritz - tasting menu near Gothic Quarter",
    ],
    itinerary: [
      {
        day: "Day 1",
        plan: [
          "Sunrise at Bunkers del Carmel",
          "Sagrada Familia visit (book first slot)",
          "Tapas crawl in El Born",
        ],
      },
      {
        day: "Day 2",
        plan: [
          "Park Guell in the morning",
          "Gothic Quarter walking loop",
          "Sunset at Barceloneta",
        ],
      },
    ],
    tips: [
      "Use T-Casual metro card for best value.",
      "Reserve major attractions 1-2 weeks ahead in peak season.",
    ],
  },
  {
    id: "lisbon",
    continent: "Europe",
    country: "Portugal",
    city: "Lisbon",
    badge: "Tram 28 Navigator",
    date: "2024-05-02",
    airline: "TAP Air Portugal",
    departurePort: "Lisbon",
    privacy: "followers",
    photos: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=80",
    ],
    restaurants: [
      "Time Out Market - sample chef stalls",
      "Cervejaria Ramiro - shellfish feast",
      "Oficina do Duque - modern Portuguese",
    ],
    itinerary: [
      {
        day: "Day 1",
        plan: [
          "Alfama + Miradouro trail",
          "Tram 28 loop",
          "Fado dinner in Mouraria",
        ],
      },
      {
        day: "Day 2",
        plan: [
          "Belem tower + Jeronimos",
          "Pastel de nata run",
          "Sunset in Bairro Alto",
        ],
      },
    ],
    tips: ["Wear traction shoes; hills are steep and slick.", "Carry cash for small tascas."],
  },
  {
    id: "kyoto",
    continent: "Asia",
    country: "Japan",
    city: "Kyoto",
    badge: "Temple Dawn Seeker",
    date: "2025-03-22",
    airline: "Japan Airlines",
    departurePort: "Yokohama",
    privacy: "public",
    photos: [
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?auto=format&fit=crop&w=1000&q=80",
    ],
    restaurants: [
      "Men-ya Inoichi - ramen",
      "Kichi Kichi Omurice - iconic counter show",
      "Nishiki market tastings",
    ],
    itinerary: [
      {
        day: "Day 1",
        plan: [
          "Fushimi Inari before 7am",
          "Matcha break in Gion",
          "Kiyomizu-dera sunset",
        ],
      },
      {
        day: "Day 2",
        plan: [
          "Arashiyama bamboo grove dawn",
          "Tenryu-ji temple",
          "Pontocho alley dinner",
        ],
      },
    ],
    tips: [
      "Early starts beat crowds by hours.",
      "Use IC card for train + bus transfers.",
    ],
  },
  {
    id: "medellin",
    continent: "South America",
    country: "Colombia",
    city: "Medellin",
    badge: "Comuna Story Collector",
    date: "2024-11-08",
    airline: "Avianca",
    departurePort: "San Juan",
    privacy: "private",
    photos: [
      "https://images.unsplash.com/photo-1574437814637-1d15e84a6f6b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1646344691456-6cbf805b8c13?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542396601-dca920ea2807?auto=format&fit=crop&w=1000&q=80",
    ],
    restaurants: [
      "Carmen - seasonal tasting",
      "Alambique - local classics",
      "Pergamino - specialty coffee",
    ],
    itinerary: [
      {
        day: "Day 1",
        plan: ["Plaza Botero", "Comuna 13 street art tour", "Poblado night food crawl"],
      },
      {
        day: "Day 2",
        plan: ["Guatape day trip", "Coffee tasting", "Rooftop dinner"],
      },
    ],
    tips: ["Stay in El Poblado or Laureles.", "Use rideshare after dark."],
  },
  {
    id: "cape-town",
    continent: "Africa",
    country: "South Africa",
    city: "Cape Town",
    badge: "Coastline Tracker",
    date: "2023-09-18",
    airline: "South African Airways",
    departurePort: "Cape Town",
    privacy: "public",
    photos: [
      "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1604608447888-4f120ea2f6ac?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626038042303-f76389966a8f?auto=format&fit=crop&w=1000&q=80",
    ],
    restaurants: [
      "The Pot Luck Club - small plates",
      "Kalky's - fish and chips",
      "Neighbourgoods Market stalls",
    ],
    itinerary: [
      {
        day: "Day 1",
        plan: ["Table Mountain cableway", "Bo-Kaap walk", "Waterfront dinner"],
      },
      {
        day: "Day 2",
        plan: ["Cape Peninsula drive", "Boulders Beach penguins", "Sunset at Camps Bay"],
      },
    ],
    tips: ["Book weather-dependent activities flexibly.", "Layer clothes for shifting wind."],
  },
  {
    id: "vancouver",
    continent: "North America",
    country: "Canada",
    city: "Vancouver",
    badge: "Rain City Explorer",
    date: "2025-10-01",
    airline: "Air Canada",
    departurePort: "Vancouver",
    privacy: "followers",
    photos: [
      "https://images.unsplash.com/photo-1560814304-4f05b62f7254?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591913132547-594d4f29a06f?auto=format&fit=crop&w=1000&q=80",
    ],
    restaurants: [
      "Miku - aburi sushi",
      "Jam Cafe - brunch",
      "Phnom Penh - famous wings",
    ],
    itinerary: [
      {
        day: "Day 1",
        plan: ["Seawall bike ride", "Granville Island", "Gastown dinner"],
      },
      {
        day: "Day 2",
        plan: ["Capilano area", "Lynn Canyon", "Sunset from Kitsilano"],
      },
    ],
    tips: ["Pack a shell jacket even in summer.", "Compass Card for transit saves time."],
  },
];

const storage = {
  followers: "trvlers_followers",
  planner: "trvlers_planner",
  privacy: "trvlers_privacy",
};

const state = {
  mode: "owner",
  relationship: "public",
  following: 143,
  followers: Number(localStorage.getItem(storage.followers)) || 968,
  isFollowing: false,
  search: "",
  planner: JSON.parse(localStorage.getItem(storage.planner) || "[]"),
  privacyOverrides: JSON.parse(localStorage.getItem(storage.privacy) || "{}"),
  selectedContinent: null,
  selectedCountry: null,
  selectedCityId: null,
};

function hydratePrivacy() {
  trips.forEach((trip) => {
    if (state.privacyOverrides[trip.id]) {
      trip.privacy = state.privacyOverrides[trip.id];
    }
  });
}

function savePrivacy() {
  localStorage.setItem(storage.privacy, JSON.stringify(state.privacyOverrides));
}

function savePlanner() {
  localStorage.setItem(storage.planner, JSON.stringify(state.planner));
}

function visibleTrip(trip) {
  if (state.mode === "owner") {
    return true;
  }
  if (trip.privacy === "public") {
    return true;
  }
  if (trip.privacy === "followers" && state.relationship === "follower") {
    return true;
  }
  return false;
}

function visibleBadgeTrips() {
  if (state.mode === "owner") {
    return trips;
  }
  return trips.filter((trip) => visibleTrip(trip));
}

function normalizeKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function makeBadgeCode(label, maxLength = 3) {
  const parts = String(label || "")
    .replace(/[^A-Za-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (!parts.length) {
    return "TR";
  }
  if (parts.length === 1) {
    return parts[0].slice(0, maxLength).toUpperCase();
  }
  return parts
    .slice(0, maxLength)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function buildBadgeCollections(sourceTrips) {
  const visitedContinentSet = new Set(sourceTrips.map((trip) => trip.continent));
  const cityMap = new Map();
  const countryCities = new Map();
  const airlineMap = new Map();
  const visitedPortSet = new Set();

  sourceTrips
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach((trip) => {
      const cityKey = `${normalizeKey(trip.city)}|${normalizeKey(trip.country)}`;
      if (!cityMap.has(cityKey)) {
        cityMap.set(cityKey, {
          code: makeBadgeCode(trip.city, 3),
          name: trip.city,
          subtitle: trip.country,
          stamp: formatDate(trip.date),
          unlocked: true,
        });
      }

      const countryKey = normalizeKey(trip.country);
      if (!countryCities.has(countryKey)) {
        countryCities.set(countryKey, {
          code: makeBadgeCode(trip.country, 2),
          name: trip.country,
          subtitle: trip.continent,
          cities: new Set(),
          unlocked: true,
        });
      }
      countryCities.get(countryKey).cities.add(cityKey);

      if (trip.airline) {
        const airlineKey = normalizeKey(trip.airline);
        if (!airlineMap.has(airlineKey)) {
          airlineMap.set(airlineKey, {
            code: makeBadgeCode(trip.airline, 3),
            name: trip.airline,
            subtitle: "Airline flown",
            unlocked: true,
          });
        }
      }

      if (trip.departurePort) {
        visitedPortSet.add(normalizeKey(trip.departurePort));
      }
    });

  const continentBadges = CONTINENTS.map((continent) => {
    const unlocked = visitedContinentSet.has(continent);
    const meta = CONTINENT_META[continent] || { code: makeBadgeCode(continent, 2), vibe: "Travel Region" };
    return {
      code: meta.code,
      name: continent,
      subtitle: meta.vibe,
      unlocked,
    };
  });

  const countryBadges = Array.from(countryCities.values())
    .map((country) => ({
      code: country.code,
      name: country.name,
      subtitle: `${country.cities.size} city badge${country.cities.size === 1 ? "" : "s"}`,
      unlocked: true,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const cityBadges = Array.from(cityMap.values());

  const portBadges = DEPARTURE_PORTS.map((port) => ({
    code: makeBadgeCode(port.name, 3),
    name: port.name,
    subtitle: port.region,
    unlocked: visitedPortSet.has(normalizeKey(port.name)),
  })).sort((a, b) => Number(b.unlocked) - Number(a.unlocked) || a.name.localeCompare(b.name));

  const airlineBadges = Array.from(airlineMap.values()).sort((a, b) => a.name.localeCompare(b.name));

  return {
    continentBadges,
    countryBadges,
    cityBadges,
    portBadges,
    airlineBadges,
  };
}

function buildBadgeCounts(sourceTrips) {
  const collections = buildBadgeCollections(sourceTrips);
  const unlockedContinents = collections.continentBadges.filter((badge) => badge.unlocked).length;
  const unlockedPorts = collections.portBadges.filter((badge) => badge.unlocked).length;
  const unlockedCountries = collections.countryBadges.length;
  const unlockedCities = collections.cityBadges.length;
  const unlockedAirlines = collections.airlineBadges.length;

  const unlocked =
    unlockedContinents + unlockedCountries + unlockedCities + unlockedPorts + unlockedAirlines;
  const total =
    CONTINENTS.length +
    unlockedCountries +
    unlockedCities +
    DEPARTURE_PORTS.length +
    unlockedAirlines;

  return {
    unlocked,
    total,
    unlockedContinents,
    unlockedCountries,
    unlockedCities,
    unlockedPorts,
    unlockedAirlines,
    collections,
  };
}

function filteredTrips() {
  const text = state.search.trim().toLowerCase();
  return trips.filter((trip) => {
    if (!visibleTrip(trip)) {
      return false;
    }
    if (!text) {
      return true;
    }

    const haystack = [
      trip.city,
      trip.country,
      trip.continent,
      trip.badge,
      trip.tips.join(" "),
      trip.restaurants.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(text);
  });
}

function availableContinents(list) {
  return [...new Set(list.map((trip) => trip.continent))];
}

function availableCountries(list) {
  return [...new Set(list.filter((trip) => trip.continent === state.selectedContinent).map((trip) => trip.country))];
}

function selectedTrips(list) {
  return list.filter((trip) => {
    if (state.selectedContinent && trip.continent !== state.selectedContinent) {
      return false;
    }
    if (state.selectedCountry && trip.country !== state.selectedCountry) {
      return false;
    }
    return true;
  });
}

function deriveSelection(list) {
  const continents = availableContinents(list);
  if (!state.selectedContinent || !continents.includes(state.selectedContinent)) {
    state.selectedContinent = continents[0] || null;
    state.selectedCountry = null;
  }

  if (!state.selectedContinent) {
    state.selectedCountry = null;
    return;
  }

  const countries = availableCountries(list);
  if (!state.selectedCountry || !countries.includes(state.selectedCountry)) {
    state.selectedCountry = countries[0] || null;
  }
}

function formatDate(raw) {
  const d = new Date(raw);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function iconForPrivacy(privacy) {
  if (privacy === "public") {
    return "Public";
  }
  if (privacy === "followers") {
    return "Followers";
  }
  return "Private";
}

function renderProfile() {
  const badgeTrips = visibleBadgeTrips();
  const badgeCounts = buildBadgeCounts(badgeTrips);

  document.getElementById("followersMetric").textContent = state.followers.toLocaleString();
  document.getElementById("followingMetric").textContent = state.following.toLocaleString();
  document.getElementById("citiesMetric").textContent = trips.length.toString();
  document.getElementById("badgesMetric").textContent = badgeCounts.unlocked.toString();

  const relationshipControl = document.getElementById("relationshipControl");
  const followBtn = document.getElementById("followBtn");

  if (state.mode === "owner") {
    relationshipControl.style.display = "none";
    followBtn.style.display = "none";
  } else {
    relationshipControl.style.display = "inline-flex";
    followBtn.style.display = "inline-flex";
    followBtn.textContent = state.isFollowing ? "Following" : "Follow";
    followBtn.classList.toggle("ghost", state.isFollowing);
  }
}

function badgeCardTemplate(badge, index, typeClass = "") {
  return `
    <article class="badge ${typeClass} tone-${(index % 6) + 1} ${badge.unlocked ? "unlocked" : "locked"}">
      <div class="badge-top">
        <span class="badge-icon">${badge.code}</span>
        <span class="badge-status">${badge.unlocked ? badge.stamp || "Unlocked" : "Locked"}</span>
      </div>
      <h4>${badge.name}</h4>
      <p>${badge.subtitle}</p>
    </article>
  `;
}

function renderBadges() {
  const continentWrap = document.getElementById("badgeGrid");
  const countryWrap = document.getElementById("countryBadgeGrid");
  const cityWrap = document.getElementById("cityBadgeGrid");
  const portWrap = document.getElementById("portBadgeGrid");
  const airlineWrap = document.getElementById("airlineBadgeGrid");
  const summaryWrap = document.getElementById("badgeSummary");

  const sourceTrips = visibleBadgeTrips();
  const badgeCounts = buildBadgeCounts(sourceTrips);
  const { continentBadges, countryBadges, cityBadges, portBadges, airlineBadges } = badgeCounts.collections;

  summaryWrap.innerHTML = `
    <article class="summary-pill">
      <h4>${badgeCounts.unlocked}/${badgeCounts.total}</h4>
      <p>Total badges</p>
    </article>
    <article class="summary-pill">
      <h4>${badgeCounts.unlockedCities}</h4>
      <p>City badges</p>
    </article>
    <article class="summary-pill">
      <h4>${badgeCounts.unlockedCountries}</h4>
      <p>Country badges</p>
    </article>
    <article class="summary-pill">
      <h4>${badgeCounts.unlockedContinents}/${CONTINENTS.length}</h4>
      <p>Continent badges</p>
    </article>
    <article class="summary-pill">
      <h4>${badgeCounts.unlockedPorts}/${DEPARTURE_PORTS.length}</h4>
      <p>Departure ports</p>
    </article>
    <article class="summary-pill">
      <h4>${badgeCounts.unlockedAirlines}</h4>
      <p>Airlines flown</p>
    </article>
  `;

  continentWrap.innerHTML = continentBadges.map((badge, index) => badgeCardTemplate(badge, index, "badge--continent")).join("");

  if (!countryBadges.length) {
    countryWrap.innerHTML = '<div class="empty">No country badges unlocked in this view.</div>';
  } else {
    countryWrap.innerHTML = countryBadges.map((badge, index) => badgeCardTemplate(badge, index, "badge--country")).join("");
  }

  if (!cityBadges.length) {
    cityWrap.innerHTML = '<div class="empty">No city badges visible for this view yet.</div>';
  } else {
    cityWrap.innerHTML = cityBadges.map((badge, index) => badgeCardTemplate(badge, index, "badge--city")).join("");
  }

  portWrap.innerHTML = portBadges.map((badge, index) => badgeCardTemplate(badge, index, "badge--port")).join("");

  if (!airlineBadges.length) {
    airlineWrap.innerHTML = '<div class="empty">No airline badges unlocked in this view.</div>';
  } else {
    airlineWrap.innerHTML = airlineBadges.map((badge, index) => badgeCardTemplate(badge, index, "badge--airline")).join("");
  }
}

function renderFilters(list) {
  const continentWrap = document.getElementById("continentFilters");
  const countryWrap = document.getElementById("countryFilters");

  const continents = availableContinents(list);
  continentWrap.innerHTML = continents
    .map(
      (continent) => `
      <button class="chip ${state.selectedContinent === continent ? "active" : ""}" data-continent="${continent}">
        ${continent}
      </button>
    `
    )
    .join("");

  const countries = availableCountries(list);
  countryWrap.innerHTML = countries
    .map(
      (country) => `
      <button class="chip ${state.selectedCountry === country ? "active" : ""}" data-country="${country}">
        ${country}
      </button>
    `
    )
    .join("");

  continentWrap.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedContinent = button.dataset.continent;
      state.selectedCountry = null;
      render();
    });
  });

  countryWrap.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCountry = button.dataset.country;
      render();
    });
  });
}

function renderCities(list) {
  const cityWrap = document.getElementById("cityCards");
  const note = document.getElementById("visibilityNote");

  if (state.mode === "owner") {
    note.textContent = "Owner mode: all cities are visible, including private logs.";
  } else if (state.relationship === "follower") {
    note.textContent = "Follower view: public + followers-only cities are visible.";
  } else {
    note.textContent = "Public view: only public city logs are visible.";
  }

  const scoped = selectedTrips(list);

  if (!scoped.length) {
    cityWrap.innerHTML = '<div class="empty">No city logs match this filter.</div>';
    state.selectedCityId = null;
    return;
  }

  if (!state.selectedCityId || !scoped.find((trip) => trip.id === state.selectedCityId)) {
    state.selectedCityId = scoped[0].id;
  }

  cityWrap.innerHTML = scoped
    .map(
      (trip) => `
      <article class="city-card ${trip.id === state.selectedCityId ? "active" : ""}" data-city-id="${trip.id}">
        <h4>${trip.city}</h4>
        <p>${trip.country}</p>
        <p>${trip.badge}</p>
        <span class="privacy-pill ${trip.privacy}">${iconForPrivacy(trip.privacy)}</span>
      </article>
    `
    )
    .join("");

  cityWrap.querySelectorAll(".city-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedCityId = card.dataset.cityId;
      render();
    });
  });
}

function renderCityDetail() {
  const wrap = document.getElementById("cityDetail");
  const trip = trips.find((entry) => entry.id === state.selectedCityId);

  if (!trip || !visibleTrip(trip)) {
    wrap.innerHTML = '<div class="empty">Select a city to see photos, restaurants, and itinerary.</div>';
    return;
  }

  const privacyEditor =
    state.mode === "owner"
      ? `
      <label class="control">
        Sharing
        <select id="privacySelect">
          <option value="public" ${trip.privacy === "public" ? "selected" : ""}>Public</option>
          <option value="followers" ${trip.privacy === "followers" ? "selected" : ""}>Followers</option>
          <option value="private" ${trip.privacy === "private" ? "selected" : ""}>Private</option>
        </select>
      </label>
    `
      : `<span class="privacy-pill ${trip.privacy}">${iconForPrivacy(trip.privacy)}</span>`;

  const itineraryHtml = trip.itinerary
    .map(
      (block) => `
      <div class="itinerary-day">
        <h5>${block.day}</h5>
        <ul>${block.plan.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    `
    )
    .join("");

  wrap.innerHTML = `
    <div class="city-header">
      <div>
        <h3>${trip.city}, ${trip.country}</h3>
        <div class="city-meta">
          <span>${trip.continent}</span>
          <span>Visited ${formatDate(trip.date)}</span>
          <span>Badge: ${trip.badge}</span>
          ${trip.airline ? `<span>Airline: ${trip.airline}</span>` : ""}
          ${trip.departurePort ? `<span>Departure Port: ${trip.departurePort}</span>` : ""}
        </div>
      </div>
      <div>
        ${privacyEditor}
      </div>
    </div>

    <div class="photo-grid">
      ${trip.photos.map((src) => `<img src="${src}" alt="${trip.city} photo" loading="lazy" />`).join("")}
    </div>

    <div class="columns">
      <article class="list-card">
        <h4>Restaurants</h4>
        <ul>${trip.restaurants.map((spot) => `<li>${spot}</li>`).join("")}</ul>
      </article>
      <article class="list-card">
        <h4>Field Tips</h4>
        <ul>${trip.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul>
      </article>
    </div>

    <div class="columns">
      <article class="list-card">
        <h4>Itinerary</h4>
        ${itineraryHtml}
      </article>
      <article class="list-card">
        <h4>Reusable Plan</h4>
        <p class="bio">Use this city as a base for your next trip draft.</p>
        <button id="addPlanBtn" class="btn small" type="button">Add ${trip.city} to Planner</button>
      </article>
    </div>
  `;

  const addPlanBtn = document.getElementById("addPlanBtn");
  addPlanBtn.addEventListener("click", () => {
    if (!state.planner.includes(trip.id)) {
      state.planner.push(trip.id);
      savePlanner();
      renderPlanner();
    }
  });

  if (state.mode === "owner") {
    const privacySelect = document.getElementById("privacySelect");
    privacySelect.addEventListener("change", () => {
      trip.privacy = privacySelect.value;
      state.privacyOverrides[trip.id] = privacySelect.value;
      savePrivacy();
      render();
    });
  }
}

function renderPlanner() {
  const wrap = document.getElementById("plannerList");
  const plannerTrips = state.planner
    .map((id) => trips.find((trip) => trip.id === id))
    .filter((trip) => trip && visibleTrip(trip));

  if (!plannerTrips.length) {
    wrap.innerHTML =
      '<div class="empty">No cities added yet. Open a city and click "Add to Planner" to build a draft trip.</div>';
    return;
  }

  wrap.innerHTML = plannerTrips
    .map((trip) => {
      const flattened = trip.itinerary.map((d) => `${d.day}: ${d.plan.join(" | ")}`).join(" / ");
      return `
      <article class="plan-card">
        <h4>${trip.city}, ${trip.country}</h4>
        <p>${flattened}</p>
      </article>
    `;
    })
    .join("");
}

function wireControls() {
  const modeSelect = document.getElementById("viewModeSelect");
  const relationshipSelect = document.getElementById("visitorRelationshipSelect");
  const followBtn = document.getElementById("followBtn");
  const searchInput = document.getElementById("citySearch");
  const clearPlannerBtn = document.getElementById("clearPlannerBtn");

  modeSelect.addEventListener("change", () => {
    state.mode = modeSelect.value;
    render();
  });

  relationshipSelect.addEventListener("change", () => {
    state.relationship = relationshipSelect.value;
    render();
  });

  followBtn.addEventListener("click", () => {
    state.isFollowing = !state.isFollowing;
    if (state.isFollowing) {
      state.followers += 1;
      localStorage.setItem(storage.followers, String(state.followers));
    } else {
      state.followers -= 1;
      localStorage.setItem(storage.followers, String(state.followers));
    }
    renderProfile();
  });

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    render();
  });

  clearPlannerBtn.addEventListener("click", () => {
    state.planner = [];
    savePlanner();
    renderPlanner();
  });
}

function render() {
  const list = filteredTrips();
  deriveSelection(list);
  renderProfile();
  renderBadges();
  renderFilters(list);
  renderCities(list);
  renderCityDetail();
  renderPlanner();
}

function init() {
  hydratePrivacy();
  wireControls();
  render();
}

init();
