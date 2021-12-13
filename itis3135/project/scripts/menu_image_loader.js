$(document).ready(function(){
    console.log("start");
    
    //working example of pulling image list
    $.getJSON("scripts/image_list.json", function(i, data){
        
        console.log(this);
        
        console.log(data); //this states if it was a success.
        
        console.log(i.imageList[0].media);
        console.log(i.imageList[1].name);
        console.log(i.imageList[2]);

    });

    $.ajax({
        type: "get",
        url: "scripts/image_list.json",

        error: function() {
            alert("NOT WORKING!");
        },

        dataType: "json",
        success: function(data) {
            console.log("json is Working!!!");
            console.log(data.imageList[1].media);
            $("#image_ajax").html( "<img src=" + data.imageList[2].media + ' alt=' + data.imageList[0].name  + '>');
            $("#image_ajax").append( "<img src=" + data.imageList[0].media + ' alt=' + data.imageList[1].name  + '>');
            $("#image_ajax").append( "<img src=" + data.imageList[2].media + ' alt=' + data.imageList[2].name  + '>');
        }
    })
});