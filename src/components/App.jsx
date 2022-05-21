import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // goodFeedBackCount = evt => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // neutralFeedBackCount() {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // }

  // badFeedBackCount() {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // }
  onLeaveFeedback = items => {
    const label = items.target.textContent;

    this.setState(prevState => ({
      [label]: (prevState[label] += 1),
    }));
  };
  countTotalFeedback() {
    let total = Object.values(this.state);
    return total.reduce((acc, number) => {
      return acc + number;
    }, 0);
  }
  countPositiveFeedbackPercentage() {
    let result =
      Math.ceil((this.state.good / this.countTotalFeedback()) * 100) + '%';
    return result;
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
