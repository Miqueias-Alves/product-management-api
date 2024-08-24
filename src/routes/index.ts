import { Router } from "express";

// importa todas as rotas
import productRouter from "./productRoute";
import categorieRouter from "./categorieRoute";

const router: Router = Router();

// define a rota principal de cada recurso
router.use("/products", productRouter);
router.use("/categories", categorieRouter);

export default router;
