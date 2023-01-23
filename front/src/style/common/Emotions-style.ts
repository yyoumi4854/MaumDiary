import styled from "styled-components";

export const Container = styled.section`
    ${({ theme }) => theme.common.flexCenter}
    flex-direction: column;

    width: 100%;
    height: fit-content;

    margin-bottom: 64px;

    ${({ theme }) => theme.device.mobile} {
        margin-bottom: 20px;
    }
`;

export const Tab = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    gap: 40px;

    width: 100%;

    margin-bottom: 16px;
    overflow-x: scroll;

    & {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    ${({ theme }) => theme.device.mobile} {
    }
`;

export const TabButton = styled.button`
    p {
        margin-top: 8px;

        text-align: center;
    }
`;

export const Circle = styled.div<{ url: string }>`
    ${({ theme }) => theme.common.flexCenter};

    width: 64px;
    height: 64px;

    border-radius: 50%;

    background: url(${({ url }) => url}) no-repeat center white;
    box-shadow: 0px 4px 4px rgba(119, 119, 119, 0.25);
`;

export const ScrollIndicator = styled.div<{ left: number }>`
    position: relative;

    display: none;

    width: 100px;
    height: 2px;

    background: ${({ theme }) => theme.colors.greyBackground};

    &::before {
        position: absolute;
        top: 0;
        left: ${({ left }) => `${left}%`};

        content: "";

        width: 50%;
        height: 100%;

        background: ${({ theme }) => theme.colors.main};
    }

    ${({ theme }) => theme.device.mobile} {
        display: block;
    }
`;
