const express = require("express");
const app = express();
require("./database/connection");
app.use(express.json());

const hotelRoute = require("./routes/hotelRoute");
const clientRoute = require("./routes/clientRoute");

app.use("", hotelRoute);
app.use("/client", clientRoute);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
