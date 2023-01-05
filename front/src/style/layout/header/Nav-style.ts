import styled from "styled-components";

export const NavContent = styled.nav`
    margin-left: 24px;

    ul {
        display: flex;

        li + li {
            margin-left: 24px;
        }
    }
`;
