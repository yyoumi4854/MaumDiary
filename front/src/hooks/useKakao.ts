import { useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

import { userAtom } from "@/recoil/user";
import { getCookie, deleteCookie } from "@/utils/cookie";
import { ACCOUNT } from "@/constant/QUERY_KEY";
import { fetchUserData } from "@/api/account";

const useKakao = () => {
    const Kakao = window.Kakao;

    const queryClient = useQueryClient();
    const setUserData = useSetRecoilState(userAtom);

    const authorization = () => {
        if (!Kakao.isInitialized()) {
            Kakao.init(import.meta.env.VITE_KAKAO_KEY); // 한번만 일어야됨됨

            setAccessTokenToAuth();
        }
    };

    const setAccessTokenToAuth = () => {
        const token = getCookie("kakao_accessToken");
        console.log(token);
        Kakao.Auth.setAccessToken(token);
    };

    const getStatusInfo = () => {
        // 익스포트 제거
        // return Kakao.Auth.getStatusInfo()._result.status;
        return Kakao.Auth.getStatusInfo().then((res: any) => console.log(res));
    };

    const login = () => {
        Kakao.Auth.authorize({
            redirectUri: "http://localhost:3002/api/account/kakao",
            scope: "openid, profile_nickname",
            // prompts: "login",
        });
    };

    const fetchingUserData = async () => {
        const result = await queryClient.fetchQuery({
            queryKey: [ACCOUNT.USER],
            queryFn: fetchUserData,
            cacheTime: 0,
        });

        setUserData(result.data);
    };

    const logout = async () => {
        setAccessTokenToAuth();

        await Kakao.Auth.logout();
    };

    return { authorization, login, getStatusInfo, fetchingUserData, logout }; // TODO: getStatusInfo 지우기
};

export default useKakao;
