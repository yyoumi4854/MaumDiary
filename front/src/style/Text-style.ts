import styled, { TextStyle } from "styled-components";

export const TitleText = styled.h2<TextStyle>`
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    font-size: ${({ theme }) => theme.fonts.size.title};
    line-height: ${({ lineHeight }) => (lineHeight ? 1.25 : 1)};

    span {
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }
`;
