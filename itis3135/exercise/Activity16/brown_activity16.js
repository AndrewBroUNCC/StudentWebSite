$(document).ready(function(){

    //this is to hold a website url that is full of data in JavaScriptObjectNotation
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" +
        "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

    //this uses jquery(library of methods) the getJSON method pulls out the data to be used 
    //then a call back function gets that data to be used in a function.
    $.getJSON(url, function(data) {

        //this holds the html data so it can append them to the same variable
        var html = "";

        //.each is a for loop that uses each item in the data.items array. i is an index, item in the call back
        //is what is in that index. important to remember how this works.
        $.each(data.items, function(i, item){
            //you have to check inside the json file to see how everything is named so that
            //it can be used correctly. like item.media.m
            //data-lightbox="building"
            html += "<a href=" + item.media.m + " data-lightbox='building'><img src=" + item.media.m + "><a>";
        })

        $("#new_building").html(html);
    })

    
});