import styled from "styled-components";

export const ModalContent = styled.div<{ lineHeight?: boolean; margin?: string }>`
    ${({ theme }) => theme.common.positionXCenter};
    top: 30%;
    width: 400px;
    padding: 1.5rem;
    border-radius: 8px;
    background: #fff;

    p {
        margin: ${({ margin }) => margin};
        text-align: center;
        line-height: ${({ lineHeight }) => lineHeight && 1.5};

        span {
            font-weight: ${({ theme }) => theme.fonts.weight.bold};
            color: ${({ theme }) => theme.colors.mainDeep};
        }
    }

    ${({ theme }) => theme.device.userForm} {
        width: calc(100% - 10%);
    }
`;
