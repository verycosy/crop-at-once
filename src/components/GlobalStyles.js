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
        background-color: white;
    }
`;

export default globalStyles;
