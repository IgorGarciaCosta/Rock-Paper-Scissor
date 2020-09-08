let userScore =0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".socre-board");
const result_p = document.querySelector(".result>p");//get the p tag insite result div
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()*3);//number between 0 and 3
  return choices[randomNumber];
}

function convertToWord(letter){
  if(letter == "r") return "Rock";
  if(letter == "s") return "Scissors";
  return "Paper";
}

function win(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(()=> userChoice_div.classList.remove('green-glow'),300);
}

function lose(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`;
  userChoice_div.classList.add('red-glow');
  setTimeout(()=> userChoice_div.classList.remove('red-glow'),300);

}

function draw (userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} equals ${convertToWord(userChoice)}${smallUserWord}. It's a draw.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(()=> userChoice_div.classList.remove('gray-glow'),300);

}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice+computerChoice){
//user wins situations
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
//user loss situations
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
//draw
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', ()=>game("r"));
  paper_div.addEventListener('click', ()=>game("p"));
  scissors_div.addEventListener('click', ()=>game("s"));
}

main();
