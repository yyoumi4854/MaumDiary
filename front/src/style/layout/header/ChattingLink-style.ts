import styled from "styled-components";

export const ChattingLinkContent = styled.div`
    ul {
        ${({ theme }) => theme.common.flexCenter};
    }

    ul li:first-of-type a {
        ${({ theme }) => theme.common.flexCenter};
        position: relative;
        width: 36px;
        height: 36px;

        svg {
            font-size: ${({ theme }) => theme.fonts.size.middle};
        }

        span {
            position: absolute;
            top: 0px;
            right: -8px;
            padding: 4px;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.main};
            color: #fff;
            font-size: ${({ theme }) => theme.fonts.size.small};
        }
    }
`;
