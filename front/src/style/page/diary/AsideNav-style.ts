import styled from "styled-components";

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

    ul {
        li {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            border-radius: 4px;
            cursor: pointer;

            svg {
                font-size: ${({ theme }) => theme.fonts.size.middle};
            }
            span {
                margin-left: 8px;
            }
        }
    }
`;

export const NavList = styled.li<{ current?: boolean }>`
    color: ${({ current }) => current && "#fff"};
    background: ${({ current, theme }) => current && theme.colors.main};
`;
