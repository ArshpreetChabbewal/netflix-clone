import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css'

function SignUpScreen() {
    const [isCurrentUser, setIsCurrentUser] = useState(false);

    const signInEmailRef = useRef(null);
    const signInPassRef = useRef(null);
    const signUpEmailRef = useRef(null);
    const signUpPassRef = useRef(null);


    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(signInEmailRef.current.value, signInPassRef.current.value)
        .then().catch((err) => alert(err.message));
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(signInEmailRef.current.value, signInPassRef.current.value)
        .then().catch((err) => alert(err.message));
    }

    return (
        <div className="signUp">
            <form>
                <h1>Sign In</h1>
                <input 
                    ref={signInEmailRef}
                    placeholder="Email" 
                    type="email" 
                />
                <input 
                    ref={signInPassRef}
                    placeholder="Password" 
                    type="password" 
                />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signUp_grey">Don't have an account? </span>
                    <span className="signUp_link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen



            {/*isCurrentUser ? (
                <form>
                    <h1>Sign In</h1>
                    <input 
                        ref={signInEmailRef}
                        placeholder="Email" 
                        type="email" 
                    />
                    <input 
                        ref={signInPassRef}
                        placeholder="Password" 
                        type="password" 
                    />
                    <button type="submit" onClick={signIn}>Sign In</button>
                    <h4>
                        <span className="signUp_grey">Don't have an account? </span>
                        <span className="signUp_link" onClick={() => setIsCurrentUser(false)}>Sign Up now.</span>
                    </h4>
                </form>
            ) : (
                <form>
                    <h1>Sign Up</h1>
                    <input 
                        ref={signUpEmailRef}
                        placeholder="Email" 
                        type="email" 
                    />
                    <input 
                        ref={signUpPassRef}
                        placeholder="Password" 
                        type="password" 
                    />
                    <button type="submit" onClick={register}>Sign Up</button>
                    <h4>
                        <span className="signUp_grey">Already have an account? </span>
                        <span className="signUp_link" onClick={() => setIsCurrentUser(true)}>Sign In now.</span>
                    </h4>
                </form>
            )*/}
