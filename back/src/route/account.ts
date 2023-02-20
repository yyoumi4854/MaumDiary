import { Router, Request as Req, Response as Res } from "express";
import axios from "axios";
import dayjs from "dayjs";

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

accountRouter.get("/kakao", async (req: Req, res: Res) => {
    const { code } = req.query;

    const auth = await axios.post<{
        access_token: string;
        refresh_token: string;
        token_type: "bearer";
        id_token: string;
        expires_in: number;
        refresh_token_expires_in: number;
        scope: string;
    }>(
        "https://kauth.kakao.com/oauth/token",
        {
            grant_type: "authorization_code",
            client_id: "984bda20eb902967e5088317c9f5c468",
            redirectUri: "http://localhost:3002/api/account/kakao",
            code,
        },
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
        }
    );

    const userData = await axios.get<{
        id: number;
        connected_at: string;
        properties: { nickname: string };
        kakao_account: {
            profile_nickname_needs_agreement: boolean;
            profile: {
                nickname: string;
            };
        };
    }>("https://kapi.kakao.com/v2/user/me", {
        headers: {
            Authorization: `Bearer ${auth.data.access_token}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
    });

    const Stringify_id = String(userData.data.id);

    let loginResult = await accountService.login(Stringify_id, Stringify_id);

    if (loginResult === null) {
        await accountService.register({
            userID: Stringify_id,
            password: Stringify_id,
            email: `${Stringify_id}@kakao_user.com`,
            nickname: userData.data.properties.nickname,
        });

        loginResult = await accountService.login(Stringify_id, Stringify_id);
    }

    res.cookie("accessToken", loginResult!.accessToken, { httpOnly: true });
    res.cookie("refreshToken", loginResult!.refreshToken, { httpOnly: true });

    res.cookie("kakao_accessToken", auth.data.access_token, {
        expires: dayjs().add(auth.data.expires_in, "second").toDate(),
    });
    res.cookie("kakao_refreshToken", auth.data.refresh_token, {
        expires: dayjs().add(auth.data.refresh_token_expires_in, "second").toDate(),
    });

    res.redirect(302, "http://localhost:3001/auth/kakao");
});

// 로그아웃
accountRouter.delete(
    "/",
    auth,
    wrapRouter(async (req: Req, res: Res) => {
        const result = await accountService.logout(req.userID!);

        res.cookie("refreshToken", "", { maxAge: -1 });
        res.cookie("accessToken", "", { maxAge: -1 });
        res.cookie("kakao_refreshToken", "", { maxAge: -1 });
        res.cookie("kakao_accessToken", "", { maxAge: -1 });
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
