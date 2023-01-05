import React from "react";

import * as Style from "@/style/layout/header/ProfileToggle-style";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";

const ProfileToggle = () => {
    return (
        <Style.ProfileToggleContent>
            <button>
                <div>img</div>
            </button>
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
                            <a href="#">
                                <PermIdentityIcon />
                                <span>내정보</span>
                            </a>
                        </li>
                        <li>
                            <button>
                                <LogoutIcon />
                                <span>로그아웃</span>
                            </button>
                        </li>
                    </ul>
                </Style.ProfileBottomContent>
            </Style.ProfileContent>
        </Style.ProfileToggleContent>
    );
};

export default ProfileToggle;
