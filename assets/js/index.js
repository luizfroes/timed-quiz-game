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
    answers: ["Pete Best", "Ringo Starr", "George Harrison", "John Lennon"],
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

let timeRemaining = 91;

let currentQuestionIndex = 0;

const registerScore = function () {};

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
  initialsLabel.textContent = "Enter your initials here";

  //create the text input
  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");

  //create the submit input
  const submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("class", "submit-btn");

  //Add event listener click on the submit button
  submitInput.addEventListener("click", registerScore);

  //append to form
  scoreForm.append(initialsLabel, textInput, submitInput);

  //append to scoreContainerDiv
  scoreContainerDiv.append(endingText, finalScoreText, scoreForm);

  //Append scoreContainerDiv to mainContainer
  mainContainer.append(scoreContainerDiv);

  return scoreContainerDiv;
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
      console.log(scoreContainerDiv);
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
    console.log(correctOption, currentQuestionIndex);
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

      //Render the Score container
      renderScoreContainer();
    } else {
      //Decrement time value
      timeRemaining -= 1;

      //Update timer element text
      timerElement.textContent = timeRemaining;
    }
  };

  //Set interval
  const timer = setInterval(timerTick, 1000);
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
