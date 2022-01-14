import { createGlobalStyle } from "styled-components";
import stars from './gifsANDimage/stars.gif'

export default createGlobalStyle`
    * {
        color: #fff;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    body {
    
    background-color: #000;
    background-image: url(${stars});
    }

    h1, h2, h3, h4 {
        color: #fff;
    }
`