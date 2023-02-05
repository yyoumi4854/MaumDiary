import instance from ".";
import { USER_DATA } from "@/types";

export const login = async ({ userID, password }: { userID: string; password: string }) => {
    const result = await instance.post("http://localhost:3002/api/account/login", {
        userID,
        password,
    });

    return result;
};

export const fetchUserData = async () => {
    const result = await instance.get<USER_DATA>("http://localhost:3002/api/account");

    return result;
};
