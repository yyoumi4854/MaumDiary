import styled from "styled-components";

export const NavContent = styled.nav`
    margin: 24px 0 64px;

    ul {
        ${({ theme }) => theme.common.flexCenter};
        gap: 0 24px;

        li a {
            color: ${({ theme }) => theme.colors.greyBorder};
        }
    }

    ${({ theme }) => theme.device.mobile} {
        margin: 12px 0 40px;
    }
`;
