let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiPly = document.getElementById('multiPly');
let devide = document.getElementById('devide');

let inpuT1 = document.getElementById('input1');
let inpuT2 = document.getElementById('input2');

let buttons = [plus, minus, multiPly, devide];


/*
function onButtonPlus() {
  let number1 = input1.value;
  let number2 = input2.value;
  let sum = Number(number1) + Number(number2);
  alert(sum);

}
function onButtonMinus() {
  let number1 = input1.value;
  let number2 = input2.value;
  let sum = Number(number1) - Number(number2);
  alert(sum);

}
function onButtonMultiPly() {
  let number1 = input1.value;
  let number2 = input2.value;
  let sum = Number(number1) * Number(number2);
  alert(sum);
}
function onButtonDevide() {
  let number1 = input1.value;
  let number2 = input2.value;
  let sum = Number(number1) / Number(number2);
  alert(sum);
}

plus.addEventListener('click', onButtonPlus);
minus.addEventListener('click', onButtonMinus);
multiPly.addEventListener('click', onButtonMultiPly);
devide.addEventListener('click', onButtonDevide);
*/

document.querySelector('#operaton-buttons').addEventListener('click', operation => {
  const id = operation.target.getAttribute('data-id');
}) 
if () {

}