var company = "Angry Dyslexic Beaver Co.";
var currentDate = new Date();
var todayMonth = currentDate.getMonth() + 1;
var todayDay = currentDate.getDate();
var todayYear = currentDate.getFullYear();
var noTimeDate = todayMonth + "-" + todayDay + "-" + todayYear;

var currentHour = currentDate.getHours();
var currentMin = currentDate.getMinutes();
var currentSec = currentDate.getSeconds();
var amPm = "AM"

    if (currentHour == 0) {
        currentHour = 12;
    } 
    else if (currentHour > 12) {
        currentHour -= 12;
        amPm = "PM";
    }


var currentTime = currentHour + ":" + currentMin + ":" + currentSec + " " + amPm;

function getName() {
   
    var userName = prompt("What is your Name bud?");
    var howAreYou = prompt("How are you doing?");
    var paraDisplay = ("Today is "+ noTimeDate +", and the time is: " + currentTime + " The "+ company +" welcomes you, " + userName + "! we're glad you are doing " + howAreYou + "!");
    document.getElementById("display").innerHTML = (paraDisplay);
};
//var name = "test";

function taxCalculator() {
    var beforeCost = prompt("What was your total cost?");
    var tax = parseInt(beforeCost) * 0.09;
    var totalCost = parseFloat(beforeCost) + tax;
    var taxText = ("Before tax: " + beforeCost + "<br>The tax is: " + tax + "<br>The Total Cost is: " + totalCost);
    document.getElementById("taxCalculator").innerHTML = (taxText);
}
function displayContactInfo() {
    const contactInfo = "Our contract information:<br>Angry Dyslexic Beaver Co.<br>456 old town rd. 28041<br>Cornelius, NC<br>ADBeaver@ADBltd.com<br>(256) 555-4545";
    document.getElementById("contactInfo").innerHTML = (contactInfo);
}

function beaverAlert(x) {

    if (1 == x) {
        alert("Our Beaver Love You as Well!");
    }
    else if (2 == x) {
        alert("Our Beaver Would Love to hear why. Use the "
        + "Contact button to get in Touch.");
    }
    else {
        alert("Click on the hyper link below. Learn why you should love our beaver.");
        document.getElementById("hyper-link-link").innerHTML = ("Learn About Us <br>");
    }
    //"images/beaver-commons-wikimedia.png";
}

//==============================================================================================================================================================================
//polygon java script
var number = "";
var shape = "";

function getShape() {

    if (!isNaN(number)) {
        if (number == 0) {
            shape = "nothing";
        }   
        else if ( number == 1) {
            shape = "henagon";
        }
        else if ( number == 2) {
            shape = "digon";
        }
        else if ( number == 3) {
            shape = "trigon";
        }
        else if ( number == 4) {
            shape = "tetragon";
        }
        else if ( number == 5) {
            shape = "pentagon";
        }
        else if ( number == 6) {
            shape = "hexagon";
        }
        else if ( number == 7) {
            shape = "heptagon";
        }
        else if ( number == 8) {
            shape = "octagon";
        }
        else if ( number == 9){
            shape = "enneagon";
        } 
        else {
            shape = "decagon";
        }
        
    }
    alert("The Angry Dyslexic Beaver says that " + number + " lines make a " + shape);
}


function validateEntry() {
    
    if (isNaN(number) || number == "") {
        number = number.toUpperCase();
        if (number === "ZERO") {
            shape = "nothing";
        }
        else if (number === "ONE") {
            shape = "henagon";
        }
        else if ( number === "TWO") {
            shape = "digon";
        }
        else if ( number === "THREE") {
            shape = "trigon";
        }
        else if ( number === "FOUR") {
            shape = "tetragon";
        }
        else if ( number === "FIVE") {
            shape = "pentagon";
        }
        else if ( number === "SIX") {
            shape = "hexagon";
        }
        else if ( number === "SEVEN") {
            shape = "heptagon";
        }
        else if ( number === "EIGHT") {
            shape = "octagon";
        }
        else if ( number === "NINE") {
            shape = "enneagon";
        }
        else if ( number === "TEN") {
            shape = "decagon";
        } 
        else {
            alert("that is an invalid number");
            promptEntry(); 
        }
        number = number.toLowerCase();
    }
    else {
        number = Math.round(Math.abs(parseFloat(number)));
    }

    if(number > 10 || number < -10){
        alert("that is an invalid number");
        return promptEntry();
    }

    getShape();
}

function promptEntry() {
    number = prompt("The Angry Dyslexic Beaver would like your number.", "0 - 10");
    validateEntry();
}

function polygonFunction() {
    number = document.getElementById("polygonInfoSender").value;
    validateEntry();
}

