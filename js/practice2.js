window.addEventListener("load",loaded);
window.addEventListener("keydown",downClick)
window.addEventListener("keyup",upClick)
window.addEventListener("mouseover",mouseHovering)
window.addEventListener("keyup",mouseHoveringChange)

document.getElementById("doublec").addEventListener("dblclick",doubleClick);
document.getElementById("event1").addEventListener("click",clicking);

function loaded(){
   var body;
   body = document.getElementById('changecolor');
   body.style.backgroundColor = "#ffc107" ;  
}

function upClick(){
    var body1;
    body1 = document.getElementById("navup")
    body1.style.backgroundColor = "#20c997"
}
function downClick(){
    var body;
    body = document.getElementById("bodyevent")
    body.style.backgroundColor = "#ee0d2093"
}

function mouseHovering(){
    var body;
    body = document.getElementById("bodyevent")
    body.style.backgroundColor = "#007bff"
}

function mouseHoveringChange(){
    var body;
    body = document.getElementById("bodyevent")
    body.style.backgroundColor = "#ee0d2093"
}

function doubleClick(){
    var sample;
    sample = document.getElementById("doublec")
    sample.style.backgroundColor= "#f8f9fa"
    sample.style.color = "#28a745"
    sample.style.width = "200px"
    sample.style.height = "100px"


}
function clicking(){

    var click;
    click = "you just clicked"
    document.getElementById("clicked").innerHTML=click
    


}









