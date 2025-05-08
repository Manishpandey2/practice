const app = require("express")();
require("./database/connection");
app.get("/hotels", (req, res) => {
  res.json("message: hotels are fetched successfully");
});
app.post("/hotels", (req, res) => {
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
