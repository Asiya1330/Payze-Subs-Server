require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const subscriptionRoutes = require("./src/routes/subscriptionRoutes");
const packageRoutes = require("./src/routes/packageRoutes");
const notificationRoutes = require("./src/routes/NotificationRoutes");
const PORT = process.env.PORT || 50000;

const sequelize = require("./src/db"); // Adjust the path as needed
const { QueryTypes } = require("sequelize");
(async () => {
  try {
    await sequelize.authenticate();
    const query = 'SELECT * FROM Notifications';
    const notifications = await sequelize.query(query, { type: QueryTypes.SELECT });

    console.log('All Notifications:', notifications);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.use(express.json());
app.use(express.static("./public"))
app.use(cors({ origin: process.env.FE_APP_URL }));

app.get("/", (req, res) => {
  res.send("App working!");
});

app.use("/subscriptions", subscriptionRoutes);
app.use("/packages", packageRoutes);
app.use("/notifications", notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
