import { css } from "@nfront/global-styles";

const globalStyles = css`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
  }
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

  /* global site styles with theme values */
  html {
    box-sizing: border-box;
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
  body {
    font-family: ${props => props.theme.fonts.body.fontFamily};
    font-weight: ${props => props.theme.fonts.body.fontWeight};
    font-size: ${props => props.theme.fonts.body.fontSize};
    line-height: ${props => props.theme.fonts.body.lineHeight};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body.noScroll {
    overflow: hidden;
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
  h1,
  h2,
  h3,
  h4 {
    font-family: ${props => props.theme.fonts.heading.fontFamily};
    font-weight: ${props => props.theme.fonts.heading.fontWeight};
  }
  h1 {
    font-size: 36px;
    line-height: ${props => props.theme.header.lineHeight};
    color: ${props => props.theme.colors.h1};
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 32px;
    }
  }
  .pageTitle {
    margin-bottom: ${props => props.theme.sections.clearance};
  }
  h2 {
    font-size: 32px;
    line-height: ${props => props.theme.header.lineHeight};
    color: ${props => props.theme.colors.h2};
  }
  @media (max-width: 767px) {
    h2 {
      font-size: 28px;
    }
  }
  h3 {
    font-size: 24px;
    line-height: ${props => props.theme.header.lineHeight};
    color: ${props => props.theme.colors.h3};
  }
  @media (max-width: 767px) {
    h3 {
      font-size: 20px;
    }
  }
  h4 {
    font-size: 18px;
    line-height: ${props => props.theme.header.lineHeight};
  }
  p,
  li {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: ${props => props.theme.colors.text};
  }
  ul,
  ol {
    padding-left: ${props => props.theme.space.defaultPadding};
  }
  ul {
    list-style: none;
  }
  /* custom list bullet with css */
  ul > li:before {
    display: inline-block;
    content: "";
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent transparent ${props => props.theme.colors.contrast};
    padding-right: 5px;
  }

  a {
    color: ${props => props.theme.colors.a};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  pre {
    padding: 30px;
  }
`;

export default globalStyles;
