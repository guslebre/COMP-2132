function startGame(){
    getRandomWord();
    displayHiddenWord();
    inputField.disabled = false;
    updatePicture();
}
function getRandomWord() {
    const keys = Object.keys(wordCollection);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    gameWord = randomKey;
    gameWord = gameWord.toUpperCase();
    wordHint = wordCollection[randomKey]
    console.log(gameWord);
    console.log(wordHint);
    wordLetters = gameWord.split("");
    console.log(wordLetters)
    h2ElementsInDiv = wordField.getElementsByTagName("h2")
    console.log(h2ElementsInDiv)
    hintField.textContent = `Hint: ${wordHint}`;
}

function displayHiddenWord(){
    for(let i =0; i< wordLetters.length; i++){
        const h2Element = document.createElement("h2");
        h2Element.textContent = wordLetters[i];
        wordField.appendChild(h2Element);
    }
}

function AddLettersAlreadyGuessed(){
    const glet = document.createElement("h2");
    glet.textContent = letter;
    guessedLettersDiv.appendChild(glet);
}

function letterWasGuessed(){
    letter = inputField.value.toUpperCase();
    lettersGuessed.push(letter);
    if(wordLetters.includes(letter))
    {
        for (let i = 0; i< h2ElementsInDiv.length; i++)
        {
            if (h2ElementsInDiv[i].textContent == letter)
            {
                h2ElementsInDiv[i].style.color = "black";
                correctLetters++;
                if(correctLetters == h2ElementsInDiv.length)
                {
                    toptext.textContent = "You Won!"
                    toptext.style.color = "black";
                    gamewontext.style.color = "black";
                    inputField.disabled = true;
                }
            }
        }
    }
    else
    {
        numberOfWrongGuesses++;
        updatePicture();
        if (numberOfWrongGuesses == 6)
        {
            toptext.textContent = "Game Over";
            toptext.style.color = "black";
            gamewontext.style.color = "black";
            inputField.disabled = true;
        }
    }
    AddLettersAlreadyGuessed();
    inputField.value = "";
    toggleButtonState();
}

function updatePicture(){
    hangmanpic.src = `./images/hangman-${numberOfWrongGuesses}.png`;
}



function toggleButtonState() {
    if (inputField.value.trim() === "" || lettersGuessed.includes(inputField.value.toUpperCase())) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

inputField.addEventListener("input", toggleButtonState);


function resetGame(){
    toptext.style.color = "transparent";
    gamewontext.style.color = "transparent";
    correctLetters = 0;
    numberOfWrongGuesses = 0;
    lettersGuessed = [];
    inputField.value = "";
    submitButton.disabled = true;
    wordField.innerHTML = "";
    guessedLettersDiv.innerHTML = "";
    startGame();
}
