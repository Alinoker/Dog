const button = document.getElementById("buttonquiz");
button.onclick = start;

let fieldsetquiz1 = document.getElementById("quizstart");

function start() {
  if (
    fieldsetquiz1.style.display === "none" ||
    fieldsetquiz1.style.display === ""
  ) {
    fieldsetquiz1.style.display = "block";
  } else {
    fieldsetquiz1.style.display = "none";
  }
}

const buttonnext1 = document.getElementById("next1");
buttonnext1.onclick = question1;

function question1() {
  let question2 = document.getElementById("question2");

  if (question2.style.display === "none" || question2.style.display === "") {
    question2.style.display = "block";
    fieldsetquiz1.style.display = "none";
  } else {
    question2.style.display = "none";
    fieldsetquiz1.style.display = "block";
  }
}
