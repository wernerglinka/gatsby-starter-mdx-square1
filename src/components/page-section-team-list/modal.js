/* global document */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import Img from "gatsby-image";
import { Overlay, ModalContent, CloseModal } from "./team-list-styles";
import SocialLinks from "../social-links";

/** *******************************************************************************
 * Modal box for team members
 * modal may be closed by clicking the close icon or outside of the modal content
 * this is done by passing in a ref object from the parent and attaching it to
 * the overlay
 ******************************************************************************** */

const ModalTeam = ({ info, closeModal, overlayRef }) => {
  const { image, name, title, bio } = info;

  // don't close when clicked inside modal content
  const handleClick = e => {
    if (overlayRef.current === e.target) {
      closeModal();
    }
  };

  const escFunction = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  // close modal with ESC key
  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, []);

  return (
    <Overlay onClick={handleClick} ref={overlayRef}>
      <ModalContent>
        <CloseModal onClick={closeModal}>
          <FiX />
        </CloseModal>

        <div className="header">
          <Img fluid={image} />

          <div className="prose">
            <h2>{name}</h2>
            <p>{title}</p>
            <SocialLinks social={info.socialLinks} />
          </div>
        </div>

        <div className="bio" dangerouslySetInnerHTML={{ __html: bio }} />
      </ModalContent>
    </Overlay>
  );
};

ModalTeam.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    socialLinks: PropTypes.object,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  overlayRef: PropTypes.object.isRequired,
};

export default ModalTeam;