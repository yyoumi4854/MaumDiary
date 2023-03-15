import instance from ".";
import { Check, USER_DATA } from "@/types";

export const login = async ({ userID, password }: { userID: string; password: string }) => {
    const result = await instance.post<boolean>("http://localhost:3002/api/account/login", {
        userID,
        password,
    });

    return result;
};

export const logout = async () => {
    const result = await instance.delete("http://localhost:3002/api/account");

    return result;
};

export const fetchUserData = async () => {
    const result = await instance.get<USER_DATA>("http://localhost:3002/api/account");

    return result;
};

export const fetchUserDataForKakao = async () => {
    const result = await instance.get<USER_DATA>("http://localhost:3002/api/account");

    return result;
};

export const refetchToken = async () => {
    const result = await instance.get<boolean>("http://localhost:3002/api/token/refresh");

    return result;
};

// 아이디 찾기
export const findUserID = async ({ email, code }: { email: string; code: string }) => {
    const result = await instance.post("/account/user-id", {
        email,
        code,
    });

    return result;
};

// 아이디 / 닉네임 / 이메일 중복 검사
export const checkAccount = async ({ target, value }: Check) => {
    const result = await instance.post("/account/check", {
        target,
        value,
    });

    return result;
};

// 비밀번호 변경
export const savePassword = async ({ password }: { password: string }) => {
    const result = await instance.put("/account/password", {
        password,
    });

    return result;
};
