import { Router } from "express";

import { findAll } from "../controllers/categorieController";

const categorieRouter: Router = Router();

categorieRouter.get("/", findAll);

export default categorieRouter;
