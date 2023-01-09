import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const mainColorButton = css`
    height: 40px;
    background: ${({ theme }) => theme.colors.main};
    color: #fff;
`;

const disabled = css`
    &:disabled {
        opacity: 0.5;
        cursor: auto;
    }
`;

// 인증번호 발송, 인증번호 확인,
export const MediumButton = styled.button`
    width: 120px;
    border-radius: 2px;
    ${mainColorButton}
    ${disabled}

    ${({ theme }) => theme.device.mobile} {
        width: 100px;
    }
`;

// 로그인, 회원가입, 로그인 하러가기...
export const LongButton = styled.button`
    width: 100%;
    border-radius: 4px;
    ${mainColorButton}
    ${disabled}
`;
