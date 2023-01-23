import styled, { css } from "styled-components";

import * as Css from "@/style/common/Css-style";

const appearance = css`
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

const selectBox = css`
    height: 32px;
    padding: 4px 16px;
    border-radius: 16px;
    background: #fff;
`;

const textBox = css`
    width: 100%;
    padding: 8px 20px;
    border: 1px solid ${({ theme }) => theme.colors.greyBorder};
    border: 1px solid #ccc;
    border-radius: 4px;
    background: transparent;

    &::placeholder {
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        color: ${({ theme }) => theme.colors.greyText};
    }
`;

export const DiaryFormContent = styled.div`
    padding: 20px 0;

    form > div:last-of-type {
        justify-content: flex-end;
        margin-top: 20px;
    }
`;

export const DiaryFormWrap = styled.div`
    ${Css.diaryContnet}
    margin-top: 20px;
    padding: 20px;

    legend {
        display: none;
        text-indent: -9999px;
    }
`;

export const TopContent = styled.div`
    ${({ theme }) => theme.common.flexBetween}
`;

export const TopLeftContent = styled.div`
    ${({ theme }) => theme.common.flexCenter}
`;

export const WeatherFieldset = styled.fieldset`
    ${({ theme }) => theme.common.flexCenter}
    gap: 0 16px;
    margin-left: 24px;
    ${selectBox}

    label {
        cursor: pointer;
        span {
            width: 24px;
            height: 24px;

            svg {
                font-size: 24px;
                color: ${({ theme }) => theme.colors.greyBorder};
            }
        }
    }

    input[type="radio"] {
        display: none;
        ${appearance}
    }

    input[type="radio"]:checked + label {
        span {
            svg {
                color: ${({ theme }) => theme.colors.main};
            }
        }
    }
`;

export const isPublicFieldset = styled.fieldset`
    position: relative;

    select {
        ${appearance}

        ${selectBox}
        padding-right: 36px;
        border: none;
        font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
        color: ${({ theme }) => theme.colors.mainDark};
        cursor: pointer;
    }

    &::before {
        content: "";
        position: absolute;
        top: 13px;
        right: 16px;
        border: 6px solid transparent;
        border-top: 6px solid ${({ theme }) => theme.colors.greyBorder};
    }
`;

export const TextContent = styled.div`
    margin-top: 20px;

    div {
        display: grid;
        grid-template-columns: 64px 1fr;
        gap: 0 20px;

        span {
            width: 64px;
            height: 64px;
            background: lightgray;
        }

        p {
            line-height: 64px;
        }
    }

    input {
        ${textBox}
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
    }

    textarea {
        height: 360px;
        margin-top: 20px;
        ${textBox}
        line-height: 1.5;
        resize: none;
    }
`;

export const EmotionFieldset = styled.fieldset`
    ${({ theme }) => theme.common.flexCenter}
    gap: 0 24px;
    width: 90%;
    margin: 0 auto;

    label {
        text-align: center;
        cursor: pointer;

        span {
            display: block;
        }

        span:first-of-type {
            width: 64px;
            height: 64px;
            background: lightgray;
        }

        span:last-of-type {
            margin-top: 8px;
            font-weight: ${({ theme }) => theme.fonts.weight.light};
            color: ${({ theme }) => theme.colors.greyText};
        }
    }

    input[type="radio"] {
        display: none;
        ${appearance}
    }

    input[type="radio"]:checked + label {
        span:last-of-type {
            font-weight: ${({ theme }) => theme.fonts.weight.medium};
            color: ${({ theme }) => theme.colors.main};
        }
    }
`;
