import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useEvents = () => {
  const data = useStaticQuery(graphql`
    query getEvents {
      allEventsJson {
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
  const events = data.allEventsJson.edges.map(newsItem => newsItem.node);

  // and sort them by date
  const allEvents = events.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return allEvents;
};

export default useEvents;
