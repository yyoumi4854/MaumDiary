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

    max-width: 337px;
    height: 264px;

    h1 {
        margin-bottom: 24px;
    }

    ${({ theme }) => theme.device.mobile} {
        width: 100%;
    }
`;

export const GreetingMessage = styled.div<{ white: boolean }>`
    height: fit-content;

    // global.ts에 있는 색상을 바꿀 수 있게 재셜계
    color: ${({ white }) => white === true && "white"};

    h2 {
        margin-bottom: 8px;

        font-size: ${({ theme }) => theme.fonts.size.middle};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }

    p {
        height: 48px;

        font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
        line-height: 1.5;
    }

    ${({ theme }) => theme.device.mobile} {
        /* width: 241px;
        height: 90px; */

        font-size: 20px;
    }
`;

export const GreetingBottom = styled.div`
    margin-top: 80px;

    ${({ theme }) => theme.common.flexCenter}
`;

export const QuickLink = styled(Link)`
    ${({ theme }) => theme.common.flexBetween}

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
