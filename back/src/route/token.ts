import { Router } from "express";
import auth from "../middleware/auth";
import wrapRouter from "../lib/wrapRouter";
import tokenService from "../services/tokenService";

const tokenRouter = Router();

tokenRouter.get(
    "/refresh",
    wrapRouter(async (req, res) => {
        const { refreshToken } = req.cookies as { refreshToken: string };

        const { accessToken, newRefreshToken } = await tokenService.getAccessTokenAndRefreshToken(
            refreshToken
        );

        res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
        res.cookie("accessToken", accessToken, { httpOnly: true });

        return { statusCode: 200, content: true };
    })
);

export default tokenRouter;
