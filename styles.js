import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

    body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: radial-gradient(
    circle at top,
    #2a2a2f 0%,
    #141416 100%
  );
    color: #f5f5f7;
    padding-bottom: 80px;
    scroll-behavior: smooth;
  }

  h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
}

  h2 {
  font-size: 1rem;
  font-weight: 500;
  }

  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 28px 16px 24px;
  }
  
  button {
    cursor: pointer;
  }
`;
