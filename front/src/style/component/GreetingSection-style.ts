import styled from "styled-components";
import { Link } from "react-router-dom";

import * as Animation from "../common/Animation-style";

export const GreetingSection = styled.section`
    position: relative;

    height: 817px;
`;

export const Greeting = styled.div`
    position: absolute;

    top: 280px;
    left: 0;

    width: 337px;
    height: 264px;

    h1 {
        margin-bottom: 24px;
    }

    h1 img {
        filter: invert(62%) sepia(54%) saturate(627%) hue-rotate(189deg) brightness(103%)
            contrast(101%);
    }
`;

export const GreetingMessage = styled.div<{ white: boolean }>`
    height: fit-content;

    font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};

    // global.ts에 있는 색상을 바꿀 수 있게 재셜계
    color: ${({ white }) => white === true && "white"};

    h2 {
        margin-bottom: 8px;

        font-size: ${({ theme }) => theme.fonts.size.middle};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }

    p {
        height: 48px;

        line-height: 1.5;
    }
`;

export const GreetingBottom = styled.div`
    margin-top: 80px;

    ${({ theme }) => theme.common.flexCenter}
`;

export const QuickLink = styled(Link)`
    ${({ theme }) => theme.common.flexCenter}
    justify-content: space-between;

    width: 160px;
    height: 48px;

    padding: 0 16px;

    font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
    color: white;

    background: ${({ theme }) => theme.colors.main};

    border-radius: 2px;

    & + & {
        margin-left: 16px;
    }

    &:hover p svg {
        -webkit-animation: ${Animation.MoveBackwardArrow} 1.5s infinite;
        -moz-animation: ${Animation.MoveBackwardArrow} 1.5s infinite;
        -o-animation: ${Animation.MoveBackwardArrow} 1.5s infinite;
        animation: ${Animation.MoveBackwardArrow} 1.5s infinite;
    }
`;
