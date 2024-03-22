//Save all image src paths as variables
let diceImagePath = 'https://raw.githubusercontent.com/mdaniel70/Player/main/dice.009.png';
let dice1ImagePath = 'https://raw.githubusercontent.com/mdaniel70/3dShape-Dice/main/3dice1.png';
let dice2ImagePath = 'https://raw.githubusercontent.com/mdaniel70/3dShape-Dice/main/3dice2.png';
let dice3ImagePath = 'https://raw.githubusercontent.com/mdaniel70/3dShape-Dice/main/3dice3.png';
let dice4ImagePath = 'https://raw.githubusercontent.com/mdaniel70/3dShape-Dice/main/3dice4.png';
let dice5ImagePath = 'https://raw.githubusercontent.com/mdaniel70/3dShape-Dice/main/3dice5.png';
let dice6ImagePath = 'https://raw.githubusercontent.com/mdaniel70/3dShape-Dice/main/3dice6.png';
let lockImagePath = 'https://raw.githubusercontent.com/mdaniel70/Player/main/dice.007.png';
let unlockImagePath = 'https://raw.githubusercontent.com/mdaniel70/Player/main/dice.008.png';

//Save all necessary elements as variables
let dice1 = document.getElementById('dice1');
let rollButton = document.getElementById('roll-button');

let rollCount = document.getElementById('roll-counter');

//Function to determine random roll for each dice. Selects five random numbers. Checks if the dice has been locked, if not then it assigns the correlating dice image path for the random number to each dice.
const rollDice = () => {
  let randomNum1 = Math.floor(Math.random()*6);
  let randomNum2 = Math.floor(Math.random()*6);
  let randomNum3 = Math.floor(Math.random()*6);
  let randomNum4 = Math.floor(Math.random()*6);
  let randomNum5 = Math.floor(Math.random()*6);
  
 
  if (randomNum1 === 0) {
      dice1.src = dice1ImagePath;
    } else if (randomNum1 === 1) {
      dice1.src = dice2ImagePath;
    } else if (randomNum1 === 2) {
      dice1.src = dice3ImagePath;
    } else if (randomNum1 === 3) {
      dice1.src = dice4ImagePath;
    } else if (randomNum1 === 4) {
      dice1.src = dice5ImagePath;
    } else if (randomNum1 === 5) {
      dice1.src = dice6ImagePath;
    };

};

//Setting up to make the locks clickable. Will be executed when roll button is clicked. 


//Function to click the roll button. Applies rollDice function, increases counter to track which roll you are on, and make locks clickable only on the first and second rolls.
rollButton.onclick = () => {
  rollDice();
  counter++;
  rollCount.innerHTML = counter;
  if (counter === 1 || counter === 2) {
    lockArray.forEach(lockEvents);
  };
  if (counter === 3) {
    rollButton.style.display = 'none';
    lockArray.forEach(removeLockEvents);
  };
};

//Resets the game and puts everything back to default.
resetButton.onclick = () => {
  dice1.src = diceImagePath;
  dice2.src = diceImagePath;
  dice3.src = diceImagePath;
  dice4.src = diceImagePath;
  dice5.src = diceImagePath;
  lock1.src = unlockImagePath;
  lock2.src = unlockImagePath;
  lock3.src = unlockImagePath;
  lock4.src = unlockImagePath;
  lock5.src = unlockImagePath;
  rollCount.innerHTML = '';
  counter = 0;
  rollButton.style.display = 'inline-block';
};