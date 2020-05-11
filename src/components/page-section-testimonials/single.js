/* global window, document */

import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import SectionIntro from "../section-intro";
import useCustomers from "../../hooks/useCustomers";

import { Container } from "../common-styles";
import { SectionWrapper } from "./testimonial-styles";

/** ***************************************************************************
 *  Testimonial Component
 *************************************************************************** */

const SingleTestimonial = ({ info }) => {
  return (
    <SectionWrapper>
      <Container>
        <SectionIntro info={info} />
      </Container>
    </SectionWrapper>
  );
};

export default SingleTestimonial;

SingleTestimonial.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

SingleTestimonial.defaultProps = {
  info: {
    title: null,
    content: null,
  },
};
