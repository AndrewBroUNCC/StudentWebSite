"use strict"

const $ = selector => document.querySelector(selector);

function validateInput() 
{
    let userName = $('[id="name"]').value;
    let userPhoneNumber = $('[id="phoneNumber"]').value;
    let errorMessage = "";

    console.log(userName);
    console.log(userPhoneNumber);

    userPhoneNumber = parseInt(userPhoneNumber);

    if (userPhoneNumber == "") 
    {
        errorMessage += "Phone number is empty\n";
    }

    if (userName == "") 
    {
        errorMessage += "name is empty\n";
    }
    
    if (!isNaN(userName)) 
    {
        errorMessage += "entry must be a name not a number\n";
    }
    if (isNaN(userPhoneNumber)) 
    {
        //999-999-9999 9,999,999,999
        errorMessage += "phone number must be a number\n";
    }
    if (userPhoneNumber < 0 || userPhoneNumber > 9999999999)
    {
        errorMessage += "phone number must be greater than 0 and less than 10 digits";
    }

    if (errorMessage != "") 
    {
        alert(errorMessage);
        $('[id="name"]').value = "";
        $('[id="phoneNumber"]').value = "";
        $('[id="name"]').focus();
    }
    if (errorMessage == "") 
    {
        alert("everything worked great!");
    }
    
}