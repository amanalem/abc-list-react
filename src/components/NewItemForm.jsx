import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewItemForm = ({ user, setList }) => {
  const [formData, setFormData] = useState({
    entry: "",
    letter: "",
    owner: user._id,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        &nbsp;
        <div className="form-group">
          <div className="col-sm-12">
            <label>
              <input
                type="radio"
                className="form-control"
                name="letter"
                value="a"
                onChange={handleChange}
              />
              A
            </label>
            <label>
              <input
                type="radio"
                className="form-control"
                name="letter"
                value="b"
                onChange={handleChange}
              />
              B
            </label>

            <label>
              <input
                type="radio"
                className="form-control"
                name="letter"
                value="c"
                onChange={handleChange}
              />
              C
            </label>
          </div>
          &nbsp;&nbsp;
        </div>
      </form>

      <Link to="/my-list">
        <button>back to my list</button>
      </Link>
    </div>
  );
};

export default NewItemForm;
