import styled from "styled-components";

export const DiaryCalendarContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    ${({ theme }) => theme.device.mobile} {
        & > div {
            grid-column: 1 / 3;
        }
    }
`;
