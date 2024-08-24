import { Router } from "express";

import {findAll, findById, create} from "../controllers/productController";

const productRouter: Router = Router();

productRouter.get("/", findAll);
productRouter.post("/", create);

export default productRouter;
