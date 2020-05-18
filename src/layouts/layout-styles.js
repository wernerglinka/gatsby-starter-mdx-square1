import styled from "@emotion/styled";

export const PageContent = styled.div`
  padding-top: 40px;
  animation-duration: 0.5s;
  animation-name: move-up;

  @keyframes move-up {
    from {
      padding-top: 60px;
    }
    to {
      padding-top: 40px;
    }
  }
`;

export const PageIntro = styled.div`
  font-size: 1.125rem;
`;

export const TwoColumns = styled.section`
  display: flex;
  justify-content: flex-start;
`;

export const Main = styled.main`
  flex: 0 0 75%;
`;

export const Sidebar = styled.aside`
  flex: 0 0 25%;
  padding-left: 25px;
  border-left: 1px solid #f0f0f0;
  margin-left: 25px;

  h2 {
    font-size: 24px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
  }
`;
