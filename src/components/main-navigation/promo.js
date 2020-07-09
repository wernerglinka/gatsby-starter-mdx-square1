import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import ClImage from "../cl-image";

import useMenuPromo from "../../hooks/useMenuPromo";

const PromoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

/** ***************************************************************************
 *  Menu Promo Component
 *  Builds a promo for the main menu pane
 *************************************************************************** */
const MenuPromo = ({ promoID }) => {
  const thisPromo = useMenuPromo(promoID);
  const sizes = "300px";

  return (
    <PromoWrapper>
      <div>
        <h3>{thisPromo.title}</h3>
        <Link to={thisPromo.cta.url}>{thisPromo.cta.text}</Link>
      </div>

      <div>
        <ClImage imageName={thisPromo.image} maxWidth={300} sizes={sizes} alt={thisPromo.title} />
      </div>
    </PromoWrapper>
  );
};

MenuPromo.propTypes = {
  promoID: PropTypes.string.isRequired,
};

export default MenuPromo;
