// Init with first question
let currentQuestion = quizData[0];

// Question handler function
const displayQuestion = (questionData) => {

    // Display question text
    document.getElementById("questionLead").textContent = questionData.question;

    // Button A
    const answerABtn = document.getElementById("answerABtn");
    if (questionData.answerA) {
        answerABtn.textContent = questionData.answerA;
        answerABtn.onclick = () => handleAnswer(questionData.idNextQuestionA);
    } else {
        answerABtn.style.display = 'none'; 
    }

    // Button B 
    const answerBBtn = document.getElementById("answerBBtn");
    if (questionData.answerB) {
        answerBBtn.textContent = questionData.answerB;
        answerBBtn.onclick = () => handleAnswer(questionData.idNextQuestionB);
    } else {
        answerBBtn.style.display = 'none'; 
    }


    // Display content when quiz has concluded
    const additionalInfoDiv = document.getElementById("moreInfo");

    // Clear any previous content
    additionalInfoDiv.innerHTML = '';  
    if (questionData.info) {
        additionalInfoDiv.innerHTML = `<p>${questionData.info}</p>`;
    }
}


// Handle answer button click
const handleAnswer = (nextQuestionId) => {
    const nextQuestion = quizData.find(q => q.id === nextQuestionId);
    if (nextQuestion) {
        currentQuestion = nextQuestion;

        // Show the next question when nextQuestion value
        displayQuestion(nextQuestion); 
    }
}

// Start the quiz by displaying the first question
displayQuestion(currentQuestion);
