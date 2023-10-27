const generatePrompt = () => {
    const userPrompt = document.getElementById("userPrompt").value;
    const correctedPrompt = correctGrammar(userPrompt);
    const promptContainer = document.getElementById("prompt");
    promptContainer.innerText = correctedPrompt;
};

const correctGrammar = (userPrompt) => {
    // Capitalize the first letter
    let correctedPrompt = userPrompt.charAt(0).toUpperCase() + userPrompt.slice(1);

    // Correct 'a' and 'an'
    correctedPrompt = correctedPrompt.replace(/\ba an?\b/gi, 'a/an');

    // Add more grammar corrections here
    correctedPrompt = correctedPrompt.replace(/\bisnt\b/gi, "isn't");
    correctedPrompt = correctedPrompt.replace(/\bcant\b/gi, "can't");
    correctedPrompt = correctedPrompt.replace(/\bwont\b/gi, "won't");
    correctedPrompt = correctedPrompt.replace(/\byoure\b/gi, "you're");
    correctedPrompt = correctedPrompt.replace(/\btheyre\b/gi, "they're");
    correctedPrompt = correctedPrompt.replace(/\btheres\b/gi, "there's");
    correctedPrompt = correctedPrompt.replace(/\bim\b/gi, "I'm");
    correctedPrompt = correctedPrompt.replace(/\bive\b/gi, "I've");
    correctedPrompt = correctedPrompt.replace(/\bdont\b/gi, "don't");
    correctedPrompt = correctedPrompt.replace(/\bdidnt\b/gi, "didn't");
    correctedPrompt = correctedPrompt.replace(/\bdoesnt\b/gi, "doesn't");
    correctedPrompt = correctedPrompt.replace(/\bhavent\b/gi, "haven't");
    correctedPrompt = correctedPrompt.replace(/\bhasnt\b/gi, "hasn't");
    correctedPrompt = correctedPrompt.replace(/\bwouldnt\b/gi, "wouldn't");
    correctedPrompt = correctedPrompt.replace(/\bcouldnt\b/gi, "couldn't");
    correctedPrompt = correctedPrompt.replace(/\bshouldnt\b/gi, "shouldn't");
    correctedPrompt = correctedPrompt.replace(/\byoud\b/gi, "you'd");
    correctedPrompt = correctedPrompt.replace(/\bdidnt\b/gi, "didn't");
    correctedPrompt = correctedPrompt.replace(/\bweve\b/gi, "we've");
    correctedPrompt = correctedPrompt.replace(/\btheyve\b/gi, "they've");
    correctedPrompt = correctedPrompt.replace(/\bmightnt\b/gi, "mightn't");
    correctedPrompt = correctedPrompt.replace(/\bneednt\b/gi, "needn't");
    correctedPrompt = correctedPrompt.replace(/\barent\b/gi, "aren't");
    correctedPrompt = correctedPrompt.replace(/\bwont\b/gi, "won't");
    correctedPrompt = correctedPrompt.replace(/\byall\b/gi, "you all");
    correctedPrompt = correctedPrompt.replace(/\bgonna\b/gi, "going to");
      // Common misspellings and corrections
      correctedPrompt = correctedPrompt.replace(/\brecieve\b/gi, "receive");
      correctedPrompt = correctedPrompt.replace(/\bdefinately\b/gi, "definitely");
      correctedPrompt = correctedPrompt.replace(/\boccured\b/gi, "occurred");
      correctedPrompt = correctedPrompt.replace(/\bwierd\b/gi, "weird");
      correctedPrompt = correctedPrompt.replace(/\btruely\b/gi, "truly");
      correctedPrompt = correctedPrompt.replace(/\boccurence\b/gi, "occurrence");
      correctedPrompt = correctedPrompt.replace(/\bcemetary\b/gi, "cemetery");
      correctedPrompt = correctedPrompt.replace(/\bpavillion\b/gi, "pavilion");
      correctedPrompt = correctedPrompt.replace(/\benviroment\b/gi, "environment");
      correctedPrompt = correctedPrompt.replace(/\bembarass\b/gi, "embarrass");
      correctedPrompt = correctedPrompt.replace(/\btruely\b/gi, "truly");
      correctedPrompt = correctedPrompt.replace(/\bexistance\b/gi, "existence");
      correctedPrompt = correctedPrompt.replace(/\bindependant\b/gi, "independent");
      correctedPrompt = correctedPrompt.replace(/\bbegining\b/gi, "beginning");
      correctedPrompt = correctedPrompt.replace(/\bnintey\b/gi, "ninety");
      correctedPrompt = correctedPrompt.replace(/\bleed\b/gi, "led");
      correctedPrompt = correctedPrompt.replace(/\bleeding\b/gi, "leading");
      correctedPrompt = correctedPrompt.replace(/\bweild\b/gi, "wield");
      correctedPrompt = correctedPrompt.replace(/\bwierd\b/gi, "weird");
      correctedPrompt = correctedPrompt.replace(/\bfuther\b/gi, "further");
      correctedPrompt = correctedPrompt.replace(/\blenght\b/gi, "length");
787  

    return correctedPrompt;
};

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generatePrompt);
