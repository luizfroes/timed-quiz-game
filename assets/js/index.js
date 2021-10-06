const startBtn = document.querySelector("#start-btn");
const startContainer = document.querySelector("#start-container");

let timeRemaining = 5;

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
