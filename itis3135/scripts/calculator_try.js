var displayNumber = 0.0;
var numberTaken = "";
var nextNumber = "";
var numberAdding = false;
var numberSubtracting = false;
var numberMultiplying = false;
var numberDividing = false;

function takeNumber(number) {


    if (numberAdding == true) {
        nextNumber += number;
        document.getElementById("display_text").innerText = (nextNumber);
    }
    else if (numberSubtracting == true) {
        nextNumber += number;
        document.getElementById("display_text").innerText = (nextNumber);
    }
    else if (numberMultiplying == true) {
        nextNumber += number;
        document.getElementById("display_text").innerText = (nextNumber);
    }
    else if (numberDividing == true) {
        nextNumber += number;
        document.getElementById("display_text").innerText = (nextNumber);
    }
    else {
    numberTaken += number;
    document.getElementById("display_text").innerText = (numberTaken);
    }
}

function numberAdd(bool) {
    numberAdding = bool;
    document.getElementById("display_text").innerText = ("+");
}

function numberSubtract(bool) {
    numberSubtracting = bool;
    document.getElementById("display_text").innerText = ("-");
}

function numberMultiply(bool) {
    numberMultiplying = bool;
    document.getElementById("display_text").innerText = ("*");
}

function numberDivide(bool) {
    numberDividing = bool;
    document.getElementById("display_text").innerText = ("/");
}

function equalFunction() {
    if(numberAdding == true){
        displayNumber = parseFloat(numberTaken) + parseFloat(nextNumber);
        document.getElementById("display_text").innerText = (displayNumber);
        numberAdding = false;
        displayNumber = 0.0;
        nextNumber = "";
        numberTaken = "";
    }
    else if (numberSubtracting == true) {
        displayNumber = parseFloat(numberTaken) - parseFloat(nextNumber);
        document.getElementById("display_text").innerText = (displayNumber);
        numberSubtracting = false;
        displayNumber = 0.0;
        nextNumber = "";
        numberTaken = "";
    }
    else if (numberMultiplying == true) {
        displayNumber = parseFloat(numberTaken) * parseFloat(nextNumber);
        document.getElementById("display_text").innerText = (displayNumber);
        numberMultiplying = false;
        displayNumber = 0.0;
        nextNumber = "";
        numberTaken = "";
    }
    else if (numberDividing == true) {
        displayNumber = parseFloat(numberTaken) / parseFloat(nextNumber);
        document.getElementById("display_text").innerText = (displayNumber);
        numberDividing = false;
        displayNumber = 0.0;
        nextNumber = "";
        numberTaken = "";
    }
    else {
        displayNumber = numberTaken;
        document.getElementById("display_text").innerText = (displayNumber);
        numberDividing = false;
        displayNumber = 0.0;
        nextNumber = "";
        numberTaken = "";
    }
}

function allClear() {
    displayNumber = 0.0;
    nextNumber = "";
    numberTaken = "";
    document.getElementById("display_text").innerText = (displayNumber);
    numberAdding = false;
    numberSubtracting = false;
    numberMultiplying = false;
    numberDividing = false;
}

