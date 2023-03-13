import styled from "styled-components";

export const DiaryChatContent = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 20px;
    height: calc(100vh - 60px - 40px);

    ${({ theme }) => theme.device.mobile} {
        height: calc(100vh - 60px - 40px - 64px);
    }
`;
