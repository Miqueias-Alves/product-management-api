import { Router } from "express";

import {findAll, findById, create, update, remove} from "../controller/productController";

const productRouter: Router = Router();

productRouter.get("/", findAll);
productRouter.post("/", create);
productRouter.get("/:id", findById);
productRouter.put("/:id", update);
productRouter.delete("/:id", remove);

export default productRouter;
