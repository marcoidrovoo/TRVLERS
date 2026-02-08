# TRVLERS MVP

TRVLERS is a social-travel MVP where people build a travel identity with city badges, share trip details on their profile, and help others plan future trips from real itineraries.

## MVP Features

- Traveler profile with follower/following metrics
- Follow/follower interaction in visitor mode
- Badge map by continent (7-continent tracking)
- Drill-down explorer: continent -> country -> city
- City pages with:
  - photo gallery
  - restaurants visited
  - itinerary by day
  - travel tips
- Per-city privacy controls (Public / Followers / Private)
- Visitor simulation (public visitor vs follower)
- Planner builder: add shared city itineraries to a draft trip
- Local persistence (privacy, followers, planner) via `localStorage`

## Files

- `index.html` - app layout and structure
- `styles.css` - visual design, responsive layout, animations
- `app.js` - travel data, filtering logic, privacy + planner state

## Run locally

Serve statically from this folder:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Deploy

This project is static and can be deployed directly with the bundled Vercel deploy skill script.
