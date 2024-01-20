function updateLineNumbers() {
    const codeTextarea = document.getElementById('container.code');
    const lineNumbersDiv = document.getElementById('line-numbers');

    const lines = codeTextarea.value.split('\n');
    const lineNumbersHTML = Array.from({ length: lines.length }, (_, i) => i + 1).join('<br>');
    lineNumbersDiv.innerHTML = lineNumbersHTML;
}

// Call this function whenever the content of the textarea changes
document.getElementById('code').addEventListener('input', updateLineNumbers);

// Initial update
updateLineNumbers();