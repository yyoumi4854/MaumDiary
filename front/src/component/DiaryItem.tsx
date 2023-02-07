import { useState } from "react";
import dayjs from "dayjs";

import { Diary } from "@/types";
import emotionIcon from "@/utils/emotionIcon";
import * as Style from "@/style/component/DiaryItem-style";

interface Props {
    diary: Diary;
}

const DiaryItem = ({ diary }: Props) => {
    const [open, setOpen] = useState(false);

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
                        <p>☀️</p>
                    </div>
                    <button className={open ? "open" : ""} onClick={onClick} />
                </Style.RightPart>
            </Style.Header>
            <Style.Content open={open}>{description}</Style.Content>
            <Style.Footer>
                <div>
                    <p>by {author}</p>
                    <p>공감 {likes}</p>
                </div>
            </Style.Footer>
        </Style.Container>
    );
};

export default DiaryItem;
