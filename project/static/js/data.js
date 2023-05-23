class Emp{
    constructor(id,name,email="",address="",phone="",gender="",marital="",salary="",dob=""){
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.gender = gender;
        this.marital = marital;
        this.salary = salary;
        this.dob = dob;
        this.remVac = 30;
        this.appVac = 0;
    }
}

const amr = new Emp("1", "amr fayez", "amr@ya.com", "cairo", "01xx", "male", "Single", "2500", "2003-07-24");
const joe = new Emp("2", "joe", "amr@ya.com", "cairo", "01xx", "male", "Single", "2500", "2003-07-24");
const omar = new Emp("3", "omar", "amr@ya.com", "cairo", "01xx", "male", "Single", "2500", "2003-07-24");
const malak = new Emp("4", "malak walid", "amr@ya.com", "cairo", "01xx", "male", "Single", "2500", "2003-07-24");

let data=[amr,joe,omar,malak];

for(let i=0; i<data.length; i++){
    let key = `${i+1}`;
    localStorage.setItem("id"+key, data[i].id);
    localStorage.setItem("name"+key, data[i].name);
    localStorage.setItem("email"+key, data[i].email);
    localStorage.setItem("address"+key, data[i].address);
    localStorage.setItem("phone"+key, data[i].phone);
    localStorage.setItem("gender"+key, data[i].gender);
    localStorage.setItem("marital"+key, data[i].marital);
    localStorage.setItem("salary"+key, data[i].salary);
    localStorage.setItem("dob"+key, data[i].dob);
    localStorage.setItem("remVac"+key, data[i].remVac);
    localStorage.setItem("appVac"+key, data[i].appVac);
}
