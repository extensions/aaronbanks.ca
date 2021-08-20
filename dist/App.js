import React, {useState} from "../_snowpack/pkg/react.js";
import CanoePage from "./CanoePage.js";
import logo from "./face.png.proxy.js";
import "./App.css.proxy.js";
const App = () => {
  const [password, setPassword] = useState("");
  const [currentPage, setCurrentPage] = useState("login");
  let content;
  if (currentPage === "login") {
    content = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
      src: logo,
      className: "App-logo"
    }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("form", {
      onSubmit: (event) => {
        if (password === "kayla") {
          setCurrentPage("intro");
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
  } else if (currentPage === "intro") {
    content = /* @__PURE__ */ React.createElement("div", {
      className: "mainPage"
    }, /* @__PURE__ */ React.createElement("p", {
      id: "IntroParagraph"
    }, "This is my first paragraph ", /* @__PURE__ */ React.createElement("br", null), "this is the next line of the paragraph ", /* @__PURE__ */ React.createElement("br", null), "and so on..... ", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
      id: "CanoeBio",
      onClick: () => {
        setCurrentPage("canoe");
      }
    }, "This paragraph summarizes my canoeing and canoe guide experiences ", /* @__PURE__ */ React.createElement("br", null), "when you click on the paragraph, something should happen ", /* @__PURE__ */ React.createElement("br", null), "maybe it expands in to a new page?! ", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
      id: "SnowboardingBio"
    }, "This paragraph summarizes my canoeing and canoe guide experiences", /* @__PURE__ */ React.createElement("br", null), "maybe it expands in to a new page?! ", /* @__PURE__ */ React.createElement("br", null)));
  } else if (currentPage === "canoe") {
    content = /* @__PURE__ */ React.createElement(CanoePage, null);
  } else {
    console.error("what the hell");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(CanoePage, null), /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, content));
};
export default App;
