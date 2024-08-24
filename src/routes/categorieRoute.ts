import { Router } from "express";

import { findAll, findById, create } from "../controller/categorieController";

const categorieRouter: Router = Router();

categorieRouter.get("/", findAll);
categorieRouter.post("/", create);
categorieRouter.get("/:id", findById);

export default categorieRouter;
