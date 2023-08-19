import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import Regular from "../fonts/Poppins-Regular.ttf";
import Medium from "../fonts/Poppins-Medium.ttf";
import SemiBold from "../fonts/Poppins-SemiBold.ttf";
import Bold from "../fonts/Poppins-Bold.ttf";

export const GlobalStyle = createGlobalStyle`

${normalize};


@font-face {
    font-family: 'Poppins';
    src: url(${Regular}) format("truetype");
    font-weight: 400;
    font-display: swap;
}
@font-face {
    font-family: 'Poppins';
    src: url(${Medium}) format("truetype");
    font-weight: 500;
    font-display: swap;
}
@font-face {
    font-family: 'Poppins';
    src: url(${SemiBold}) format("truetype");
    font-weight: 600;
    font-display: swap;
}
@font-face {
    font-family: 'Poppins';
    src: url(${Bold}) format("truetype");
    font-weight: 700;
    font-display: swap;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
   
  &.modal-open{
    overflow: hidden;
  }
  
}





/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin and padding */
h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

button {
  padding: 0;
  cursor: pointer;
  font: inherit;
}

input {
  padding: 0;
}
`;
