// static/script.js

// Initialize CodeMirror on a textarea with id "pythonCode" for input
var inputEditor = CodeMirror.fromTextArea(document.getElementById("pythonCode"), {
    lineNumbers: true,
    mode: "python",
    theme: "dracula"
});

// Initialize CodeMirror on a div with id "output" for output (read-only)
var outputEditor = CodeMirror(document.getElementById("output"), {
    readOnly: true,
    lineNumbers: true,
    mode: "python",
    theme: "dracula",
    scrollbarStyle: "overlay"  // Set the scrollbar style
});

// Get the value of CodeMirror editor when running the code
function compileCode() {
    var code = inputEditor.getValue();

    fetch('/compile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'code=' + encodeURIComponent(code),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = data;
        // Prism.highlightAll();
        outputEditor.getWrapperElement().style.backgroundColor = '#f8f8f8'; // Set background color

    });


    outputEditor.setValue(code);
    outputEditor.scrollIntoView({ line: outputEditor.lineCount(), ch: 0 }, 100);
}