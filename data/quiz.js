const quizData = [
    {
      question: "What would you consider as your best trait?",
      options: [
        { text: "Talking", value: 1 },
        { text: "Listening", value: 2 },
        { text: "Proactive", value: 3 }
      ],
    },
    {
      question: "I'd want to motivate students to? [Pick multiple]",
      options: [
        { text: "Earth", value: 1 },
        { text: "Mars", value: 2 },
        { text: "Jupiter", value: 3 },
        { text: "Saturn", value: 4 }
      ],
      // threshold value for each multiple choice question
      threshold: 8, 
    },
    {
      question: "What is 2 + 2?",
      options: [
        { text: "3", value: 1 },
        { text: "4", value: 2 },
        { text: "5", value: 3 },
        { text: "6", value: 4 }
      ],
    },
    {
      question: "two cities in england?",
      options: [
        { text: "brum", value: 1 },
        { text: "lagos", value: 2 },
        { text: "london", value: 3 },
        { text: "kingston", value: 4 }
      ],
      threshold: 8, 
    },
  ];
  
  console.log(quizData);


//   TODO: Display the roles but not the values

  let currentQuestionIndex = 0;

  // Place the values from answer into this array
  let getValueTotal = [];
  let sumTotal = 0;



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

    console.log(currentQuestionIndex)

    // Push the values to the total array
    getValueTotal.push(getValue);
    sumTotal = getValueTotal.reduce((acc, curr) => acc + curr, 0);
    console.log(sumTotal);

    const currentQuestion = quizData[currentQuestionIndex];
    const calcMultiTotal = getValueTotal
    .slice(1)
    .reduce((acc, curr) => acc + curr, 0);

    // Execute for questions that have the multiple requirement
    if (currentQuestionIndex === 1 && 2) {
      // console.log(calcTotal);
      // console.log(currentQuestion.threshold);
      console.log(getValueTotal.length);

      // Once the right number of inputs are given and the given total values meet threshold then move to next question
      if (getValueTotal.length >= 3 && calcMultiTotal <= currentQuestion.threshold) {
        currentQuestionIndex++;
      }
    } else {
      // For all other questions, move to the next question
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
    const getResult = document.getElementById("result");
    getResult.textContent = `Quiz finished! Your score is: ${sumTotal} out of ${quizData.length}`;
    console.log(sumTotal)
  }
  
  // Init the quiz
  displayQuestion();


