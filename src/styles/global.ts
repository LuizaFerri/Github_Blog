import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    :focus{
        outline:0;
    }

    body{
        background-color: #071422;
        color:#E7EDF4 ;
        -webkit-font-smoothing: antialiased;
    }

`;