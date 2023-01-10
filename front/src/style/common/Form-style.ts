import styled, { FormStyle } from "styled-components";

export const BasicsInputText = styled.input<FormStyle>`
    display: block;
    width: ${({ isButton }) => (isButton ? "auto" : "100%")};
    height: 40px;
    margin-bottom: ${({ marginBottom }) => marginBottom};
    padding: 0 1rem;
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
    width: 100%;
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

    ${({ theme }) => theme.device.mobile} {
        div {
            grid-template-columns: 1fr 100px;
        }
    }
`;

export const MessageText = styled.span<FormStyle>`
    margin: 0.5rem;
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ theme, warnning }) => (warnning ? theme.colors.warnning : theme.colors.confirm)};
`;
