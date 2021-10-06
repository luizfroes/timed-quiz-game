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

let timeRemaining = 90;

const renderScoreContainer = function () {
  alert("Game Over");
};

const renderQuestionContainer = function () {
  const questionContainerDiv = document.createElement("div");
  questionContainerDiv.setAttribute("class", "question-container");
  questionContainerDiv.setAttribute("data-answer", correctAnswer);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.setAttribute("class", "buttons");
  buttonsDiv.textContent = "meu div";

  for (let index = 0; index < answers.length; index++) {
    //create answerDiv
    const answerDiv = document.createElement("div");
    answerDiv.setAttribute("class", "answer");
    answerDiv.textContent = answers[index];

    //append to buttonsDiv
    buttonsDiv.appendChild(answerDiv);
  }

  //append buttonsDiv to questionContainerDiv
  questionContainerDiv.appendChild(buttonsDiv);

  //append questionContainerDiv to main
  mainContainer.appendChild(questionContainerDiv);
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
