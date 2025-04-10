const showResults = () => {
    const resultEl = document.getElementById("result"); 

    // Define roles through thresholds and a message
    const roles = [
        { 
            threshold: 35, 
            message: "Congratulations! You qualify for the President role. " 
        },
        { 
            threshold: 30, 
            message: "Congratulations! You qualify for the VP Academic role." 
        },
        { 
            threshold: 25, 
            message: "Congratulations! You qualify for the VP Equity role." 
        },
        { 
            threshold: 20,
             message: "Congratulations! You qualify for the VP Community role." 
        },
        { 
            threshold: 15, 
            message: "Congratulations! You qualify for the VP Student Voice role." 
        },
    ];

    // Find the correct role based on the sumTotal
    const role = roles.find(r => sumTotal >= r.threshold);
    const resultMessage = role ? `<br><strong>${role.message}</strong>` : "";
    

    // Display the results message
    resultEl.innerHTML = `
      <h2 class="result-heading">Quiz Completed!</h2>
      <p class="result-msg">${resultMessage}</p>
    `;
};
