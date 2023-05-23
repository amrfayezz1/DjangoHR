// import {forms, Form} from './forms.js';

const vac = document.getElementById("vac-form");
const urlParams = new URLSearchParams(window.location.search);
const idG = urlParams.get('id');
const nameG = urlParams.get('name');
vac.id.value = idG;
vac.name.value = nameG;


vac.addEventListener("submit", (e) => {
    e.preventDefault();
    const from = vac.from.value;
    const to = vac.to.value;
    const reason = vac.reason.value;

    // const newForm = new Form(idG,nameG,from,to,reason);
    if (from > to) {
        alert("Error: The 'From' date must be before the 'To' date.");
    } else {
        let key = `${idG}`;
        localStorage.setItem("from" + key, from);
        localStorage.setItem("to" + key, to);
        localStorage.setItem("reason" + key, reason);
        localStorage.setItem("status" + key, "Submitted");

        // forms.push(newForm);
        window.location.href = "./vacations.html";
    }
    // console.log(forms);
});
// console.log(forms);

