// Initialize Ace editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/python");

// Function to run the Python code
function runCode() {
    // Get the Python code from the editor
    var pythonCode = editor.getValue();

    // Replace 'input' with a custom function that prompts the user
    pythonCode = pythonCode.replace(/input\("(.*?)"\)/g, function(match, p1) {
        return 'custom_input("' + p1 + '")';
    });

    // Display a message in the output container
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "Please enter the variable values in the input box below.";

    // Execute the Python code after the user inputs values
    setTimeout(function() {
        executeCode(pythonCode);
    }, 100);
}

// Function to execute the Python code with user input
function executeCode(pythonCode) {
    // Get user input values from the input fields
    var variableMatches = pythonCode.match(/input\("(.*?)"\)/g);
    var inputValues = [];

    if (variableMatches) {
        for (var i = 0; i < variableMatches.length; i++) {
            var variableName = variableMatches[i].match(/input\("(.*?)"\)/)[1];
            var inputValue = prompt(`Enter value for ${variableName}:`);
            inputValues.push(inputValue);
        }
    }

    // Send the modified Python code and input values to the server for execution
    fetch('/run_code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'python_code=' + encodeURIComponent(pythonCode) + '&input_value[]=' + encodeURIComponent(JSON.stringify(inputValues)),
    })
    .then(response => response.text())
    .then(result => {
        var outputElement = document.getElementById("output");
        outputElement.innerHTML = result;
    })
    .catch(error => console.error('Error:', error));
}
