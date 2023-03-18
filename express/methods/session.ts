import { Express } from "express";
import session from "express-session";
import FileStore from "session-file-store";

export const registerFileSession = (app: Express) => {
    const fileStoreOptions = {};
    const fileStore = FileStore(session);
    app.set("trust proxy", 1); // trust first proxy

    app.use(
        session({
            store: new fileStore(fileStoreOptions),
            secret: "fleet building is TIGHT",
            resave: false,
            saveUninitialized: true,
            cookie: {
                httpOnly: false,
                secure: "auto",
                sameSite: "lax",
            },
        })
    );
};
