import React from "react";
import NewItemForm from "../components/NewItemForm";

const NewItemPage = ({ user, setList }) => {
  return (
    <div>
      <h2>NewItemPage</h2>
      <NewItemForm user={user} setList={setList} />
    </div>
  );
};

export default NewItemPage;
