// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Parse from "parse";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Home from "./components/home/Dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/home/Dashboard";
import NavBar from "./components/Navbar";

Parse.initialize("ECOM_DevOps_Ticketing", "myMasterKey");
Parse.serverURL = "http://localhost:5000/parse";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
