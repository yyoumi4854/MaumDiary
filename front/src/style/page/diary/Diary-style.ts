import styled from "styled-components";

export const DiaryLayout = styled.div`
    margin-top: 20px;
    .inner {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0 20px;

        & > div {
            grid-column: 2 / span 4;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        .inner > div {
            grid-column: 1 / span 4;
        }
    }
`;
