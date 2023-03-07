import { useState } from "react";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import theme from "@/style/Theme";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";
import { fetchMonthDiaryList } from "@/api/diary";

import * as Style from "@/style/component/diaryUserAnalysis/Chart-style";
import { bad, CHART_DATA, good, max } from "./emotionData";
import { Emotion } from "@/types";
import { userAtom } from "@/recoil/user";

const Chart = () => {
    const user = useRecoilValue(userAtom);
    if (!user) return;
    const { nickname } = user.User;

    const [dayJs, setDayJs] = useState(dayjs());
    const currentEndDate = dayJs.daysInMonth();

    const { data, isSuccess } = useQuery({
        queryKey: [MONTH_DIARY.LIST, { year: dayJs.year(), month: dayJs.month() + 1 }],
        queryFn: () => fetchMonthDiaryList({ year: dayJs.year(), month: dayJs.month() + 1 }),
        placeholderData: {},
    });
    if (!isSuccess) return null;

    const EmotionData: Record<Emotion, number> = {
        confidence: 0,
        excitement: 0,
        thanks: 0,
        comfort: 0,
        worry: 0,
        sad: 0,
        hurt: 0,
        angry: 0,
    };

    Object.values(data).forEach((diary) => (EmotionData[diary.emotion] += 1));

    const emotionTick = () => {};

    return (
        <Style.ChartContent>
            <Style.ChartTopContent>
                <Style.ControlContent>
                    <button
                        onClick={() => {
                            setDayJs(dayJs.clone().subtract(1, "month"));
                        }}
                    >
                        <BsChevronLeft />
                    </button>

                    <p>
                        <span>{dayJs.format("YYYY년 M월")}</span> 마음 분석
                    </p>

                    <button
                        onClick={() => {
                            setDayJs(dayJs.clone().add(1, "month"));
                        }}
                    >
                        <BsChevronRight />
                    </button>
                </Style.ControlContent>

                <Style.Chart>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart
                            cx="50%"
                            cy="50%"
                            outerRadius="80%"
                            data={CHART_DATA(currentEndDate, EmotionData)}
                        >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={22.5} domain={[-10, currentEndDate]} />
                            <Radar
                                name="긍정적"
                                dataKey="good"
                                stroke={theme.colors.confirm}
                                fill={theme.colors.confirm}
                                fillOpacity={0.5}
                            />
                            <Radar
                                name="부정적"
                                dataKey="Bad"
                                stroke={theme.colors.greyBorder}
                                fill={theme.colors.greyBorder}
                                fillOpacity={0.5}
                            />
                            <Legend />
                        </RadarChart>
                    </ResponsiveContainer>
                </Style.Chart>
            </Style.ChartTopContent>

            <Style.TextContent>
                <p>
                    <span>{nickname}</span>님의 <span>{dayJs.format("YYYY년 M월")}</span> 마음 분석
                    결과
                    <br />
                    {max(EmotionData) && (
                        <>
                            가장 많이 차지한 감정은 <span>{max(EmotionData)}</span>이고
                            <br />
                        </>
                    )}
                    {good === bad ? (
                        <>
                            긍정적 감정과 부정적 감정이 <span>같습니다.</span>
                        </>
                    ) : (
                        <>
                            <span>{good < bad ? "긍정적" : "부정적"} 감정</span>이{" "}
                            {good > bad ? "긍정적" : "부정적"} 감정보다 <span>높습니다.</span>
                        </>
                    )}
                </p>
            </Style.TextContent>
        </Style.ChartContent>
    );
};

export default Chart;
