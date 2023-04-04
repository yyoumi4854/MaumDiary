import styled from "styled-components";
import { transparentize } from "polished";
import { Chating, Profile } from "../common/Css-style";

export const Container = styled.article`
    margin-top: 64px;
    width: 100%;

    background: ${transparentize(0.5, "#fff")};
    border-radius: 8px;

    & + & {
        margin-top: 40px;
    }

    ${({ theme }) => theme.device.mobile} {
        margin-top: 20px;
    }
`;

export const Header = styled.div`
    ${({ theme }) => theme.common.flexBetween}
    padding: 24px 40px;

    ${({ theme }) => theme.device.mobile} {
        padding: 3%;
    }
`;
export const LeftPart = styled.div`
    ${({ theme }) => theme.common.flexCenter}

    img {
        width: 48px;
        height: 48px;
    }

    p {
        margin-left: 16px;
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
    }

    ${({ theme }) => theme.device.mobile} {
        justify-content: flex-start;
        width: 50%;
        p {
            margin-left: 8px;
        }
    }
`;
export const RightPart = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    gap: 0 8px;

    div {
        ${({ theme }) => theme.common.flexCenter}

        .day {
            ${({ theme }) => theme.common.flexCenter}
            font-size: ${({ theme }) => theme.fonts.size.small};
            font-weight: ${({ theme }) => theme.fonts.weight.light};
            color: ${({ theme }) => theme.colors.greyText};

            &::after {
                content: "";
                margin: 0 8px;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: ${({ theme }) => theme.colors.greyText};
            }
        }

        ${({ theme }) => theme.device.mobile} {
            .dat {
                font-size: ${({ theme }) => theme.fonts.size.xsmall};
            }
        }
    }

    button {
        margin-top: 6px;

        width: 0;
        height: 0;

        border-top: 6px solid #475367;
        border-bottom: 6px solid transparent;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;

        &.open {
            margin-top: 0;
            margin-bottom: 6px;

            transform: rotate(180deg);
        }
    }
`;

export const Content = styled.div<{ open: boolean }>`
    display: ${({ open }) => (open ? "block" : "none")};

    width: 727px;

    padding: 0 40px;
    margin-bottom: 24px;
`;

export const Footer = styled.div`
    ${({ theme }) => theme.common.flexBetween}
    padding: 16px 40px;
    border-top: 1px solid ${({ theme }) => theme.colors.greyBorder};

    ${({ theme }) => theme.device.mobile} {
        padding: 8px 3%;
    }
`;

export const FooterLeft = styled.div`
    ${({ theme }) => theme.common.flexCenter}

    div:first-of-type {
        width: 24px;
        height: 24px;
        ${Profile}
    }

    & > p {
        margin-left: 8px;
        font-size: ${({ theme }) => theme.fonts.size.small};
        span {
            color: ${({ theme }) => theme.colors.greyText};
        }
    }

    div:last-of-type {
        ${({ theme }) => theme.common.flexCenter}
        position: relative;
        cursor: pointer;

        svg.fill {
            color: ${({ theme }) => theme.colors.warnning};
        }

        p {
            margin-left: 4px;
        }

        &::before {
            content: "";
            margin: 0 8px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.greyText};
        }
    }
`;

export const FooterRight = styled.div`
    button {
        line-height: 100%;
    }

    div {
        button {
            border-radius: 2px;
            padding: 6px 8px;
            font-size: ${({ theme }) => theme.fonts.size.small};
        }

        button:first-of-type {
            background: ${({ theme }) => theme.colors.greyBackground};
            color: ${({ theme }) => theme.colors.greyText};
        }

        button:last-of-type {
            margin-left: 0.5rem;
            background: ${({ theme }) => theme.colors.main};
            color: #fff;
        }
    }
`;

export const ChatContent = styled.div`
    padding: 16px 40px;

    & > div {
        ${Chating}
        background: ${({ theme }) => theme.colors.greyBackground};
    }

    ${({ theme }) => theme.device.mobile} {
        padding: 8px 3%;
    }
`;
