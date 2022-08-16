import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import userService from "./utils/userService";
import SignupPage from "./pages/SignupPage";
import NewItemPage from "./pages/NewItemPage";
import Nav from "./components/Nav";

function App() {
  const [user, setUser] = useState(null);

  const [aList, setAList] = useState([]);
  const [bList, setBList] = useState([]);
  const [cList, setCList] = useState([]);

  const setLists = (a, b, c) => {
    setAList(a);
    setBList(b);
    setCList(c);
  };

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

  useEffect(() => {
    userService.getUser();
  }, []);

  return (
    <div className="App">
      ABC-List
      <Nav user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/my-list"
          element={<ListPage user={user} setLists={setLists} />}
        />
        <Route
          path="/new"
          element={
            <NewItemPage
              user={user}
              setAList={setAList}
              setBList={setBList}
              setCList={setCList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
