import React from "react";
import { Link } from "react-router-dom";

import * as Style from "@/style/layout/header/PCNav-style";

const PCNav = () => {
    return (
        <Style.PCNavContent className="pc">
            <ul>
                <li>
                    <Link to="/diary/calendar">일기장</Link>
                </li>
                <li>
                    <Link to="/diary/write">일기 쓰기</Link>
                </li>
                <li>
                    <a href="#">서비스 소개</a>
                </li>
            </ul>
        </Style.PCNavContent>
    );
};

export default PCNav;
