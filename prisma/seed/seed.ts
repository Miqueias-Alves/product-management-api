import { PrismaClient  } from "@prisma/client";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient();

const categories = [
  {
    id: uuid(),
    name: "Electronics",
  },
  {
    id: uuid(),
    name: "Clothing",
  },
  {
    id: uuid(),
    name: "Books",
  },
  {
    id: uuid(),
    name: "Furniture",
  },
  {
    id: uuid(),
    name: "Toys",
  },
];

async function main() {
  await prisma.categories.createMany({
    data: categories,
  });

  console.log("Categories created successfully");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
