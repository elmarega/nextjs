"use client";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStylesBase from "./global-css";

export const GlobalStyles = createGlobalStyle`
    ${GlobalStylesBase}

html, body {
  touch-action: manipulation;
  overscroll-behavior: none;
}

input, textarea, select, button {
  font-size: 16px !important;
}
`;

export const HeaderStyled = styled.header.attrs({
  className: 'custom-header'
})`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ff6600;
`;