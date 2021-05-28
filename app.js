import questions from "./questions.js";

const appContainer = document.querySelector("#appContainer");
let selectedAnswers = [];
let test;

const appStart = () => {
  console.log("starting app");
  let userInfo = getUserInfo();

  if (userInfo) {
    console.log("found userInfo :>> ", userInfo);

    if (userInfo.inProgress) {
      return buildDisplayQuiz();
    } else {
      return buildDisplayResults();
    }
  }
  return buildDisplayIntro();
};

const buildDisplayIntro = () => {
  appContainer.innerHTML = `<div class="splash-container">
        <div class="splash-child">
          <h1 class="large-font">Which Polytopia tribe are you in?</h1>
          <p class="small-font">
            Let's find out! Type your name and press the button to begin the
            quiz.
          </p>
          <form>
            <input
              type="text"
              placeholder="your name"
              name="userName"
              id="nameInput"
              required
              class="cute-input"
            />
            <button type="submit" class="cute-button" id="beginButton">
              begin!
            </button>
          </form>
        </div>
      </div>`;

  const beginButton = document.querySelector("#beginButton");

  beginButton.addEventListener("click", handleBeginQuiz);

  return;
};

const buildDisplayQuiz = () => {
  appContainer.innerHTML = ``;

  const currentQuestionNumber = getCurrentQuestionNumber();

  let quizContainer = buildQuestionAnswers(currentQuestionNumber);

  appContainer.appendChild(quizContainer);

  const questionButton = document.querySelector("#questionButton");
  const answerGroup = document.querySelector("#answersDiv");
  console.log("answerGroup :>> ", answerGroup);

  const isFinalQuestion = currentQuestionNumber === questions.length;

  const buttonHandler = !isFinalQuestion
    ? handleNextQuestion
    : handleSubmitQuiz;

  questionButton.addEventListener("click", buttonHandler);
  answerGroup.addEventListener("click", selectionHandler);

  return;
};

const buildQuestionAnswers = (questionNumber) => {
  let currentQuestionObject = getCurrentQuestionObject(questionNumber);
  console.log(`currentQuestionObject :>> `, currentQuestionObject);

  const isFinalQuestion = questionNumber === questions.length;
  const buttonText = isFinalQuestion ? "Submit Quiz" : "Next Question";

  let quizContainer = document.createElement("div");
  quizContainer.id = "quizContainer";

  let answersDiv = document.createElement("div");
  answersDiv.id = "answersDiv";

  for (let answerObject of currentQuestionObject.answers) {
    let answerDiv = document.createElement("div");
    answerDiv.id = answerObject.id;
    answerDiv.innerHTML = `
      <input type="radio" name="question${questionNumber}" value="${answerObject.id}">
      ${answerObject.answerText}
    `;

    answersDiv.appendChild(answerDiv);
  }

  const questionTypeNotifier =
    currentQuestionObject.questionType === "pick1"
      ? " Please pick 1."
      : " Please pick any.";
  const questionDiv = document.createElement("div");
  questionDiv.append(currentQuestionObject.question + questionTypeNotifier);

  const buttonDiv = document.createElement("div");
  const nextButton = document.createElement("button");
  nextButton.id = "questionButton";
  nextButton.textContent = buttonText;
  buttonDiv.appendChild(nextButton);

  const errorDiv = document.createElement("div");
  errorDiv.id = "errorMessage";

  const errorParagraph = document.createElement("p");
  errorDiv.appendChild(errorParagraph);

  errorDiv.display = false;

  quizContainer.appendChild(questionDiv);
  quizContainer.appendChild(answersDiv);
  quizContainer.appendChild(errorDiv);
  quizContainer.appendChild(buttonDiv);

  return quizContainer;
};

const buildDisplayResults = () => {
  console.log("display results!");

  appContainer.innerHTML = ``;
  appContainer.innerHTML = `
    <p>results are here!</p>
    <div><button id="resetQuiz">Reset Quiz</button></div>
  `;

  const resetButton = document.querySelector("#resetQuiz");
  resetButton.addEventListener("click", handleResetQuiz);
};

const handleBeginQuiz = (evt) => {
  evt.preventDefault();

  const nameInput = document.querySelector("#nameInput");

  console.log(`${nameInput.value} has begun the quiz!`);

  saveUserInfo({
    name: nameInput.value,
    inProgress: true,
    currentQuestionNumber: 1,
    answers: [],
    result: "",
  });

  buildDisplayQuiz();
};

const selectionHandler = (evt) => {
  console.log("clicked on answersContainer");
  console.log(evt.target.id);
  const target = evt.target.id;

  let questionType = getCurrentQuestionType();
  console.log("questionType :>> ", questionType);

  if (questionType === "pick1") {
    if (selectedAnswers.includes(target)) {
      selectedAnswers = [];
    } else if (selectedAnswers.length === 0) {
      selectedAnswers.push(target);
    } else if (selectedAnswers.length > 0) {
      setErrorMessage("You may only select 1 answer!");
    }
  }

  if (questionType === "pickAny") {
    if (!selectedAnswers.includes(target)) {
      selectedAnswers.push(target);
    } else if (selectedAnswers.includes(target)) {
      if (selectedAnswers.length === 1) {
        selectedAnswers = [];
      } else {
        selectedAnswers = selectedAnswers.filter((answer) => {
          if (answer !== target) {
            return answer;
          }
        });
      }
    }
  }

  console.log("selectedAnswers :>> ", selectedAnswers);
};

const setErrorMessage = (message) => {
  const errorDiv = document.querySelector("#errorMessage");

  errorDiv.firstChild.innerText = message;
  errorDiv.display = true;

  setTimeout(() => {
    errorDiv.firstChild.innerText = "";
    errorDiv.display = false;
  }, 3000);
};

const handleNextQuestion = () => {
  console.log("go to next question!");

  if (selectedAnswers.length === 0) {
    return setErrorMessage("Please select at least 1 answer!");
  }

  saveAnswer();
  increaseQuestionNumber();
  return buildDisplayQuiz();
};

const handleSubmitQuiz = () => {
  console.log("finished the quiz! go to results screen!");

  markQuizComplete();

  return buildDisplayResults();
};

const handleResetQuiz = () => {
  window.localStorage.removeItem("polytopiaTribeQuiz");
  return buildDisplayIntro();
};

const getUserInfo = () => {
  const userInfoJSON = window.localStorage.getItem("polytopiaTribeQuiz");
  if (userInfoJSON) {
    return JSON.parse(userInfoJSON);
  }
  return null;
};

const saveUserInfo = (userInfoObject) => {
  window.localStorage.removeItem("polytopiaTribeQuiz");
  window.localStorage.setItem(
    "polytopiaTribeQuiz",
    JSON.stringify(userInfoObject)
  );
  return;
};

const getCurrentQuestionObject = (questionNumber) => {
  const currentQuestionObject = questions.find(
    (question) => question.id === questionNumber
  );
  return currentQuestionObject;
};

const getCurrentQuestionNumber = () => {
  const userInfo = getUserInfo();
  return userInfo.currentQuestionNumber;
};

const getCurrentQuestionType = () => {
  const questionNumber = getCurrentQuestionNumber();
  const currentQuestion = getCurrentQuestionObject(questionNumber);
  console.log("currentQuestion :>> ", currentQuestion);

  return currentQuestion.questionType;
};

const saveAnswer = () => {
  let userInfo = getUserInfo();

  userInfo.answers.push({
    question: questions[userInfo.currentQuestionNumber].id,
    answer: "hi",
  });

  saveUserInfo(userInfo);
};

const increaseQuestionNumber = () => {
  let userInfo = getUserInfo();

  userInfo.currentQuestionNumber += 1;

  saveUserInfo(userInfo);

  return;
};

const markQuizComplete = () => {
  let userInfo = getUserInfo();

  userInfo.inProgress = false;

  saveUserInfo(userInfo);

  return;
};

appStart();
