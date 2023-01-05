import styled from "styled-components";

export const MediumButton = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.main};
    color: #fff;
`;
