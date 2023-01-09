import styled from "styled-components";

export const RecoveryText = styled.p`
    ${({ theme }) => theme.common.positionXCenter};
    top: inherit;
    bottom: -2em;

    span {
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        color: ${({ theme }) => theme.colors.mainDeep};
    }
`;
