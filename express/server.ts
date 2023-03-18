import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import { connectToDatabase } from "./methods/database";
import { registerFileSession } from "./methods/session";
import registerApiRoutes from "./routes/apiRoutes";
import registerWebRoutes from "./routes/webRoutes";

const app: Express = express();
const port = process.env.PORT;

registerFileSession(app);
registerApiRoutes(app);
registerWebRoutes(app);

connectToDatabase().then(() => {
    console.log("connected to database");
    app.listen(port, () => {
        console.log(
            `⚡️[server]: Server is running at http://localhost:${port}`
        );
    });
});
