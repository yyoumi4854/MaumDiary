import instance from ".";
import * as Type from "@/types";

// 메일 발송
export const sendCertification = async ({ email, target }: Type.SendCertification) => {
    const result = await instance.post("/certification/send", {
        email,
        target,
    });

    return result;
};

// 코드 인증
export const certifyCertification = async ({ email, code }: Type.CertifyCertification) => {
    const result = await instance.post("/certification/certify", {
        email,
        code,
    });

    return result;
};

// 회원가입
export const newAccount = async ({ nickname, email, userID, password }: Type.NewAccount) => {
    const result = await instance.post("/account/new", {
        nickname,
        email,
        userID,
        password,
    });

    return result;
};
