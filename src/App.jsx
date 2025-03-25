import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import AsideBar from "./components/AsideBar";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
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
/**
 * 1. cand marimea ferestrei e sub 700 de px:
 * navbarul va avea display block
 * butonul va avea content liniile daca displayDropdown menu e fals/ x daca e true
 * va exista un displayDropdownMenu state setat pe fals
 * click pe buton va seta pe true displayDropdownMenu
 * cand displayDropdownMenu e true, asidebar-ul e vizibil
 *
 * 2. cand marimea ferestrei e peste 700px:
 * navbarul va avea display none
 * aside bar-ul va avea margin-left: 0 (initial o sa fie -250px sau ce width o avea)
 *
 */
