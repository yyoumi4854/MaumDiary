import styled from "styled-components";
import * as Css from "@/style/common/Css-style";

// 넘어갈 경우
export const ChatListContent = styled.div`
    grid-column: 1 / span 4;
    padding: 20px;
    ${Css.diaryContnet}
    overflow: auto;
`;

export const ListContent = styled.div`
    display: grid;
    grid-template-columns: 48px auto 50px;
    gap: 1em;
`;

export const ProfileContent = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: lightgray;
`;

export const TextContent = styled.div`
    b {
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }

    p {
        margin-top: 0.5em;
        font-size: ${({ theme }) => theme.fonts.size.small};
        white-space: pre-line;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const BesidesContent = styled.div`
    text-align: right;
    span:first-of-type {
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        font-size: ${({ theme }) => theme.fonts.size.xsmall};
        color: ${({ theme }) => theme.colors.greyText};
    }
    span:last-of-type {
        margin-top: 0.5rem;
        ${Css.chattingCount}
    }
`;
