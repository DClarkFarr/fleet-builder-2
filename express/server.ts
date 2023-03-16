import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import registerApiRoutes from "./routes/apiRoutes";
import registerWebRoutes from "./routes/webRoutes";

const app: Express = express();
const port = process.env.PORT;

registerApiRoutes(app);
registerWebRoutes(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
