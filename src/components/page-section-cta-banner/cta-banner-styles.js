import styled from "@emotion/styled";

export const Wrapper = styled.section`
  text-align: center;

  h2 {
    text-align: center;
    color: ${props => (props.bgIsDark ? "#ffffff" : props.theme.headerDefaultColor)};
  }
  p {
    text-align: center;
    color: ${props => (props.bgIsDark ? "#ffffff" : props.theme.textColor)};
  }

  a {
    display: inline-block;
    padding: 10px 30px;
    border: 1px solid ${props => (props.bgIsDark ? "#ffffff" : props.theme.textColor)};
    color: ${props => (props.bgIsDark ? "#ffffff" : props.theme.textColor)};
    text-transform: uppercase;
    font-size: 0.825rem;
    margin: 30px 0;
  }
`;
