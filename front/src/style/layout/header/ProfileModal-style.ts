import styled from "styled-components";

export const ProfileContent = styled.div`
    position: absolute;
    top: 46px;
    right: 0;
    height: 200px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(71, 83, 103, 0.2);

    &::before {
        content: "";
        position: absolute;
        top: -16px;
        right: 10px;
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
        border-left: 8px solid transparent;
    }

    ${({ theme }) => theme.device.mobile} {
        top: 30px;
        height: 180px;

        &::before {
            top: -12px;
            right: 7px;
            border-top: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #fff;
            border-left: 6px solid transparent;
        }
    }
`;

export const ProfileTopContent = styled.div`
    display: flex;
    gap: 0 16px;
    width: max-content;
    min-width: 200px;
    padding: 16px;

    & > div {
        display: inline-block;
    }

    div:first-of-type {
        display: inline-block;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: lightgray;
    }

    div:last-of-type {
        span {
            margin-top: 4px;
            font-weight: ${({ theme }) => theme.fonts.weight.light};
            font-size: ${({ theme }) => theme.fonts.size.small};
            color: ${({ theme }) => theme.colors.greyText};
        }
    }
`;

export const ProfileBottomContent = styled.div`
    width: 100%;
    padding: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.greyBorder};

    ul li > * {
        display: flex;
        align-items: center;
        gap: 0 8px;
        padding: 4px 0;
        color: ${({ theme }) => theme.colors.greyText};
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        transition: all 0.3s;

        svg {
            font-size: 20px;
        }

        &:hover {
            color: ${({ theme }) => theme.colors.mainDeep};
        }
    }

    ${({ theme }) => theme.device.mobile} {
        ul li > * svg {
            font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
        }
    }
`;
