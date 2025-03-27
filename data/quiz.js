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
  let score = 0;
  
    const displayQuestion = () => {
    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.querySelector(".options");
  
    questionElement.textContent = questionData.question;

    // Display options for a question
//     quizData.forEach((question) => {
//     question.options.forEach((option) => {
//       console.log(`${option.value}`);
//     });
//   });
  
  
    optionsElement.innerHTML = "";
    questionData.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option.text;
    //   console.log(option.text)
    // console.log(`${option.value}`);
    // const getValue = `${option.value}`;
    // console.log(getValue);


      button.addEventListener("click", () => handleAnswer(option.value));
      optionsElement.appendChild(button);
    });

  }

  const handleAnswer = (getValue) => {
    if (getValue) {
        getValue+
        // score++;
        console.log(getValue);
    }
    

    currentQuestionIndex++;
    // console.log(currentQuestionIndex)
  
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }

  


  // make into arrow function
    const showResults = () => {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Quiz finished! Your score is: ${score} out of ${quizData.length}`;
  }
  
  // Start the quiz
  displayQuestion();
  

