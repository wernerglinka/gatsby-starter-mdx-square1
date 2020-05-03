import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const UseNews = () => {
  const data = useStaticQuery(graphql`
    query getNews {
      allNews2018Json(sort: { order: DESC, fields: startDate }) {
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
      allNews2019Json(sort: { order: DESC, fields: startDate }) {
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
      allNews2020Json(sort: { order: DESC, fields: startDate }) {
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

  // aggregate all years and normalize object - take node out
  const allNews = [...data.allNews2018Json.edges, ...data.allNews2019Json.edges, ...data.allNews2020Json.edges].map(
    newsItem => newsItem.node
  );

  return allNews;
};

export default UseNews;
