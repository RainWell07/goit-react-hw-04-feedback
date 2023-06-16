import React, {useEffect, useState } from "react";
import FeedbackOptions from "../components/FeedbackOptions";
import Statistics from "../components/Statistics";
import Section from "../components/Section";
import Notification from "../components/Notification";
import css from "../Modules/Feedback.module.css"


const App = () => {

 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
 const [totalFeedback, setTotalFeedback] = useState(0);
 const [positivePercentage, setPositivePercentage] = useState(0);


 const handleFeedback = (type) => {
   if (type === "good") {
  setGood(good + 1);
   } else if (type === "neutral") {
  setNeutral(neutral +1);
   } else if (type === "bad") {
    setBad(bad + 1);
   }
  };

  useEffect(() => {
   const total = good + neutral + bad;
   const percentage = total > 0 ? Math.round((good / total) * 100) : 0;
   setTotalFeedback(total);
   setPositivePercentage(percentage);
  }, [good, neutral, bad]);

    return (
    <div className={css.container}>
    <Section title="Please leave feedback">
    <FeedbackOptions
    options ={["good", "neutral", "bad"]}
    onLeaveFeedback={handleFeedback}
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
};

export default App;