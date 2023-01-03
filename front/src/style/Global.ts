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
    color: ${({ theme }) => theme.colors.main};
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};
  }

  input, button{
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  button{
    padding: 0;
    background: transparent;
    border: 0;
    font-size: 16px;
    cursor: pointer;
  }

  svg{
    display: inline-block;
    vertical-align: middle;
  }
`;

export default Global;
