const goBackBtn = document.querySelector("#go-back-btn");
const highScoreContainer = document.querySelector("#high-score-container");
const clearLocalStorageBtn = document.querySelector("#clear-btn");

const clearLocalStorage = () => {
  //Clear the local Storage
  localStorage.clear();

  //Remove de highScoreContainer
  highScoreContainer.innerHTML = "";
};

//Add event listener clearLocalStorage
clearLocalStorageBtn.addEventListener("click", clearLocalStorage);

//Go back to main page
const goBack = () => {
  location.assign("./index.html");
};
//Add event listener goBack
goBackBtn.addEventListener("click", goBack);

const getFromLocalStorage = (key, defaultValue) => {
  //Get data from local storage
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const constructPlayerHighScore = (orderedHighScore) => {
  //construct the score for each player
  const constructPlayerScore = (item) => {
    //construct the div
    const playerHighScoreDiv = document.createElement("div");
    playerHighScoreDiv.setAttribute("class", "high-score-div");
    playerHighScoreDiv.setAttribute("id", "high-score-div");

    //construct the span
    const spanPosition = document.createElement("span");
    spanPosition.setAttribute("class", "span-position");
    spanPosition.textContent = orderedHighScore.indexOf(item) + 1;

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

  return orderedHighScore.map(function (item) {
    return constructPlayerScore(item);
  });
};

const renderHighScore = (orderedHighScore) => {
  //construct each player highScore
  const playerHighScore = constructPlayerHighScore(orderedHighScore);

  //loop over the playerHighScore
  playerHighScore.forEach((element) => {
    highScoreContainer.appendChild(element);
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  //get from LS
  const highScore = getFromLocalStorage("highScore", []);

  // Put the elements in crescent order
  const orderedHighScore = highScore.sort(function (item1, item2) {
    return item2.score - item1.score;
  });

  //render div with initial score
  renderHighScore(orderedHighScore);
});
