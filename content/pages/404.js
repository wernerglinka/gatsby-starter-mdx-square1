import React from "react";
import styled from "@emotion/styled";

const Message404 = styled.section`
  h1 {
    text-align: center;
    font-weight: 500;

    span {
      display: block;
      font-size: 0.75em;
      padding-top: 40px;
    }
  }
`;

const NotFoundPage = () => (
  <Message404>
    <h1>
      Sorry Mon.<span>What you are looking for ain't here</span>
    </h1>
  </Message404>
);

export default NotFoundPage;
