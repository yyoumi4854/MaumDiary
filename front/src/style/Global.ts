import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Global = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        outline: none;
    }

    html, input, select, textarea{
        font-family: 'Gaegu', cursive;
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -0.0125rem;
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

    .content{
        min-height: calc(100vh - 60px - 240px);
    }

    .inner{
        width: 1200px;
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
            width: 100%;
            padding: 0 3%;
        }
    }

    ${({ theme }) => theme.device.mobile}{
        html {
            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
        }

        button{
            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
        }

        .content{
            min-height: calc(100vh - 48px - 160px);
        }

        // 반응형 조작을 위한 css
        .pc {
            display: none;
        }

        .mobile {
            display: block;
        }

        .inner{
            padding: 0 5%;
        }
    }
`;

export default Global;
