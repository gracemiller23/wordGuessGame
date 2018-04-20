
function newWordRound(){
    for (i = 0; i < randomWord.length; i++){
        blankedWord[i]= " _ ";
    }
    var wordBlanksVisible = blankedWord.join("");
    document.getElementById("word-Display").textContent = wordBlanksVisible;
    console.log(randomWord);
    };

alert("Press the 'New Word' button to start a new game!");

var guessWord = ["falcon", "eagle", "rocket", "target", ];
var randomWord = guessWord[Math.floor(Math.random()*guessWord.length+1)];
var randomWordArray = randomWord.split("");
var blankedWord =[];
 
//variable to store guessed letters
var guessedLetters = [];
var guesses = randomWord.length + 5; //makes the number of guesses proportionate to word length

//capture the letters that the user has pressed in the letters-guessed id div
document.getElementById("guesses-remain").textContent = guesses.toString();

//function to take in and analyze user guesses through key presses
document.onkeyup = function(event) {

    var userInput = event.key;
    var validKeys = "abcdefghijklmnopqrstuvwxyz";
    var wordBlanksVisible = blankedWord.join("");
    
if (guesses > 0){  
    console.log(guessedLetters);
    if (guessedLetters.indexOf(userInput) > -1){
        alert("You already used this letter. Choose a different letter.");
    } 
    else{
        if (validKeys.includes(userInput)){
            //If the user has guesses left, the input is valid, the letter has not been guessed 
            //and the letter is included in the random word.          
            if (randomWord.includes(userInput)) {
             console.log("it worked"); //remove before turning in ********
                for (i=0 ; i < randomWord.length ; i++){
                    if(randomWord[i] === userInput){
                        blankedWord[i] = userInput;
                        wordBlanksVisible = blankedWord.join("");
                        document.getElementById("word-Display").textContent = wordBlanksVisible;
                       
                        console.log(wordBlanksVisible)
                    }
                   
                }
                guessedLetters.push(" " + userInput);

                if (document.getElementById("word-Display").textContent === randomWord){
                    for (i=0 ; i < randomWord.length ; i++){
                        if(randomWord[i] === userInput){
                            blankedWord[i] = userInput;
                            wordBlanksVisible = blankedWord.join("");
                            document.getElementById("word-Display").textContent = wordBlanksVisible;
                           
                            console.log(wordBlanksVisible)
                        }
                       
                    }
                    alert("You win!");
                }
            }
    
        // If the user has guesses left, the input is valid, the letter has not been guessed, 
        //but the letter is not included in the random word    
            else {
                guesses--;
                document.getElementById("guesses-remain").textContent = guesses.toString();
                guessedLetters.push(" " + userInput);
            }
}
    // If the user has guesses left, but has already guessed the letter
        else {
            alert("Choose only letter keys.");
        }
    }
}
else {
    alert("You are out of time and options. You must eject from the aircraft.");
}
document.getElementById("letters-guessed").textContent = guessedLetters;








    //If the user wins the game
    //else if (guesses > 0 && wordBlanksVisible === randomWord){
    //    alert("You hit your target!");
    //    wins++;
    //}
    //If the user runs out of guesses
    
    
    };

     



//6. When the user guesses all letters, we need to run a win sequence that plays a sound for winning.
// -----if the user loses we need to run a lose sequence that plays a sound for losing.
// -----end loop.
//7. We need to track how many words the user has guessed correctly and incorrectly.


//loop for guessing based on decreasing value of "guessesLeft" variable, 
//based on keyboard event of letter being typed
//add sounds for correct and incorrect letters, plus gif and sound for right word guessed


