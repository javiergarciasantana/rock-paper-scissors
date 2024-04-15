function getComputerChoice() {
  var options = ["Rock","Paper","Scissors"];
  return options[Math.floor(Math.random() * (2 - 0) + 0)];
}

let user_counter = 0;
let comp_counter = 0;
for (let i = 0; i < 5; ++i) {
  let userInput = prompt("enter your choice");
  let comp_choice = getComputerChoice();
  
  console.log(comp_choice);
  if (comp_choice == userInput) {
    console.log(user_counter);
    ++user_counter;
    ++comp_counter;
    console.log("It's a tie!");
  } else if (userInput == "Rock" && comp_choice == "Paper") {
    ++comp_counter;
    console.log("I won!");
  } else if (userInput == "Rock" && comp_choice == "Scissors") {
    ++user_counter;
    console.log("You won!");
  } else if (userInput == "Paper" && comp_choice == "Rock") {
    ++user_counter;
    console.log("You won!");
  } else if (userInput == "Paper" && comp_choice == "Scissors") {
    ++comp_counter;
    console.log("I won!");
  } else if (userInput == "Scissors" && comp_choice == "Paper") {
    ++user_counter;
    console.log("You won!");
  } else if (userInput == "Scissors" && comp_choice == "Rock") {
    ++comp_counter;
    console.log("I won!");
  }
}
console.log("\nComputer Wins:");
console.log(comp_counter);
console.log("\n");
console.log("User Wins:");
console.log(user_counter);
if (comp_counter == user_counter) {
  console.log("\nTie!");
}
