import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navlinks from "./components/Navlinks/Navlinks";

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <Navlinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
