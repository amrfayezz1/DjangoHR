// import {Emp, data} from './data.js';
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = form.id.value;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const maritalStatus = form.marital_status.value;
    const salary = form.salary.value;
    const dob = form.birth.value;

    // const newEmp = new Emp(id,name,email,address,phone,gender,maritalStatus,salary,dob);
    // data.push(newEmp);
    // window.location.href="home.html";
    // console.log(data);

    if (localStorage.getItem("id" + id) != null) {
        let empid = document.getElementById("empID");
        empid.textContent = "This ID already exists!";
        empid.style.display = "unset";
        form.id.value = "";
    } else {
        localStorage.setItem("id" + id, id);
        localStorage.setItem("name" + id, name);
        localStorage.setItem("email" + id, email);
        localStorage.setItem("address" + id, address);
        localStorage.setItem("phone" + id, phone);
        localStorage.setItem("gender" + id, gender);
        localStorage.setItem("marital" + id, maritalStatus);
        localStorage.setItem("salary" + id, salary);
        localStorage.setItem("dob" + id, dob);
        localStorage.setItem("remVac" + id, 30);
        localStorage.setItem("appVac" + id, 0);
        window.location.href = "home.html";
    }
});
// console.log(data);


