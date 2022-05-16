const form = document.querySelector(".login-form");


    
function submitHandler (event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return console.log("Please fill in all the fields!");
    }
    const formElements ={
        email: email.value,
        password: password.value,
    }
    console.log(formElements);

    event.currentTarget.reset();
    
}

form.addEventListener ("submit", submitHandler);
