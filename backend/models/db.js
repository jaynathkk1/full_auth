const mongoose = require("mongoose");
const mongo_url = process.env.MONGODB_URL;
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));
