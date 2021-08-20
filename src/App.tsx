import React, {useState} from 'react';

import CanoePage from "./CanoePage";

import logo from './face.png';

import './App.css';

const App = () => {
  const [password, setPassword] = useState("");

  const [currentPage, setCurrentPage] = useState<
     | "login"
     | "intro"
     | "canoe"
  >("login");

  let content;
  if (currentPage === "login") {
    content = <div>
    <img src={logo} className="App-logo" />
      <p>
      <form onSubmit={event => {
        if (password === "kayla") {
          setCurrentPage("intro");
        } else {
          alert("fuck off");
        }

        event.preventDefault();
      }}>
        <input
          name="password"
          type="password"
          placeholder="Enter password here!"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">
          Login!
        </button>
      </form>
      </p>
    </div>
    } else if (currentPage === "intro") {
      content = <div className="mainPage">
          <p id="IntroParagraph">
            This is my first paragraph <br />
            this is the next line of the paragraph <br />
            and so on..... <br />
          </p>
          <p id="CanoeBio" onClick={() => {
            setCurrentPage("canoe")
          }}>
            This paragraph summarizes my canoeing and canoe guide experiences <br />
            when you click on the paragraph, something should happen <br />
            maybe it expands in to a new page?! <br />
          </p>
          <p id="SnowboardingBio">
            This paragraph summarizes my canoeing and canoe guide experiences<br />
            maybe it expands in to a new page?! <br />
          </p>
      </div>
    } else if (currentPage === "canoe") {
      content = <CanoePage />
    } else {
      console.error("what the hell");
    }

  return (
    <div className="App">
      <CanoePage />

      <header className="App-header">
        {content}
      </header>
    </div>
  );
};

export default App;
