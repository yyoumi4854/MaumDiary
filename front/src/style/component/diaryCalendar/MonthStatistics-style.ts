import styled from "styled-components";

import * as Css from "@/style/common/Css-style";

export const MonthStatisticsContent = styled.div`
    grid-column: 1 / 3;
    ${Css.diaryContnet}
    padding: 20px;
`;

export const StatisticsContnet = styled.div<{
    emotionCount: { [key: string]: number };
}>`
    display: flex;
    width: 90%;
    height: 2rem;
    margin: 1.5rem auto;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.greyBackground};
    overflow: hidden;

    span {
        height: 100%;
        text-indent: -9999px;
    }

    span:nth-of-type(1) {
        background: ${({ theme }) => theme.colors.emotionConfidence};
        flex-grow: ${({ emotionCount }) => emotionCount["confidence"]};
    }
    span:nth-of-type(2) {
        background: ${({ theme }) => theme.colors.emotionExcitement};
        flex-grow: ${({ emotionCount }) => emotionCount["excitement"]};
    }
    span:nth-of-type(3) {
        background: ${({ theme }) => theme.colors.emotionThanks};
        flex-grow: ${({ emotionCount }) => emotionCount["thanks"]};
    }
    span:nth-of-type(4) {
        background: ${({ theme }) => theme.colors.emotionComfort};
        flex-grow: ${({ emotionCount }) => emotionCount["comfort"]};
    }
    span:nth-of-type(5) {
        background: ${({ theme }) => theme.colors.emotionWorry};
        flex-grow: ${({ emotionCount }) => emotionCount["worry"]};
    }
    span:nth-of-type(6) {
        background: ${({ theme }) => theme.colors.emotionSad};
        flex-grow: ${({ emotionCount }) => emotionCount["sad"]};
    }
    span:nth-of-type(7) {
        background: ${({ theme }) => theme.colors.emotionHurt};
        flex-grow: ${({ emotionCount }) => emotionCount["hurt"]};
    }
    span:nth-of-type(8) {
        background: ${({ theme }) => theme.colors.emotionAngry};
        flex-grow: ${({ emotionCount }) => emotionCount["angry"]};
    }

    ${({ theme }) => theme.device.mobile} {
        height: 1rem;
    }
`;

export const EmotionListContent = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    gap: 0 40px;

    ${({ theme }) => theme.device.desktop} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px 24px;
        width: fit-content;
        margin: 0 auto;
    }
`;

export const EmotionList = styled.dl<{ url: string }>`
    text-align: center;
    dt {
        width: 55px;
        height: 40px;
        background: url(${({ url }) => url}) no-repeat center;
        background-size: contain;
        text-indent: -9999px;
    }

    dd {
        margin-top: 0.5rem;
    }

    ${({ theme }) => theme.device.mobile} {
        text-align: center;
        dt {
            width: 33px;
            height: 24px;
            margin: 0 auto;
        }

        dd {
            margin-top: 0.5rem;
        }
    }
`;
