import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.palette.common.white};
  }

  body, input, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    color: ${(props) => props.theme.palette.grey[600]};

  }

  h1, h2, h3, h4, h5, h6{
      font-weight: bold !important;
      font-family: 'Montserrat', sans-serif !important;

  }
  button{
    cursor:pointer
  }

  ul{
    list-style:none;
  }
`;
