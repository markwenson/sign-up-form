const email = document.querySelector('#email');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const errorMessage = document.querySelector('.errorMessage');
const submitBtn = document.querySelector('.btn')

const inputs = [email, phone, password, confirmPassword]

inputs.forEach(item => {
    item.addEventListener('focusin', () => {
        errorMessage.textContent = '';
        item.classList.remove('error')
    })
})

const submit = (event) => {
    event.preventDefault();
    if(password.value != confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.textContent = "Password does not match!"
        return;
    }
    if (password.value.length < 8) {
        password.classList.add('error');
        errorMessage.textContent = "Please enter a password with at least 8 characters."
        return;
    }
    if (!password.value.match(/^(?=.*[0-9])/)) {
        password.classList.add('error');
        errorMessage.textContent = "Password needs to have at least 1 numeric character."
        return;
    }
    if (!password.value.match(/^(?=.*[!@#$%^&*])/)) {
        password.classList.add('error');
        errorMessage.textContent = "Password needs to have at least 1 special character."
        return;
    }
    if (!password.value.match(/^(?=.*[A-Z])/)) {
        password.classList.add('error');
        errorMessage.textContent = "Password needs to have at least 1 uppercase character."
        return;
    }
    if (!password.value.match(/^(?=.*[a-z])/)) {
        password.classList.add('error');
        errorMessage.textContent = "Password needs to have at least 1 lowercase character."
        return;
    }
    if (!phone.value.match(/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g)) {
        phone.classList.add('error');
        errorMessage.textContent = "Please enter a valid phone number.";
        return;
    }
    errorMessage.style.color = "limegreen"
    errorMessage.style.textShadow = "1px 1px 2px rgb(228, 224, 220)"
    errorMessage.textContent = "Form added successfully."

    setTimeout(() => {
        window.location.reload()
    }, 7000)
}

const form = document.querySelector('form');
form.addEventListener('submit', submit);