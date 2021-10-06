// Questions Objects
const question1 = {
  question: "What British rock band pioneered the use of the light show?",
  answers: ["The Beatles", "The Who", "Led Zeppelin", "Pink Floyd"],
  correctAnswer: "Pink Floyd",
};

const question2 = {
  question: "Who was the first rock-and-roll superstar?",
  answers: ["Clyde McPhatter", "Madonna", "Elvis Presley", "George Harrison"],
  correctAnswer: "Elvis Presley",
};

const question3 = {
  question: "What are the instruments in a classic three-piece rock band?",
  answers: [
    "Guitar, bass, drums",
    "Guitar, violin, drums",
    "Guitar, bass, trumpet",
    "Guitar, organ, drums",
  ],
  correctAnswer: "Guitar, bass, drums",
};

const question4 = {
  question:
    "The famous British rock group Led Zeppelin was initially known as:",
  answers: [
    "Acca Dacca",
    "The New Yardbirds",
    "The Black Album",
    "Hollywood Rose",
  ],
  correctAnswer: "The New Yardbirds",
};

const question5 = {
  question:
    "In which year was Iggy and the Stooges inducted into the Rock and Roll Hall of Fame?",
  answers: ["1975", "2010", "2003", "1998"],
  correctAnswer: "2010",
};

const question6 = {
  question: "Which member of the Beatles was known as “the quiet Beatle?",
  answers: ["Pete Best", "Ringo Starr", "George Harrison", "John Lennon"],
  correctAnswer: "George Harrison",
};

const question7 = {
  question: "In which year did Psychedelic rock emerge?",
  answers: ["1966", "1953", "1972", "1985"],
  correctAnswer: "1966",
};

const question8 = {
  question: "Lite metal and Death metal are sub-genres of:",
  answers: ["Rock", "Alternative Rock", "Heavy metal", "Trip-hop"],
  correctAnswer: "Heavy metal",
};

const question9 = {
  question: "What is the original name of American rock musician Alice Cooper?",
  answers: [
    "Steven Tallarico",
    "Eric Patrick Clapton",
    "Gordon Sumner",
    "Vincent Damon Furnier",
  ],
  correctAnswer: "Vincent Damon Furnier",
};

const question10 = {
  question: "The 1991 album Nevermind is associated with which rock group?",
  answers: [
    "Grateful Dead",
    "Nirvana",
    "The Ramones",
    "The Velvet Underground",
  ],
  correctAnswer: "Nirvana",
};

//Questions Array
const questionsArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];

const startBtn = document.querySelector("#start-btn");
const startContainer = document.querySelector("#start-container");

let timeRemaining = 90;

const renderScoreContainer = function () {
  alert("Game Over");
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
  console.log("game starter");

  //Remove start container
  startContainer.remove();

  //Start the timer
  startTimer();

  //Remove start container
  startContainer.remove();
};

startBtn.addEventListener("click", startGame);
