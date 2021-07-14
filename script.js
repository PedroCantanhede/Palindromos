// Animation CSS
const inputs = document.querySelectorAll(".input");

// Função adiciona "focus" no input, adicionando a estilização feita no CSS
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

// Função remove "focus" no input, removendo a estilização feita no CSS
function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


// Checar se é Palíndromo
let result = document.getElementById("result");

var palindrome = function palindromeFunc(string) {
    if (string == string.split('').reverse().join('')) {
        result.innerHTML = `<p>Esta palavra é um <span>palíndromo!</span></p>`;
    } else {
        result.innerHTML = `<p>Esta palavra não é um <span>palíndromo!</span></p>`;
    }
}

document.getElementById('formId').onsubmit = function palindromeFunc() {
    palindrome(document.getElementById('palindrome').value);
    return false;
}
