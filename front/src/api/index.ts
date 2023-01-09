import axios from "axios";

const instance = axios.create();

// TODO: must implement request-intercepter for jwt authorization

instance.interceptors.response.use((response) => {
    if (response.status !== 200) {
        console.log(response.statusText);
    }

    return response;
});

export default instance;
