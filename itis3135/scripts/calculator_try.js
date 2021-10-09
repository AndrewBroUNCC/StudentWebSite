//https://www.youtube.com/watch?v=QS6Y0ezhyCs
//i used this to learn how to eval a string to a mathimatical expression.

var numString = "";
let displayNumber = 0.0;

function takeNumber(number) {

    numString += number;
    document.getElementById("display_text").innerText = (numString);
}

function equalFunction() {
    try {
        displayNumber = eval(numString);
    } catch {
        document.getElementById("display_text").innerText = 'Error!'
        displayNumber = 0;
        numString = "";
        return;
    }
    

    document.getElementById("display_text").innerText = (displayNumber);
    displayNumber = 0;
    numString = "";
}

function allClear() {
    displayNumber = 0;
    document.getElementById("display_text").innerText = (displayNumber);
    numString = "";
} 



/*

let value1 = undefined;
let value2 = undefined;
let operator = undefined;

//take 2 values and combine them using the given operators
function doCalculations(num1, op, num2) {
    let result = 0;
    if (op == '+') {
        result = num1 + num2;
    } 
    else if (op == '-') {
        result = num1 - num2;
    }
    else if (op == '*') {
        result = num1 * num2;
    }
    else if (op == "/") {
        result = num1 / num2;
    }
    return result;
}

function getState() {
    if (value1 == undefined && operator == undefined && value2 == undefined) {
        return 0;
    }
    else if (value1 != undefined && operator != undefined && value2 == undefined) {
        return 1;
    }
    else {
        return -1;
    }
}

function clearDisplay() {
    document.getElementById("calculator-display").innerText = '0';
    value1 = undefined;
    value2 = undefined;
    operator = undefined;
}

//takes an input from the calculator buttons and updates the display accordingly
function calculatorInput(input) {
    let currentDisplay = document.getElementById("calculator-display").innerText;
    let empty = currentDisplay == "0" || currentDisplay == "+" || currentDisplay == "-" || currentDisplay == "*" || currentDisplay == "/" || currentDisplay == "Infinity" || currentDisplay == "-Infinity" || currentDisplay == "NaN";
    let state = getState();
    switch (input) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            if (empty) { //logic for adding integers to the display
                document.getElementById("calculator-display").innerText = input;
            } else {
                document.getElementById("calculator-display").innerText += input;
            }
            break;
        case ".":
            if ((currentDisplay == "0" || !empty) && !currentDisplay.includes(".")) { //logic for adding decimals to the display
                document.getElementById("calculator-display").innerText += input;
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (state == 0) { //store the first value and operator
                value1 = parseFloat(document.getElementById("calculator-display").innerText);
                operator = input;
                document.getElementById("calculator-display").innerText = input;
            } else if (state == 1 && (currentDisplay == "0" || !empty)) { //logic for chaining operations together. allows for 5+5+5+5=20
                value2 = parseFloat(document.getElementById("calculator-display").innerText);
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                value1 = temp;
                operator = input;
                value2 = undefined;
                document.getElementById("calculator-display").innerText = input;
            } else if (state == 1 && (currentDisplay != "0" && empty)) { //prevent an operator from being passed as a number, substitutes 0 for value2
                value2 = 0;
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                value1 = temp;
                operator = input;
                value2 = undefined;
                document.getElementById("calculator-display").innerText = input;
            } else { //in case of error
                alert("error with operator: " + input);
            }
            break;
        case "=":
            if (state == 1 && !empty) { //does the final calculation, and resets the global variables
                value2 = parseFloat(document.getElementById("calculator-display").innerText);
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                document.getElementById("calculator-display").innerText = temp;
            } else if (state == 1 && empty) {//does the same thing except it prevents value2 from being left undefined
                value2 = 0;
                let temp = doCalculation(value1, operator, value2);
                clearDisplay();
                document.getElementById("calculator-display").innerText = temp;
            } else if (state != 0) { //in case of error
                alert("error with equals operator");
            }
            break;
    }
    return input;
}

*/

















/*var displayNumber;
var numberTaken = "";
var nextNumber = "";
var numberAdding = false;
var numberSubtracting = false;
var numberMultiplying = false;
var numberDividing = false;
var decimalCount = 0;

function takeNumber(number) {


    if(number == "."){
        if(decimalCount == 1){
            return
        }
        decimalCount++;
    }

    if (numberAdding == true || numberSubtracting == true || numberMultiplying == true || numberDividing == true) {
        nextNumber += number;
        document.getElementById("display_text").innerText = (nextNumber);
    }
    else {
    numberTaken += number;
    document.getElementById("display_text").innerText = (numberTaken);
    }
}

function numberAdd(bool) {
    if (numberAdding == true || numberSubtracting == true || numberMultiplying == true || numberDividing == true) {
        displayNumber += parseFloat(nextNumber);
        nextNumber = "";        
    }
    else {
    numberAdding = bool;
    displayNumber += parseFloat(numberTaken);
    }
    document.getElementById("display_text").innerText = ("+");
    decimalCount = 0;
    var numberSubtracting = false;
    var numberMultiplying = false;
    var numberDividing = false;
}

function numberSubtract(bool) {
    if (numberAdding == true || numberSubtracting == true || numberMultiplying == true || numberDividing == true) {
        displayNumber -= parseFloat(nextNumber);
        nextNumber = "";        
    }
    else {
    numberSubtracting = bool;
    displayNumber -= parseFloat(numberTaken);
    }
    numberSubtracting = bool;
    document.getElementById("display_text").innerText = ("-");
    decimalCount = 0;
    var numberAdding = false;
    var numberMultiplying = false;
    var numberDividing = false;
}

function numberMultiply(bool) {
    if (numberAdding == true || numberSubtracting == true || numberMultiplying == true || numberDividing == true) {
        displayNumber *= parseFloat(nextNumber);
        nextNumber = "";        
    }
    else {
    numberMultiplying = bool;
    displayNumber *= parseFloat(numberTaken);
    }
    numberMultiplying = bool;
    document.getElementById("display_text").innerText = ("*");
    decimalCount = 0;
    var numberAdding = false;
    var numberSubtracting = false;
    var numberDividing = false;
}

function numberDivide(bool) {
    if (numberAdding == true || numberSubtracting == true || numberMultiplying == true || numberDividing == true) {
        displayNumber /= parseFloat(nextNumber);
        nextNumber = "";        
    }
    else {
    numberDividing = bool;
    displayNumber /= parseFloat(numberTaken);
    }
    numberDividing = bool;
    document.getElementById("display_text").innerText = ("/");
    decimalCount = 0;
    var numberAdding = false;
    var numberSubtracting = false;
    var numberMultiplying = false;
}

function parseNumber() {
    displayNumber = parseFloat(numberTaken) + parseFloat(nextNumber);
}

function equalFunction() {

    nextNumber = parseFloat(nextNumber);

    if (numberAdding == true) {
        displayNumber += nextNumber;
    }
    else if (numberSubtracting == true) {
        displayNumber -= nextNumber;
    }
    else if (numberMultiplying == true) {
        displayNumber *= nextNumber;
    }
    else if (numberDividing == true) {
        displayNumber /= nextNumber;
    }
    nextNumber = "";
    numberTaken = "";
    document.getElementById("display_text").innerText = (displayNumber);
    numberAdding = false;
    numberSubtracting = false;
    numberMultiplying = false;
    numberDividing = false;
    decimalCount = 0;
    displayNumber = 0;
}

function allClear() {
    displayNumber = 0;
    nextNumber = "";
    numberTaken = "";
    document.getElementById("display_text").innerText = (displayNumber);
    numberAdding = false;
    numberSubtracting = false;
    numberMultiplying = false;
    numberDividing = false;
    decimalCount = 0;
} */

