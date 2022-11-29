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



// FUNCTION SCOPE


function greeting(){
    //las variables solo existiran en esta function
    let userName = "Gabi";
    console.log(userName);

    if (userName === "Gabi"){
        console.log(`hello ${userName}!`)
    }
};

greeting();
//console.log(userName); esto da error, por el function scope


//BLOCK SCOPE
//vamos a usar let y const para este tipo de scope, y var para global

function fruits(){
    if(true){
        var fruit1 = "manzana";
        let fruit2 = "kiwi";
        const fruit3 = "banana"; 
        console.log(fruit2); // block scope
        console.log(fruit3); // block scope
        }
    console.log(fruit1); // function scope

    };

   

fruits();


//Reasignación y redeclaración clase 5

var firstName; //undefined
firstName = "Marcos";
console.log(firstName);

var lastName = "Gabriel"; //declarar y asignar
lastName = "Agustina"; // reasignar
console.log(lastName);

// pero... y qué pasa con LET?

let fruta = "apple"; //declarar y asignar
fruta = "kiwi"; // reasignar
fruta = "pepe"; 
console.log(fruta);

//let fruta = "banana"; puedo reasignar pero no redeclarar 


//CONST

const animal = "perro"; //declarar y asignar
//animal = "gato"; // reasignar

//NO NOS DEJA REASIGNAR NI REDECLARAR

console.log(animal)


/*
La redeclaración es volver a declarar una variable, y la reasignación es
 volver a asignar un valor.

Una variable declarada con var puede ser redeclarada y reasignada.
Una variable declarada con let puede ser reasignada, pero no redeclarada.
Una variable declarada con const no puede ser redeclarada, ni reasignada. 
Su declaración y asignación debe ser en una línea, caso contrario habrá un error.
*/


//Strict Mode

/*
El modo estricto es una funcionalidad que le permite al motor de JavaScript 
cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas 
que podemos hacer, esto es bueno porque permite manejar errores que son poco 
perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación 
para corregirlos.

EJEMPLO:

"use strict";   => así se declara

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
*/