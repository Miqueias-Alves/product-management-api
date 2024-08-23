import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export default routes;