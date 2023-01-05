import React from "react";

import * as Style from "@/style/layout/header/UserMenu-style";

const UserMenu = () => {
    return (
        <Style.UserMenuContent>
            <ul>
                <li>
                    <a href="#">로그인</a>
                </li>
                <li>
                    <a href="#">회원가입</a>
                </li>
            </ul>
        </Style.UserMenuContent>
    );
};

export default UserMenu;
