import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { BadRequestException } from "../exceptions/badRequest";
import { HttpStatusCode } from "../exceptions/root";

export const findAll = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const products = await prisma.products.findMany();
    res.status(200).json(products);
}

export const findById = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: `GET /getbyis/${req.params.id}` });
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const prisma = new PrismaClient();
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

    // covert string to date ex: 12/12/2021 to 2021-12-12 00:00:00
    const date = moment(expirationDate, 'DD/MM/YYYY').format('YYYY-MM-DDTHH:mm:ss');

    const product = await prisma.products.create({
      data: {
        id: id,
        name: name,
        price: price,
        description: description,
        expirationDate: new Date(date),
        image: image,
        category_id: categoryId
      }
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error' });
  }
}
