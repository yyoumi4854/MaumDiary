import React, { useState, ChangeEvent } from "react";
import {
    BsSun,
    BsFillCloudSunFill,
    BsFillCloudyFill,
    BsFillCloudRainHeavyFill,
    BsSnow2,
} from "react-icons/bs";

import * as TextStyle from "@/style/common/Text-style";
import * as ButtonStyle from "@/style/common/Button-style";
import * as DiaryFormStyle from "@/style/component/DiaryForm-style";

const DiaryWrite = () => {
    const [diaryTitle, setDiaryTitle] = useState("");
    const [diaryDescription, setDiaryDescription] = useState("");

    return (
        <div className="content inner">
            <DiaryFormStyle.DiaryFormContent>
                <TextStyle.MediumText>일기 쓰기</TextStyle.MediumText>

                <form>
                    <DiaryFormStyle.DiaryFormWrap>
                        <DiaryFormStyle.TopContent>
                            <DiaryFormStyle.TopLeftContent>
                                <div>
                                    <button>2023년 01월 23일</button>
                                </div>

                                <DiaryFormStyle.WeatherFieldset>
                                    <legend>날씨 선택</legend>

                                    <input type="radio" name="weather" id="clear" />
                                    <label htmlFor="clear">
                                        <span>
                                            <BsSun />
                                        </span>
                                    </label>

                                    <input type="radio" name="weather" id="partlyCloudy" />
                                    <label htmlFor="partlyCloudy">
                                        <span>
                                            <BsFillCloudSunFill />
                                        </span>
                                    </label>

                                    <input type="radio" name="weather" id="cloudy" />
                                    <label htmlFor="cloudy">
                                        <span>
                                            <BsFillCloudyFill />
                                        </span>
                                    </label>

                                    <input type="radio" name="weather" id="rain" />
                                    <label htmlFor="rain">
                                        <span>
                                            <BsFillCloudRainHeavyFill />
                                        </span>
                                    </label>

                                    <input type="radio" name="weather" id="snow" />
                                    <label htmlFor="snow">
                                        <span>
                                            <BsSnow2 />
                                        </span>
                                    </label>
                                </DiaryFormStyle.WeatherFieldset>
                            </DiaryFormStyle.TopLeftContent>

                            <DiaryFormStyle.isPublicFieldset>
                                <legend>공개 여부</legend>
                                <select name="isPublic" id="">
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
                                value={diaryTitle}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const { value } = e.target as any;
                                    setDiaryTitle(value);
                                }}
                            />
                            <p className="textCount">
                                {diaryTitle.length} <span>/ 20</span>
                            </p>

                            <textarea
                                name="diaryDescription"
                                placeholder="내용을 입력해주세요."
                                maxLength={500}
                                value={diaryDescription}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                    const { value } = e.target as any;
                                    setDiaryDescription(value);
                                }}
                            ></textarea>
                            <p className="textCount">
                                {diaryDescription.length} <span>/ 500</span>
                            </p>
                        </DiaryFormStyle.TextContent>
                    </DiaryFormStyle.DiaryFormWrap>

                    <ButtonStyle.ButtonWrap>
                        <button>취소</button>
                        <button>확인</button>
                    </ButtonStyle.ButtonWrap>
                </form>
            </DiaryFormStyle.DiaryFormContent>
        </div>
    );
};

export default DiaryWrite;
