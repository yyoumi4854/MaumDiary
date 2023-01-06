import styled, { FormStyle } from "styled-components";
import theme from "../Theme";

export const BasicsInputText = styled.input<FormStyle>`
    display: block;
    width: ${({ isButton }) => (isButton ? "auto" : "400px")};
    height: 40px;
    padding: 0 16px;
    border: 1px solid ${({ theme }) => theme.colors.greyBorder};
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.6);
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ theme }) => theme.colors.greyText};

    &:disabled::placeholder {
        opacity: 0.4;
    }

    /* Firefox */
    &::placeholder,
    textarea::placeholder {
        color: ${({ theme }) => theme.colors.greyText};
        opacity: 1;
    }

    /* Microsoft Edge */
    &::-ms-input-placeholder,
    textarea::-ms-input-placeholder {
        color: ${({ theme }) => theme.colors.greyText};
    }
`;

export const FormContent = styled.div`
    width: 400px;
    height: 96px;

    p {
        margin-bottom: 8px;
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
    }

    div {
        display: grid;
        grid-template-columns: 1fr 120px;
        gap: 0 4px;
    }
`;

export const MessageText = styled.span<FormStyle>`
    margin: 8px;
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ warnning }) => (warnning ? theme.colors.warnning : theme.colors.confirm)};
`;
