const { ApiValidationError } = require('../core/error');

const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) { throw new ApiValidationError(error.message); }
  next();
};

module.exports = { validateBody };
