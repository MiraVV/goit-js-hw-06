const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange (event) {
    const inputString = event.currentTarget.value;
    if (inputString === ""){
        output.textContent = "Anonymous";
    } else {output.textContent = inputString;}
    
}