let btnList = document.getElementsByClassName('btn')
let boxScoreHome = document.getElementById('box-score-home')
let boxScoreAway = document.getElementById('box-score-away')

let resultHome = 0;
let resultAway = 0;

for (let i = 0; i < btnList.length; i++) {
    let number =parseInt(btnList[i].innerText);
    console.log(number);
    btnList[i].addEventListener('click', ()=>{
    
        resultAway+= number
        boxScoreAway.innerText = result < 10 ? '0' + result : result;   
    })

    // btnList[i].addEventListener('click', ()=>{
  
    // let isHome = btnList[i].classList.contains('home')
    // if (isHome ===true) {
    // resultHome += number
    // boxScoreHome.innerText = result < 10 ? '0' + result : result;   
    // } else {
    //     resultAway+= number
    //     boxScoreAway.innerText = result < 10 ? '0' + result : result; 
    // }     
    // }
}

// let btnHome1 = document.getElementById("btnHome1")
// let btnHome2 = document.getElementById("btnHome2")
// let btnHome3 = document.getElementById("btnHome3")
// let boxScoreHome = document.getElementById('box-score')
// let resultHome = 0;

// btnHome1.addEventListener('click', ()=>{
//    let number =parseInt(btnHome1.innerText);
//    resultHome += number
//    boxScore.innerText = result < 10 ? '0' + result : result;
// })
// btnHome2.addEventListener('click', ()=>{
//     let number =parseInt(btnHome2.innerText);
//     resultHome += number
//     boxScore.innerText = result < 10 ? '0' + result : result;
//  })
//  btnHome3.addEventListener('click', ()=>{
//     let number =parseInt(btnHome2.innerText);
//     resultHome += number
//     boxScore.innerText = result < 10 ? '0' + result : result;
//  })