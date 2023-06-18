import PropTypes from 'prop-types';
import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = 0;
    total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good > 0) {
      let positiveTotal = 0;
      positiveTotal = Math.round((good / this.countTotalFeedback()) * 100);
      return positiveTotal;
    } else {
      return 0;
    }
  };

  render() {
    const btns = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={btns}
          onLeaveFeedback={this.handleIncrement}
        />
        {good || neutral || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    );
  }
}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Feedback;
