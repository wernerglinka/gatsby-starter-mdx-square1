/* global window, document */

import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import titleCase from "ap-style-title-case";

import useCustomers from "../../hooks/useCustomers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SectionWrapper, SliderWrapper, FadeOutLeft, FadeOutRight, CustomerImage } from "./customers-list-styles";

/** ***************************************************************************
 *  Customer Logos Slider Component
 *************************************************************************** */

const CustomerList = ({ info }) => {
  const customers = useCustomers();

  const { title, prose } = info;

  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  };

  return (
    <SectionWrapper>
      {title && <h2>{titleCase(title)}</h2>}
      {prose && <p>{prose}</p>}
      <SliderWrapper>
        <FadeOutLeft />
        <Slider {...settings}>
          {customers.map(customer => (
            <div key={customer.url}>
              <a href={customer.url} target="_blank" rel="noopener noreferrer">
                <CustomerImage fluid={customer.image} />
              </a>
            </div>
          ))}
        </Slider>
        <FadeOutRight />
      </SliderWrapper>
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
