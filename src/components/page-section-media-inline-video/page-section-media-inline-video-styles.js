import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &.image-left {
    flex-direction: row-reverse;
  }

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
