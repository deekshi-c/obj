let user = {
    Fname: "john",
    Lname: "luther",
    age: 22
};

console.log(user);

let copy ={}
Object.assign(copy,user);
/*for( i in user ){
    copy[i]=user[i];
}
console.log(copy);

copy.Fname = "aron";
console.log(user);*/
console.log(copy);