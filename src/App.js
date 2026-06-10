import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import "bootstrap-icons/font/bootstrap-icons.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div>
     <NavBar/>
     <About/>
     <Education/>
     <Project/>
     <Skills/>
     <Achievements/>
     <Contact/>
     
    </div>
  );
}

export default App;
