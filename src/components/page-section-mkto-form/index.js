/* global window, document */

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CTA from "../cta";
import SectionIntro from "../section-intro";
import ClImage from "../cl-image";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import blockedEmails from "../../../content/data/blocked-email";
import cleanMarketoForm from "../../utilities/clean-marketo-form";

import { FormInfo, FormWrapper, SectionWrapper } from "./form-component-styles";

/** ***************************************************************************
 *  Marketo form component
 *  Uses example form from:
 *  https://developers.marketo.com/examples/forms2/example3.html
 *
 *  To use a real form:
 *  - the MktoForms2.loadForm URL on this page
 *  - change munchkinId in /content/data/site-metadata.json
 *  - change form URL in /src/layouts/form-page.js
 *
 *************************************************************************** */
const MktoFormComponent = ({ info }) => {
  const {
    image, // the mandatory image... after all this is a media component
    imageMaxWidth,
    sizes,
    alt, // to be used as the alt text of the image
    formID,
    formLeft,
  } = info;

  const siteMetadata = useSiteMetadata();

  const [newFormCycle, setNewFormCycle] = useState(false);
  const [isRendered, setFormState] = useState(false);
  const [showThankYou, setThankYou] = useState(false);

  // validate these forms against a freemail list to exclude personal emails
  // request demo 1057
  const validateForms = [1057];

  useEffect(() => {
    // check if a new form cycle begins so we can remove old forms from the DOM
    // necessary as we are a SPA and don't have normal page load
    if (!newFormCycle) {
      // remove old marketo forms from DOM
      Array.from(document.getElementsByClassName("mktoForm")).forEach(function(form) {
        form.remove();
      });
      const old = document.getElementById("mktoStyleLoaded");
      if (old) {
        old.remove();
      }
      setNewFormCycle(true);
    }

    // poll if Marketo Form library is loaded
    const isChecking = setInterval(function() {
      if (window.MktoForms2 && !isRendered) {
        clearInterval(isChecking);
        window.MktoForms2.loadForm("//app-sjst.marketo.com", siteMetadata.munchkinId, formID);

        // when the form is rendered clean all Marketo CSS cruft
        window.MktoForms2.whenRendered(function(form) {
          cleanMarketoForm(form);
          setFormState(true);
        });

        window.MktoForms2.whenReady(function(form) {
          // form submit was successful
          // show Thank You section and return false so Marketo doesn't
          // send an email and redirects form page
          form.onSuccess(() => {
            setThankYou(true);
            return false;
          });

          // add email validation. emails listed on freemail are not allowed
          // this assumes that a file /freemail.txt exists in the site root
          const currentFormID = form.getId();
          const emailJQ = form.getFormElem().find("#Email");

          form.onValidate(nativeValid => {
            if (!nativeValid) return;

            // only validate forms that are listed in array validateForms
            if (validateForms.includes(currentFormID)) {
              const email = form.getValues().Email.toLowerCase();
              const domainIndex = email.indexOf("@");
              const emailDomain = email.slice(domainIndex + 1);
              const errorMessage = "A Business Email is Required";

              if (blockedEmails.includes(emailDomain)) {
                form.submittable(false);
                form.showErrorMessage(errorMessage, emailJQ);
              } else {
                form.submittable(true);
              }
            }
          });
        });
      }
    }, 50);
  }, []);

  return (
    <section>
      <SectionWrapper formLeft={formLeft}>
        <FormInfo>
          <SectionIntro info={info} />
          <ClImage imageName={image} maxWidth={imageMaxWidth} sizes={sizes} alt={alt} />
        </FormInfo>
        <FormWrapper>
          <form id={`mktoForm_${formID}`} />
        </FormWrapper>
      </SectionWrapper>
    </section>
  );
};

MktoFormComponent.propTypes = {
  info: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageMaxWidth: PropTypes.number.isRequired,
    sizes: PropTypes.string.isRequired,
    formLeft: PropTypes.bool,
    formID: PropTypes.number.isRequired,
  }),
};

MktoFormComponent.defaultProps = {
  info: {
    alt: "",
    form: false,
  },
};

export default MktoFormComponent;
