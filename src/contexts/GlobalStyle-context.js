import {createGlobalStyle} from "styled-components";
import {ThemeProvider} from "./theme-context";
import React from "react";

const GlobalStyle = createGlobalStyle`
  body {
     font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
     background: ${props => props.theme.background};
     color: ${props => props.theme.textColor};
      transition: background-color 600ms ease;
      font-size: 16px;
  }
    ::-webkit-scrollbar-thumb,::-webkit-scrollbar-track,::-webkit-scrollbar{
      background:${props => props.theme.textColor};
      width:10px;
      border-radius:25px
      }  
      ::-webkit-scrollbar-track-piece{
      background:${props => props.theme.background};
      }
`;


function GlobalStyleProvider({children}) {
    return (
        <ThemeProvider>
            <GlobalStyle/>
            {children}
        </ThemeProvider>);

}

export default GlobalStyleProvider
