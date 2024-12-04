document.getElementById("sign-up").addEventListener("click", signUp);
function signUp(){
    var element = document.getElementById("form-content");
    if (element.style.display == "block"){
        element.style.transition = "0.5s"
        element.style.opacity = "1";
    }else{
        element.style.display = "none";
        element.style.transition = "0.5s"
        element.style.opacity = "0";
    }
}
document.getElementById("sign-up").addEventListener("click", imageTrans);
function imageTrans(){
    var element = document.getElementById("image");
    if (element.style.display == "block"){
        element.style.transition = "0.5s"
        element.style.opacity = "1";
    }else{
        element.style.display = "none";
        element.style.transition = "0.5s"
        element.style.opacity = "0";
    }
}

