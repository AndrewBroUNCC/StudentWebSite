
"use strict";
$(document).ready( function() {
    console.log("start");
    var userFirstName;
    var userPhoneNumber;
    var userEmailAddress = "";
    var userCheckedRadio;
    $("#contactShowButton").click( () => {

        console.log("click");
        userFirstName = $("#firstName").val();
        userPhoneNumber = $("#phone").val();
        userEmailAddress = $("#userEmail").val();
        userCheckedRadio = $("input:radio:checked").val();

        console.log(userEmail);

        $("#displayContactInfo").html("First Name: " + userFirstName +"<br>" + "Phone number: " + userPhoneNumber +"<br>"+ "Email: " +userEmailAddress +"<br>" + "Service: " + userCheckedRadio);
    });
});