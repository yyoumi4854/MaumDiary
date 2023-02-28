import styled, { css } from "styled-components";

import * as Css from "@/style/common/Css-style";

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

    ${({ theme }) => theme.device.mobile} {
        display: block;
    }
`;

export const TopLeftContent = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    ${({ theme }) => theme.device.mobile} {
        display: block;
        text-align: center;
    }
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
        ${Css.appearance}
    }

    input[type="radio"]:checked + label {
        span {
            svg {
                color: ${({ theme }) => theme.colors.main};
            }
        }
    }

    ${({ theme }) => theme.device.mobile} {
        width: fit-content;
        margin: 1rem auto;
    }
`;

export const isPublicFieldset = styled.fieldset`
    position: relative;

    select {
        ${Css.appearance}

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

    ${({ theme }) => theme.device.mobile} {
        width: fit-content;
        margin: 0 auto;
    }
`;

export const TextContent = styled.div`
    margin-top: 20px;

    input {
        ${textBox}
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
        width: 100%;
    }

    textarea {
        height: 360px;
        margin-top: 20px;
        ${textBox}
        ${Css.scrollbar}
    }

    p.textCount {
        display: block;
        margin-top: 8px;
        text-align: right;
        font-size: ${({ theme }) => theme.fonts.size.small};
        span {
            font-weight: ${({ theme }) => theme.fonts.weight.light};
            color: ${({ theme }) => theme.colors.greyText};
        }
    }

    ${({ theme }) => theme.device.mobile} {
        & > div {
            display: block;

            & > span {
                display: block;
                margin: 0 auto;
            }
        }

        input {
            margin-top: 20px;
        }
    }
`;
