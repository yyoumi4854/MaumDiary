import styled from "styled-components";

export const ChattingLinkContent = styled.div`
    position: relative;

    svg {
        font-size: 36px;
    }

    span {
        position: absolute;
        top: -8px;
        right: -12px;
        padding: 4px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.main};
        color: #fff;
        font-size: ${({ theme }) => theme.fonts.size.small};
    }
`;
