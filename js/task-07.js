const refs = {
    input : document.querySelector("#font-size-control"),
    span : document.querySelector("#text"),
}


refs.input.addEventListener ("input", onInputchange);

function onInputchange (event) {
    
    refs.span.style.fontSize = event.currentTarget.value + "px";;

} 