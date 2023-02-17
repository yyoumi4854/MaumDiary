import React from "react";
import dayjs from "dayjs";

import { Diary } from "@/types";

import * as TextStyle from "@/style/common/Text-style";
import * as Style from "@/style/component/diaryCalendar/MonthStatistics-style";

import EmotionIcon from "@/utils/emotionIcon";

interface Props {
    dayJs: dayjs.Dayjs;
    data: { [key: number]: Diary };
}

const MonthStatistics = ({ dayJs, data }: Props) => {
    const currentDay = dayJs.clone();

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
                <Style.EmotionList url={EmotionIcon.confidence}>
                    <dt>자신감</dt>
                    <dd>{emotionCount["confidence"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIcon.excitement}>
                    <dt>신남</dt>
                    <dd>{emotionCount["excitement"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIcon.thanks}>
                    <dt>감사</dt>
                    <dd>{emotionCount["thanks"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIcon.comfort}>
                    <dt>편안</dt>
                    <dd>{emotionCount["comfort"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIcon.worry}>
                    <dt>걱정</dt>
                    <dd>{emotionCount["worry"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIcon.sad}>
                    <dt>슬픔</dt>
                    <dd>{emotionCount["sad"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIcon.hurt}>
                    <dt>상처</dt>
                    <dd>{emotionCount["hurt"]}</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIcon.angry}>
                    <dt>분노</dt>
                    <dd>{emotionCount["angry"]}</dd>
                </Style.EmotionList>
            </Style.EmotionListContent>
        </Style.MonthStatisticsContent>
    );
};

export default MonthStatistics;
