import { IUserDocument } from "../models/User";

declare module "express-session" {
    interface SessionData {
        user?: IUserDocument;
    }
}
