// variables

var a; //declarando
var b = "b"; //declaramos/asignamos
b = "bb"; // reasignación
var a = "aa"; //redeclaración

//GLOBAL SCOPE
let fruit = "apple"; // global

function bestFruit(){
    manzana = "manzana";
    console.log(fruit)
};

bestFruit();
console.log(manzana);


function greeting(){
    //las variables solo existiran en esta function
    let userName = "Gabi";
    console.log(userName);

    if (userName === "Gabi"){
        console.log(`hello ${userName}!`)
    }
};

greeting();
console.log(userName);