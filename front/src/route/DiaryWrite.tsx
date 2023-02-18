import React, { useState, ChangeEvent, MouseEvent } from "react";
import { useRecoilValue } from "recoil";
import dayjs from "dayjs";

import { selectedDayAtom } from "@/recoil/selectedDay";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";
import { weather as weatherIcon } from "@/utils/weather";
import Calendar from "@/component/Calendar";

import * as TextStyle from "@/style/common/Text-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as DiaryFormStyle from "@/style/component/DiaryForm-style";
import { useLocation, useNavigate } from "react-router-dom";
import { Weather } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { writeDiary } from "@/api/diary";

const DiaryWrite = () => {
    const selectDay = useRecoilValue(selectedDayAtom);

    const location = useLocation();
    const navigate = useNavigate();

    // 캘린더 모달
    const [isCalendar, setIsCalendar] = useState(location.state !== "isNoDiary");
    const [changeDay, setChangeDay] = useState(false);

    // 일기쓰기 (제목, 내용, 날씨, 공개여부, 날짜)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [weather, setWeather] = useState<Weather | undefined>();
    const [lock, setLock] = useState(true); // true: 비공개, flase: 공개
    const createdAt = dayjs(selectDay);
    const submit = title && description && weather;

    const onClickWeather = (e: MouseEvent<HTMLInputElement>) => {
        const { id } = e.target as any;
        setWeather(id);
    };

    const onClickLock = (e: MouseEvent<HTMLSelectElement>) => {
        const { value } = e.target as any;
        setLock(value === "private" ? true : false);
    };

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: writeDiary,
        onSuccess: () => {
            navigate("/diary/calendar");
            return queryClient.refetchQueries({
                queryKey: [MONTH_DIARY.LIST],
            });
        },
    });

    const onSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!submit) return;
        mutation.mutate({
            title: title,
            description: description,
            weather: weather,
            lock: lock,
            createdAt: String(createdAt),
        });
    };

    return (
        <>
            {isCalendar && (
                <Calendar
                    setIsCalendar={setIsCalendar}
                    changeDay={changeDay}
                    setChangeDay={setChangeDay}
                />
            )}
            <div className="content inner">
                <DiaryFormStyle.DiaryFormContent>
                    <TextStyle.MediumText>일기 쓰기</TextStyle.MediumText>

                    <form onSubmit={onSubmit}>
                        <DiaryFormStyle.DiaryFormWrap>
                            <DiaryFormStyle.TopContent>
                                <DiaryFormStyle.TopLeftContent>
                                    <div>
                                        <button
                                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                                e.preventDefault();
                                                setIsCalendar(true);
                                                setChangeDay(true);
                                            }}
                                        >
                                            {createdAt.year()}년 {createdAt.month() + 1}월{" "}
                                            {createdAt.date()}일
                                        </button>
                                    </div>

                                    <DiaryFormStyle.WeatherFieldset>
                                        <legend>날씨 선택</legend>

                                        {Object.entries(weatherIcon).map(([key, value]) => (
                                            <div key={key}>
                                                <input
                                                    type="radio"
                                                    name="weather"
                                                    id={key}
                                                    onClick={onClickWeather}
                                                />
                                                <label htmlFor={key}>
                                                    <span>{value}</span>
                                                </label>
                                            </div>
                                        ))}
                                    </DiaryFormStyle.WeatherFieldset>
                                </DiaryFormStyle.TopLeftContent>

                                <DiaryFormStyle.isPublicFieldset>
                                    <legend>공개 여부</legend>
                                    <select name="lock" onClick={onClickLock}>
                                        <option value="private">비공개</option>
                                        <option value="public">공개</option>
                                    </select>
                                </DiaryFormStyle.isPublicFieldset>
                            </DiaryFormStyle.TopContent>

                            <DiaryFormStyle.TextContent>
                                <legend>일기 내용</legend>

                                <input
                                    type="text"
                                    name="diaryTitle"
                                    placeholder="제목을 입력해주세요."
                                    maxLength={20}
                                    value={title}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        const { value } = e.target as any;
                                        setTitle(value);
                                    }}
                                />
                                <p className="textCount">
                                    {title.length} <span>/ 20</span>
                                </p>

                                <textarea
                                    name="diaryDescription"
                                    placeholder="내용을 입력해주세요."
                                    maxLength={500}
                                    value={description}
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                        const { value } = e.target as any;
                                        setDescription(value);
                                    }}
                                ></textarea>
                                <p className="textCount">
                                    {description.length} <span>/ 500</span>
                                </p>
                            </DiaryFormStyle.TextContent>
                        </DiaryFormStyle.DiaryFormWrap>

                        <ButtonStyle.ButtonWrap>
                            <button
                                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    navigate("/");
                                }}
                            >
                                취소
                            </button>
                            <button disabled={submit ? false : true}>확인</button>
                        </ButtonStyle.ButtonWrap>
                    </form>
                </DiaryFormStyle.DiaryFormContent>
            </div>
        </>
    );
};

export default DiaryWrite;
