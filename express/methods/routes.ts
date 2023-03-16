import { Express, Router } from "express";

export function registerRouter(app: Express, router: Router, base: string) {
  app.use(base, router);
}
