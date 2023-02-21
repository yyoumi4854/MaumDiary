import axios from "axios";
import { refetchToken } from "./account";

const instance = axios.create({
    withCredentials: true,
});

// TODO: must implement request-intercepter for jwt authorization

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        // TODO: Error 핸들링하기! 어떻게 에러핸들링을 할지 고민해야함!
        // console.log(error.config);

        const config = error.config;

        const errorMessage = error.response.data as string;

        if (errorMessage.includes("Token is invalid")) {
            //  && !config._retry
            // config._retry = true;

            await refetchToken();

            return instance(config);
        }

        return Promise.reject(error);
    }
);

export default instance;
