import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    position: relative;
    width: 100vw;
    overflow-x: hidden;    
    -ms-overflow-style: none; 
    scroll-behavior: smooth !important;
  }
  
  button, input {
    outline: none;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
