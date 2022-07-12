import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 14px!important;
    font-weight: 400!important;
    background-color: #FAFAFA!important;
    color: #838383!important;
  }

  body {
    font-family: "PingFang SC","Microsoft YaHei",Arial,sans-serif!important;
  }
  body,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol, li, ul
  form {
    margin: 0;
  }
  input,
  button {
    outline: none;
    font-family: 'PingFangSC-Light','Roboto', 'Microsoft YaHei', Arial,  sans-serif !important;
  }
  hr {
    display: none;
  }
  li {
    list-style:none;
    outline: none;
  }
  input,textarea {
    caret-color: #ff8140;
    font-family: 'PingFangSC-Light','Roboto', 'Microsoft YaHei', Arial,  sans-serif !important;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
      margin: 0;
  }
  .df {
    display: flex;
  }
  .fc { 
    align-items: center;
    justify-content: center;
  }
  // 单行省略
  .ell-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  // 多行省略
  .ell-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  // 多行省略
  .ell-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .pointer {cursor: pointer;}
  .notAllowed {cursor: not-allowed;}
`;

export default GlobalStyle;
