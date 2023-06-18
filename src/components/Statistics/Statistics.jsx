import PropTypes from 'prop-types';
import { Component } from 'react';
import './Statistics.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h3>Statistics</h3>
        <div class="statistics">
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {this.countTotalFeedback()}</span>
          <span>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </span>
        </div>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
