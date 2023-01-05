import styled from "styled-components";

export const HeaderContent = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    padding: 12px 0;

    &.active {
        background: #fff;
        box-shadow: 0px 2px 8px rgba(71, 83, 103, 0.1);
    }

    .inner {
        ${({ theme }) => theme.common.flexCenter};
        justify-content: space-between;
    }

    ${({ theme }) => theme.device.mobile} {
        padding: 8px 0;

        h1 img {
            height: 24px;
        }
    }
`;

export const LeftContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};
`;
