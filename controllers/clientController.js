const { where } = require("sequelize");
const { client } = require("../database/connection");

exports.fetchClient = async (req, res) => {
  const clients = await client.findAll();
  if (clients.length == 0) {
    return res.json({
      message: "There is no client yet",
    });
  }
  res.json({
    message: "client fetched successfully",
    clients,
  });
};

exports.addClient = async (req, res) => {
  const { name, address, contactNumber } = req.body;
  console.log(req.body);
  if (!name || !address || !contactNumber) {
    return res.json({
      message: "All fields are required",
    });
  }
  await client
    .create({
      name,
      address,
      contactNumber,
    })
    .then(() => {
      res.json({
        message: "client added successfully",
      });
    })
    .catch((error) => {
      console.log("Error while adding the client", error);
      res.json({
        message: "error",
      });
    });
};

exports.fetchSingleClient = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = await client.findByPk(id);
  res.json({
    message: "Single client fetched successfully",
    data,
  });
};
exports.updateClient = async (req, res) => {
  const id = req.params.id;
  const { name, address, contactNumber } = req.body;
  await client.update(
    {
      name: name,
      address: address,
      contactNumber: contactNumber,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.json({
    message: "successfully update",
  });
};

exports.deleteClient = async (req, res) => {
  const id = req.params.id;
  await client.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "Successfully deleted",
  });
};
