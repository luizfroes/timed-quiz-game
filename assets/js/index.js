// Questions Array
const questionsArray = [
  {
    question: "What British rock band pioneered the use of the light show?",
    answers: ["The Beatles", "The Who", "Led Zeppelin", "Pink Floyd"],
    correctAnswer: "Pink Floyd",
  },
  {
    question: "Who was the first rock-and-roll superstar?",
    answers: ["Clyde McPhatter", "Madonna", "Elvis Presley", "George Harrison"],
    correctAnswer: "Elvis Presley",
  },
  {
    question: "What are the instruments in a classic three-piece rock band?",
    answers: [
      "Guitar, bass, drums",
      "Guitar, violin, drums",
      "Guitar, bass, trumpet",
      "Guitar, organ, drums",
    ],
    correctAnswer: "Guitar, bass, drums",
  },
  {
    question:
      "The famous British rock group Led Zeppelin was initially known as:",
    answers: [
      "Acca Dacca",
      "The New Yardbirds",
      "The Black Album",
      "Hollywood Rose",
    ],
    correctAnswer: "The New Yardbirds",
  },
  {
    question:
      "In which year was Iggy and the Stooges inducted into the Rock and Roll Hall of Fame?",
    answers: ["1975", "2010", "2003", "1998"],
    correctAnswer: "2010",
  },
  {
    question: "Which member of the Beatles was known as “the quiet Beatle?",
    answers: ["Peter Best", "Ringo Starr", "George Harrison", "John Lennon"],
    correctAnswer: "George Harrison",
  },
  {
    question: "In which year did Psychedelic rock emerge?",
    answers: ["1966", "1953", "1972", "1985"],
    correctAnswer: "1966",
  },
  {
    question: "Lite metal and Death metal are sub-genres of:",
    answers: ["Rock", "Alternative Rock", "Heavy metal", "Trip-hop"],
    correctAnswer: "Heavy metal",
  },
  {
    question:
      "What is the original name of American rock musician Alice Cooper?",
    answers: [
      "Steven Tallarico",
      "Eric Patrick Clapton",
      "Gordon Sumner",
      "Vincent Damon Furnier",
    ],
    correctAnswer: "Vincent Damon Furnier",
  },
  {
    question: "The 1991 album Nevermind is associated with which rock group?",
    answers: [
      "Grateful Dead",
      "Nirvana",
      "The Ramones",
      "The Velvet Underground",
    ],
    correctAnswer: "Nirvana",
  },
];

const startBtn = document.querySelector("#start-btn");
const startContainer = document.querySelector("#start-container");
const mainContainer = document.querySelector("#main");
const questionContainer = document.querySelector("#question-container");
const scoreContainerDiv = document.querySelector("#score-container");

let timer = null;

let timeRemaining = 91;

let currentQuestionIndex = 0;

const scorePreventDefault = function (event) {
  event.preventDefault();
};

const onClick = function () {
  //Get value from textInput
  const initialsInput = document.getElementById("text-input").value;

  //get from local storage
  const dataFromLocalS = localStorage.getItem("highScore");

  if (!dataFromLocalS) {
    //Construct an object {initials:"", score:0}
    const scoreObject = { initials: initialsInput, score: timeRemaining };
    const scoreArray = [scoreObject.initials, scoreObject.score];

    //Set in Local Storage
    localStorage.setItem("highScore", JSON.stringify(scoreArray));
  } else {
    //const highScoreArray = JSON.parse(dataFromLocalS);
    console.log(scoreObject.initials, scoreObject.score);
    //highScoreArray.push(scoreObject);

    //localStorage.setItem("highScore", JSON.stringify(highScoreObject));
  }

  //Store object in Local Storage
};

const renderScoreContainer = function () {
  //Remove questionContainerDiv
  questionContainerDiv.remove();

  //Render scoreContainerDiv
  const scoreContainerDiv = document.createElement("div");
  scoreContainerDiv.setAttribute("class", "score-container");
  scoreContainerDiv.setAttribute("id", "score-container");

  //create the h2
  const endingText = document.createElement("h2");
  endingText.textContent = "All Done!!!";

  //create the p
  const finalScoreText = document.createElement("p");
  finalScoreText.textContent = "Your final score is ";

  //create the span
  const scoreSpan = document.createElement("span");
  scoreSpan.textContent = timeRemaining;

  //append the span into the p
  finalScoreText.appendChild(scoreSpan);

  //create the form
  const scoreForm = document.createElement("form");
  scoreForm.setAttribute("class", "score-form");

  //create the label
  const initialsLabel = document.createElement("label");
  initialsLabel.setAttribute("for", "initials");
  initialsLabel.setAttribute("class", "initials");
  initialsLabel.textContent = "Enter your initials here";

  //create the text input
  const textInput = document.createElement("input");
  textInput.setAttribute("class", "text-input");
  textInput.setAttribute("id", "text-input");
  textInput.setAttribute("type", "text");

  //create the submit input
  const submitInput = document.createElement("button");
  submitInput.setAttribute("class", "submit-btn");
  submitInput.textContent = "Submit";

  //Add event listener click on the submit button to prevent default
  submitInput.addEventListener("click", scorePreventDefault);

  //Add event listener click on the submit button to store on Local Storage
  submitInput.addEventListener("click", onClick);

  //append to form
  scoreForm.append(initialsLabel, textInput, submitInput);

  //append to scoreContainerDiv
  scoreContainerDiv.append(endingText, finalScoreText, scoreForm);

  //Append scoreContainerDiv to mainContainer
  mainContainer.append(scoreContainerDiv);

  return scoreContainerDiv;
};

const startAgain = function () {
  //Remove the gameOverDiv
  mainContainer.innerHTML = "";

  //Set the timer
  timeRemaining = 91;

  //Start the timer
  startTimer();

  //Set the question Index to 0
  currentQuestionIndex = 0;

  //Render QuestionsContainer
  renderQuestionContainer();
};

const renderGameOverContainer = function () {
  //Remove questionContainerDiv
  questionContainerDiv.remove();

  //render the Game over div
  const gameOverDiv = document.createElement("div");
  gameOverDiv.setAttribute("class", "game-over-container");

  //render the h1
  const gameOverText = document.createElement("h1");
  gameOverText.textContent = "Your time is over";

  //render the Try again button
  const tryAgainBtn = document.createElement("button");
  tryAgainBtn.setAttribute("class", "try-again-btn");
  tryAgainBtn.textContent = "Try again";

  tryAgainBtn.addEventListener("click", startAgain);

  //append to the gameOverDiv
  gameOverDiv.append(gameOverText, tryAgainBtn);

  //append to mainContainer
  mainContainer.appendChild(gameOverDiv);

  return gameOverDiv;
};

const verifyAnswer = function (correctOption, answer) {
  if (correctOption !== answer) {
    //Deduct timer value in 10
    timeRemaining = timeRemaining - 10;
  } else {
    //Increment questionIndex
    currentQuestionIndex += 1;

    if (currentQuestionIndex >= questionsArray.length) {
      //Render ScoreContainer
      renderScoreContainer();

      //stop the timer
      clearInterval(timer);
    } else {
      //Remove the Question container
      mainContainer.innerHTML = "";

      //Render Next question
      renderQuestionContainer();
    }
  }
};
const getAnswer = function (event) {
  const currentTarget = event.currentTarget;
  const target = event.target;

  const isAnswer = target.getAttribute("class") === "answer";

  if (isAnswer) {
    const correctOption = currentTarget.getAttribute("data-option");
    const answer = target.getAttribute("data-answer");

    verifyAnswer(correctOption, answer);
  }
};

const renderQuestionContainer = function () {
  const correctOption = questionsArray[currentQuestionIndex].correctAnswer;

  //create the questionContainerDiv
  questionContainerDiv = document.createElement("div");
  questionContainerDiv.setAttribute("class", "question-container");
  questionContainerDiv.setAttribute("id", "question-container");
  questionContainerDiv.setAttribute("data-option", correctOption);

  //create the h2
  const currentQuestion = document.createElement("h2");
  currentQuestion.textContent = questionsArray[currentQuestionIndex].question;

  //create the answers div
  const buttonsDiv = document.createElement("div");
  buttonsDiv.setAttribute("class", "buttons");

  for (let i = 0; i < questionsArray[i].answers.length; i++) {
    //create answerDiv
    const answerDiv = document.createElement("div");
    answerDiv.setAttribute("class", "answer");
    answerDiv.setAttribute(
      "data-answer",
      questionsArray[currentQuestionIndex].answers[i]
    );
    answerDiv.textContent = questionsArray[currentQuestionIndex].answers[i];

    //append to buttonsDiv
    buttonsDiv.appendChild(answerDiv);
  }

  //append the h2 and buttonsDiv to the questionContainerDiv
  questionContainerDiv.append(currentQuestion, buttonsDiv);

  //add a event listener click
  questionContainerDiv.addEventListener("click", getAnswer);

  //append questionContainerDiv to mainContainer
  mainContainer.appendChild(questionContainerDiv);

  return questionContainerDiv;
};

const startTimer = function () {
  const timerElement = document.querySelector("#timer");

  //declare the tick function
  const timerTick = function () {
    //  Check if timer has elapsed
    if (timeRemaining <= 0) {
      clearInterval(timer);

      //Render the Game Over Container
      renderGameOverContainer();
    } else {
      //Decrement time value
      timeRemaining -= 1;

      //Update timer element text
      timerElement.textContent = timeRemaining;
    }
  };

  //Set interval
  timer = setInterval(timerTick, 1000);
};

const startGame = function () {
  //Remove start container
  startContainer.remove();

  //Start the timer
  startTimer();

  //Render questions container
  renderQuestionContainer();
};

startBtn.addEventListener("click", startGame);
