import styled from "styled-components";

export const MainContainer = styled.main<{ background: string; period: string }>`
    background: ${({ background }) => background};

    transition: all 0.8s;

    & > div {
        position: relative;
        z-index: 10;
        color: ${({ period }) => (period !== "" ? "red" : "white")};
    }
`;
