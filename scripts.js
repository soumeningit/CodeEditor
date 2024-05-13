// // Function to update line numbers in the textarea
// function updateLineNumbers(event) {
//     const textarea = event.target;
//     const codeEditorDiv = textarea.parentElement;
//     const lineNumbersDiv = codeEditorDiv.querySelector('.line-numbers');
//     const lines = textarea.value.split('\n').length;
//     lineNumbersDiv.innerHTML = '';
//     for (let i = 1; i <= lines; i++) {
//         lineNumbersDiv.innerHTML += `<div>${i}</div>`;
//     }
// }

// // Add event listeners to all textareas for input event
// const textAreas = document.querySelectorAll('.code-editor textarea');
// textAreas.forEach((textarea) => {
//     // Call updateLineNumbers function on input event
//     textarea.addEventListener('input', updateLineNumbers);
//     // Call updateLineNumbers function initially to display line numbers starting from 1
//     updateLineNumbers({ target: textarea });
// });



function updateLineNumbers() {
    const textarea = document.getElementById('code');
    const lines = textarea.value.split('\n').length;
    const lineNumbers = document.querySelector('.line-numbers');
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
        lineNumbers.innerHTML += i + '<br>';
    }
}
