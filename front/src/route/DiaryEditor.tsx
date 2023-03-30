import React, { useState, ChangeEvent, MouseEvent, FormEvent } from "react";
import { useRecoilValue } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import { selectedDayAtom } from "@/recoil/selectedDay";
import { Weather, Emotion } from "@/types";
import { weather as weatherIcon } from "@/utils/weather";
import { emotionIcon } from "@/utils/emotionIcon";
import { editorDiary } from "@/api/diary";
import { MONTH_DIARY } from "@/constant/QUERY_KEY";

import * as TextStyle from "@/style/common/Text-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as DiaryFormStyle from "@/style/component/DiaryForm-style";
import * as Style from "@/style/page/DiaryEditor-style";

const DiaryEditor = () => {
    const selectDay = useRecoilValue(selectedDayAtom);

    const navigate = useNavigate();
    const location = useLocation();

    // 일기쓰기 (제목, 내용, 날씨, 감정, 공개여부, 날짜)
    const [title, setTitle] = useState(location.state.title);
    const [description, setDescription] = useState(location.state.description);
    const [weather, setWeather] = useState<Weather>(location.state.weather);
    const [emotion, setEmotion] = useState<Emotion>(location.state.emotion);
    const [lock, setLock] = useState(location.state.lock); // true: 비공개, false: 공개
    const createdAt = dayjs(selectDay);

    const submit = title && description && weather;

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: editorDiary,
        onSuccess: () => {
            navigate("/diary/calendar");
            return queryClient.refetchQueries({
                queryKey: [MONTH_DIARY.LIST],
            });
        },
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!submit) return;
        mutation.mutate({
            id: location.state.id,
            title: title,
            description: description,
            weather: weather,
            emotion: emotion,
            lock: lock,
        });
    };

    return (
        <div className="content inner">
            <DiaryFormStyle.DiaryFormContent>
                <TextStyle.MediumText>일기 쓰기</TextStyle.MediumText>

                <form onSubmit={onSubmit}>
                    <DiaryFormStyle.DiaryFormWrap>
                        <DiaryFormStyle.TopContent>
                            <DiaryFormStyle.TopLeftContent>
                                <div>
                                    <p>
                                        {createdAt.year()}년 {createdAt.month() + 1}월{" "}
                                        {createdAt.date()}일
                                    </p>
                                </div>

                                <DiaryFormStyle.WeatherFieldset>
                                    <legend>날씨 선택</legend>

                                    {Object.entries(weatherIcon).map(([key, value]) => (
                                        <div key={key}>
                                            <input
                                                type="radio"
                                                name="weather"
                                                id={key}
                                                onClick={(e: MouseEvent<HTMLInputElement>) => {
                                                    const { id } = e.target as any;
                                                    setWeather(id);
                                                }}
                                                defaultChecked={key === weather}
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
                                <select
                                    name="lock"
                                    defaultValue={lock ? "private" : "public"}
                                    onClick={(e: MouseEvent<HTMLSelectElement>) => {
                                        const { value } = e.target as any;
                                        setLock(value === "private" ? true : false);
                                    }}
                                >
                                    <option value="private">비공개</option>
                                    <option value="public">공개</option>
                                </select>
                            </DiaryFormStyle.isPublicFieldset>
                        </DiaryFormStyle.TopContent>

                        <DiaryFormStyle.TextContent>
                            <legend>일기 내용</legend>
                            <Style.CurrentEmotionContent>
                                <img src={emotionIcon[emotion].icon} alt="이미지" />

                                <div>
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
                                </div>
                            </Style.CurrentEmotionContent>

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

                    <DiaryFormStyle.DiaryFormWrap>
                        <Style.EmotionFieldset>
                            <legend>마음 선택</legend>

                            {Object.entries(emotionIcon).map(([key, value]) => (
                                <div key={key}>
                                    <input
                                        type="radio"
                                        name="emotion"
                                        id={key}
                                        onClick={(e: MouseEvent<HTMLInputElement>) => {
                                            const { id } = e.target as any;
                                            setEmotion(id);
                                        }}
                                        defaultChecked={key === emotion}
                                    />
                                    <Style.EmotionLabel url={value.icon} htmlFor={key}>
                                        <span>{value.name}</span>
                                        <span>{value.name}</span>
                                    </Style.EmotionLabel>
                                </div>
                            ))}
                        </Style.EmotionFieldset>
                    </DiaryFormStyle.DiaryFormWrap>

                    <ButtonStyle.ButtonWrap>
                        <button
                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                navigate(-1);
                            }}
                        >
                            취소
                        </button>
                        <button disabled={!submit}>확인</button>
                    </ButtonStyle.ButtonWrap>
                </form>
            </DiaryFormStyle.DiaryFormContent>
        </div>
    );
};

export default DiaryEditor;
