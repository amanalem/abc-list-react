import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import userService from "../utils/userService";

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_DB}/login`, formData).then((res) => {
      if (res.status === 200) {
        setUser(res.data);
        navigate("/my-list");
      }
    });
  };
  return <div>LoginPage</div>;
};

export default LoginPage;
