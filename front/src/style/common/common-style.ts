import styled from "styled-components";
import { transparentize } from "polished";

export const FixedContent = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => transparentize(0.5, theme.colors.mainDark)};
    z-index: 9999;
    backdrop-filter: saturate(180%) blur(3px);
`;
