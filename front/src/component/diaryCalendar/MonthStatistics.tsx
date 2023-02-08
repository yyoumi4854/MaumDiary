import React from "react";
import dayjs from "dayjs";

import { Diary, Emotion } from "@/types";
import * as TextStyle from "@/style/common/Text-style";
import * as Style from "@/style/component/diaryCalendar/MonthStatistics-style";

import EmotionIMG from "@/utils/emotionIcon";

type Props = {
    dayJs: dayjs.Dayjs;
    data?: Diary[];
};

interface EmotionCount {
    [key: Emotion | string]: number;
}

const MonthStatistics = ({ dayJs, data }: Props) => {
    const currentDay = dayJs.clone();
    const currentEndDate = currentDay.daysInMonth();
    console.log(currentEndDate);

    let emotionCount: EmotionCount = {};

    if (data) {
        for (let day in data) {
            emotionCount[data[day].emotion]
                ? (emotionCount[data[day].emotion] += 1)
                : (emotionCount[data[day].emotion] = 1);
        }

        for (let emtion in emotionCount) {
            emotionCount[emtion] = (emotionCount[emtion] / currentEndDate) * 100;
        }
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
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.excitement}>
                    <dt>신남</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.thanks}>
                    <dt>감사</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.comfort}>
                    <dt>편안</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.worry}>
                    <dt>걱정</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.sad}>
                    <dt>슬픔</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.hurt}>
                    <dt>상처</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
                <Style.EmotionList url={EmotionIMG.angry}>
                    <dt>분노</dt>
                    <dd>20%</dd>
                </Style.EmotionList>
            </Style.EmotionListContent>
        </Style.MonthStatisticsContent>
    );
};

export default MonthStatistics;
