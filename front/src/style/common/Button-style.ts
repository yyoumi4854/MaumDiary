import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const mainColorButton = css`
    height: 40px;
    background: ${({ theme }) => theme.colors.main};
    color: #fff;
`;

const greyColorButton = css`
    height: 40px;
    background: ${({ theme }) => theme.colors.greyBackground};
    color: ${({ theme }) => theme.colors.greyText};
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

// 취소/탈퇴
export const ButtonWrap = styled.div`
    ${({ theme }) => theme.common.flexCenter};

    button {
        width: 80px;
        height: 40px;
        border-radius: 2px;
    }
    button:first-of-type {
        ${greyColorButton}
    }
    button:last-of-type {
        margin-left: 0.5rem;
        ${mainColorButton}
    }
`;
