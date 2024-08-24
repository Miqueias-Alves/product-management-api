import { PrismaClient, Products } from "@prisma/client";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { Product }  from "../model/productModel";

export const findAll = async (): Promise<Products[] | null> => {
  const prisma = new PrismaClient();
  const products = await prisma.products.findMany();
  return products;
}

export const findById = async (id: string): Promise<Products | null> => {
  const prisma = new PrismaClient();
  const product = await prisma.products.findUnique({
    where: {
      id: id
    }
  });
  return product;
}

export const create = async (data: Product): Promise<Products> => {
  const prisma = new PrismaClient();
  // covert string to date ex: 12/12/2021 to 2021-12-12 00:00:00
  const date = moment(data.expirationDate, "DD/MM/YYYY").format("YYYY-MM-DDTHH:mm:ss.SSS");

  const product = await prisma.products.create({
    data: {
      id: uuid(),
      name: data.name,
      price: data.price,
      description: data.description,
      expirationDate: new Date(date),
      image: data.image,
      category_id: data.categoryId
    }
  });
  return product;
}
