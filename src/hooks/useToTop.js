/* global document, window */

import { useState, useEffect } from "react";
import debounce from "../utilities/debounce";

const useToTop = () => {
  const [showToTop, setToTop] = useState(false);

  function handleScroll() {
    // Safari reports 0 for document.documentElement.scrollTop. This fix
    // will use the right scrollTop for all browsers
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    if (scrollTop > 150) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 100));
    return () =>
      window.removeEventListener("scroll", debounce(handleScroll, 100, true));
  }, []);

  useEffect(() => {
    window.addEventListener("touchmove", handleScroll);
    return () => window.removeEventListener("touchmove", handleScroll);
  }, []);

  return showToTop;
};

export default useToTop;
