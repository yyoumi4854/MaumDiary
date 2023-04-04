import React from "react";
import { useRecoilValue } from "recoil";
import { Link, useLocation } from "react-router-dom";
import {
    BsFillCalendarEventFill,
    BsListUl,
    BsFillChatFill,
    BsFillEmojiSmileFill,
} from "react-icons/bs";

import { userAtom } from "@/recoil/user";

import * as Style from "@/style/page/diary/AsideNav-style";

const AsideNav = () => {
    const user = useRecoilValue(userAtom);
    if (!user) return null;

    const { pathname } = useLocation();

    return (
        <aside className="pc">
            <Style.ProfileContent>
                <div>
                    <img src="" alt="프로필" />
                </div>
                <p>{user.User.nickname}</p>
            </Style.ProfileContent>

            <Style.NavContent>
                <ul>
                    <Style.NavList current={pathname.includes("calendar") && true}>
                        <Link to="/diary/calendar">
                            <BsFillCalendarEventFill />
                            <span>캘린더</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList current={pathname.includes("all") && true}>
                        <Link to="/diary/all">
                            <BsListUl />
                            <span>목록</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList current={pathname.includes("chat") && true}>
                        <Link to="/diary/chat">
                            <BsFillChatFill />
                            <span>채팅</span>
                            <span>10</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList current={pathname.includes("analysis") && true}>
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
