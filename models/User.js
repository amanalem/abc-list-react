const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("dotenv").config();

const SALT_ROUNDS = process.env.REACT_APP_SALT_ROUNDS;

const opts = {
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
};

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
  },
  opts
);

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been changed
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
