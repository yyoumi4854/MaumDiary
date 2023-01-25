import styled from "styled-components";

export const LogoContent = styled.h1`
    img {
        filter: invert(62%) sepia(54%) saturate(627%) hue-rotate(189deg) brightness(103%)
            contrast(101%);
    }

    ${({ theme }) => theme.device.mobile} {
        img {
            height: 24px;
        }
    }
`;
