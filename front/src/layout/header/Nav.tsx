import React from "react";

import * as Style from "@/style/layout/header/Nav-style";

const Nav = () => {
    return (
        <Style.NavContent className="pc">
            <ul>
                <li>
                    <a href="#">일기장</a>
                </li>
                <li>
                    <a href="#">서비스 소개</a>
                </li>
            </ul>
        </Style.NavContent>
    );
};

export default Nav;
