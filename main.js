/*
* JavaScript Challenge
 */

let target = document.getElementById('target');
// let textColor        = document.getElementById('text-color');
// let exo              = document.getElementById('exo');
// let michroma         = document.getElementById('michroma');
// const #              = document.getElementById('#');
// const #              = document.getElementById('#');
// const #              = document.getElementById('#');
// const #              = document.getElementById('#');
// const #              = document.getElementById('#');

//exo.addEventListener('click', hide, false);

function cursivefont() {
   document.getElementById("target").style.fontFamily = "cursive";
}

function michromafont() {
   document.getElementById("target").style.fontFamily = "Michroma";
}

function purplefont() {
   document.getElementById("target").style.color = "Purple";
}

function highlight() {
   document.getElementById("target").style.backgroundColor = "yellow";
}

function unhighlight() {
   document.getElementById("target").style.backgroundColor = "white";
}

function findAndReplaceCat() {
   let newParagraph = document.getElementById("target").innerHTML.replace(/Cat/g, 'Jerk').replace(/cat/g, 'jerk');
   console.log(newParagraph);
   document.getElementById("target").innerHTML = newParagraph;
   }

window.addEventListener('load', function() {
   console.log('All assets are loaded')
});


