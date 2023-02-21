import instance from ".";
import { USER_DATA } from "@/types";

export const login = async ({ userID, password }: { userID: string; password: string }) => {
    const result = await instance.post("http://localhost:3002/api/account/login", {
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

// 아이디 찾기
export const findUserID = async ({ email, code }: { email: string; code: string }) => {
    const result = await instance.post("/account/user-id", {
        email,
        code,
    });

    return result;
};
