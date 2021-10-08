import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body, 
  button, 
  input, 
  textarea {
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color:  ${({ theme }) => theme.colors.textPrimary};
  }

  body {
    background: ${({ theme }) => theme.colors.lightGray};
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .custom-scroll {
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.lightGray};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.brandPrimaryLight};
    }
  }
`;

export default GlobalStyle;
