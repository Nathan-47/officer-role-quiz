const showResults = () => {
    const resultEl = document.getElementById("result"); 

    // Define roles through thresholds and a message
    const roles = [
        { 
            threshold: 34, 
            message: "Your answers best match with President. <br /><br /> You naturally encourage people around you and thrive in leadership situations. You take responsibility for your actions and take pride in all that you do. You're comfortable having and voicing your own opinion but understand the importance of listening to others. " 
        },
        { 
            threshold: 28, 
            message: "Your answers best match with Vice President Education. <br /><br /> You take pride in your studies and want to identify areas to improve how students are taught at university. You're an inquisitive problem solver that would embrace the opportunity to work staff on academic policies. Naturally inquisitive, great problem solver, want to make long-term change?"
        },
        { 
            threshold: 23, 
            message: "Your answers best match with Vice President Welfare. <br /><br /> You're passionate about student welfare and wellbeing. You're a creative person who loves embracing new cultures. You're able to understand different perspectives and people feel comfortable asking you for support." 
        },
        { 
            threshold: 17,
             message: "Your answers best match with Vice President Community. <br /><br /> You're a natural connector, who flourishes in group situations. You're a sociable person that is interested in collaborating with sports teams or different student groups. You think university should be more than just books and studying; but fun and exciting." 
        },
        { 
            threshold: 14, 
            message: "Your answers best match with Vice President Student Voice. <br /><br /> You are a natural listener who wants students' voices to be heard. You're someone who enjoys making positive change in your community and empowering others to be advocates for themselves. Interested in politics? Listening to others? Advocating for people, " 
        },
    ];

    // Find the correct role based on the sumTotal
    const role = roles.find(r => sumTotal >= r.threshold);
    const resultMessage = role ? `<br><strong>${role.message}</strong>` : "";

    // display results image
    const resImg = '../images/quiz_officer_team.png';
    
    // Display the results message
    resultEl.innerHTML = `
      <h2 class="result-heading">Role matched!</h2>
      <img class="result-image" src="${resImg}" alt="officer team" />
      <p class="result-msg">${resultMessage}</p>
    `;
};
