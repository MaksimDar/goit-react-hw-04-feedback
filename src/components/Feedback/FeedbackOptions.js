import PropTypes from 'prop-types';
import { FeedbackButtons } from './FeedbackOptions.styled';
const FeedbackOptions = ({ good, bad, neutral, onLeaveFeedback }) => {
  return (
    <div>
      {/* {options.map(option => (
        // <FeedbackButtons
        //   key={option}
        //   type="button"
        //   onClick={() => onLeaveFeedback(option)}
        // >
        //   {option}
        // </FeedbackButtons>
      ))} */}
      <FeedbackButtons
        key={good}
        type="button"
        onClick={() => onLeaveFeedback(good)}
      >
        {good}
      </FeedbackButtons>
      <FeedbackButtons
        key={neutral}
        type="button"
        onClick={() => onLeaveFeedback(neutral)}
      >
        {neutral}
      </FeedbackButtons>
      <FeedbackButtons
        key={bad}
        type="button"
        onClick={() => onLeaveFeedback(bad)}
      >
        {bad}
      </FeedbackButtons>
    </div>
  );
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  option: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};
