const BASE_URL = "http://localhost:8000/my-list";
const axios = require("axios");

const create = (item) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(item),
  };
  return fetch(BASE_URL, options).then((res) => res.json());
};

const index = (creds) => {
  return fetch(`${BASE_URL}?owner=${creds}`).then((res) => res.json());
};

const deleteItem = (id) => {
  axios.delete(`${BASE_URL}?_id=${id}`).then((res) => {
    res.json("item deleted");
  });
};

export default {
  create,
  index,
  delete: deleteItem,
};
