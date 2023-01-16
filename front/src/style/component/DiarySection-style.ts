import styled from "styled-components";

export const Container = styled.section`
    height: 1271px;
`;

export const Title = styled.div`
    width: 100%;
    height: 64px;

    margin-bottom: 54px;

    text-align: center;

    h2 {
        margin-bottom: 16px;

        font-size: ${({ theme }) => theme.fonts.size.title};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }

    p {
        font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
    }
`;
