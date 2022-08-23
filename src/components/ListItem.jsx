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

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!editState.edit) {
      setEditState({ edit: true });
    } else {
      handleUpdate();
    }
  };

  const handleUpdate = (e) => {
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
          <input
            type="text"
            value={editForm.entry}
            name="entry"
            onChange={handleChange}
          />
          &nbsp;&nbsp;
          <select
            name="letter"
            placeholder={editForm.letter.toUpperCase()}
            onChange={handleChange}
          >
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
          &nbsp;&nbsp;
          <button onClick={handleEdit}>done</button>
        </h3>
      )}
    </div>
  );
};

export default ListItem;
