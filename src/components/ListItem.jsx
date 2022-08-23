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

  const handleEdit = (e) => {
    e.preventDefault();
    setEditState({ edit: !editState.edit });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    try {
      listService.update(editForm).then(() => {
        listService.index(user._id).then((items) => {
          setItems(items);
        });
      });
    } catch (err) {
      updateMessage(err.message);
    }
  };

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
      {!editState.edit ? (
        <h3>
          {entry}&nbsp;&nbsp;
          <button onClick={handleDelete}>x</button>&nbsp;&nbsp;
          <button onClick={handleEdit}>edit</button>
        </h3>
      ) : (
        <h3>
          <input type="text" value={editForm.entry} id="entry" />
        </h3>
      )}
    </div>
  );
};

export default ListItem;
