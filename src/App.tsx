import React, {useState} from 'react';

import logo from './face.png';

import './App.css';

const App = () => {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  let content;
  if (!loggedIn) {
    content = <div>
    <img src={logo} className="App-logo" />
      <p>
      <form onSubmit={event => {
        if (password === "kayla") {
          setLoggedIn(true);
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
    } else {
      content = <div>
        Hi
      </div>
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
