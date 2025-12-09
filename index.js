let number1 = "";
let number2 = "";
let operator = "";
let result = "";
let calcState = "";

let btnSelection = document.querySelector(".btn-container");
let userDisplay = document.querySelector(".user-num");
let mainDisplay = document.querySelector(".display-num");
let input = document.createElement("p");

const handleNumberInput = (input) => {
  if (!isNaN(input) && !number1.length) {
    calcState = "calc1";
    number1 = input;
  } else if (!operator.length && !isNaN(input) && !result.length) {
    number1 += input;
  } else if (number1.length && operator.length && !isNaN(input)) {
    number2 += input;
  }
};

const handleOperator = (input) => {
  if (number2.length) return;
  if (number1.length && isNaN(input) && input !== "=") {
    operator = input;
    calcState = "calc2";
  }
};

const handleResult = (input) => {
  if (
    (input == "=") &
    (number1 !== undefined && number2 !== undefined && operator !== undefined)
  ) {
    result = operate(number1, operator, number2);
    result = result.toString();
    number1 = result;
    resetValues();
    calcState = "result";
  }
};

const updateDisplay = () => {
  if (calcState == "calc1") {
    stateCalc1();
  }
  if (calcState == "calc2") {
    stateCalc2();
  }
  if (calcState == "result") {
    stateResult();
  }
};

const stateCalc1 = () => {
  if (!operator.length) {
    input.textContent = number1;
    mainDisplay.appendChild(input);
  }
};

const stateCalc2 = () => {
  if (number1.length > 0 && operator.length > 0) {
    input.textContent = number1 + operator + number2;
    userDisplay.appendChild(input);
  }
};

const stateResult = () => {
  if (result > 0) {
    input.textContent = result;
    mainDisplay.appendChild(input);
  }
};

const btnClicks = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "BUTTON") return;
  let userInput = event.target.value;

  if (userInput == "clear") {
    hardResetValues();
    updateDisplay();
  }

  if (userInput !== "clear") {
    handleNumberInput(userInput);
    handleOperator(userInput);
    handleResult(userInput);
    updateDisplay();
  }
};

const convertToNum = (strg) => Number(strg);
const resetValues = () => {
  number2 = "";
  operator = "";
};

const hardResetValues = () => {
  number1 = "";
  number2 = "";
  operator = "";
  calcState = "";
  input.textContent = "";
};

btnSelection.addEventListener("click", btnClicks);

const operate = (num1, operator, num2) => {
  num1 = convertToNum(num1);
  num2 = convertToNum(num2);
  calcState = "result";
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
