let num1 = "";
let num2 = "";
let operator = "";
const screen = document.querySelector("#screen");

function add(a, b) {
    return a + b;
} 
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide (a, b) {
    if (b === 0) {
        return "No thanks";
    } else {
            return a / b;
    }

}
function modulo (a, b) {
    return a % b;
}
function operate (oper, number1, number2) {
    let a = parseFloat(number1);
    let b = parseFloat(number2);
    if (oper === "add") {
        return add(a, b);
    } else if (oper === "subtract") {
        return subtract(a, b);
    } else if (oper === "multiply") {
        return multiply(a, b);
    } else if (oper === "divide") {
        return divide (a, b);
    } else if (oper === "mod") {
        return modulo (a, b);
    }
}
document.getElementById("nine").onclick = function() {
    if(operator === "") {
        num1 = num1 + "9";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "9";
        screen.innerHTML = num2;
    }
}
document.getElementById("eight").onclick = function() {
    if(operator === "") {
        num1 = num1 + "8";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "8";
        screen.innerHTML = num2;
    }
}
document.getElementById("seven").onclick = function() {
    if(operator === "") {
        num1 = num1 + "7";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "7";
        screen.innerHTML = num2;
    }
}
document.getElementById("six").onclick = function() {
    if(operator === "") {
        num1 = num1 + "6";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "6";
        screen.innerHTML = num2;
    }
}
document.getElementById("five").onclick = function() {
    if(operator === "") {
        num1 = num1 + "5";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "5";
        screen.innerHTML = num2;
    }
}
document.getElementById("four").onclick = function() {
    if(operator === "") {
        num1 = num1 + "4";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "4";
        screen.innerHTML = num2;
    }
}
document.getElementById("three").onclick = function() {
    if(operator === "") {
        num1 = num1 + "3";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "3";
        screen.innerHTML = num2;
    }
}
document.getElementById("two").onclick = function() {
    if(operator === "") {
        num1 = num1 + "2";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "2";
        screen.innerHTML = num2;
    }
}
document.getElementById("one").onclick = function() {
    if(operator === "") {
        num1 = num1 + "1";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "1";
        screen.innerHTML = num2;
    }
}
document.getElementById("zero").onclick = function() {
    if(operator === "") {
        num1 = num1 + "0";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "0";
        screen.innerHTML = num2;
    }
}
document.getElementById("decimal").onclick = function() {
    if(operator === "") {
        if (!num1.includes(".")){
            num1 = num1 + ".";
            screen.innerHTML = num1; 
        }

    } else {
        if (!num2.includes(".")) {
            num2 = num2 + ".";
            screen.innerHTML = num2;
        }

    }
}
document.getElementById("AC").onclick = function() {
    num1 = "";
    num2 = "";
    operator = "";
    screen.innerHTML = "0";
}
document.getElementById("add").onclick = function() {
    operator = "add";
}
document.getElementById("subtract").onclick = function() {
    operator = "subtract";
}
document.getElementById("multiply").onclick = function() {
    operator = "multiply";
}
document.getElementById("divide").onclick = function() {
    operator = "divide";
}
document.getElementById("mod").onclick = function() {
    operator = "mod";
}
document.getElementById("sign").onclick = function() {
    if(operator === "") {
        num1 = num1 + "1";
        screen.innerHTML = num1;
    } else {
        num2 = num2 + "1";
        screen.innerHTML = num2;
    }
}
document.getElementById("equal").onclick = function() {
    if (operator !== ""){
        let result = operate(operator, num1, num2);
        screen.innerHTML = result;
        num1 = "";
        num2 = "";
        operator = "";
    }


}