import styled from "styled-components";

import CloudSVG from "@/images/cloud.svg";

export const Background = styled.div<{ backgroundColor: string }>`
    position: relative;

    width: 100vw;
    height: 100vh;

    background-color: ${({ backgroundColor }) => backgroundColor};

    z-index: -9999;
`;

export const Lane = styled.div`
    position: relative;

    height: 160px;
`;

export const Cloud = styled.img.attrs({
    src: CloudSVG,
})`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
