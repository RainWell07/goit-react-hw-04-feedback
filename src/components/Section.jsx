import React from "react";
import css from "../Modules/Feedback.module.css";
import PropTypes from "prop-types";

const Section = ({title, children}) => {
    return (
        <div>
         <h1 className={`${css.basicFont} ${css.heroMargin}`}>{title}</h1>
         {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;