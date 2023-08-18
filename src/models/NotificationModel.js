const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Notification = sequelize.define("Notification", {
  subscriptionId: DataTypes.STRING,
  isRead: DataTypes.BOOLEAN,
});

module.exports = Notification;
