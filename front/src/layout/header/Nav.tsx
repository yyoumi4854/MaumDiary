import React from "react";
import { Link } from "react-router-dom";

import * as Style from "@/style/layout/header/Nav-style";

const Nav = () => {
    return (
        <Style.NavContent className="pc">
            <ul>
                <li>
                    <Link to="/diary">일기장</Link>
                </li>
                <li>
                    <a href="#">서비스 소개</a>
                </li>
            </ul>
        </Style.NavContent>
    );
};

export default Nav;
