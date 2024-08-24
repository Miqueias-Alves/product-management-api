import { Router } from "express";

import { findAll, findById, create, update } from "../controller/categorieController";

const categorieRouter: Router = Router();

categorieRouter.get("/", findAll);
categorieRouter.post("/", create);
categorieRouter.get("/:id", findById);
categorieRouter.put("/:id", update);

export default categorieRouter;
