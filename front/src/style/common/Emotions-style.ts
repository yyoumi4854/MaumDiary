import styled from "styled-components";
import { transparentize } from "polished";

export const Tab = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    gap: 40px;
    width: 100%;
    overflow-x: scroll;

    & {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    ${({ theme }) => theme.device.mobile} {
        justify-content: flex-start;
        gap: 16px;
    }
`;

export const TabButton = styled.button`
    p {
        margin-top: 8px;
        text-align: center;
    }
`;

export const Circle = styled.div<{ url: string }>`
    ${({ theme }) => theme.common.flexCenter};

    width: 64px;
    height: 64px;

    border-radius: 50%;

    background: url(${({ url }) => url}) no-repeat center white;
    background-size: auto 36px;
    box-shadow: 0px 4px 4px rgba(119, 119, 119, 0.25);
    ${({ theme }) => theme.device.mobile} {
        width: 56px;
        height: 56px;
        background-size: auto 24px;
    }
`;

export const ScrollIndicator = styled.div<{ left: number }>`
    position: relative;
    display: none;
    margin: 20px auto;
    width: 100px;
    height: 2px;

    background: ${({ theme }) => theme.colors.greyBackground};

    &::before {
        content: "";

        position: absolute;
        top: 0;
        left: ${({ left }) => `${left}%`};

        width: 50%;
        height: 100%;

        background: ${({ theme }) => theme.colors.main};
    }

    ${({ theme }) => theme.device.mobile} {
        display: block;
    }
`;
