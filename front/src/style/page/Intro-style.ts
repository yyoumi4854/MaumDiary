import styled from "styled-components";

export const TitleSection = styled.section`
    position: relative;
    height: calc(100vh - 60px);
`;

export const TitleContent = styled.div`
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;

    p {
        margin-top: 1rem;
        line-height: 1.5;
    }

    ${({ theme }) => theme.device.mobile} {
        h2 {
            line-height: 1.5;
        }
    }
`;

export const EmotionList = styled.ul`
    display: grid;
    grid-template-columns: repeat(8, 56px);
    justify-items: center;
    gap: 40px;
    text-align: center;
    margin-top: 120px;

    li {
        text-align: center;
        & > * {
            display: block;
        }
        img {
            height: 40px;
        }
        span {
            margin-top: 8px;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        grid-template-columns: repeat(4, auto);
        gap: 20px;
    }
`;

export const IntroSection = styled.section`
    margin-bottom: 160px;

    h2 {
        text-align: center;
    }

    ${({ theme }) => theme.device.mobile} {
        h2 {
            line-height: 1.5;
        }
    }
`;

export const IntroWrap = styled.section<{ url: string }>`
    ${({ theme }) => theme.common.flexBetween}
    margin: 0 auto;
    margin-top: 160px;
    max-width: 1000px;

    &:nth-child(2n-1) {
        div {
            order: 2;
            text-align: right;
        }
    }

    span {
        width: 320px;
        height: 320px;
        text-indent: -9999px;
        background: url(${({ url }) => url}) no-repeat center;
        background-size: contain;
    }

    ${({ theme }) => theme.device.mobile} {
        display: block;
        text-align: center;

        &:nth-child(2n-1) {
            div {
                text-align: center;
            }
        }

        span {
            margin-top: 24px;
            width: 240px;
            height: 240px;
        }
    }
`;

export const IntroTextContent = styled.div<{ lineHeight?: boolean }>`
    strong {
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        font-size: ${({ theme }) => theme.fonts.size.title};
        color: ${({ theme }) => theme.colors.mainDeep};
    }
    h3 {
        margin-top: 8px;
        font-size: ${({ theme }) => theme.fonts.size.title};
        line-height: ${({ lineHeight }) => lineHeight && "1.5"};
    }

    p {
        margin-top: 40px;
        line-height: 1.5;
    }

    ${({ theme }) => theme.device.mobile} {
        p {
            margin-top: 24px;
        }
    }
`;
