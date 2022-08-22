const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    entry: String,
    isDone: { type: Boolean, default: false },
    isOverdue: { type: Boolean, default: false },
    letter: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
