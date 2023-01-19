import styled from "styled-components";

import * as Css from "@/style/common/Css-style";

import Emotion from "@/utils/emotionIcon";

export const MonthStatisticsContent = styled.div`
    grid-column: 1 / 3;
    ${Css.diaryContnet}
    padding: 20px;
`;

export const StatisticsContnet = styled.div<{ percent: number[] }>`
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
        width: ${({ percent }) => `${percent[0]}%`};
    }
    span:nth-of-type(2) {
        background: ${({ theme }) => theme.colors.emotionExcitement};
        width: ${({ percent }) => `${percent[1]}%`};
    }
    span:nth-of-type(3) {
        background: ${({ theme }) => theme.colors.emotionThanks};
        width: ${({ percent }) => `${percent[2]}%`};
    }
    span:nth-of-type(4) {
        background: ${({ theme }) => theme.colors.emotionComfort};
        width: ${({ percent }) => `${percent[3]}%`};
    }
    span:nth-of-type(5) {
        background: ${({ theme }) => theme.colors.emotionWorry};
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

    ${({ theme }) => theme.device.mobile} {
        /* margin: 1.5rem auto; */

        height: 1rem;
    }
`;

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
            background: url(${Emotion.confidence}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(2) {
        dt {
            background: url(${Emotion.excitement}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(3) {
        dt {
            background: url(${Emotion.thanks}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(4) {
        dt {
            background: url(${Emotion.comport}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(5) {
        dt {
            background: url(${Emotion.worry}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(6) {
        dt {
            background: url(${Emotion.sad}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(7) {
        dt {
            background: url(${Emotion.hurt}) no-repeat center;
            background-size: contain;
        }
    }
    dl:nth-child(8) {
        dt {
            background: url(${Emotion.angry}) no-repeat center;
            background-size: contain;
        }
    }

    ${({ theme }) => theme.device.desktop} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px 24px;
        width: fit-content;
        margin: 0 auto;
    }

    ${({ theme }) => theme.device.mobile} {
        dl {
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
    }
`;
