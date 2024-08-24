import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/root";

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(error.errorCode).json({ 
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors
  });
}
