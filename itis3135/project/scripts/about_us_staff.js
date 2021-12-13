$(document).ready(function(){
    console.log("start");

    $.ajax({
        type: "get",
        url: "scripts/about_us_people.json",

        error: function() {
            alert("About us page not working!");
        },

        dataType: "json",
        success: function(data) {
            console.log("about us json is working!");
            console.log(data.staffList[0].name);
            $("#staffList").html("<p>" + "Staff:" + "</p>");
            $("#staffList").append("<p>" + data.staffList[0].name + "</p>");
            $("#staffList").append("<p>"+ data.staffList[0].about + "</p>");

            $("#staffList").append("<p>" + data.staffList[1].name + "</p>");
            $("#staffList").append("<p>"+ data.staffList[1].about + "</p>");

            $("#staffList").append("<p>" + data.staffList[2].name + "</p>");
            $("#staffList").append("<p>"+ data.staffList[2].about + "</p>");

            $("#staffList").append("<p>" + data.staffList[3].name + "</p>");
            $("#staffList").append("<p>"+ data.staffList[3].about + "</p>");
        }
    });
});