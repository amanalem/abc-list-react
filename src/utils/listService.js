const BASE_URL = "http://localhost:3001/my-list";
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

const update = (data) => {
  const options = {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(`${BASE_URL}/${data.id}`, options).then((res) => res.json());
};

const deleteItem = (id) => {
  // axios.delete(`${BASE_URL}?_id=${id}`).then((res) => {
  //   res.json("item deleted");
  // });
  console.log(id);

  const options = {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  };
  return fetch(`${BASE_URL}/${id}`, options).then(() => {
    console.log("Item deleted");
  });
};

export default {
  create,
  index,
  delete: deleteItem,
  update,
};
