import styled from "@emotion/styled";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  /* 
    In case the <li> is wrapped in a link, the width has to be applied 
    to the link. If not than it is applied to the <li>.
    <li> content should not show underline or link color. Any hover styles 
    will be determined by the element styles inside the <li>, for example an <NewsCard>
  */

  li {
    padding: 20px;
    flex: 0 0 260px;

    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }

    * {
      color: inherit;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
