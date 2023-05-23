// const accounts = [
//     { username: "amr", password: "amr" },
//     { username: "omar", password: "omar" },
//     { username: "malak", password: "malak" },
//     { username: "yousef", password: "yousef" },
// ];

localStorage.clear();
localStorage.setItem("user1", "amr");
localStorage.setItem("pass1", "amr");
localStorage.setItem("user2", "omar");
localStorage.setItem("pass2", "omar");
localStorage.setItem("user3", "malak");
localStorage.setItem("pass3", "malak");
localStorage.setItem("user4", "yousef");
localStorage.setItem("pass4", "yousef");
localStorage.setItem("numUsers", "4");
// console.log(localStorage);

const accounts = [];
for(let i=0; i< Number(localStorage.getItem("numUsers")); i++){
    let key = `${i+1}`;
    let temp={
        username: localStorage.getItem("user"+key),
        password: localStorage.getItem("pass"+key),
    }
    accounts.push(temp);
}

function showTooltip(message, color) {
    const tooltip = document.createElement("div");
    tooltip.textContent = message;
    tooltip.classList.add("tooltip");
    tooltip.style.backgroundColor=color;
    document.body.appendChild(tooltip);
    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 2000);
}

function verifyLogin(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    for (let i = 0; i < accounts.length; i++) {
        if (username === accounts[i].username && password === accounts[i].password) {
            showTooltip("Login successful!", "#abb734");
            setTimeout(() => {
                window.location.href = "home.html";
            }, 2000);
            return true;
        }
    }
    if(username=="" || password==""){
        showTooltip("Empty username or password!", "#fa4968");
    } else{
        showTooltip("Invalid username or password!", "#fa4968");
    }
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    return false;
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', verifyLogin);