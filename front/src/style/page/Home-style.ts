import styled from "styled-components";

import * as ButtonStyle from "@/style/common/Button-style";

export const HomeContainer = styled.div``;

export const Greeting = styled.div`
    position: absolute;

    top: 280px;
    left: 40px;

    width: 386px;
    height: 144px;

    font-weight: ${({ theme }) => theme.fonts.weight.light};
    font-size: ${({ theme }) => theme.fonts.size.title};

    span {
        font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }
`;

export const WriteButton = styled(ButtonStyle.MediumButton)`
    position: absolute;

    top: 504px;
    left: 40px;
`;
