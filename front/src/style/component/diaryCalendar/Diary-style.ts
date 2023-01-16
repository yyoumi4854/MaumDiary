import styled from "styled-components";
import { transparentize } from "polished";

import * as Css from "@/style/common/Css-style";

export const NoneDiaryContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    ${Css.diaryContnet}

    div {
        text-align: center;

        svg {
            font-size: 64px;
            color: ${({ theme }) => transparentize(0.5, theme.colors.mainDark)};
        }

        p {
            margin: 8px 0 1.5rem;
            line-height: 1.5;

            span {
                color: ${({ theme }) => theme.colors.mainDeep};
            }
        }
    }

    ${({ theme }) => theme.device.mobile} {
        height: 300px;
    }
`;

export const DiaryContent = styled.div`
    position: relative;
    ${Css.diaryContnet}
    padding: 20px;

    svg {
        font-size: 24px;
    }
`;

export const DiaryTopContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    justify-content: space-between;

    & > div {
        ${({ theme }) => theme.common.flexCenter};
    }

    & > div:first-of-type {
        span + span {
            position: relative;
            padding-left: 20px;
            &::before {
                content: "";
                ${({ theme }) => theme.common.positionYCenter}
                left: 8px;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: ${({ theme }) => theme.colors.greyBackground};
            }

            svg {
                font-size: 20px;
            }
        }
    }

    & > div:last-of-type {
        span {
            margin-left: 4px;
        }
    }
`;

export const DiaryTextContent = styled.div`
    margin-top: 1.5rem;

    & > div:first-of-type {
        display: flex;
        align-items: center;

        img {
            width: 48px;
            object-fit: contain;
        }

        p {
            margin-left: 1rem;
            font-weight: ${({ theme }) => theme.fonts.weight.medium};
        }
    }

    & > div:last-of-type {
        height: 220px;
        margin-top: 1.5rem;
        line-height: 1.5;
        ${Css.scrollbar}
    }

    ${({ theme }) => theme.device.mobile} {
        & > div:first-of-type {
            img {
                width: 32px;
            }

            p {
                margin-left: 1rem;
            }
        }

        & > div:last-of-type {
            height: 220px;
            margin-top: 1rem;
        }
    }
`;

export const DiaryBottomContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: 20px;

    & > div:first-of-type {
        svg {
            color: ${({ theme }) => theme.colors.warnning};
        }

        span {
            margin-left: 0.5rem;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        position: inherit;
        padding: 0;
        padding-top: 20px;
    }
`;
