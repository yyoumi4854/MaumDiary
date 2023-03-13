import styled from "styled-components";
import { transparentize } from "polished";

export const PastEmotionContent = styled.div`
    padding: 5rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.greyBorder};
    strong {
        display: block;
        text-align: center;
        color: ${({ theme }) => theme.colors.greyText};
    }
`;

export const PastEmotionWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    ${({ theme }) => theme.device.mobile} {
        display: block;
    }
`;

export const Card = styled.dl`
    margin-top: 20px;
    padding: 40px 0;
    border-radius: 10px;
    background: #fff;
    text-align: center;

    dt {
        p {
            font-weight: ${({ theme }) => theme.fonts.weight.medium};
            font-size: ${({ theme }) => theme.fonts.size.middle};
        }
    }
`;

export const IsDiaryWrap = styled.dd`
    span {
        display: block;
    }

    img {
        width: 100px;
        height: 100px;
        margin: 1.5rem auto;
    }

    strong {
        display: block;
        margin-top: 2rem;
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        font-size: ${({ theme }) => theme.fonts.size.title};
        color: ${({ theme }) => theme.colors.mainDeep};
    }
`;

export const IsNoDiaryWrap = styled.dd`
    margin-top: 20px;
    svg {
        font-size: 64px;
        margin: 1.5rem auto;
        color: ${({ theme }) => transparentize(0.5, theme.colors.mainDark)};
    }

    p {
        line-height: 1.5;
    }
`;

export const TextContent = styled.div`
    margin-top: 5rem;
    text-align: center;
    p {
        line-height: 1.5;
        font-size: 20px;
    }
`;
