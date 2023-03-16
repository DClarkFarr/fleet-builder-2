import { Express, NextFunction, Request, Response, Router } from "express";
import { ApiError } from "../types/Errors";
import { registerRouter } from "../methods/routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

router.all("*", (req, res) => {
  throw new ApiError("Route Not Found", 404);
});

router.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).send({ error: err.message });
});

const registerRoutes = (app: Express) => {
  registerRouter(app, router, "/api");
};

export default registerRoutes;
