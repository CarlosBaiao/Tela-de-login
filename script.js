const inputEmail = document.getElementById('email');


const checkEmail = () => {
    if(!inputEmail.checkValidity()) {
        inputEmail.classList.add("border-email-invalid")
    }
}

const resetEmail = () => {
    inputEmail.classList.remove("border-email-invalid")
}

inputEmail.addEventListener("blur" , checkEmail );
inputEmail.addEventListener("focus", resetEmail);




