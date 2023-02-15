import styled from "styled-components";

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
