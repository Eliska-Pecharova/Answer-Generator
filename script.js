// Select DOM elements and assert their types safely
var output = document.querySelector("#output");
var generateBtn = document.querySelector("#generateBtn");
var resetBtn = document.querySelector("#resetBtn");
// Array of possible answers to display
var answers = [
    "Yes, definitely!",
    "Try again later.",
    "Maybe…",
    "Absolutely not.",
    "Sounds like a good idea!",
    "I don't know, but we'll find out.",
    "Depends on your perspective.",
    "Definitely worth a try.",
];
// Function to generate and display a random answer
function generateAnswer() {
    var _a;
    // Pick a random index from the answers array
    var randomIndex = Math.floor(Math.random() * answers.length);
    // Use nullish coalescing to ensure fallback if undefined
    var selectedAnswer = (_a = answers[randomIndex]) !== null && _a !== void 0 ? _a : "";
    // If the output element exists, update its text content
    if (output) {
        output.textContent = selectedAnswer;
    }
}
// Function to reload the page (reset everything)
function resetPage() {
    location.reload(); // Refreshes the entire page
}
// Attach event listeners if buttons exist
generateBtn === null || generateBtn === void 0 ? void 0 : generateBtn.addEventListener("click", generateAnswer);
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", resetPage);
