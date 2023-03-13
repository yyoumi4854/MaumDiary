import styled from "styled-components";

import * as Css from "@/style/common/Css-style";

export const BottomNavContent = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: #fff;
    z-index: 10;

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const NavList = styled.li<{ current?: boolean }>`
    ${({ theme }) => theme.common.flexCenter}

    a {
        position: relative;
        width: 100%;
        padding: 8px;
        text-align: center;

        & > * {
            display: block;
            color: ${({ theme, current }) => current && theme.colors.main};
        }

        svg {
            ${({ theme }) => theme.common.marginXCenter}

            font-size: 24px;
        }

        span:first-of-type {
            margin-top: 8px;
            font-weight: ${({ theme, current }) => current && theme.fonts.weight.medium};
            font-size: ${({ theme }) => theme.fonts.size.small};

            & + span {
                position: absolute;
                top: 2px;
                left: 52%;
                ${Css.chattingCount}
            }
        }
    }
`;

export const BlackBox = styled.div`
    position: absolute;
    bottom: -64px;
    left: 0;
    width: 100%;
    height: 64px;
`;
