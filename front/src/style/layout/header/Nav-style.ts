import styled from "styled-components";

export const PcNavContent = styled.nav`
    margin-left: 24px;

    ul {
        display: flex;
        gap: 0 24px;

        li {
            a {
                transition: all 0.3s;
            }

            &:hover a {
                color: ${({ theme }) => theme.colors.mainDeep};
            }
        }
    }
`;
