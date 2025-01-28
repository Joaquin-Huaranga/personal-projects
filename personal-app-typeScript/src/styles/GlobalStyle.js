import { createGlobalStyle, css } from "styled-components";

const global = css`
    @font-face {
        font-family: '8-bit-wonder';
        src:url("/assets/fonts/8-bit-wonder.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: '8-bit-wonder',-apple-system, sans-serif;
  }

  body {
    font-size: 15px;
    background-color: darkgrey;
      cursor: url("/assets/cursor/cursor-fx.png"),auto;
  }
    a,button{
        &:hover{
            cursor: url("/assets/cursor/hover-cursor.png"),auto;

        }
    }
`;

export const GlobalStyle = createGlobalStyle`
    ${global}
`;
