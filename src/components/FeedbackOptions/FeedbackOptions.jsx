import s from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => {
    return (
      <button
        key={item}
        type="button"
        onClick={onLeaveFeedback}
        className={s.button}
      >
        {item}
      </button>
    );
  });
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
