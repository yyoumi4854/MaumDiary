import styled from "styled-components";

export const BottomNavContent = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: #fff;

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const NavList = styled.li<{ current?: boolean }>`
    ${({ theme }) => theme.common.flexCenter}

    a {
        width: 100%;
        padding: 8px;
        text-align: center;

        & > * {
            display: block;
            color: ${({ theme, current }) => current && theme.colors.main};
        }

        svg {
            margin: 0 auto;
            font-size: 24px;
        }

        span {
            margin-top: 8px;
            font-weight: ${({ theme, current }) => current && theme.fonts.weight.medium};
            font-size: ${({ theme }) => theme.fonts.size.small};
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
