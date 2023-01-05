import styled from "styled-components";

export const HeaderContent = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    padding: 12px 0;
    background: skyblue; // 지울꺼

    .inner {
        ${({ theme }) => theme.common.flexCenter};
        justify-content: space-between;
    }
`;

export const LeftContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};
`;
