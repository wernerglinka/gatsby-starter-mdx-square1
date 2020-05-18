import React from "react";
import PropTypes from "prop-types";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaEnvelope } from "react-icons/fa";

import { SocialShareList } from "./share-links-styles";

const SharePage = ({ pageURL, title, description }) => {
  return (
    <>
      <h4>Share this Blogpost</h4>
      <SocialShareList className="social-share">
        <li>
          <a
            href={`https://twitter.com/intent/tweet?url=${pageURL}&text=${description}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Twitter"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href={`http://www.linkedin.com/shareArticle?url=${pageURL}&title=${title}&summary=${description}&source=${pageURL}`}
            target="_blank"
            rel="noopener noreferrer"
            title="share on LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </li>

        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${pageURL}&quote=${description}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Facebook"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href={`mailto:?subject=Check out this page&body=Very interesting read: ${pageURL}`}
            title="Share via email"
          >
            <FaEnvelope />
          </a>
        </li>
      </SocialShareList>
    </>
  );
};

SharePage.propTypes = {
  pageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SharePage;
