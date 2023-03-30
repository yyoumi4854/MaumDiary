import styled from "styled-components";
import { transparentize } from "polished";

import * as Css from "@/style/common/Css-style";

export const IsNoDiaryContent = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    ${Css.diaryContnet}

    div {
        text-align: center;

        svg {
            font-size: 64px;
            color: ${({ theme }) => transparentize(0.5, theme.colors.mainDark)};
        }

        p {
            margin: 8px 0 1.5rem;
            line-height: 1.5;

            span {
                color: ${({ theme }) => theme.colors.mainDeep};
            }
        }
    }

    ${({ theme }) => theme.device.mobile} {
        height: 280px;
    }
`;
