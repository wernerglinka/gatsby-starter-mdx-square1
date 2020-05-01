import styled from "@emotion/styled";

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;

  /* 
    In case the <li> is wrapped in a link, the width has to be applied 
    to the link. If not than it is applied to the <li>.
    <li> content should not show underline or link color. Any hover styles 
    will be determined by the element styles inside the <li>, for example an <InfoCard>
  */

  li {
    padding: 20px;
    width: 260px;

    * {
      color: inherit;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export const FilterList = styled.ul`
  list-style: none;
`;

/*
  filter selection is done via radio buttons
  the checked state is used to show active state
  to user
*/
export const FilterItem = styled.li`
  display: inline-block;
  margin: 0 20px;
  text-transform: uppercase;
  position: relative;

  &:hover {
    color: red;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  span {
    cursor: pointer;
    display: block;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
  }

  input:checked + span {
    border-bottom-color: red;
  }
`;
