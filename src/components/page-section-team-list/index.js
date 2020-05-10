/* global window, document */

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";
import TeamMember from "./team-member";
import SectionIntro from "../section-intro";

import useTeam from "../../hooks/useTeam";

import { Container } from "../common-styles";
import { SectionWrapper, List } from "./team-list-styles";

/** ***************************************************************************
 *  Team List Component
 *************************************************************************** */

const TeamList = ({ info }) => {
  const teamMembers = useTeam();

  return (
    <SectionWrapper>
      <Container>
        <SectionIntro info={info} />
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
  info: PropTypes.shape(),
};

TeamList.defaultProps = {
  info: {},
};
