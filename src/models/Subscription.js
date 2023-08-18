const BaseModel = require("./BaseModel");
const Model = require("./SubscriptionModel");
class Subscription extends BaseModel {
  constructor() {
    super(Model);
  }

}

module.exports = new Subscription();
