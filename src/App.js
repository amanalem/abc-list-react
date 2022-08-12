import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState({});

  const [listA, setListA] = useState([]);

  const [listB, setListB] = useState([]);

  const [listC, setListC] = useState([]);

  const setLists = (a, b, c) => {
    setListA(a);
    setListB(b);
    setListC(c);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DB}/my-list`);
  });

  return (
    <div className="App">
      Hello Verld
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route
          path="/my-list"
          element={
            <ListPage
              setLists={setLists}
              listA={listA}
              listB={listB}
              listC={listC}
              user={user}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
