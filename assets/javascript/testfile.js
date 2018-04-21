var guesses = 0;
    var guessedLetters = [];
    var randomWord = "";
    var roundsPlayed = 0;
    var blankedWord = [];
    var globalGuesses = 0;

    alert("Are you ready to take on this mission? Press the button for your first word.");

    generateRandomWord();
    eachRound();

    function generateRandomWord(){
        var guessWord = ["falcon", "eagle", "rocket", "target", "raptor", "altitude", "strafing", "warthog", "lightning", 
            "bingo", "eject", "sortie", "blind", "exercise", "brief", "flug", "ipug", "cas", "deployment", "egress",
            "kill", "sead", "hornet", "runway", "weather", "visor", "helmet", "fingertip", "formation",
            "tactical", "airspeed", "sim", "flare", "bank", "tally", "break", "roll", "jink", "afterburner", 
            "dive", "mach", "climb", "supersonic"];
            randomWord = guessWord[Math.floor(Math.random()*guessWord.length+1)];
        var randomWordArray = randomWord.split("");
        for (i = 0; i < randomWord.length; i++){
             blankedWord[i]= " _ ";
        };
        var wordBlanksVisible = blankedWord.join("");
        document.getElementById("word-Display").textContent = wordBlanksVisible;
        guesses = randomWord.length + 5; //makes the number of guesses proportionate to word length
        document.getElementById("guesses-remain").textContent = guesses.toString();
        roundsPlayed++;
        console.log(randomWord);
    };

    function eachRound(){
        document.onkeyup = function(event) {
            var userInput = event.key.toLowerCase();
            var validKeys = "abcdefghijklmnopqrstuvwxyz";
            var wordBlanksVisible = blankedWord.join("");
            var guessLetInd = guessedLetters.indexOf(userInput);
        
            console.log(guessedLetters);
        if (guesses > 0) { 
            if (guessLetInd > -1){
                alert("You already used this letter. Choose a different letter.");
            } 
            else{
                if (validKeys.includes(userInput)){
                             
                    if (randomWord.includes(userInput)) {
                        console.log("it worked"); //remove before turning in ********
                        for (i=0 ; i < randomWord.length ; i++){
                            if(randomWord[i] === userInput){
                                blankedWord[i] = userInput;
                                wordBlanksVisible = blankedWord.join("");
                                document.getElementById("word-Display").textContent = wordBlanksVisible;
                               
                                console.log(wordBlanksVisible);
                            }
                        }
                     
                        if (document.getElementById("word-Display").textContent === randomWord){
                            for (i=0 ; i < randomWord.length ; i++){
                                if(randomWord[i] === userInput){
                                    blankedWord[i] = userInput;
                                    wordBlanksVisible = blankedWord.join("");
                                    document.getElementById("word-Display").textContent = wordBlanksVisible;
                                    console.log(wordBlanksVisible);
                                }
                            }
                            alert("You win!");                          
                            newWordRound();
                            
                        }
                    }
            
                // If the user has guesses left, the input is valid, the letter has not been guessed, 
                //but the letter is not included in the random word    
                    else {
                        guesses--;
                        document.getElementById("guesses-remain").textContent = guesses.toString();
                        guessedLetters.push(" " + userInput);
                        globalGuesses = guesses;
                    }
                }
            // If the user has guesses left, but has already guessed the letter
                else {
                    alert("Choose only letter keys.");
                }
            }
            
            }
        else {
            loseSequence();

        }
        document.getElementById("letters-guessed").textContent = guessedLetters;

        }
    };

    function loseSequence(){
        alert("You are out of time and options. You must eject from the aircraft.");                           
        newWordRound();

    };

    function newWordRound(){
        guesses = 0;
        guessedLetters = [];
        blankedWord = [];                            
        randomWord = "";
        generateRandomWord();
        eachRound();
        console.log(randomWord);
    };

