import styled from "@emotion/styled";

export const PageContent = styled.div`
  padding-top: 40px;
  animation-duration: 0.5s;
  animation-name: move-up;

  @keyframes move-up {
    from {
      padding-top: 80px;
    }
    to {
      padding-top: 40px;
    }
  }
`;

export const PageIntro = styled.div`
  font-size: 1.125rem;
`;
