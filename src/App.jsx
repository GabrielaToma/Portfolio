import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import AsideBar from "./components/AsideBar";
import NavBar from "./components/NavBar";
import Home from "./components/AsideBarPages/Home";
import About from "./components/AsideBarPages/About";
import Projects from "./components/AsideBarPages/Projects";
import Contact from "./components/AsideBarPages/Contact";

function App() {
  /*clicking on the NavBar switches asideBarDisplay value 
  - when asideBarDisplay is true, the side-bar will receive the className "open"*/
  const [asideBarDisplay, setAsideBarDisplay] = React.useState(false);

  function setDisplay() {
    setAsideBarDisplay(!asideBarDisplay);
  }

  return (
    <>
      <NavBar handleClick={setDisplay} display={asideBarDisplay} />
      <BrowserRouter>
        <div className="thebestcontainer">
          <AsideBar display={asideBarDisplay} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
