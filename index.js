let number1 = "";
let number2 = "";
let operator = "";

let btnSelection = document.querySelector(".btn-container");
let userDisplay = document.querySelector(".user-num");
let mainDisplay = document.querySelector(".display-num");
let input = document.createElement("p");

// inputs numbers and operators fxn

const handleNumberInput = (input) => {
  if (!number1.length) {
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
  }
};
//display updated fxns
const updateDisplay = () => {
  if (!operator.length) {
    input.textContent = number1;
    mainDisplay.appendChild(input);
  } else if (!number2.length) {
    deleteDisplay(mainDisplay);
    input.textContent = number1 + operator;
    userDisplay.append(input);
  } else {
    input.textContent = number1 + operator + number2;
  }
};

const deleteDisplay = (elem) => {
  elem.remove();
};

const btnClicks = (event) => {
  if (event.target.tagName !== "BUTTON") return;
  let userInput = event.target.value;

  handleNumberInput(userInput);
  handleOperator(userInput);
  updateDisplay();
  console.log(number1, operator, number2);
  // if (!isNaN(userInput)) {
  //   if (!number1.length) {
  //     number1 = userInput;
  //   } else if (!operator.length) {
  //     number1 += userInput;
  //   } else if (!number2.length) {
  //     number2 = userInput;
  //   } else {
  //     number2 += userInput;
  //   }
  // }
  // console.log(operator);
  // if (isNaN(userInput)) {
  //   operator = userInput;
  // }
  // if (number2 == 0) {
  //   input.textContent = number1 + operator;
  // } else {
  //   input.textContent = number1 + operator + number2;
  // }
};

btnSelection.addEventListener("click", btnClicks);

const operate = (num1, operator, num2) => {
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
