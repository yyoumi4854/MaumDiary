import styled from "styled-components";
import * as Css from "@/style/common/Css-style";

export const ChatContent = styled.div`
    grid-column: 5 / 11;
    position: relative;
    ${Css.diaryContnet}
    padding: 20px;
    height: calc(100vh - 60px - 40px);

    ${({ theme }) => theme.device.mobile} {
        grid-column: 1 / 11;
        height: calc(100vh - 60px - 40px - 64px);
        padding: 1em;
    }
`;

export const TopContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;

    button {
        padding: 4px;
        width: 36px;
        height: 36px;

        svg {
            width: 100%;
            height: 100%;
        }
    }
    p {
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
        font-weight: ${({ theme }) => theme.fonts.size.middle};
    }
`;

export const chattingWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 36px);
`;

export const ChattingContent = styled.div`
    height: 100%;
    overflow: auto;
`;

export const InputContentForm = styled.form`
    display: grid;
    grid-template-columns: auto 80px;
    gap: 0.5rem;
    margin-top: 0.5rem;
    width: 100%;

    ${({ theme }) => theme.device.mobile} {
        grid-template-columns: auto 60px;
        gap: 0;
    }

    & > div {
        padding: 0.5rem;
        /* max-height: 112px; */
        max-height: calc(4 * 1.5 * 1rem + 1rem);
        border-radius: 2px;
        background: #fff;
        line-height: 1.5;
        overflow: auto;
    }
`;
