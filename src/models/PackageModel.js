const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Package = sequelize.define("Package", {
  country: DataTypes.STRING,
  city: DataTypes.STRING,
  amount: DataTypes.INTEGER,
  currency: DataTypes.STRING,
});

module.exports = Package;
