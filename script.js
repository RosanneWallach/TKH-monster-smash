//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
  let playerName = prompt('Enter your name.');

  //declare a variable named playerHealth and set it equal to the number value 15
  let playerHealth = 15;

  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
  let monsterName = 'Vampire';

  //declare a variable named monsterHealth and set it equal to the number value 15
  let monsterHealth = 15;
  
class Fighter{
  constructor(healthPoints,attackMethod){
    this.healthPoints = healthPoints;
    this.attackMethod = attackMethod;
  }
  attack(Fighter){
    let attackPoints = randomNum(1,6);
    Fighter.healthPoints = Fighter.healthPoints - attackPoints;
    alert(`${this.name} attacked ${Fighter.name} and did ${attackPoints} damage! ${Fighter.name} has ${Fighter.healthPoints} health left!`)
  }
}

class Monster extends Fighter{
  constructor(name, healthPoints, attackMethod){
    super(healthPoints, attackMethod)
    this.name = name
  }
}

myMonster = new Monster("Vampire", 15, "hit")
class Hero extends Fighter{

  constructor(name, healthPoints, attackMethod){
    super(healthPoints,attackMethod)
    this.name = name
  }
}

myHero = new Hero (playerName, 15, "punch")




//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playerAttack(){
//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
let playerAttackPoints = randomNum(1, 6);
//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable

//15 - 1
monsterHealth = monsterHealth - playerAttackPoints;
  //use an alert with string template literals to tell the player: 
  // 1. player attacked monster 
  // 2. how much damage the player did 
  // 3. how much health the monster has 
  alert(`${playerName} Monster attacked player ${monsterName}. damage! ${playerAttackPoints} damage leaving the remaining ${monsterHealth} health points.`)
}


function monsterAttack(){
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
let monsterAttackPoints = random(1, 6);
  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
  // playerHealth = monsterAttackPoints;
  playerHealth = playerHealth - monsterAttackPoints;

  //use an alert with string template literals to tell the player: 
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
  alert(`${playerName} Monster attacked player ${monsterName}. damage! ${playerAttackPoints} damage leaving the remaining ${monsterHealth} health points.`)
}

function playRound() {
  //use randomNum to return either 0 or 1
  randomNum(0, 2);
  
  //0 = player goes first, 1 = monster goes first
  
  //use if/else to determine who goes first
  
  if ( randomNum(0, 2) === 0){
    playerAttack();
    if (monsterHealth > 0) {
      monsterAttack();
    }
  } else if (randomNum (0, 2) === 1) {
    monsterAttack();
    if (playerHealth > 0) {
      playerAttack();
    }
  }
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while( (monsterHealth > 0) &&  (playerHealth > 0)){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
   alert(`This is round ${roundNumber}, currently ${playerName} has ${playerHealth} health and ${monsterName} has ${monsterHealth} remaining.`);
 
   //call playRound inside the while loop
    playRound();
    // <0
    // while( (monsterHealth > 0) &&  (playerHealth > 0))
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if (playerHealth <= 0) {
    alert(`${monsterName} is the winner! You lose!`);
  } else if (monsterHealth <= 0){
    alert(`${playerName} is the winner! You win!`)
  }
}

//call playGame to start game
playGame();
//test test