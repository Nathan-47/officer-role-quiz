const showResults = () => {
    const resultEl = document.getElementById("result"); 

    // insert this html into the results message
    let addMsg = `Please re-take and look at questions carefully if you want to make sure this is the correct role for you.`

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

    
    // Add additional information after the initial results message
    resultEl.insertAdjacentHTML('afterend', addMsg);
    

    // Display the results message
    resultEl.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>${resultMessage}</p>
    `;
};
