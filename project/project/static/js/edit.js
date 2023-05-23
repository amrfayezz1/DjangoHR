// import {data} from './data.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const name = urlParams.get('name');

const idInput = document.querySelector('input[name="id"]');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const addressInput = document.querySelector('input[name="address"]');
const phoneInput = document.querySelector('input[name="phone"]');
const maleRadio = document.querySelector('input[value="male"]');
const femaleRadio = document.querySelector('input[value="female"]');
// const maritalSelect = document.querySelector('marital_status');
const vacationLeftInput = document.querySelector('input[name="vacation_left"]');
const vacationApprovedInput = document.querySelector('input[name="vacation_approved"]');
const salaryInput = document.querySelector('input[name="salary"]');
const birthInput = document.querySelector('input[name="birth"]');

// const selectedObject = data.find(obj => obj.id === id);
const selectedObject = {
    id: localStorage.getItem("id" + `${id}`),
    name: localStorage.getItem("name" + `${id}`),
    address: localStorage.getItem("address" + `${id}`),
    dob: localStorage.getItem("dob" + `${id}`),
    email: localStorage.getItem("email" + `${id}`),
    gender: localStorage.getItem("gender" + `${id}`),
    marital: localStorage.getItem("marital" + `${id}`),
    remVac: localStorage.getItem("remVac" + `${id}`),
    appVac: localStorage.getItem("appVac" + `${id}`),
    phone: localStorage.getItem("phone" + `${id}`),
    salary: localStorage.getItem("salary" + `${id}`)
};

idInput.value = selectedObject.id;
nameInput.value = selectedObject.name;
emailInput.value = selectedObject.email;
addressInput.value = selectedObject.address;
phoneInput.value = selectedObject.phone;
if (selectedObject.gender === 'male') {
    maleRadio.checked = true;
} else if (selectedObject.gender === 'female') {
    femaleRadio.checked = true;
}
document.querySelector('option[value="' + selectedObject.marital.toLowerCase() + '"]').selected = true;
vacationLeftInput.value = selectedObject.remVac;
vacationApprovedInput.value = selectedObject.appVac;
salaryInput.value = selectedObject.salary;
birthInput.value = selectedObject.dob;

const del = document.getElementById("del");
del.addEventListener("click", flag);
function flag() {
    if (confirm("Are you sure you want to delete employee?")) {
        // data.splice(data.homeOf(selectedObject),1);
        // console.log(data);
        localStorage.removeItem("id" + `${id}`);
        localStorage.removeItem("name" + `${id}`);
        localStorage.removeItem("email" + `${id}`);
        localStorage.removeItem("address" + `${id}`);
        localStorage.removeItem("phone" + `${id}`);
        localStorage.removeItem("gender" + `${id}`);
        localStorage.removeItem("marital" + `${id}`);
        localStorage.removeItem("salary" + `${id}`);
        localStorage.removeItem("dob" + `${id}`);
        localStorage.removeItem("remVac" + `${id}`);
        localStorage.removeItem("appVac" + `${id}`);
        window.location.href = "home.html";
    }
}

const update = document.getElementById("update");
update.addEventListener("click", (e) => {
    e.preventDefault();
    selectedObject.id = idInput.value;
    selectedObject.name = nameInput.value;
    selectedObject.email = emailInput.value;
    selectedObject.address = addressInput.value;
    selectedObject.phone = phoneInput.value;
    selectedObject.salary = salaryInput.value;
    selectedObject.dob = birthInput.value;
    selectedObject.remVac = vacationLeftInput.value;
    selectedObject.appVac = vacationApprovedInput.value;
    localStorage.setItem("id" + `${id}`, selectedObject.id);
    localStorage.setItem("name" + `${id}`, selectedObject.name);
    localStorage.setItem("email" + `${id}`, selectedObject.email);
    localStorage.setItem("address" + `${id}`, selectedObject.address);
    localStorage.setItem("phone" + `${id}`, selectedObject.phone);
    localStorage.setItem("salary" + `${id}`, selectedObject.salary);
    localStorage.setItem("dob" + `${id}`, selectedObject.dob);
    localStorage.setItem("remVac" + `${id}`, selectedObject.remVac);
    localStorage.setItem("appVac" + `${id}`, selectedObject.appVac);
    if (maleRadio.checked) {
        selectedObject.gender = 'male';
        localStorage.setItem("gender" + `${id}`, selectedObject.gender);
    } else if (femaleRadio.checked) {
        selectedObject.gender = 'female';
        localStorage.setItem("gender" + `${id}`, selectedObject.gender);
    }
    selectedObject.marital = document.querySelector('option:checked').textContent;
    localStorage.setItem("marital" + `${id}`, selectedObject.marital);
    // console.log(data);
    window.location.href = "home.html";
});



function validateForm() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const salary = document.getElementById("salary");
    const nameRegex = /^[A-Za-z ]{3,32}$/;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const phoneRegex = /^[0-9]{11}$/;
    const salaryRegex = /^[0-9]{3,}$/;

    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (only letters with a minimum of 3)!");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number!");
        return false;
    }

    if (!salaryRegex.test(salary)) {
        alert("Please enter a valid Salary!");
        return false;
    }

    return true;
}