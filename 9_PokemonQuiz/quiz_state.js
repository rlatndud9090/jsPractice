export const quizState = {
  score: 0,
  quizIndex: 0,
  quizArray: [],
};

export const clearState = () => {
  quizState.score = 0;
  quizState.quizIndex = 0;
  quizState.quizArray = [];
};
