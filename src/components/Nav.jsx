import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.div`
  a {
    margin: 0, 100px, 0 10px;
  }
`;

const Nav = ({ handleLogout, user }) => {
  const ifUser = user;
  return (
    <div>
      <NavStyle>
        {ifUser && (
          <Link to="/login" onClick={handleLogout}>
            Log Out
          </Link>
        )}

        {!ifUser && <Link to="/login">Log In</Link>}

        {!ifUser && <Link to="/signup">Sign Up</Link>}
      </NavStyle>
    </div>
  );
};

export default Nav;
