import styled from "styled-components";
import { darken } from "polished";

// 일기 쓰기, 일기 수정 캘린더
export const CalendarWarp = styled.div`
    ${({ theme }) => theme.common.positionCenter}

    & > :last-of-type {
        margin-top: 20px;
    }
`;

export const CalendarContent = styled.div`
    background: #fff;
    width: 400px;
    padding: 20px;
    border-radius: 10px;
`;

export const WarnningTextContent = styled.div`
    margin-top: 20px;
    text-align: center;
    line-height: 1.5;

    span {
        color: ${({ theme }) => darken(0.1, theme.colors.mainDeep)};
    }
`;
