let number1 = "";
let number2 = "";
let operator = "";
let result = "";

let btnSelection = document.querySelector(".btn-container");

let mainDisplay = document.querySelector(".display-num");
let input = document.createElement("p");

const handleNumberInput = (input) => {
  if (!number1.length) {
    number1 = input;
  } else if (number1.length && !result.length) {
    number1 += input;
  } else if (number1.length && operator.length) {
    number2 += input;
  }
  updateDisplay();
};
const handleOperator = (input) => {
  if (number1.length && !number2.length && isNaN(input) && input !== "=") {
    operator = input;
  }
  updateDisplay();
};

const handleResult = (input) => {
  if (
    typeof result == "string" &&
    ["+", "-", "/", "*"].includes(input) &&
    number2.length &&
    input !== "="
  ) {
    result = operate(number1, operator, number2);
    number1 = result.toString();
    operator = input;
    console.log("entree");
  }
};

const updateDisplay = () => {
  mainDisplay.appendChild(input);
  if (typeof result == "string") {
    input.textContent = number1 + operator + number2;
  }
  if (typeof result == "number") {
    input.textContent = result.toString();
  }
  //   if ( == "calc1") {
  //     stateCalc1();
  //   }
  //   if ( == "calc2") {
  //     stateCalc2();
  //   }
  //   if ( == "result") {
  //     stateResult();
  //   }
};

// const stateCalc1 = () => {
//   if (!operator.length) {
//     input.textContent = number1;
//     mainDisplay.appendChild(input);
//   }
// };

// const stateCalc2 = () => {
//   if (number1.length > 0 && operator.length > 0) {
//     input.textContent = number1 + operator + number2;
//     mainDisplay.appendChild(input);
//   }
// };

// const stateResult = () => {
//   if (result > 0) {
//     input.textContent = result;
//     mainDisplay.appendChild(input);
//   }
// };

const btnClicks = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "BUTTON") return;
  let userInput = event.target.value;
  if (userInput == "clear") {
    hardResetValues();
  }

  if (Number(userInput)) {
    handleNumberInput(userInput);
  }
  if (!Number(userInput)) {
    handleOperator(userInput);
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
