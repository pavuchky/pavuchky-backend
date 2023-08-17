const Joi = require('joi');
const { PHONE_REGEXP_PARTNER, EMAIL_REGEXP } = require('../utils/index');



const PartnerSchema = Joi.object({
    name: Joi.string().trim().min(3).max(30).required().messages({
        'string.base': '"name" must be a string',
        'string.empty': '"name" is not allowed to be empty',
        'string.min': '"name" length must be at least {#limit} characters long',
        'string.max': '"name" length must be less than or equal to {#limit} characters long',
        'any.required': '"name" is required',
    }),
    comment: Joi.string().min(0).max(1000).messages({
        "string.min": `"comment" should have a minimum length of {#limit}`,
        "string.max": `"comment" should have a maximum length of {#limit}`,
    }),
    phone: Joi.string().trim().required().regex(PHONE_REGEXP_PARTNER).messages({
        'string.base': '"phone" must be a string',
        'string.empty': '"phone" is not allowed to be empty',
        'any.required': '"phone" is required',
        'string.pattern.base': '"phone" must be a valid phone number',
    }),
    email: Joi.string().trim().required().regex(EMAIL_REGEXP).messages({
        'string.base': 'Invalid email',
        'string.empty': 'Email is not allowed to be empty',
        'any.required': 'Email is required',
        'string.pattern.base': 'Invalid email format',
    }),
    company: Joi.string().min(3).max(30).trim().required().messages({
        'string.base': '"company" must be a string',
        'string.empty': '"company" is not allowed to be empty',
        'any.required': '"company" is required',
    }),

});

module.exports = {
    PartnerSchema,
};