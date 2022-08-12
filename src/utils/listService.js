const index = (userId) => {
  return fetch(`http://localhost:8000` + `/my-list?owner=${userId}`, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(userId),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Failed to index list items");
  });
};

const create = () => {};

const update = () => {};

const destroy = () => {};

export default {
  index,
  create,
  update,
  destroy,
};
