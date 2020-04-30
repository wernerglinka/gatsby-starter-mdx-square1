import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useAwards = () => {
  const data = useStaticQuery(graphql`
    query getAwards {
      allAwardsJson {
        edges {
          node {
            org
            logo
            logoWide
            title
            linkText
            url
            isExternal
            date(formatString: "YYYY-MM-DD")
            dateLocation
            excerpt
            type
          }
        }
      }
    }
  `);

  // normalize object - take node out
  const awards = data.allAwardsJson.edges.map(award => award.node);

  // and sort them by date
  const allAwards = awards.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return allAwards;
};

export default useAwards;
