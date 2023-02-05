let score = 0

var score_text = document.getElementById("score")

var question1_button1 = document.getElementById("question1_option1");
var question1_button2 = document.getElementById("question1_option2");
var question1_button3 = document.getElementById("question1_option3");

var question2_button1 = document.getElementById("question2_option1");
var question2_button2 = document.getElementById("question2_option2");
var question2_button3 = document.getElementById("question2_option3")

var question3_button1 = document.getElementById("question3_option1")
var question3_button2 = document.getElementById("question3_option2")
var question3_button3 = document.getElementById("question3_option3")

var question4_button1 = document.getElementById("question4_option1")
var question4_button2 = document.getElementById("question4_option2")
var question4_button3 = document.getElementById("question4_option3")

question1_button1.addEventListener("click", question1_correct);
question1_button2.addEventListener("click", question1_wrong)
question1_button3.addEventListener("click", question1_correct)

function question1_correct() {
  score += 1;;
  document.getElementById("question1").style.visibility = "hidden";
  document.getElementById("question2").style.visibility = "visible";
  document.title = "Question2"
  score_text.innerHTML = "Score: " + score
}

function question1_wrong() {
  ;
  document.getElementById("question1").style.visibility = "hidden";
  document.getElementById("question2").style.visibility = "visible";
  document.title = "Question2"
  score_text.innerHTML = "Score: " + score
}

question2_button1.addEventListener('click', question2_correct);
question2_button2.addEventListener('click', question2_wrong);
question2_button3.addEventListener('click', question2_wrong);

function question2_correct() {
  score += 1;;
  document.getElementById("question2").style.visibility = "hidden";
  document.getElementById("question3").style.visibility = "visible";
  document.title = "Question3"
  score_text.innerHTML = "Score: " + score
}

function question2_wrong() {
  
  document.getElementById("question2").style.visibility = "hidden";
  document.getElementById("question3").style.visibility = "visible";
  document.title = "Question3"
  score_text.innerHTML = "Score: " + score
}

question3_button1.addEventListener('click', question3_wrong)
question3_button2.addEventListener('click', question3_wrong)
question3_button3.addEventListener('click', question3_correct)

function question3_correct() {
  score += 1
  document.getElementById("question3").style.visibility = "hidden";
  document.getElementById("question4").style.visibility = "visible";
  document.title = "Question4"
  score_text.innerHTML = "Score: " + score
}

function question3_wrong() {
  document.getElementById("question3").style.visibility = "hidden";
  document.getElementById("question4").style.visibility = "visible";
  document.title = "Question4"
  score_text.innerHTML = "Score: " + score
}

question4_button1.addEventListener('click', question4_wrong)
question4_button2.addEventListener('click', question4_wrong)
question4_button3.addEventListener('click', question4_correct)

function question4_wrong() {
  document.getElementById("question4").style.visibility = "hidden";
  document.title = "Question4"
  score_text.innerHTML = "Score: " + score
  localStorage.setItem("quiz_score", score)
}
function question4_correct() {
  score += 1
  document.getElementById("question4").style.visibility = "hidden"
  document.title = "hi"
  score_text.innerHTML = "Score: " + score
  localStorage.setItem("quiz_score", score)
}