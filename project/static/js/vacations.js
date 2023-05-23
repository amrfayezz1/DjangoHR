// import {forms, Form} from './forms.js';
// import {data} from './data.js';

const data = [];
for (let i = 0; i < localStorage.length; i++) {
    let key = `${i + 1}`;
    if (localStorage.getItem("id" + key) != null && localStorage.getItem("from" + key) != null) {
        let temp = {
            id: localStorage.getItem("id" + key),
            name: localStorage.getItem("name" + key),
            remVac: localStorage.getItem("remVac" + key),
            appVac: localStorage.getItem("appVac" + key),
            from: localStorage.getItem("from" + key),
            to: localStorage.getItem("to" + key),
            reason: localStorage.getItem("reason" + key),
            status: localStorage.getItem("status" + key)
        }
        data.push(temp);
    }
}

const table = document.getElementById("table");
const header = document.createElement("tr");
header.innerHTML = "<th>ID</th>\
                <th>Name</th>\
                <th>Remaining Vacation Days</th>\
                <th>Approved Vacation Days</th>\
                <th>From</th>\
                <th>To</th>\
                <th>Reason</th>\
                <th>Status</th><th></th><th></th>";
table.appendChild(header);
for (let i = 0; i < data.length; i++) {
    // const selectedObject = data.find(obj => obj.id == forms[i].id);
    // console.log(selectedObject);
    const row = document.createElement("tr");
    row.classList.add("rw" + i);
    row.innerHTML = "<td>" + data[i].id + "</td>\
                    <td>"+ data[i].name + "</td>\
                    <td class='rem'>"+ data[i].remVac + "</td>\
                    <td class='app'>"+ data[i].appVac + "</td>\
                    <td>"+ data[i].from + "</td>\
                    <td>"+ data[i].to + "</td>\
                    <td>"+ data[i].reason + "</td>\
                    <td class='status'>"+ data[i].status + "</td>\
                    <td><button class='accept'>Approve</button></td>\
                    <td><button class='reject'>Decline</button></td></td>";
    table.appendChild(row);
    const acc = document.querySelector(".rw" + i + " .accept");
    const rej = document.querySelector(".rw" + i + " .reject");
    acc.addEventListener("click", () => {
        const date1 = new Date(data[i].from);
        const date2 = new Date(data[i].to);
        const timeDiff = date2.getTime() - date1.getTime();
        const dayDiff = timeDiff / (1000 * 3600 * 24);
        document.getElementsByClassName("rem")[i].innerHTML -= dayDiff;
        document.getElementsByClassName("app")[i].innerHTML = Number(document.getElementsByClassName("app")[i].innerHTML) + dayDiff;
        document.getElementsByClassName("status")[i].innerHTML = "Approved";
        // selectedObject.remVac-=dayDiff;
        // selectedObject.appVac=Number(selectedObject.appVac) + dayDiff;
        // forms.splice(i,1);
        acc.disabled = true;
        rej.disabled = true;
        localStorage.removeItem("from" + `${data[i].id}`);
        localStorage.removeItem("to" + `${data[i].id}`);
        localStorage.removeItem("reason" + `${data[i].id}`);
        localStorage.removeItem("status" + `${data[i].id}`);
        let rem = localStorage.getItem("remVac" + `${data[i].id}`);
        localStorage.setItem("remVac" + `${data[i].id}`, rem - dayDiff);
        let app = Number(localStorage.getItem("appVac" + `${data[i].id}`)) + dayDiff;
        localStorage.setItem("appVac" + `${data[i].id}`, app);

        window.location.reload();
        // console.log(selectedObject);
        // console.log(localStorage.getItem("remVac"+`${i+1}`));
        // console.log(localStorage.getItem("appVac"+`${i+1}`));
    })
    rej.addEventListener("click", () => {
        document.getElementsByClassName("status")[i].innerHTML = "Declined";
        // forms.splice(i,1);
        localStorage.removeItem("from" + `${data[i].id}`);
        localStorage.removeItem("to" + `${data[i].id}`);
        localStorage.removeItem("reason" + `${data[i].id}`);
        localStorage.removeItem("status" + `${data[i].id}`);
        acc.disabled = true;
        rej.disabled = true;
        window.location.reload();
    })
}
