import styled, { css } from "styled-components";

const mainColorButton = css`
    height: 40px;
    background: ${({ theme }) => theme.colors.main};
    border-radius: 2px;
    color: #fff;
`;

const greyColorButton = css`
    height: 40px;
    background: ${({ theme }) => theme.colors.greyBackground};
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.greyText};
`;

const disabled = css`
    &:disabled {
        opacity: 0.5;
        cursor: auto;
    }
`;

export const SmallButton = styled.button`
    width: 80px;
    ${mainColorButton}
    ${disabled}

    ${({ theme }) => theme.device.mobile} {
        width: 60px;
    }
`;

// 인증번호 발송, 인증번호 확인,
export const MediumButton = styled.button`
    width: 120px;
    ${mainColorButton}
    ${disabled}

    ${({ theme }) => theme.device.mobile} {
        width: 100px;
    }
`;

// 로그인, 회원가입, 로그인 하러가기...
export const LongButton = styled.button`
    width: 100%;
    ${mainColorButton}
    border-radius: 4px;
    ${disabled}
`;

// 취소/탈퇴
export const ButtonWrap = styled.div`
    ${({ theme }) => theme.common.flexCenter};

    button {
        width: 80px;
        height: 40px;
    }
    button:first-of-type {
        ${greyColorButton}
    }
    button:last-of-type {
        margin-left: 0.5rem;
        ${mainColorButton}
        ${disabled}
    }
`;
