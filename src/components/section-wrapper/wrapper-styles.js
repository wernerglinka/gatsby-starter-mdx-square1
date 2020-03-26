import styled from "@emotion/styled";
import { Container } from "../common-styles";

export const BackgroundColorAndContainer = styled(Container)`
  background-color: ${props => props.theme.highlightColor};
  margin: ${props => props.theme.sectionClearance} auto;
  padding: 20px;
`;

export const WithContainer = styled(Container)`
  margin: ${props => props.theme.sectionClearance} auto;
`;

export const BackgroundColorAndFullWidth = styled.div`
  margin: ${props => props.theme.sectionClearance} -${props => props.theme.bodySidePadding};
  background-color: ${props => props.theme.highlightColor};
  padding: 20px 0;
`;

export const FullWidth = styled.div`
  margin: ${props => props.theme.sectionClearance} -${props => props.theme.bodySidePadding};
  padding: 20px;
`;
