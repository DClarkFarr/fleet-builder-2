import { Express, Router } from "express";
import { registerRouter } from "../methods/routes";

const router = Router();

router.get("*", (req, res) => {
  res.send("<h1>This is an h1</h1>");
});

const registerWebRoutes = (app: Express) => {
  registerRouter(app, router, "/");
};

export default registerWebRoutes;
