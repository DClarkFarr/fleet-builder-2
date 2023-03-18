import { Express, NextFunction, Request, Response, Router } from "express";
import { ApiError } from "../types/Errors";
import { registerRouter } from "../methods/routes";
import { json } from "body-parser";
import { User } from "../models/User";
import cors from "cors";

const router = Router();

router.use(
    cors({
        credentials: true,
        origin(origin, callback) {
            callback(null, ["http://localhsot:8000", "http://localhost:5173"]);
        },
    })
);
router.use(json());

router.get("/", (req, res) => {
    res.json({
        message: "Hello World!",
    });
});

router.post("/auth/login", async (req, res, next) => {
    var body = req.body;

    if (!body.email || !body.password) {
        return next(new ApiError("Email and password are required", 400));
    }

    let user = await User.findByEmail(body.email);

    if (!user) {
        user = new User({
            name: body.name || body.email.split("@")[0],
            email: body.email,
            password: body.password,
        });
        await user.save();
    } else {
        if (!(await user.authenticate(body.password))) {
            return next(new ApiError("Invalid password", 401));
        }
    }

    req.session.user = user;

    req.session.save((err) => {
        console.log("session saved", err);
    });

    console.log("got user", user);

    res.json({
        user: user.toJSON(),
    });
});

router.get("/auth/me", async (req, res) => {
    if (!req.session.user) {
        return res.status(404).json({ message: "User not logged in" });
    }

    const user = await User.findByEmail(req.session.user.email);

    if (!user) {
        req.session.destroy((err) => {
            console.log("session destroyed", err);
        });
        return res.status(400).json({ message: "Session resetting" });
    }

    res.json({
        user: user.toJSON(),
    });
});

router.all("*", (req, res) => {
    throw new ApiError("Route Not Found", 404);
});

router.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({ message: err.message });
});

const registerRoutes = (app: Express) => {
    registerRouter(app, router, "/api");
};

export default registerRoutes;
