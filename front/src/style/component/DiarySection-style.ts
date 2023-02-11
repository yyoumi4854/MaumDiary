import styled from "styled-components";

export const Container = styled.section`
    margin: 160px 0;

    ${({ theme }) => theme.device.mobile} {
        padding-bottom: 80px;
    }
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

    ${({ theme }) => theme.device.mobile} {
        width: 171px;
        height: 67px;

        ${({ theme }) => theme.common.marginXCenter}
        margin-bottom: 24px;

        h2 {
            margin-bottom: 8px;

            font-size: 20px;
        }

        p {
            font-size: 10px;
            line-height: 2;
        }
    }
`;

export const DiaryContainer = styled.div`
    height: 50vh;

    overflow-y: scroll;
`;
