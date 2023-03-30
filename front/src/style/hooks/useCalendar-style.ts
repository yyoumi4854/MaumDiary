import styled from "styled-components";
import { darken } from "polished";

export const ControlContent = styled.div`
    ${({ theme }) => theme.common.flexBetween}
    align-items: flex-end;

    button svg {
        font-size: ${({ theme }) => theme.fonts.size.middle};
    }

    div {
        text-align: center;

        & > * {
            display: block;
        }

        strong {
            margin-top: 8px;
            font-weight: ${({ theme }) => theme.fonts.weight.medium};
            font-size: ${({ theme }) => theme.fonts.size.middle};
        }
    }
`;

export const CellsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 2rem repeat(6, 50px);
    margin-top: 20px;

    div {
        ${({ theme }) => theme.common.flexCenter};
        border-radius: 4px;

        &:nth-child(7n + 1) span {
            color: ${({ theme }) => darken(0.05, theme.colors.warnning)};
        }

        &:nth-child(7n) span {
            color: ${({ theme }) => darken(0.05, theme.colors.mainDeep)};
        }
    }
`;

export const DayCell = styled.div`
    span {
        color: ${({ theme }) => theme.colors.mainDark};
    }
`;

export const NowDateCell = styled.div<{
    nowDate?: boolean;
    diarySelect?: boolean;
    url?: string;
}>`
    position: relative;
    border: 2px solid
        ${({ diarySelect, theme }) => (diarySelect ? theme.colors.main : "transparent")};
    background: ${({ nowDate, theme }) => nowDate && theme.colors.greyBackground};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.greyBorder};
    }

    span {
        color: ${({ theme }) => theme.colors.mainDark};
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 16px;
        background: url(${({ url }) => url}) no-repeat center right;
        background-size: contain;
    }
`;

export const NoneNowDateCell = styled.div`
    span {
        opacity: 0.5;
    }
`;
