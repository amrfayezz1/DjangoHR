const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');
const salaryInput = document.getElementById('salary');
const salaryError = document.getElementById('salary-error');
const idInput = document.getElementById('id');
const idError = document.getElementById('id-error');
const emailRegex = /\S+@\S+\.\S+/;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let error = false;

    if (idInput.value) {
        // Send AJAX request to check if the ID exists
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/check_id/${idInput.value}`, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.exists) {
                    idError.textContent = 'ID already exists';
                    idError.style.display = 'block';
                    error = true;
                } else {
                    idError.textContent = '';
                    idError.style.display = 'none';
                    validateEmail();
                }
            }
        };
        xhr.send();
    } else {
        validateEmail();
    }

    function validateEmail() {
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address!';
            emailError.style.display = 'block';
            error = true;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
            validatePhone();
        }
    }

    function validatePhone() {
        const phoneValue = phoneInput.value;
        if (isNaN(phoneValue) || phoneValue.length !== 11) {
            phoneError.textContent = 'Please enter a valid phone number!';
            phoneError.style.display = 'block';
            error = true;
        } else {
            phoneError.textContent = '';
            phoneError.style.display = 'none';
            validateSalary();
        }
    }

    function validateSalary() {
        const salaryValue = salaryInput.value;
        if (isNaN(salaryValue)) {
            salaryError.textContent = 'Please enter a valid salary!';
            salaryError.style.display = 'block';
            error = true;
        } else {
            salaryError.textContent = '';
            salaryError.style.display = 'none';
        }

        if (!error) {
            form.submit();
        }
    }
});
