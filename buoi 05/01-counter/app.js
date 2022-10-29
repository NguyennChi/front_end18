
let x = document.getElementById('number');
let val = parseInt(x.innerText);
let result = '';
decrease = () => {
    val -= 1;
    x.innerText = val

}
increase = () => {
    val += 1;
    x.innerText = val

}
save = () => {
    result += result + val + "/";
    console.log(num);
}