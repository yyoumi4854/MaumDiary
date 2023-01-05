import styled from "styled-components";

export const RightMenuContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};

    & > div + div {
        margin-left: 24px;
    }

    ${({ theme }) => theme.device.mobile} {
        & > div + div {
            margin-left: 12px;
        }
    }
`;
