import styled from "styled-components";

import * as Css from "@/style/common/Css-style";

export const IsLoginMenuContent = styled.div`
    & > ul {
        ${({ theme }) => theme.common.flexCenter};
        gap: 24px;
        ${({ theme }) => theme.device.mobile} {
            gap: 1rem;
        }
    }
`;

export const ChattingList = styled.li`
    a {
        ${({ theme }) => theme.common.flexCenter};
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        transition: all 0.2s;

        &:hover {
            background: rgba(132, 179, 255, 0.2);
        }

        svg {
            font-size: 20px;
        }

        span {
            position: absolute;
            top: 0px;
            right: -8px;
            ${Css.chattingCount}
        }
    }
`;

export const ProfileToggleList = styled.li`
    position: relative;

    button > div {
        width: 36px;
        height: 36px;
        ${Css.Profile}

        ${({ theme }) => theme.device.mobile} {
            width: 24px;
            height: 24px;
        }
    }
`;
