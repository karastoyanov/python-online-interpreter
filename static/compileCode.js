// static/script.js

// Initialize CodeMirror
var editor = CodeMirror(document.getElementById('codeMirror'), {
    mode: 'python',
    lineNumbers: true,
    theme: 'material-darker', // You can choose a different theme
});

// Get the value of CodeMirror editor when running the code
function compileCode() {
    var code = editor.getValue();

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
        Prism.highlightAll();
    });
}