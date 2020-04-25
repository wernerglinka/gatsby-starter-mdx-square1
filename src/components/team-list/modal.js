import React from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import Img from "gatsby-image";
import { Overlay, ModalContent, CloseModal } from "./team-list-styles";
// import SocialLinkList from "../../../components/social-links";

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
          </div>
        </div>

        <div className="bio" dangerouslySetInnerHTML={{ __html: bio }} />
      </ModalContent>
    </Overlay>
  );
};

ModalTeam.defaultProps = {
  // social: null,
};

ModalTeam.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    // social: PropTypes.object,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  overlayRef: PropTypes.object.isRequired,
};

export default ModalTeam;
