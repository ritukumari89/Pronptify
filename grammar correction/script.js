// Initialize TinyMCE
tinymce.init({
    selector: 'textarea#editor',
    height: 250,
    setup: function (editor) {
      editor.on('change', function () {
        editor.save(); // Save content on change
      });
    },
  });
  
  // Handle grammar correction
  const correctButton = document.getElementById('correct-button');
  const output = document.getElementById('output');
  
  correctButton.addEventListener('click', function () {
    const content = tinymce.activeEditor.getContent(); // Get content from TinyMCE
  
    // Perform grammar correction using LanguageTool API
    performGrammarCorrection(content);
  });
  
  function performGrammarCorrection(text) {
    const apiUrl = 'https://languagetool.org/api/v2/check';
  
    fetch(apiUrl, {
      method: 'POST',
      body: text=${encodeURIComponent(text)},
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the grammar correction suggestions
        const correctedContent = applyGrammarSuggestions(text, data);
        output.innerHTML = correctedContent;
      })
      .catch((error) => {
        console.error('Error performing grammar correction:', error);
        output.innerHTML = 'An error occurred while checking grammar.';
      });
  }
  
  function applyGrammarSuggestions(text, grammarCheckResult) {
    let correctedText = text;
    for (const error of grammarCheckResult.matches) {
      const offset = error.offset;
      const length = error.length;
      const replacement = error.replacements[0] || ''; // Use the first suggestion
  
      correctedText =
        correctedText.slice(0, offset) +
        replacement +
        correctedText.slice(offset + length);
    }
  
    return correctedText;
  }