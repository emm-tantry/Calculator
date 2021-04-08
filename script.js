let heading;
let executeButton;
let outputParagraph;
let outputDiv;
let inputElement1;
let inputElement2;
let q1;
let q2;
let randomdate = ["Today","Tomorrow","Next month","Next year","In June"];
let randomadj = ["good", "wonderful", "amazing", "fantastic"]

window.addEventListener('DOMContentLoaded', function() {

  heading = document.getElementById("title");
  executeButton = document.getElementById("fortune-button");
  outputParagraph = document.getElementById("outputText");
  outputDiv = document.getElementById("fortune-output");
  inputElement1 = document.getElementById("name-input");
  inputElement2 = document.getElementById("fortune-input");
  q1 = document.getElementById("question1");
  q2 = document.getElementById("question2");
  executeButton.addEventListener("click", input);

});

function input () {
let currentInputText = inputElement1.value;
let currentInputText2 = inputElement2.value;
let date = randomdate[Math.floor (Math.random() * randomdate.length)];
let adjective = randomadj[Math.floor (Math.random() * randomadj.length)];

var r = Math.random() * 50 + 80;
var g = Math.random() * 50 + 130;
var b = Math.random() * 50 + 180;

let colorString = "rgb(" + r + "," + g + "," + b + ")";
let colorShadow = "rgb(" + (r-50) + "," + (g-60) + "," + (b-70) + ")";

heading.style.color = "rgb(" + (r-50) + "," + (g-40) + "," + (b-30) + ")";
heading.style.textShadow = "0px 0px 10px " + colorShadow;
heading.classList.toggle("shadow");
q1.style.color = colorString;
q2.style.color = colorString;

var re = Math.random() * 50 + 100;
var gr = Math.random() * 50 + 150;
var bl = Math.random() * 50 + 200;

let boxColor = "rgb(" + re + "," + gr + "," + bl + ")";
outputDiv.style.backgroundColor = boxColor;
outputDiv.style.borderColor = "rgb(" + (re-50) + "," + (gr-40) + "," + (bl-30) + ")";

outputParagraph.innerText = "Hi " + currentInputText + ". " + date + " you will have a very " + currentInputText2 + ", " + adjective + " day.";
document.body.style.backgroundColor = "rgb(" + (r+70) + "," + (g+80) + "," + (b+90) + ")";
}
