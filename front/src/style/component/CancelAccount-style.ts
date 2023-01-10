import styled from "styled-components";
import { transparentize } from "polished";

export const FixedContent = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => transparentize(0.5, theme.colors.mainDark)};
    z-index: 9999;
    backdrop-filter: saturate(180%) blur(3px);
`;

export const CancelAccountContent = styled.div`
    ${({ theme }) => theme.common.positionXCenter};
    top: 30%;
    width: 400px;
    padding: 1.5rem;
    border-radius: 8px;
    background: #fff;

    p {
        margin: 2.5rem 0 4rem;
        text-align: center;

        span {
            font-weight: ${({ theme }) => theme.fonts.weight.bold};
            color: ${({ theme }) => theme.colors.mainDeep};
        }
    }

    ${({ theme }) => theme.device.userForm} {
        width: calc(100% - 10%);
    }
`;
