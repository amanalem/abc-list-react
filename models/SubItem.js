const mongoose = require("mongoose");

const subItemSchema = new mongoose.Schema({
  entry: String,
  isDone: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Item", require: true },
});

const subItem = mongoose.model("Sub-Item", subItemSchema);
module.exports = subItem;
