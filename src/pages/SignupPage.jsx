import React from "react";
import { useState } from "react";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  const [message, setMessage] = useState({
    message: "",
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  return (
    <div>
      SignupPage
      <SignupForm updateMessage={updateMessage} />
      <p>{message}</p>
    </div>
  );
};

export default SignupPage;
