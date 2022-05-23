const Joi = require('joi');

const addBankSchema = Joi.object({
  name: Joi.string().required(),
  account: Joi.number().required(),
  isActive: Joi.boolean().required(),
});

module.exports = { addBankSchema };
