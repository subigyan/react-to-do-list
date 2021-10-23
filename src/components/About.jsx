import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const About = ({ style }) => {
  return (
    <div style={style}>
      <p>Version 1.0.1</p>
      <Link to ="/">Home</Link>
    </div>
  );
};

About.defaultProps = {
  style: {
    "text-align": "Center",
    "font-size": "30px",
  },
};

About.prototypes = {
  style: PropTypes.object,
};
export default About;
