import React from "react";
import dayjs from "dayjs";

import * as TextStyle from "@/style/common/Text-style";
import * as Style from "@/style/component/diaryCalendar/MonthStatistics-style";

import Emotion from "@/utils/emotionIcon";

type Props = {
    dayJs: dayjs.Dayjs;
};

const MonthStatistics = ({ dayJs }: Props) => {
    const now = dayJs;

    let arr = [20, 30, 10, 5, 20, 1, 1, 1];

    return (
        <Style.MonthStatisticsContent>
            <TextStyle.MediumText textAlign={"center"}>
                {now.format("YYYY")}년 {now.format("MM")}월 마음 통계
            </TextStyle.MediumText>

            <Style.StatisticsContnet percent={arr}>
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
                <Style.EmotionList url={Emotion.confidence}>
                    <dt>자신감</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={Emotion.excitement}>
                    <dt>신남</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={Emotion.thanks}>
                    <dt>감사</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={Emotion.comport}>
                    <dt>편안</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={Emotion.worry}>
                    <dt>걱정</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={Emotion.sad}>
                    <dt>슬픔</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={Emotion.worry}>
                    <dt>상처</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={Emotion.angry}>
                    <dt>분노</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
            </Style.EmotionListContent>
        </Style.MonthStatisticsContent>
    );
};

export default MonthStatistics;
