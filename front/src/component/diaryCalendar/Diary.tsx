import React, { useState } from "react";

import { Diary as DiaryType } from "@/types";
import { BsFillHeartFill, BsExclamationCircle } from "react-icons/bs";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import dayjs from "dayjs";

import { weather } from "@/utils/weather";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Style from "@/style/component/diaryCalendar/Diary-style";

import Emotion from "@/utils/emotionIcon";

type Props = {
    diarySelect: string;
    selectedDiary?: DiaryType;
};

const Diary = ({ diarySelect, selectedDiary }: Props) => {
    return (
        <>
            {selectedDiary ? (
                <Style.DiaryContent>
                    <Style.DiaryTopContent>
                        <div>
                            <span>
                                {dayjs(diarySelect).year()}년 {dayjs(diarySelect).month() + 1}월{" "}
                                {dayjs(diarySelect).date()}일
                            </span>
                            <span>{weather[selectedDiary.weather]}</span>
                        </div>
                        <div>
                            {selectedDiary.lock ? (
                                <>
                                    <HiLockClosed />
                                    <span>비공개</span>
                                </>
                            ) : (
                                <>
                                    <HiLockOpen />
                                    <span>공개</span>
                                </>
                            )}
                        </div>
                    </Style.DiaryTopContent>

                    <Style.DiaryTextContent>
                        <div>
                            <img src={Emotion[selectedDiary.emotion]} alt={selectedDiary.emotion} />
                            <p>{selectedDiary.title}</p>
                        </div>
                        <div>{selectedDiary.description}</div>
                    </Style.DiaryTextContent>

                    <Style.DiaryBottomContent>
                        <div>
                            {selectedDiary.likes > 0 && (
                                <>
                                    <BsFillHeartFill />
                                    <span>공감 {selectedDiary.likes}</span>
                                </>
                            )}
                        </div>
                        <ButtonStyle.ButtonWrap>
                            <button>삭제</button>
                            <button>수정</button>
                        </ButtonStyle.ButtonWrap>
                    </Style.DiaryBottomContent>
                </Style.DiaryContent>
            ) : (
                <Style.NoneDiaryContent>
                    <div>
                        <BsExclamationCircle />
                        <p>
                            <span>
                                {dayjs(diarySelect).year()}년 {dayjs(diarySelect).month() + 1}월{" "}
                                {dayjs(diarySelect).date()}일
                            </span>
                            에 작성된 글이 없습니다.
                            <br />
                            어떤 하루를 보냈는지 기록해 보세요!
                        </p>
                        <ButtonStyle.MediumButton>일기쓰러 가기</ButtonStyle.MediumButton>
                    </div>
                </Style.NoneDiaryContent>
            )}
        </>
    );
};

export default Diary;
