import styled from "styled-components";
import * as Animation from "./Animation-style";

export const LoadingContent = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    svg {
        width: 54px;
        height: 54px;
        animation: ${Animation.LoadingSpin} 3s infinite;
    }

    circle {
        stroke: ${({ theme }) => theme.colors.mainDeep};
        stroke-width: 4;
        stroke-dasharray: 157, 157;
        stroke-dashoffset: 0;
        fill: transparent;
        animation: ${Animation.LoadingCircle} 1s infinite;
    }
`;
