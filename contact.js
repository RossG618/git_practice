var option = document.getElementById("cont-drop");


function contact(){
 option.classList.add("d-flex");
}

function out(){
    option.classList.remove("d-flex");
}
option.addEventListener('mousedown', out);