import React from "react";
import { Link } from "react-router-dom";

import * as Style from "@/style/layout/header/UserMenu-style";

const UserMenu = () => {
    return (
        <Style.UserMenuContent>
            <ul>
                <li>
                    <Link to="/login">로그인</Link>
                </li>
                <li>
                    <Link to={"/register"}>회원가입</Link>
                </li>
            </ul>
        </Style.UserMenuContent>
    );
};

export default UserMenu;
