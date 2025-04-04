console.log(quizData);

//   TODO: Display the roles but not the values

let currentQuestionIndex = 0;

// Place the values from answer into this array
let getValueTotal = [];
let sumTotal = 0;

// value count to make the multiple answer logic work
let getAnswerCount = [];


// global button that can be accessed from anywhere
let globalButton;

const displayQuestion = () => {
const questionData = quizData[currentQuestionIndex];
const questionElement = document.getElementById("question");
const optionsElement = document.querySelector(".options");

questionElement.textContent = questionData.question;

optionsElement.innerHTML = "";
questionData.options.forEach(option => {
  globalButton = document.createElement("button"); 
  globalButton.textContent = option.text;

  globalButton.addEventListener("click", () => handleAnswer(option.value));

  // Add the button to the options container
  optionsElement.appendChild(globalButton);
});
};


// Handles the value/score given from the quizdata options
const handleAnswer = (getValue) => {

  // Push the values to the total array
  getValueTotal.push(getValue);
  getAnswerCount.push(getValue);
  sumTotal = getValueTotal.reduce((acc, curr) => acc + curr, 0);

// For questions that need two inputs
if (currentQuestionIndex === 1 || currentQuestionIndex === 2) {

  // console.log(getValueTotal.length); 
  // console.log(calcMultiTotal);
  // console.log(getAnswerCount.length);

  // When inputs are given then for the next question allow for another 2 inputs
  if (getAnswerCount.length === 3) {
      getAnswerCount = [1];
      currentQuestionIndex++; 
  }
} else {
  // For other questions, move to the next question
  currentQuestionIndex++;
}


  // Finish the quiz once the amount of questions left are at 0
  if (currentQuestionIndex < quizData.length) {
    displayQuestion();
  } else {
    showResults();
  }
}; 


  // Display officer role to user
  const showResults = () => {
    // display results
}

// Init the quiz
displayQuestion();



