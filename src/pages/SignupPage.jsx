import React from "react";
import { useState } from "react";
import SignupForm from "../components/SignupForm";

const SignupPage = ({ handleSignupOrLogin }) => {
  const [message, setMessage] = useState({
    message: "",
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  return (
    <div>
      <SignupForm
        updateMessage={updateMessage}
        handleSignupOrLogin={handleSignupOrLogin}
      />
      <p>{message.message}</p>
    </div>
  );
};

export default SignupPage;
