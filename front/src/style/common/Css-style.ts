import { css } from "styled-components";
import { transparentize } from "polished";

export const diaryContnet = css`
    border-radius: 10px;
    background: ${transparentize(0.5, "#fff")};
    backdrop-filter: saturate(180%) blur(2px);
`;

export const scrollbar = css`
    overflow: auto;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.main};
    }
    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.greyBorder};
    }
`;

export const appearance = css`
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

export const chattingCount = css`
    padding: 4px;
    min-width: calc(0.9rem + 8px);
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.mainDeep};
    color: #fff;
    font-size: ${({ theme }) => theme.fonts.size.small};
    text-align: center;
`;

export const Profile = css`
    border-radius: 50%;
    background: lightgray;
    overflow: hidden;
    img {
        width: 100%;
    }
`;
