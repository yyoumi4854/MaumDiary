import styled from "styled-components";

export const TopButtonWrap = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.mainDeep};

    svg {
        font-size: ${({ theme }) => theme.fonts.size.middle};
        color: #fff;
    }

    ${({ theme }) => theme.device.mobile} {
        bottom: 72px;
        right: 3%;
        width: 48px;
        height: 48px;
    }
`;
