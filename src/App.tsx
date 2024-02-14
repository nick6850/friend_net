import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
