const Notification = require("../models/Notification");
const { validateNotification } = require("../../utils/validation");
const BaseController = require("./BaseController");

class NotificationController extends BaseController {
  constructor() {
    super(Notification, validateNotification);
  }
  
  markRead = async (req, res) => {
    try {
      req.body["isRead"] = true;
      const items = await this.update(req, res);
      res.status(200).json(items);
    } catch (error) {
      this.catchError(res, error, "Failed to retrieve items.");
    }
  };
}

module.exports = new NotificationController();
