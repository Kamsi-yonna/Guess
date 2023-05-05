'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '😱 You got that right!'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '5';
// for (let i = 0; i < 10; i++) {
//     console.log(document.querySelector('.number').textContent = `${i}`)
// } //JUST HAVING SOME FUN

// document.querySelector('.number').textContent = '22';

// document.querySelector('.score').textContent = '12';

// // console.log(document.querySelector('.guess').value);

//We use the value property to get the value of inputs
// document.querySelector('.guess').value = '23'
// console.log(document.querySelector('.guess').value);
// document.querySelector('.check').addEventListener('click', function (){
//     console.log(document.querySelector(".guess").value)

// })

//For the secret number, we need it to be random. We will create a function

// const number = Math.trunc(Math.random() * 20) + 1;
let number = 10;
console.log(number);
let score = 10;//halfway point for the game
document.querySelector('.score').textContent = score;
// document.querySelector('.number').textContent = number; //And it worked
let highScore = 0

//I want the bgcolor and font color to change when the user loses the game
// document.getElementById("again").style.backgroundColor;
// document.getElementById("again").style.color;
// document.getElementById("again").textContent;


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess, guess);

    //first thing to check would be for empty/falsy values. So before anything, There MUST be a value
    //if guess variable doesnt have a value (!guess)
    if(!guess) {
        document.querySelector('.message').textContent = 'Please type a Number 😟';
        // alert('Please type in a Number');
        
        
        //if the guess is equal to the secret number
    } else if (guess === number) {
        document.querySelector('.message').textContent = 'Great Guess!😀';
        //Now we want to add the score by a point when the user gets it right
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = number;

        

        //for the high score
        if(score > highScore){
            highScore = score;
            document.querySelector.apply('.highScore').textContent = highScore
        }
        
        
        //if guess is greater than secret Num
    } else if (guess > number && score > 0) {

        document.querySelector('.message').textContent = 'Too high 🙄';
        //Now we want to reduce the score by a point when the user gets it wrong
        // document.querySelector('.score').textContent = score--; WHY DOESNT THIS WORK?
        score--;
        document.querySelector('.score').textContent = score;
        
        //if guess is greater than secret Num
    } else if (guess < number && score > 0) {
        document.querySelector('.message').textContent = 'Too low 😫';
        //Now we want to reduce the score by a point when the user gets it wrong
        score--;
        document.querySelector('.score').textContent = score;
        

        //NOT WORKING TOO
    } else if (score === 0 ){
        document.querySelector('.message').textContent = 'Try again perhaps 😅';
        // document.querySelector('.score').textContent = 0;
        // document.getElementsByClassName('.again').style.backgroundColor = "lightblue";
        document.getElementById("again").style.backgroundColor = "#bb1818";
        document.getElementById("again").style.color = "#f1f1f1";
        document.getElementById("again").textContent = 'TRY AGAIN PERHAPS 😅';
        document.querySelector('.number').textContent = number;


    } 
    // else if (score === 20){
    //     document.querySelector('.message').textContent = 'You are fantastic! 🎉';
    // }

})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    number = 11;
        document.querySelector('.score').textContent = score;
        document.getElementById("again").style.backgroundColor = '#f1f1f1';
        document.getElementById("again").style.color = '#000';
        document.getElementById("again").textContent = 'NEW GAME';
        document.querySelector('.message').textContent = 'Start guessing...' ;
        document.querySelector('.number').textContent = '🧠' ;
        document.querySelector('.guess').value = '';

    // if (score = 20){
    //     document.querySelector('.score').textContent = score;
    //     document.getElementById("again").style.backgroundColor = '#f1f1f1';
    //     document.getElementById("again").style.color = '#000';
    //     document.querySelector('.message').textContent = 'Start guessing...' ;
    //     document.querySelector('.number').textContent = '🧠' ;


    // } else {
    //     document.querySelector('.score').textContent = score;
    //     document.getElementById("again").style.backgroundColor = '#ccc';
    //     document.getElementById("again").style.color = '#fff';
    //     document.querySelector('.message').textContent = 'S2222.' ;
    //     document.querySelector('.number').textContent = '222' ;

    // }
})