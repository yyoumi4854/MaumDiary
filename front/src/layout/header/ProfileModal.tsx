import React from "react";
import { Link } from "react-router-dom";
import { BsPerson, BsPower } from "react-icons/bs";

import * as Style from "@/style/layout/header/ProfileModal-style";

const ProfileModal = () => {
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
                        <button>
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
