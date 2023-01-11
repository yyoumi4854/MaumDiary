import styled from "styled-components";

export const MainContainer = styled.main<{ background: string }>`
    background: ${({ background }) => background};
`;
