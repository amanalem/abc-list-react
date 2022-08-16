import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import userService from "../utils/userService";
import listService from "../utils/listService";

const ListPage = ({ user, setList, list }) => {
  const [message, setMessage] = useState({
    message: "",
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  useEffect(() => {
    try {
      listService.index(user._id).then((list) => {
        setList(list);
      });
    } catch (err) {
      updateMessage(err.message);
    }
  }, []);

  return (
    <div>
      <h2>ListPage</h2>
      <Link to="/new">
        <button>New Item</button>
      </Link>
    </div>
  );
};

export default ListPage;
