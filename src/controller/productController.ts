import { Request, Response, NextFunction } from "express";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { BadRequestException } from "../exceptions/badRequest";
import { HttpStatusCode } from "../exceptions/root";
import * as ProductService from "../service/productService";
import { Product } from "../model/productModel";

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

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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

    if (!name || !price || !description || !expirationDate || !image || !categoryId) {
      next(new BadRequestException("All fields are required", HttpStatusCode.BAD_REQUEST));
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
