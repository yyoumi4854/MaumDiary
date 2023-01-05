import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Global = createGlobalStyle`
    ${reset}

    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap");

    *{
        box-sizing: border-box;
        outline: none;
    }

    html{
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -0.0125em;
        color: ${({ theme }) => theme.colors.mainDark};
    }

    a, span, svg{
        display: inline-block;
    }

    input, button{
        font-family: 'Noto Sans KR', sans-serif;
        color: ${({ theme }) => theme.colors.mainDark};
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.mainDark};
    }

    button{
        padding: 0;
        background: transparent;
        border: 0;
        font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
        cursor: pointer;
    }

    svg{
        vertical-align: middle;
    }

    .inner{
        max-width: 1200px;
        margin: 0 auto;
    }

    // 반응형 조작을 위한 css
    .pc {
        display: block;
    }

    .mobile {
        display: none;
    }

    ${({ theme }) => theme.device.desktop}{
        .inner{
            margin: 0 3%;
        }
    }

    ${({ theme }) => theme.device.mobile}{
        html {
            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
        }

        button{
            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
        }

        // 반응형 조작을 위한 css
        .pc {
            display: none;
        }

        .mobile {
            display: block;
        }

        .inner{
            margin: 0 5%;
        }
    }
`;

export default Global;
