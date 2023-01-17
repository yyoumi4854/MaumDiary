import styled from "styled-components";

export const MainContainer = styled.main<{ background: string }>`
    background: ${({ background }) => background};

    transition: all 0.8s;
`;
