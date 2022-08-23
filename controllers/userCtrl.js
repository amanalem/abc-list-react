const User = require("../models/User");
const jwt = require("jsonwebtoken");
const SECRET = process.env.REACT_APP_SECRET;

const signup = async (req, res) => {
  console.log("Signup function hit!");
  const user = new User(req.body);
  try {
    await user.save();
    // TODO: Send back a JWT instead of the user
    // res.json(user);
    const token = createJWT(user);
    res.json({ token });
    console.log(user);
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err, { msg: "email already linked to an account" });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "Bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "Wrong password" });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

const createJWT = (user) => {
  return jwt.sign({ user }, SECRET, { expiresIn: "72h" });
};

module.exports = {
  login,
  signup,
};
