import { MouseEvent } from "react";
import { useResetRecoilState } from "recoil";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BsPerson, BsPower } from "react-icons/bs";

import { userAtom } from "@/recoil/user";
import { logout } from "@/api/account";
import useKakao from "@/hooks/useKakao";

import * as Style from "@/style/layout/header/ProfileModal-style";
import { getCookie } from "@/utils/cookie";

const ProfileModal = () => {
    const resetUserData = useResetRecoilState(userAtom);

    const mutation = useMutation(logout);

    const { logout: kakaoLogout } = useKakao();

    const onLogout = async (e: MouseEvent<HTMLButtonElement>) => {
        if (getCookie("kakao_accessToken") !== undefined) {
            await kakaoLogout();
        }

        if (localStorage.getItem("user") !== null) {
            console.log("무려 유저의 데이터가 있어요!");
            mutation.mutate();
            resetUserData();
        }
    };

    return (
        <Style.ProfileContent>
            <Style.ProfileTopContent>
                <div>프로필</div>
                <div>
                    <p>겨울감자</p>
                    <span>ruyria</span>
                </div>
            </Style.ProfileTopContent>
            <Style.ProfileBottomContent>
                <ul>
                    <li>
                        <Link to="/user">
                            <BsPerson />
                            <span>내정보</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={onLogout}>
                            <BsPower />
                            <span>로그아웃</span>
                        </button>
                    </li>
                </ul>
            </Style.ProfileBottomContent>
        </Style.ProfileContent>
    );
};

export default ProfileModal;
