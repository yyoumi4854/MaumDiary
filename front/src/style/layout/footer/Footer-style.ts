import styled from "styled-components";

export const FooterContent = styled.footer`
    position: relative;
    ${({ theme }) => theme.common.flexCenter}
    height: 240px;
    text-align: center;
    background: ${({ theme }) => theme.colors.mainDark};
    color: ${({ theme }) => theme.colors.greyBorder};
    z-index: 10;

    div {
        h1 img {
            filter: invert(100%) sepia(0%) saturate(4411%) hue-rotate(274deg) brightness(128%)
                contrast(76%);
        }

        p {
            font-weight: ${({ theme }) => theme.fonts.weight.light};
            font-size: ${({ theme }) => theme.fonts.size.small};
        }
    }

    ${({ theme }) => theme.device.mobile} {
        height: 160px;

        h1 img {
            height: 24px;
        }
    }
`;
