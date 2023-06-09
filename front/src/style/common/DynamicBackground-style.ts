import styled from "styled-components";
import { transparentize } from "polished";

import * as Animation from "../common/Animation-style";

export const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100vh;
`;

export const Lane = styled.div`
    position: relative;

    height: 160px;
`;

export const Cloud = styled.div<{ bg: boolean }>`
    ${({ theme }) => theme.common.positionCenter}

    img {
        filter: ${({ bg }) =>
            bg
                ? "invert(100%) sepia(2%) saturate(653%) hue-rotate(329deg) brightness(112%) contrast(100%)"
                : "invert(98%) sepia(88%) saturate(766%) hue-rotate(305deg) brightness(106%) contrast(106%)"};
    }
`;

export const Star = styled.div`
    ${({ theme }) => theme.common.positionYCenter}
    left: 100px;
    width: 112px;
    height: 112px;

    span:nth-child(1) {
        ${({ theme }) => theme.common.positionCenter}
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background: radial-gradient(
            50% 50% at 50% 50%,
            ${({ theme }) => transparentize(0.8, theme.colors.nightStar)} 0%,
            ${({ theme }) => transparentize(0.8, theme.colors.nightStar)} 50%,
            ${({ theme }) => transparentize(1, theme.colors.nightStar)} 100%
        );
        -webkit-animation: ${Animation.StarblurSize} 6s infinite;
        -moz-animation: ${Animation.StarblurSize} 6s infinite;
        -o-animation: ${Animation.StarblurSize} 6s infinite;
        animation: ${Animation.StarblurSize} 6s infinite;
    }

    span:nth-child(2) {
        ${({ theme }) => theme.common.positionCenter}
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: radial-gradient(
            50% 50% at 50% 50%,
            ${({ theme }) => transparentize(0.5, theme.colors.nightStar)} 0%,
            ${({ theme }) => transparentize(0.9, theme.colors.nightStar)} 100%
        );
    }

    span:nth-child(3) {
        ${({ theme }) => theme.common.positionCenter}
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #fffcef;
        box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.nightStar};
    }
`;
