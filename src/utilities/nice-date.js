import React from "react";
import PropTypes from "prop-types";

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  date.toLocaleDateString("en-US", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined,
  });

const NiceDate = ({ startDate, endDate, location }) => {
  const start = new Date(startDate);
  // if no endDate we set it to startDate
  const end = endDate ? new Date(endDate) : new Date(startDate);
  const isOneDay = start.toDateString() === end.toDateString();

  return (
    <>
      <time dateTime={start.toISOString()}>{getDate(start, { year: isOneDay })}</time>
      {!isOneDay && (
        <>
          –<time dateTime={end.toISOString()}>{getDate(end, { month: start.getMonth() !== end.getMonth() })}</time>
        </>
      )}
      {location && <span>{` | ${location}`}</span>}
    </>
  );
};

export default NiceDate;

NiceDate.defaultProps = {
  endDate: null,
  location: null,
};

NiceDate.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  location: PropTypes.string,
};
