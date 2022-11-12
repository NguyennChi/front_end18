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
    let ischeckNumber = chkNumber.checked;
    let ischeckLetter = chkLetters.checked;
    let ischeckSymbols = chkSymbols.checked;


    if (ischeckNumber) {
        getCreatePass(NUMBERS);
        getMultiCreatePass(NUMBERS,6)
    }
    if (ischeckLetter) {
        getMultiCreatePass(LETTERS,6)
    }
    if (ischeckSymbols) {
        getMultiCreatePass(SYMBOLS,6)  
    }
    
})

//  lấy 1 phần tử
getCreatePass = (arr) => {
    const item = arr[Math.floor(Math.random(1, 5) * arr.length)];
    result.innerText = item;
    return;
}
// lấy nhiều phần tử
getMultiCreatePass =(arr, num)=>{
    const items = [...arr].slice(0, num).sort(() => 0.5 - Math.random());
    result.innerText = items;
    return;
  }

createPass=(charaters,length)=>{
    let result ='';
    for (let i = 0; i < length; i++) {
        const item = arr[Math.floor(Math.random(1, 5) * arr.length)];
    }

}