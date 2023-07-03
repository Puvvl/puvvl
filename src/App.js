import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  console.log("test");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="about"
          rel="noopener noreferrer"
        >
          About
        </a>
      </header>
      <BrowserRouter basename="/puvvl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
