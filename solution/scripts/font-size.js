sliderClickHandler = function() {
    var tag = document.getElementsByTagName("body");
    tag.fontSize(changeFont);
}

("#font-slider").onclick = sliderClickHandler;

function changeFont () {
    var font = 10;
    return font;
}

