import React from "react";
import dayjs from "dayjs";

import { Diary } from "@/types";
import * as TextStyle from "@/style/common/Text-style";
import * as Style from "@/style/component/diaryCalendar/MonthStatistics-style";

import EmotionIMG from "@/utils/emotionIcon";

type Props = {
    dayJs: dayjs.Dayjs;
    data?: Diary[];
};

const emotionCount = {
    confidence: 0,
    excitement: 0,
    thanks: 0,
    comfort: 0,
    worry: 0,
    sad: 0,
    hurt: 0,
    angry: 0,
};

const MonthStatistics = ({ dayJs, data }: Props) => {
    const currentDay = dayJs.clone();

    if (data) {
        Object.values(data).forEach((diary) => emotionCount[diary.emotion]++);
    }

    return (
        <Style.MonthStatisticsContent>
            <TextStyle.MediumText textAlign={"center"}>
                {currentDay.format("YYYY")}년 {currentDay.format("MM")}월 마음 통계
            </TextStyle.MediumText>

            <Style.StatisticsContnet emotionCount={emotionCount}>
                <span>자신감</span>
                <span>신남</span>
                <span>감사</span>
                <span>편안</span>
                <span>걱정</span>
                <span>슬픔</span>
                <span>상처</span>
                <span>분노</span>
            </Style.StatisticsContnet>

            <Style.EmotionListContent>
                <Style.EmotionList url={EmotionIMG.confidence}>
                    <dt>자신감</dt>
                    <dd>{emotionCount["confidence"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.excitement}>
                    <dt>신남</dt>
                    <dd>{emotionCount["excitement"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.thanks}>
                    <dt>감사</dt>
                    <dd>{emotionCount["thanks"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.comfort}>
                    <dt>편안</dt>
                    <dd>{emotionCount["comfort"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.worry}>
                    <dt>걱정</dt>
                    <dd>{emotionCount["worry"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.sad}>
                    <dt>슬픔</dt>
                    <dd>{emotionCount["sad"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.hurt}>
                    <dt>상처</dt>
                    <dd>{emotionCount["hurt"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.angry}>
                    <dt>분노</dt>
                    <dd>{emotionCount["angry"]}</dd>
                </Style.EmotionList>
            </Style.EmotionListContent>
        </Style.MonthStatisticsContent>
    );
};

export default MonthStatistics;
