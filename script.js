const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = `${toUpperCase(input)} is required`;
}

// Show validity error message
function validityError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = `${toUpperCase(input)} is not valid.`;
}

// Show length error message
function lengthError(input, min, max) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = `${toUpperCase(input)} must be between ${min} to ${max} characters`;
}

// Show password doesn't match error
function passwordMatchError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = `${toUpperCase(input)} doesn't match`;
}



// Conver First letter to upper case
function toUpperCase(input) {
    var upperCaseLetter = input.placeholder.charAt(0).toUpperCase();
    var lowerCaseLetters = input.placeholder.slice(1);
    return upperCaseLetter + lowerCaseLetters;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Check passwords match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        passwordMatchError(input2);
    }
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        validityError(input);
    }
}


// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        // console.log(input.value);
        if (input.value.trim() === '') {
            showError(input);
        } else {
            showSuccess(input);
        }
    });

}
// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min && input.value !== '') {
        lengthError(input, min, max);
    }
    else if (input.value.length > max) {
        lengthError(input, min, max);
    }
    else if (input.value.length !== 0) {
        showSuccess(input);
    }
}

// Event Listeners
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //console.log(username.value);
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
})
