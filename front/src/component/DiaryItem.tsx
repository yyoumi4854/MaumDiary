import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
//BsArrowDownShort
import * as Style from "@/style/component/DiaryItem-style";

import confidence from "@/images/emotion/confidence.svg";

const DiaryItem = () => {
    return (
        <Style.Container>
            <Style.Header>
                <Style.Title>
                    <img src={confidence} alt="감정" />
                    <p>오늘 할일 목표 달성!!</p>
                </Style.Title>
                <Style.HeaderMeta>
                    <p>2017년 12월 21일</p>
                    <p>☀️</p>
                    <button>{/* <BsArrowDownShort /> */}</button>
                </Style.HeaderMeta>
            </Style.Header>
            <Style.Detail>
                <div>
                    <p>by 겨울감자</p>
                    <p>공감 7</p>
                </div>
            </Style.Detail>
        </Style.Container>
    );
};

export default DiaryItem;
