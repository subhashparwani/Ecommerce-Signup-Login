require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
var cors = require("cors");

const user_route = require("./routers/users");

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//API ROUTES
app.use("/api/users", user_route);

app.get("/", (req, res) => {
  res.send("Hello World! subhash chandar products");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
