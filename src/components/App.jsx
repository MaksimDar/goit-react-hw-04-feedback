import Statistics from './StatisticsInfo/Statistics';
import { useState, useEffect } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import { AppSection } from './App.styled';
const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
const
  // addComment = option => {
  //   this.setState(PrevState => {
  //     return {
  //       [option]: PrevState[option] + 1,
  //     };
  //   });
  // };

  // countTotalFeedback = () => {
  //   bad + good + neutral;
  // };
  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((good / countTotalFeedback()) * 100);
  // };

  return (
    <AppSection>
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={good}
          bad={bad}
          neutral={neutral}
          // options={Object.keys(state)}
          // onLeaveFeedback={addComment}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          // positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </AppSection>
  );
};

export default App;
