import styled from "styled-components";

export const HeaderContent = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    height: 60px;
    transition: all 0.2s;
    z-index: 10;

    &.active {
        background: #fff;
        box-shadow: 0px 2px 8px rgba(71, 83, 103, 0.1);
    }

    .inner {
        ${({ theme }) => theme.common.flexCenter};
        justify-content: space-between;

        h1 img {
            filter: invert(62%) sepia(54%) saturate(627%) hue-rotate(189deg) brightness(103%)
                contrast(101%);
        }
    }

    ${({ theme }) => theme.device.mobile} {
        height: 48px;

        .inner {
            h1 img {
                height: 24px;
            }
        }
    }
`;

export const LeftContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};
`;
