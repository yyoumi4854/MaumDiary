import styled from "styled-components";

export const ChartContent = styled.div`
    padding: 5rem 0;
`;

export const ChartTopContent = styled.div``;
export const Chart = styled.div`
    width: 100%;
    height: 560px;

    ${({ theme }) => theme.device.mobile} {
        height: 360px;
    }
`;

export const ControlContent = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    gap: 40px;
    p {
        font-size: ${({ theme }) => theme.fonts.size.middle};
        span {
            color: ${({ theme }) => theme.colors.mainDeep};
        }
    }
`;

export const TextContent = styled.div`
    margin-top: 5rem;
    p {
        text-align: center;
        line-height: 1.5;
        font-size: ${({ theme }) => theme.fonts.size.middle};
        span {
            font-weight: ${({ theme }) => theme.fonts.weight.bold};
            color: ${({ theme }) => theme.colors.mainDeep};
        }
    }
`;
