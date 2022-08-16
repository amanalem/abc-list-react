import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.div`
  Link {
    margin: 0, 100px, 0 10px;
  }
`;

const Nav = ({ handleLogout, user }) => {
  return (
    <div>
      <NavStyle>
        <Link to="/login" onClick={handleLogout}>
          Log Out
        </Link>
        <Link to="/login">Log In</Link>

        <Link to="/signup">Sign Up</Link>
      </NavStyle>
    </div>
  );
};

export default Nav;
