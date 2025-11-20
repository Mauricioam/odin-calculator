let number1 = "";
let number2 = "";
let operator = "";

let btnSelection = document.querySelector(".btn-container");
let userDisplay = document.querySelector(".user-num");
let input = document.createElement("p");

const handleNumberInput = (input, num1, num2, operator) => {
  console.log(num1.length);
  if (!num1.length) {
    return (num1 = input);
  } else {
    return (num1 += input);
  }
};

userDisplay.appendChild(input);
const btnClicks = (event) => {
  if (event.target.tagName !== "BUTTON") return;
  let userInput = event.target.value;
  number1 = handleNumberInput(userInput, number1, number2, operator);
  console.log(number1, "aca");
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
