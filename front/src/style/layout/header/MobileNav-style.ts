import styled from "styled-components";

export const MobileNavContent = styled.div`
    width: 50%;
    height: 100%;
    background: ${({ theme }) => theme.colors.greyBackground};
    ${({ theme }) => theme.common.flexCenter}

    ul {
        width: 100%;
        li {
            a {
                width: 100%;
                padding: 16px 24px;
            }

            & + li {
                border-top: 1px solid ${({ theme }) => theme.colors.greyBorder};
            }
        }
    }
`;
