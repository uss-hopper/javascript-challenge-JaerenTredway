/*
* JavaScript Challenge
 */
function display() {
    alert("click me activated");
}
 
function exofont() {
        alert("exo called");    
}
    
 let target           = document.getElementById('target');
 let textColor        = document.getElementById('text-color');
 let exo              = document.getElementById('exo');
 let michroma         = document.getElementById('michroma');
 // const #             = document.getElementById('#');
 // const #             = document.getElementById('#');
 // const #             = document.getElementById('#');
 // const #             = document.getElementById('#');
 // const #             = document.getElementById('#');
        
 
 michroma.addEventListener("click", function(){target.style.color="blue";});

    //michroma.onclick = alert("window onload/ michroma onclick");
