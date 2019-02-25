/*
* JavaScript Challenge
 */

let target = document.getElementById('target');

//exo.addEventListener('click', hide, false);

function cursivefont() {
   document.getElementById('target').style.fontFamily = "cursive";
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

// function highlightWord() {
//    let wordToHighlight = document.getElementById("userInput").value;
//    let newParagraph = document.getElementById("target").innerHTML.replace(/wordToHighlight/g, 'Jerk');
//    document.getElementById("target").innerHTML = newParagraph;
//    alert(wordToHighlight);
// }

function deleteWord() {
   let newParagraph = document.getElementById("target").innerHTML.split(' ').slice(0, -1).join(' ');
   document.getElementById("target").innerHTML = newParagraph;
}

function anagram(word1, word2){
   return word1.split("").sort().join("") === word2.split("").sort().join("");
}

function reset() {
   document.querySelector('#target').removeAttribute('style');
}

window.addEventListener('load', function() {
   console.log('All assets are loaded')
});


