class Form{
    constructor(id,name,from, to, reason){
        this.id=id;
        this.name=name;
        this.from=from;
        this.to=to;
        this.reason=reason;
        this.status= "Submitted";
    }
}

const f1 = new Form(1,"Amr","2023-05-12", "2023-05-19", "sickness");
const f2 = new Form(2,"joe","2023-05-10", "2023-05-21", "ill");

const forms = [f1,f2];

for(let i=0; i<forms.length; i++){
    let key = `${forms[i].id}`;
    localStorage.setItem("from"+key, forms[i].from);
    localStorage.setItem("to"+key, forms[i].to);
    localStorage.setItem("reason"+key, forms[i].reason);
    localStorage.setItem("status"+key, forms[i].status);
}
