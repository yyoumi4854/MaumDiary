import { Router, Request as Req, Response as Res } from "express";
import axios from "axios";

import wrapRouter from "../lib/wrapRouter";
import tokenService from "../services/tokenService";
import auth from "../middleware/auth";
import AppError from "../lib/AppError";
import accountService from "../services/accountService";

const accountRouter = Router();

accountRouter.post(
    "/ping",
    auth,
    wrapRouter((req: Req, res: Res) => {
        tokenService.updateRefreshToken(req.userID!);
        return Promise.resolve({ statusCode: 200, content: "pong" });
    })
);

//회원가입
accountRouter.post(
    "/new",
    wrapRouter(async (req: Req, res: Res) => {
        const { userID, password, email, nickname } = req.body;

        if ((userID && password && email && nickname) === undefined) {
            throw new AppError("BodyDataError");
        }
        const result = await accountService.register({
            nickname,
            email,
            userID,
            password,
        });

        return { statusCode: 201, content: result };
    })
);

// 로그인
accountRouter.post(
    "/login",
    wrapRouter(async (req: Req, res: Res) => {
        const { userID, password } = req.body;
        if ((userID && password) === undefined) {
            throw new AppError("BodyDataError");
        }

        const result = await accountService.login(userID, password);

        if (result !== null) {
            res.cookie("accessToken", result.accessToken, { httpOnly: true });
            res.cookie("refreshToken", result.refreshToken, { httpOnly: true });

            return { statusCode: 200, content: true };
        } else {
            return { statusCode: 200, content: false };
        }
    })
);

// 유저 데이터 가져오기
accountRouter.get(
    "/",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const result = await accountService.getUserByUserID(req.userID!);

        return { statusCode: 200, content: result };
    })
);

accountRouter.get(
    "/kakao",
    wrapRouter(async (req: Req, res: Res) => {
        const { code } = req.query;

        console.log(code);

        axios
            .post(
                "https://kauth.kakao.com/oauth/token",
                {
                    grant_type: "authorization_code",
                    client_id: "984bda20eb902967e5088317c9f5c468",
                    redirect_uri: "http://localhost:3002/api/account/kakao",
                    code,
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    },
                }
            )
            .then((res) => {
                console.log("성공함!");
                console.log(res.data);
                axios
                    .get("https://kapi.kakao.com/v2/user/me", {
                        headers: {
                            Authorization: `Bearer ${res.data.access_token}`,
                            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                        },
                    })
                    .then((res) => console.log("성공함!!!", res));
            })
            .catch((error) => {
                console.log("에러남!!!!!");
                console.log(error);
            });

        return { statusCode: 200, content: "hi" };
    })
);

// 로그아웃
accountRouter.delete(
    "/",
    wrapRouter(async (req: Req, res: Res) => {
        const result = await accountService.logout(req.userID!);

        res.cookie("refreshToken", "", { maxAge: -1 });
        res.cookie("accessToken", "", { maxAge: -1 });
        return { statusCode: 200, content: result };
    })
);

//아이디 찾기
accountRouter.post(
    "/user-id",
    wrapRouter(async (req: Req, res: Res) => {
        const { email, code } = req.body;

        if ((email && code) === undefined) {
            throw new AppError("BodyDataError");
        }

        const result = await accountService.getUserIDByCertification(email, code);

        return { statusCode: 200, content: result };
    })
);

//비밀번호 변경
accountRouter.put(
    "/password",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const { password } = req.body;

        if (password === undefined) {
            throw new AppError("BodyDataError");
        }

        const result = await accountService.changePassword(req.userID!, password);

        return { statusCode: 200, content: result };
    })
);

// 계정 인증
accountRouter.patch(
    "/certify",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const { isCertified } = req.body;

        if (isCertified === undefined) {
            throw new AppError("BodyDataError");
        }

        const result = await accountService.certify(req.userID!, isCertified);

        return { statusCode: 200, content: result };
    })
);

export default accountRouter;
