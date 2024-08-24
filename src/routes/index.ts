import { Router } from "express";

// importa todas as rotas
import productRouter from "./productRoute";

const router: Router = Router();

// define a rota principal de cada recurso
router.use("/products", productRouter);

export default router;
