import { css } from "@nfront/global-styles";

const globalStyles = css`
  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
    /*scroll-behavior: smooth;*/
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .cf:before,
  .cf:after {
    content: " ";
    display: table;
  }

  .cf:after {
    clear: both;
  }

  * {
    outline: none;
  }

  body {
    font-family: "Open Sans", san-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden;
    margin: 0;
  }
  ol,
  ul,
  li {
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
  }

  /******************************************************************************
 * Typography
 *****************************************************************************/
  h1,
  h2,
  h3,
  h4 {
    font-family: Oswald, "Helvetica Neue", sans-serif;
    font-weight: 400;
  }
  h1 {
    font-size: 36px;
    line-height: 1.2;

    @media (max-width: 767px) {
      font-size: 32px;
    }
  }
  h2 {
    font-size: 32px;
    line-height: 1.2;

    @media (max-width: 767px) {
      font-size: 28px;
    }
  }
  h3 {
    font-size: 24px;
    line-height: 1.2;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  h4 {
    font-size: 18px;
    line-height: 1.4;
  }
  p,
  li {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: inherit;
    color: ${props => props.theme.text};
  }
  ul,
  ol {
    padding-left: 20px;
  }
  strong {
    font-weight: 700;
  }
`;

export default globalStyles;
