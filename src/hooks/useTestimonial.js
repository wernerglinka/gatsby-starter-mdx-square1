import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useTestimonial = thisTestimonial => {
  const data = useStaticQuery(graphql`
    query getTestimonial {
      allTestimonialsJson {
        edges {
          node {
            parent {
              ... on File {
                relativePath
              }
            }
            affiliation
            quotee
            quote
            position
            logo
          }
        }
      }
    }
  `);

  // filter out thisTestimonial fro all testimonials
  const temp = data.allTestimonialsJson.edges.filter(edge => thisTestimonial.includes(edge.node.parent.relativePath));

  const testimonial = {
    quote: temp[0].node.quote,
    quotee: temp[0].node.quotee,
    position: temp[0].node.position,
    affiliation: temp[0].node.affiliation,
    logo: temp[0].node.logo,
  };

  return testimonial;
};

export default useTestimonial;
