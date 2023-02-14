import { MouseEvent } from "react";
import { useResetRecoilState } from "recoil";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BsPerson, BsPower } from "react-icons/bs";

import { userAtom } from "@/recoil/user";
import { logout } from "@/api/account";

import * as Style from "@/style/layout/header/ProfileModal-style";

const ProfileModal = () => {
    const resetUserData = useResetRecoilState(userAtom);

    const mutation = useMutation(logout);

    const onLogout = (e: MouseEvent<HTMLButtonElement>) => {
        if (localStorage.getItem("user") !== null) {
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
