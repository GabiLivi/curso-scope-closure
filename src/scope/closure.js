//Qué es un Closure?

//Ámbito lexico

/*
Un closure es la combinación entre una función y el ámbito léxico en el que esta 
fue declarada. Con esto, la función recuerda el ámbito con el cual se creó.
 Puedes entender los closures como: función interna + scope. Mira estos pasos:

Genera una función que retorna una función interna.
Esta función interna tiene un scope, el cual puede ser accedido únicamente por esta función, 
es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por
 la función interna.
Como resultado, esta función interna retornada con su scope será nuestro closure.
*/

const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //función interna (esto ya es un closure)
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }
    return parent();
}

myFunction();

function sumWithClosure(firstNum) {
    return function (secondNum) {
      if (secondNum) {
        return console.log(secondNum + firstNum);
      } else{
        return console.log(firstNum);
      }
      
    };
  }

sumWithClosure(2)(2);
sumWithClosure(3);

function saludar() {
    let userName = "Gabriel";

    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName;
}

const g = saludar();
console.log(g);
console.log(g());

//My money box


/*
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;

    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(45);
moneyBox(5);*/

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox $${saveCoins}`)
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(8);
myMoneyBox(2);
myMoneyBox(5);

const moneyBoxAna = moneyBox();

moneyBoxAna(4);
moneyBoxAna(6);

function shoppingCart(){
    let cart = [];
    function addItems(item){
        cart.push(item);
        console.log(cart);
    }
    return addItems;
}

const amazon = shoppingCart();
amazon("Mouse");
amazon("Keyboard");
amazon(`Display 24"`);


//¿Qué es el Hoisting? clase 11

/*
Hoisting es un término para describir que las declaraciones de variables y
funciones son desplazadas a la parte superior del scope más cercano, scope global
o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. 
En el caso de las variables solamente sucede cuando son declaradas con var.
*/

nameOfDog("Elmo");
function nameOfDog(name) { console.log(name); }; 

const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }

console.log(fruits);
nameOfDog();
