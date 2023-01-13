import styled from "styled-components";
import { transparentize } from "polished";

import * as Animation from "../common/Animation-style";

import CloudSVG from "@/images/cloud.svg";

export const Background = styled.div<{ backgroundColor: string }>`
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100vh;

    /* background: ${({ backgroundColor }) => backgroundColor}; */
`;

export const Lane = styled.div`
    position: relative;

    height: 160px;
`;

export const Cloud = styled.img.attrs({
    src: CloudSVG,
})`
    ${({ theme }) => theme.common.positionCenter}
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
