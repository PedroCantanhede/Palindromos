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
        result.innerHTML = `<p><i class="fas fa-check"></i> Legal! Temos um <span class="true">palíndromo</span>.</p>`;
    } else {
        result.innerHTML = `<p><i class="fas fa-ban"></i> Opa! Não é um <span class="false">palíndromo</span>.</p>`;
    }
}

// Função utilizando o botão "Conferir"
document.getElementById("check").addEventListener("click", ()=> {
    palindrome(document.getElementById('palindrome').value)
});


// Função apertando o "enter" dentro do input
document.getElementById('formId').onsubmit = function palindromeFunc() {
    palindrome(document.getElementById('palindrome').value);
    return false;
}
