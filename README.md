# Dexter Copilot

An AI co-pilot landing page for streamers. The app is a dependency-free static site that can be installed from a supported browser as a standalone app.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Use the **Download Dexter** button while viewing the page over `localhost` or HTTPS. Browsers that support Progressive Web Apps will offer installation; other browsers show instructions for using their install menu. The service worker keeps the app shell available offline after the first visit.
