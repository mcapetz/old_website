import "./input.css";
// import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import Impact from "./pages/Impact";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <NavBar />
      <Menu />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/story" element={<Impact />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
