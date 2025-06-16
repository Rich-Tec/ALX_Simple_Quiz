// Define a function
function checkAnswer() {
    const correctAnswer = "4";


// Retrieve the User's Answer
const selectedOption = document.querySelector('input[name="quiz"]:checked');

const feedbackDiv = document.getElementById("feedback");

if (!selectedOption) {
    feedbackDiv.textContent = "Please select an answer.";
    feedbackDiv.style.color = "orange";
    return;
}

const userAnswer = selectedOption.value;

// Compare the user's answer to correct answer
if (userAnswer === correctAnswer) {
    feedback.textContent ="Correct ! Well done.";
    feedback.style.color = "green";
} else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
 }
}
// Add event listener to the submit button
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});


