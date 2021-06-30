import questions from "./questions.js";
import tribeCharacteristics from "./tribeCharacteristics.js";
import {
  makeElement,
  splashHTML,
  fancyTribeConversion,
  determineIsQuizOver,
  creditsHTML,
  calculateResults,
} from "./utils.js";

const appContainerDiv = document.querySelector("#appContainer");
let startButton;
let usersName;
let currentQuestion = 1;
let currentQuestionType;
let savedAnswers = {};
let currentSelections = [];
let resultTribe;

const buildQuizHTML = function () {
  let currentQuestionTemplate = getCurrentQuestionFromTemplate();
  currentQuestionType = currentQuestionTemplate.questionType;

  let setContainerDiv = makeElement({
    element: "div",
    id: "setContainer",
    classes: ["set-container"],
  });
  let imageContainerDiv = makeElement({
    element: "div",
    classes: ["image-container"],
  });
  let imageEl = makeElement({
    element: "img",
    classes: ["question-image"],
  });
  imageEl.alt = "blank";
  imageEl.src = `./images/question${currentQuestion}.png`;

  imageContainerDiv.appendChild(imageEl);

  let questionContainerDiv = makeElement({
    element: "div",
    id: "questionContainer",
    classes: ["question-container"],
  });
  let questionTextDiv = makeElement({
    element: "div",
    id: "questionText",
    classes: ["question-text"],
  });
  questionTextDiv.innerText = currentQuestionTemplate.question;

  let questionTypeDiv = makeElement({
    element: "div",
    id: "questionType",
    classes: ["question-type"],
  });
  questionTypeDiv.innerText =
    currentQuestionType === "pick1"
      ? "(choose 1 answer)"
      : "(choose all answer that apply)";

  questionContainerDiv.appendChild(questionTextDiv);
  questionContainerDiv.appendChild(questionTypeDiv);

  let answersContainerDiv = makeElement({
    element: "div",
    id: "answersContainer",
    classes: ["answers-container"],
  });
  for (let answerChoice of currentQuestionTemplate.answers) {
    let answerChoiceDiv = makeElement({
      element: "div",
      id: answerChoice.id,
      classes: ["answer-choice", "answer-text"],
    });
    answerChoiceDiv.innerText = answerChoice.answerText;

    answersContainerDiv.appendChild(answerChoiceDiv);
  }

  let buttonContainerDiv = makeElement({
    element: "div",
    id: "buttonContainer",
    classes: ["button-container"],
  });
  let buttonEl = makeElement({
    element: "button",
    id: "nextQuestionButton",
    classes: ["cute-button"],
  });
  buttonEl.innerText = determineIsQuizOver(currentQuestion)
    ? "Submit Quiz"
    : "Next Question";

  buttonContainerDiv.appendChild(buttonEl);

  setContainerDiv.appendChild(imageContainerDiv);
  setContainerDiv.appendChild(questionContainerDiv);
  setContainerDiv.appendChild(answersContainerDiv);
  setContainerDiv.appendChild(buttonContainerDiv);

  appContainerDiv.innerHTML = "";
  appContainerDiv.appendChild(setContainerDiv);

  answersContainerDiv.addEventListener("click", handleSelectAnswer);

  let nextQuestionButton = document.querySelector("#nextQuestionButton");
  nextQuestionButton.addEventListener("click", () =>
    handleNextQuestionButton()
  );

  window.scrollTo(0, 0);
};

const handleSelectAnswer = function (evt) {
  const target = evt.target.id;
  if (target === "answersContainer") return;

  if (currentQuestionType === "pick1") {
    if (currentSelections.includes(target)) {
      currentSelections = [];
    } else {
      currentSelections = [];
      currentSelections.push(target);
    }
  }

  if (currentQuestionType === "pickAny") {
    if (currentSelections.includes(target)) {
      if (currentSelections.length === 1) {
        currentSelections = [];
      } else {
        currentSelections = currentSelections.filter((answer) => {
          if (answer !== target) {
            return answer;
          }
        });
      }
    } else {
      currentSelections.push(target);
    }
  }
  let answersContainer = document.querySelector("#answersContainer");

  for (let child of answersContainer.children) {
    if (!currentSelections.includes(child.id)) {
      child.classList = "answer-choice answer-text";
    }
  }

  for (let selection of currentSelections) {
    let answerElement = document.querySelector(`#${selection}`);
    answerElement.classList = "answer-choice answer-text selected";
  }
};

const buildResultsHTML = function () {
  let setContainerDiv = makeElement({
    element: "div",
    id: "setContainer",
    classes: ["set-container"],
  });

  let resultsHeaderDiv = makeElement({
    element: "div",
    classes: ["results-header"],
  });
  let resultsHeaderParagraph = makeElement({
    element: "p",
  });
  resultsHeaderParagraph.innerText = `${usersName} is in the ${fancyTribeConversion[resultTribe]} tribe!`;

  resultsHeaderDiv.appendChild(resultsHeaderParagraph);

  let resultImageContainerDiv = makeElement({
    element: "div",
    id: "resultImageContainer",
    classes: ["result-image-container"],
  });
  let resultImageEl = makeElement({
    element: "img",
    classes: ["result-image"],
  });
  resultImageEl.src = `./images/${resultTribe}.png`;
  resultImageEl.alt = "blank";

  resultImageContainerDiv.appendChild(resultImageEl);

  let tribeDescriptionContainerDiv = makeElement({
    element: "div",
    id: "tribeDescriptionContainer",
    classes: ["tribe-description-container"],
  });
  let descriptionHeaderEl = makeElement({
    element: "h2",
    classes: ["description-header"],
  });
  descriptionHeaderEl.innerText = `About The ${fancyTribeConversion[resultTribe]} Tribe:`;

  let descriptionBodyEl = makeElement({
    element: "p",
    classes: ["description-body"],
  });
  descriptionBodyEl.innerHTML = tribeCharacteristics[resultTribe];

  tribeDescriptionContainerDiv.appendChild(descriptionHeaderEl);
  tribeDescriptionContainerDiv.appendChild(descriptionBodyEl);

  let creditsContainerDiv = makeElement({
    element: "div",
    id: "creditsContainer",
    classes: ["credits-container"],
  });
  creditsContainerDiv.innerHTML = creditsHTML;

  setContainerDiv.appendChild(resultsHeaderDiv);
  setContainerDiv.appendChild(resultImageContainerDiv);
  setContainerDiv.appendChild(tribeDescriptionContainerDiv);
  setContainerDiv.appendChild(creditsContainerDiv);

  appContainerDiv.innerHTML = "";
  appContainerDiv.appendChild(setContainerDiv);
  window.scrollTo(0, 0);
};

const handleNextQuestionButton = function () {
  if (currentSelections.length < 1) return;

  saveAnswers();
  if (determineIsQuizOver(currentQuestion)) {
    console.log("Quiz is over.");
    console.log("savedAnswers :>> ", savedAnswers);
    resultTribe = calculateResults(savedAnswers);
    buildResultsHTML();
  } else {
    currentQuestion += 1;
    buildQuizHTML();
  }
};

const saveAnswers = function () {
  savedAnswers[currentQuestion] = currentSelections;

  currentSelections = [];
};

const handleStartQuiz = function () {
  let nameInput = document.querySelector("#nameInput");

  if (!nameInput.value) return;

  usersName = nameInput.value.trim();

  buildQuizHTML();
};

const startApp = function () {
  appContainerDiv.innerHTML = splashHTML;
  startButton = document.querySelector("#startButton");
  startButton.addEventListener("click", () => handleStartQuiz());
};

const getCurrentQuestionFromTemplate = function () {
  return questions.find((question) => question.id === currentQuestion);
};

startApp();
