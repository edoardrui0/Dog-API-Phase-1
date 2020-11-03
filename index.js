"use strict";

function getDogImage(numOfDogs = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then((response) => response.json())
    // the console.log(responseJson)) displays an array with all of the links to our random dog pics.
    .then((responseJson) => console.log(responseJson))
    .catch((error) =>
      alert("It appears your internet is disconnected. Please try again later.")
    );
}

function printResults() {
  $("form").submit((event) => {
    event.preventDefault();
    // i call the input here, get its value and later call the variable with i call the "getDogImage" function.
    let numberOfDogs = $('input[name="numberForAmountOfDogsPics"]').val();
    getDogImage(numberOfDogs);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  printResults();
});
