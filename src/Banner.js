import React, { useState, useEffect } from 'react';
import './Banner.css';
import requests from './requests';

import api from './api';

function Banner() {
    const [movie, setMovie] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
      }, []);

      useEffect(() => {
        if (mounted) {
            const abortController = new AbortController();
            const fetchData = async () => {
                const request = await api.get(requests.fetchNetflxOriginals, { signal: abortController.signal });
                setMovie(
                    request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ])}
              fetchData();
              return () => {
                  abortController.abort();
              };
          }
      }, [mounted]);

    const truncate = (desc, max) => {
        return desc?.length > max ? desc.substr(0, max - 1) + '...' : desc;
    }
    console.log(movie);
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(`${movie?.overview}`, 150)}</h1>
            </div>
            
            <div className="banner_fadeBottom"/>
        </header>
    )
}

export default Banner;