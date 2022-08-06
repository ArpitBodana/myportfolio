import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/Top";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-vh-100 text-center">
      <Top />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
