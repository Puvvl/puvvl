import React from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="/about"
          rel="noopener noreferrer"
        >
          About
        </a>
      </header>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
