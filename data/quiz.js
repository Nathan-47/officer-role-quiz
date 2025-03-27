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
      question: "I'd want to motivate students to?",
      options: [
        { text: "Earth", value: 1 },
        { text: "Mars", value: 2 },
        { text: "Jupiter", value: 3 },
        { text: "Saturn", value: 4 }
      ],
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
  ];
  
  console.log(quizData);
  

  let currentQuestionIndex = 0;

  // Place the values from answer into this array
  let getValueTotal = [];
  let sumTotal = 0;


    const displayQuestion = () => {
    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.querySelector(".options");

    questionElement.textContent = questionData.question;  

    optionsElement.innerHTML = "";
    questionData.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option.text;

      button.addEventListener("click", () => handleAnswer(option.value));

    // Add the option text to the button
      optionsElement.appendChild(button);
    });

  }

  // Handles the value/score given from the quizdata options
  const handleAnswer = (getValue) => {

    // push the values to the total array
    getValueTotal.push(getValue);
    sumTotal = getValueTotal.reduce((acc, curr) => acc + curr, 0)
    console.log(sumTotal);
    
    // Allows for the quiz to move to next question
    currentQuestionIndex++;

    // Finish the quiz once the amount of questions left are at 0
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }


    // Display officer role to user
    const showResults = () => {
    const getResult = document.getElementById("result");
    getResult.textContent = `Quiz finished! Your score is: ${sumTotal} out of ${quizData.length}`;
    console.log(sumTotal)
  }
  
  // Init the quiz
  displayQuestion();
  

