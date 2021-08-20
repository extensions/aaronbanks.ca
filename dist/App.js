import React, {useState} from "../_snowpack/pkg/react.js";
import logo from "./face.png.proxy.js";
import "./App.css.proxy.js";
const App = () => {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  let content;
  if (!loggedIn) {
    content = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
      src: logo,
      className: "App-logo"
    }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("form", {
      onSubmit: (event) => {
        if (password === "kayla") {
          setLoggedIn(true);
        } else {
          alert("fuck off");
        }
        event.preventDefault();
      }
    }, /* @__PURE__ */ React.createElement("input", {
      name: "password",
      type: "password",
      placeholder: "Enter password here!",
      onChange: (event) => {
        setPassword(event.target.value);
      }
    }), /* @__PURE__ */ React.createElement("button", {
      type: "submit"
    }, "Login!"))));
  } else {
    content = /* @__PURE__ */ React.createElement("div", null, "Hi");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, content));
};
export default App;
