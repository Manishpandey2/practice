const { hotel } = require("./database/connection");

const express = require("express");
const app = express();
require("./database/connection");
app.use(express.json());

app.get("/hotels", async (req, res) => {
  const info = await hotel.findAll();
  if (info.length === 0) {
    return res.json({
      message: "There is no any hotel yet",
    });
  }
  res.json({
    message: "Hotels  are fetched successfully",
    info,
  });
});
app.post("/hotels", async (req, res) => {
  const { name, address, price, owner } = req.body;
  if (!name || !address || !price || !owner) {
    return res.json({
      message: "All the fields are  required",
    });
  }
  await hotel.create({
    name,
    address,
    price,
    owner,
  });
  res.json({
    message: "Hotel added successfully",
  });
});

app.patch("/hotels/:id", (req, res) => {
  res.json({
    message: "updated successfully",
  });
});

app.delete("/hotels/:id", (req, res) => {
  res.json({
    message: "Deleted successfully",
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
