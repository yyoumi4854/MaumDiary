import { UserINFO, Send } from "@/types";
import instance from ".";

// 메일 발송
export const sendCertification = async ({ email, target }: Send) => {
    const result = await instance.post("/certification/send", {
        email,
        target,
    });

    return result;
};

// 코드 인증
export const certifyCertification = async ({ email, code }: { email: string; code: string }) => {
    const result = await instance.post("/certification/certify", {
        email,
        code,
    });

    return result;
};

// 회원가입
export const newAccount = async ({ nickname, email, userID, password }: UserINFO) => {
    const result = await instance.post("/account/new", {
        nickname,
        email,
        userID,
        password,
    });

    return result;
};
