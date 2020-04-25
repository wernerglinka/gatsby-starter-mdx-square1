/* global window, document */

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";
import TeamMember from "./team-member";

import useTeam from "../../hooks/useTeam";

import { Container } from "../common-styles";
import { SectionWrapper, List } from "./team-list-styles";

/** ***************************************************************************
 *  Team List Component
 *************************************************************************** */

const TeamList = ({ info }) => {
  const teamMembers = useTeam();

  const { title, prose } = info;

  return (
    <SectionWrapper>
      <Container>
        {title && <h2>{titleCase(title)}</h2>}
        {prose && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(prose) }} />}
      </Container>

      <List>
        {teamMembers.map(teamMember => (
          <TeamMember key={teamMember.name} info={teamMember} />
        ))}
      </List>
    </SectionWrapper>
  );
};

export default TeamList;

TeamList.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    prose: PropTypes.string,
  }),
};

TeamList.defaultProps = {
  info: {
    title: null,
    prose: null,
  },
};
