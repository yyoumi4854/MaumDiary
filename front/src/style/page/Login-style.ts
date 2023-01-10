import styled, { css } from "styled-components";

import * as Animation from "../common/Animation-style";

import kakaoIcon from "@/images/kakao-icon.png";

const pseudoSelectorLine = css`
    content: "";
    ${({ theme }) => theme.common.positionYCenter}
    width: calc(50% - 1rem);
    height: 1px;
    background: ${({ theme }) => theme.colors.mainDeep};
`;

export const EasyLoginContent = styled.div`
    & > span {
        position: relative;
        display: block;
        margin-top: 48px;
        text-align: center;
        color: ${({ theme }) => theme.colors.mainDeep};

        &::before {
            ${pseudoSelectorLine}
        }
        &::after {
            ${pseudoSelectorLine}
            left: inherit;
            right: 0;
        }
    }

    a {
        ${({ theme }) => theme.common.flexCenter}
        justify-content: space-between;
        margin-top: 1em;

        p svg {
            margin-left: 0.5em;
        }

        &:hover p svg {
            -webkit-animation: ${Animation.MoveForwardArrow} 1.5s infinite;
            -moz-animation: ${Animation.MoveForwardArrow} 1.5s infinite;
            -o-animation: ${Animation.MoveForwardArrow} 1.5s infinite;
            animation: ${Animation.MoveForwardArrow} 1.5s infinite;
        }

        span {
            width: 64px;
            height: 64px;
            text-indent: -9999px;
            background: url(${kakaoIcon}) no-repeat center;
            background-size: contain;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        a span {
            width: 48px;
            height: 48px;
        }
    }
`;
