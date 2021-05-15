import React, { useState, useEffect } from 'react';
import api from './api';
import "./Row.css";

function Row({title, fetchURL, isLarge = false}) {
    const [movies, setMovies] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
      }, []);

    useEffect(() => {
        if (mounted) {
          const abortController = new AbortController();
              const fetchData = async () => {
                  const request = await api.get(fetchURL, { signal: abortController.signal });
                  setMovies(request.data.results)
                  return request;
              }
              fetchData();
              return () => {
                  abortController.abort();
              };
          }
      }, [fetchURL, mounted]);

    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row_images">
                {movies.map(movie =>
                    ((isLarge && movie.poster_path) ||
                    (!isLarge && movie.backdrop_path)) && (
                    <img className={`row_image ${isLarge && "row_large"}`}
                    /* key={movie.id} */
                    src={`https://image.tmdb.org/t/p/original/${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                    ))}
            </div>
        </div>
    )
}

export default Row
