import { useRef, useState } from "react";
import dayjs from "dayjs";
import { BsFillHeartFill, BsHeart, BsFillChatFill } from "react-icons/bs";

import { Diary } from "@/types";
import emotionIcon from "@/utils/emotionIcon";
import { weather as weatherIcon } from "@/utils/weather";

import * as Style from "@/style/component/DiaryItem-style";

interface Props {
    diary: Diary;
}

const DiaryItem = ({ diary }: Props) => {
    const textInputRef = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    const { title, description, emotion, lock, likes, weather, updatedAt, author } = diary;

    const onClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Style.Container>
            <Style.Header>
                <Style.LeftPart>
                    <img src={emotionIcon[emotion]} alt="감정" />
                    <p>{title}</p>
                </Style.LeftPart>
                <Style.RightPart>
                    <div>
                        <p className="day">{dayjs(updatedAt).format("YYYY년 MM월 DD일")}</p>
                        {weatherIcon[weather]}
                    </div>
                    <button className={open ? "open" : ""} onClick={onClick} />
                </Style.RightPart>
            </Style.Header>
            <Style.Content open={open}>{description}</Style.Content>
            <Style.Footer>
                <Style.FooterLeft>
                    <div>
                        <img src="" alt="" />
                    </div>

                    <p>
                        <span>by</span> {author}
                    </p>

                    <div>
                        <BsHeart />
                        {/* <BsFillHeartFill className="fill" /> */}
                        <p>공감 {likes}</p>
                    </div>
                </Style.FooterLeft>
                <Style.FooterRight>
                    {chatOpen ? (
                        <div>
                            <button onClick={() => setChatOpen(false)}>취소</button>
                            <button>전송</button>
                        </div>
                    ) : (
                        <button onClick={() => setChatOpen(true)}>
                            <BsFillChatFill />
                        </button>
                    )}
                </Style.FooterRight>
            </Style.Footer>

            {chatOpen && (
                <Style.ChatContent>
                    <div contentEditable ref={textInputRef}></div>
                </Style.ChatContent>
            )}
        </Style.Container>
    );
};

export default DiaryItem;
