$(document).ready(function(){
   
    console.log("start");

    $.getJSON("facultyList.json", function(data){
        console.log(this);
        console.log(data);
    });

    console.log();

    $.ajax({
        type: "get",
        url: "facultyList.json",

        error: function(xhr, status, error) {
            alert("Error status = " + xhr.status + " - " + error);
        },

        dataType: "json",
        success: function(data) {
            console.log("working!!");
            $.each(data, function(){
                console.log("here = " + this);
                $("#faculty").append("<img src=" + this[0]["image"] + ">");
                $("#faculty").append("<h2>" + this[0]["full_name"] + "</h2>");
                $("#faculty").append("<h3>" + this[0]["department"] + "</h3>");
                $("#faculty").append("<P>" + this[0]["bio"] + "</P>");
                
                $("#faculty").append("<img src="+this[1]["image"] + ">");
                $("#faculty").append("<h2>" + this[1]["full_name"] + "</h2>");
                $("#faculty").append("<h3>" + this[1]["department"] + "</h3>");
                $("#faculty").append("<P>" + this[1]["bio"] + "</P>");

                $("#faculty").append("<img src="+this[2]["image"] + ">");
                $("#faculty").append("<h2>" + this[2]["full_name"] + "</h2>");
                $("#faculty").append("<h3>" + this[2]["department"] + "</h3>");
                $("#faculty").append("<P>" + this[2]["bio"] + "</P>");
                 /*
        Modify the JavaScript so it displays the image, full name, department, and 
        bio line for each professor. These four data items should be in img, h2, h3, 
        and <p> elements respectively. If you do this right, you shouldn’t have to 
        modify the CSS for this application because the CSS formats the headings 
        and applies a bottom border to the<p> element.         
    */
            
            })
        }
    })


});
