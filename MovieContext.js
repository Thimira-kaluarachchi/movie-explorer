import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
      );
      setTrending(data.results);
    } catch (error) {
      console.error('Error fetching trending:', error);
    }
  };

  const searchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      setMovies(data.results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, trending, searchMovies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};