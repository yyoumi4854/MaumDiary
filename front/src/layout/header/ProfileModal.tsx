import { MouseEvent } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { BsPerson, BsPower } from "react-icons/bs";

import { userAtom } from "@/recoil/user";
import { logout } from "@/api/account";
import useKakao from "@/hooks/useKakao";

import * as Style from "@/style/layout/header/ProfileModal-style";
import { getCookie } from "@/utils/cookie";

const ProfileModal = () => {
    const user = useRecoilValue(userAtom);
    const resetUserData = useResetRecoilState(userAtom);

    const navigate = useNavigate();

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

        navigate("/");
    };

    if (!user) return null;
    const { email, User } = user;

    return (
        <Style.ProfileContent>
            <Style.ProfileTopContent>
                <div>
                    <img src="" alt="프로필" />
                </div>
                <div>
                    <p>{User.nickname}</p>
                    <span>{email}</span>
                </div>
            </Style.ProfileTopContent>
            <Style.ProfileBottomContent>
                <ul>
                    <li>
                        <Link to="/user">
                            <BsPerson />
                            <span>내 정보</span>
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
