//open quiz//
const button = document.getElementById("buttonquiz");
button.onclick = start;

let fieldsetquiz1 = document.getElementById("quizstart");
let startq = document.getElementById("idform")

function start() {
  if (startq.style.display === "none" ||    startq.style.display === "") {
    startq.style.display = "block";
    fieldsetquiz1.style.display = "flex";
  } 
}
//first question//
const buttonnext1 = document.getElementById("next1");
buttonnext1.onclick = q1next;

let question2 = document.getElementById("question2");

function q1next() {
  if (question2.style.display === "none" || question2.style.display === "") {
    question2.style.display = "flex";
    fieldsetquiz1.style.display = "none";
  } else {
    question2.style.display = "none";
    fieldsetquiz1.style.display = "flex";
  }
}
//second question//
const buttonnext2 = document.getElementById("next2");
buttonnext2.onclick = q2next;
const buttonprevious2 = document.getElementById("previous2");
buttonprevious2.onclick = q2previous;

function q2previous(){
  if (question3.style.display === "none" ||    question3.style.display === "") {
    fieldsetquiz1.style.display = "flex";
    question2.style.display = "none";
  } else {
    fieldsetquiz1.style.display = "none";
    question2.style.display = "flex"
  }
}

let question3 = document.getElementById("question3");

function q2next() {
  if (question3.style.display === "none" || question3.style.display === "") {
    question3.style.display = "flex";
    question2.style.display = "none";
  } else {
    question3.style.display = "none";
    question2.style.display = "flex";
  }
}

//question 3//