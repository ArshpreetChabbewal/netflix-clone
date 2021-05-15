import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      userAuth ? dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,
      })) : dispatch(logout());
    })

    return () => {
      unsubscribe();
    }
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
        <Switch>
          <Route exact path="/profile">
            <ProfileScreen/>
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
    </Router>
    </div>
  );
}

export default App;
