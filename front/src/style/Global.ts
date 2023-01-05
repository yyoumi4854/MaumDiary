import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Global = createGlobalStyle`
    ${reset}

    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap");

    *{
        box-sizing: border-box;
        outline: none;
    }

    body{
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
        font-size: 16px;
        cursor: pointer;
    }

    svg{
        vertical-align: middle;
    }

    .inner{
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export default Global;
