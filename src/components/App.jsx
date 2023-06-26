import React, {useState } from "react";
import FeedbackOptions from "../components/FeedbackOptions";
import Statistics from "../components/Statistics";
import Section from "../components/Section";
import Notification from "../components/Notification";
import css from "../Modules/Feedback.module.css"


const App = () => {

 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);

 const optionsFeedback = ['good', 'neutral', 'bad'];
 const valueFeedback = [good, neutral, bad];


 const handleFeedback = (type) => {
   if (type === "good") {
  setGood(good + 1);
   } else if (type === "neutral") {
  setNeutral(neutral +1);
   } else if (type === "bad") {
    setBad(bad + 1);
   }
  };

  function countTotalFeedback() {
    return valueFeedback.reduce( (previousValues, number) => {
    return previousValues + number;
    }, 0);
  }

  function countPositivePercentage() {
    return Math.round( (good * 100) / countTotalFeedback());
  }

    return (
    <div className={css.container}>
    <Section title="Please leave feedback">
    <FeedbackOptions
    options ={optionsFeedback}
    onLeaveFeedback={handleFeedback}/>
    </Section>

    <Section title = "Statistics:">
    {countTotalFeedback() > 0 && (
    <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    total={countTotalFeedback()}
    positivePercentage={countPositivePercentage()}/>
    )}
    {countTotalFeedback() === 0 && (
      <Notification message="There is no feedback yet..."/>
    )}
    </Section>
    </div>
    );
};

export default App;