import React from "react";
import PropTypes from "prop-types";
import css from "../Modules/Feedback.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return(
    <div>
    {options.map((option) => (
    <button className={`${css.button} ${css.basicFont} ${css.buttonMargin}`} key = {option} onClick = {() => onLeaveFeedback(option)}>
     {option}
    </button>
))}
    </div>
);
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
  };


export default FeedbackOptions;

