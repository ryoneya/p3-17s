var evntHandler = function(){

    var prefixURL = "https://api.500px.com/v1/photos/search?";
    var suffixURL = "&rpp=20&consumer_key=l7BCUa2wbNnNpWanpfketN4Q1JW7DPtljVmNYvoe&format";
    var fhpxTag = "term=" + $("input").val();
    var requestURL = prefixURL + fhpxTag + suffixURL;

    //clear old photos
    $(".photos").html("");

    $.getJSON(requestURL, function(fhpxResponse) {
        console.log(fhpxResponse);
        fhpxResponse.items.forEach(function (item) {
            var $img = $("<img>").hide();
            $img.attr("src", item.media.m);
            $("main .photos").append($img);
            $img.fadeIn();
        });
    });
};


$("button").on("click", evntHandler);

$("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
        //???;
    }
});