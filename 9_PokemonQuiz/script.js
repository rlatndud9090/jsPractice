import { optionsArray, questions } from './poke_datas.js';
import { clearState, quizState } from './quiz_state.js';

const gameContainerEl = document.querySelector('.game-container');
const scoreContainerEl = document.querySelector('.score-container');
const containerEl = document.querySelector('.container');

const timerEl = document.querySelector('.timer');

const startButtonEl = document.getElementById('start');

const numOfQuiz = 5;

let timeCount = 0;
let countdownTime;

const selectRandomValueInArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const makeQuizs = () => {
  const arr = [];
  for (let i = 0; i < numOfQuiz; i++) {
    const pokemon = selectRandomValueInArray(questions);
    const optionArray = [];
    optionArray.push(pokemon.correct_option);
    let optionCount = 1;
    while (optionCount < 4) {
      const randomOption = selectRandomValueInArray(optionsArray);
      if (!optionArray.includes(randomOption)) {
        optionArray.push(randomOption);
        optionCount += 1;
      }
    }
    arr.push({ answer: pokemon, options: optionArray });
  }
  return arr;
};

const startGame = () => {
  gameContainerEl.classList.remove('hide');
  scoreContainerEl.classList.add('hide');
  clearState();
  quizState.quizArray = makeQuizs();
  generateQuiz(quizState.quizArray[quizState.quizIndex]);
};

const createElementWithClassName = (elementName, className) => {
  const element = document.createElement(elementName);
  element.classList.add(className);

  return element;
};

const generateQuiz = (quiz) => {
  const { answer, options } = quiz;
  const { image, correct_option } = answer;

  containerEl.innerHTML = '';
  // create DOM with Fragment
  const fragment = document.createDocumentFragment();

  const quizEl = createElementWithClassName('div', 'quiz');
  fragment.appendChild(quizEl);

  const pEl = createElementWithClassName('p', 'num');
  pEl.textContent = `${quizState.quizIndex + 1} / 5`;
  quizEl.appendChild(pEl);

  const questionEl = createElementWithClassName('div', 'question');
  quizEl.appendChild(questionEl);

  const imgEl = createElementWithClassName('img', 'pokemon-image');
  imgEl.setAttribute('src', image);
  questionEl.appendChild(imgEl);

  const optionsEl = createElementWithClassName('div', 'options');
  quizEl.appendChild(optionsEl);

  for (let i = 0; i < 4; i++) {
    const optionEl = createElementWithClassName('button', 'option');
    optionEl.addEventListener('click', (e) => checkAnswer(e, correct_option));
    optionEl.textContent = options[i];
    optionsEl.appendChild(optionEl);
  }

  const nextDivEl = createElementWithClassName('div', 'nxt-btn-div');
  quizEl.appendChild(nextDivEl);

  const nextBtnEl = createElementWithClassName('button', 'next-btn');
  nextBtnEl.addEventListener('click', goNextQuestion);
  nextBtnEl.textContent = 'Next';
  nextDivEl.appendChild(nextBtnEl);

  containerEl.appendChild(fragment);

  timeCount = 0;
  clearInterval(countdownTime);
  displayTimer();
};

const goNextQuestion = () => {
  quizState.quizIndex += 1;
  if (quizState.quizIndex === numOfQuiz) {
    gameContainerEl.classList.add('hide');
    scoreContainerEl.classList.remove('hide');
    document.getElementById(
      'user-score'
    ).textContent = `your score is : ${quizState.score} / 5!!!`;
    document.getElementById('start').textContent = 'Restart';
  } else {
    generateQuiz(quizState.quizArray[quizState.quizIndex]);
  }
};

const checkAnswer = (event, correct_option) => {
  const targetOption = event.target;
  const userAnswer = targetOption.innerText;
  const optionArray = document.querySelectorAll('.option');
  if (userAnswer === correct_option) {
    targetOption.classList.add('correct');
    quizState.score += 1;
  } else {
    targetOption.classList.add('incorrect');
    optionArray.forEach((optionEl) => {
      if (optionEl.textContent === correct_option) {
        optionEl.classList.add('correct');
      }
    });
  }
  clearInterval(countdownTime);
  optionArray.forEach((optionEl) => {
    optionEl.disabled = true;
  });
};

const displayTimer = () => {
  timerEl.innerHTML = `<span>Time: ${timeCount}s / 10s</span>`;
  countdownTime = setInterval(() => {
    timeCount += 1;
    timerEl.innerHTML = `<span>Time: ${timeCount}s / 10s</span>`;
    if (timeCount === 10) {
      clearInterval(countdownTime);
      goNextQuestion();
    }
  }, 1000);
};

startButtonEl.addEventListener('click', startGame);
