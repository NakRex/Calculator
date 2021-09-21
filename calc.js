var operand1 = "";
var operand2 = "";

function getOne() {
  let one = document.getElementById("one").value;
  let result = (document.getElementById("result").value += one);
} 

function getTwo() {
  let two = document.getElementById("two").value;
  let result = (document.getElementById("result").value += two);
}

function getThree() {
  let three = document.getElementById("three").value;
  let result = (document.getElementById("result").value += three);
}

function getFour() {
  let four = document.getElementById("four").value;
  let result = (document.getElementById("result").value += four);
}

function getFive() {
  let five = document.getElementById("five").value;
  let result = (document.getElementById("result").value += five);
}

function getSix() {
  let six = document.getElementById("six").value;
  let result = (document.getElementById("result").value += six);
}

function getSeven() {
  let seven = document.getElementById("seven").value;
  let result = (document.getElementById("result").value += seven);
}

function getEight() {
  let eight = document.getElementById("eight").value;
  let result = (document.getElementById("result").value += eight);
}

function getNine() {
  let nine = document.getElementById("nine").value;
  let result = (document.getElementById("result").value += nine);
}

function getZero() {
  let zero = document.getElementById("zero").value;
  let result = (document.getElementById("result").value += zero);
}

function clearIt() {
  document.getElementById("result").value = "";
}

function plus() {
  operand1 = document.getElementById("result").value;
  document.getElementById("result").value +=
    document.getElementById("plus").value;
}

function minus() {
  operand1 = document.getElementById("result").value;
  let minus = document.getElementById("minus").value;
  document.getElementById("result").value += minus;
}

function divide() {
  operand1 = document.getElementById("result").value;
  let divide = document.getElementById("divide").value;
  document.getElementById("result").value += divide;
}

function multiply() {
  operand1 = document.getElementById("result").value;
  let multiply = document.getElementById("multiply").value;
  document.getElementById("result").value += multiply;
}
function backspace() {
  var result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, result.length - 1);
}
function equals() {
  let result = document.getElementById("result").value;
  operand2 = result.slice(operand1.length + 1, result.length);
  let operator = result.slice(operand1.length, operand1.length + 1);
  operand1 = parseInt(operand1);
  operand2 = parseInt(operand2);
  clearIt();
  document.getElementById("result").value += solve(
    operand1,
    operand2,
    operator
  );
}

function solve(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "x":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      return "You would be good in Math.";
  }
}
