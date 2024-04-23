const Score = ({
  totalQuestions,
  score,
  reset,
}: {
  totalQuestions: number;
  score: number;
  reset: () => void;
}) => {
  const numberOfWrongAnswers = totalQuestions - score;

  return (
    <>
      <h2>
        Your score is: {score}, wrong answers: {numberOfWrongAnswers}
      </h2>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </button>
    </>
  );
};

export default Score;
