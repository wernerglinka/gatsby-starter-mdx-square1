import { createGlobalStyle } from "@nfront/global-styles";
import globalStyles from "./global";

const GlobalStyleComponent = createGlobalStyle`
  ${globalStyles}
`;

export default GlobalStyleComponent;
