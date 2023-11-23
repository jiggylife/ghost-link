"use client";

import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${colors.grey300};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${colors.grey100};
    }
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    }


  body {
    position: relative;  
    -ms-overflow-style: none; 
    scroll-behavior: smooth !important;
  }
  
  button, input, textarea {
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .cursor-pointer {
    cursor: pointer;
  }

`;

export default GlobalStyle;
