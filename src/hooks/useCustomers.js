import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import useCloudinaryImage from "./useCloudinaryImage";

// Get customer name, url and logos
const useBgImage = () => {
  const data = useStaticQuery(graphql`
    query getCustomerLogos {
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

  const allImages = useCloudinaryImage("*");
  const allCustomers = data.file.childDataJson.customers;

  // combine image data with customer data
  allCustomers.map(customer => {
    allImages.map(image => {
      if (image.includes(customer.logo)) {
        customer.image = image;
      }
    });
  });

  return allCustomers;
};

export default useBgImage;
