import styled from "styled-components";

export const ProfileToggleContent = styled.div`
    position: relative;

    button > div {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: lightgray;
    }
`;

export const ProfileContent = styled.div`
    position: absolute;
    right: 0;
    bottom: -208px;
    min-width: 200px;
    height: 200px;
    border-radius: 4px;
    background: #fff;
    ${({ theme }) => theme.common.boxShadow};

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
`;

export const ProfileTopContent = styled.div`
    display: flex;
    gap: 0 16px;
    width: max-content;

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
            color: ${({ theme }) => theme.colors.greyFont};
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
        color: ${({ theme }) => theme.colors.greyFont};
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        transition: all 0.3s;

        svg {
            font-size: 24px;
        }

        &:hover {
            color: ${({ theme }) => theme.colors.mainDeep};
        }
    }
`;
