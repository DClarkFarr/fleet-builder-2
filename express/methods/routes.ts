import { Express, Router } from "express";

export function registerRouter(app: Express, router: Router, base: string) {
    console.log("registering", base);
    app.use(base, router);
}
