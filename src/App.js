import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ListPage from "./pages/ListPage";

function App() {
  const [user, setUser] = useState({});

  const [listA, setListA] = useState([]);

  const [listB, setListB] = useState([]);

  const [listC, setListC] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DB}/my-list`);
  });

  return (
    <div className="App">
      Hello Verld
      <Routes>
        <Route
          path="/my-list"
          element={
            <ListPage
              setListA={setListA}
              setListB={setListB}
              setListC={setListC}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
