import styled from "@emotion/styled";
import { Container } from "../common-styles";

export const BackgroundColorAndContainer = styled(Container)`
  background-color: ${props => props.theme.highlightColor};
  margin: 60px auto;
  padding: 20px;
`;

export const WithContainer = styled(Container)`
  margin: 60px auto;
`;

export const BackgroundColorAndFullWidth = styled.div`
  margin: 60px -${props => props.theme.bodySidePadding};
  background-color: ${props => props.theme.highlightColor};
  padding: 20px 0;
`;

export const FullWidth = styled.div`
  margin: 60px -${props => props.theme.bodySidePadding};
  padding: 20px;
`;
