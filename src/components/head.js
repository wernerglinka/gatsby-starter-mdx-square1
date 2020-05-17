import React from "react";
import { globalHistory } from "@reach/router";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import useSiteMetadata from "../hooks/useSiteMetadata";

/** ***************************************************************************
 * Head
 * Builds the page head section using default values from  sitemetadata
 *
 * Any page may change the default meta data by passing in their own
 * A form attribute may be used to load something like a Marketo form
 * A page my add specific body classes
 *************************************************************************** */

const Head = ({ metaData, form, bodyClasses }) => {
  const { canonicalURL, title, description, imageURL, social } = metaData;

  // default meta datafrom data/site-metadata.json
  const defaultSiteMetadata = useSiteMetadata();
  const pageURL = globalHistory.location.href;

  const {
    title: defaultTitle,
    description: defaultdescription,
    imageURL: defaultImageURL,
    social: defaultSocial,
  } = defaultSiteMetadata;

  // use default meta data if the particular meta data is not passed in
  const metadata = {
    title: title || defaultTitle,
    description: description || defaultdescription,
    canonicalURL: canonicalURL || pageURL,
    imageURL: imageURL || defaultImageURL,
    pageURL,
    social: social || defaultSocial,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <link rel="preload" as="script" href={form} />
      <script src={form} />

      <meta charset="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      {/* needed for browser hints to work for cloudinary images */}
      <meta httpEquiv="Accept-CH" content="DPR, Width" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="cleartype" content="on" />

      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      <link rel="canonical" href={metadata.canonicalURL} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={metadata.social.twitterHandle} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:creator" content={metadata.social.siteOwner} />
      <meta name="twitter:image" content={metadata.imageURL} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.canonicalURL} />
      <meta property="og:site_name" content={metadata.social.siteOwner} />
      <meta property="og:image" content={metadata.imageURL} />
      <meta itemProp="”name”" content={metadata.title} />
      <meta itemProp="”description”" content={metadata.description} />

      <body className={bodyClasses} />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Square1",
            "legalName" : "Square1",
            "url": "https://www.square1.com",
            "logo": "http://www.square1.com/logos/square1.svg",
            "foundingDate": "1999",
            "founders": [
              {
                "@type": "Person",
                "name": "Euismod Justo"
              },
              {
                "@type": "Person",
                "name": "Vehicula Vestibulum"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 Main Street",
              "addressLocality": "My Town",
              "addressRegion": "FL",
              "postalCode": "12345",
              "addressCountry": "USA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "corporate",
              "telephone": "[+123-456-7890]",
              "email": ""
            },
            "sameAs": [
              "https://www.linkedin.com/company/square1/",
              "https://twitter.com/square1"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

Head.defaultProps = {
  metaData: {
    title: null,
    description: null,
    imageURL: null,
    canonicalURL: null,
    social: null,
  },
  location: {
    href: null,
  },
  form: null,
  bodyClasses: "",
};

Head.propTypes = {
  metaData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    canonicalURL: PropTypes.string,
    social: PropTypes.shape(),
  }),
  location: PropTypes.shape({
    href: PropTypes.string,
  }),
  form: PropTypes.string,
  bodyClasses: PropTypes.string,
};

export default Head;
