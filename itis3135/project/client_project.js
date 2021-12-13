$(document).ready(function slideShow() {

    $(".slider").bxSlider({
        controls: true,
        randomStart: true,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 750,
        slideMargin: 2,
        captions: true,
        speed: 2000,
        pager: true,
        pagerCustom: $("#id_pager"),
        pagerType: "short",
        
    });

    $('#buttonMainPage').click( () => {

        //console.log($('#fullName').val + " test 1")
        //console.log($('#fullName').value + " test 2")
        console.log($('#fullName').val() + " test 3") //this one is the right way.
        //console.log($('#fullName').value() + " test 4")

        let userName = $('#fullName').val();
        let userEmail = $('#userEmail').val();
        let headCount = $('#userHeadCount').val();

        $('#inputDisplay').html("<h2>Welcome!</h2>");
        $('#inputDisplay').append("" + "<p>" + "Hi " + userName + "! thank you for taking the time out of your day " +
        "to apply for our catering services. <br><br>You will be recieving an email shortly from the address: " +
        userEmail + "<br><br>we will easily be able to cater for " + headCount + " people.</p>" + "<br>" )


    });

    
});