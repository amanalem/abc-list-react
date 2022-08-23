const mongoose = require("mongoose");

require("dotenv").config();

const mongoURI = process.env.REACT_APP_MONGODB;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
  })
  .then((instance) => {
    console.log(`connected on ${instance.connections[0].name}`);
  })
  .catch((err) => console.log(`ERROR: See details, ${err}`));
