let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiPly = document.getElementById('multiPly');
let devide = document.getElementById('devide');


  function onButtonPlus() {
    let number1 = input1.value;
    let number2 = input2.value;
    let sum = Number(number1) + Number(number2);
    document.getElementById("res").innerText = sum;
  }

  function onButtonMinus() {
    let number1 = input1.value;
    let number2 = input2.value;
    let sum = Number(number1) - Number(number2);
    document.getElementById("res").innerText = sum;
  
  }
  function onButtonMultiPly() {
    let number1 = input1.value;
    let number2 = input2.value;
    let sum = Number(number1) * Number(number2);
    document.getElementById("res").innerText = sum;
  }
  function onButtonDevide() {
    let number1 = input1.value;
    let number2 = input2.value;
    let sum = Number(number1) / Number(number2);
    document.getElementById("res").innerText = sum;
  }


  plus.addEventListener('click', onButtonPlus);
  minus.addEventListener('click', onButtonMinus);
  multiPly.addEventListener('click', onButtonMultiPly);
  devide.addEventListener('click', onButtonDevide);




