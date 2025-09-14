// Select DOM elements and assert their types safely
const output = document.querySelector("#output") as HTMLParagraphElement | null;
const generateBtn = document.querySelector(
  "#generateBtn"
) as HTMLButtonElement | null;
const resetBtn = document.querySelector(
  "#resetBtn"
) as HTMLButtonElement | null;

// Array of possible answers to display
const answers: string[] = [
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
function generateAnswer(): void {
  // Pick a random index from the answers array
  const randomIndex = Math.floor(Math.random() * answers.length);

  // Use nullish coalescing to ensure fallback if undefined
  const selectedAnswer: string = answers[randomIndex] ?? "";

  // If the output element exists, update its text content
  if (output) {
    output.textContent = selectedAnswer;
  }
}

// Function to reload the page (reset everything)
function resetPage(): void {
  location.reload(); // Refreshes the entire page
}

// Attach event listeners if buttons exist
generateBtn?.addEventListener("click", generateAnswer);
resetBtn?.addEventListener("click", resetPage);
