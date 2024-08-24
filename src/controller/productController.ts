import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import * as ProductService from "../service/productService";
import * as CategoryService from "../service/categoryService";
import { Product } from "../model/productModel";
import { productValidate } from "../validations/productValidate";

export const findAll = async (req: Request, res: Response): Promise<void> => {
  const products = await ProductService.findAll();
  res.status(200).json(products);
}

export const findById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const product = await ProductService.findById(id);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(product);
}

export const create = async (req: Request, res: Response): Promise<void> => {
  const { error } = productValidate.validate(req.body, { abortEarly: false });

  if (error) {
    console.log(error);
    res.status(400).json({ 
      message: "Validation error",
      details: error.details.map(detail => detail.message)
     });
    return;
  }

  try {
    const id = uuid();
    const { 
      name,
      price,
      description,
      expirationDate,
      image,
      categoryId
    } = req.body;

    // check if expiration date is > than today
    const date = new Date(expirationDate);
    const today = new Date();

    if (date < today) {
      res.status(400).json({ message: 'Expiration date must be greater than today' });
      return;
    }

    const categoryExist = await CategoryService.findById(categoryId);

    if (!categoryExist) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    const data: Product = {
      id,
      name,
      price,
      description,
      expirationDate,
      image,
      categoryId
    };

    const product = await ProductService.create(data);

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error' });
  }
}

export const update = async (req: Request, res: Response): Promise<void> => {
  const { error } = productValidate.validate(req.body, { abortEarly: false });

  if (error) {
    console.log(error);
    res.status(400).json({ 
      message: "Validation error",
      details: error.details.map(detail => detail.message)
     });
    return;
  }

  try {
    const id = req.params.id;
    const { 
      name,
      price,
      description,
      image,
      expirationDate,
      categoryId
    } = req.body;

    const productExist = await ProductService.findById(id);

    if (!productExist) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    // check if expiration date is > than today
    const date = new Date(expirationDate);
    const today = new Date();

    if (date < today) {
      res.status(400).json({ message: 'Expiration date must be greater than today' });
      return;
    }

    const categoryExist = await CategoryService.findById(categoryId);

    if (!categoryExist) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    const data: Product = {
      id,
      name,
      price,
      description,
      expirationDate,
      image,
      categoryId
    };

    const product = await ProductService.update(id, data);

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error' });
  }
}

export const remove = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  const productExist = await ProductService.findById(id);

  if (!productExist) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  const product = await ProductService.remove(id);

  res.status(200).json({ message: `Product '${product?.name}' removed!` });
}
