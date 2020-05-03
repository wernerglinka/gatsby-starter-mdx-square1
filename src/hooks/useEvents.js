import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useEvents = () => {
  const data = useStaticQuery(graphql`
    query getEvents {
      allEventsJson(sort: { order: DESC, fields: startDate }) {
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
  const allEvents = data.allEventsJson.edges.map(newsItem => newsItem.node);

  return allEvents;
};

export default useEvents;
