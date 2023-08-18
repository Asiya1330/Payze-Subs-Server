const BaseModel = require('./BaseModel');
const NotificationModel = require('./NotificationModel')

class Notification extends BaseModel {
  constructor() {
    super(NotificationModel);
  }

}

module.exports = new Notification();
