import React, { useState } from "react";
import { BsExclamationCircle, BsFillHeartFill, BsFillLockFill, BsSun } from "react-icons/bs";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";

import * as ButtonStyle from "@/style/common/Button-style";
import * as Style from "@/style/component/diaryCalendar/Diary-style";

import confidence from "@/images/emotion/confidence.svg";

type Props = {
    diarySelect: string;
};

const Diary = ({ diarySelect }: Props) => {
    const [isDiary, setIsDiary] = useState(true);

    const selectYear = diarySelect.substring(0, 4);
    const selectMonth = diarySelect.substring(4, 6);
    const selectDate = diarySelect.substring(6, 8);

    return (
        <>
            {isDiary ? (
                <Style.DiaryContent>
                    <Style.DiaryTopContent>
                        <div>
                            <span>
                                {selectYear}년 {selectMonth}월 {selectDate}일
                            </span>
                            <span>
                                <BsSun />
                            </span>
                        </div>
                        <div>
                            <HiLockClosed />
                            <span>비공개</span>
                        </div>
                    </Style.DiaryTopContent>

                    <Style.DiaryTextContent>
                        <div>
                            <img src={confidence} alt="신남" />
                            <p>오늘 할일 목표 달성!!!</p>
                        </div>
                        <div>
                            오늘 할 목표를 완료했다~!!! 완전 뿌듯하고 해낼 수 있다는 자신감을 얻은
                            것 같다. 이전에는 항상 목표를 못채웠었는데 이제는 시간을 잡고 차근차근
                            할일을 해낸다는 뿌듯함 때문인지 더 열심히 하게 되는 것 같다. 내일도
                            힘내야겠다.!! 늘 할 목표를 완료했다~!!! 완전 뿌듯하고 해낼 수 있다는
                            자신감을 얻은 것 같다. 이전에는 항상 목표를 못채웠었는데 이제는 시간을
                            잡고 차근차근 할일을 해낸다는 뿌듯함 때문인지 더 열심히 하게 되는 것
                            같다. 내일도 힘내야겠다.!! 늘 할 목표를 완료했다~!!! 완전 뿌듯하고 해낼
                            수 있다는 자신감을 얻은 것 같다. 이전에는 항상 목표를 못채웠었는데
                            이제는 시간을 잡고 차근차근 할일을 해낸다는 뿌듯함 때문인지 더 열심히
                            하게 되는 것 같다. 내일도 힘내야겠다.!!
                        </div>
                    </Style.DiaryTextContent>

                    <Style.DiaryBottomContent>
                        <div>
                            <BsFillHeartFill />
                            <span>공감 7</span>
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
                                {selectYear}년 {selectMonth}월 {selectDate}일
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
