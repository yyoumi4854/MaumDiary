import styled from "styled-components";

export const Container = styled.section`
    margin: 160px 0;

    ${({ theme }) => theme.device.mobile} {
        padding-bottom: 80px;
    }
`;

export const Title = styled.div`
    margin-bottom: 54px;
    text-align: center;

    h2 {
        margin-bottom: 16px;
        font-size: ${({ theme }) => theme.fonts.size.title};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }

    ${({ theme }) => theme.device.mobile} {
        ${({ theme }) => theme.common.marginXCenter}
        margin-bottom: 24px;

        h2 {
            margin-bottom: 8px;
            font-size: ${({ theme }) => theme.fonts.size.title};
        }

        p {
            line-height: 1.5;
        }
    }
`;
