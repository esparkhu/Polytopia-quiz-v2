import questions from "./questions.js";

export const makeElement = function (input) {
  const customElement = document.createElement(input.element);
  input.id && (customElement.id = input.id);
  input.classes && (customElement.classList = input.classes.join(" "));

  return customElement;
};

export const splashHTML = `<div id="setContainer" class="set-container">
        <div id="splashHeader" class="splash-header">
          <p>Which Polytopia Tribe</p>
          <p>Would You Be In?</p>
        </div>
        <div id="splashImageContainer" class="imageContainer">
          <img
            src="./images/splash.png"
            alt="Polytopia Tribes Splash Image"
            class="splash-image"
          />
        </div>
        <div id="namePromptContainer" class="name-prompt-container">
          <p class="name-prompt">
            Enter your name to begin the Polytopia Tribe Quiz!
          </p>
          <input
            type="text"
            name="name"
            id="nameInput"
            placeholder="name"
            class="cute-input"
          /><button id="startButton" class="cute-button">start</button>
        </div>
      </div>`;

export const creditsHTML = `<h2 class="credits-header">Credits:</h2>
          <p class="credits-description">
            <b class="credits-subheader">App Idea and Writing</b><br />
            espark<br /><br />
            <b class="credits-subheader">App Design and Devolopment</b><br />
            Luna<br /><br />
            <b class="credits-subheader">Artwork</b><br />
            Hardizzel (Ai-mo, Luxidoor, Yadakk)<br />
            Ankizle (Queztali, Xin-xi)<br />
            Bardur Giant (Polaris, Bardur)<br />
            Beauxtron (Vengir, Imperius)<br />
            Mokia (Elyrion, Oumaji)<br />
            Aetholis (Aquarion)<br />
            ElementalSpade (Kickoo)<br />
            Landho (Cymanti)<br />
            Outcast (Hoodrick)<br />
            viera (Zebasi)
          </p>`;

export const fancyTribeConversion = {
  bardur: "Bardur",
  aimo: "Ai-Mo",
  kickoo: "Kickoo",
  quetzali: "Quetzali",
  luxidoor: "Luxidoor",
  zebasi: "Zebasi",
  vengir: "Vengir",
  oumaji: "Oumaji",
  aquarion: "Aquarion",
  elyrion: "Elyrion",
  polaris: "Polaris",
  imperius: "Imperius",
  xinxi: "Xin-xi",
  hoodrick: "Hoodrick",
  yadakk: "Yadakk",
};

export const determineIsQuizOver = function (currentQuestion) {
  if (currentQuestion === questions.length) return true;

  return false;
};

export const calculateResults = function (savedAnswers) {
  console.log("calculating results!");

  let pointsTracker = {
    bardur: 0,
    aimo: 0,
    kickoo: 0,
    quetzali: 0,
    luxidoor: 0,
    zebasi: 0,
    vengir: 0,
    oumaji: 0,
    aquarion: 0,
    elyrion: 0,
    polaris: 0,
    imperius: 0,
    xinxi: 0,
    hoodrick: 0,
    yadakk: 0,
    cymanti: 0,
  };

  // for each question in questions.js (also iterate with index as well)
  //    save the user's answers to that question in variable userAnswers[]
  //    for each of the user's answers to current question
  //      for each positive tribe for this answer choice
  //        add 1 to tribe in pointsTracker
  //      for each negative tribe for this answer choice
  //        minus 1 from tribe in pointsTracker
  // calculate max tribe in pointsTracker

  // for each question in questions.js (also iterate with index as well)

  for (let i = 1; i <= questions.length; i++) {
    let question = questions.find(
      (questionTemplate) => questionTemplate.id === i
    );
    console.log("question :>> ", question);
    //    save the user's answers to that question in variable userAnswers[]
    let userAnswers = savedAnswers[i];
    console.log("savedAnswers :>> ", savedAnswers);
    console.log("userAnswers :>> ", userAnswers);
    //    for each of the user's answers to current question
    for (let userAnswer of userAnswers) {
      console.log("userAnswer :>> ", userAnswer);
      //console.log("question.answers :>> ", question.answers);
      let answerTemplate = question.answers.find((answerObject) => {
        if (answerObject.id === userAnswer) return answerObject;
      });
      console.log("answerTemplate :>> ", answerTemplate);
      if (answerTemplate.positiveTribes.length > 0) {
        //      for each positive tribe for this answer choice
        for (let posTribe of answerTemplate.positiveTribes) {
          //        add 1 to tribe in pointsTracker
          pointsTracker[posTribe] = pointsTracker[posTribe] + 1;
        }
      }
      if (answerTemplate.negativeTribes.length > 0) {
        //      for each negative tribe for this answer choice
        for (let negTribe of answerTemplate.negativeTribes) {
          //        minus 1 from tribe in pointsTracker
          pointsTracker[negTribe] = pointsTracker[negTribe] - 1;
        }
      }
    }
  }
  // calculate max tribe in pointsTracker
  console.log("pointsTracker :>> ", pointsTracker);
  return calculateMax(pointsTracker);
};

const calculateMax = function (pointsTracker) {
  let maxTribe;
  let maxNumber = -Infinity;

  for (let tribe of Object.keys(pointsTracker)) {
    if (pointsTracker[tribe] > maxNumber) {
      maxNumber = pointsTracker[tribe];
      maxTribe = tribe;
    }
  }

  console.log("maxTribe :>> ", maxTribe);
  return maxTribe;
};
