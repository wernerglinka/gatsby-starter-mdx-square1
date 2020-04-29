import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const UseNews = () => {
  const data = useStaticQuery(graphql`
    query getNews {
      allNews2018Json {
        edges {
          node {
            org
            logo
            logoWide
            title
            url
            isExternal
            date(formatString: "YYYY-MM-DD")
            dateLocation
            excerpt
            type
          }
        }
      }
      allNews2019Json {
        edges {
          node {
            org
            logo
            logoWide
            title
            url
            isExternal
            date(formatString: "YYYY-MM-DD")
            dateLocation
            excerpt
            type
          }
        }
      }
      allNews2020Json {
        edges {
          node {
            org
            logo
            logoWide
            title
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

  // aggregate all years and take node out
  const aggregateNews = [
    ...data.allNews2018Json.edges,
    ...data.allNews2019Json.edges,
    ...data.allNews2020Json.edges,
  ].map(newsItem => newsItem.node);

  // and sort them by date
  const allNews = aggregateNews.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return allNews;
};

export default UseNews;
