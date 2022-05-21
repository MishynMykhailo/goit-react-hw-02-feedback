const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return items.map(item => {
    return (
      <button key={item} type="button" onClick={onLeaveFeedback}>
        {item}
      </button>
    );
  });
};
export default FeedbackOptions;
