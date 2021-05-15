import React from 'react';
import "./HomeScreen.css";

import Navbar from '../Navbar';
import Banner from '../Banner';
import requests from '../requests';
import Row from '../Row';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Navbar />

            <Banner />

            <Row 
                title="NETFLIX ORIGINALS"
                fetchURL={requests.fetchNetflxOriginals}
                isLarge
            />
            <Row 
                title="Trending Now"
                fetchURL={requests.fetchTrending}
            />
            <Row 
                title="Action Movies"
                fetchURL={requests.fetchActionMovies}
            />
            <Row 
                title="Horror Movies"
                fetchURL={requests.fetchHorrorMovies}
            />
            <Row 
                title="Romance Movies"
                fetchURL={requests.fetchRomanceMovies}
            />
            <Row 
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
