/* global window, document */

import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import SectionIntro from "../section-intro";
import useCustomers from "../../hooks/useCustomers";

import { Container } from "../common-styles";
import { SectionWrapper, List } from "./customers-list-styles";

/** ***************************************************************************
 *  Customer Logos List Component
 *************************************************************************** */

const CustomerList = ({ info }) => {
  const customers = useCustomers();
  return (
    <SectionWrapper>
      <Container>
        <SectionIntro info={info} />
      </Container>

      <List>
        {customers.map(customer => (
          <li key={customer.url}>
            <a href={customer.url} target="_blank" rel="noopener noreferrer">
              <img src={customer.image} alt={customer.name} />
            </a>
          </li>
        ))}
      </List>
    </SectionWrapper>
  );
};

export default CustomerList;

CustomerList.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

CustomerList.defaultProps = {
  info: {
    title: null,
    content: null,
  },
};
