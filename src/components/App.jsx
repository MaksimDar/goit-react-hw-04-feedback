import Statistics from './StatisticsInfo/Statistics';
import { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import { AppSection } from './App.styled';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onLeaveFeedbackGood = good => {
    setGood(good + 1);
  };
  const onLeaveFeedbackNeutral = neutral => {
    setNeutral(neutral + 1);
  };
  const onLeaveFeedbackBad = bad => {
    setBad(bad + 1);
  };

  // addComment = option => {
  //   this.setState(PrevState => {
  //     return {
  //       [option]: PrevState[option] + 1,
  //     };
  //   });
  // };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <AppSection>
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={good}
          bad={bad}
          neutral={neutral}
          onLeaveFeedbackGood={onLeaveFeedbackGood}
          onLeaveFeedbackNeutral={onLeaveFeedbackNeutral}
          onLeaveFeedbackBad={onLeaveFeedbackBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </AppSection>
  );
};

export default App;
