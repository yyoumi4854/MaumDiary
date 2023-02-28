import styled from "styled-components";

export const DiaryLayout = styled.div`
    padding: 20px 0;
    .inner {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
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
