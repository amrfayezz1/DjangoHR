const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');
const remainingDaysInput = document.getElementById('remaining-days');
const approvedDaysInput = document.getElementById('approved-days');
const vacationDaysError = document.getElementById('vacation-days-error');
const salaryInput = document.getElementById('salary');
const salaryError = document.getElementById('salary-error');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(emailInput.value)) {
        // display an error message if the email input is invalid
        emailError.textContent = 'Please enter a valid email address!';
        emailError.style.display = 'block';
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';

        const phoneValue = phoneInput.value;
        if (isNaN(phoneValue) || phoneValue.length !== 11) {
            // display an error message if the phone number input is invalid
            phoneError.textContent = 'Please enter a valid phone number!';
            phoneError.style.display = 'block';
        } else {
            phoneError.textContent = '';
            phoneError.style.display = 'none';

            // check if the remaining vacation days plus the approved vacation days equals 30
            const remainingDays = Number(remainingDaysInput.value);
            const approvedDays = Number(approvedDaysInput.value);
            if (remainingDays + approvedDays !== 30) {
                // display an error message if the total vacation days is not equal to 30
                vacationDaysError.textContent = 'The total vacation days must be 30.';
                vacationDaysError.style.display = 'block';
            } else {
                vacationDaysError.textContent = '';
                vacationDaysError.style.display = 'none';

                const salaryValue = salaryInput.value;
                if (isNaN(salaryValue)) {
                    ;    // display an error message if the salary input is not a number
                    salaryError.textContent = 'Please enter a valid salary!';
                    salaryError.style.display = 'block';
                } else {
                    // clear the error message and continue with other validations
                    salaryError.textContent = '';
                    salaryError.style.display = 'none';
                    form.submit();
                }
            }
        }
    }
});
