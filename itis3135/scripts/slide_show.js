//got this concept from the book page 273
//i wrote comments to learn and understand it better.
//im sure you already understand it and that they are unneeded for other programmers.

"use strict"; //used so that errors that could occur might be fixed earlier.
$(document).ready(() => { //$() is already created in jquery. .ready() runs when dom is loaded.
    
    //inside the .ready is an arrow function with no parameter.

    //preload images
    //image_list id then it gets all the anchor tags (personal notes)
    $("#image_list a").each( (index, link) => { 
        //index holds the current index of the a tag array that is created.
        // link == this
        const image = new Image(); //create a new image object each time the loop happens
        image.src = link.href; 
    });

    //attach event handlers for links
    //one parameter in a arrow function doesnt need () (personal note)
    $("#image_list a").click( evt => {
        
        //get clicked <a> tag
        //(current target === this)
        const link = evt.currentTarget;

        //swap image
        //href gets the link outta of href. just use link to get the src (.src doesnt work.)
        $(".beaver_main_image").attr("src", link.href);

        //swap caption, .text is a jquery method that sets text
        //$("#caption").text(link.title);

        //cancel the default action of the link
        evt.preventDefault(); //JQuery cross-browser method
    });

    //move focus to first thumbnail
    //$("li:first-child a").focus(); //messes with my outline css file.
});