const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.gvcawfuagculqsxztyjg:HellYeahBro123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.hotel = require("./models/hotelModel")(sequelize, DataTypes);
db.client = require("./models/clientModel")(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("unable to connect database", error);
  });

sequelize.sync({ alter: false }).then(() => {
  console.log("migration completed");
});

module.exports = db;
