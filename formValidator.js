const { celebrate, Joi, Segments } = require('celebrate');

const validateForm = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    contact: Joi.string().required(),
    message: Joi.string().required(),
  }),
});

module.exports = validateForm;
