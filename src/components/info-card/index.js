import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import titleCase from "ap-style-title-case";
import Img from "gatsby-image";
import mdStringToHTML from "../../utilities/md-to-html";
import EventDate from "../../utilities/event-date";
import truncate from "../../utilities/truncate";
import getImage from "../../hooks/useImage";

import { Card, ImageWrapper, CardContent, CardType, CardDate, CardExcerpt, CardCTA } from "./info-card-styles";

/** ***************************************************************************
 *  Info card Component
 *  Is either rendered as a
 *************************************************************************** */

const InfoCard = ({
  items: { title, logo, logoWide, type, startDate, endDate, location, excerpt, linkText, isExternal, url },
}) => {
  const image = getImage(logo);
  const truncatedTitle = title.length > 40 ? truncate(title, 40, true) : title;
  const truncatedExcerpt = excerpt.length > 50 ? truncate(excerpt, 50, true) : excerpt;

  const InfoCardInner = () => (
    <Card>
      <ImageWrapper logoWide={logoWide}>{image && <Img fluid={getImage(logo)} />}</ImageWrapper>
      <CardContent>
        <CardType>{type}</CardType>

        <CardDate>
          <EventDate startDate={startDate} endDate={endDate} location={location} />
        </CardDate>

        <h3 title={title}>{titleCase(truncatedTitle)}</h3>
        {excerpt && (
          <CardExcerpt title={excerpt} dangerouslySetInnerHTML={{ __html: mdStringToHTML(truncatedExcerpt) }} />
        )}
        {linkText && <CardCTA>{linkText}</CardCTA>}
      </CardContent>
    </Card>
  );

  return isExternal ? (
    <li className={`grid-item ${type}`}>
      <a href={url}>
        <InfoCardInner />
      </a>
    </li>
  ) : (
    <li>
      <Link to={url}>
        <InfoCardInner />
      </Link>
    </li>
  );
};

InfoCard.propTypes = {
  items: PropTypes.object.isRequired,
};

export default InfoCard;
