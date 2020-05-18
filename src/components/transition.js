import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const Transition = ({ children, location }) => {
  const duration = 0.5;

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration },
    },
  };

  return (
    <AnimatePresence>
      <motion.div key={location.pathname} variants={variants} initial="initial" animate="enter" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;

Transition.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
