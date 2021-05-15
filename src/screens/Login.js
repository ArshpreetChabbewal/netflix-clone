import React, { useState, useEffect } from 'react'
import './Login.css'

import SignUpScreen from './SignUpScreen';

function Login() {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
        console.log(signIn);
    }, [signIn])

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img 
                    className="loginScreen_logo"
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt=""
                    />
            </div>
            <button 
                onClick={() => setSignIn(true)}
                className="loginScreen_signIn">
                Get Set Up
            </button>

            <div className="loginScreen_gradient"/>
            <div className="loginScreen_body">
                {signIn ? (
                    <SignUpScreen/>
                ) : (
                    <>
                        <h1 className="loginScreen_title">Unlimited Films, TV programmes and more.</h1>
                        <h2 className="loginScreen_subtitle">Watch Anywhere. Cancel at any time</h2>
                        <h3 className="loginScreen_text">Ready to Watch? Enter your email to create or restart your membership</h3>
                        <div className="loginScreen_input">
                            <form>
                                <input 
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <button 
                                    onClick={() => setSignIn(true)}
                                    className="loginScreen_getStarted">
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Login
