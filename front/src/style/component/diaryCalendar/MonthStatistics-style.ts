import styled from "styled-components";

import * as Css from "@/style/common/Css-style";

import confidenceSvg from "@/images/emotion/confidence.svg";
import exciteSvg from "@/images/emotion/excite.svg";
import thanksSvg from "@/images/emotion/thanks.svg";
import comfortableSvg from "@/images/emotion/comfortable.svg";
import anxietySvg from "@/images/emotion/anxiety.svg";
import sadSvg from "@/images/emotion/sad.svg";
import hurtSvg from "@/images/emotion/hurt.svg";
import angrySvg from "@/images/emotion/angry.svg";

export const MonthStatisticsContent = styled.div`
    grid-column: 1 / 3;
    ${Css.diaryContnet}
    padding: 20px;
`;

export const StatisticsContnet = styled.div<{ percent: number[] }>`
    display: flex;
    width: 80%;
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
        width: ${({ percent }) => `${percent[0]}%`};
    }
    span:nth-of-type(2) {
        background: ${({ theme }) => theme.colors.emotionExcite};
        width: ${({ percent }) => `${percent[1]}%`};
    }
    span:nth-of-type(3) {
        background: ${({ theme }) => theme.colors.emotionThanks};
        width: ${({ percent }) => `${percent[2]}%`};
    }
    span:nth-of-type(4) {
        background: ${({ theme }) => theme.colors.emotionComfortable};
        width: ${({ percent }) => `${percent[3]}%`};
    }
    span:nth-of-type(5) {
        background: ${({ theme }) => theme.colors.emotionAnxiety};
        width: ${({ percent }) => `${percent[4]}%`};
    }
    span:nth-of-type(6) {
        background: ${({ theme }) => theme.colors.emotionSad};
        width: ${({ percent }) => `${percent[5]}%`};
    }
    span:nth-of-type(7) {
        background: ${({ theme }) => theme.colors.emotionHurt};
        width: ${({ percent }) => `${percent[6]}%`};
    }
    span:nth-of-type(8) {
        background: ${({ theme }) => theme.colors.emotionAngry};
        width: ${({ percent }) => `${percent[7]}%`};
    }
`;

// export const PercentBox = styled.span<{ width?: string; color: string }>`
//     height: 100%;
//     width: ${({ width }) => width};
//     background: ${({ theme, color }) => theme.colors[color]};
// `;

export const EmotionListContent = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    gap: 0 40px;

    dl {
        text-align: center;
        dt {
            width: 55px;
            height: 40px;
            text-indent: -9999px;
        }

        dd {
            margin-top: 0.5rem;
        }
    }

    dl:nth-child(1) {
        dt {
            background: url(${confidenceSvg}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(2) {
        dt {
            background: url(${exciteSvg}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(3) {
        dt {
            background: url(${thanksSvg}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(4) {
        dt {
            background: url(${comfortableSvg}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(5) {
        dt {
            background: url(${anxietySvg}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(6) {
        dt {
            background: url(${sadSvg}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(7) {
        dt {
            background: url(${hurtSvg}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(8) {
        dt {
            background: url(${angrySvg}) no-repeat center;
            background-size: contain;
        }
    }
`;
