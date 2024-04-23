import { QuizProps } from "../shared/interfaces/quiz.interface";

const Quiz: React.FC<QuizProps> = ({
  currentQuestion,
  setSelectedAnswer,
  selectedAnswer,
  setScore,
  setCurrentQuestionIndex,
}) => {
  return (
    <>
      <h1>{currentQuestion.prompt}</h1>
      <form
        className="quiz-form"
        onSubmit={(e) => {
          e.preventDefault();

          // did they get the right answer
          if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
          }
          // increment to the next question OR end the game if they've finished all the questions
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }}
      >
        {currentQuestion.answers.map((answer) => {
          return (
            <label key={answer}>
              <input
                onChange={() => {
                  setSelectedAnswer(answer);
                }}
                type="radio"
                name="answer"
                checked={answer === selectedAnswer}
              />{" "}
              {answer}
            </label>
          );
        })}
        <button>Submit</button>
      </form>
    </>
  );
};

export default Quiz;
