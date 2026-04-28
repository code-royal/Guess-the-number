var guessInput = document.getElementById('guessInput');
var checkBtn = document.getElementById('check');
var restartBtn = document.getElementById('restart');
var resultDisplay = document.getElementById('result');
var recents = document.getElementById('recents');

var randomNum = Math.floor(Math.random() * 100) + 1; //initializes random number from 1 to 100

// event handling for check button
checkBtn.addEventListener('click',()=>{
    var guess = Number(guessInput.value.trim());

    if(guess<1 || guess>100){
        resultDisplay.textContent = "Enter numbers from 1 to 100."; //if the user enters invalid numbers
        resultDisplay.style.color = "#c81d25";
    }
    else if(guess === randomNum){
        recents.style.color = "#008000";
        recents.innerHTML += `${guess}<br>`;
        resultDisplay.textContent = "Congrats!!🥳 You guessed it right."; //if the user guessed it right
        resultDisplay.style.color = "#008000";
        guess.value = "";
        checkBtn.style.display = "none"; //hides check button
        restartBtn.style.display = "inline-block"; //unhides restart button
    }
    else {
        recents.style.color = "#c81d25";
        recents.innerHTML += `${guess}<br>`;
        resultDisplay.textContent = guess < randomNum ? "Guess a higher number!!" : "Guess a lower number!!";
        resultDisplay.style.color = "#c81d25";
        guess.value = "";
    }

    guessInput.value = "";  //resets the input field
    guessInput.focus(); //keeps the focus on the input field
})

restartBtn.addEventListener('click', ()=>{
        randomNum = Math.floor(Math.random() * 100) + 1;
        resultDisplay.textContent = "";
        restartBtn.style.display = "none"; //hides restart button
        checkBtn.style.display = "inline-block"; //unhides check button
        guessInput.focus();
        recents.textContent = "";
    })