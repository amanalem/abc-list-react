import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import userService from "../utils/userService";
import listService from "../utils/listService";
import ListItem from "../components/ListItem";

const ListPage = ({
  user,
  setAList,
  setBList,
  setCList,
  aList,
  bList,
  cList,
}) => {
  const [message, setMessage] = useState({
    message: "",
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  useEffect(() => {
    try {
      listService.index(user._id).then((list) => {
        setAList([list.aList]);
      });
      listService.index(user._id).then((list) => {
        setBList([list.bList]);
      });
      listService.index(user._id).then((list) => {
        setCList([list.cList]);
      });
    } catch (err) {
      updateMessage(err.message);
    }
  }, [user]);

  return (
    <div>
      <h1>My List</h1>
      <Link to="/new">
        <button>New Item</button>
      </Link>
      <h2>A</h2>

      {aList &&
        aList.map((item) => {
          return (
            <ListItem key={item._id} entry={item.entry} isDone={item.isDone} />
          );
        })}

      <h2>B</h2>
      <h2>C</h2>
    </div>
  );
};

export default ListPage;
