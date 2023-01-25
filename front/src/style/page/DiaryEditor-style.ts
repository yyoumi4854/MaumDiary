import styled from "styled-components";

import * as Css from "@/style/common/Css-style";

export const CurrentEmotionContent = styled.div`
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: 0 20px;

    & > img {
        width: 64px;
        height: 64px;
    }

    ${({ theme }) => theme.device.mobile} {
        & > img {
            display: block;
            margin: 0 auto;
        }
    }
`;

export const EmotionFieldset = styled.fieldset`
    ${({ theme }) => theme.common.flexCenter}
    gap: 0 24px;
    width: 90%;
    margin: 0 auto;

    input[type="radio"] {
        display: none;
        ${Css.appearance}
    }

    input[type="radio"]:checked + label {
        span:first-of-type {
            filter: grayscale(0);
        }

        span:last-of-type {
            font-weight: ${({ theme }) => theme.fonts.weight.medium};
            color: ${({ theme }) => theme.colors.main};
        }
    }

    ${({ theme }) => theme.device.desktop} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px 24px;
        width: fit-content;
        margin: 0 auto;
    }
`;

export const EmotionLabel = styled.label<{ url: string }>`
    text-align: center;
    cursor: pointer;

    span {
        display: block;
    }

    span:first-of-type {
        width: 64px;
        height: 64px;
        text-indent: -9999px;
        background: url(${({ url }) => url}) no-repeat center;
        background-size: contain;
        filter: grayscale(0.8);
    }

    span:last-of-type {
        margin-top: 8px;
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        color: ${({ theme }) => theme.colors.greyText};
    }

    ${({ theme }) => theme.device.mobile} {
        span:first-of-type {
            width: 40px;
            height: 40px;
        }
    }
`;
