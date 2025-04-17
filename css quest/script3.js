var input=document.querySelector("input");
var ball=document.querySelector("#ball");
var btnsubmit=document.querySelector("button");
var popup=document.querySelector("#popup");
var btnnext_level=document.querySelector("#next_level");


btnsubmit.addEventListener("click",function(){
    var inputval =input.value;

    if(inputval == "transform:translateX(10vh)"){
        ball.classList.add("ballafter")

        setTimeout(function () {
            popup.style.opacity = "1";
        }, 1000); 

    }
})

btnsubmit.addEventListener("mouseenter",function(){
    btnsubmit.classList.add("submit_mouseenter");
})
btnsubmit.addEventListener("mouseleave", function() {
    btnsubmit.classList.remove("submit_mouseenter");
});

btnnext_level.addEventListener("click",function(){
    
    window.location.href="index.html";
})

