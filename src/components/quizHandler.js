
let currentQuestionIndex = 0;

// Place the values from answer into this array
let getValueTotal = [];
let sumTotal = 0;

// value count to make the multiple answer logic work
let getAnswerCount = [];

// global elements 
let globalButton;

const optionsEl = document.querySelector('.options');
const questionEl = document.querySelector('.question');
const restartBtn = document.querySelector('.restartBtn');


const displayQuestion = () => {
const questionData = quizData[currentQuestionIndex];

questionEl.textContent = questionData.question;

optionsEl.innerHTML = "";
questionData.options.forEach(option => {
  globalButton = document.createElement("button"); 
  globalButton.textContent = option.text;

  globalButton.addEventListener("click", () => handleAnswer(option.value));

  // Add the button to the options container
  optionsEl.appendChild(globalButton);

  console.log(globalButton)

    // Modify buttons on click
    globalButton.addEventListener('click', (e) => {
      console.log(e.target)
      e.target.classList.add('disable');
    });
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

  // When inputs are given then for the next question allow for another 2 inputs
  if (getAnswerCount.length === 3) {
      getAnswerCount = [1];
      currentQuestionIndex++; 
  }
} else {
  // For other questions, move to the next question
  currentQuestionIndex++;
}

  // Finish the quiz once the amount of questions left are at 0 and show user their results
  if (currentQuestionIndex < quizData.length) {
    displayQuestion();
  } else {
    showResults();
    hideAll();
  }
}; 

    // Hide buttons and questions
    const hideAll = () => {
      questionEl.classList.add('hidden');
      optionsEl.classList.add('hidden');
      restartBtn.classList.remove('hidden');
    }

// Init the quiz
displayQuestion();


