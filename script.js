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

function operate(firstNum, op, lastNum) {
  console.log(firstNum);
  console.log(op);
  console.log(lastNum);
  let res = 0;
  switch (op) {
    case "+":
      res = add(firstNum, lastNum);

      break;
    case "-":
      res = subtract(firstNum, lastNum);

      break;
    case "*":
      res = multiply(firstNum, lastNum);

      break;
    case "/":
      if (lastNum === 0) {
        alert("Cannot be divided by zero");
      } else {
        res = divide(firstNum, lastNum);
      }

      break;
  }
  console.log(res);

  return res;
}

let count = 0;

function checkPeriod(input, num) {
  let ipt = input.split("");
  for (let item of ipt) {
    if (item === ".") {
      if (count === 0) {
        console.log(num);
        count++;
      } else {
        if (num === ".") {
          return "";
        } else {
          return num;
        }
      }
    }
  }
  return num;
}

function displayNum(number) {
  let checkedNumber = checkPeriod(dispResult.textContent, number);
  console.log(checkedNumber);
  if (
    dispResult.textContent === "0" ||
    dispResult.textContent === "Cannot be divided by zero"
  ) {
    if (checkedNumber === ".") {
      dispResult.textContent += checkedNumber;
      //dispResult.textContent += button.textContent;
    } else {
      dispResult.textContent = checkedNumber;
      //dispResult.textContent = button.textContent;
    }
  } else {
    dispResult.textContent += checkedNumber;
    //dispResult.textContent += button.textContent;
  }
}

function handleOperation(operator) {
  if (firstNumber === null) {
    firstNumber = Number(dispResult.textContent);
    console.log(firstNumber);
    currentOperation = operator;
  } else if (
    lastNumber === null &&
    dispResult.textContent !== "" &&
    result === null
  ) {
    lastNumber = Number(dispResult.textContent);
    console.log(firstNumber);
    console.log(lastNumber);
    firstNumber = operate(firstNumber, currentOperation, lastNumber);
    dispResult.textContent = firstNumber;
    currentOperation = operator;
    lastNumber = null;
  } else if (result !== null) {
    dispResult.textContent = result;
    currentOperation = operator;
  }
  dispResult.textContent = "";
}

function equalOperation() {
  if (firstNumber === null && lastNumber === null) {
    result = dispResult.textContent;
  } else {
    lastNumber = Number(dispResult.textContent);
    result = operate(firstNumber, currentOperation, lastNumber);
    dispResult.textContent = result;
    firstNumber = result;
    lastNumber = null;
    currentOperation = null;
  }
}

let firstNumber = null;
//let operator = null;
let lastNumber = null;
let result = null;
let currentOperation = null;
let input = 0;

let dispResult = document.querySelector("#result");
dispResult.textContent = "0";
const numContainer = document.querySelector("#numbers");
const numButtons = numContainer.querySelectorAll("button");

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayNum(button.textContent);
  });
});

const opContainer = document.querySelector("#operators");
const opButtons = opContainer.querySelectorAll("button");

opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleOperation(button.textContent);
  });
});

const equal = document.querySelector("#Equal");

equal.addEventListener("click", () => {
  equalOperation();
});

const clear = document.querySelector("#Clear");

clear.addEventListener("click", () => {
  firstNumber = null;
  currentOperation = null;
  lastNumber = null;
  dispResult.textContent = "0";
  result = null;
});

function keyboardListener() {
  window.addEventListener("keydown", function (event) {
    keyboardFunc(event.key);
  });
}

function keyboardFunc(key) {
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperation(key);
  } else if (key === ".") {
    displayNum(key);
  } else if (key === "=") {
    equalOperation();
  } else if (isNaN(Number(key))) {
    return;
  } else {
    displayNum(key);
  }
}
