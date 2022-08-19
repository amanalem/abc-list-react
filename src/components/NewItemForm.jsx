import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import listService from "../utils/listService";

const NewItemForm = ({ user, setList }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    entry: "",
    letter: "",
    owner: user._id,
  });

  const [message, setMessage] = useState({
    message: "",
  });

  const [radios, setRadios] = useState({
    a: false,
    b: false,
    c: false,
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setRadios({ ...radios, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      listService.create(formData);
      setFormData({
        entry: "",
        letter: "",
        owner: user._id,
      });
      setRadios({ a: false, b: false, c: false });
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(formData.entry && formData.letter && formData.owner);
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
                id="a"
                onChange={handleChange}
                checked={radios.a}
              />
              A
            </label>
            <label>
              <input
                type="radio"
                className="form-control"
                name="letter"
                value="b"
                id="b"
                onChange={handleChange}
                checked={radios.b}
              />
              B
            </label>

            <label>
              <input
                type="radio"
                className="form-control"
                name="letter"
                value="c"
                id="c"
                onChange={handleChange}
                checked={radios.c}
              />
              C
            </label>
          </div>
          &nbsp;&nbsp;
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button disabled={isFormInvalid()}>Create</button>
          </div>
          &nbsp;&nbsp;
        </div>
        &nbsp;&nbsp;
      </form>

      <Link to="/my-list">
        <button>back to my list</button>
      </Link>
    </div>
  );
};

export default NewItemForm;
