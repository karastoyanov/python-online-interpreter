document.getElementById('run-button').addEventListener('click', function() {
    // Simulate Python code execution (replace this with actual backend communication)
    var codeInput = document.getElementById('code-input').textContent;
    
    // Simulate output (replace this with actual backend communication)
    var output = executePythonCode(codeInput);

    // Display output
    document.getElementById('output').innerText = output;
    Prism.highlightAll();
});

function executePythonCode(code) {
    // Simulate Python code execution (replace this with actual backend communication)
    // This is just an example, not real code execution
    try {
        return eval(code);
    } catch (error) {
        return 'Error: ' + error.message;
    }
}

// Initialize Prism
Prism.highlightAll();