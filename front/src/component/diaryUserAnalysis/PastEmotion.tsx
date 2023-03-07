import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { BsExclamationCircle } from "react-icons/bs";

import { PERIOD } from "@/constant/QUERY_KEY";
import { fetchPastDiary } from "./../../api/diary";
import { emotionIcon } from "@/utils/emotionIcon";

import * as Style from "@/style/component/diaryUserAnalysis/PastEmotion-style";

const PastEmotion = () => {
    const { data, isSuccess } = useQuery({
        queryKey: [PERIOD.ALL],
        queryFn: () => fetchPastDiary(),
    });
    if (!isSuccess) return null;

    const CardList = [
        {
            date: "일주일",
            dayJs: dayjs().subtract(1, "week"),
            data: data.week[0],
        },
        {
            date: "한달",
            dayJs: dayjs().subtract(1, "month"),
            data: data.month[0],
        },
        {
            date: "일년",
            dayJs: dayjs().subtract(1, "year"),
            data: data.year[0],
        },
    ];

    return (
        <Style.PastEmotionContent>
            <strong>
                {dayjs().format("YYYY")}년 {dayjs().format("M")}월 {dayjs().format("D")}일 기준
            </strong>
            <Style.PastEmotionWrap>
                {CardList.map((card, idx) => (
                    <Style.Card key={idx}>
                        <dt>
                            <p>{card.date} 전 오늘</p>
                        </dt>

                        {card.data ? (
                            <Style.IsDiaryWrap>
                                <img
                                    src={emotionIcon[card.data.emotion].icon}
                                    alt={emotionIcon[card.data.emotion].name}
                                />
                                <span>{card.dayJs.format("YYYY년 M월 D일")}</span>
                                <strong>{emotionIcon[card.data.emotion].name}</strong>
                            </Style.IsDiaryWrap>
                        ) : (
                            <Style.IsNoDiaryWrap>
                                <BsExclamationCircle />
                                <p>
                                    {card.dayJs.format("YYYY년 M월 D일")}에 <br />
                                    기록한 일기가 없습니다.
                                </p>
                            </Style.IsNoDiaryWrap>
                        )}
                    </Style.Card>
                ))}
            </Style.PastEmotionWrap>

            <Style.TextContent>
                <p>
                    자신의 감정을 돌아보는 건<br />
                    정서적 건강을 관리하는 데 도움이 됩니다.
                    <br />
                    꾸준히 기록하여 마음을 되돌아 보세요.
                </p>
            </Style.TextContent>
        </Style.PastEmotionContent>
    );
};

export default PastEmotion;
