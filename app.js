let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissor_div = document.getElementById("S");
function getCompChoice() {
  const choices = ["R", "P", "S"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter === "R") return "Rock";
  if (letter === "P") return "Paper";
  if (letter === "S") return "Scissor";
}
function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(user)}${"user"
    .fontsize(3)
    .sub()} beat ${convertToWord(comp)}${"comp".fontsize(3).sub()} You Win!`;
}
function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(comp)}${"comp"
    .fontsize(3)
    .sub()} beat ${convertToWord(user)}${"user".fontsize(3).sub()}  You Lost..`;
}
function draw(user, comp) {
  result_div.innerHTML = `${convertToWord(comp)}${"comp"
    .fontsize(3)
    .sub()} equals ${convertToWord(user)}${"user"
    .fontsize(3)
    .sub()}  Its a Draw`;
}
function game(userChoice) {
  const computerChoice = getCompChoice();
  switch (userChoice + computerChoice) {
    case "PR":
    case "SP":
    case "RS":
      win(userChoice, computerChoice);
      break;
    case "RP":
    case "PS":
    case "SR":
      lose(userChoice, computerChoice);
      break;
    case "RR":
    case "PP":
    case "SS":
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener("click", function() {
    game("R");
  });
  paper_div.addEventListener("click", function() {
    game("P");
  });
  scissor_div.addEventListener("click", function() {
    game("S");
  });
}
main();
