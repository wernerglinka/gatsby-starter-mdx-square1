/* global document */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
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
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef(null);
  const { avatar, name, position } = info;

  // get image prefix and transfor string so we can return a fully formed image src
  const { imagePrefix } = useSiteMetadata();
  const imageTransform = `/c_scale,f_auto,q_auto:best,w_300`;
  const portrait = `${imagePrefix}${imageTransform}${avatar}`;

  const openModal = () => {
    toggleThisModal(true);
  };

  // modal is not closed immediately. isClosing is set, which adds class "isClosing"
  // to the overlay, which starts a fade out.
  // at the end of the animation the modal is closed.
  const closeModal = () => {
    setIsClosing(true);
  };

  // when closeModal is called, it sets "isClosing" which activates this
  // useEffect function
  useEffect(() => {
    function closeIt() {
      overlayRef.current.classList.remove("isClosing");
      setIsClosing(false);
      toggleThisModal(false);
    }
    // add a class "isClosing" which starts a fadeout animation in CSS
    // and add an "animationend" eventlistener which closes the overlay after fadeout
    if (overlayRef.current) {
      overlayRef.current.classList.add("isClosing");
      overlayRef.current.addEventListener("animationend", closeIt);
    }
  }, [isClosing]);

  return (
    <TeamCard>
      <img src={portrait} alt={name} />
      <div className="prose">
        <h3>{name}</h3>
        <p>{position}</p>
        <SocialLinks social={info.socialLinks} />

        <ModalTrigger className="read-more" onClick={openModal} onKeyDown={openModal} onTouchStart={openModal}>
          Read More
        </ModalTrigger>

        {thisModal && <Modal overlayRef={overlayRef} info={info} closeModal={closeModal} />}
      </div>
    </TeamCard>
  );
};

TeamMember.propTypes = {
  info: PropTypes.shape().isRequired,
};

export default TeamMember;
