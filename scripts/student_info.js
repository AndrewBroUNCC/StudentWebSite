
"use strict";
$(document).ready(function() //a function is placed inside the Jquery ready method.
{  
    console.log("got here!");
    $("#header").load("header_student_info.html", function() {
        alert("working!");
    });
    console.log("got to the end");
});