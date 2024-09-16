import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, body{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

        body {
        min-height: 100vh;       
        margin: 0;
        background: linear-gradient(135deg, #000000, #0b1d42);
        color: #ffffff;         
}

`;
