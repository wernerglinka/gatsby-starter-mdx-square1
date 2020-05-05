import { createGlobalStyle } from "@nfront/global-styles";
import normalize from "normalize-scss";
import globalStyles from "./global";

const GlobalStyleComponent = createGlobalStyle`
  ${normalize}
  ${globalStyles}
`;

export default GlobalStyleComponent;
