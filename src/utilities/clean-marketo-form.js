/* global document */
/**
 * cleanMarketoForm()
 * removes all CSS cruft from marketo forms
 * @param {Object} mktoForm - form to be cleaned
 */
function cleanMarketoForm(mktoForm) {
  const thisForm = mktoForm.getFormElem()[0];
  // remove style attribute from forms
  Array.from(document.getElementsByTagName("form")).forEach(function(form) {
    form.removeAttribute("style");
  });

  // disable marketo stylesheets
  const styleSheets = [...document.styleSheets];
  styleSheets.forEach(function(styleSheet) {
    if (styleSheet.href !== null && styleSheet.href.indexOf("marketo") !== -1) {
      styleSheet.disabled = true; // eslint-disable-line
    }
  });

  // remove inline styles
  Array.from(thisForm.getElementsByTagName("style")).forEach(function(tag) {
    tag.remove();
  });

  // remove style attributes from all form element
  thisForm.querySelectorAll("[style]").forEach(function(formElement) {
    formElement.removeAttribute("style");
  });
}

export default cleanMarketoForm;
