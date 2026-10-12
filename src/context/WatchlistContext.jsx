import React, { createContext, useContext, useState, useEffect } from 'react';
import { getMovieById } from '../data/movies';

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlistIds, setWatchlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('cinescope_watchlist');
      // Default sample watchlist with 2 movies for immediate showcase
      return saved ? JSON.parse(saved) : [1, 5];
    } catch {
      return [1, 5];
    }
  });

  // Sync with browser localStorage whenever watchlist changes
  useEffect(() => {
    try {
      localStorage.setItem('cinescope_watchlist', JSON.stringify(watchlistIds));
    } catch (e) {
      console.warn('Unable to save watchlist to localStorage', e);
    }
  }, [watchlistIds]);

  const addToWatchlist = (movieId) => {
    const id = Number(movieId);
    if (!watchlistIds.includes(id)) {
      setWatchlistIds((prev) => [...prev, id]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    const id = Number(movieId);
    setWatchlistIds((prev) => prev.filter((item) => item !== id));
  };

  const toggleWatchlist = (movieId) => {
    const id = Number(movieId);
    if (watchlistIds.includes(id)) {
      removeFromWatchlist(id);
    } else {
      addToWatchlist(id);
    }
  };

  const isInWatchlist = (movieId) => {
    return watchlistIds.includes(Number(movieId));
  };

  // Convert array of IDs into full movie objects
  const watchlistMovies = watchlistIds
    .map((id) => getMovieById(id))
    .filter(Boolean);

  return (
    <WatchlistContext.Provider
      value={{
        watchlistIds,
        watchlistMovies,
        addToWatchlist,
        removeFromWatchlist,
        toggleWatchlist,
        isInWatchlist,
        count: watchlistIds.length
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};
