// function updateLineNumbers() {
//     // const textarea = document.getElementById('code');
//     const textarea = document.getElementById('#code');
//     const lines = textarea.value.split('\n').length;
//     const lineNumbers = document.querySelector('.line-numbers');
//     lineNumbers.innerHTML = '';
//     for (let i = 1; i <= lines; i++) {
//         lineNumbers.innerHTML += i + '<br>';
//     }
// }

function updateLineNumbers(textarea) {
    console.log(textarea)
    const lines = textarea.value.split('\n').length;
    const lineNumbers = textarea.parentElement.querySelector('.line-numbers');
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
        lineNumbers.innerHTML += i + '<br>';
    }
}

const output = document.querySelector("#output");
// console.log(output)

// output.contentDocument.body.innerHTML = "<h1>My Code Editor</h1>";

// output.contentDocument.head.innerHTML = "<style> h4{color:aqua} </style>";

// output.contentWindow.eval('let a = 20; let b = 40; alert(a + b);')

let input = document.querySelectorAll(".left-Part textarea");
// console.log(input)

let htmlCode, cssCode, jsCode = '';

input.forEach((el, index) => {
    el.addEventListener("keyup", () => {
        // console.log(el.value)

        if (index == 0) {
            htmlCode = el.value;
        }
        if (index == 1) {
            cssCode = el.value;
        }
        if (index == 2) {
            jsCode = el.value;
        }

        output.contentDocument.body.innerHTML = htmlCode;

        output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;

        output.contentWindow.eval(jsCode);
    })

    updateLineNumbers(el);

})

// function resizeTextarea(textarea) {
//     textarea.style.height = 'auto'; // Reset height to auto
//     const newHeight = Math.max(32, textarea.scrollHeight); // Minimum height of 32px
//     textarea.style.height = newHeight + 'px';
// }

// // Code to toggle between light and dark themes
// const toggleThemeButton = document.getElementById('toggle-theme');

// toggleThemeButton.addEventListener('click', function () {
//     document.body.classList.toggle('dark-theme');
// });



