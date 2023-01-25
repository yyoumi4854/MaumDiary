import styled from "styled-components";

export const HeaderContent = styled.header<{ scroll: boolean }>`
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    height: 60px;
    transition: all 0.2s;
    z-index: 10;

    ${({ scroll }) =>
        scroll &&
        `
        background: #fff;
        box-shadow: 0px 2px 8px rgba(71, 83, 103, 0.1);
    `}

    .inner {
        ${({ theme }) => theme.common.flexBetween}

        & > button {
            svg {
                font-size: 24px;
            }
        }
    }

    ${({ theme }) => theme.device.mobile} {
        height: 48px;

        .inner {
            position: relative;
        }
    }
`;

export const LeftContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};
`;
