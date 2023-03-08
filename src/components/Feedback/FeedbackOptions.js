import PropTypes from 'prop-types';
import { FeedbackButtons } from './FeedbackOptions.styled';
const FeedbackOptions = ({
  good,
  bad,
  neutral,
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) => {
  return (
    <div>
      <FeedbackButtons type="button" onClick={() => onLeaveFeedbackGood(good)}>
        {good}
      </FeedbackButtons>
      <FeedbackButtons
        type="button"
        onClick={() => onLeaveFeedbackNeutral(neutral)}
      >
        {neutral}
      </FeedbackButtons>
      <FeedbackButtons type="button" onClick={() => onLeaveFeedbackBad(bad)}>
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
