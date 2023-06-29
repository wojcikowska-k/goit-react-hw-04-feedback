import PropTypes from 'prop-types';

import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import React, { useState } from 'react';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    const {
      target: { name },
    } = event;

    if (name === 'good') {
      setGood(good + 1);
    } else if (name === 'neutral') {
      setNeutral(neutral + 1);
    } else if (name === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    let total = 0;
    total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good > 0) {
      let positiveTotal = 0;
      positiveTotal = Math.round((good / countTotalFeedback()) * 100);
      return positiveTotal;
    } else {
      return 0;
    }
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleIncrement}
      />
      {good || neutral || bad > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Section>
  );
};

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Feedback;
