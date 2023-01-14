import styled from "styled-components";
import { transparentize } from "polished";

export const DiaryContent = styled.div`
    ${({ theme }) => theme.common.diaryContent};
    padding: 20px;
`;

export const controlContent = styled.div`
    display: flex;
    justify-content: space-between;
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

export const CalendarContent = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 2rem repeat(6, 50px);
    margin-top: 20px;

    div {
        ${({ theme }) => theme.common.flexCenter};
        border-radius: 4px;
        transition: all 0.3s;

        &:hover {
            border: 2px solid ${({ theme }) => theme.colors.greyBorder};
        }
    }
`;

export const CalendarCel = styled.div<{ nowDays?: boolean; nowDay?: boolean; slelctDay?: boolean }>`
    color: ${({ nowDays, theme }) => transparentize(nowDays ? 0 : 0.5, theme.colors.mainDark)};
    cursor: ${({ nowDays }) => nowDays && "pointer"};
    border: 2px solid
        ${({ slelctDay, theme }) => (slelctDay ? theme.colors.mainDeep : "transparent")};
    background: ${({ nowDay, theme }) => nowDay && theme.colors.greyBackground};
`;
