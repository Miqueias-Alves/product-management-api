import { PrismaClient, Categories } from "@prisma/client";
import { v4 as uuid } from "uuid";
import { Category } from "../model/categoryModel";

export const findAll = async (): Promise<Categories[] | null> => {
  const prisma = new PrismaClient();
  const categories = await prisma.categories.findMany();
  return categories;
}

export const findById = async (id: string): Promise<Categories | null> => {
  const prisma = new PrismaClient();
  const categories = await prisma.categories.findUnique({
    where: {
      id: id
    }
  });
  return categories;
}

export const create = async (data: Category): Promise<Category> => {
  const prisma = new PrismaClient();
  const category = await prisma.categories.create({
    data: {
      id: uuid(),
      name: data.name
    }
  });
  return category
}

export const update = async (id: string, data: Category): Promise<Category | null> => {
  const prisma = new PrismaClient();
  const category = await prisma.categories.update({
    where: {
      id: id
    },
    data: {
      name: data.name,
      updated_at: new Date()
    }
  });
  return category;
}

export const remove = async (id: string): Promise<Categories | null> => {
  const prisma = new PrismaClient();
  const category = await prisma.categories.delete({
    where: {
      id: id
    }
  });
  return category;
}


export const findByName = async (name: string): Promise<Categories | null> => {
  const prisma = new PrismaClient();
  const category = await prisma.categories.findFirst({
    where: {
      name: name
    }
  });
  return category;
}
