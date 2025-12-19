let number1 = "";
let number2 = "";
let operator = "";
let result = "";
let mustResetDisplay = false;

let btnSelection = document.querySelector(".btn-container");

let mainDisplay = document.querySelector(".display-num");
let input = document.createElement("p");

const handleNumberInput = (input) => {
  if (!number1.length) {
    number1 = input;
  } else if (number1.length && !mustResetDisplay && !operator.length) {
    number1 += input;
  } else if (number1.length && operator.length) {
    number2 += input;
  }
  updateDisplay();
};
const handleOperator = (input) => {
  if (number1.length && !number2.length && input !== "=") {
    operator = input;
  }
  updateDisplay();
};

const handleResult = (input) => {
  if (input == "=") {
    result = operate(number1, operator, number2);
    operator = "";
    number2 = "";
    mustResetDisplay = true;
  }
  if (result == "" && ["+", "-", "/", "*"].includes(input)) {
    console.log("not equal");
    result = operate(number1, operator, number2);
    operator = input;
    number2 = "";
    mustResetDisplay = true;
  }
  updateDisplay();
};

const updateDisplay = () => {
  mainDisplay.appendChild(input);
  console.log(result, number1);
  if (result !== "") {
    input.textContent = result.toString();
    return;
  }

  if (number1) {
    input.textContent = number1;
  }
  if (operator) {
    input.textContent = number1 + operator;
  }
  if (number2) {
    input.textContent = number1 + operator + number2;
  }
};

const btnClicks = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "BUTTON") return;
  let userInput = event.target.value;
  if (userInput == "clear") {
    hardResetValues();
  }
  if (number1.length && number2.length && operator.length) {
    handleResult(userInput);
  }

  if (Number(userInput)) {
    if (mustResetDisplay) {
      number1 = "";
      result = "";
      mustResetDisplay = false;
    }
    handleNumberInput(userInput);
  }
  if (!Number(userInput) && userInput !== "=") {
    if (mustResetDisplay) {
      number1 = result.toString();
      mustResetDisplay = false;
      result = "";
    }
    handleOperator(userInput);
  }
};

const convertToNum = (strg) => Number(strg);
const resetValues = () => {
  number1 = "";
  number2 = "";
  operator = "";
};

const hardResetValues = () => {
  number1 = "";
  number2 = "";
  operator = "";
  result = "";
  input.textContent = "";
};

btnSelection.addEventListener("click", btnClicks);

const operate = (num1, operator, num2) => {
  num1 = convertToNum(num1);
  num2 = convertToNum(num2);

  const add = (num1, num2) => num1 + num2;
  const substract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num1 / num2;

  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return substract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    default:
      "Error";
      break;
  }
};
