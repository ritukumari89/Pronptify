const prompts = [
    "Write a story about a detective solving a mysterious case.",
    "Describe a peaceful morning in a small town.",
    "Create a dialogue between two old friends meeting after years.",
    "Imagine a world where technology doesn't exist.",
    "Write a poem about the beauty of nature.",
    "Craft a story about an archaeologist uncovering an ancient civilization's secrets.",
"Describe the chaotic first day of a rookie police officer on the job.",
"Write a dialogue between two strangers stuck in an elevator during a power outage.",
"Imagine a world where time travel is possible, and its consequences on society.",
"Tell a tale of survival on a deserted island after a shipwreck.",
"Paint a picture of a bustling market in a 19th-century European city.",
"Create a conversation between an astronaut on a mission to Mars and mission control.",
"Write a story set in a post-apocalyptic future where a group of survivors seeks hope.",
"Describe the first day of school for a nervous 6-year-old entering kindergarten.",
"Imagine a world where people have the ability to communicate with animals.",
"Tell a story about a brilliant scientist on the brink of a groundbreaking discovery.",
"Write a dialogue between a detective and a suspect in an intense interrogation room.",
"Describe the serenity of a cabin in the woods during a gentle snowfall.",
"Create a conversation between a time traveler from the future and a historian.",
"Craft a story set in a medieval fantasy realm with dragons, knights, and magic.",
"Imagine a society where books are forbidden, and a group of rebels tries to preserve knowledge.",
"Tell a tale of an artist finding inspiration in a remote, picturesque village.",
"Write a dialogue between a superhero and their arch-nemesis during an unexpected encounter.",
"Describe the experience of a hiker reaching the summit of a towering mountain.",
"Create a story about a musician composing their magnum opus during a period of intense inspiration."
];

const promptOutput = document.getElementById("prompt-output");
const generateButton = document.getElementById("generate-prompt");

function generateRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    promptOutput.textContent = prompts[randomIndex];
}

generateButton.addEventListener("click", generateRandomPrompt);
