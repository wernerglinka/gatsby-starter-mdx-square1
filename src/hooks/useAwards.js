import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useAwards = () => {
  const data = useStaticQuery(graphql`
    query getAwards {
      allAwardsJson(sort: { order: DESC, fields: startDate }) {
        edges {
          node {
            org
            logo
            logoWide
            title
            linkText
            url
            isExternal
            startDate
            endDate
            location
            excerpt
            type
          }
        }
      }
    }
  `);

  // normalize object - take node out
  const allAwards = data.allAwardsJson.edges.map(award => award.node);

  return allAwards;
};

export default useAwards;
