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

exports.updateClient = (req, res) => {
  res.json({
    message: "successfully update",
  });
};

exports.deleteClient = (req, res) => {
  res.json({
    message: "Successfully deleted",
  });
};
