const wordCollection = {
    "apple": "A popular fruit that keeps the doctor away.",
    "chair": "Something you sit on.",
    "river": "A natural stream of water flowing towards the sea.",
    "cloud": "Often found in the sky, sometimes brings rain.",
    "book": "Can contain stories or information on various topics.",
    "clock": "Tells you the time but doesn't speak.",
    "pencil": "A tool for writing that can be erased.",
    "dog": "Commonly known as man's best friend.",
    "garden": "A place where plants and flowers grow.",
    "cup": "Used to drink hot beverages, often paired with a saucer.",
    "shirt": "A piece of clothing worn on the upper body.",
    "pillow": "Soft and supportive, usually found in beds.",
    "computer": "A device used to browse the internet and play games.",
    "candle": "Gives light, but slowly disappears.",
    "bridge": "Helps you cross from one side to another, often over water.",
    "window": "Lets in light and fresh air when open.",
    "sand": "Common at beaches and deserts.",
    "map": "Shows you the way, but isn't GPS.",
    "star": "Twinkles at night in the sky, far, far away.",
    "key": "Opens doors, but not every lock."
};

let gameWord;
let wordLetters = [];
let wordHint;
let lettersGuessed = [];
let h2ElementsInDiv;
let wordField = document.getElementById("wordsDiv");
const inputField = document.getElementById("Oneletter");
const submitButton = document.getElementById("submitLetter");
const hintField = document.getElementById("hint");
submitButton.disabled = true;
guessedLettersDiv = document.getElementById("guessedLettersDiv");
let GameFinished = false;
let hangmanpic = document.getElementById("hangpic");
let numberOfWrongGuesses = 0;
let gameOverText = document.getElementById("gameOver");
let gamewontext = document.getElementById("won");
let correctLetters = 0;