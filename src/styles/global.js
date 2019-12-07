import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }
`;
