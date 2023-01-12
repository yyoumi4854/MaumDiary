import styled from "styled-components";
import { Link } from "react-router-dom";

import * as Animation from "../common/Animation-style";

export const HomeContainer = styled.div`
    position: relative;

    height: 100vh;
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

export const GreetingMessage = styled.h2<{ white: boolean }>`
    height: 80px;

    font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
    color: ${({ white }) => white === true && "white"};

    span {
        margin-bottom: 8px;

        font-size: ${({ theme }) => theme.fonts.size.middle};
    }

    div {
        width: 302;
        height: 48px;

        line-height: 24px;
    }
`;

export const QuickLink = styled(Link)`
    width: 160px;
    height: 48px;

    margin-top: 80px;
    padding: 0 16px;

    font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
    color: white;
    /* line-height: 48px; */

    background: ${({ theme }) => theme.colors.main};

    & + & {
        margin-left: 17px;
    }

    &:hover p svg {
        -webkit-animation: ${Animation.MoveBackwardArrow} 1.5s infinite;
        -moz-animation: ${Animation.MoveBackwardArrow} 1.5s infinite;
        -o-animation: ${Animation.MoveBackwardArrow} 1.5s infinite;
        animation: ${Animation.MoveBackwardArrow} 1.5s infinite;
    }

    p {
        ${({ theme }) => theme.common.flexCenter}
        justify-content: space-between;
        margin-top: 1rem;
    }
`;
