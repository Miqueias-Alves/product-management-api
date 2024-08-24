import { Router } from "express";

import {findAll, findById, create} from "../controller/productController";

const productRouter: Router = Router();

productRouter.get("/", findAll);
productRouter.post("/", create);
productRouter.get("/:id", findById);

export default productRouter;
