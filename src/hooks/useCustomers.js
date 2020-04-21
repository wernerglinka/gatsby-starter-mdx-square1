import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Get customer name, url and logos
const useBgImage = () => {
  const data = useStaticQuery(graphql`
    query getCustomerLogos {
      allFile(filter: { relativeDirectory: { eq: "customer-logos" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1600) {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      file(relativePath: { eq: "customers.json" }) {
        childDataJson {
          customers {
            name
            url
            logo
          }
        }
      }
    }
  `);

  const allImages = data.allFile.edges.map(edge => edge.node.childImageSharp.fluid);
  const allCustomers = data.file.childDataJson.customers;

  // combine image data with customer data
  allCustomers.map(customer => {
    allImages.map(image => {
      if (image.originalName === customer.logo) {
        customer.image = image;
      }
    });
  });

  return allCustomers;
};

export default useBgImage;
