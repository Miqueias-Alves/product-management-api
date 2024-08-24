import Joi from "joi";
import { Category } from "../model/categoryModel";

export const categoryValidate = Joi.object<Category>({
  name: Joi.string().max(100).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.max": "Name must have a maximum of 100 characters",
    "any.required": "Name is required",
  }),
});
