import PropTypes from 'prop-types';
import { Component } from 'react';
import './Section.css';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const { name } = e.target;
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
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h3>Please leave feedback</h3>
      </div>
    );
  }
}

Section.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Section;
