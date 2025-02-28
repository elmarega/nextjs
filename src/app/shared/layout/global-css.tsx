"use client";
import { Nunito } from "next/font/google";
import { css } from "styled-components";

export const textFont = Nunito({ subsets: ["latin"] });

const GlobalStylesBase = css`
  :root {
    --primary-color: #007bff;
    --secondary-color: #ff6600;
    --delete-color: #ff0000;
    --border-radius: 8px;
    --transition-speed: 0.3s;
  }

  html {
    /* font-family: ${textFont.style.fontFamily} !important; */
  }

  button,
  input {
    font-family: inherit;
    border: none;
    outline: none;
  }

  input {
    width: 100%;
    padding: 10px 14px;
    font-size: 16px;
    border: 2px solid var(--primary-color);
    border-radius: var(--border-radius);
    transition: border-color var(--transition-speed);
  }

  input:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 5px var(--secondary-color);
  }

  button {
    padding: 12px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: var(--border-radius);
    transition: background var(--transition-speed),
      transform var(--transition-speed);
  }

  button.primary {
    background: var(--primary-color);
    color: white;
  }

  button.secondary {
    background: var(--secondary-color);
    color: white;
  }

  button.delete {
    background: var(--delete-color);
    color: white;
  }

  p.text-center {
    text-align: center;
  }
`;

export default GlobalStylesBase;
