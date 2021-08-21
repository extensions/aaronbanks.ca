import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import CanoePage from "./CanoePage.ts";
import IntroPage from "./IntroPage.ts";
import MountainsPage from "./MountainsPage.ts";

import logo from './face.png';
import mountains1 from './AaronBanksLifePhotos/Mountains/AaronOnAMountain.1.jpg';

import './App.css';

const thePassword = "kayla";

const App = () => {
  const savedPassword: string = localStorage.getItem("savedPassword");
  const [enteredPassword, setEnteredPassword] = useState(savedPassword || "");

  let authenticated: boolean;
  if (enteredPassword === thePassword) {
    authenticated = true;
    localStorage.setItem("savedPassword", enteredPassword);
  } else {
    authenticated = false;
  }

  // If the user isn't logged in, display the login page.
  if (!authenticated) {
    return <div className="App">
      <header className="App-header">
      <div class="LoginPage">
      <img src={logo} className="App-logo" />
        <p>
        <form onSubmit={event => {
          if (enteredPassword !== thePassword) {
            alert("That's not the right password");
          }

          event.preventDefault();
        }}>
          <input
            defaultValue={savedPassword}
            name="password"
            type="password"
            placeholder="Enter password here!"
            onInput={event => {
              setEnteredPassword(event.target.value);
            }}
          />
          <button type="submit">
            Login!
          </button>
        </form>
        </p>
      </div>
      </header></div>;
  }

  // Otherwise, they are logged in, and we can use <Router> to load the
  // appropriate page.

  return <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <IntroPage />
            </Route>

            <Route exact path="/canoe">
              <CanoePage />
            </Route>

            <Route exact path="/mountains">
              <MountainsPage />
            </Route>

            <Route exact path="/canoe">
              <CanoePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>;

    // } else if (currentPage === "cooking") {
    //   content = <cooking />
    // } else if (currentPage === "pandemic") {
    //   content = <pandemicPage />
    // } else if (currentPage === "programming") {
    //   content = <programmingPage />
    // } else if (currentPage === "roadtrips") {
    //   content = <CanoePage />

};

export default App;
