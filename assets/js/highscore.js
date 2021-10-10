const clearBtn = document.querySelector("#clear-btn");
const goBackBtn = document.querySelector("#go-back-btn");

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

const renderHighScore = function (highScore) {
  console.log(highScore);
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
