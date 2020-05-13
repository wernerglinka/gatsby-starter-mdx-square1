/* global document */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Modal from "./modal";
import SocialLinks from "../social-links";
import { TeamCard, ModalTrigger } from "./team-list-styles";

/** *******************************************************************************
 * Team member component
 * Renders a team member in the team list and provides a modal for more details
 * on the member
 ******************************************************************************** */

const TeamMember = ({ info }) => {
  const [thisModal, toggleThisModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef(null);
  const { image, name, title, social } = info;

  const openModal = () => {
    toggleThisModal(true);
  };

  // modal is not closed immediately. isClosing is set, which adds class "isClosing"
  // to the overlay, which starts a fade out.
  // at the end of the animation the modal is closed.
  const closeModal = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    function closeIt() {
      overlayRef.current.classList.remove("isClosing");
      setIsClosing(false);
      toggleThisModal(false);
    }
    if (overlayRef.current) {
      overlayRef.current.classList.add("isClosing");
      overlayRef.current.addEventListener("animationend", closeIt);
    }
  }, [isClosing]);

  return (
    <TeamCard>
      <img src={image} alt={name} />
      <div className="prose">
        <h3>{name}</h3>
        <p>{title}</p>
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
