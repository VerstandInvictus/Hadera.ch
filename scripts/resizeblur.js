function fitblur () {
    var body = $("body");
    var bcord = [$("div.wrapper").offset(),body.css("background-size")];
    console.log(bcord)
    var hwstring = bcord[1]
    console.log("bg size: " + hwstring)
    var centerpoint = [
        bcord[0].left,
        bcord[0].top
        ];
    var centerstring = 
        -centerpoint[0].toString() 
        + "px " 
        + -centerpoint[1].toString() 
        + "px"
    console.log(centerstring)
    $("div.wrapper-bg").css({
        "background-size":hwstring,
        "background-position":centerstring,
        });
    console.log($("div.wrapper-bg").css("background-position"))
    console.log($("div.wrapper-bg").css("background-size"))
}

$(window).resize(function () {
    fitblur();
})

$(document).ready(function () {
    fitblur();
})