import styled from "styled-components";

export const RecoveryText = styled.p`
    position: absolute;
    left: 0;
    bottom: -2rem;
    width: 100%;
    text-align: center;

    span {
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        color: ${({ theme }) => theme.colors.mainDeep};
    }
`;
