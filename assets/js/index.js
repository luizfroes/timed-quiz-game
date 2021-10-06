// Questions Objects
const question1 = {
  question: "What British rock band pioneered the use of the light show?",
  answer1: "The Beatles",
  answer2: "The Who",
  answer3: "Led Zeppelin",
  answer4: "Pink Floyd",
};

const question2 = {
  question: "Who was the first rock-and-roll superstar?",
  answer1: "Clyde McPhatter",
  answer2: "Madonna",
  answer3: "Elvis Presley",
  answer4: "George Harrison",
};

const question3 = {
  question: "What are the instruments in a classic three-piece rock band?",
  answer1: "Guitar, bass, drums",
  answer2: "Guitar, violin, drums",
  answer3: "Guitar, bass, trumpet",
  answer4: "Guitar, organ, drums",
};

const question4 = {
  question:
    "The famous British rock group Led Zeppelin was initially known as:",
  answer1: "Acca Dacca",
  answer2: "The New Yardbirds",
  answer3: "The Black Album",
  answer4: "Hollywood Rose",
};

const question5 = {
  question:
    "In which year was Iggy and the Stooges inducted into the Rock and Roll Hall of Fame?",
  answer1: "1975",
  answer2: "2010",
  answer3: "2003",
  answer4: "1998",
};

const question6 = {
  question: "Which member of the Beatles was known as “the quiet Beatle?",
  answer1: "Pete Best",
  answer2: "Ringo Starr",
  answer3: "George Harrison",
  answer4: "John Lennon",
};

const question7 = {
  question: "In which year did Psychedelic rock emerge?",
  answer1: "1966",
  answer2: "1950",
  answer3: "1970",
  answer4: "1975",
};

const question8 = {
  question: "Lite metal and Death metal are sub-genres of:",
  answer1: "Rock",
  answer2: "Alternative Rock",
  answer3: "Heavy metal",
  answer4: "Trip-hop",
};

const question9 = {
  question: "What is the original name of American rock musician Alice Cooper?",
  answer1: "Steven Tallarico",
  answer2: "Eric Patrick Clapton",
  answer3: "Gordon Sumner",
  answer4: "Vincent Damon Furnier",
};

const question10 = {
  question: "The 1991 album Nevermind is associated with which rock group?",
  answer1: "Grateful Dead",
  answer2: "Nirvana",
  answer3: "The Ramones",
  answer4: "The Velvet Underground",
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
