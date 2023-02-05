import axios from "axios";

const instance = axios.create({
    withCredentials: true,
});

// TODO: must implement request-intercepter for jwt authorization

// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         // if (response.status !== 200) {
//         //     console.log("작동을 하고 있어용!");
//         //     console.log(response.statusText);
//         // }

//         // return response;
//         // TODO: Error 핸들링하기! 어떻게 에러핸들링을 할지 고민해야함!
//         console.log("에러가 났어용!");
//         // return Promise.reject(error);
//         return error;
//     }
// );

export default instance;
