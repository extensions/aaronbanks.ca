import React, {useState} from "../_snowpack/pkg/react.js";
import CanoePage from "./CanoePage.js";
import MountainsPage from "./MountainsPage.js";
import logo from "./face.png.proxy.js";
import mountains1 from "./AaronBanksLifePhotos/Mountains/AaronOnAMountain.1.jpg.proxy.js";
import "./App.css.proxy.js";
const App = () => {
  const savedPassword = localStorage.getItem("savedPassword");
  const [password, setPassword] = useState(savedPassword || "");
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
      defaultValue: password,
      name: "password",
      type: "password",
      placeholder: "Enter password here!",
      onChange: (event) => {
        const password2 = event.target.value;
        setPassword(password2);
        localStorage.setItem("savedPassword", password2);
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
    }, "This paragraph talks about my programing", /* @__PURE__ */ React.createElement("br", null), "THis is more text", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
      id: "MountainsBio",
      onClick: () => {
        setCurrentPage("canoe");
      }
    }, /* @__PURE__ */ React.createElement("img", {
      src: mountains1
    }), "This paragraph talks about my mountain life and snowboarding", /* @__PURE__ */ React.createElement("br", null), "THis is more text", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
      id: "RoadtripsBio",
      onClick: () => {
        setCurrentPage("canoe");
      }
    }, "This paragraph talks about my roadtrips", /* @__PURE__ */ React.createElement("br", null), "THis is more text", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
      id: "CookingBio",
      onClick: () => {
        setCurrentPage("canoe");
      }
    }, "This paragraph talks about my cooking experience", /* @__PURE__ */ React.createElement("br", null), "THis is more text", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
      id: "PandemicBio",
      onClick: () => {
        setCurrentPage("canoe");
      }
    }, "This paragraph talks about my Pandemic experience", /* @__PURE__ */ React.createElement("br", null), "THis is more text", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
      id: "ProgrammingBio",
      onClick: () => {
        setCurrentPage("canoe");
      }
    }, "This paragraph talks about my programing", /* @__PURE__ */ React.createElement("br", null), "THis is more text", /* @__PURE__ */ React.createElement("br", null)));
  } else if (currentPage === "canoe") {
    content = /* @__PURE__ */ React.createElement(CanoePage, null);
  } else if (currentPage === "mountains") {
    content = /* @__PURE__ */ React.createElement(MountainsPage, null);
  } else {
    console.error("what the hell");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, content));
};
export default App;
