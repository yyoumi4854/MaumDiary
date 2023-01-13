import React from "react";
import {
    BsFillCalendarEventFill,
    BsListUl,
    BsFillChatFill,
    BsFillEmojiSmileFill,
} from "react-icons/bs";

import * as Style from "@/style/page/diary/AsideNav-style";

type PropsType = {
    diaryCurrent: string;
    setDiaryCurrent: React.Dispatch<React.SetStateAction<string>>;
};

const AsideNav = ({ diaryCurrent, setDiaryCurrent }: PropsType) => {
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
                        onClick={() => setDiaryCurrent("calendar")}
                        current={diaryCurrent === "calendar" && true}
                    >
                        <BsFillCalendarEventFill />
                        <span>캘린더</span>
                    </Style.NavList>
                    <Style.NavList>
                        <BsListUl />
                        <span>목록</span>
                    </Style.NavList>
                    <Style.NavList>
                        <BsFillChatFill />
                        <span>채팅</span>
                    </Style.NavList>
                    <Style.NavList>
                        <BsFillEmojiSmileFill />
                        <span>마음 분석</span>
                    </Style.NavList>
                </ul>
            </Style.NavContent>
        </aside>
    );
};

export default AsideNav;
