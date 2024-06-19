import React from "react";
import "./App.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import "./App.css";

const PrivateRoute = ({ element }) => {
  return localStorage.getItem("currentUser") ? (
    element
  ) : (
    <Navigate to="/login" />
  );
};
const App = () => {
  return (
    <div className="appWrapper">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
