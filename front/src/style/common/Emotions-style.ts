import styled from "styled-components";

export const Container = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    gap: 40px;

    margin-bottom: 88px;
`;

export const TabButton = styled.div`
    p {
        margin-top: 8px;

        text-align: center;
    }
`;

export const Circle = styled.button<{ url: string }>`
    ${({ theme }) => theme.common.flexCenter};

    width: 64px;
    height: 64px;

    border-radius: 50%;

    background: url(${({ url }) => url}) no-repeat center;
    box-shadow: 0px 4px 4px rgba(119, 119, 119, 0.25);
`;
