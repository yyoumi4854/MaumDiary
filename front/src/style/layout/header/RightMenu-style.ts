import styled from "styled-components";

export const RightMenuContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    gap: 0 24px;

    ${({ theme }) => theme.device.mobile} {
        gap: 0 12px;
    }
`;
