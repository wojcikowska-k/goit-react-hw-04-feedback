import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttons">
      {options.map((name, index) => (
        <button
          type="button"
          name={name}
          onClick={() => onLeaveFeedback(name)}
          key={index}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
};

export default FeedbackOptions;
