const express = require("express");
const cors = require("cors");
const AuthRouter = require("./routes/authRouter")
const productsRouter = require("./routes/productRouter")
const body_parser = require("body-parser");
const app = express();


require("./models/db");
require("dotenv").config();
const port = process.env.PORT;



app.get("/", (req, res) => {
  res.send("This is server side");
});

app.use(cors());
app.use(body_parser.json());
app.use('/auth',AuthRouter);
app.use('/products',productsRouter);



app.listen(port, () => {
  console.log(`server running on ${port}`);
});
