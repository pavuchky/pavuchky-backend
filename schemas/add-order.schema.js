const Joi = require('joi');
const { PHONE_REGEXP } = require('../utils/index');
const { LOOPSCHECKBOX, BASE_TYPE, MATERIAL_TYPE } = require('../enums');


const OrderSchema = Joi.object({
    name: Joi.string().trim().min(3).max(30).required().messages({
        'string.base': '"name" must be a string',
        'string.empty': '"name" is not allowed to be empty',
        'string.min': '"name" length must be at least {#limit} characters long',
        'string.max': '"name" length must be less than or equal to {#limit} characters long',
        'any.required': '"name" is required',
    }),
    comment: Joi.string().required().min(0).max(1000).messages({
        "string.min": `"name" should have a minimum length of {#limit}`,
        "string.max": `"name" should have a maximum length of {#limit}`,
    }),
    phone: Joi.string().trim().required().regex(PHONE_REGEXP).messages({
        'string.base': '"phone" must be a string',
        'string.empty': '"phone" is not allowed to be empty',
        'any.required': '"phone" is required',
        'string.pattern.base': '"phone" must be a valid phone number',
    }),
    position: Joi.string().trim().required().messages({
        'string.base': '"position" must be a string',
        'string.empty': '"position" is not allowed to be empty',
        'any.required': '"position" is required',
    }),
    militaryUnit: Joi.string().trim().required().messages({
        'string.base': '"militaryUnit" must be a string',
        'string.empty': '"militaryUnit" is not allowed to be empty',
        'any.required': '"militaryUnit" is required',
    }),
    gridSize: Joi.string().trim().required().messages({
        'string.base': '"gridSize" must be a string',
        'string.empty': '"gridSize" is not allowed to be empty',
        'any.required': '"gridSize" is required',
    }),
    typeBase: Joi.string().valid(...Object.values(BASE_TYPE)).required().messages({
        'string.base': '"typeBase" must be a string',
        'string.empty': '"typeBase" is not allowed to be empty',
        'any.required': '"typeBase" is required',
    }),
    material: Joi.string().valid(...Object.values(MATERIAL_TYPE)).required().messages({
        'string.base': '"material" must be a string',
        'string.empty': '"material" is not allowed to be empty',
        'any.required': '"material" is required',
    }),
    color: Joi.string().trim().required().messages({
        'string.base': '"color" must be a string',
        'string.empty': '"color" is not allowed to be empty',
        'any.required': '"color" is required',
    }),
    loops: Joi.string().valid(...Object.values(LOOPSCHECKBOX)).required().messages({
        'string.base': '"loops" must be a string',
        'string.empty': '"loops" is not allowed to be empty',
        'any.required': '"loops" is required',
        'any.only': '"loops" must be one of the allowed values',
    }),
});

module.exports = {
    OrderSchema,
};