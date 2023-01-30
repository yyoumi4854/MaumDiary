import instance from ".";

export const login = async ({ userID, password }: { userID: string; password: string }) => {
    const result = await instance.post("http://localhost:3002/api/account/login", {
        userID,
        password,
    });

    return result;
};
