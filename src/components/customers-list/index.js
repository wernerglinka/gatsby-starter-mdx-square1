/* global window, document */

import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";

import useCustomers from "../../hooks/useCustomers";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  background-color: #f0f0f0;

  li {
    flex: 0 0 25%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

/** ***************************************************************************
 *  Customer Logos List Component
 *************************************************************************** */

const CustomerList = () => {
  const customers = useCustomers();

  return (
    <List>
      {customers.map(customer => (
        <li>
          <Img fluid={customer.image} />
        </li>
      ))}
    </List>
  );
};

export default CustomerList;
