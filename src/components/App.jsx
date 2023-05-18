import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { OtherStatistics } from './OtherStatistics/OtherStatistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100 || 0);
  };

  render() {
    const keys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const visible = total;

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.updateState} />
        </Section>
        <Section title="Statistics">
          {!visible ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics options={keys} values={this.state}>
              <OtherStatistics
                totalTitle={'total'}
                percentageTitle={'positive feedback'}
                total={total}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Statistics>
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
