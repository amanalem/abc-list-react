import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import userService from "../utils/userService";

const ListPage = ({ user,setLists }) => {
  const [message, setMessage] = useState({
    message: "",
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8000` + `/my-list?owner=${user._id}`)
        .then(({ data: list }) => {
          setLists(list.aList, list.bList, list.cList);
        });
    } catch (err) {
      updateMessage(err.message);
    }
  }, []);

  return <div>ListPage</div>;
};

export default ListPage;
