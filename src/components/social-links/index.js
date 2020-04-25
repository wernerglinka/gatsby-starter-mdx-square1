import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaEnvelope, FaGithub } from "react-icons/fa";
import { SocialLinkList } from "./social-links-styles";

/** ***************************************************************************
 *  Personal social link list component
 *************************************************************************** */
const SocialLinks = ({ social }) => {
  const socialLinks = Object.keys(social);
  return (
    <SocialLinkList>
      {socialLinks.map(
        socialLink =>
          social[socialLink] && (
            <li key={socialLink}>
              {socialLink === "linkedIn" && (
                <a href={`https://www.linkedin.com/${social[socialLink]}`} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              )}
              {socialLink === "twitter" && (
                <a href={`https://twitter.com/${social[socialLink]}`} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              )}
              {socialLink === "facebook" && (
                <a href={`https://www.facebook.com/${social[socialLink]}`} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              )}
              {socialLink === "github" && (
                <a href={`https://github.com/${social[socialLink]}`} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
              {socialLink === "contactUs" && (
                <Link to="/contact-sales/">
                  <FaEnvelope />
                </Link>
              )}
            </li>
          )
      )}
    </SocialLinkList>
  );
};

SocialLinks.propTypes = {
  social: PropTypes.object.isRequired,
};
export default SocialLinks;
