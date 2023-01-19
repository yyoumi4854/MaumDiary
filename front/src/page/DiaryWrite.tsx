import React from "react";
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
                            <div>
                                <span>
                                    <img src="" alt="이미지" />
                                </span>
                                <p>
                                    <input
                                        type="text"
                                        name="diaryTitle"
                                        placeholder="제목을 입력해주세요."
                                    />
                                </p>
                            </div>
                            <textarea
                                name="diaryDescription"
                                placeholder="내용을 입력해주세요."
                            ></textarea>
                        </DiaryFormStyle.TextContent>
                    </DiaryFormStyle.DiaryFormWrap>

                    <DiaryFormStyle.DiaryFormWrap>
                        <DiaryFormStyle.EmotionFieldset>
                            <legend>마음 선택</legend>

                            <input type="radio" name="emotion" id="confidence" />
                            <label htmlFor="confidence">
                                <span>자신감</span>
                                <span>자신감</span>
                            </label>

                            <input type="radio" name="emotion" id="excite" />
                            <label htmlFor="excite">
                                <span>신남</span>
                                <span>신남</span>
                            </label>

                            <input type="radio" name="emotion" id="thanks" />
                            <label htmlFor="thanks">
                                <span>감사</span>
                                <span>감사</span>
                            </label>

                            <input type="radio" name="emotion" id="comfortable" />
                            <label htmlFor="comfortable">
                                <span>편안</span>
                                <span>편안</span>
                            </label>

                            <input type="radio" name="emotion" id="anxiety" />
                            <label htmlFor="anxiety">
                                <span>걱정</span>
                                <span>걱정</span>
                            </label>

                            <input type="radio" name="emotion" id="sad" />
                            <label htmlFor="sad">
                                <span>슬픔</span>
                                <span>슬픔</span>
                            </label>

                            <input type="radio" name="emotion" id="hurt" />
                            <label htmlFor="hurt">
                                <span>상처</span>
                                <span>상처</span>
                            </label>

                            <input type="radio" name="emotion" id="angry" />
                            <label htmlFor="angry">
                                <span>분노</span>
                                <span>분노</span>
                            </label>
                        </DiaryFormStyle.EmotionFieldset>
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
