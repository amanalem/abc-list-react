import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import userService from "./utils/userService";
import SignupPage from "./pages/SignupPage";

function App() {
  const [user, setUser] = useState({
    _id: "aman",
  });

  /*--- LifeCycle Methods ---*/

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/my-list`);
  // });

  useEffect(() => {});

  return (
    <div className="App">
      Hello Verld
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/my-list" element={<ListPage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
