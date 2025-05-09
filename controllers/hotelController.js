const { where } = require("sequelize");
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
exports.updateHotel = async (req, res) => {
  const id = req.params.id;
  const { name, address, price, owner } = req.body;
  await hotel.update(
    {
      name,
      address,
      price,
      owner,
    },
    {
      where: {
        id,
      },
    }
  );
  res.json({
    message: "updated successfully",
  });
};
exports.deleteHotel = async (req, res) => {
  const id = req.params.id;
  await hotel.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Deleted successfully",
  });
};
