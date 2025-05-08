const { hotel } = require("../database/connection");

exports.fetchHotels = async (req, res) => {
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
};

exports.addHotel = async (req, res) => {
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
};
exports.updateHotel = (req, res) => {
  res.json({
    message: "updated successfully",
  });
};
exports.deleteHotel = (req, res) => {
  res.json({
    message: "Deleted successfully",
  });
};
