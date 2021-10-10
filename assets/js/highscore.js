const clearBtn = document.querySelector("#clear-btn");
const goBackBtn = document.querySelector("#go-back-btn");
const highScoreContainer = document.querySelector("#high-score-container");
const goBack = function () {
  location.assign("/index.html");
};

goBackBtn.addEventListener("click", goBack);

const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const constructPlayerHighScore = function (highScore) {
  //construct the score for each player

  const constructPlayerScore = function (item) {
    //construct the div
    const playerHighScoreDiv = document.createElement("div");
    playerHighScoreDiv.setAttribute("class", "high-score-div");
    playerHighScoreDiv.setAttribute("id", "high-score-div");

    //construct the span
    const spanPosition = document.createElement("span");
    spanPosition.setAttribute("class", "span-position");
    spanPosition.textContent = highScore.indexOf(item) + 1;

    const spanInitials = document.createElement("span");
    spanInitials.setAttribute("class", "span-initials");
    spanInitials.textContent = item.initials;

    const spanScore = document.createElement("span");
    spanScore.setAttribute("class", "span-score");
    spanScore.textContent = item.score;

    //append to div
    playerHighScoreDiv.append(spanPosition, spanInitials, spanScore);

    return playerHighScoreDiv;
  };

  return highScore.map(function (item) {
    return constructPlayerScore(item);
  });
  //append to div
  //playerHighScoreDiv.append(spanPosition, spanInitials, spanScore);

  //return console.log(playerHighScore);

  //Map over highScore
  //return highScore.map(constructPlayerScore(item).join(" "));
};

const renderHighScore = function (highScore) {
  //construct each player highScore
  const playerHighScore = constructPlayerHighScore(highScore);
  console.log(playerHighScore);

  //loop over the playerHighScore
  playerHighScore.forEach((element) => {
    highScoreContainer.appendChild(element);
  });
  console.log(highScoreContainer);
};

document.addEventListener("DOMContentLoaded", function (event) {
  //get from LS
  const highScore = getFromLocalStorage("highScore", []);

  //render div with initial score
  renderHighScore(highScore);
  //append
  //append to parent
  //get from LS
});

//const clearLocalStorage = function () {};
//localStorage.clear();

//clearBtn.addEventListener("click", clearLocalStorage);
