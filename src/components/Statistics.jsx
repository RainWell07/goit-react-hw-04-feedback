import React from "react";
import css from "../Modules/Feedback.module.css"
import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
    <div className={css.container}>
    <p className={`${css.basicFont} ${css.good}`}>😀Good:{good}</p>
    <p className={`${css.basicFont} ${css.neutral}`}>😐Neutral:{neutral}</p>
    <p className={`${css.basicFont} ${css.bad}`}>😡Bad:{bad}</p>
    <p className={`${css.basicFont} ${css.total}`}>✅Total:{total}</p>
    <p className={`${css.basicFont} ${css.positive}`}>🚀Positive Feedback %:{positivePercentage}</p>
    </div>
    );
};

Statistics.propTypes = {
 good: PropTypes.number.isRequired,
 neutral: PropTypes.number.isRequired,
 bad: PropTypes.number.isRequired,
 total: PropTypes.number.isRequired,
 positivePercentage: PropTypes.number.isRequired
};

export default Statistics;