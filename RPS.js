
var userChoice = prompt('Choose Rock, Paper or Scissors. It Does not matter.');
userChoice = userChoice.toLowerCase();

if (userChoice === 'rock' || userChoice === 'paper' 
    || userChoice === 'scissors') {
    document.write('You picked... ' + userChoice + '<br />' )
} else {
    document.write('Really dude...? Seriously? Choose something else... ')
}

var computerPick = Math.random();
var computerChoice = 'scissors';
if (computerPick < 0.34) {
    computerChoice = 'rock';
} else if (computerPick <= 0.66 ) {
    computerChoice = 'paper';
} 

document.write('The computer picked ' + computerChoice);

var compare = funtion (choice1,choice2) 
   if (choice1 === choice2) 
      return 'Its a Tie! Congrats~ try again...';
   {
  if (choice1 === 'rock') {
     if (choice2 === 'paper') {
        return 'The Computer won! HA HA!'
     } else {
        return 'You won! Nice shot Kiddo!';
