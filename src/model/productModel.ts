interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  expirationDate: Date;
  image: string;
  categoryId: string;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export { Product };