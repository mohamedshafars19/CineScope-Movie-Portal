import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import MovieDetails from './pages/MovieDetails';
import Watchlist from './pages/Watchlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { WatchlistProvider } from './context/WatchlistContext';
import { AuthProvider } from './context/AuthContext';
import './styles/global.css';
import './styles/footer.css';

/**
 * ScrollToTop Helper
 * Resets window scroll position on every route transition
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <WatchlistProvider>
          <div className="app-container">
            <ScrollToTop />

            {/* Top Academic Viva & Demo Banner */}
            <div className="demo-banner">
              <span>🍿</span>
              <span>
                <strong>CineScope Frontend-Only Edition:</strong> Running with local React state & browser storage. No backend or database required.
              </span>
            </div>

            {/* Sticky Navigation Bar */}
            <Navbar />

            {/* Main Page Routing */}
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tv-shows" element={<TvShows />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Platform Footer */}
            <Footer />
          </div>
        </WatchlistProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;