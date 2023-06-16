import React, { Component } from "react";
import FeedbackOptions from "../components/FeedbackOptions";
import Statistics from "../components/Statistics";
import Section from "../components/Section";
import Notification from "../components/Notification";
import css from "../Modules/Feedback.module.css"


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) => {
   this.setState((prevState) => ({
   [type]: prevState[type] + 1
  }))
  };

  CountTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  CountPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.CountTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const {good, neutral, bad} = this.state;
    const totalFeedback = this.CountTotalFeedback();
    const positivePercentage = this.CountPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
    <Section title="Please leave feedback">
      <FeedbackOptions
       options ={Object.keys(this.state)}
       onLeaveFeedback={this.handleFeedback}
       />
    </Section>

    <Section title = "Statistics:">
      {totalFeedback > 0 ? (
        <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total = {totalFeedback}
        positivePercentage = {positivePercentage}
        />
      ) : (
        <Notification message = "There is no feedback..." />
      )}
    </Section>
  </div>
);
}
}

export default App;