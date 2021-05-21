import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import './Navbar.css';

function Navbar () {
    const [show, setShow] = useState(false);

    const logout = () => {
        auth.signOut().then(() => {
            
          }).catch((error) => {
            // An error happened.
          });
    }

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
                <div className="nav_profile">
                    <img 
                        className="nav_avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                    />
                    <div className="nav_dropdown">
                        <button className="nav_button" onClick={() => logout()}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar