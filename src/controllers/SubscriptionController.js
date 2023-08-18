const BaseController = require("./BaseController");
const SubscriptionModel = require("../models/Subscription");
const { validateSubscription } = require("../../utils/validation");

const { Op } = require("sequelize");

const Notification = require("../models/NotificationModel");
const BaseModel = require("../models/BaseModel");
const Subscription = require("../models/SubscriptionModel");

class SubscriptionController extends BaseController {
  constructor() {
    super(SubscriptionModel, validateSubscription);
  }

  checkSubs = async (req, res) => {
    try {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const subscriptionsEndingTomorrow = await Subscription.findAll({
        where: {
          eDate: {
            [Op.lt]: tomorrow, // Subscriptions ending before tomorrow
          },
        },
      });

      const existingNotifications = await Notification.findAll({
        where: {
          subscriptionId: subscriptionsEndingTomorrow.map((sub) => sub.id),
        },
      });

      const existingSubscriptionIds = existingNotifications.map(
        (notif) => notif.subscriptionId
      );

      const NotificationModel = new BaseModel(Notification);
      for (const subscription of subscriptionsEndingTomorrow) {
        if (!existingSubscriptionIds.includes(subscription.id)) {
          await NotificationModel.create({
            subscriptionId: subscription.id,
          });
        }
      }

      res.status(200).json({ message: "Notifications added successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred." });
    }
  };
}

module.exports = new SubscriptionController();
