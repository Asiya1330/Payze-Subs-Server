const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Subscription = sequelize.define('Subscription', {
  fname: DataTypes.STRING,
  lname: DataTypes.STRING,
  sDate: DataTypes.DATE,
  eDate: DataTypes.DATE,
  status: DataTypes.STRING,
  country: DataTypes.STRING,
  amount: DataTypes.FLOAT,
  currency: DataTypes.STRING,
  email: DataTypes.STRING,
  city: DataTypes.STRING,
  driverId: DataTypes.STRING,
});

module.exports = Subscription;
