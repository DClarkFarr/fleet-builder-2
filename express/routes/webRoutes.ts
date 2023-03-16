import { static as staticDir, Express, Router } from "express";
import { registerRouter } from "../methods/routes";
import path from "path";

const router = Router();

router.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "web", "dist", "index.html")
  );
});

const registerWebRoutes = (app: Express) => {
  app.use(staticDir(path.join(__dirname, "..", "..", "..", "web", "dist")));
  registerRouter(app, router, "/");
};

export default registerWebRoutes;
