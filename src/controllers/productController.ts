import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const findAll = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const products = await prisma.products.findMany();
    res.status(200).json(products);
}

export const findById = async (req: Request, res: Response) => {
  res.status(200).json({ message: `GET /getbyis/${req.params.id}` });
}

export const create = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const { name, price } = req.body;
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
}
