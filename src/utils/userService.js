import tokenService from "./tokenService";

const login = (creds) => {
  return fetch(`${process.env.REACT_APP_DB}/login`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Bad Credentials");
    })
    .then(({ token }) => tokenService.setToken(token));
};

function signup(user) {
  return fetch(`${process.env.REACT_APP_DB}/signup`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) return res.json();
      // probably duplicate email
      throw new Error("Email already taken");
    })
    .then(({ token }) => {
      tokenService.setToken(token);
    });
}

const getUser = () => {
  return tokenService.getUserFromToken();
};

const logout = () => {
  return tokenService.removeToken();
};

export default {
  signup,
  getUser,
  logout,
  login,
};
