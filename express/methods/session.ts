import { Express } from "express";
import session from "express-session";
import FileStore from "session-file-store";

export const registerFileSession = (app: Express) => {
  const fileStoreOptions = {};
  const fileStore = FileStore(session);

  app.use(
    session({
      store: new fileStore(fileStoreOptions),
      secret: "fleet building is TIGHT",
      cookie: {
        httpOnly: false,
        secure: "auto",
        sameSite: "lax",
      },
    })
  );
};
