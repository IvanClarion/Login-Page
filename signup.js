
document.getElementById("sign-up").addEventListener("click", signPage);
function signPage(){
    var element = document.getElementById("sign-content");
    if (element.style.display == "none"){
        element.style.transition = "1.0s"
        element.style.opacity = "0";
    }else{
        element.style.display = "block";
        element.style.transition = "1.0s"
        element.style.opacity = "1";
    }
}