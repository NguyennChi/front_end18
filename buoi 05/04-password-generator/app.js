const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let btnGenerate = document.getElementById('btn-generate')
let result = document.getElementById('result')
let chkNumber = document.getElementById('checkbox-numbers');
let chkLetters = document.getElementById('checkbox-letters');
let chkSymbols = document.getElementById('checkbox-symbols');
// create pass 
btnGenerate.addEventListener('click', () => {
    // let item = LETTERS[Math.floor(Math.random() * LETTERS.length)];

    let ischeckNumber = chkNumber.checked;
    let ischeckLetter = chkLetters.checked;
    let ischeckSymbols = chkSymbols.checked;
    if (ischeckNumber) {
        let item = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
        result.innerText = item;
    }
    if (ischeckLetter) {
        let item = LETTERS[Math.floor(Math.random() * LETTERS.length)];
        result.innerText = item;
    }
    if (ischeckSymbols) {
        let item = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        result.innerText = item;
    }
    
})

