import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import React from "react";
import Topics from "./pages/topics/Topics";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link className="navbarLogo" to="/">
            Shihaibi NC News
          </Link>
        </div>
        <div className="navbarLinks">
          <Link to="/">Home</Link>
          <Link to="/topics">Topics</Link>
        </div>
      </nav>
      <main>
        <div className="pageLayout">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/topics" element={<Topics />}></Route>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
