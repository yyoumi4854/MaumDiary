import styled from "styled-components";

export const RegisterStepContent = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    gap: 0 124px;
    position: relative;
    margin-top: 1rem;

    dl + dl::before {
        content: "";
        ${({ theme }) => theme.common.positionXCenter}
        top: 18px;
        width: 180px;
        height: 4px;
    }

    dl:nth-of-type(1) {
        position: relative;
        z-index: 10;
    }

    ${({ theme }) => theme.device.mobile} {
        gap: 0 88px;
        dl + dl::before {
            top: 13px;
            width: 140px;
            height: 4px;
        }
    }
`;

export const RegisterStepList = styled.dl<{ hasStep?: boolean }>`
    &::before {
        background: ${({ hasStep, theme }) =>
            hasStep ? theme.colors.main : theme.colors.greyBorder};
    }

    dt {
        width: 40px;
        height: 40px;
        /* margin: 0 auto; */
        ${({ theme }) => theme.common.marginXCenter}
        border-radius: 50%;
        background: ${({ hasStep, theme }) =>
            hasStep ? theme.colors.main : theme.colors.greyBorder};
        text-align: center;
        line-height: 40px;
        color: #fff;
    }

    dd {
        margin-top: 8px;
        font-weight: ${({ hasStep, theme }) => (hasStep ? "" : theme.fonts.weight.light)};
        color: ${({ hasStep, theme }) =>
            hasStep ? theme.colors.mainDeep : theme.colors.greyBorder};
    }

    ${({ theme }) => theme.device.mobile} {
        dt {
            width: 32px;
            height: 32px;
            line-height: 32px;
        }
    }
`;
