import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decorection: none;
      transition: all 0.1s;
  }

  body{
    font-size: 14px;
    line-height: 1.5;
    overflow-x: hidden;
    font-family: sans-serif;
    color: ${props => props.theme.typografia.palette_text_alt};
    background: ${props => props.theme.background.palette_background_def};
  }
`;
