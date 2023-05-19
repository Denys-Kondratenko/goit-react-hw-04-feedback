import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { OtherStatistics } from './OtherStatistics/OtherStatistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackObject = { good, neutral, bad };

  const updateState = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackObject).reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100 || 0);
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackObject)}
          onLeaveFeedback={updateState}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={Object.keys(feedbackObject)}
            values={feedbackObject}
          >
            <OtherStatistics
              totalTitle={'total'}
              percentageTitle={'positive feedback'}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Statistics>
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
