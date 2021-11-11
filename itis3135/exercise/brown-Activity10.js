$(document).ready(function() {

        $("#image_list li:first-child a").focus();

        // preload the image for each link
        $("#image_list a").each( (index, link) => {
                const image = new Image();
                image.src = link.href; // holding large picture.
                console.log(image);
        });
        // set up the event handlers for each link
        $("#image_list a").click( evt => {

                $("#caption").animate({fontSize: "1.0em"});

                console.log("clicked!")

                const link = evt.currentTarget;

                const imgUrl = link.href;
                const imgCaption = link.title;

                $("#image").fadeOut(3000, function() {
                        $("#image").attr("src", imgUrl).fadeIn(3000);
                });

                $("#caption").fadeOut(3000, function() {
                        $("#caption").text(imgCaption).fadeIn(3000, function() {
                                $("#caption").animate({fontSize: "2.0em"}, 3000, function() {
                                        $("#image_list li:first-child a").focus();
                                });
                        });
                });

                //$("#image").attr("src", imgUrl);
                //$("#caption").text(imgCaption);

                //set font size to 2.0 em after 3 secs using animate method.

                

                evt.preventDefault();

                
                
        });
    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link (done)


    // move the focus to the first link(done you have to tab to tell tho.)

}); // end ready