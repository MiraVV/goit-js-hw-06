const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur (event) {
    const count = input.value.length;
    if(count === Number(input.getAttribute("data-length"))) { 
    input.classList.add("valid")
    input.classList.remove("invalid")} else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    } 
}