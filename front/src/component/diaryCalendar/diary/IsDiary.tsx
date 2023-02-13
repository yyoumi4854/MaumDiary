import React, { useState } from "react";
import dayjs from "dayjs";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import { BsFillHeartFill } from "react-icons/bs";

import { Diary as DiaryType } from "@/types";
import { weather } from "@/utils/weather";
import Emotion from "@/utils/emotionIcon";
import DiaryDelete from "@/component/common/DiaryDelete";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Style from "@/style/component/diaryCalendar/diary/IsDiary-style";

export type IsDiaryProps = {
    diarySelect: string;
    selectedDiary: DiaryType;
};

const IsDiary = ({ diarySelect, selectedDiary }: IsDiaryProps) => {
    const [isDelete, setIsDelete] = useState(false);
    return (
        <>
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
                        <button onClick={() => setIsDelete(true)}>삭제</button>
                        <button>수정</button>
                    </ButtonStyle.ButtonWrap>
                </Style.DiaryBottomContent>
            </Style.DiaryContent>

            {isDelete && (
                <DiaryDelete
                    diarySelect={diarySelect}
                    selectedDiary={selectedDiary}
                    setIsDelete={setIsDelete}
                />
            )}
        </>
    );
};

export default IsDiary;
