/* global window, document */

import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";

import useCustomers from "../../hooks/useCustomers";

import { Container } from "../common-styles";
import { SectionWrapper, List } from "./customers-list-styles";

/** ***************************************************************************
 *  Customer Logos List Component
 *************************************************************************** */

const CustomerList = ({ info }) => {
  const customers = useCustomers();

  const { title, prose } = info;

  return (
    <SectionWrapper>
      <Container>
        {title && <h2>{titleCase(title)}</h2>}
        {prose && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(prose) }} />}
      </Container>

      <List>
        {customers.map(customer => (
          <li key={customer.url}>
            <a href={customer.url} target="_blank" rel="noopener noreferrer">
              <Img fluid={customer.image} />
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
    prose: PropTypes.string,
  }),
};

CustomerList.defaultProps = {
  info: {
    title: null,
    prose: null,
  },
};
