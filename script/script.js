const prompts = [
    "Write a story about a detective solving a mysterious case.",
    "Describe a peaceful morning in a small town.",
    "Create a dialogue between two old friends meeting after years.",
    "Imagine a world where technology doesn't exist.",
    "Write a poem about the beauty of nature."
];

const promptOutput = document.getElementById("prompt-output");
const generateButton = document.getElementById("generate-prompt");

function generateRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    promptOutput.textContent = prompts[randomIndex];
}

generateButton.addEventListener("click", generateRandomPrompt);
