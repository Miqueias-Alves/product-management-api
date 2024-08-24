import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const findAll = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const categories = await prisma.categories.findMany();
    res.status(200).json(categories);
}
