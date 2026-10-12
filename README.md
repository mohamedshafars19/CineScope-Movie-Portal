# 🎬 CineScope — Premium Frontend-Only Movie Platform

A complete, professional movie discovery and critique website named **CineScope**, inspired by the visual design and cinematic experience of **Netflix** and **Amazon Prime Video**.

> **Architecture:** 100% Frontend-Only Single Page Application (SPA). Built exclusively using **React JSX**, **Vanilla CSS**, **Vite**, and **React Router**. No backend server, database, or external API keys required!

---

## 🌟 Key Features

1. **Netflix & Prime Video Inspired Cinematic Design**:
   - Deep near-black background (`#07090e`, `#0a0d14`) with glowing crimson red (`#e50914`) and warm gold (`#f59e0b`) accents.
   - Large cinematic hero banner with backdrop artwork, rating scores, and quick action buttons.
   - Smooth card elevation, rounded corners, and hover poster zoom.
   - Zero UI libraries (no Tailwind CSS, Bootstrap, or Material UI) — crafted entirely with responsive Vanilla CSS.

2. **Reusable `MovieCard.jsx` Component**:
   - Located in `src/components/MovieCard.jsx`.
   - Receives required props: `title`, `rating`, and `poster` (plus optional `id`, `genre`, `year`, `overview`, `mediaType`).
   - **Conditional Rendering (Lab Viva Requirement)**:
     ```jsx
     {/* Show Top Rated badge ONLY when rating > 8.0 */}
     {rating > 8 && <span className="top-rated-badge">Top Rated</span>}
     ```
   - Automatically displays glowing gold **Top Rated** badges on films rated above 8.0/10 (*The Dark Knight*, *Inception*, *Interstellar*, *Dune: Part Two*, etc.) and omits them on films with ratings ≤ 8.0 (*The Batman*, *Avatar 2*, *Fast X*).

3. **Multi-Page Navigation (React Router)**:
   - **Home (`/`)**: Hero banner, Trending, Popular, Top Rated, Upcoming, TV Series, and Genre showcase.
   - **Movies Catalogue (`/movies`)**: Responsive grid, real-time title search, genre chips, Top Rated toggle, sort selector, and working **Load More** pagination.
   - **TV Shows (`/tv-shows`)**: Dedicated television series showcase (*Stranger Things*, *Breaking Bad*, *Arcane*, etc.).
   - **Movie Details (`/movie/:id`)**: High-res backdrop, synopsis, cast list, trailer player, similar recommendations, and interactive review submission.
   - **My Watchlist (`/watchlist`)**: Bookmarking system saved locally in browser `localStorage`.
   - **Login (`/login`) & Sign Up (`/signup`)**: Frontend-only UI forms with show/hide password, client validation, and demo mode simulation.
   - **About (`/about`) & Contact (`/contact`)**: Platform background, lab viva guide, and validated contact form.
   - **404 Not Found (`*`)**: Custom cinematic scene error page.

4. **Live Search & Official Trailer Modal**:
   - Instant search in the navigation bar with dropdown suggestions.
   - Embedded official YouTube trailer modal player with escape key listener and unavailable state fallback.

5. **Local Sample Dataset (`src/data/movies.js`)**:
   - Contains 16 richly detailed films and TV series with verified TMDB artwork URLs, release years, directors, full cast arrays, trailer keys, and preloaded reviews.

---

## 📂 Project Structure

```
my-app/
├── index.html                     # HTML head, Google Fonts (Outfit & Plus Jakarta Sans)
├── package.json                   # Dependencies: react, react-dom, react-router-dom
├── vite.config.js                 # Vite bundler configuration
└── src/
    ├── main.jsx                   # React root entry point
    ├── App.jsx                    # Router, providers, and route configuration
    ├── index.css                  # Global style entry point
    │
    ├── data/
    │   └── movies.js              # 16 complete local movie/TV records & genres
    │
    ├── context/
    │   ├── AuthContext.jsx        # Demo authentication state simulation
    │   └── WatchlistContext.jsx   # LocalStorage-backed watchlist manager
    │
    ├── components/
    │   ├── Navbar.jsx             # Sticky transparent/solid navigation bar
    │   ├── SearchBar.jsx          # Live dropdown search component
    │   ├── HeroBanner.jsx         # Cinematic hero showcase with actions
    │   ├── MovieCard.jsx          # Reusable movie card with conditional Top Rated badge
    │   ├── MovieRow.jsx           # Horizontal carousel with scroll buttons
    │   ├── TrailerModal.jsx       # Responsive video player modal
    │   └── Footer.jsx             # Multi-column footer with academic viva details
    │
    ├── pages/
    │   ├── Home.jsx               # Landing page with hero & movie rows
    │   ├── Movies.jsx             # Catalogue with search, filters & Load More
    │   ├── TvShows.jsx            # TV series browsing page
    │   ├── MovieDetails.jsx       # Film details, cast, similar titles & reviews
    │   ├── Watchlist.jsx          # My Watchlist page with local persistence
    │   ├── Login.jsx              # Frontend-only login with validation
    │   ├── Signup.jsx             # Frontend-only registration with validation
    │   ├── About.jsx              # Technical architecture & viva guide
    │   ├── Contact.jsx            # Validated contact form
    │   └── NotFound.jsx           # Custom 404 error page
    │
    └── styles/
        ├── global.css             # Theme design tokens, buttons, badges & reset
        ├── navbar.css             # Navbar, search dropdown & mobile drawer styles
        ├── home.css               # Hero banner, carousel rows & genre chips styles
        ├── movieCard.css          # Card hover elevation, poster & badge styles
        ├── movies.css             # Grid layout, filter toolbar & empty state
        ├── details.css            # Backdrop header, cast cards & review form
        ├── forms.css              # Authentication & contact form styles
        ├── footer.css             # Multi-column footer styling
        └── trailerModal.css       # Video player modal & 16:9 ratio styles
```

---

## 🎓 College Practical & Viva Q&A Guide

### Q1: What is conditional rendering and where is it implemented in this project?
> **Answer:** Conditional rendering in React means rendering UI elements based on certain conditions (similar to an `if` statement). In CineScope, it is implemented in `MovieCard.jsx` using the logical AND (`&&`) operator:
> ```jsx
> {rating > 8 && <span className="top-rated-badge">Top Rated</span>}
> ```
> The badge renders only when a movie's numerical rating is strictly greater than 8.0.

### Q2: What props are passed to `MovieCard.jsx`?
> **Answer:** The reusable `MovieCard.jsx` component accepts `title`, `rating`, and `poster` as primary props, along with optional metadata like `id`, `genre`, `year`, `overview`, and `mediaType`.

### Q3: How does the Watchlist persist data without a backend database?
> **Answer:** It uses the browser's native `localStorage` API managed inside `WatchlistContext.jsx`. A `useEffect` hook synchronizes the `watchlistIds` array to `localStorage.setItem('cinescope_watchlist', ...)` on every update, so the list remains intact when refreshing the browser.

### Q4: How is page routing handled?
> **Answer:** We use `react-router-dom` with a `BrowserRouter` wrapped around `Routes` and `Route` components. Dynamic routes like `/movie/:id` use the `useParams()` hook to extract the movie ID from the URL and match it against the local `MOVIES` dataset.

### Q5: Why is there no backend or external API key needed?
> **Answer:** The application is architected as an offline-first, client-side React practical demonstration. All movie records, cast, backdrops, and trailer URLs are bundled in `src/data/movies.js`, ensuring the project runs seamlessly in any lab environment without API rate limits or network failures.

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.
