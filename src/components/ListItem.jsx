import React, { useState } from "react";
import listService from "../utils/listService";

const ListItem = ({
  entry,
  id,
  updateMessage,
  user,
  setItems,
  letter,
  updatedAt,
}) => {
  const [editState, setEditState] = useState({
    edit: false,
  });

  const [editForm, setEditForm] = useState({
    entry: entry,
    id: id,
    letter: letter,
    updatedAt: updatedAt,
  });

  const handleDelete = (e) => {
    e.preventDefault();
    try {
      listService.delete(id).then(() => {
        listService.index(user._id).then((items) => {
          setItems(items);
        });
      });
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <div>
      <h3>
        {entry}&nbsp;&nbsp;
        <button onClick={handleDelete}>x</button>
      </h3>
    </div>
  );
};

export default ListItem;
