import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
      // в "тэге" Routes 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    );
}

export default App;