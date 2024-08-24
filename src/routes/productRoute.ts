import { Router } from "express";

import {findAll, findById, create, update, remove, search} from "../controller/productController";

const productRouter: Router = Router();

productRouter.get("/", findAll);
productRouter.post("/", create);
productRouter.get("/:id", findById);
productRouter.put("/:id", update);
productRouter.delete("/:id", remove);
productRouter.get("/search/search", search);

export default productRouter;
