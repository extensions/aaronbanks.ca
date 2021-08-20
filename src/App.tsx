import React, {useState} from 'react';

import CanoePage from "./CanoePage";
import MountainsPage from "./MountainsPage";

import logo from './face.png';
import mountains1 from './AaronBanksLifePhotos/Mountains/AaronOnAMountain.1.jpg';

import './App.css';

const App = () => {
  const savedPassword = localStorage.getItem("savedPassword");

  const [password, setPassword] = useState(savedPassword || "");

  const [currentPage, setCurrentPage] = useState<
     | "login"
     | "intro"
     | "canoe"
     | "mountains"
     | "roadtrips"
     | "cooking"
     | "pandemic"
     | "programming"
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
          defaultValue={password}
          name="password"
          type="password"
          placeholder="Enter password here!"
          onChange={event => {
            const password = event.target.value;

            setPassword(password);
            localStorage.setItem("savedPassword", password);
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
           This paragraph talks about my programing<br />
            THis is more text<br />
          </p>
          <p id="MountainsBio" onClick={() => {
            setCurrentPage("canoe")
          }}>
            <img src={mountains1} />
          This paragraph talks about my mountain life and snowboarding<br />
            THis is more text<br />
          </p>
          <p id="RoadtripsBio" onClick={() => {
            setCurrentPage("canoe")
          }}>
          This paragraph talks about my roadtrips<br />
            THis is more text<br />
          </p>
          <p id="CookingBio" onClick={() => {
            setCurrentPage("canoe")
          }}>
          This paragraph talks about my cooking experience<br />
            THis is more text<br />
          </p>
          <p id="PandemicBio" onClick={() => {
            setCurrentPage("canoe")
          }}>
          This paragraph talks about my Pandemic experience<br />
            THis is more text<br />
          </p>
          <p id="ProgrammingBio" onClick={() => {
            setCurrentPage("canoe")
          }}>
            This paragraph talks about my programing<br />
            THis is more text<br />
          </p>
      </div>
    } else if (currentPage === "canoe") {
      content = <CanoePage />
    } else if (currentPage === "mountains") {
      content = <MountainsPage />
    // } else if (currentPage === "cooking") {
    //   content = <cooking />
    // } else if (currentPage === "pandemic") {
    //   content = <pandemicPage />
    // } else if (currentPage === "programming") {
    //   content = <programmingPage />
    // } else if (currentPage === "roadtrips") {
    //   content = <CanoePage />

    } else {
      console.error("what the hell");
    }

  return (
    <div className="App">

      <header className="App-header">
        {content}
      </header>
    </div>
  );
};

export default App;
