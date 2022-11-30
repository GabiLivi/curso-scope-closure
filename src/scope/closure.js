//Qué es un Closure?

//Ámbito lexico

/*
Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito con el cual se creó. Puedes entender los closures como: función interna + scope. Mira estos pasos:

Genera una función que retorna una función interna.
Esta función interna tiene un scope, el cual puede ser accedido únicamente por esta función, es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por la función interna.
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

