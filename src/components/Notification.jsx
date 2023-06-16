import React from "react";
import css from "../Modules/Feedback.module.css"
import PropTypes from "prop-types";

const Notification = ({message}) => {
    return <p className={css.basicFont}>{message}</p>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;