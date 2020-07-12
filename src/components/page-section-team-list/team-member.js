/* global document */
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Modal from "./modal";
import SocialLinks from "../social-links";
import { TeamCard, ModalTrigger } from "./team-list-styles";
import useSiteMetadata from "../../hooks/useSiteMetadata";

/** *******************************************************************************
 * Team member component
 * Renders a team member in the team list and provides a modal for more details
 * on the member
 ******************************************************************************** */

const TeamMember = ({ info }) => {
  const [thisModal, toggleThisModal] = useState(false);
  const overlayRef = useRef(null);
  const { avatar, name, position } = info;

  // get image prefix and transfor string so we can return a fully formed image src
  const { imagePrefix } = useSiteMetadata();
  const imageTransform = `/c_scale,f_auto,q_auto:best,w_300`;
  const portrait = `${imagePrefix}${imageTransform}${avatar}`;

  const openModal = () => {
    toggleThisModal(true);
  };

  const closeModal = () => {
    toggleThisModal(false);
  };

  return (
    <TeamCard>
      <img src={portrait} alt={name} />
      <div className="prose">
        <h3>{name}</h3>
        <p>{position}</p>
        <SocialLinks social={info.socialLinks} />

        <ModalTrigger className="read-more" onClick={openModal}>
          Read More
        </ModalTrigger>

        <CSSTransition in={thisModal} timeout={300} classNames="show-modal" unmountOnExit>
          <Modal overlayRef={overlayRef} info={info} closeModal={closeModal} />
        </CSSTransition>
      </div>
    </TeamCard>
  );
};

TeamMember.propTypes = {
  info: PropTypes.shape().isRequired,
};

export default TeamMember;
