import styled, { css } from "styled-components";

const line = css`
    content: "";
    width: 36%;
    height: 1px;
    background: ${({ theme }) => theme.colors.greyText};
`;

export const DayLine = styled.div`
    p {
        position: relative;
        font-size: ${({ theme }) => theme.fonts.weight.light};
        font-size: ${({ theme }) => theme.fonts.size.small};
        color: ${({ theme }) => theme.colors.greyText};
        text-align: center;

        &::before {
            ${line}
            ${({ theme }) => theme.common.positionYCenter}
        }

        &::after {
            ${line}
            ${({ theme }) => theme.common.positionYCenter}
            left: inherit;
            right: 0;
        }
    }
`;

export const Chatting = styled.div<{ to: string }>`
    display: flex;
    justify-content: ${({ to }) => to === "emit" && "flex-end"};
    gap: 0.5rem;
    margin-top: 20px;

    /* 이건 나중에 통합...하자 */
    .profile {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: lightgray;
    }

    div {
        width: 60%;

        b {
            font-weight: ${({ theme }) => theme.fonts.weight.bold};
        }

        p {
            margin-top: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: ${({ to, theme }) =>
                to === "emit" ? theme.colors.main : theme.colors.greyBackground};
            line-height: 1.5;
            white-space: pre-line;
        }
    }

    span {
        display: flex;
        align-items: flex-end;
        order: ${({ to }) => to === "emit" && -1};
        font-size: ${({ theme }) => theme.fonts.weight.light};
        font-size: ${({ theme }) => theme.fonts.size.xsmall};
        color: ${({ theme }) => theme.colors.greyText};
    }
`;
