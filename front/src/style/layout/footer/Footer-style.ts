import styled from "styled-components";

export const FooterContent = styled.footer`
    padding: 40px 0;
    text-align: center;
    background: ${({ theme }) => theme.colors.mainDark};
    color: ${({ theme }) => theme.colors.greyBorder};

    h1 img {
        filter: invert(100%) sepia(94%) saturate(2%) hue-rotate(254deg) brightness(108%)
            contrast(100%);
    }

    p {
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        font-size: ${({ theme }) => theme.fonts.size.small};
    }

    ${({ theme }) => theme.device.mobile} {
        padding: 24px 0;

        h1 img {
            height: 24px;
        }
    }
`;
