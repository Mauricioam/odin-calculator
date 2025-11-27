let number1 = "";
let number2 = "";
let operator = "";
let result = "";
let calcState = "";

let btnSelection = document.querySelector(".btn-container");
let userDisplay = document.querySelector(".user-num");
let mainDisplay = document.querySelector(".display-num");
let input = document.createElement("p");

// inputs numbers and operators fxn

const handleNumberInput = (input) => {
  if (!number1.length && !isNaN(input)) {
    calcState = "calc1";
    number1 = input;
  } else if (!operator.length && !isNaN(input)) {
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
//display updated fxns
const updateDisplay = () => {
  if (calcState == "calc1") {
    stateCalc1();
  }
  if (calcState == "calc2") {
    console.log("calc2");
    stateCalc2();
  }
  // if (result !== "") {
  //   console.log(result);
  //   input.textContent = result;
  // }
  // if (!operator.length) {
  //   input.textContent = number1;
  //   mainDisplay.appendChild(input);
  // } else if (!number2.length) {
  //   deleteDisplay(mainDisplay);
  //   input.textContent = number1 + operator;
  //   userDisplay.append(input);
  // } else if (number2.length) {
  //   input.textContent = number1 + operator + number2;
  // }
};

const stateCalc1 = () => {
  if (!operator.length) {
    input.textContent = number1;
    mainDisplay.appendChild(input);
  }
};

const stateCalc2 = () => {
  if (number1.length > 0 && operator.length > 0) {
    deleteDisplay(mainDisplay);
    input.textContent = number1 + operator + number2;
    userDisplay.appendChild(input);
  }
};

const deleteDisplay = (elem) => {
  elem.remove();
  console.log(elem);
};

const btnClicks = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "BUTTON") return;
  let userInput = event.target.value;

  handleNumberInput(userInput);
  handleOperator(userInput);
  updateDisplay();

  if (
    (userInput == "=") &
    (number1 !== undefined && number2 !== undefined && operator !== undefined)
  ) {
    result = operate(number1, operator, number2);
    resetValues();
  }
};

const convertToNum = (strg) => Number(strg);
const resetValues = () => {
  number1 = "";
  number2 = "";
  operator = "";
  console.log(number1, number2, operator, "reset");
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
