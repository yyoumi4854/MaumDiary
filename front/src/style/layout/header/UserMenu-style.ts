import styled from "styled-components";

export const UserMenuContent = styled.div`
    ul {
        ${({ theme }) => theme.common.flexCenter};
        gap: 0 24px;

        li a {
            color: ${({ theme }) => theme.colors.greyText};
            transition: all 0.3s;

            &:hover {
                color: ${({ theme }) => theme.colors.mainDark};
            }
        }
    }

    ${({ theme }) => theme.device.mobile} {
        ul {
            gap: 0 12px;
        }
    }
`;
