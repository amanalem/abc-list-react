import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import userService from "../utils/userService";
import listService from "../utils/listService";
import ListItem from "../components/ListItem";

const ListPage = ({ user, setItems, items }) => {
  const [message, setMessage] = useState({
    message: "",
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  useEffect(() => {
    try {
      listService.index(user._id).then((items) => {
        setItems(items);
      });
    } catch (err) {
      updateMessage(err.message);
    }
  }, [user]);

  console.log(items);
  return (
    <div>
      <h1>My List</h1>
      <Link to="/new">
        <button>New Item</button>
      </Link>
      <h2>A</h2>

      {items &&
        items.map((a) => {
          if (a.letter === "a") {
            return (
              <ListItem
                key={a._id}
                id={a._id}
                entry={a.entry}
                isDone={a.isDone}
                isOverdue={a.isOverdue}
                updateMessage={updateMessage}
                user={user}
                setItems={setItems}
                letter={a.letter}
                updatedAt={a.updatedAt}
              />
            );
          }
        })}

      <h2>B</h2>

      {items &&
        items.map((b) => {
          if (b.letter === "b") {
            return (
              <ListItem
                key={b._id}
                id={b._id}
                entry={b.entry}
                isDone={b.isDone}
                isOverdue={b.isOverdue}
                updateMessage={updateMessage}
                user={user}
                setItems={setItems}
                letter={b.letter}
                updatedAt={b.updatedAt}
              />
            );
          }
        })}

      <h2>C</h2>

      {items &&
        items.map((c) => {
          if (c.letter === "c") {
            return (
              <ListItem
                key={c._id}
                id={c._id}
                entry={c.entry}
                isDone={c.isDone}
                isOverdue={c.isOverdue}
                updateMessage={updateMessage}
                user={user}
                setItems={setItems}
                letter={c.letter}
                updatedAt={c.updatedAt}
              />
            );
          }
        })}
    </div>
  );
};

export default ListPage;
