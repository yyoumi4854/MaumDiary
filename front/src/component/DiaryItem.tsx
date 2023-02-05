import * as Style from "@/style/component/DiaryItem-style";

import { Diary } from "@/types";
import emotionIcon from "@/utils/emotionIcon";
import dayjs from "dayjs";

interface Props {
    diary: Diary;
}

const DiaryItem = ({ diary }: Props) => {
    const { title, description, emotion, lock, likes, weather, createdAt } = diary;

    return (
        <Style.Container>
            <Style.Header>
                <Style.Title>
                    <img src={emotionIcon[emotion]} alt="감정" />
                    <p>{title}</p>
                </Style.Title>
                <Style.Meta>
                    <div>
                        <p className="day">{dayjs(createdAt).format("YYYY년 MM월 DD일")}</p>
                        <p>☀️</p>
                    </div>
                    <button />
                </Style.Meta>
            </Style.Header>
            <Style.Detail>
                <div>
                    <p>by 겨울감자</p>
                    <p>공감 {likes}</p>
                </div>
            </Style.Detail>
        </Style.Container>
    );
};

export default DiaryItem;
