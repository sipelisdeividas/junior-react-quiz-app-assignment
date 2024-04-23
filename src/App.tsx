import React, { useState } from "react";
import { questions } from "./data/questions";
import Score from "./components/Score";
import Quiz from "./components/Quiz";

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const isGameOver = currentQuestionIndex >= questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="main">
      {isGameOver ? (
        <Score
          score={score}
          totalQuestions={questions.length}
          reset={() => {
            setCurrentQuestionIndex(0);
            setSelectedAnswer("");
            setScore(0);
          }}
        />
      ) : (
        <Quiz
          currentQuestion={currentQuestion}
          setSelectedAnswer={setSelectedAnswer}
          selectedAnswer={selectedAnswer}
          setScore={setScore}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      )}
    </div>
  );
};

export default App;
