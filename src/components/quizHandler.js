
let currentQuestionIndex = 0;

// Place the values from answer into this array
let getValueTotal = [];
let sumTotal = 0;

// Value count to make the multiple answer logic work
let getAnswerCount = [];

const optionsEl = document.querySelector('.options');
const questionEl = document.querySelector('.question');
const restartBtn = document.querySelector('.restartBtn');
const getHeading = document.querySelector('.quiz-heading');
const resultsMsg = document.querySelector('.result-msg');
const questionImg = document.querySelector('.image');
const img = document.querySelector('img');
const getQuestionLength = document.querySelector('.quiz-length');
const hideSwipe = document.querySelector('.mobile-swipe');

const displayQuestion = () => {
  const questionData = quizData[currentQuestionIndex];

  // Reset answer count for question
  getAnswerCount = [];

  questionEl.textContent = questionData.question;
  img.src = `${questionData.image}`;
  getQuestionLength.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

  optionsEl.innerHTML = "";

  questionData.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.classList.add("option-btn");
    btn.dataset.value = option.value;

    // Button is disabled once users clicks on multiple choice question
    btn.addEventListener("click", (e) => {
      e.target.classList.add('disable')
      handleAnswer(option.value);
    });

    // Add the button to options container
    optionsEl.appendChild(btn);
  });
};

// Handle the value/score give from the quizdata button
const handleAnswer = (value) => {

  // Push value to the total array
  getValueTotal.push(value);
  getAnswerCount.push(value);
  sumTotal = getValueTotal.reduce((acc, curr) => acc + curr, 0);

  // For questions that need two inputs/answers
  if (currentQuestionIndex === 1 || currentQuestionIndex === 2) {
    if (getAnswerCount.length < 2) {
      return; 
    } else {
      currentQuestionIndex++; 
    }
  } else {
    // For other questons, move to the next question
    currentQuestionIndex++;
  }

  // Finish the quiz once questions remaining becomes 0, then display resuts.
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
      getHeading.classList.add('hidden');
      resultsMsg.classList.remove('hidden');
      questionImg.classList.add('hidden'); 
      getQuestionLength.classList.add('hidden');
      hideSwipe.classList.add('hidden');
    }

// init the quiz
displayQuestion();
