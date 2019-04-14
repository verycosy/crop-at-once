import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: "Noto Sans KR", sans-serif;
        font-size:12px;
        text-align:center;
        color:white;
        background-color: hsl(70, 0%, 15%);
        padding:0px 0px 40px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`;

export default globalStyles;
