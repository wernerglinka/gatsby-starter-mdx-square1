import React from "react";
import PropTypes from "prop-types";
import useSiteMetadata from "../hooks/useSiteMetadata";

const ClImage = ({ imageName, maxWidth, sizes, alt }) => {
  // get image prefix and transfer string so we can return a fully formed image src
  const { imagePrefix } = useSiteMetadata();
  const imageTransform = `/f_auto,q_auto,w_auto:200:${maxWidth}`;
  const thisImage = `${imagePrefix}${imageTransform}${imageName}`;

  return <img sizes={sizes} src={thisImage} alt={alt} />;
};

export default ClImage;

ClImage.propTypes = {
  imageName: PropTypes.string.isRequired,
  maxWidth: PropTypes.number.isRequired,
  sizes: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ClImage.defaultProps = {
  alt: "",
};
