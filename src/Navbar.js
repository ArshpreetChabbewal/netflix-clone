import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, [])

    return (
        <div className={`navbar ${show && 'nav_black'}`}>
            <div className="nav_contents">
            <Link to="/">
                <img
                        className="nav_logo"
                        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                        alt=""
                    />
            </Link>
            <Link to="/profile">
                <img 
                    className="nav_avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />
            </Link>
            </div>
        </div>
    )
}

export default Navbar