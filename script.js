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