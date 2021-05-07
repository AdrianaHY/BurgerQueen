import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { auth } from './firebase'
import React from 'react'
import Kitchen from './components/Kitchen';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user is logged in')
        setUser(user)
      } else {
        console.log('user is logged out')
        setUser(false)
      }
    })
  }, [])

  return (
    <div className="App">
       {user !== null ? (
         <Router>
          <div>
            <Switch>
              <Route path="/" exact>
                <Login user={user} />
              </Route>
              <Route path="/home">
                <Home user={user} />
              </Route>
              <Route path="/kitchen">
                <Kitchen user={user} />
              </Route>
            </Switch>
          </div>
        </Router>
       ) : <p>Loading ... </p>
      }
    </div>
  );
}

export default App;
