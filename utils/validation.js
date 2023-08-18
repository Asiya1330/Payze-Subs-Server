const Joi = require("joi");

const subscriptionSchema = Joi.object({
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  sDate: Joi.date().iso().required(),
  eDate: Joi.date().iso().required(),
  status: Joi.string().valid("active", "inactive").required(),
  country: Joi.string().required(),
  amount: Joi.number().min(0).required(),
  currency: Joi.string().required(),
  email: Joi.string().email().required(),
  city: Joi.string().required(),
  driverId: Joi.string().allow("").optional(),
  id: Joi.number(),
}).options({ allowUnknown: false });

const packageSchema = Joi.object({
  country: Joi.string().required(),
  city: Joi.string().required(),
  amount: Joi.number().min(0).required(),
  currency: Joi.string().required(),
}).options({ allowUnknown: false });

const notificationSchema = Joi.object({
  subscriptionId: Joi.string().required(),
  isRead: Joi.bool(),
}).options({ allowUnknown: false });

module.exports = {
  validateSubscription: (data) => subscriptionSchema.validate(data),
  validatePackage: (data) => packageSchema.validate(data),
  validateNotification: (data) => notificationSchema.validate(data),
};
