import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    BsFillCalendarEventFill,
    BsListUl,
    BsFillChatFill,
    BsFillEmojiSmileFill,
} from "react-icons/bs";

import * as Style from "@/style/page/diary/AsideNav-style";

const AsideNav = () => {
    const location = useLocation();

    return (
        <aside className="pc">
            <Style.ProfileContent>
                <div>
                    <img src="" alt="프로필" />
                </div>
                <p>겨울감자</p>
            </Style.ProfileContent>

            <Style.NavContent>
                <ul>
                    <Style.NavList current={location.pathname.includes("calendar") && true}>
                        <Link to="/diary/calendar">
                            <BsFillCalendarEventFill />
                            <span>캘린더</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList current={location.pathname.includes("all") && true}>
                        <Link to="/diary/all">
                            <BsListUl />
                            <span>목록</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList current={location.pathname.includes("chat") && true}>
                        <Link to="/diary/chat">
                            <BsFillChatFill />
                            <span>채팅</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList current={location.pathname.includes("analysis") && true}>
                        <Link to="/diary/user/analysis">
                            <BsFillEmojiSmileFill />
                            <span>마음 분석</span>
                        </Link>
                    </Style.NavList>
                </ul>
            </Style.NavContent>
        </aside>
    );
};

export default AsideNav;
