import styled from "styled-components";

export const ErrorContent = styled.div<{ background: string }>`
    ${({ theme }) => theme.common.flexCenter}
    height: 100vh;
    background: ${({ background }) => background};
`;

export const TextContent = styled.div`
    position: relative;
    z-index: 100;
    width: 600px;
    background: #fff;
    border-radius: 8px;
    padding: 40px 0;
    border: 2px solid ${({ theme }) => theme.colors.main};
    text-align: center;

    h2 {
        margin-top: 8px;
    }

    p {
        margin-top: 20px;
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        color: ${({ theme }) => theme.colors.greyText};
        line-height: 1.5;
    }

    button {
        margin-top: 48px;
    }

    ${({ theme }) => theme.device.mobile} {
        margin: 0 5%;
        width: 100%;
    }
`;
