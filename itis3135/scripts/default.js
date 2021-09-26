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
   
    return prompt("What is your Name bud?");
};
//var name = "test";
const userName = getName();

function howDoYouDo() {
    return prompt("How are you doing?");
}

const howAreYou = howDoYouDo();


var paraDisplay = ("Today is "+ noTimeDate +", and the time is: " + currentTime + " The "+ company +" welcomes you, " + userName + "! we're glad you are doing " + howAreYou + "!");

function demoString() {
        document.getElementById("display").innerHTML = (paraDisplay);
    }

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