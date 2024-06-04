function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

let firstNumber = 10;
const operator = "+";
let lastNumber = 0;

function operate(firstNumber, operator, lastNumber) {
  let res = 0;
  switch (operator) {
    case "+":
      res = add(firstNumber, lastNumber);

      break;
    case "-":
      res = subtract(firstNumber, lastNumber);

      break;
    case "*":
      res = multiply(firstNumber, lastNumber);

      break;
    case "/":
      res = divide(firstNumber, lastNumber);

      break;
  }
  console.log(res);
}

/*
let calc = new Calculator;

function Calculator(){
    this.operations ={
        "+" = (a,b) => a+b,
        "-" = (a,b) => a-b,
        "*" = (a,b) => a*b,
        "/" = (a,b) => a/b,
    }
}
*/
