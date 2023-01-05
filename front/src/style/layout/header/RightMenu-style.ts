import styled from "styled-components";

export const RightMenuContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};

    & > div {
        width: 36px;
        height: 36px;

        & + div {
            margin-left: 24px;
        }
    }
`;
