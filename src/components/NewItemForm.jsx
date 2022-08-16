import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewItemForm = ({ user, setAList, setBList, setCList }) => {
  const [formData, setFormData] = useState({
    entry: "",
    letter: "",
    owner: user._id,
  });

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div>
      <header className="header-footer">New Item</header>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="List Item"
              value={formData.entry}
              name="entry"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <label>
              <input
                type="radio"
                className="form-control"
                name="letter"
                value="a"
                checked={formData.letter === "a"}
              />
              A
            </label>
          </div>
        </div>
      </form>
      <Link to="/my-list">
        <button>back to my list</button>
      </Link>
    </div>
  );
};

export default NewItemForm;
