import React from "react";
import { Link } from "react-router-dom";
import {
    BsFillCalendarEventFill,
    BsListUl,
    BsFillChatFill,
    BsFillEmojiSmileFill,
} from "react-icons/bs";

import * as Style from "@/style/page/diary/AsideNav-style";

type Props = {
    diaryNavCurrent: string;
    setDiaryNavCurrent: React.Dispatch<React.SetStateAction<string>>;
};

const AsideNav = ({ diaryNavCurrent, setDiaryNavCurrent }: Props) => {
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
                    <Style.NavList
                        onClick={() => setDiaryNavCurrent("calendar")}
                        current={diaryNavCurrent === "calendar" && true}
                    >
                        <Link to="/diary/calendar">
                            <BsFillCalendarEventFill />
                            <span>캘린더</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList
                        onClick={() => setDiaryNavCurrent("all")}
                        current={diaryNavCurrent === "all" && true}
                    >
                        <Link to="/diary/all">
                            <BsListUl />
                            <span>목록</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList
                        onClick={() => setDiaryNavCurrent("chat")}
                        current={diaryNavCurrent === "chat" && true}
                    >
                        <Link to="/diary/chat">
                            <BsFillChatFill />
                            <span>채팅</span>
                        </Link>
                    </Style.NavList>
                    <Style.NavList
                        onClick={() => setDiaryNavCurrent("userAnalysis")}
                        current={diaryNavCurrent === "userAnalysis" && true}
                    >
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
