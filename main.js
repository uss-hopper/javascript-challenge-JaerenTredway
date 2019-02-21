/*
* JavaScript Challenge
 */
 function display() {
    alert("click me activated");
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
        
function f1()
    {
       alert("exo called");    
    }

window.onload = () => {
    michroma.onclick = alert("window onload/ michroma onclick");
};