import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});

  const [listA, setListA] = useState([]);

  const [listB, setListB] = useState([]);

  const [listC, setListC] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DB}/my-list`);
  });

  return <div className="App">Hello Verld</div>;
}

export default App;
