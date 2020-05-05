import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.imageLeft ? "row-reverse" : "row")};
  margin-bottom: ${props => props.theme.sections.clearance};

  > * {
    flex: 0 0 50%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 1rem;

    & + p {
      font-style: italic;
      margin-bottom: 1rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  padding: 50px;
`;
