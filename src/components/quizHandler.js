
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
  img.alt =`${questionData.alt}`;
  getQuestionLength.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

  optionsEl.innerHTML = "";

  questionData.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.classList.add("option-btn");
    btn.dataset.value = option.value;

    // button targeted for toggle event
    btn.addEventListener("click", (e) => {
      handleAnswer(option.value, e.target);
    });

    // Add the button to options container
    optionsEl.appendChild(btn);
  });
};

const handleAnswer = (value, button) => {
  const isMultiAnswer = currentQuestionIndex === 1 || currentQuestionIndex === 2;
  const requiredCount = isMultiAnswer ? 2 : 1;

  // Toggle click button in case user wants to choose another answer
  if (getAnswerCount.includes(value)) {
    getAnswerCount = getAnswerCount.filter(v => v !== value);
    getValueTotal.splice(getValueTotal.lastIndexOf(value), 1);
    button.classList.remove('selected');
  } else {
    getAnswerCount.push(value);
    getValueTotal.push(value);
    button.classList.add('selected');
  }

  // record total score that user has accumilated 
  sumTotal = getValueTotal.reduce((acc, curr) => acc + curr, 0);

  // Only advance if required number of answers are selected
  if (getAnswerCount.length === requiredCount) {
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        displayQuestion();
      } else {
        showResults();
        hideAll();
      }
    }, 300);
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
