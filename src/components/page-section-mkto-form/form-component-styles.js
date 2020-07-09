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

export const FormInfo = styled.div`
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

export const FormWrapper = styled.div`
  padding: 30px 0 0 50px;

  .mktoFormRow {
    padding-bottom: 20px;
  }

  .mktoAsterix {
    display: inline-block;
    padding-right: 5px;
    color: red;
  }

  .mktoLabel {
    font-size: 16px;
    padding-bottom: 5px;
  }

  .mktoField {
    width: 100%;
    border-radius: 0;
    border: ${props => props.theme.defaultBorder};
    padding: 10px;
  }

  select {
    display: block;
    line-height: 1.4;
    padding: 10px 20px;

    box-sizing: border-box;
    border: ${props => props.theme.defaultBorder};
    background-color: #fff;
    border-radius: 0;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }
    &:hover {
      border-color: #888;
    }
    &:focus {
      outline: none;
    }
    & option {
      font-weight: normal;
    }
  }

  .mktoButton {
    display: block !important;
    line-height: 1 !important;
    padding: 10px 20px !important;
    border: 2px solid #999;
    background-color: #999;
    color: #fff;
    font-weight: 400;
    transition: all 0.3s ease-in-out;

    &:hover {
      text-decoration: none;
      background-color: transparent;
      color: #999;
    }
  }
`;
