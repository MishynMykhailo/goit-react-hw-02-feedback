import s from '../FeedbackOptions/FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return items.map(item => {
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
