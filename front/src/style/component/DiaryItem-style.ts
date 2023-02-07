import styled from "styled-components";

export const Container = styled.article`
    width: 100%;

    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;

    & + & {
        margin-top: 40px;
    }

    ${({ theme }) => theme.device.mobile} {
        padding: 0 8px;
    }
`;

export const Header = styled.div`
    ${({ theme }) => theme.common.flexBetween}

    height: 96px;

    padding: 0 24px 24px 24px;

    ${({ theme }) => theme.device.mobile} {
        height: 39px;
    }
`;
export const LeftPart = styled.div`
    ${({ theme }) => theme.common.flexCenter}

    img {
        width: 24px;
        height: 23px;
    }

    p {
        margin-left: 17.8px;

        font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};

        ${({ theme }) => theme.device.mobile} {
            margin-left: 8px;

            font-size: 10px;
        }
    }
`;
export const RightPart = styled.div`
    ${({ theme }) => theme.common.flexCenter}

    div {
        ${({ theme }) => theme.common.flexCenter}

        margin-right: 8px;

        .day {
            margin-right: 16px;

            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
            color: #888888;
        }
    }

    button {
        /* margin: 7.5px 0 0 8px; */
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

    ${({ theme }) => theme.device.mobile} {
        div .day {
            margin-right: 12px;
        }
    }
`;

export const Content = styled.div<{ open: boolean }>`
    display: ${({ open }) => (open ? "block" : "none")};

    width: 727px;

    padding: 0 24px;
    margin-bottom: 24px;
`;

export const Footer = styled.div`
    ${({ theme }) => theme.common.flexBetween}

    height: 56px;

    padding: 0 40px;

    div {
        ${({ theme }) => theme.common.flexCenter}

        & > p {
            margin-right: 8px;
        }

        p {
            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
        }
    }

    border-top: 1px solid ${({ theme }) => theme.colors.greyBorder};

    ${({ theme }) => theme.device.mobile} {
        height: 40px;
    }
`;
