'strict mode'

//Identifying elements I would be adjusting 
// document.querySelector('.score').textContent = 15;
// document.querySelector('.message').textContent = 'start typing.';
// document.querySelector('.number').textContent = '3';
// document.querySelector('.again').textContent = 'refresh';


//Giving the secret number a random value (I will make it a known value during the tests)

let number = Math.trunc(Math.random() * 20) + 1; //random
// let number = 10; //fixed for testing
// console.log(number)
// --------------------------------------------------------

//We will create an initial value for the score. This will either increase or decrease during the game
let score = 10;
document.querySelector('.score').textContent = score;

//Now for the highScore. We will store it in a variable
let highScore = 0; //its zero because it always begins with zero and only changes when we win

//We need to create an event to the check button once it is clicked
document.querySelector('.check').addEventListener('click', function(){
    //in this, we will add/create functions for every scenario that will happen when we click the check button
    
    //The input box is where the number will be typed in. We need to be able to get that number and compare it to different situations that could/would occure in the game
    //to get the value of whatever number in the input field
    let guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    //The first scenario to check is an empty input box // No answer. i.e if there is no number or guess is empty
    if(!guess) {
        //insted of cl, we would directly modify the texts in the game
        document.querySelector('.message').textContent = 'Please Type a Number 😟'; //NICE
    } 

    //The next scenario would be if there is a win. i.e the guess is equal to the secret number
    else if(guess === number){
        document.querySelector('.message').textContent = 'Great Guess!😀'; //NICE

        //we also want the score to increase when the guess is correct. We will create a variable for initial score
        // score++;
        // document.querySelector('.score').textContent = score;
        //apparently we do not need this for this kind of game

        //we also want the brain logo to show the number when it is correct
        document.querySelector('.number').textContent = number;

        //we will also disable the input field and the check button
        document.querySelector('.check').disabled = true; 
        document.querySelector('.guess').disabled = true; 

        //For a fun css, I want some styles to also change
        document.getElementById("again").style.backgroundColor = "#8ff473";
        document.getElementById("again").style.color = "#333";
        document.getElementById("again").textContent = 'Go Again!🤭';
        document.querySelector('.number').textContent = number;


        //Whenever we win the game, the highscore will be updated if it is higher than the previous
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    //The next scenario would be if the guess is not equal to the number
    else if(guess !== number){
        // document.querySelector('.message').textContent = guess > 20  ? '1 to 20!🙄' : ''; //NICE
        // document.querySelector('.message').textContent = guess > number / 2 ? 'almost there!😁' : ''; //NICE
        // document.querySelector('.message').textContent = guess > number ? 'Woah! Too high!😥' : 'Too low!🙄'; //NICE
        if (guess > 20) {
            document.querySelector('.message').textContent = '1 to 20!🙄';
          } else if (guess >= number - 2 && guess <= number + 2) {
            document.querySelector('.message').textContent = 'almost there!😁';
          } else if (guess > number + 2) {
            document.querySelector('.message').textContent = 'Woah! Too high!😥';
          } else if (guess < number - 2){
            document.querySelector('.message').textContent = 'Too low!🙄';
          }
          //I HAVE NOW SHOWN THAT I AM A GENIUS!!
        

        //we also want the score to decrease when the guess is wrong. We will create a variable for initial score
        // score = score - 1; //We can simplify this
        score--;
        document.querySelector('.score').textContent = score;

        //for the deduction, we want a limit. So certain things will happen when the score gets to 0. To mark the end of the game
        if (score === 0) {
            document.querySelector('.message').textContent = "Oooh,try Again 🤕";
            //we will also disable the input field and the check button
            document.querySelector('.check').disabled = true; 
            document.querySelector('.guess').disabled = true; 

            //For a fun css, I want some styles to also change
            document.getElementById("again").style.backgroundColor = "#bb1818";
            document.getElementById("again").style.color = "#f1f1f1";
            document.getElementById("again").textContent = 'TRY AGAIN PERHAPS 😅';
            document.querySelector('.number').textContent = number;
        }

    }

})
//NOW I AM CLOSE TO BECOMING A GAME MASTER.


//Next, I want to be able to reload the page when the user clicks the again button  

document.querySelector('.again').addEventListener('click', function () {
    score = 10
    number = Math.trunc(Math.random() * 20) + 1; //random
    console.log(number)

    //for the edited texts
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '🧠';
    document.getElementById("again").textContent = 'NEW GAME';

    //For a fun css, I want some styles to also change
    document.getElementById("again").style.backgroundColor = "#f1f1f1";
    document.getElementById("again").style.color = "#333";

    //we will also disable the input field and the check button
    document.querySelector('.check').disabled = false; 
    document.querySelector('.guess').disabled = false; 

})

//GENIUS
//GAME MASTER
//SQUID GAME KING
//TIME TO GO LIVE