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

export const Cloud = styled.img.attrs((props: { offset: string }) => ({
    src: CloudSVG,
    offset: props.offset || 0,
}))`
    position: absolute;
    top: 50%;
    left: ${(props) => props.offset};
    transform: translateY(-50%);
`;
