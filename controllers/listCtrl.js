const cron = require("node-cron");
const Item = require("../models/Item");

cron.schedule(
  " 0 */4 * * *",
  async () => {
    console.log("CronJob hit");
    aCheck();
    bCheck();
    cCheck();
  },
  false,
  "America/New_York"
);

const aCheck = async () => {
  let date = new Date();
  let dateCheck = await date.setDate(date.getDate() - 1);
  let items = await Item.updateMany(
    { letter: "a", updatedAt: { $lte: dateCheck } },
    { isOverdue: true }
  );
  console.log(items);
};

const bCheck = async () => {
  let date = new Date();
  let dateCheck = await date.setDate(date.getDate() - 2);
  let items = await Item.updateMany(
    { letter: "b", updatedAt: { $lte: dateCheck } },
    { letter: "a" }
  );
  console.log(items);
};

const cCheck = async () => {
  let date = new Date();
  let dateCheck = await date.setDate(date.getDate() - 7);
  await Item.updateMany(
    { letter: "c", updatedAt: { $lte: dateCheck } },
    { letter: "b" }
  );
};

const index = async (req, res) => {
  console.log("index all function hit");

  let items = await Item.find({ owner: req.query.owner });
  res.json(items);
};

const create = (req, res) => {
  Item.create({
    entry: req.body.entry,
    owner: req.body.owner,
    letter: req.body.letter,
  }).then((item) => {
    res.json(item);
  });
};

const update = async (req, res) => {
  console.log(req.body);
  let item = await Item.findByIdAndUpdate(req.body.id, {
    entry: req.body.entry,
    letter: req.body.letter,
  });
  res.json(item);
};

const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json("Item deleted");
};

module.exports = {
  index,
  create,
  update,
  delete: deleteItem,
};
