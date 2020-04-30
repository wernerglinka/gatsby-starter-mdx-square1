import React from "react";
import getNews from "./useNews";
import getEvents from "./useEvents";
import getAwards from "./useAwards";

const useNewsroom = () => {
  const allNews = getNews();
  const allEvents = getEvents();
  const allAwards = getAwards();

  // consolidate news, events and awards
  const newsroomItems = [...allNews, ...allEvents, ...allAwards];

  // and sort them by date
  const sortedItems = newsroomItems.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return sortedItems;
};

export default useNewsroom;
