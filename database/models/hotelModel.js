const hotelModel = (sequelize, DataTypes) => {
  const Hotel = sequelize.define("Hotel", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Hotel;
};

module.exports = hotelModel;
