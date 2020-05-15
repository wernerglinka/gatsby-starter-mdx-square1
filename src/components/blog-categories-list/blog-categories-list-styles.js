import styled from "@emotion/styled";

export const CategoriesList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: -40px 0 0;
  border-bottom: 1px solid #f0f0f0;

  li {
    padding: 20px;
    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }

    a {
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.8em;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
