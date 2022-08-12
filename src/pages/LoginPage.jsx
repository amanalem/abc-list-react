import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import userService from "../utils/userService";

const LoginPage = ({ handleSignupOrLogin }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    message: "",
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(formData);
      // success ? show ListPage
      handleSignupOrLogin();
      navigate("/my-list");
    } catch (err) {
      //Invalid user data ?
      updateMessage(err.message);
    }
  };
  return (
    <div>
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default">Log In</button>
            &nbsp; &nbsp; &nbsp;
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
