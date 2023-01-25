import styled from "styled-components";

import * as Css from "@/style/common/Css-style";

export const ProfileContent = styled.div`
    text-align: center;
    div {
        width: 120px;
        height: 120px;
        margin: 0 auto;
        border: 6px solid ${({ theme }) => theme.colors.main};
        border-radius: 50%;
        background: lightgray;
    }

    p {
        margin-top: 20px;
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
        font-size: ${({ theme }) => theme.fonts.size.middle};
    }
`;

export const NavContent = styled.nav`
    margin-top: 40px;
`;

export const NavList = styled.li<{ current?: boolean }>`
    a {
        ${({ theme }) => theme.common.flexCenter}
        justify-content: flex-start;
        position: relative;
        padding: 12px 16px;
        border-radius: 4px;
        background: ${({ current, theme }) => current && theme.colors.main};
        color: ${({ current }) => current && "#fff"};
        svg {
            font-size: ${({ theme }) => theme.fonts.size.middle};
        }
        span:first-of-type {
            margin-left: 8px;
            & + span {
                ${({ theme }) => theme.common.positionYCenter}
                left: inherit;
                right: 16px;
                ${Css.chattingCount}
            }
        }
    }
`;
