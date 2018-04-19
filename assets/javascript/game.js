
var wins = 0;

alert("Press the 'New Word' button to start a new game!");

//Words for people to guess. 
var guessWord = ["falcon", "eagle", "rocket", "target"];

var randomWord = guessWord[Math.floor(Math.random()*guessWord.length)];
//Creates a way for users to get a word from the array randomly and present 
//blanks in place of its letters to the user.
//Function for user to start the game by pressing the button
var blankedWord =[];

function newWordRound(){
    for (i = 0; i < randomWord.length; i++){
        blankedWord[i]= " _ ";
    }
    var wordBlanksVisible = blankedWord.join("");
    document.getElementById("word-Display").textContent = wordBlanksVisible;
    
    };

 
//variable to store guessed letters
var guessedLetters = [];
var guesses = randomWord.length + 5; //makes the number of guesses proportionate to word length

//capture the letters that the user has pressed in the letters-guessed id div
document.getElementById("guesses-remain").textContent = guesses;

//function to take in and analyze user guesses through key presses
document.onkeyup = function(event) {

    var userInput = event.key;
    var validKeys = "abcdefghijklmnopqrstuvwxyz";
    var wordBlanksVisible = blankedWord.join("");//there may be an issue later with using this variable due to
    //scope - does it need to be repeated in this function or not?

   //If the user has guesses left, the input is valid, the letter has not been guessed 
   //and the letter is included in the random word.          
    if (guesses > 0 && validKeys.includes(event.key) && randomWord.includes(event.key) && 
        !guessedLetters.includes(event.key)) {
         console.log("it worked") //remove before turning in ********
            for(i = 0; i < randomWord.length ; i++){
                var letterIndex = i;
                var correctLetter = randomWord.charAt(i);
                if (event.key == correctLetter){
                   wordBlanksVisible.replace(wordBlanksVisible.charAt(i), randomWord.charAt(i));
                }
            } //ends for loop
    }
    // If the user has guesses left, the input is valid, the letter has not been guessed, 
    //but the letter is not included in the random word    
    else if (guesses > 0 && validKeys.includes(event.key) && !guessedLetters.includes(event.key) && 
    !randomWord.includes(event.key)){
            guesses = guesses--;
            guessedLetters.push(" " + userInput);
            document.getElementById("letters-guessed").textContent = guessedLetters;
            }
    // If the user has guesses left, but has already guessed the letter
    else if (guesses > 0 && validKeys.includes(event.key) && guessedLetters.includes(event.key)) {
        alert("Don't choose the same letter twice!");
    }
    //If the user wins the game
    else if (guesses > 0 && wordBlanksVisible === randomWord){
        alert("You hit your target!");
        wins++;
    }
    //If the user runs out of guesses
    else if (guesses === 0) {
        alert("You are out of time and options. You must eject from the aircraft.");
    }
    
    };

     



//6. When the user guesses all letters, we need to run a win sequence that plays a sound for winning.
// -----if the user loses we need to run a lose sequence that plays a sound for losing.
// -----end loop.
//7. We need to track how many words the user has guessed correctly and incorrectly.


//loop for guessing based on decreasing value of "guessesLeft" variable, 
//based on keyboard event of letter being typed
//add sounds for correct and incorrect letters, plus gif and sound for right word guessed


