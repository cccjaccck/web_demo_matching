import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box;
    }
    body {
        background-color: white;
        color: black;
        font-size: 14px;
        font-family:-apple-system, 'Noto Sans KR', sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a {
        color: black;
        text-decoration: none;
        cursor: pointer
    }
    a:visited {
        color: black;
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
        cursor: pointer;
    }
    input:focus{
        outline:none;
    }
    button{
        all: unset;
        cursor: pointer;
    }
`;
