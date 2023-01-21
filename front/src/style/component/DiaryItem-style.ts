import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    height: 152px;

    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;

    & + & {
        margin-top: 40px;
    }
`;

export const Header = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    justify-content: space-between;

    height: 96px;

    padding: 0 40px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBorder};
`;
export const Title = styled.div`
    ${({ theme }) => theme.common.flexCenter}

    p {
        margin-left: 17.8px;

        font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }
`;
export const HeaderMeta = styled.div`
    ${({ theme }) => theme.common.flexCenter}

    & > p {
        font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
        color: #888888;
    }
`;

export const Detail = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    justify-content: space-between;

    height: 56px;

    padding: 0 40px;

    div {
        ${({ theme }) => theme.common.flexCenter}

        & > p {
            margin-right: 8px;
        }

        p {
            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
        }
    }
`;
