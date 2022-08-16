import React from "react";
import NewItemForm from "../components/NewItemForm";

const NewItemPage = ({ user, setAList, setBList, setCList }) => {
  return (
    <div>
      <h2>NewItemPage</h2>
      <NewItemForm
        user={user}
        setAList={setAList}
        setBList={setBList}
        setCList={setCList}
      />
    </div>
  );
};

export default NewItemPage;
