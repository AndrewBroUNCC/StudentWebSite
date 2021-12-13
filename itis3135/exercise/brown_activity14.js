$(document).ready(function() {

	$("#nav_list a").click( evt => {

        let anchor = evt.currentTarget;
        console.log(anchor.title + ".json");
        
        $.ajax({
            type: "get",
            url: anchor.title + ".json",

            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $("main h1").html("")
                console.log(data['speakers'][0]['title']);
                $("main h1").html(data['speakers'][0]['title']);
                $("main h2").html(data['speakers'][0]['month']);
                $("main h3").html(data['speakers'][0]['speaker']);
                $("main img").attr("src", data['speakers'][0]['image']);
                $("main p").html(data['speakers'][0]['text']);
            }
        });
        
    })
}); // end ready