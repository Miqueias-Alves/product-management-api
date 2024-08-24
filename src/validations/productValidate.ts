import Joi from "joi";
import { Product } from "../model/productModel";

export const productValidate = Joi.object<Product>({
  name: Joi.string().max(50).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.max": "Name must have a maximum of 50 characters",
    "any.required": "Name is required",
  }),
  price: Joi.number().required().positive().messages({
    "number.base": "Price must be a number",
    "any.required": "Price is required",
    "number.positive": "Price must be a positive number",
  }),
  description: Joi.string().max(200).required().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description cannot be empty",
    "string.max": "Description must have a maximum of 200 characters",
    "any.required": "Description is required",
  }),
  expirationDate: Joi.string().required().messages({
    "string.base": "Expiration date must be a string",
    "string.empty": "Expiration date cannot be empty",
    "any.required": "Expiration date is required",
  }),
  image: Joi.string().required().messages({
    "string.base": "Image must be a string",
    "string.empty": "Image cannot be empty",
    "any.required": "Image is required",
  }),
  categoryId: Joi.string().required().messages({
    "string.base": "Category id must be a string",
    "string.empty": "Category id cannot be empty",
    "any.required": "Category id is required",
  }),
});
