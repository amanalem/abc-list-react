import React from "react";
import listService from "../utils/listService";

const ListItem = ({ entry, key }) => {
  return (
    <div>
      <h3>{entry}</h3>
      <button onClick={listService.delete(key)}>x</button>
    </div>
  );
};

export default ListItem;
